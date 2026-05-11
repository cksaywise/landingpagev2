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
    headline: "Tell the stories a resume can't",
    body: "Resumes compress years of your work into bullet points. They don't tell your story. Use video and multimedia content to bring your work to life.",
    mediaLabel: "Placeholder · timeline + media",
  },
  {
    label: "Video-first",
    headline: "Stand out instantly with video",
    body: "Today's world is video-first. 76% of hiring managers pay more attention to profiles with video. Create self-intros and project explainers with guided scripts and a built-in teleprompter.",
    mediaLabel: "Placeholder · video-first",
  },
  {
    label: "Expert community",
    headline: "Get recognized as an expert",
    body: "Share your unique insights and perspectives in Saywise's content discovery feed, and get discovered by recruiters and the community.",
    mediaLabel: "Placeholder · expert community",
  },
];

const proveWorkTabs: FeatureTab[] = [
  {
    label: "Case studies",
    headline: "Earn credibility instantly",
    body: "Anyone can claim anything on a resume and add AI-generated keywords. Prove your actual work with credible stories, such as thoughtful case studies.",
    mediaLabel: "Placeholder · case study layout",
  },
  {
    label: "Video endorsements (coming soon)",
    headline: "Social proof from collaborators",
    body: "The strongest validation comes from people who've seen your work up close. Invite past collaborators to record short video endorsements, adding a trust layer to your profile.",
    mediaLabel: "Placeholder · video endorsements",
  },
  {
    label: "AI skills",
    headline: "Showcase your AI skills",
    body: "Companies increasingly look for AI skills when hiring. Showcase what you've actually built with AI through project links and real work.",
    mediaLabel: "Placeholder · AI skills",
  },
];

const createTabs: FeatureTab[] = [
  {
    label: "AI content assistant",
    headline: "Tell your human story. Let AI do the heavy lifting.",
    body: "Telling your authentic story doesn't mean creating everything manually. Saywise learns your style and generates video scripts and draft posts in your own voice.",
    mediaLabel: "Placeholder · AI editor",
  },
  {
    label: "AI content co-pilot",
    headline: "Always know what to create next",
    body: "After connecting your LinkedIn and other sources and conducting an in-depth interview, Saywise identifies content gaps, suggests ongoing topics, and generates draft content for you.",
    mediaLabel: "Placeholder · content co-pilot",
  },
  {
    label: "A living profile",
    headline: "A profile that evolves with you",
    body: "Resumes are static, one-page documents. Saywise is a living profile you continuously update with new work, ideas, and experiences, like a personal Wikipedia.",
    mediaLabel: "Placeholder · living profile",
  },
];

const modernHiringTabs: FeatureTab[] = [
  {
    label: "AI-native",
    headline: "Built for the AI era",
    body: "These days, AI often reads profiles before humans do. Saywise optimizes your profile for AI readability, increasing your chances of getting discovered through AI-powered search.",
    mediaLabel: "Placeholder · recruiter dashboard",
  },
  {
    label: "Dynamic profile generation",
    headline: "Tailor your profile for every role",
    body: "Stop rewriting your profile for every application. Paste a job description and instantly generate a tailored version of your profile, and share it with a unique link.",
    mediaLabel: "Placeholder · dynamic profile",
  },
  {
    label: "Mock interview (coming soon)",
    headline: "Practice interviews that feel human",
    body: "Practice with natural, human-like mock interviews on Saywise. Turn your best responses into public content and add them directly to your profile.",
    mediaLabel: "Placeholder · mock interview",
  },
];

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <CtaStrip headline="Turn your LinkedIn into a Saywise profile." />
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
      <CtaStrip headline="Resumes don't tell stories. Start your Saywise profile." />
      <Footer />
    </>
  );
}
