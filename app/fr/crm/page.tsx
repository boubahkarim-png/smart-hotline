import Link from 'next/link'
export const metadata = {
  title: "CRM & Listes de Prospection | Smart Hotline Agency",
  description: "CRM integre et listes de leads qualifies pour maximiser vos ventes.",
}
export default function CRM() {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-block bg-indigo-500 bg-opacity-50 text-indigo-100 text-sm px-3 py-1 rounded-full mb-5">🗄️ CRM & Listes</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">CRM Integre &<br/>Listes de Prospects</h1>
              <p className="text-lg text-indigo-100 mb-8">Gerez vos leads, suivez vos opportunites et maximisez vos conversions avec notre CRM SuiteCRM integre et nos listes de prospection B2B/B2C qualifiees.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/fr/contact?service=crm" className="bg-white text-indigo-700 font-bold px-7 py-3.5 rounded-xl hover:bg-indigo-50 text-center shadow-lg">Demo CRM Gratuite</Link>
                <Link href="/fr/tarifs" className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white hover:text-indigo-700 text-center">Voir les Tarifs</Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {["SuiteCRM inclus", "Listes B2B/B2C", "Mautic integre", "Rapports auto"].map(b => (
                  <span key={b} className="bg-white bg-opacity-15 text-sm px-3 py-1.5 rounded-full">✓ {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="CRM dashboard" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-xl p-3.5 shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-lg">📊</div>
                    <div><p className="font-bold text-sm">+35% conversion</p><p className="text-xs text-gray-500">moyenne clients</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold mb-2">CRM complet pour PME</h2><div className="w-16 h-1 bg-indigo-600 mx-auto rounded"/></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon:"📋", t:"Gestion des leads", d:"Capture, qualification et suivi de tous vos prospects entrants."},
              {icon:"📧", t:"Email marketing", d:"Campagnes automatisees avec Mautic. Nurturing et relances."},
              {icon:"📞", t:"Click-to-call", d:"Appelez vos prospects en un clic depuis le CRM."},
              {icon:"📈", t:"Pipeline de ventes", d:"Visualisez et gerez votre tunnel de vente en temps reel."},
              {icon:"🗂️", t:"Listes qualifiees", d:"Listes B2B et B2C selon secteur, region, taille entreprise."},
              {icon:"🔗", t:"Integrations", d:"Connexion avec votre site, Zapier, Google Workspace et plus."},
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
      <section className="py-20 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold mb-2">Tarifs CRM & Listes</h2><div className="w-16 h-1 bg-indigo-600 mx-auto rounded"/></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{name:"Starter",price:"269",desc:"CRM + 500 contacts/mois",pop:false},{name:"Pro",price:"409",desc:"CRM + 2000 contacts + listes",pop:true},{name:"Enterprise",price:"679",desc:"Illimite + integrations sur mesure",pop:false}].map(({name,price,desc,pop}) => (
              <div key={name} className={`bg-white rounded-2xl p-6 relative ${pop?'border-2 border-indigo-500 shadow-xl':'border border-gray-200'}`}>
                {pop && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">Populaire</span></div>}
                <h3 className="font-bold text-lg mb-1">{name}</h3>
                <p className="text-gray-500 text-sm mb-3">{desc}</p>
                <div className="text-4xl font-extrabold text-indigo-600 mb-1">CA${price}</div>
                <p className="text-gray-400 text-sm mb-5">/mois</p>
                <Link href={`/fr/contact?plan=crm-${name.toLowerCase()}`} className={`block text-center py-2.5 rounded-lg font-semibold text-sm ${pop?'bg-indigo-600 text-white hover:bg-indigo-700':'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'}`}>Choisir</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-indigo-900 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Maximisez vos conversions</h2>
          <p className="text-indigo-100 mb-8">Demo CRM gratuite. Sans engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50">Demo Gratuite</Link>
            <a href="tel:+15148190559" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-indigo-700">+1 514 819-0559</a>
          </div>
        </div>
      </section>
    </>
  )
}
