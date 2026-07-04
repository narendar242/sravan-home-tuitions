import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const siteUrl = 'https://sravanhometuitions.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sravan Home Tuitions | Trusted Home Tutors in Attapur, Hyderabad',
    template: '%s | Sravan Home Tuitions',
  },
  description:
    'Sravan Home Tuitions offers experienced, verified home tutors in Attapur, Hyderabad for all classes, all subjects and all boards (CBSE, ICSE, State Board, IB, IGCSE). Book a free demo class today.',
  keywords: [
    'home tuition Attapur',
    'home tutors Hyderabad',
    'private tutors Attapur',
    'CBSE home tuition',
    'ICSE home tuition',
    'one to one tutoring Hyderabad',
    'Sravan Home Tuitions',
  ],
  authors: [{ name: 'Sravan Home Tuitions' }],
  creator: 'Sravan Home Tuitions',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Sravan Home Tuitions',
    title: 'Sravan Home Tuitions | Trusted Home Tutors in Attapur, Hyderabad',
    description:
      'Experienced, verified home tutors for all classes, subjects and boards in Attapur, Hyderabad. Learn Today, Lead Tomorrow.',
    images: [
      {
        url: '/images/sravan-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Sravan Home Tuitions logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sravan Home Tuitions | Trusted Home Tutors in Attapur, Hyderabad',
    description:
      'Experienced, verified home tutors for all classes, subjects and boards in Attapur, Hyderabad.',
    images: ['/images/sravan-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#053067',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}#business`,
  name: 'Sravan Home Tuitions',
  image: `${siteUrl}/images/sravan-logo.png`,
  url: siteUrl,
  telephone: '+91-6302267422',
  slogan: 'Learn Today, Lead Tomorrow',
  description:
    'Experienced and verified home tutors for all classes, all subjects and all boards in Attapur, Hyderabad.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Attapur',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500048',
    addressCountry: 'IN',
  },
  areaServed: [
    'Attapur',
    'Karwan',
    'Hyderguda',
    'Mehdipatnam',
    'Rajendranagar',
    'Langar Houz',
    'Manikonda',
    'Narsingi',
    'Budwel',
  ],
  priceRange: '₹₹',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '21:00',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
