import Link from 'next/link'
export const metadata = { title: "Nos Services | Smart Hotline Agency" }
const SERVICES = [
  { icon: "📞", title: "Appels Entrants", desc: "Reception professionnelle 24/7. Ne manquez plus jamais un appel.", href: "/fr/reception", color: "blue" },
  { icon: "📢", title: "Appels Sortants", desc: "Prospection, telemarketing, prise de RDV. Leads qualifies garantis.", href: "/fr/emission", color: "green" },
  { icon: "🤖", title: "Agents IA Vocaux", desc: "Sophie repond en 2 sec, 24/7. Jusqu&apos;a 70% moins cher.", href: "/fr/agents-ia", color: "purple", badge: "Nouveau" },
  { icon: "🎧", title: "Support Client", desc: "Tickets, email, chat, WhatsApp. Support 5 etoiles pour vos clients.", href: "/fr/support", color: "teal" },
  { icon: "🗄️", title: "CRM & Listes", desc: "CRM SuiteCRM integre + listes de prospection B2B/B2C qualifiees.", href: "/fr/crm", color: "indigo" },
]
export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-5">Nos Solutions</h1>
          <p className="text-lg text-blue-100 mb-8">Tout ce dont votre PME a besoin pour sa relation client — sous un seul toit.</p>
          <Link href="/fr/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Demo Gratuite</Link>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(({icon, title, desc, href, badge}) => (
              <Link key={href} href={href} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="text-5xl mb-5">{icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <h2 className="font-bold text-xl">{title}</h2>
                  {badge && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">{badge}</span>}
                </div>
                <p className="text-gray-500 mb-5" dangerouslySetInnerHTML={{__html: desc}}/>
                <span className="text-blue-600 font-semibold group-hover:underline">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Pas sur de quel service vous avez besoin?</h2>
          <p className="text-gray-600 mb-8">Nos experts analysent votre situation et vous recommandent la solution ideale. Gratuit et sans engagement.</p>
          <Link href="/fr/contact" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 inline-block">Consultation Gratuite</Link>
        </div>
      </section>
    </>
  )
}
