import styles from "./FeaturedItems.module.css";

type Props = {
  heading: string;
  seeMoreHref?: string;
  seeMoreLabel?: string;
  count?: number;
};

export function FeaturedItems({
  heading,
  seeMoreHref = "#",
  seeMoreLabel = "See more →",
  count = 3,
}: Props) {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <header className={styles.header}>
          <h2 className={styles.heading}>{heading}</h2>
          <a className={styles.seeMore} href={seeMoreHref}>
            {seeMoreLabel}
          </a>
        </header>
        <div className={styles.grid}>
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className={styles.card} aria-hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
