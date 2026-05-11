"use client";

import { FormEvent, useState } from "react";
import styles from "./CtaStrip.module.css";

type Props = {
  headline: string;
  flush?: boolean;
};

export function CtaStrip({ headline, flush }: Props) {
  const [value, setValue] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className={`${styles.strip} ${flush ? styles.flush : ""}`}>
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
        <div className={styles.meta}>Free · No credit card required</div>
      </div>
    </section>
  );
}
