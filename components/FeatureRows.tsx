import styles from "./FeatureRows.module.css";

export type FeatureRow = {
  chip?: string;
  title: string;
  body: string;
};

type Props = {
  heading?: string;
  sub?: string;
  rows: FeatureRow[];
};

export function FeatureRows({ heading, sub, rows }: Props) {
  const showHead = heading || sub;

  return (
    <section className={styles.section}>
      <div className="wrap">
        {showHead && (
          <div className={styles.head}>
            {heading && <h2 className={styles.heading}>{heading}</h2>}
            {sub && <p className={styles.sub}>{sub}</p>}
          </div>
        )}

        <div className={styles.rows}>
          {rows.map((row, i) => (
            <div
              key={row.title}
              className={`${styles.row} ${i % 2 === 1 ? styles.rowReverse : ""}`}
            >
              <div className={styles.copy}>
                {row.chip && <span className={styles.chip}>{row.chip}</span>}
                <h3 className={styles.title}>{row.title}</h3>
                <p className={styles.body}>{row.body}</p>
              </div>
              <div className={styles.media} aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
