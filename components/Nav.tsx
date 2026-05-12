"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`wrap ${styles.inner}`}>
        <a className={styles.brand} href="#" aria-label="Saywise">
          <span className={styles.brandMark}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/saywise-logo-white.png" alt="Saywise" />
          </span>
        </a>
        <ul className={styles.links}>
          <li>
            <a href="#professionals">For professionals</a>
          </li>
          <li>
            <a href="#companies">For companies</a>
          </li>
        </ul>
        <div className={styles.right}>
          <a className="btn btn-ghost" href="#">
            Sign in
          </a>
          <a className="btn btn-solid" href="#">
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}
