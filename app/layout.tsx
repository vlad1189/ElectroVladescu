import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Electrician Tulcea | Electrovladescu - Instalații Electrice Profesionale',
  description: 'Electrician Tulcea - Electrovladescu. Cristi Vlădescu este electrician profesionist în Tulcea, specializat în instalații electrice sigure și eficiente pentru orice proiect.',
  keywords: 'electrician tulcea, instalații electrice tulcea, electrician autorizat tulcea, panou electric tulcea, instalație casă tulcea, iluminat LED tulcea, automatizări electrice, electrician delta dunării, electrovladescu, instalații electrice românia, electrician profesionist, tablou electric, prize și întrerupătoare, iluminat interior exterior',
  authors: [{ name: 'Electrovladescu S.R.L.' }],
  creator: 'Electrovladescu S.R.L.',
  publisher: 'Electrovladescu S.R.L.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://electrovladescu.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Electrician Tulcea | Electrovladescu - Instalații Electrice Profesionale',
    description: 'Electrician în Tulcea. Instalații electrice complete, panouri electrice, iluminat LED. Intervenții rapide în Tulcea și Delta Dunării.',
    url: 'https://electrovladescu.ro',
    siteName: 'Electrovladescu',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: '/images/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Electrovladescu - Electrician Tulcea',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrician Tulcea | Electrovladescu - Instalații Electrice Profesionale',
    description: 'Electrician în Tulcea. Instalații electrice complete, panouri electrice, iluminat LED.',
    images: ['/images/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Adaugă codul din Google Search Console
  },
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  category: 'business',
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbbf24' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
  width: 'device-width',
  initialScale: 1,
}

// Structured data for local business SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Electrovladescu S.R.L.",
  "alternateName": "Electrician Tulcea",
  "image": "https://electrovladescu.ro/images/logo.jpg",
  "telephone": "+40755295009",
  "email": "contact@electrovladescu.ro",
  "url": "https://electrovladescu.ro",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tulcea",
    "addressRegion": "Tulcea",
    "addressCountry": "RO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.1786,
    "longitude": 28.8053
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Tulcea"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Județul Tulcea"
    },
    {
      "@type": "Place",
      "name": "Delta Dunării"
    }
  ],
  "priceRange": "$$",
  "description": "Electrician în Tulcea. Oferim servicii complete de instalații electrice pentru locuințe și spații comerciale: panouri electrice, instalații complete, iluminat LED, automatizări electrice.",
  "founder": {
    "@type": "Person",
    "name": "Cristi Vlădescu"
  },
  "sameAs": [
    "https://www.facebook.com/Electrovladescu"
  ]
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Instalații Electrice",
  "provider": {
    "@type": "LocalBusiness",
    "name": "ElectroVlădescu S.R.L."
  },
  "areaServed": {
    "@type": "City",
    "name": "Tulcea"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicii Electrice",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Instalații electrice complete",
          "description": "Proiectare și execuție instalații electrice de la zero pentru construcții noi."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Panouri electrice profesionale",
          "description": "Montaj și configurare tablouri electrice conform normativelor în vigoare."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Iluminat interior și exterior",
          "description": "Soluții complete de iluminat LED pentru case, grădini și spații comerciale."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automatizări electrice",
          "description": "Sisteme de automatizare pentru confort și eficiență energetică."
        }
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}