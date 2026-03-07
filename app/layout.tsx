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
  title: 'ElectroVlădescu S.R.L. | Electrician Profesionist România',
  description: 'Instalații electrice profesionale pentru locuințe și spații comerciale. Electrician autorizat cu experiență - panouri electrice, instalații complete, iluminat LED. Cu noi aduci casa la lumină!',
  keywords: 'electrician, instalații electrice, panou electric, instalație casă, electrician autorizat, România, iluminat LED, automatizări electrice',
  authors: [{ name: 'ElectroVlădescu S.R.L.' }],
  openGraph: {
    title: 'ElectroVlădescu S.R.L. | Electrician Profesionist',
    description: 'Instalații electrice sigure, moderne și realizate ca la carte. Solicită ofertă gratuită!',
    type: 'website',
    locale: 'ro_RO',
  },
  robots: 'index, follow',
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbbf24' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
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
