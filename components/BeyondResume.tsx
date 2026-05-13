import styles from "./BeyondResume.module.css";

const ROWS = [
  {
    chip: "Full-context storytelling",
    title: "Go beyond the resume",
    body: "While humans prefer one-page resumes, AI agents thrive on richer context and more data. Build a living profile that goes beyond bullet points - with videos, case studies, links, and more.",
  },
  {
    chip: "AI readability",
    title: "AI-optimized. Human-friendly.",
    body: "Increasingly, AI reads profiles before humans do. Make your profile better readable to AI agents while keeping it clear and engaging for humans.",
  },
  {
    chip: "Job matching agents",
    title: "Let agents find opportunities",
    body: "Let Saywise agents work for you by surfacing the best opportunities - from full-time roles to fractional work, consulting projects, and more.",
  },
];

export function BeyondResume() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <h2 className={styles.heading}>
            Your professional profile for the agentic era
          </h2>
          <p className={styles.sub}>
            Tell your full story and get discovered.
          </p>
        </div>

        <div className={styles.rows}>
          {ROWS.map((row, i) => (
            <div
              key={row.title}
              className={`${styles.row} ${i % 2 === 1 ? styles.rowReverse : ""}`}
            >
              <div className={styles.copy}>
                <span className={styles.chip}>{row.chip}</span>
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
