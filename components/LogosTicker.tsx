import styles from "./LogosTicker.module.css";

const LOGOS = [
  { slug: "airbnb", name: "Airbnb" },
  { slug: "amazon", name: "Amazon" },
  { slug: "linear", name: "Linear" },
  { slug: "meta", name: "Meta" },
  { slug: "spacex", name: "SpaceX" },
  { slug: "stripe", name: "Stripe" },
  { slug: "typeform", name: "Typeform" },
  { slug: "uber", name: "Uber" },
  { slug: "vercel", name: "Vercel" },
  { slug: "vimeo", name: "Vimeo" },
];

export function LogosTicker() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Companies currently hiring on Saywise</h2>
      <div className={styles.ticker}>
        <div className={styles.track}>
          {LOGOS.map((l) => (
            <div key={l.slug} className={styles.cell}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/assets/logos/${l.slug}.svg`} alt={l.name} />
            </div>
          ))}
          {LOGOS.map((l) => (
            <div
              key={`dup-${l.slug}`}
              className={styles.cell}
              aria-hidden="true"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/assets/logos/${l.slug}.svg`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
