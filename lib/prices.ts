
// ============================================================
// PRICES — Market-adapted pricing per country
// Based on competitor research: Retell AI, Ruby, Bland, market data
// ============================================================

export type Currency = 'CAD' | 'EUR' | 'USD' | 'CHF'

export interface CurrencyConfig {
  symbol: string
  code: Currency
  locale: string
  // Outbound human agents per hour (appointment setting)
  outbound_trial: number
  outbound: number[] // [Starter 20h, Pro 40h, Business 80h, Enterprise 120h]
  // AI voice agents per minute
  // Market: Retell $0.07-0.31/min, Bland $0.07/min base
  // Our pricing: 30% below market for adoption
  ai_per_min: number[] // [Starter, Pro, Business, Enterprise]
  // Inbound monthly packages
  // Market: Ruby $250/50min, $395/100min, $720/200min
  // Our pricing: per-call packages (more transparent)
  inbound: number[] // [Basic 500 calls, Advanced 1500, Premium 2500]
  // Support monthly (tickets, email, chat)
  support: number[] // [Basic, Pro, Premium]
  // CRM monthly
  crm: number[] // [Starter, Pro, Enterprise]
}

// ============================================================
// CANADA PRICING (CAD)
// Market: Ruby $250-1725/mo, local call centers $15-25/h
// ============================================================
export const PRICES_CA: CurrencyConfig = {
  symbol: 'CA$',
  code: 'CAD',
  locale: 'fr-CA',
  // Outbound: competitive with local agencies
  outbound_trial: 15,
  outbound: [19, 18, 17, 16], // per hour, volume discounts
  // AI: 25% below Retell ($0.11-0.31/min)
  ai_per_min: [0.12, 0.15, 0.11, 0.09],
  // Inbound: per-call model (more transparent than per-minute)
  // Average call = 3 min, so 500 calls ≈ 1500 min ≈ Ruby $720 value
  inbound: [299, 449, 649],
  // Support: multi-channel
  support: [289, 439, 649],
  // CRM: aggressive (selected)
  crm: [99, 199, 299],
}

// ============================================================
// FRANCE/EUROPE PRICING (EUR)
// Market: French call centers €12-20/h, lower labor costs
// ============================================================
export const PRICES_EU: CurrencyConfig = {
  symbol: '€',
  code: 'EUR',
  locale: 'fr-FR',
  // Outbound: lower than Canada due to labor costs
  outbound_trial: 11,
  outbound: [13, 12, 11, 10],
  // AI: similar tech costs
  ai_per_min: [0.09, 0.11, 0.08, 0.07],
  // Inbound: adjusted for European market
  inbound: [189, 299, 419],
  // Support
  support: [219, 329, 489],
  // CRM: aggressive
  crm: [79, 169, 269],
}

// ============================================================
// USA PRICING (USD)
// Market: Most competitive, Ruby, AnswerConnect, etc.
// ============================================================
export const PRICES_US: CurrencyConfig = {
  symbol: '$',
  code: 'USD',
  locale: 'en-US',
  // Outbound: competitive with US market
  outbound_trial: 12,
  outbound: [14, 13, 12, 11],
  // AI: Retell $0.07-0.31/min base
  ai_per_min: [0.10, 0.13, 0.09, 0.08],
  // Inbound: competitive with Ruby
  inbound: [219, 339, 479],
  // Support
  support: [249, 379, 559],
  // CRM: aggressive
  crm: [89, 179, 279],
}

// ============================================================
// SWITZERLAND PRICING (CHF)
// Market: Higher wages, premium pricing accepted
// ============================================================
export const PRICES_CH: CurrencyConfig = {
  symbol: 'CHF ',
  code: 'CHF',
  locale: 'fr-CH',
  // Outbound: premium pricing for Swiss market
  outbound_trial: 14,
  outbound: [17, 16, 15, 14],
  // AI: similar tech, premium positioning
  ai_per_min: [0.13, 0.16, 0.12, 0.10],
  // Inbound: premium
  inbound: [269, 409, 599],
  // Support
  support: [299, 449, 649],
  // CRM: aggressive
  crm: [99, 199, 299],
}

export const PRICES: Record<Currency, CurrencyConfig> = {
  CAD: PRICES_CA,
  EUR: PRICES_EU,
  USD: PRICES_US,
  CHF: PRICES_CH,
}

// ============================================================
// GEO CONFIGURATION
// ============================================================
export interface GeoConfig {
  currency: Currency
  showPhone: boolean // true for CA/US only
  lang: string
  country: string
}

export const COUNTRY_MAP: Record<string, GeoConfig> = {
  // Canada - local pricing
  CA: { currency: 'CAD', showPhone: true, lang: 'fr', country: 'Canada' },
  // USA - competitive market
  US: { currency: 'USD', showPhone: true, lang: 'en', country: 'United States' },
  // France - European pricing
  FR: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'France' },
  // Belgium - European pricing
  BE: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Belgique' },
  // Luxembourg - European pricing
  LU: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Luxembourg' },
  // Monaco - European pricing
  MC: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Monaco' },
  // Morocco - European pricing (historic ties)
  MA: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Maroc' },
  // Algeria - European pricing
  DZ: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Algerie' },
  // Tunisia - European pricing
  TN: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Tunisie' },
  // Senegal - European pricing
  SN: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Senegal' },
  // Ivory Coast - European pricing
  CI: { currency: 'EUR', showPhone: false, lang: 'fr', country: "Cote d'Ivoire" },
  // Switzerland - premium pricing
  CH: { currency: 'CHF', showPhone: false, lang: 'fr', country: 'Suisse' },
  // UK - USD pricing (English market)
  GB: { currency: 'USD', showPhone: false, lang: 'en', country: 'United Kingdom' },
  // Germany - European pricing
  DE: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Allemagne' },
  // Spain - European pricing
  ES: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Espagne' },
  // Italy - European pricing
  IT: { currency: 'EUR', showPhone: false, lang: 'fr', country: 'Italie' },
}

export const DEFAULT_GEO: GeoConfig = { 
  currency: 'EUR', 
  showPhone: false, 
  lang: 'fr', 
  country: '' 
}

export async function detectGeo(): Promise<GeoConfig> {
  try {
    const r = await fetch('https://ipapi.co/json/')
    const d = await r.json()
    return COUNTRY_MAP[d.country_code] || { ...DEFAULT_GEO, country: d.country_name || '' }
  } catch {
    return DEFAULT_GEO
  }
}
