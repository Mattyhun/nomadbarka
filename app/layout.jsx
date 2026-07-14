import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://nomadbarka.hu"),
  title: "Bárka – Hajótaxi a Dunakanyarban | Nomád Bár, Nagymaros",
  description:
    "Bárka hajótaxi a Nomád Bártól: motorcsónakkal Kisoroszi, Visegrád, Zebegény, Dunabogdány és a Dunakanyar legjobb strandjai felé. Távolság szerinti árak, bringát is viszünk.",
  keywords: [
    "hajótaxi Dunakanyar",
    "vízitaxi Nagymaros",
    "motorcsónak Kisoroszi",
    "Nomád Bár hajó",
    "Visegrád Nagymaros átkelés",
    "Dunakanyar strand hajóval",
  ],
  openGraph: {
    title: "Bárka – Hajótaxi a Dunakanyarban",
    description:
      "Motorcsónakkal a Nomád Bártól a Dunakanyar legjobb helyeire. Távolság szerinti árak, bringát is viszünk.",
    locale: "hu_HU",
    type: "website",
    siteName: "Bárka",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
