import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Appels Entrants | Smart Hotline Agency",
  description: "Service de reception d&apos;appels 24/7 pour PME. Ne manquez plus jamais un appel client.",
}

const FEATURES = [
  { icon: "📞", title: "Reception 24/7", desc: "Vos appels repondus a toute heure, meme les week-ends et jours feries." },
  { icon: "🌍", title: "Bilingue FR/EN", desc: "Conseillers francophones et anglophones pour tous vos clients." },
  { icon: "📋", title: "Scripts personnalises", desc: "Nous adoptons votre ton, vos scripts et vos procedures internes." },
  { icon: "📊", title: "Rapports detailles", desc: "Volume, duree, satisfaction — tableaux de bord en temps reel." },
  { icon: "🔄", title: "Transfert intelligent", desc: "Transfert vers votre equipe selon vos regles de priorite." },
  { icon: "⚡", title: "Mise en place rapide", desc: "Operationnel en 48h. Aucune infrastructure requise de votre cote." },
]

const PLANS = [
  { name: "Basic", calls: "Jusqu&apos;a 500 appels/mois", price: "199", popular: false },
  { name: "Advanced", calls: "Jusqu&apos;a 1500 appels/mois", price: "339", popular: true },
  { name: "Premium", calls: "Jusqu&apos;a 2500 appels/mois", price: "479", popular: false },
]

export default function Reception() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-block bg-blue-500 bg-opacity-50 text-blue-100 text-sm px-3 py-1 rounded-full mb-5">
                📞 Appels Entrants
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
                Ne Manquez Plus Jamais<br/>un Appel Client
              </h1>
              <p className="text-lg text-blue-100 mb-8">
                Nos conseillers professionnels repondent en votre nom 24/7. Vos clients vivent une experience premium, vous vous concentrez sur votre coeur de metier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/fr/contact?service=reception"
                  className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 text-center shadow-lg">
                  Essai Gratuit 2 Semaines
                </Link>
                <Link href="/fr/tarifs"
                  className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white hover:text-blue-700 transition-all text-center">
                  Voir les Tarifs
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {["24/7 inclus", "Bilingue FR/EN", "Sans engagement", "Setup 48h"].map(b => (
                  <span key={b} className="bg-white bg-opacity-15 text-sm px-3 py-1.5 rounded-full">✓ {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80"
                  alt="Conseillere reception appels"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{maxHeight: '380px', objectFit: 'cover'}}
                />
                <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-xl p-3.5 shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-lg">✅</div>
                    <div>
                      <p className="font-bold text-sm">98% satisfaction</p>
                      <p className="text-xs text-gray-500">Clients PME</p>
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
            <h2 className="text-3xl font-bold mb-2">Tout ce dont vous avez besoin</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded"/>
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

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[40%]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                alt="Equipe de conseillers"
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{maxHeight:'360px', objectFit:'cover'}}
              />
            </div>
            <div className="w-full lg:w-[55%]">
              <h2 className="text-3xl font-bold mb-8">Comment ca fonctionne</h2>
              {[
                { n: "1", t: "Analyse de vos besoins", d: "Nous etudions votre activite, votre clientele et vos procedures." },
                { n: "2", t: "Redaction des scripts", d: "Nos experts redigent des scripts qui refletent parfaitement votre marque." },
                { n: "3", t: "Formation de votre equipe", d: "Vos conseillers dedies sont formes a votre secteur et vos produits." },
                { n: "4", t: "Go live en 48h", d: "Vos appels sont pris en charge. Vous recevez vos rapports quotidiens." },
              ].map(({n, t, d}) => (
                <div key={n} className="flex gap-4 mb-6">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">{n}</div>
                  <div>
                    <h3 className="font-bold mb-1">{t}</h3>
                    <p className="text-gray-500 text-sm">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Tarifs Appels Entrants</h2>
            <p className="text-gray-500">Prix en CA$ — <Link href="/fr/tarifs" className="text-blue-600 underline">voir tous les tarifs</Link></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PLANS.map(({name, calls, price, popular}) => (
              <div key={name} className={`bg-white rounded-2xl p-6 relative ${popular ? 'border-2 border-blue-500 shadow-xl' : 'border border-gray-200'}`}>
                {popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Populaire</span>
                  </div>
                )}
                <h3 className="font-bold text-lg mb-1">{name}</h3>
                <p className="text-gray-500 text-sm mb-3" dangerouslySetInnerHTML={{__html: calls}}/>
                <div className="text-4xl font-extrabold text-blue-600 mb-1">CA${price}</div>
                <p className="text-gray-400 text-sm mb-5">/mois</p>
                <Link href={`/fr/contact?plan=inbound-${name.toLowerCase()}`}
                  className={`block text-center py-2.5 rounded-lg font-semibold text-sm ${popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'}`}>
                  Choisir
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Pret a ne plus manquer aucun appel?</h2>
          <p className="text-blue-100 mb-8">2 semaines d&apos;essai gratuit. Sans engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50">
              Demarrer l&apos;Essai Gratuit
            </Link>
            <a href="tel:+15148190559" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700">
              +1 514 819-0559
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
