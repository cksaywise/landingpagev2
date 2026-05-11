import styles from "./Hero.module.css";

const STEPS = [
  {
    num: "Step 01",
    title: "Drop in a link",
    desc: "LinkedIn, Notion, GitHub — wherever your work already lives.",
    art: "Placeholder · drop in a link",
  },
  {
    num: "Step 02",
    title: "We draft your story",
    desc: "A timeline of projects, talks, and writing — extracted and arranged.",
    art: "Placeholder · profile draft",
  },
  {
    num: "Step 03",
    title: "Make it yours",
    desc: "Pick a theme, edit in your voice, and ship a profile that feels like you.",
    art: "Placeholder · publish",
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
          Use Saywise to show the real context, depth, and thinking — in your
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
