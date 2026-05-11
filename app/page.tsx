import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CtaStrip } from "@/components/CtaStrip";
import { LogosTicker } from "@/components/LogosTicker";
import { FeatureSection, FeatureTab } from "@/components/FeatureSection";
import { StatsStrip } from "@/components/StatsStrip";
import { ProfileGallery } from "@/components/ProfileGallery";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

const standOutTabs: FeatureTab[] = [
  {
    label: "Multimedia storytelling",
    headline: "Tell the stories a resume can't.",
    body: "Resumes compress years of your work into bullet points. They don't tell your story. Use embedded video, screenshots, and writing to bring the work to life.",
    mediaLabel: "Placeholder · timeline + media",
  },
  {
    label: "Detail level",
    headline: "Go deep where it matters.",
    body: "Surface the headline first; let curious readers dive into the full case behind every project. Recruiters scan, hiring managers read — Saywise handles both.",
    mediaLabel: "Placeholder · expandable detail",
  },
  {
    label: "Honest and unbiased",
    headline: "Show the work, not the keywords.",
    body: "Saywise is built around evidence: real artifacts, real outcomes, real context. No more ATS-gamed bullet points that flatten everyone into the same shape.",
    mediaLabel: "Placeholder · evidence layout",
  },
];

const proveWorkTabs: FeatureTab[] = [
  {
    label: "Case studies",
    headline: "Earn credibility instantly.",
    body: "Anyone can claim anything on a resume and add AI-generated keywords. Prove your actual work with credible stories, such as thoughtful case studies.",
    mediaLabel: "Placeholder · case study layout",
  },
  {
    label: "Writing samples",
    headline: "Let your thinking speak.",
    body: "Embed essays, memos, and posts directly into your profile. The way someone writes is often the clearest signal of how they think.",
    mediaLabel: "Placeholder · writing samples",
  },
  {
    label: "Public artifacts",
    headline: "Link the real thing.",
    body: "Pull in GitHub repos, Figma files, Notion docs, talks, and posts. Saywise becomes the hub for everything you've shipped in public.",
    mediaLabel: "Placeholder · public artifacts",
  },
];

const createTabs: FeatureTab[] = [
  {
    label: "AI content extraction",
    headline: "Tell your human story. Let AI do the heavy lifting.",
    body: "Telling your authentic story doesn't mean creating everything manually. Saywise learns your style and generates video scripts and draft posts in your own voice.",
    mediaLabel: "Placeholder · AI editor",
  },
  {
    label: "Automatic updates",
    headline: "Always up to date, without the chore.",
    body: "Saywise watches the sources you connect and proposes updates as you ship new work. Approve, edit, or skip — your profile stays current without manual upkeep.",
    mediaLabel: "Placeholder · update feed",
  },
  {
    label: "Link to profile",
    headline: "A profile that evolves with you.",
    body: "Resumes are static documents. Saywise is a living profile you continuously update with new work, ideas, and experiences — like a personal Wikipedia.",
    mediaLabel: "Placeholder · public profile",
  },
];

const modernHiringTabs: FeatureTab[] = [
  {
    label: "AI-native",
    headline: "Built for the AI era.",
    body: "These days, AI often reads profiles before humans do. Saywise structures your profile for AI readability, increasing your chances of being surfaced through AI-powered search.",
    mediaLabel: "Placeholder · AI readability",
  },
  {
    label: "Dynamic profile generation",
    headline: "Tailor your profile for every role.",
    body: "Stop rewriting your profile for every application. Paste a job description and instantly generate a tailored version of your profile, then share it with a unique link.",
    mediaLabel: "Placeholder · tailored profile",
  },
  {
    label: "Mock interviews",
    headline: "Practice interviews that feel human.",
    body: "Run natural, conversational mock interviews on Saywise. Turn your best responses into public content and add them directly to your profile.",
    mediaLabel: "Placeholder · mock interview",
  },
];

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <CtaStrip headline="Turn your LinkedIn into a Saywise profile in 60 seconds." />
      <LogosTicker />
      <FeatureSection
        heading="Stand out and get the next opportunity"
        tabs={standOutTabs}
      />
      <FeatureSection
        heading="Prove your work. Show, don't just tell."
        tabs={proveWorkTabs}
      />
      <StatsStrip />
      <FeatureSection
        heading="Create effortlessly and continuously"
        tabs={createTabs}
      />
      <FeatureSection
        heading="Made for modern hiring"
        tabs={modernHiringTabs}
      />
      <ProfileGallery />
      <Faq />
      <CtaStrip headline="Your next role won't fit in a PDF. Start your Saywise profile." />
      <Footer />
    </>
  );
}
