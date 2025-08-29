import Link from "next/link";
import { Button, CtaSection } from "./components/ui";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* CTA Section */}
      <CtaSection>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          お気軽にご相談ください
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          まずは無料相談から。あなたの課題をお聞かせください。
        </p>
        <Link href="/contact">
          <Button size="lg">無料相談を申し込む</Button>
        </Link>
      </CtaSection>
    </div>
  );
}