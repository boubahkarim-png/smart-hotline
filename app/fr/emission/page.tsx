import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Appels Sortants & Telemarketing | Smart Hotline Agency",
  description: "Generez des leads qualifies avec nos conseillers en appels sortants. Prospection B2B et B2C.",
}

const FEATURES = [
  { icon: "🎯", title: "Leads qualifies", desc: "Nous ciblons vos prospects ideaux et qualifions chaque lead avant transfert." },
  { icon: "📈", title: "Taux de conversion", desc: "Nos scripts optimises augmentent votre taux de transformation." },
  { icon: "🗂️", title: "CRM integre", desc: "Chaque appel enregistre dans votre CRM avec notes et statut." },
  { icon: "📅", title: "Prise de rendez-vous", desc: "Vos conseillers remplissent votre agenda avec des RDV qualifies." },
  { icon: "🔬", title: "Suivi & reporting", desc: "KPIs detailles: appels, contacts, leads, conversions, cout/lead." },
  { icon: "🌐", title: "Campagnes multicanal", desc: "Appels sortants combines SMS et email pour maximiser la portee." },
]

export default function Emission() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-block bg-green-500 bg-opacity-50 text-green-100 text-sm px-3 py-1 rounded-full mb-5">
                📢 Appels Sortants
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
                Multipliez vos Leads<br/>avec nos Conseillers
              </h1>
              <p className="text-lg text-green-100 mb-8">
                Prospection, telemarketing, prise de rendez-vous. Nos conseillers experts transforment vos cibles en clients. Resultats garantis ou remboursement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/fr/contact?service=emission"
                  className="bg-white text-green-700 font-bold px-7 py-3.5 rounded-xl hover:bg-green-50 text-center shadow-lg">
                  Essai Gratuit 2 Semaines
                </Link>
                <Link href="/fr/tarifs"
                  className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white hover:text-green-700 transition-all text-center">
                  Voir les Tarifs
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {["CA$15/h essai", "Leads qualifies", "CRM inclus", "Reporting daily"].map(b => (
                  <span key={b} className="bg-white bg-opacity-15 text-sm px-3 py-1.5 rounded-full">✓ {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80"
                  alt="Conseiller appels sortants"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{maxHeight: '380px', objectFit: 'cover'}}
                />
                <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-xl p-3.5 shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-lg">📈</div>
                    <div>
                      <p className="font-bold text-sm">+40% de leads</p>
                      <p className="text-xs text-gray-500">en moyenne</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Une prospection qui convertit</h2>
            <div className="w-16 h-1 bg-green-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({icon, title, desc}) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Tarifs Appels Sortants</h2>
            <div className="w-16 h-1 bg-green-600 mx-auto rounded"/>
          </div>
          {/* Trial */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded-full mb-2">Offre Speciale</span>
              <h3 className="font-bold text-xl">Essai — CA$15/heure</h3>
              <p className="text-gray-600 text-sm mt-1">20h/semaine, 2 semaines — OU 1 semaine gratuite</p>
            </div>
            <Link href="/fr/contact?plan=essai-emission"
              className="bg-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 whitespace-nowrap">
              Commencer l&apos;Essai
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {label:"Starter", hours:"20h/sem", price:"19"},
              {label:"Pro", hours:"40h/sem", price:"18"},
              {label:"Business", hours:"80h/sem", price:"17"},
              {label:"Enterprise", hours:"120h/sem", price:"16", pop: true},
            ].map(({label, hours, price, pop}) => (
              <div key={label} className={`bg-white rounded-2xl p-6 relative ${pop ? 'border-2 border-green-500 shadow-xl' : 'border border-gray-200'}`}>
                {pop && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Meilleur prix</span></div>}
                <h3 className="font-bold mb-1">{label}</h3>
                <p className="text-gray-500 text-sm mb-3">{hours}</p>
                <div className="text-4xl font-extrabold text-green-600 mb-1">CA${price}</div>
                <p className="text-gray-400 text-sm mb-5">/heure</p>
                <Link href={`/fr/contact?plan=outbound-${label.toLowerCase()}`}
                  className={`block text-center py-2.5 rounded-lg font-semibold text-sm ${pop ? 'bg-green-600 text-white hover:bg-green-700' : 'border-2 border-green-600 text-green-600 hover:bg-green-50'}`}>
                  Choisir
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-green-900 to-green-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Pret a booster votre prospection?</h2>
          <p className="text-green-100 mb-8">Essai 2 semaines. Leads qualifies garantis.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-50">
              Demarrer l&apos;Essai
            </Link>
            <a href="https://wa.me/15148190559" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-green-700">
              WhatsApp 24/7
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
