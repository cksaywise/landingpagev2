import styles from "./Hero.module.css";

type Props = {
  title: string;
  titleMuted?: string;
  subhead?: string;
  imageLabel: string;
  backdropImage?: string;
};

export function Hero({
  title,
  titleMuted,
  subhead,
  imageLabel,
  backdropImage,
}: Props) {
  return (
    <section className={styles.hero}>
      {backdropImage && (
        <>
          <div
            className={styles.bg}
            aria-hidden
            style={{ backgroundImage: `url(${backdropImage})` }}
          />
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
