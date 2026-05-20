import styles from "./EvolvingProfile.module.css";

const CARDS = [
  {
    chip: "Expert community",
    title: "Get recognized as an expert",
    body: "Share your unique insights and perspectives in Saywise's content discovery feed, and get discovered by recruiters and the community.",
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
  {
    chip: "Dynamic profile generation",
    title: "Tailor your profile for every role",
    body: "Stop rewriting your profile for every application. Paste a job description and instantly generate a tailored version of your profile, and share it with a unique link.",
  },
];

export function EvolvingProfile() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <h2 className={styles.heading}>Stand out and get discovered</h2>
          <p className={styles.sub}>
            You tell your story. Our AI helps you find the right opportunities.
          </p>
        </div>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <article key={card.title} className={styles.card}>
              <span className={styles.chip}>{card.chip}</span>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.body}>{card.body}</p>
              <div className={styles.media} aria-hidden />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
