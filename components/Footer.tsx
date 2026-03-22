'use client'
import Link from 'next/link'
import { NAV_FR, NAV_EN, CONTACT } from '@/lib/nav'
import { useGeo } from '@/hooks/useGeo'
import type { Lang } from '@/lib/i18n'

function FooterClient({ lang }: { lang: Lang }) {
  const { content, prices, loading } = useGeo(lang)
  const fr = lang === 'fr'

  const locationBadge = loading
    ? (fr ? 'Montr\u00e9al, Canada' : 'Montreal, Canada')
    : content.locationBadge || (fr ? 'Montr\u00e9al, Canada' : 'Montreal, Canada')

  const trustBadges = [
    '\ud83d\udd12 RGPD Conforme',
    locationBadge,
    '\u2b50 98% Satisfaction',
    '\u26a1 48h Setup',
    '24/7 Disponible',
  ]

  return (
    <div className="border-t border-slate-800 pt-8 mb-6">
      <div className="flex flex-wrap gap-3 justify-center">
        {trustBadges.map(b => (
          <span key={b} className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-full">{b}</span>
        ))}
      </div>
    </div>
  )
}

export default function Footer({ lang }: { lang: Lang }) {
  const services = (lang === 'fr' ? NAV_FR : NAV_EN)[0].children || []
  const fr = lang === 'fr'

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div>
            <Link href={fr ? '/fr' : '/en'} className="flex items-center gap-2 font-black text-xl text-white mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-sm font-black">SH</span>
              </div>
              Smart Hotline
            </Link>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              {fr ? "Centre d\u2019appels & IA pour PME. Conseillers professionnels et agents IA vocaux 24/7." : "Call center & AI for SMBs. Professional agents and AI voice agents 24/7."}
            </p>
            <div className="flex gap-3">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-green-700 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">&#128172;</span>
              </a>
              <a href={"mailto:" + CONTACT.email} className="w-9 h-9 bg-slate-700 hover:bg-slate-500 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">&#9993;&#65039;</span>
              </a>
              <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-700 hover:bg-slate-500 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-lg">&#128197;</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"/>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">{fr ? 'Entreprise' : 'Company'}</h4>
            <ul className="space-y-2.5">
              {[
                { label: fr ? '\u00c0 Propos' : 'About', href: fr ? '/fr/a-propos' : '/en/about' },
                { label: 'Blog', href: fr ? '/fr/blog' : '/en/blog' },
                { label: fr ? 'Secteurs' : 'Sectors', href: fr ? '/fr/secteurs' : '/en/sectors' },
                { label: fr ? 'Tarifs' : 'Pricing', href: fr ? '/fr/tarifs' : '/en/pricing' },
                { label: 'Contact', href: fr ? '/fr/contact' : '/en/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"/>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <span className="w-9 h-9 bg-green-900 group-hover:bg-green-700 rounded-lg flex items-center justify-center text-lg transition-colors flex-shrink-0">&#128172;</span>
                  <div>
                    <p className="text-white text-sm font-semibold group-hover:text-green-300 transition-colors">WhatsApp 24/7</p>
                    <p className="text-xs text-slate-500">{fr ? 'R\u00e9ponse imm\u00e9diate' : 'Instant reply'}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={"mailto:" + CONTACT.email} className="flex items-center gap-3 group">
                  <span className="w-9 h-9 bg-slate-800 group-hover:bg-slate-600 rounded-lg flex items-center justify-center text-lg transition-colors flex-shrink-0">&#9993;&#65039;</span>
                  <div>
                    <p className="text-white text-xs font-semibold group-hover:text-blue-300 transition-colors">{CONTACT.email}</p>
                    <p className="text-xs text-slate-500">{fr ? 'R\u00e9ponse sous 2h' : 'Reply in 2h'}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <span className="w-9 h-9 bg-slate-800 group-hover:bg-slate-600 rounded-lg flex items-center justify-center text-lg transition-colors flex-shrink-0">&#128197;</span>
                  <div>
                    <p className="text-white text-sm font-semibold group-hover:text-blue-300 transition-colors">{fr ? 'R\u00e9server 30 min' : 'Book 30 min'}</p>
                    <p className="text-xs text-slate-500">{fr ? 'Consultation gratuite' : 'Free consultation'}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <FooterClient lang={lang}/>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&#169; 2026 Smart Hotline Agency. {fr ? 'Tous droits r\u00e9serv\u00e9s.' : 'All rights reserved.'}</p>
          <div className="flex gap-5">
            <Link href={fr ? '/fr/confidentialite' : '/en/privacy'} className="hover:text-white transition-colors">{fr ? 'Confidentialit\u00e9' : 'Privacy'}</Link>
            <Link href={fr ? '/fr/cgv' : '/en/terms'} className="hover:text-white transition-colors">{fr ? 'CGV' : 'Terms'}</Link>
            <Link href={fr ? '/en' : '/fr'} className="hover:text-white transition-colors">{fr ? 'English' : 'Fran\u00e7ais'}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
