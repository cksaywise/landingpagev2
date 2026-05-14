"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const proActive = pathname === "/";
  const compActive = pathname === "/companies";

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`wrap ${styles.inner}`}>
        <Link className={styles.brand} href="/" aria-label="Saywise">
          <span className={styles.brandMark}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/saywise-logo-white.png" alt="Saywise" />
          </span>
        </Link>
        <ul className={styles.links}>
          <li>
            <Link
              href="/"
              className={proActive ? styles.linkActive : ""}
              aria-current={proActive ? "page" : undefined}
            >
              For professionals
            </Link>
          </li>
          <li>
            <Link
              href="/companies"
              className={compActive ? styles.linkActive : ""}
              aria-current={compActive ? "page" : undefined}
            >
              For companies
            </Link>
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
