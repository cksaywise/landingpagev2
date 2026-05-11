import styles from "./Hero.module.css";

const STEPS = [
  {
    num: "Step 01",
    title: "Connect and get interviewed",
    desc: "Connect your LinkedIn and resume, then complete an in-depth interview.",
    art: "Placeholder · connect + interview",
  },
  {
    num: "Step 02",
    title: "Review your profile",
    desc: "See your profile come to life with multimedia drafts, ready to review and publish.",
    art: "Placeholder · profile review",
  },
  {
    num: "Step 03",
    title: "Get discovered and grow",
    desc: "Get discovered and matched, and keep adding content to your living profile.",
    art: "Placeholder · discovery + growth",
  },
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden />
      <div className={styles.veil} aria-hidden />
      <div className="wrap-narrow">
        <h1 className={styles.heading}>
          Resume is dead.
          <br />
          <span className={styles.muted}>Your work isn&apos;t.</span>
        </h1>
        <p className={styles.lead}>
          Your best work deserves more than bullet points and keywords.
          <br />
          Use Saywise to show the real context, depth, and thinking - in your
          own voice.
        </p>

        <div className={styles.steps}>
          {STEPS.map((s) => (
            <article key={s.num} className={styles.step}>
              <div>
                <div className={styles.stepNum}>{s.num}</div>
                <div className={styles.stepTitle}>{s.title}</div>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
              <div className={styles.stepArt}>{s.art}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
