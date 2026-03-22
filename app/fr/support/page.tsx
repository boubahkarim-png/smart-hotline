import Link from 'next/link'
export const metadata = {
  title: "Support Client Externalise | Smart Hotline Agency",
  description: "Service client professionnel pour PME. Assistance technique et relationnelle 24/7.",
}
export default function Support() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-block bg-teal-500 bg-opacity-50 text-teal-100 text-sm px-3 py-1 rounded-full mb-5">🎧 Support Client</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">Support Client 5 Etoiles<br/>pour votre PME</h1>
              <p className="text-lg text-teal-100 mb-8">Transformez vos clients en ambassadeurs. Nos agents de support grent tickets, emails, chat et appels avec excellence.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/fr/contact?service=support" className="bg-white text-teal-700 font-bold px-7 py-3.5 rounded-xl hover:bg-teal-50 text-center shadow-lg">Essai Gratuit 2 Semaines</Link>
                <Link href="/fr/tarifs" className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white hover:text-teal-700 text-center">Voir les Tarifs</Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Multi-canal", "Tickets & Email", "Chat Live", "24/7"].map(b => (
                  <span key={b} className="bg-white bg-opacity-15 text-sm px-3 py-1.5 rounded-full">✓ {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=600&q=80" alt="Support client" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-xl p-3.5 shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-lg">🎧</div>
                    <div><p className="font-bold text-sm">{"<"} 4h resolution</p><p className="text-xs text-gray-500">temps moyen</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold mb-2">Support multi-canal complet</h2><div className="w-16 h-1 bg-teal-600 mx-auto rounded"/></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon:"📞", t:"Support telephonique", d:"Appels entrants, escalade, rappels proactifs."},
              {icon:"✉️", t:"Gestion des emails", d:"Reponses sous 2h en votre nom, ton personnalise."},
              {icon:"💬", t:"Chat en direct", d:"Integration Tawk.to, Intercom, Zendesk."},
              {icon:"🎫", t:"Gestion des tickets", d:"Ouverture, suivi, resolution et cloture des tickets."},
              {icon:"📱", t:"WhatsApp Business", d:"Support via WhatsApp pour une experience moderne."},
              {icon:"📊", t:"Rapports CSAT", d:"Score de satisfaction client et NPS mensuels."},
            ].map(({icon, t, d}) => (
              <div key={t} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold text-lg mb-2">{t}</h3>
                <p className="text-gray-500 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-teal-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold mb-2">Tarifs Support Client</h2><div className="w-16 h-1 bg-teal-600 mx-auto rounded"/></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{name:"Basic",price:"269",desc:"Jusqu&apos;a 300 tickets/mois",pop:false},{name:"Pro",price:"409",desc:"Jusqu&apos;a 800 tickets/mois",pop:true},{name:"Premium",price:"609",desc:"Volume illimite",pop:false}].map(({name,price,desc,pop}) => (
              <div key={name} className={`bg-white rounded-2xl p-6 relative ${pop?'border-2 border-teal-500 shadow-xl':'border border-gray-200'}`}>
                {pop && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">Populaire</span></div>}
                <h3 className="font-bold text-lg mb-1">{name}</h3>
                <p className="text-gray-500 text-sm mb-3" dangerouslySetInnerHTML={{__html:desc}}/>
                <div className="text-4xl font-extrabold text-teal-600 mb-1">CA${price}</div>
                <p className="text-gray-400 text-sm mb-5">/mois</p>
                <Link href={`/fr/contact?plan=support-${name.toLowerCase()}`} className={`block text-center py-2.5 rounded-lg font-semibold text-sm ${pop?'bg-teal-600 text-white hover:bg-teal-700':'border-2 border-teal-600 text-teal-600 hover:bg-teal-50'}`}>Choisir</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-teal-900 to-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Offrez un support 5 etoiles</h2>
          <p className="text-teal-100 mb-8">2 semaines d&apos;essai gratuit. Sans engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="bg-white text-teal-700 font-bold px-8 py-4 rounded-xl hover:bg-teal-50">Demarrer l&apos;Essai</Link>
            <a href="tel:+15148190559" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-teal-700">+1 514 819-0559</a>
          </div>
        </div>
      </section>
    </>
  )
}
