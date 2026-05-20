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
    title: "Tell stories that go beyond bullet points",
    body: "Companies want to see the person behind the resume. Create authentic intro videos. Add case studies, project notes, video endorsements, and more. Tell richer stories that resumes simply can't capture.",
  },
  {
    title: "A living profile that grows with you",
    body: "Why update your resume only when you're job hunting? Saywise helps you continuously document your wins, insights, and expertise. Over time, it becomes a rich, evolving representation of your work and ideas, almost like your personal Wikipedia.",
  },
  {
    title: "AI content co-pilot",
    body: "Create content without doing all the work yourself. Saywise AI suggests topics, drafts talking points, and can even schedule recurring phone calls so you can simply talk. Authentic content creation should feel effortless.",
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
        heading="Meet Saywise: Resume 2.0"
        sub="A better way to show who you are, how you think, and what you're capable of"
        rows={proRows}
      />
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
