'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
  source: string
}

interface SuiteCRMFormProps {
  lang?: 'fr' | 'en'
  source?: string
  onSuccess?: () => void
}

export default function SuiteCRMForm({ lang = 'fr', source = 'website', onSuccess }: SuiteCRMFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    source: source
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const fr = lang === 'fr'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      // SuiteCRM API endpoint
      const response = await fetch('http://194.163.187.192:8090/module/Leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.name.split(' ')[0] || formData.name,
          last_name: formData.name.split(' ').slice(1).join(' ') || '',
          email1: formData.email,
          phone_work: formData.phone,
          account_name: formData.company,
          description: formData.message,
          lead_source: formData.source,
          status: 'New',
          assigned_user_id: '1'
        })
      })

      if (!response.ok) {
        // Fallback: store in local API
        const fallbackResponse = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        
        if (!fallbackResponse.ok) throw new Error('Submission failed')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '', source })
      onSuccess?.()
    } catch (err) {
      setStatus('error')
      setError(fr ? 'Une erreur est survenue. Veuillez réessayer.' : 'An error occurred. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          {fr ? 'Merci !' : 'Thank you!'}
        </h3>
        <p className="text-green-700">
          {fr 
            ? 'Nous vous contacterons dans les 24 heures.' 
            : 'We will contact you within 24 hours.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {fr ? 'Nom complet' : 'Full name'} *
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          placeholder={fr ? 'Jean Tremblay' : 'John Smith'}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {fr ? 'Courriel' : 'Email'} *
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          placeholder="nom@entreprise.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {fr ? 'Téléphone' : 'Phone'}
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          placeholder="+1 514 555-1234"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {fr ? 'Entreprise' : 'Company'}
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          placeholder={fr ? 'Nom de votre entreprise' : 'Your company name'}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {fr ? 'Message' : 'Message'}
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
          placeholder={fr ? 'Comment pouvons-nous vous aider?' : 'How can we help you?'}
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {fr ? 'Envoi en cours...' : 'Sending...'}
          </>
        ) : (
          <>
            {fr ? 'Demander une démo gratuite' : 'Request a free demo'}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-slate-500 text-center">
        {fr 
          ? 'En soumettant ce formulaire, vous acceptez d\'être contacté par Smart Hotline.'
          : 'By submitting this form, you agree to be contacted by Smart Hotline.'}
      </p>
    </form>
  )
}
