import styles from "./Hero.module.css";

type Props = {
  title: string;
  titleMuted?: string;
  subhead?: string;
  imageLabel: string;
  backdrop?: boolean;
};

export function Hero({
  title,
  titleMuted,
  subhead,
  imageLabel,
  backdrop = false,
}: Props) {
  return (
    <section className={styles.hero}>
      {backdrop && (
        <>
          <div className={styles.bg} aria-hidden />
          <div className={styles.veil} aria-hidden />
        </>
      )}
      <div className="wrap-narrow">
        <div className={styles.text}>
          <h1 className={styles.heading}>
            {title}
            {titleMuted && (
              <>
                <br />
                <span className={styles.muted}>{titleMuted}</span>
              </>
            )}
          </h1>
          {subhead && <p className={styles.subhead}>{subhead}</p>}
        </div>

        <div className={styles.media}>
          <span className={styles.mediaLabel}>{imageLabel}</span>
        </div>
      </div>
    </section>
  );
}
