import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CtaStrip } from "@/components/CtaStrip";
import { FeatureRows, FeatureRow } from "@/components/FeatureRows";
import { Footer } from "@/components/Footer";

const rows: FeatureRow[] = [
  {
    title: "See how candidates think",
    body: "Resumes say very little about how someone solves problems or communicates ideas. Through videos, case studies, ongoing content, and project explainers, Saywise helps you evaluate how candidates think and whether they're the right culture fit before the first interview.",
  },
  {
    title: "See proof, not claims",
    body: "Anyone can claim they use AI. Saywise helps candidates showcase real AI projects, workflows, prompts, and automations so your team can evaluate how they actually use AI in practice.",
  },
  {
    title: "AI-native talent discovery",
    body: "The best candidates often aren't actively applying. Instead of filtering resumes by keywords, Saywise helps recruiters and AI agents discover talent through natural language search across rich profiles, AI projects, ongoing insights, and authentic proof of work.",
  },
];

export default function CompaniesPage() {
  return (
    <>
      <Nav />
      <Hero
        title="Find AI-native builders, not keyword matches"
        subhead="The best AI-native talent can't be understood through bullet points alone. Saywise helps you discover how candidates think, build, communicate, and actually use AI."
        imageLabel="Eye-catching video or image targeted for companies"
        backdropImage="/assets/hero-dawn-8bit.png"
      />
      <FeatureRows rows={rows} />
      <CtaStrip headline="Start finding people, not keywords" flush />
      <Footer />
    </>
  );
}
