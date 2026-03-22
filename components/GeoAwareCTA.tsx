'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'

export default function GeoAwareCTA({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  const { geo, prices, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  const sym = loading ? '' : prices.symbol
  const trialPrice = loading ? '' : String(prices.outbound_trial)
  const contactHref = lang === 'fr' ? '/fr/contact' : '/en/contact'

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <Link href={contactHref}
          className="bg-white text-blue-900 font-bold px-7 py-4 rounded-xl hover:bg-blue-50 text-center shadow-xl transition-all">
          {lang === 'fr' ? 'Démo Sans Engagement' : 'Free Demo'}
        </Link>
        {showPhone ? (
          <a href={"tel:" + CONTACT.phone}
            className="border-2 border-white text-white font-bold px-7 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition-all text-center">
            {CONTACT.phoneDisplay}
          </a>
        ) : (
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
            className="border-2 border-white text-white font-bold px-7 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition-all text-center flex items-center justify-center gap-2">
            <span>&#128172;</span> WhatsApp 24/7
          </a>
        )}
      </div>
      {!loading && (
        <p className="text-blue-300 text-sm">
          {lang === 'fr'
            ? `Essai 2 semaines — ${sym}${trialPrice}/h · Sans engagement`
            : `2-week trial — ${sym}${trialPrice}/h · No commitment`}
        </p>
      )}
    </div>
  )
}
