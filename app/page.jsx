// ====== KÖNNYEN SZERKESZTHETŐ ADATOK ======
const PHONE = "+36 30 199 2717";
const PHONE_LINK = "tel:+36301992717";

const PRICES = [
  { dest: "Kismaros", price: "3 500 Ft" },
  { dest: "Nagymaros", price: "3 500 Ft" },
  { dest: "Visegrád", price: "3 500 Ft" },
  { dest: "Kisoroszi-szigetcsúcs", price: "3 000 Ft" },
];

const DESTINATIONS = [
  {
    name: "Kisoroszi-szigetcsúcs",
    price: "3 000 Ft/fő",
    desc: "A Dunakanyar ikonikus pontja. Jó fürdőhely, bitang panoráma. Enni-inni hozz, mert a büfé távolabb van. Kavicsos a part, gyors sodrású a Duna, de lassan mélyül a vize.",
  },
  {
    name: "Kismaros homokzátony",
    price: "3 500 Ft/fő",
    desc: "A legfinomabb homokos szabad strand a környéken! Ideális gyerekekkel, mert nagyon lassan mélyül a víz és a sodrás is gyenge. Csak vízen keresztül közelíthető meg – pont ezért visz oda a Bárka.",
  },
  {
    name: "Nagymaros strand",
    price: "3 500 Ft/fő",
    desc: "A Dunakanyar legjobb hekkje a sarki büfében, házi sütik és kézműves sörök a Piknik Manufaktúrában. Homokos strand, vadonatúj játszótér a kicsiknek.",
  },
  {
    name: "Visegrád",
    price: "3 500 Ft/fő",
    desc: "Vár, panoráma, bob – a Dunakanyar klasszikusa. A Bárkával a komp menetrendjétől függetlenül, pár perc alatt átérsz.",
  },
];

// ====== OLDAL ======
export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            BÁR<span>KA</span>
          </a>
          <div className="nav-links">
            <a href="#arak">Árak</a>
            <a href="#celpontok">Célpontok</a>
            <a href="#tudnivalok">Tudnivalók</a>
            <a href={PHONE_LINK} className="nav-phone">
              {PHONE}
            </a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <h1>
            BÁR<span>KA</span>
          </h1>
          <p className="tagline">A bárka, ami a Bárhoz visz.</p>
          <p className="sub">
            Hajótaxi a <a href="https://nomadbar.hu" style={{ color: "inherit", textDecoration: "underline" }}>Nomád Bárhoz</a> és
            a Dunakanyar legjobb strandjaira, büféibe és falvaiba. Bringát is viszünk!
          </p>
          <div className="hero-cta">
            <a href={PHONE_LINK} className="btn btn-primary">
              <span aria-hidden="true">📞</span>
              {PHONE}
            </a>
            <a href="#arak" className="btn btn-ghost">
              Árak megnézése
            </a>
          </div>
          <div className="hero-badge">
            ⛵ Május 1. – szeptember 30. · minden nap 9:00–22:00 · hajózható időben
          </div>
        </div>
        <svg className="waves" viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,50 L1440,90 L0,90 Z"
            fill="#fbf7ec"
          />
        </svg>
      </header>

      <section id="arak" className="prices">
        <div className="container">
          <h2 className="section-title">Árak</h2>
          <p className="section-lead">
            Az árak egy főre, egy irányba értendők.
          </p>
          <div className="price-grid">
            {PRICES.map((p) => (
              <div className="price-card" key={p.dest}>
                <div className="dest">{p.dest}</div>
                <div className="price">{p.price} / fő</div>
              </div>
            ))}
          </div>
          <div className="price-notes">
            <div className="note-card">
              <strong>+1 000 Ft</strong>
              bringánként – a kerékpárodat is átvisszük
            </div>
            <div className="note-card">
              <strong>26 000 Ft / 30 perc</strong>
              egyéni útvonal – te mondod, merre menjünk
            </div>
            <div className="note-card">
              <strong>5 fő</strong>
              fér el egyszerre a csónakban
            </div>
          </div>
        </div>
      </section>

      <section id="hogyan">
        <div className="container">
          <h2 className="section-title">Hogyan működik?</h2>
          <p className="section-lead">Nincs menetrend, nincs sorban állás – hívsz, és jövünk.</p>
          <div className="how-grid">
            <div className="how-card">
              <div className="num">1</div>
              <h3>Hívj fel</h3>
              <p>
                Csörögj rá a <a href={PHONE_LINK}>{PHONE}</a> számra, és mondd meg, hova mennél és
                hányan vagytok.
              </p>
            </div>
            <div className="how-card">
              <div className="num">2</div>
              <h3>Irány a víz</h3>
              <p>
                Beszállás, mentőmellény, és már siklunk is. A legtöbb célpont 5–15 perc a vízen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="boat">
        <div className="container">
          <h2 className="section-title">A csónak</h2>
          <div className="boat-stats">
            <div className="stat">
              <h3>4</h3>
              <p>utas fér be egyszerre</p>
            </div>
            <div className="stat">
              <h3>40 km/h</h3>
              <p>maximális sebesség a vízen</p>
            </div>
            <div className="stat">
              <h3>20 LE</h3>
              <p>környezetbarát, 4 ütemű Suzuki motor</p>
            </div>
          </div>
        </div>
      </section>

      <section id="celpontok">
        <div className="container">
          <h2 className="section-title">Hova vigyünk?</h2>
          <p className="section-lead">A Dunakanyar legjobb helyei, ahogy mi ismerjük őket.</p>
          <div className="dest-grid">
            {DESTINATIONS.map((d) => (
              <div className="dest-card" key={d.name}>
                <div className="dest-head">
                  <h3>{d.name}</h3>
                  <span className="p">{d.price}</span>
                </div>
                <p className="desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tudnivalok" className="rules">
        <div className="container">
          <h2 className="section-title">Fontos tudnivalók</h2>
          <p className="section-lead">Röviden, őszintén.</p>
          <div className="rules-box">
            <p>
              <strong>Ez nem hivatásos személyszállítás,</strong> hanem közös baráti hajózás, amit
              minden, a hajó fedélzetére lépő utas automatikusan elfogad. A kapitány részére átadott
              összeggel a közös élmény költségeihez járulsz hozzá: üzemanyag, a hajó amortizációja,
              szervize és tárolása.
            </p>
            <p>
              A program <strong>időjárásfüggő</strong>: hajózható idő esetén május 1. és szeptember
              30. között minden nap 9:00 és 22:00 óra között elérhető.
            </p>
            <p>
              Az úton mindenki a <strong>saját felelősségére</strong> vesz részt. A hajó a Hajózási
              Szabályzatban előírt életmentő és egyéb felszerelésekkel fel van szerelve.
            </p>
            <p>
              Az élményen és kényelmen túl sok esetben <strong>olcsóbb és gyorsabb</strong> velünk
              utazni, mint autóval kompot és parkolást fizetgetve.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="kontakt">
        <div className="container">
          <h2 className="section-title">Kontakt</h2>
          <a href={PHONE_LINK} className="phone-big">
            {PHONE}
          </a>
          <p className="hours">Május 1. – szeptember 30. · minden nap 9:00–22:00</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="foot-logo">BÁRKA</div>
          <p>Hajótaxi a Dunakanyarban.</p>
          <p style={{ marginTop: 10 }}>
            <a href="https://nomadbar.hu">nomadbar.hu</a> ·{" "}
            <a href="https://neunex.hu">Weboldal: NeuNex</a>
          </p>
          <p style={{ marginTop: 10, opacity: 0.6 }}>© {new Date().getFullYear()} Bárka</p>
        </div>
      </footer>
    </main>
  );
}
