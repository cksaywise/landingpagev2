import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.wordmark}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/saywise-logo-white.png" alt="Saywise" />
        </div>
      </div>
    </footer>
  );
}
