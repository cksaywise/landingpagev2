import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CtaStrip } from "@/components/CtaStrip";
import { FeatureRows, FeatureRow } from "@/components/FeatureRows";
import { Footer } from "@/components/Footer";

const rows: FeatureRow[] = [
  {
    title: "AI-native hiring platform",
    body: "Let Saywise agents discover and surface the best talent for your team through rich profiles that truly represent their work.",
  },
  {
    title: "See beyond the resume",
    body: "Understand the person behind the bullet points through video, case studies, and other credible signals, not just keywords.",
  },
  {
    title: "Find experts through content",
    body: "The best candidates often aren't applying. Discover them through authentic insights and expertise shared on their Saywise profiles.",
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
      />
      <FeatureRows rows={rows} />
      <CtaStrip headline="Start finding people, not keywords" flush />
      <Footer />
    </>
  );
}
