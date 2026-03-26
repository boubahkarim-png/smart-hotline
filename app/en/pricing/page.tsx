'use client'
import Link from 'next/link'
import { useGeo } from '@//hooks/useGeo'
import { StarIcon, CheckIcon } from '@/components/Icons'

const TIERS = [
  { name: 'Starter', desc: 'To get started', badge: null },
  { name: 'Pro', desc: 'To grow', badge: 'Popular' },
  { name: 'Business', desc: 'To scale', badge: 'Best Value' },
]

export default function Pricing() {
  const { prices, loading } = useGeo()
  const sym = prices.symbol
  const fmt = (n: number) => loading ? '...' : `${sym}${n}`

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 animate-slide-left">
              <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
                Transparent Pricing
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-slate-900">
                Prices That<br/>
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">Respect Your Growth</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                No hidden fees. No surprises. Three clear packages, adapted to your country.
              </p>
              <div className="flex flex-wrap gap-3">
                {['No commitment', 'Cancel anytime', '2-week trial', 'FR/EN Support'].map((b, i) => (
                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+1)*100}`}>
                    <CheckIcon className="w-5 h-5 text-green-600" /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate-slide-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
                <img src="/smart-hotline-last/images/pricing-hero.png" alt="Smart Hotline Pricing" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'450px', objectFit:'cover'}}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTBOUND CALLS */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              📞 Outbound Calls
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Appointment Setting</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Dedicated agents for your outreach campaigns. Billed by the hour.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {/* Trial Card */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 w-64 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">Trial</span>
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2 text-center">Discovery</h3>
              <p className="text-slate-500 text-sm mb-4 text-center">20h/week, 2 weeks</p>
              <div className="text-center mb-2">
                <span className="text-4xl font-black text-amber-600">{fmt(prices.outbound_trial)}</span>
                <span className="text-slate-500">/hour</span>
              </div>
              <p className="text-amber-700 text-xs text-center font-semibold bg-amber-100 rounded-lg p-2 mb-4">
                OR: 1 week free
              </p>
              <Link href="/en/contact?service=outbound&plan=trial" className="block text-center py-2.5 px-4 rounded-xl font-bold bg-amber-500 text-white hover:bg-amber-600">
                Try Now
              </Link>
            </div>
            {/* Regular Tiers */}
            {[
              { name: 'Starter', hours: '20h/week', i: 0 },
              { name: 'Pro', hours: '40h/week', i: 1 },
              { name: 'Business', hours: '80h/week', i: 2, popular: true },
              { name: 'Premium', hours: '120h/week', i: 3 },
              { name: 'Enterprise', hours: 'Unlimited', i: 4 },
            ].map(tier => (
              <div key={tier.name} className={`bg-white rounded-2xl p-6 w-64 relative ${tier.popular ? 'border-2 border-emerald-500 shadow-2xl scale-105' : 'border border-slate-200 shadow-lg'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">Popular</span>
                  </div>
                )}
                <h3 className="font-bold text-xl text-slate-900 mb-2 text-center">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-4 text-center">{tier.hours}</p>
                <div className="text-center mb-4">
                  <span className="text-3xl font-black text-emerald-600">{fmt(prices.outbound[tier.i])}</span>
                  <span className="text-slate-500">/hour</span>
                </div>
                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-center gap-2 text-slate-600">
                    <CheckIcon className="w-4 h-4 text-emerald-600" /> Dedicated agent
                  </li>
                  <li className="flex items-center gap-2 text-slate-600">
                    <CheckIcon className="w-4 h-4 text-emerald-600" /> Custom scripts
                  </li>
                  <li className="flex items-center gap-2 text-slate-600">
                    <CheckIcon className="w-4 h-4 text-emerald-600" /> Daily reports
                  </li>
                  {tier.i > 0 && (
                    <li className="flex items-center gap-2 text-slate-600">
                      <CheckIcon className="w-4 h-4 text-emerald-600" /> CRM integration
                    </li>
                  )}
                </ul>
                <Link href={`/en/contact?service=outbound&plan=${tier.name.toLowerCase()}`} className={`block text-center py-2.5 px-4 rounded-xl font-bold transition-all ${tier.popular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50'}`}>
                  Choose
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI VOICE AGENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              🤖 AI Voice Agents
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Sophie, Your AI Receptionist</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Response in under 2 seconds. Native English/French. Transfer to human when needed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TIERS.map((tier, i) => (
              <div key={tier.name} className={`relative bg-white rounded-2xl p-8 ${tier.badge === 'Popular' ? 'border-2 border-violet-500 shadow-2xl scale-105' : 'border border-slate-200 shadow-lg'}`}>
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={`text-white text-xs font-bold px-4 py-1.5 rounded-full ${tier.badge === 'Popular' ? 'bg-violet-600' : 'bg-sky-600'}`}>{tier.badge}</span>
                  </div>
                )}
                <h3 className="font-black text-2xl text-slate-900 mb-1">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{tier.desc}</p>
                <div className="mb-2">
                  <span className="text-4xl font-black text-violet-600">{fmt(prices.ai_monthly[i])}</span>
                  <span className="text-slate-400 text-lg">/month</span>
                </div>
                <p className="text-slate-600 font-semibold mb-6">{loading ? '...' : `${prices.ai_minutes[i].toLocaleString()} minutes included`}</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Response < 2 seconds',
                    'Native English/French',
                    'Message taking',
                    'Appointment booking',
                    'Transfer to human',
                    i > 0 ? 'CRM integration' : null,
                    i > 1 ? '99.9% SLA' : null,
                  ].filter(Boolean).map(f => (
                    <li key={f} className="flex items-center gap-3 text-slate-700">
                      <CheckIcon className="w-5 h-5 text-violet-600 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/en/contact?service=ai&plan=${tier.name.toLowerCase()}`} className={`block text-center py-3.5 px-6 rounded-xl font-bold transition-all ${tier.badge === 'Popular' ? 'bg-violet-600 text-white hover:bg-violet-700' : 'border-2 border-violet-600 text-violet-600 hover:bg-violet-50'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-8">
            Additional minutes: <span className="font-semibold">{fmt(prices.ai_per_min[0])}/min</span> (Starter), <span className="font-semibold">{fmt(prices.ai_per_min[1])}/min</span> (Pro), <span className="font-semibold">{fmt(prices.ai_per_min[2])}/min</span> (Business)
          </p>
        </div>
      </section>

      {/* INBOUND RECEPTION */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              📞 24/7 Reception
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Inbound Calls</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Professional bilingual agents. Zero missed calls.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TIERS.map((tier, i) => (
              <div key={tier.name} className={`relative bg-white rounded-2xl p-8 ${tier.badge === 'Popular' ? 'border-2 border-sky-500 shadow-2xl scale-105' : 'border border-slate-200 shadow-lg'}`}>
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={`text-white text-xs font-bold px-4 py-1.5 rounded-full ${tier.badge === 'Popular' ? 'bg-sky-600' : 'bg-emerald-600'}`}>{tier.badge}</span>
                  </div>
                )}
                <h3 className="font-black text-2xl text-slate-900 mb-1">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{tier.desc}</p>
                <div className="mb-2">
                  <span className="text-4xl font-black text-sky-600">{fmt(prices.inbound[i])}</span>
                  <span className="text-slate-400 text-lg">/month</span>
                </div>
                <p className="text-slate-600 font-semibold mb-6">{loading ? '...' : `${prices.inbound_calls[i]} calls/month included`}</p>
                <ul className="space-y-3 mb-8">
                  {[
                    '24/7 reception',
                    'Bilingual FR/EN',
                    'Under 3 rings',
                    'Real-time messages',
                    'Dedicated agent',
                    i > 0 ? 'Weekly report' : null,
                    i > 1 ? '99.9% SLA' : null,
                  ].filter(Boolean).map(f => (
                    <li key={f} className="flex items-center gap-3 text-slate-700">
                      <CheckIcon className="w-5 h-5 text-sky-600 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/en/contact?service=reception&plan=${tier.name.toLowerCase()}`} className={`block text-center py-3.5 px-6 rounded-xl font-bold transition-all ${tier.badge === 'Popular' ? 'bg-sky-600 text-white hover:bg-sky-700' : 'border-2 border-sky-600 text-sky-600 hover:bg-sky-50'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-8">
            Additional calls: <span className="font-semibold">{fmt(prices.inbound_per_call[0])}/call</span> (Starter), <span className="font-semibold">{fmt(prices.inbound_per_call[1])}/call</span> (Pro), <span className="font-semibold">{fmt(prices.inbound_per_call[2])}/call</span> (Business)
          </p>
        </div>
      </section>

      {/* CRM INTEGRATION - Monthly only, no setup fee */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              📊 CRM & Lists
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">SuiteCRM + B2B Lists</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Integrated CRM + qualified prospecting lists. Free setup included.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TIERS.map((tier, i) => (
              <div key={tier.name} className={`relative bg-white rounded-2xl p-8 ${tier.badge === 'Popular' ? 'border-2 border-purple-500 shadow-2xl scale-105' : 'border border-slate-200 shadow-lg'}`}>
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={`text-white text-xs font-bold px-4 py-1.5 rounded-full ${tier.badge === 'Popular' ? 'bg-purple-600' : 'bg-sky-600'}`}>{tier.badge}</span>
                  </div>
                )}
                <h3 className="font-black text-2xl text-slate-900 mb-1">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{tier.desc}</p>
                <div className="mb-2">
                  <span className="text-4xl font-black text-purple-600">{fmt(prices.crm_monthly[i])}</span>
                  <span className="text-slate-400 text-lg">/month</span>
                </div>
                <p className="text-slate-600 font-semibold mb-1">{loading ? '...' : `${prices.crm_contacts[i].toLocaleString()} contacts included`}</p>
                <p className="text-emerald-600 text-sm font-semibold mb-6">✓ Free setup</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'SuiteCRM hosted',
                    'Training included',
                    'FR dedicated support',
                    'Data import',
                    i > 0 ? 'B2B/B2C lists' : null,
                    i > 0 ? 'Automations' : null,
                    i > 1 ? 'Full API' : null,
                    i > 1 ? 'Custom integrations' : null,
                  ].filter(Boolean).map(f => (
                    <li key={f} className="flex items-center gap-3 text-slate-700">
                      <CheckIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/en/contact?service=crm&plan=${tier.name.toLowerCase()}`} className={`block text-center py-3.5 px-6 rounded-xl font-bold transition-all ${tier.badge === 'Popular' ? 'bg-purple-600 text-white hover:bg-purple-700' : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-500">Everything you need to know</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is there a minimum commitment?', a: 'No, zero commitment. You can cancel with 7 days notice. We prefer to keep you because it works, not because you\'re stuck.' },
              { q: 'How does the free trial work?', a: '2 weeks at our entry rate. No credit card needed. If it\'s not for you, just say goodbye — no hard feelings.' },
              { q: 'Can I switch plans?', a: 'Yes, anytime. Up or down. Billing adjusts pro-rata. If you grow, we grow with you.' },
              { q: 'What accents are available?', a: 'US (standard and regional), Canadian, British, Australian. For AI, it\'s configurable. For human agents, we match someone who fits your clientele.' },
              { q: 'Is my data secure?', a: 'Hosting in Canada (and EU for European clients). End-to-end encryption. GDPR compliant. We don\'t sell anything, don\'t share anything.' },
              { q: 'How long to get started?', a: 'Usually 48h. If you give us your scripts today, we could be live tomorrow. The longest part is often making the decision.' },
            ].map(({ q, a }, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-white transition-colors">
                  <span className="font-semibold text-slate-900 pr-4">{q}</span>
                  <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Not sure which plan to choose?</h2>
          <p className="text-sky-200 text-lg mb-8 max-w-2xl mx-auto">Free 30-minute consultation. We analyze your needs and recommend the best option.</p>
          <Link href="/en/contact" className="inline-block bg-white text-sky-700 font-bold px-10 py-4 rounded-2xl hover:bg-sky-50 transition-colors shadow-xl">
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
