import Link from "next/link";
import { Button, Card, CardContent, ContentSection, CtaSection, SectionHeader } from "./components/ui";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ContentSection>
        <SectionHeader title="提供サービス" subtitle="お客様のニーズに合わせた3つのサービス" />
        <div className="grid md:grid-cols-3 gap-8">
          <Card hover>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">パソコン・スマホサポート</h3>
              <p className="text-gray-600 mb-4">
                トラブル解決、初期設定、使い方指導まで、あなたのIT環境を全面サポート
              </p>
              <Link href="/services/pc-support" className="text-primary-light hover:underline">
                詳しく見る →
              </Link>
            </CardContent>
          </Card>
          <Card hover>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">ホームページ制作</h3>
              <p className="text-gray-600 mb-4">
                企業サイト、ランディングページ、ECサイトまで、目的に合わせた最適なサイトを制作
              </p>
              <Link href="/services/web-development" className="text-primary-light hover:underline">
                詳しく見る →
              </Link>
            </CardContent>
          </Card>
          <Card hover>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">Excel業務効率化</h3>
              <p className="text-gray-600 mb-4">
                マクロ開発、自動化、データ分析で、業務時間を大幅削減
              </p>
              <Link href="/services/excel-automation" className="text-primary-light hover:underline">
                詳しく見る →
              </Link>
            </CardContent>
          </Card>
        </div>
      </ContentSection>

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