import Link from 'next/link'
import GeoAwareCTA from '@/components/GeoAwareCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Smart Hotline Agency | Centre d’Appels & IA pour PME",
  description: "Centre d’appels externalisé pour PME. Conseillers & agents IA vocaux 24/7. Essai 2 semaines.",
}

const SERVICES = [
  { icon: '📞', title: 'Appels Entrants',  desc: 'Réception 24/7. Zéro appel manqué.', href: '/fr/reception', grad: 'from-blue-500 to-blue-700' },
  { icon: '📢', title: 'Appels Sortants',  desc: 'Prospection & leads qualifiés.', href: '/fr/emission', grad: 'from-emerald-500 to-emerald-700' },
  { icon: '🤖', title: 'Agents IA Vocaux', desc: 'Sophie répond en 2 sec, 24/7.', href: '/fr/agents-ia', grad: 'from-violet-500 to-violet-700', badge: 'Nouveau' },
  { icon: '🎧', title: 'Support Client',   desc: 'Tickets, email, chat, WhatsApp.', href: '/fr/support', grad: 'from-teal-500 to-teal-700' },
  { icon: '🗄️', title: 'CRM & Listes', desc: 'SuiteCRM + listes B2B/B2C.', href: '/fr/crm', grad: 'from-indigo-500 to-indigo-700' },
]

const STEPS = [
  { n: '1', t: 'Consultation', d: 'Analyse gratuite de vos besoins en 30 min' },
  { n: '2', t: 'Personnalisation', d: 'Scripts et configuration à votre image' },
  { n: '3', t: 'Démarrage 48h', d: 'Vos appels pris en charge rapidement' },
  { n: '4', t: 'Suivi continu', d: 'Rapports, optimisation et support dédié' },
]

const TESTIMONIALS = [
  { q: 'Smart Hotline nous a permis de paraître plus grand. Un service qui a vraiment impressionné nos clients.', name: 'Marc Lefebvre', role: 'Fondateur, TechInnov Québec', av: 'ML' },
  { q: 'ROI incroyable. Plus aucune opportunité commerciale manquée depuis que nous travaillons ensemble.', name: 'Sophie Dubois', role: 'Directrice, Cabinet Comptable', av: 'SD' },
  { q: 'Un des meilleurs investissements de ma carrière. Gestion totale de mes appels et leads qualifiés.', name: 'Jean-Pierre Tremblay', role: 'Propriétaire, Restaurant Le Gourmet', av: 'JT' },
]

export default function FrHome() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-500 opacity-10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <div className="inline-flex items-center gap-2 bg-blue-500 bg-opacity-20 border border-blue-400 border-opacity-30 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Agents &amp; IA Vocaux disponibles maintenant
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight">
                Le Centre d&#39;Appels<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-violet-300">
                  qui Fait Grandir
                </span><br />
                votre PME
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed">
                Conseillers professionnels et agents IA vocaux 24/7. Externalisation simple, résultats immédiats.
              </p>
              <GeoAwareCTA lang="fr" />
              <div className="flex flex-wrap gap-3 mt-6">
                {['Essai 2 semaines', 'RGPD conforme', '24/7', 'Sans engagement'].map(b => (
                  <span key={b} className="flex items-center gap-1.5 bg-white bg-opacity-10 text-slate-200 text-sm px-3 py-1.5 rounded-full border border-white border-opacity-10">
                    <span className="text-green-400">&#10003;</span> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Equipe Smart Hotline"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">&#9989;</div>
                    <div>
                      <p className="font-black text-slate-900 text-lg leading-none">500+</p>
                      <p className="text-slate-500 text-xs mt-0.5">PME satisfaites</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-5 -right-5 bg-violet-600 rounded-2xl p-4 shadow-xl text-white">
                  <p className="font-black text-2xl leading-none">98%</p>
                  <p className="text-violet-200 text-xs mt-0.5">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-slate-100 py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { n: '500+', l: 'PME Satisfaites' },
            { n: '98%', l: 'Satisfaction Client' },
            { n: '40%', l: 'Économie de temps' },
            { n: '24/7', l: 'Disponibilité' },
          ].map(({ n, l }) => (
            <div key={l}>
              <p className="text-4xl font-black text-blue-700">{n}</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Nos Solutions</h2>
            <p className="text-slate-500 text-lg">Tout ce dont votre PME a besoin pour sa relation client</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {SERVICES.map(({ icon, title, desc, href, grad, badge }: any) => (
              <Link key={href} href={href}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center text-2xl mb-4`}>
                  {icon}
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  {badge && <span className="text-xs bg-violet-100 text-violet-700 px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0">{badge}</span>}
                </div>
                <p className="text-slate-500 text-sm mb-3">{desc}</p>
                <span className="text-blue-700 text-sm font-semibold group-hover:underline">En savoir plus &#8594;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI FEATURE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-3 py-1.5 rounded-full mb-5">
                🤖 Nouveau Service
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5">
                Sophie, votre Agente IA<br />en Français Natif
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Réponse en moins de 2 secondes. Français natif Québec, France, Belgique, Suisse.
                Jusqu&#39;à 70% moins cher qu&#39;un agent traditionnel.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Réponse en moins de 2 secondes',
                  'Français natif multi-région',
                  'Transfert intelligent vers conseiller',
                  'Jusqu’à 70% moins cher qu’un agent traditionnel',
                  'Disponible 24/7, sans temps d’attente',
                ].map(f => (
                  <li key={f} className="flex items-center gap-3 text-slate-700">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/fr/agents-ia"
                className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-violet-700 transition-colors">
                Découvrir les Agents IA &#8594;
              </Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80"
                alt="Agent IA vocal Sophie"
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: '380px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Comment ça marche</h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map(({ n, t, d }) => (
              <div key={n} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">
                  {n}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{t}</h3>
                <p className="text-slate-500 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Ce que disent nos clients</h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(({ q, name, role, av }) => (
              <div key={name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex gap-0.5 mb-4">
                  {[0, 1, 2, 3, 4].map(i => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 mb-5 leading-relaxed italic">&ldquo;{q}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700 text-sm">{av}</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{name}</p>
                    <p className="text-slate-500 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            Prêt à transformer votre relation client?
          </h2>
          <p className="text-blue-200 text-lg mb-10">Configuration en 48h. Sans engagement.</p>
          <GeoAwareCTA lang="fr" />
        </div>
      </section>
    </>
  )
}
