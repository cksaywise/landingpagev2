"use client";

import { useState } from "react";
import styles from "./FeatureSection.module.css";

export type FeatureTab = {
  label: string;
  headline: string;
  body: string;
  mediaLabel: string;
};

type Props = {
  heading: string;
  tabs: FeatureTab[];
};

export function FeatureSection({ heading, tabs }: Props) {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className={styles.feature}>
      <div className="wrap">
        <div className={styles.head}>
          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <div className={styles.tabs} role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              role="tab"
              aria-selected={i === active}
              className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              <span className={styles.tabIdx}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.body}>
          <div className={styles.copy}>
            <h3>{current.headline}</h3>
            <p>{current.body}</p>
          </div>
          <div className={styles.media}>
            <span className={styles.mediaLabel}>{current.mediaLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
