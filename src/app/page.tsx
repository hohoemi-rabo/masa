import Link from "next/link";
import { Suspense } from "react";
import { Button, CtaSection } from "./components/ui";
import HeroSection from "./components/HeroSection";
import ServicesSectionWrapper from "./components/ServicesSectionWrapper";
import ProfileSectionWrapper from "./components/ProfileSectionWrapper";

// CTAセクションを遅延読み込み
async function DelayedCTASection() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return (
    <CtaSection>
      <h2 className="text-3xl font-bold text-foreground mb-4">
        お気軽にご相談ください
      </h2>
      <p className="text-lg text-muted-foreground mb-8">
        まずは無料相談から。あなたの課題をお聞かせください。
      </p>
      <Link href="/contact">
        <Button size="lg">無料相談を申し込む</Button>
      </Link>
    </CtaSection>
  );
}

// CTAセクションのスケルトン
function CTASkeleton() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted-foreground/20 rounded w-64 mx-auto"></div>
          <div className="h-5 bg-muted-foreground/20 rounded w-96 mx-auto"></div>
          <div className="h-12 bg-muted-foreground/20 rounded w-40 mx-auto mt-8"></div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 即座に表示 */}
      <HeroSection />

      {/* Services Section - 0.8秒後にストリーミング */}
      <ServicesSectionWrapper useScrollAnimation={true} />

      {/* Profile Section - 1.5秒後にストリーミング */}
      <ProfileSectionWrapper />

      {/* CTA Section - 2秒後にストリーミング */}
      <Suspense fallback={<CTASkeleton />}>
        <DelayedCTASection />
      </Suspense>
    </div>
  );
}