import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CtaStrip } from "@/components/CtaStrip";
import { FeatureRows, FeatureRow } from "@/components/FeatureRows";
import { Footer } from "@/components/Footer";

const rows: FeatureRow[] = [
  {
    title: "See beyond the resume",
    body: "Understand the person behind the bullet points through video intros, case studies, social endorsements, and other credible signals. Save interview time by evaluating richer context and more verifiable proof of work upfront.",
  },
  {
    title: "Find experts through content",
    body: "For many of the best candidates, their content is their best resume. Saywise creates a discovery space with insightful content from experts, helping companies find the right people through their ideas and authentic perspectives.",
  },
  {
    title: "AI-native hiring platform",
    body: "Let Saywise agents discover and surface the best talent for your team through rich profiles that truly represent their work. Think of Saywise as a collection of living profiles your AI agents can search, understand, and even ask questions to.",
  },
];

export default function CompaniesPage() {
  return (
    <>
      <Nav />
      <Hero
        title="Find people, not keyword matches"
        subhead="There's someone perfect for your team. You just haven't discovered them yet."
        imageLabel="Eye-catching video or image targeted for companies"
        backdropImage="/assets/hero-dawn-8bit.png"
      />
      <FeatureRows rows={rows} />
      <CtaStrip headline="Start finding people, not keywords" flush />
      <Footer />
    </>
  );
}
