import styles from "./StatsStrip.module.css";

const STATS = [
  {
    num: "74%",
    label: "of Saywise profiles get a recruiter reply within two weeks.",
  },
  {
    num: "1.4×",
    label: "more interviews compared to a standard resume submission.",
  },
  {
    num: "$3K",
    label: "average salary uplift reported by Saywise members in their next role.",
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
