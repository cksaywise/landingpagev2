"use client";

import { FormEvent, useState } from "react";
import styles from "./CtaStrip.module.css";

type Props = {
  headline: string;
};

export function CtaStrip({ headline }: Props) {
  const [value, setValue] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className={styles.strip}>
      <div className="wrap-narrow">
        <span className={`kicker ${styles.kicker}`}>Start now</span>
        <h2 className={styles.heading}>{headline}</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="linkedin.com/in/your-handle"
            aria-label="Your LinkedIn URL"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className={`btn btn-lg ${styles.submit}`}
            type="submit"
          >
            Start →
          </button>
        </form>
        <div className={styles.meta}>
          Free · No credit card · Takes about a minute
        </div>
      </div>
    </section>
  );
}
