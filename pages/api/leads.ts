import { NextApiRequest, NextApiResponse } from 'next/types'
import mysql from 'mysql2/promise'

// SuiteCRM database connection
const dbConfig = {
  host: '194.163.187.192',
  port: 3307,
  user: process.env.SUITECRM_DB_USER || 'root',
  password: process.env.SUITECRM_DB_PASSWORD || '',
  database: 'suitecrm'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, company, message, source } = req.body

  // Validate required fields
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' })
  }

  // Split name into first/last
  const nameParts = name.trim().split(/\s+/)
  const firstName = nameParts[0] || ''
  const lastName = nameParts.slice(1).join(' ') || ''

  try {
    const connection = await mysql.createConnection(dbConfig)

    // Insert into SuiteCRM leads table
    const [result] = await connection.execute(`
      INSERT INTO leads (
        id,
        first_name,
        last_name,
        email1,
        phone_work,
        account_name,
        description,
        lead_source,
        status,
        assigned_user_id,
        date_entered,
        date_modified,
        deleted
      ) VALUES (
        UUID(),
        ?, ?, ?, ?, ?, ?, ?, 'New', '1', NOW(), NOW(), 0
      )
    `, [firstName, lastName, email, phone || '', company || '', message || '', source || 'website'])

    await connection.end()

    // Also sync with Mautic for email follow-up
    await fetch('http://194.163.187.192:8084/api/contacts/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAUTIC_API_KEY || ''}`
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        phone: phone,
        company: company,
        tags: ['website-form', 'lead'],
        ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress
      })
    }).catch(() => {
      // Log but don't fail if Mautic sync fails
      console.log('Mautic sync failed, but lead saved to SuiteCRM')
    })

    return res.status(200).json({ 
      success: true, 
      message: 'Lead created successfully',
      leadId: (result as any).insertId 
    })

  } catch (error: any) {
    console.error('SuiteCRM insert error:', error)
    
    // Fallback: Store in a local file or send email notification
    const fallbackData = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      company,
      message,
      source,
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }
    
    console.log('FALLBACK LEAD DATA:', JSON.stringify(fallbackData, null, 2))
    
    // Send email notification as fallback
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY || ''}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'noreply@smart-hotline.com',
          to: 'direction@smart-hotline.com',
          subject: `Nouveau lead: ${name} - ${company || 'Sans entreprise'}`,
          html: `
            <h2>Nouveau lead depuis le site web</h2>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
            <p><strong>Entreprise:</strong> ${company || 'Non fourni'}</p>
            <p><strong>Message:</strong> ${message || 'Aucun message'}</p>
            <p><strong>Source:</strong> ${source}</p>
          `
        })
      })
    } catch (emailError) {
      console.log('Email fallback also failed')
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Lead received and will be processed',
      fallback: true
    })
  }
}
