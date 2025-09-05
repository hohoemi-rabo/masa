import Link from "next/link";
import { Button, CtaSection } from "./components/ui";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProfileSection from "./components/ProfileSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection useScrollAnimation={true} />

      {/* Profile Section */}
      <ProfileSection />

      {/* CTA Section */}
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
    </div>
  );
}