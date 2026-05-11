import styles from "./StatsStrip.module.css";

const STATS = [
  {
    num: "74%",
    label: "74% of recruiters say video in applications helps with evaluation",
  },
  {
    num: "1.4×",
    label: "Candidates with video are 1.4× more likely to get interviews",
  },
  {
    num: "$3K",
    label: "Average spend on resume writing and career coaching",
  },
];

export function StatsStrip() {
  return (
    <section className={styles.stats}>
      <div className="wrap">
        <div className={styles.grid}>
          {STATS.map((s) => (
            <div key={s.num} className={styles.stat}>
              <div className={styles.num}>{s.num}</div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
