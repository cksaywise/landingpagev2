import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CtaStrip } from "@/components/CtaStrip";
import { FeatureRows, FeatureRow } from "@/components/FeatureRows";
import { StatsStrip } from "@/components/StatsStrip";
import { EvolvingProfile } from "@/components/EvolvingProfile";
import { ProfileGallery } from "@/components/ProfileGallery";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

const proRows: FeatureRow[] = [
  {
    chip: "Full-context storytelling",
    title: "Go beyond the resume",
    body: "While humans prefer one-page resumes, AI agents thrive on richer context and more data. Build a living profile that goes beyond bullet points - with videos, case studies, links, and more.",
  },
  {
    chip: "AI readability",
    title: "AI-optimized. Human-friendly.",
    body: "Increasingly, AI reads profiles before humans do. Make your profile better readable to AI agents while keeping it clear and engaging for humans.",
  },
  {
    chip: "Job matching agents",
    title: "Let agents find opportunities",
    body: "Let Saywise agents work for you by surfacing the best opportunities - from full-time roles to fractional work, consulting projects, and more.",
  },
];

export default function Page() {
  return (
    <>
      <Nav />
      <Hero
        title="Resume is dead."
        titleMuted="Your work isn't."
        imageLabel="a beautiful image for profile"
        backdrop
      />
      <CtaStrip headline="Start your Saywise profile now" />
      <FeatureRows
        heading="Your professional profile for the agentic era"
        sub="Tell your full story and get discovered."
        rows={proRows}
      />
      <StatsStrip />
      <EvolvingProfile />
      <ProfileGallery />
      <Faq />
      <CtaStrip headline="Start your Saywise profile now" flush />
      <Footer />
    </>
  );
}
