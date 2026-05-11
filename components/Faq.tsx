"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import styles from "./Faq.module.css";

type Qa = {
  q: string;
  a: string[];
};

const ITEMS: Qa[] = [
  {
    q: "What is Saywise?",
    a: [
      "Saywise is a Resume 2.0 platform for the AI era. Instead of reducing your work into bullet points and keywords, Saywise helps you showcase how you think through stories, videos, case studies, AI projects, and other rich content.",
      "It's a living professional profile designed for both human and AI readers.",
    ],
  },
  {
    q: "Why do I need another profile page when I already have a resume?",
    a: [
      "Resumes are static documents built for a different era. They compress years of work into a few bullet points and make everyone look the same, especially in the age of AI-generated “ATS-friendly” resumes.",
      "Saywise gives you space to show the real depth behind your work through richer storytelling, multimedia content, and proof of what you've actually built.",
    ],
  },
  {
    q: "Why can't I just use Notion or Framer to build my page?",
    a: [
      "You can, but Saywise is purpose-built for professional identity and discovery.",
      "Instead of starting from a blank page, Saywise helps you generate content, identify gaps, tailor profiles for different roles, optimize for AI readability, practice interviews, and continuously evolve your profile over time.",
      "It's not just a portfolio website builder. It's a career growth platform.",
    ],
  },
  {
    q: "Can't I just vibe code my own site using Claude Code?",
    a: [
      "You probably can — especially if you're technical. But most people don't continuously maintain and update personal sites because it takes time and effort.",
      "Saywise is designed to make ongoing professional storytelling effortless. It helps you continuously generate new content, update your profile, and surface your expertise without manually building and maintaining everything yourself.",
    ],
  },
  {
    q: "Will recruiters and hiring managers actually check out my Saywise profile?",
    a: [
      "Increasingly, yes.",
      "Hiring is becoming more content-driven and AI-driven. Recruiters already look beyond resumes at LinkedIn profiles, portfolios, GitHub, videos, personal websites, and social content.",
      "Saywise brings all of that together into a structured profile designed to help both humans and AI systems better understand your work and expertise.",
    ],
  },
  {
    q: "Can I practice job interviews on Saywise?",
    a: [
      "Yes. Saywise offers natural, human-like mock interviews that feel more conversational than robotic.",
      "You can also turn strong responses from your mock interviews into public content and add them directly to your profile.",
    ],
  },
  {
    q: "Does Saywise help surface job opportunities?",
    a: [
      "Yes. Saywise helps increase your visibility by making your profile more discoverable to recruiters, hiring managers, and AI-powered search systems.",
      "We're also building additional discovery and opportunity-matching features over time.",
    ],
  },
  {
    q: "How do I get started?",
    a: [
      "Simply sign up, connect your LinkedIn and other sources, and complete a guided onboarding interview.",
      "Saywise will help generate your initial profile, identify content gaps, and suggest ways to strengthen your professional story.",
    ],
  },
  {
    q: "How much does Saywise cost?",
    a: [
      "We currently offer free access during our early stage, with additional premium features planned for the future.",
      "Join early to secure access and help shape the future of Resume 2.0.",
    ],
  },
];

export function Faq() {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className={styles.faq}>
      <div className="wrap-narrow">
        <h2 className={styles.heading}>FAQ</h2>
        <div className={styles.list}>
          {ITEMS.map((item, i) => {
            const isOpen = open.has(i);
            return (
              <div key={item.q} className={styles.item}>
                <button
                  className={styles.row}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.q}>{item.q}</span>
                  <span
                    className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                  >
                    <Plus size={14} strokeWidth={1.75} />
                  </span>
                </button>
                <div
                  className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                >
                  <div className={styles.answerInner}>
                    {item.a.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
