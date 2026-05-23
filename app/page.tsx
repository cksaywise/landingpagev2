import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CtaStrip } from "@/components/CtaStrip";
import { FeatureRows, FeatureRow } from "@/components/FeatureRows";
import { StatsStrip } from "@/components/StatsStrip";
import { EvolvingProfile } from "@/components/EvolvingProfile";
import { LogosTicker } from "@/components/LogosTicker";
import { ProfileGallery } from "@/components/ProfileGallery";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

const proRows: FeatureRow[] = [
  {
    chip: "Stand out",
    title: "Tell your full story",
    body: "Resumes are just bullet points and keywords; they don't tell the full story. Companies want to see the real person behind them. In fact, 76% of recruiters find short video intros helpful. Use video and multimedia to show the full story behind your work.",
  },
  {
    chip: "Build trust",
    title: "Add proof of work",
    body: "Anyone can claim anything on a resume. In fact, most resumes look the same these days, filled with the same \"ATS-friendly\" keywords. Add case studies, video endorsements, and AI projects to build trust and provide real proof of work.",
  },
  {
    chip: "Get discovered",
    title: "Built for the AI era",
    body: "Increasingly, AI agents review more profiles than humans do. Saywise automatically makes your profile AI-readable and discoverable. Our AI also identifies gaps in your profile and suggests new content ideas.",
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
      <FeatureRows heading="Stand out. Don't get filtered out." rows={proRows} />
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
