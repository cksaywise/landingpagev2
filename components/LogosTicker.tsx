import styles from "./LogosTicker.module.css";

const LOGOS = [
  { slug: "linear", name: "Linear" },
  { slug: "stripe", name: "Stripe" },
  { slug: "notion", name: "Notion" },
  { slug: "figma", name: "Figma" },
  { slug: "vercel", name: "Vercel" },
  { slug: "anthropic", name: "Anthropic" },
  { slug: "airbnb", name: "Airbnb" },
  { slug: "shopify", name: "Shopify" },
  { slug: "spotify", name: "Spotify" },
  { slug: "discord", name: "Discord" },
];

export function LogosTicker() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Companies hiring on Saywise</h2>
      <div className={styles.ticker}>
        <div className={styles.track}>
          {LOGOS.map((l) => (
            <div key={l.slug} className={styles.cell}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://cdn.simpleicons.org/${l.slug}/0a0a0a`} alt="" />
              <span className={styles.name}>{l.name}</span>
            </div>
          ))}
          {LOGOS.map((l) => (
            <div
              key={`dup-${l.slug}`}
              className={styles.cell}
              aria-hidden="true"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://cdn.simpleicons.org/${l.slug}/0a0a0a`} alt="" />
              <span className={styles.name}>{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
