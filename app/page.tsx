import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CtaStrip } from "@/components/CtaStrip";
import { BeyondResume } from "@/components/BeyondResume";
import { StatsStrip } from "@/components/StatsStrip";
import { EvolvingProfile } from "@/components/EvolvingProfile";
import { ProfileGallery } from "@/components/ProfileGallery";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <CtaStrip headline="Start your Saywise profile now" />
      <BeyondResume />
      <StatsStrip />
      <EvolvingProfile />
      <ProfileGallery />
      <Faq />
      <CtaStrip headline="Start your Saywise profile now" flush />
      <Footer />
    </>
  );
}
