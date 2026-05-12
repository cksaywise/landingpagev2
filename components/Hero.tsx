import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden />
      <div className={styles.veil} aria-hidden />
      <div className="wrap-narrow">
        <h1 className={styles.heading}>
          Resume is dead.
          <br />
          <span className={styles.muted}>Your work isn&apos;t.</span>
        </h1>

        <div className={styles.media}>
          <span className={styles.mediaLabel}>
            a beautiful image for profile
          </span>
        </div>
      </div>
    </section>
  );
}
