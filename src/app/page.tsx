import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { VideoSection } from '@/components/sections/video-section';
import { CausesSection } from '@/components/sections/causes-section';
import { CtaSection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <VideoSection />
        <CausesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
