import ServicesSection from "../components/ServicesSection";
import { HeroSection } from "../components/ui";
import CTASection from "../components/CTASection";
import DragSwipeNavigation from "../components/DragSwipeNavigation";

export default function ServicesPage() {
  return (
    <DragSwipeNavigation 
      prevPage="/" 
      nextPage="/works"
    >
      <div className="min-h-screen">
        <HeroSection className="py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">サービス一覧</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              お客様のビジネスと生活をより良くするため、
              <br className="hidden sm:block" />
              最新技術と豊富な経験を活かした3つのITソリューションをご提供しています
            </p>
          </div>
        </HeroSection>
        
        <ServicesSection />
        
        <CTASection />
      </div>
    </DragSwipeNavigation>
  );
}