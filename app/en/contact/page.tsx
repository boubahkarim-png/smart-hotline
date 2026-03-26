'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'

export default function EnContact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError('')
    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || '',
      company: formData.get('company') || '',
      service: formData.get('service') || '',
      volume: formData.get('volume') || '',
      message: formData.get('message') || '',
      source: 'contact-form-en',
      language: 'en'
    }

    try {
      const response = await fetch('http://194.163.187.192:3002/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSent(true)
      } else {
        const subject = encodeURIComponent(`Contact Request - ${data.name}`)
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany: ${data.company}\nService: ${data.service}\nVolume: ${data.volume}\n\nMessage:\n${data.message}`
        )
        window.location.href = `mailto:direction@smart-hotline.com?subject=${subject}&body=${body}`
        setSent(true)
      }
    } catch (err) {
      const subject = encodeURIComponent(`Contact Request - ${data.name}`)
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany: ${data.company}\nService: ${data.service}\nVolume: ${data.volume}\n\nMessage:\n${data.message}`
      )
      window.location.href = `mailto:direction@smart-hotline.com?subject=${subject}&body=${body}`
      setSent(true)
    }

    setSending(false)
  }

  return (
    <>
      {/* Section 1: Hero - DARK */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black mb-3">Contact Us</h1>
          <p className="text-blue-200 text-lg">Free consultation — response within 2h</p>
        </div>
      </section>

      {/* Section 2: Contact Form - LIGHT */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6">Our Contact Info</h2>
              <div className="space-y-4">
                {showPhone && (
                  <a href={'tel:' + CONTACT.phone}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold text-slate-900">{CONTACT.phoneDisplay}</p>
                      <p className="text-slate-500 text-sm">Canada & USA — Mon-Fri 9am-6pm</p>
                    </div>
                  </a>
                )}
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-green-200 hover:shadow-md transition-all">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-semibold text-slate-900">WhatsApp</p>
                    <p className="text-slate-500 text-sm">24/7 — Immediate response</p>
                  </div>
                </a>
                <a href={'mailto:' + CONTACT.email}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold text-slate-900">{CONTACT.email}</p>
                    <p className="text-slate-500 text-sm">Response within 2h</p>
                  </div>
                </a>
                <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                  <span className="text-2xl">📅</span>
                  <div>
                    <p className="font-semibold text-slate-900">Book 30 min</p>
                    <p className="text-slate-500 text-sm">Free consultation</p>
                  </div>
                </a>
              </div>

              {/* Why contact */}
              <div className="mt-8 bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-bold text-slate-900 mb-3">What You Get</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {['Needs analysis (30 min)', 'Personalized recommendation', 'Detailed quote within 24h', 'No commitment'].map(i => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500 font-bold">✓</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-black text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700 text-lg">We will respond within 2h.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8"
                >
                  <h2 className="text-2xl font-black text-slate-900 mb-6">Send Us a Message</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {[
                      { name: 'name', label: 'Full Name *', type: 'text', required: true },
                      { name: 'email', label: 'Email *', type: 'email', required: true },
                      { name: 'phone', label: 'Phone', type: 'tel', required: false },
                      { name: 'company', label: 'Company', type: 'text', required: false },
                    ].map(({ name, label, type, required }) => (
                      <div key={name}>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
                        <input
                          type={type}
                          name={name}
                          required={required}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Needed</label>
                    <select
                      name="service"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-slate-50"
                    >
                      <option value="">Select...</option>
                      <option>Inbound Calls</option>
                      <option>Outbound Calls</option>
                      <option>Voice AI Agents</option>
                      <option>Customer Support</option>
                      <option>CRM & Lists</option>
                      <option>Trial Offer</option>
                      <option>Custom</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Estimated Call Volume</label>
                    <select
                      name="volume"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-slate-50"
                    >
                      <option value="">Select...</option>
                      <option>Less than 100 calls/month</option>
                      <option>100 – 500 calls/month</option>
                      <option>500 – 2,000 calls/month</option>
                      <option>More than 2,000 calls/month</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-900 bg-slate-50"
                      placeholder="Describe your needs, schedule, industry..."
                    />
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600"/>
                      <span className="text-sm text-slate-600">
                        I accept the processing of my data in accordance with the{' '}
                        <Link href="/en/privacy" className="text-blue-600 underline">privacy policy</Link>.
                      </span>
                    </label>
                  </div>

                  {error && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-blue-700 text-white font-black py-4 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50 text-lg shadow-lg"
                  >
                    {sending ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Work With Us - LIGHT */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-4">Why Businesses Choose Us</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            We've been in your shoes. Our team knows what it takes to run a call center that actually performs — no fluff, just results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Real People, Real Answers</h3>
              <p className="text-slate-600">
                When you call, you get a human — not a menu. Our team answers in under 3 rings and actually knows what they're talking about.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Built for Your Industry</h3>
              <p className="text-slate-600">
                Healthcare, real estate, insurance, tech — we've handled it all. Your agents learn your scripts, your objections, your customers.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">
                Daily summaries, call recordings, conversion tracking — you see everything. No hidden metrics, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Locations & Hours - LIGHT */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-4">Where to Find Us</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            We operate across North America with teams covering multiple time zones. Here's where we hang our hats.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-2xl mb-3">🇨🇦</div>
              <h3 className="font-bold text-slate-900 mb-2">Montreal, QC</h3>
              <p className="text-slate-600 text-sm mb-2">Headquarters — Operations & Sales</p>
              <p className="text-slate-500 text-sm">Mon-Fri: 9am - 6pm EST</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-2xl mb-3">🇺🇸</div>
              <h3 className="font-bold text-slate-900 mb-2">Los Angeles, CA</h3>
              <p className="text-slate-600 text-sm mb-2">West Coast Coverage</p>
              <p className="text-slate-500 text-sm">Mon-Fri: 6am - 3pm PST</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-2xl mb-3">🌍</div>
              <h3 className="font-bold text-slate-900 mb-2">Remote Teams</h3>
              <p className="text-slate-600 text-sm mb-2">24/7 Coverage Available</p>
              <p className="text-slate-500 text-sm">Ask about night & weekend shifts</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-600">
              Not sure which location works for you? <span className="font-semibold">Just reach out</span> — we'll figure it out together.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: FAQ - LIGHT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-4">Questions You Might Have</h2>
          <p className="text-slate-600 text-center mb-12">We get these a lot — here's the straight answers.</p>

          <div className="space-y-4">
            <details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer">
                <span className="font-semibold text-slate-900">How fast can you start handling my calls?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 text-slate-600">
                Usually 3-5 business days. We need time to train agents on your scripts and set up your call flows. Rush jobs? We can sometimes do 24-48 hours.
              </div>
            </details>

            <details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer">
                <span className="font-semibold text-slate-900">Do I need to sign a long contract?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 text-slate-600">
                Nope. Month-to-month for most clients. We earn your business every month — no locking you into something that's not working.
              </div>
            </details>

            <details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer">
                <span className="font-semibold text-slate-900">Can I listen to the calls?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 text-slate-600">
                Absolutely. Every call is recorded and available in your dashboard. You can review, download, or share with your team anytime.
              </div>
            </details>

            <details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer">
                <span className="font-semibold text-slate-900">What if I already have a CRM?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 text-slate-600">
                We play nice with others. Salesforce, HubSpot, Zoho, custom systems — we've integrated with them all. Your data goes where you need it.
              </div>
            </details>

            <details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer">
                <span className="font-semibold text-slate-900">What languages do you support?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 text-slate-600">
                English, French, Spanish are our main ones. We can source agents for other languages too — just ask.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials - LIGHT */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 text-center mb-12">Don't just take our word for it — here's what folks we work with have told us.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">★★★★★</div>
              <p className="text-slate-700 mb-4">
                "We were drowning in missed calls. Smart Hotline stepped in and within two weeks our appointment bookings jumped 40%. They actually care about getting it right."
              </p>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">Sarah Chen</p>
                <p className="text-slate-500 text-sm">Clinic Director, Montreal</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">★★★★★</div>
              <p className="text-slate-700 mb-4">
                "Tried three other call centers before these guys. Only ones who actually learned our product. Our customers can't tell they're not in-house."
              </p>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">Marcus Williams</p>
                <p className="text-slate-500 text-sm">Founder, InsureTech Startup</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">★★★★★</div>
              <p className="text-slate-700 mb-4">
                "The reports they send are actually useful. I can see exactly what's working and what's not. No more guessing if our call strategy is paying off."
              </p>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">Patrice Lavoie</p>
                <p className="text-slate-500 text-sm">Operations Manager, Real Estate Firm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA Guarantee - DARK */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">The No-Risk Promise</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            We're confident you'll see results. That's why your first 2 weeks are completely commitment-free — if it's not working, you walk away, no questions asked.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-white text-slate-900 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
              Book Your Free Consultation
            </a>
            <a href={'mailto:' + CONTACT.email}
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-slate-900 transition-colors">
              Email Us Instead
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <span className="flex items-center gap-2">✓ No setup fees</span>
            <span className="flex items-center gap-2">✓ No long contract</span>
            <span className="flex items-center gap-2">✓ Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Section 8: Trust & Final Message - LIGHT */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Ready to Stop Missing Calls?</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Every missed call is a missed opportunity. Let's make sure your customers always reach a real person — even when you can't pick up.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center p-4">
              <div className="text-3xl font-black text-blue-700">500+</div>
              <p className="text-slate-600 text-sm">Businesses Served</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-black text-blue-700">2M+</div>
              <p className="text-slate-600 text-sm">Calls Handled</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-black text-blue-700">98%</div>
              <p className="text-slate-600 text-sm">Satisfaction Rate</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-black text-blue-700">10+</div>
              <p className="text-slate-600 text-sm">Years Experience</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-slate-400 text-sm">Trusted by teams at</span>
            <span className="text-slate-600 font-semibold">Various Canadian SMBs</span>
            <span className="text-slate-600 font-semibold">US Healthcare Groups</span>
            <span className="text-slate-600 font-semibold">Tech Startups</span>
          </div>
        </div>
      </section>
    </>
  )
}
