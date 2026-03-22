import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Agents IA Vocaux 24/7 | Smart Hotline Agency",
  description: "Sophie, votre agente IA vocale en francais natif. Repond en 2 secondes, disponible 24/7.",
}

export default function AgentsIA() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-block bg-purple-500 bg-opacity-50 text-purple-100 text-sm px-3 py-1 rounded-full mb-5">
                🤖 Nouveau — Agents IA Vocaux
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
                Sophie, votre Agente IA<br/>24/7 en Francais Natif
              </h1>
              <p className="text-lg text-purple-100 mb-8">
                Reponse en moins de 2 secondes. Francais natif Quebec, France, Belgique. Jusqu&apos;a 70% moins cher qu&apos;un agent traditionnel. Transfert vers conseiller si besoin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/fr/contact?service=ia"
                  className="bg-white text-purple-700 font-bold px-7 py-3.5 rounded-xl hover:bg-purple-50 text-center shadow-lg">
                  Demo Gratuite
                </Link>
                <Link href="/fr/tarifs"
                  className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white hover:text-purple-700 text-center">
                  Voir les Tarifs
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Reponse 2 sec", "Francais natif", "24/7", "-70% couts"].map(b => (
                  <span key={b} className="bg-white bg-opacity-15 text-sm px-3 py-1.5 rounded-full">✓ {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80"
                  alt="Agent IA Sophie"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{maxHeight:'380px', objectFit:'cover'}}
                />
                <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-xl p-3.5 shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-lg">⚡</div>
                    <div>
                      <p className="font-bold text-sm">&lt; 2 secondes</p>
                      <p className="text-xs text-gray-500">temps de reponse</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI vs Human comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">IA vs Agent Traditionnel</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto rounded"/>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold">Critere</th>
                  <th className="text-center p-4 font-semibold text-purple-600">Sophie IA</th>
                  <th className="text-center p-4 font-semibold text-gray-500">Agent Classique</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Disponibilite", "24/7/365", "Horaires limites"],
                  ["Temps de reponse", "< 2 secondes", "20-40 secondes"],
                  ["Cout moyen", "CA$7-9/h", "CA$19-25/h"],
                  ["Volume simultane", "Illimite", "1 appel a la fois"],
                  ["Formation", "Immediate", "2-4 semaines"],
                  ["Langues", "FR natif + EN", "Selon conseiller"],
                ].map(([crit, ai, human], i) => (
                  <tr key={crit} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 font-medium">{crit}</td>
                    <td className="p-4 text-center text-purple-600 font-semibold">{ai}</td>
                    <td className="p-4 text-center text-gray-500">{human}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[40%]">
              <img
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80"
                alt="IA vocale technologie"
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{maxHeight:'360px', objectFit:'cover'}}
              />
            </div>
            <div className="w-full lg:w-[55%]">
              <h2 className="text-3xl font-bold mb-6">Tout ce que fait Sophie</h2>
              {[
                { icon: "📞", t: "Reponse instantanee", d: "Repond en moins de 2 secondes, 24h/24, 7j/7, sans temps d&apos;attente." },
                { icon: "🗓️", t: "Prise de rendez-vous", d: "Synchronise avec Google Calendar, Calendly. Confirmation automatique." },
                { icon: "❓", t: "FAQ automatisee", d: "Repond aux questions frequentes: horaires, tarifs, adresse, services." },
                { icon: "🔄", t: "Transfert intelligent", d: "Detecte les situations complexes et transfere vers conseiller humain." },
                { icon: "📝", t: "Prise de messages", d: "Enregistre nom, numero, motif — transmis par email ou CRM." },
                { icon: "📊", t: "Rapports detailles", d: "Chaque appel transcrit et analyse. Tendances et insights mensuels." },
              ].map(({icon, t, d}) => (
                <div key={t} className="flex gap-4 mb-5">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
                  <div>
                    <h3 className="font-bold mb-1">{t}</h3>
                    <p className="text-gray-500 text-sm" dangerouslySetInnerHTML={{__html: d}}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Tarifs Agents IA</h2>
            <p className="text-gray-500">Jusqu&apos;a 70% moins cher qu&apos;un agent traditionnel</p>
            <div className="w-16 h-1 bg-purple-600 mx-auto rounded mt-3"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {name:"Starter", price:"7", desc:"Ideal PME < 200 appels/mois"},
              {name:"Professional", price:"9", desc:"PME 200-800 appels/mois"},
              {name:"Business", price:"8", desc:"800-2000 appels/mois", pop:true},
              {name:"Enterprise", price:"7", desc:"Volume illimite"},
            ].map(({name, price, desc, pop}) => (
              <div key={name} className={`bg-white rounded-2xl p-6 relative ${pop ? 'border-2 border-purple-500 shadow-xl' : 'border border-gray-200'}`}>
                {pop && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">Populaire</span></div>}
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-bold mb-1">{name}</h3>
                <p className="text-gray-500 text-xs mb-3">{desc}</p>
                <div className="text-4xl font-extrabold text-purple-600 mb-1">CA${price}</div>
                <p className="text-gray-400 text-sm mb-5">/heure</p>
                <Link href={`/fr/contact?plan=ia-${name.toLowerCase()}`}
                  className={`block text-center py-2.5 rounded-lg font-semibold text-sm ${pop ? 'bg-purple-600 text-white hover:bg-purple-700' : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'}`}>
                  Choisir
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Essayez Sophie gratuitement</h2>
          <p className="text-purple-100 mb-8">Demo en direct. Aucune carte de credit requise.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="bg-white text-purple-700 font-bold px-8 py-4 rounded-xl hover:bg-purple-50">
              Demo Gratuite
            </Link>
            <a href="https://wa.me/15148190559" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-purple-700">
              WhatsApp 24/7
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
