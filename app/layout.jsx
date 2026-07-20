import "./globals.css";

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
  openGraph: {
    title: "Bárka – Hajótaxi a Dunakanyarban",
    description:
      "Motorcsónakkal a Dunakanyar legjobb helyeire. Bringát is viszünk.",
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
