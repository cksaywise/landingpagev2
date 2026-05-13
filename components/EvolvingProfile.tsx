import styles from "./EvolvingProfile.module.css";

const CARDS = [
  {
    chip: "Expert community",
    title: "Get recognized as an expert",
    body: "Share your unique insights and perspectives in Saywise's content discovery feed, and get discovered by recruiters and the community.",
  },
  {
    chip: "AI content co-pilot",
    title: "Tell your human story. Let AI do the heavy lifting.",
    body: "Telling your authentic story doesn't mean creating everything manually. Let Saywise AI help generate video scripts and draft posts in your own voice.",
  },
  {
    chip: "Dynamic profile generation",
    title: "Tailor your profile for every role",
    body: "Stop rewriting your profile for every application. Paste a job description and instantly generate a tailored version of your profile, and share it with a unique link.",
  },
  {
    chip: "Mock interview",
    title: "Practice interviews that feel human",
    body: "Practice with natural, human-like mock interviews on Saywise. Turn your best responses into public content and add them directly to your profile.",
  },
];

export function EvolvingProfile() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <h2 className={styles.heading}>A profile that evolves with you</h2>
          <p className={styles.sub}>
            Build a living profile with new ideas and content - like your
            personal Wikipedia
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
