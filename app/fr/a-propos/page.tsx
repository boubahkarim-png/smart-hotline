import Link from 'next/link'
export const metadata = { title: "A Propos | Smart Hotline Agency" }
export default function APropos() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-block bg-blue-500 bg-opacity-50 text-blue-100 text-sm px-3 py-1 rounded-full mb-5">Notre Histoire</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">L&apos;Agence qui Donne aux PME les Outils des Grandes Entreprises</h1>
              <p className="text-lg text-blue-100 mb-6">Fondee a Montreal, Smart Hotline Agency croit que chaque PME merite un service client de classe mondiale — sans les couts prohibitifs d&apos;un departement interne.</p>
              <Link href="/fr/contact" className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 inline-block">Nous Contacter</Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Equipe Smart Hotline" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-20">
            {[{n:"2018", l:"Fondee"},{n:"500+", l:"PME clientes"},{n:"98%", l:"Satisfaction"},{n:"24/7", l:"Disponibilite"}].map(({n,l}) => (
              <div key={l}><p className="text-4xl font-extrabold text-blue-600">{n}</p><p className="text-gray-600 mt-1">{l}</p></div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[40%]">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Centre appels Smart Hotline" className="rounded-2xl shadow-xl w-full object-cover" style={{maxHeight:'360px', objectFit:'cover'}}/>
            </div>
            <div className="w-full lg:w-[55%]">
              <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
              <p className="text-gray-600 mb-4">Nous croyons que la relation client est le coeur de toute entreprise prospere. Notre mission est de permettre aux PME d&apos;offrir une experience client d&apos;excellence — sans recruter, former ni gerer des equipes internes.</p>
              <p className="text-gray-600 mb-6">Combines a la puissance des agents IA vocaux, nos conseillers humains forment un systeme hybride unique qui repond a toutes les situations, 24h/24, 7j/7.</p>
              <div className="space-y-3">
                {["Conseillers formes et certifies","Technologie IA de pointe","RGPD et loi 25 conformes","Support client dedie"].map(v => (
                  <div key={v} className="flex items-center gap-3"><span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">✓</span><span className="text-gray-700">{v}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Rejoignez 500+ PME satisfaites</h2>
          <p className="text-blue-100 mb-8">Essai 2 semaines gratuit. Aucune carte de credit.</p>
          <Link href="/fr/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Commencer Maintenant</Link>
        </div>
      </section>
    </>
  )
}
