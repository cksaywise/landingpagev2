import styles from "./BeyondResume.module.css";

const ROWS = [
  {
    chip: "Video-first profile",
    title: "Stand out with video",
    body: "Today's world is video-first. 76% of hiring managers pay more attention to profiles with video. Create self-intros and project explainers with guided scripts and a built-in teleprompter.",
  },
  {
    chip: "Multimedia storytelling",
    title: "Show, don't just tell",
    body: "Add case studies, project metrics, AI skills. Include video endorsements from collaborators. Without a one-page limit, you can dive deep into the why behind your work, helping you stand out and build trust.",
  },
  {
    chip: "AI readability",
    title: "AI-ready. Human-friendly.",
    body: "These days, AI often reads profiles before humans do. Saywise optimizes your profile for AI readability, increasing your chances of getting discovered through AI-powered search.",
  },
];

export function BeyondResume() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <h2 className={styles.heading}>Go beyond the resume</h2>
          <p className={styles.sub}>
            Your best work deserves more than bullet points. Tell your full
            story and get discovered.
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
