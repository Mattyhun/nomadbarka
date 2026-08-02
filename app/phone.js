// ====== TELEFONSZÁM-ÜTEMEZÉS ======
// A tulaj 2026. aug. 2–9. között távol van, addig helyettesítő számok élnek.
// A határidők magyar éjfélt jelölnek UTC-ben megadva (nyáron CEST = UTC+2).
// Aug. 10-től automatikusan a saját szám jelenik meg; a távollét után ez a
// fájl visszaegyszerűsíthető a SAJAT számra.

const SAJAT = { display: "+36 30 199 2717", href: "tel:+36301992717" };

const HELYETTESITOK = [
  // aug. 2–3. (hétfő éjfélig)
  {
    until: Date.parse("2026-08-03T22:00:00Z"),
    display: "+36 20 611 9500",
    href: "tel:+36206119500",
  },
  // aug. 4–9. (vasárnap éjfélig)
  {
    until: Date.parse("2026-08-09T22:00:00Z"),
    display: "06 30 926 1338",
    href: "tel:+36309261338",
  },
];

export function getPhone(now = Date.now()) {
  for (const p of HELYETTESITOK) {
    if (now < p.until) return { display: p.display, href: p.href };
  }
  return SAJAT;
}
