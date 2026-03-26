'use client'

import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { StarIcon, CheckIcon } from '@/components/Icons'

const TIERS = [
  { name: 'Starter', desc: 'Pour débuter', badge: null },
  { name: 'Pro', desc: 'Pour croître', badge: 'Populaire' },
  { name: 'Business', desc: 'Pour scaler', badge: 'Meilleure Valeur' },
]

export default function Tarifs() {
  const { prices, loading } = useGeo()
  const sym = prices.symbol

  const fmt = (n: number) => loading ? '...' : `${sym}${n}`

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900 py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-slow-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-slow-float"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 animate-slide-left">
              <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
                Tarifs Transparents
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-slate-900">
                Des Prix Qui<br/>
                <span className="animated-gradient-text">Respectent Votre Croissance</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed word-reveal">
                Pas de frais cachés. Pas de surprise. Trois forfaits clairs, adaptés à votre pays.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Sans engagement', 'Annulez quand vous voulez', 'Essai 2 semaines', 'Support FR/EN'].map((b, i) => (
                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md pricing-slide-up pricing-delay-${i+1}`}>
                    <CheckIcon className="w-5 h-5 text-green-600" /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate-slide-right">
              <div className="relative float-card">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl blur-2xl opacity-30"></div>
                <img src="/smart-hotline-last/images/pricing-hero.png" alt="Tarifs Smart Hotline" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'450px', objectFit:'cover'}}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTBOUND CALLS */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pricing-slide-up">
            <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 animate-slow-float">
              📞 Appels Sortants
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Prospection Téléphonique</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Agents dédiés pour vos campagnes de prise de rendez-vous. Facturation à l'heure.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {/* Trial Card */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 w-64 relative pricing-card-hover pricing-slide-left pricing-delay-1">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full animate-slow-float">Essai</span>
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2 text-center">Découverte</h3>
              <p className="text-slate-500 text-sm mb-4 text-center">20h/semaine, 2 semaines</p>
              <div className="text-center mb-2">
                <span className="text-4xl font-black text-amber-600 price-number">{fmt(prices.outbound_trial)}</span>
                <span className="text-slate-500">/heure</span>
              </div>
              <p className="text-amber-700 text-xs text-center font-semibold bg-amber-100 rounded-lg p-2 mb-4">
                OU: 1 semaine gratuite
              </p>
              <Link href="/fr/contact?service=outbound&plan=trial" className="block text-center py-2.5 px-4 rounded-xl font-bold bg-amber-500 text-white hover:bg-amber-600 btn-ripple">
                Essayer
              </Link>
            </div>
            {/* Regular Tiers */}
            {[
              { name: 'Starter', hours: '20h/semaine', i: 0 },
              { name: 'Pro', hours: '40h/semaine', i: 1 },
              { name: 'Business', hours: '80h/semaine', i: 2, popular: true },
              { name: 'Premium', hours: '120h/semaine', i: 3 },
              { name: 'Enterprise', hours: 'Illimité', i: 4 },
            ].map((tier, idx) => (
              <div key={tier.name} className={`bg-white rounded-2xl p-6 w-64 relative pricing-card-hover ${tier.popular ? 'border-2 border-emerald-500 shadow-2xl' : 'border border-slate-200 shadow-lg'} pricing-slide-up pricing-delay-${idx + 2}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full animate-glow-pulse">Populaire</span>
                  </div>
                )}
                <h3 className="font-bold text-xl text-slate-900 mb-2 text-center">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-4 text-center">{tier.hours}</p>
                <div className="text-center mb-4">
                  <span className={`text-3xl font-black text-emerald-600 ${tier.popular ? 'price-glow' : ''}`}>{fmt(prices.outbound[tier.i])}</span>
                  <span className="text-slate-500">/heure</span>
                </div>
                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-center gap-2 text-slate-600">
                    <CheckIcon className="w-4 h-4 text-emerald-600" /> Agent dédié
                  </li>
                  <li className="flex items-center gap-2 text-slate-600">
                    <CheckIcon className="w-4 h-4 text-emerald-600" /> Scripts personnalisés
                  </li>
                  <li className="flex items-center gap-2 text-slate-600">
                    <CheckIcon className="w-4 h-4 text-emerald-600" /> Rapports quotidiens
                  </li>
                  {tier.i > 0 && (
                    <li className="flex items-center gap-2 text-slate-600">
                      <CheckIcon className="w-4 h-4 text-emerald-600" /> CRM intégré
                    </li>
                  )}
                </ul>
                <Link href={`/fr/contact?service=outbound&plan=${tier.name.toLowerCase()}`} className={`block text-center py-2.5 px-4 rounded-xl font-bold transition-all ${tier.popular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50'}`}>
                  Choisir
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI VOICE AGENTS */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pricing-slide-up">
            <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 animate-slow-float">
              🤖 Agents IA Vocaux
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Sophie, Votre Réceptionniste IA</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Réponse en moins de 2 secondes. Français natif. Transfert vers humain si nécessaire.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TIERS.map((tier, i) => (
              <div key={tier.name} className={`relative bg-white rounded-2xl p-8 pricing-card-hover ${tier.badge === 'Populaire' ? 'border-2 border-violet-500 shadow-2xl' : 'border border-slate-200 shadow-lg'} pricing-bounce pricing-delay-${i + 1}`}>
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={`text-white text-xs font-bold px-4 py-1.5 rounded-full animate-glow-pulse ${tier.badge === 'Populaire' ? 'bg-violet-600' : 'bg-sky-600'}`}>{tier.badge}</span>
                  </div>
                )}
                <h3 className="font-black text-2xl text-slate-900 mb-1">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{tier.desc}</p>
                <div className="mb-2">
                  <span className={`text-4xl font-black text-violet-600 price-number ${tier.badge === 'Populaire' ? 'price-glow' : ''}`}>{fmt(prices.ai_monthly[i])}</span>
                  <span className="text-slate-400 text-lg">/mois</span>
                </div>
                <p className="text-slate-600 font-semibold mb-6">{loading ? '...' : `${prices.ai_minutes[i].toLocaleString()} minutes incluses`}</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Réponse < 2 secondes',
                    'Français natif (Québec/France)',
                    'Prise de messages',
                    'Prise de rendez-vous',
                    'Transfert vers humain',
                    i > 0 ? 'Intégration CRM' : null,
                    i > 1 ? 'SLA 99.9%' : null,
                  ].filter(Boolean).map(f => (
                    <li key={f} className="flex items-center gap-3 text-slate-700">
                      <CheckIcon className="w-5 h-5 text-violet-600 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/fr/contact?service=ia&plan=${tier.name.toLowerCase()}`} className={`block text-center py-3.5 px-6 rounded-xl font-bold transition-all btn-ripple ${tier.badge === 'Populaire' ? 'bg-violet-600 text-white hover:bg-violet-700' : 'border-2 border-violet-600 text-violet-600 hover:bg-violet-50'}`}>
                  Commencer
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-8 word-reveal">
            Minutes supplémentaires : <span className="font-semibold">{fmt(prices.ai_per_min[0])}/min</span> (Starter), <span className="font-semibold">{fmt(prices.ai_per_min[1])}/min</span> (Pro), <span className="font-semibold">{fmt(prices.ai_per_min[2])}/min</span> (Business)
          </p>
        </div>
      </section>

      {/* INBOUND RECEPTION */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pricing-slide-up">
            <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 animate-slow-float">
              📞 Réception 24/7
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Appels Entrants</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Conseillers professionnels bilingues. Zéro appel manqué.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TIERS.map((tier, i) => (
              <div key={tier.name} className={`relative bg-white rounded-2xl p-8 pricing-card-hover ${tier.badge === 'Populaire' ? 'border-2 border-sky-500 shadow-2xl' : 'border border-slate-200 shadow-lg'} ${i === 0 ? 'pricing-slide-left' : i === 2 ? 'pricing-slide-right' : 'pricing-slide-up'} pricing-delay-${i + 1}`}>
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={`text-white text-xs font-bold px-4 py-1.5 rounded-full animate-glow-pulse ${tier.badge === 'Populaire' ? 'bg-sky-600' : 'bg-emerald-600'}`}>{tier.badge}</span>
                  </div>
                )}
                <h3 className="font-black text-2xl text-slate-900 mb-1">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{tier.desc}</p>
                <div className="mb-2">
                  <span className={`text-4xl font-black text-sky-600 price-number ${tier.badge === 'Populaire' ? 'price-glow' : ''}`}>{fmt(prices.inbound[i])}</span>
                  <span className="text-slate-400 text-lg">/mois</span>
                </div>
                <p className="text-slate-600 font-semibold mb-6">{loading ? '...' : `${prices.inbound_calls[i]} appels/mois inclus`}</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Réception 24/7',
                    'Bilingue FR/EN',
                    'Moins de 3 sonneries',
                    'Messages temps réel',
                    'Conseiller dédié',
                    i > 0 ? 'Rapport hebdomadaire' : null,
                    i > 1 ? 'SLA 99.9%' : null,
                  ].filter(Boolean).map(f => (
                    <li key={f} className="flex items-center gap-3 text-slate-700">
                      <CheckIcon className="w-5 h-5 text-sky-600 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/fr/contact?service=reception&plan=${tier.name.toLowerCase()}`} className={`block text-center py-3.5 px-6 rounded-xl font-bold transition-all btn-ripple ${tier.badge === 'Populaire' ? 'bg-sky-600 text-white hover:bg-sky-700' : 'border-2 border-sky-600 text-sky-600 hover:bg-sky-50'}`}>
                  Commencer
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-8 word-reveal">
            Appels supplémentaires : <span className="font-semibold">{fmt(prices.inbound_per_call[0])}/appel</span> (Starter), <span className="font-semibold">{fmt(prices.inbound_per_call[1])}/appel</span> (Pro), <span className="font-semibold">{fmt(prices.inbound_per_call[2])}/appel</span> (Business)
          </p>
        </div>
      </section>

      {/* CRM INTEGRATION */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pricing-slide-up">
            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 animate-slow-float">
              📊 CRM & Listes
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">SuiteCRM + Listes B2B</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">CRM intégré + listes de prospection qualifiées. Setup gratuit inclus.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TIERS.map((tier, i) => (
              <div key={tier.name} className={`relative bg-white rounded-2xl p-8 pricing-card-hover ${tier.badge === 'Populaire' ? 'border-2 border-purple-500 shadow-2xl' : 'border border-slate-200 shadow-lg'} pricing-bounce pricing-delay-${i + 1}`}>
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={`text-white text-xs font-bold px-4 py-1.5 rounded-full animate-glow-pulse ${tier.badge === 'Populaire' ? 'bg-purple-600' : 'bg-sky-600'}`}>{tier.badge}</span>
                  </div>
                )}
                <h3 className="font-black text-2xl text-slate-900 mb-1">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{tier.desc}</p>
                <div className="mb-2">
                  <span className={`text-4xl font-black text-purple-600 price-number ${tier.badge === 'Populaire' ? 'price-glow' : ''}`}>{fmt(prices.crm_monthly[i])}</span>
                  <span className="text-slate-400 text-lg">/mois</span>
                </div>
                <p className="text-slate-600 font-semibold mb-1">{loading ? '...' : `${prices.crm_contacts[i].toLocaleString()} contacts inclus`}</p>
                <p className="text-emerald-600 text-sm font-semibold mb-6">✓ Setup gratuit</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'SuiteCRM hébergé',
                    'Formation incluse',
                    'Support FR dédié',
                    'Import de vos données',
                    i > 0 ? 'Listes B2B/B2C' : null,
                    i > 0 ? 'Automatisations' : null,
                    i > 1 ? 'API complète' : null,
                    i > 1 ? 'Intégrations custom' : null,
                  ].filter(Boolean).map(f => (
                    <li key={f} className="flex items-center gap-3 text-slate-700">
                      <CheckIcon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/fr/contact?service=crm&plan=${tier.name.toLowerCase()}`} className={`block text-center py-3.5 px-6 rounded-xl font-bold transition-all btn-ripple ${tier.badge === 'Populaire' ? 'bg-purple-600 text-white hover:bg-purple-700' : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'}`}>
                  Commencer
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pricing-slide-up">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Questions Fréquentes</h2>
            <p className="text-slate-500">Tout ce que vous devez savoir</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Y a-t-il un engagement minimum?', a: 'Non, zéro engagement. Vous pouvez annuler avec 7 jours de préavis. On préfère vous garder parce que ça fonctionne, pas parce que vous êtes coincé.' },
              { q: 'Comment fonctionne l\'essai gratuit?', a: '2 semaines à notre tarif d\'entrée. Pas besoin de carte de crédit. Si ça ne vous convient pas, vous nous dites au revoir — point final.' },
              { q: 'Puis-je changer de forfait?', a: 'Oui, à tout moment. Up ou down. La facturation s\'ajuste au prorata. Si vous grandissez, on grandit avec vous.' },
              { q: 'Quels accents sont disponibles?', a: 'Québec (standard et joual léger), France (parisien et régional), Belgique, Suisse. Pour l\'IA, c\'est configurable. Pour les conseillers, on vous assigne selon votre clientèle.' },
              { q: 'Mes données sont-elles sécurisées?', a: 'Hébergement au Canada (ou UE pour clients européens). Chiffrement bout en bout. RGPD + Loi 25. On ne vend rien, on ne partage rien.' },
              { q: 'Combien de temps pour démarrer?', a: 'En général 48h. Si vous nous donnez vos scripts aujourd\'hui, on peut être opérationnels demain. Le plus long, c\'est souvent de vous décider.' },
            ].map(({ q, a }, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden pricing-card-hover pricing-delay-${i + 1}">
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
      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-sky-500 rounded-full blur-3xl opacity-20 animate-slow-float"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-violet-500 rounded-full blur-3xl opacity-20 animate-slow-float"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 animated-gradient-text">Pas sûr quel forfait choisir?</h2>
          <p className="text-sky-200 text-lg mb-8 max-w-2xl mx-auto">Consultation gratuite de 30 minutes. On analyse vos besoins et on vous recommande la meilleure option.</p>
          <Link href="/fr/contact" className="inline-block bg-white text-sky-700 font-bold px-10 py-4 rounded-2xl hover:bg-sky-50 transition-all shadow-xl btn-ripple pricing-bounce">
            Demander une Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
