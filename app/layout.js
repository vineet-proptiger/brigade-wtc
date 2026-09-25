import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://brigadedevanahalli.co.in'),
  title: 'Brigade WTC Devanahalli | Luxury 1, 1.5, 2 & 3 BHK in Devanahalli',
  description: "Brigade WTC Devanahalli, Devanahalli offers luxury 1, 1.5, 2 & 3 BHK homes with 30+ amenities from ₹65 Lakhs*.",
  alternates: {
    canonical: 'https://brigadedevanahalli.co.in',
  },
  openGraph: {
    title: 'Brigade WTC Devanahalli | Luxury 1, 1.5, 2 & 3 BHK in Devanahalli',
    description: "Brigade WTC Devanahalli, Devanahalli offers luxury 1, 1.5, 2 & 3 BHK homes with 30+ amenities from ₹65 Lakhs*.",
    url: 'https://brigadedevanahalli.co.in',
    siteName: 'Brigade WTC Devanahalli',
    images: [
      {
        url: '/images/hero/banner1.webp',
        width: 1200,
        height: 630,
        alt: 'Brigade WTC Devanahalli at Devanahalli, North Bengaluru',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brigade WTC Devanahalli | Luxury 1, 1.5, 2 & 3 BHK in Devanahalli',
    description: "Brigade WTC Devanahalli, Devanahalli offers luxury 1, 1.5, 2 & 3 BHK homes with 30+ amenities from ₹65 Lakhs*.",
    images: ['/images/hero/banner1.webp'],
  },
  icons: {
    icon: '/images/favicon/fav.webp',
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Brigade WTC Devanahalli",
              "url": "https://brigadedevanahalli.co.in",
              "logo": "https://brigadedevanahalli.co.in/images/logo/Logo.webp",
              "image": "https://brigadedevanahalli.co.in/images/hero/banner1.webp",
              "description": "Brigade WTC Devanahalli at Devanahalli, North Bengaluru offers premium 1, 1.5, 2 & 3 BHK residences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Devanahalli",
                "addressLocality": "Bengaluru",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 65 Lakhs Onwards",
              "sameAs": [
                "https://brigadedevanahalli.co.in"
              ]
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
