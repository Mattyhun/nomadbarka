import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  metadataBase: new URL("https://nomadbarka.hu"),
  title: "Bárka – Hajótaxi a Dunakanyarban | Nomád Bár, Nagymaros",
  description:
    "Bárka hajótaxi a Dunakanyarban: motorcsónakkal a Kisoroszi-szigetcsúcs, Visegrád, Kismaros és Nagymaros felé. Bringát is viszünk.",
  keywords: [
    "hajótaxi Dunakanyar",
    "vízitaxi Nagymaros",
    "motorcsónak Kisoroszi",
    "Nomád Bár hajó",
    "Visegrád Nagymaros átkelés",
    "Dunakanyar strand hajóval",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bárka – Hajótaxi a Dunakanyarban",
    description:
      "Motorcsónakkal a Dunakanyar legjobb helyeire. Bringát is viszünk.",
    url: "/",
    locale: "hu_HU",
    type: "website",
    siteName: "Bárka",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A Bárka motorcsónak a Dunán, a Dunakanyarban",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bárka – Hajótaxi a Dunakanyarban",
    description:
      "Motorcsónakkal a Dunakanyar legjobb helyeire. Bringát is viszünk.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bárka – Hajótaxi a Dunakanyarban",
  description:
    "Hajótaxi a Dunakanyarban: motorcsónakkal a Kisoroszi-szigetcsúcs, Visegrád, Kismaros és Nagymaros felé. Bringát is viszünk. Szezon: május 1. – szeptember 30., minden nap 9:00–22:00, hajózható időben.",
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
      </body>
    </html>
  );
}
