import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CtaStrip } from "@/components/CtaStrip";
import { FeatureRows, FeatureRow } from "@/components/FeatureRows";
import { FeaturedItems } from "@/components/FeaturedItems";
import { StatsStrip } from "@/components/StatsStrip";
import { EvolvingProfile } from "@/components/EvolvingProfile";
import { LogosTicker } from "@/components/LogosTicker";
import { ProfileGallery } from "@/components/ProfileGallery";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

const proRows: FeatureRow[] = [
  {
    title: "Show your AI skills",
    body: "Companies are actively searching for AI-native talent. Showcase your AI projects, prompts, and automations so you can demonstrate how you actually use AI - not just claim it on a resume.",
  },
  {
    title: "Stand out beyond bullet points",
    body: "Companies want to see the real person behind the resume. Use videos, case studies, and endorsements to tell richer stories. Stand out in a world where most resumes look the same with generic \"ATS-friendly\" keywords.",
  },
  {
    title: "Get discovered by AI",
    body: "Increasingly, AI agents review profiles before humans do. Saywise makes your profile searchable and understandable by both recruiters and AI agents, helping the right opportunities find you.",
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
        backdropImage="/assets/hero-sky-8bit.png"
      />
      <CtaStrip headline="Start your Saywise profile now" />
      <FeatureRows
        heading="A new profile for AI-native builders"
        sub={
          <>
            Companies want AI-native builders with the right culture fit.
            <br />
            Use Saywise to show your work and how you think.
          </>
        }
        rows={proRows}
        layout="columns"
      />
      <FeaturedItems heading="Featured AI projects" />
      <FeaturedItems heading="Featured case studies" />
      <StatsStrip />
      <EvolvingProfile />
      <LogosTicker />
      <ProfileGallery />
      <Faq />
      <CtaStrip headline="Start your Saywise profile now" flush />
      <Footer />
    </>
  );
}
