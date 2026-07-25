import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  metadataBase: new URL("https://nomadbarka.hu"),
  title: "Nomád Bárka – Motorcsónak taxi a Dunakanyarban | Nagymaros, Visegrád",
  description:
    "Nomád Bárka: motorcsónak taxi (hajótaxi) a Dunakanyarban. Vízitaxi a Kisoroszi-szigetcsúcs, Visegrád, Kismaros és Nagymaros felé. Bringát is viszünk. Hívj: +36 30 199 2717.",
  keywords: [
    "motorcsónak taxi Dunakanyar",
    "vízitaxi Dunakanyar",
    "hajótaxi Dunakanyar",
    "vízitaxi Visegrád",
    "vízitaxi Nagymaros",
    "motorcsónak Kisoroszi",
    "Nomád Bár hajó",
    "Visegrád Nagymaros átkelés",
    "Dunakanyar strand hajóval",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "kuEiNVPw8aVVQ3PJJsldQ1_PbKWmEAnrg77t-5-osac",
  },
  openGraph: {
    title: "Nomád Bárka – Motorcsónak taxi a Dunakanyarban",
    description:
      "Motorcsónakkal a Dunakanyar legjobb helyeire. Bringát is viszünk.",
    url: "/",
    locale: "hu_HU",
    type: "website",
    siteName: "Nomád Bárka",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A Nomád Bárka motorcsónak a Dunán, a Dunakanyarban",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomád Bárka – Motorcsónak taxi a Dunakanyarban",
    description:
      "Motorcsónakkal a Dunakanyar legjobb helyeire. Bringát is viszünk.",
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: "#10425a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  name: "Nomád Bárka – Motorcsónak taxi a Dunakanyarban",
  alternateName: "Bárka",
  description:
    "Motorcsónak taxi (vízitaxi) a Dunakanyarban: a Kisoroszi-szigetcsúcs, Visegrád, Kismaros és Nagymaros felé. Bringát is viszünk. Szezon: május 1. – szeptember 30., minden nap 9:00–22:00, hajózható időben.",
  url: "https://nomadbarka.hu",
  telephone: "+36301992717",
  image: "https://nomadbarka.hu/og-image.jpg",
  priceRange: "3 000–26 000 Ft",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nagymaros",
    addressCountry: "HU",
  },
  areaServed: ["Nagymaros", "Visegrád", "Kismaros", "Kisoroszi", "Dunakanyar"],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Átkelés: Kismaros, Nagymaros vagy Visegrád",
      price: "3500",
      priceCurrency: "HUF",
    },
    {
      "@type": "Offer",
      name: "Átkelés: Kisoroszi-szigetcsúcs",
      price: "3000",
      priceCurrency: "HUF",
    },
    {
      "@type": "Offer",
      name: "Egyéni útvonal (30 perc)",
      price: "26000",
      priceCurrency: "HUF",
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "22:00",
  },
  sameAs: ["https://nomadbar.hu"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
