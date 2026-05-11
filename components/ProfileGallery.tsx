import styles from "./ProfileGallery.module.css";

const PROFILES = [
  {
    name: "Maya Chen",
    role: "Designer & writer · Brooklyn",
    avatar: "linear-gradient(135deg, rgba(0,0,0,0.14), rgba(0,0,0,0.08))",
  },
  {
    name: "Dimas Ardiansyah",
    role: "Engineer · Berlin",
    avatar: "linear-gradient(135deg, #cdd6e0, #9aa4b1)",
  },
  {
    name: "Priya Raman",
    role: "PM · Bengaluru",
    avatar: "linear-gradient(135deg, #e6d8c8, #bba78c)",
  },
];

export function ProfileGallery() {
  return (
    <section className={styles.gallery}>
      <div className="wrap">
        <h2 className={styles.heading}>See profiles built with Saywise</h2>
        <div className={styles.grid}>
          {PROFILES.map((p) => (
            <article key={p.name} className={styles.card}>
              <div>
                <div
                  className={styles.avatar}
                  style={{ background: p.avatar }}
                />
                <div className={styles.name}>{p.name}</div>
                <div className={styles.role}>{p.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
