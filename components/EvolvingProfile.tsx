import styles from "./EvolvingProfile.module.css";

const CARDS = [
  {
    chip: "Expert community",
    title: "Get recognized as an expert",
    body: "Share your unique insights and perspectives in Saywise's content discovery feed, and get discovered by recruiters and the community.",
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
  {
    chip: "AI content co-pilot",
    title: "Create content without doing all the work yourself",
    body: "Saywise AI suggests topics, drafts talking points, and can even schedule recurring phone calls so you can simply talk. Authentic content creation should feel effortless.",
  },
];

export function EvolvingProfile() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <h2 className={styles.heading}>
            The next-gen professional profile
          </h2>
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
