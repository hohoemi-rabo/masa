import ServiceCard from "./ServiceCard";
import { ContentSection, SectionHeader } from "./ui";
import { StaggerContainer, StaggerItem, FadeInUp } from "./animations";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
      </svg>
    ),
    title: "パソコン・スマホサポート",
    description: "ITトラブルを迅速に解決し、快適なデジタルライフをサポートします",
    features: [
      "パソコン・スマホの初期設定",
      "トラブルシューティング",
      "データ移行・バックアップ",
      "セキュリティ対策",
    ],
    href: "/services/pc-support",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "ホームページ制作",
    description: "最新技術を活用した、高品質で効果的なWebサイトを制作します",
    features: [
      "企業サイト制作",
      "ランディングページ制作",
      "ECサイト構築",
      "レスポンシブデザイン",
    ],
    href: "/services/web-development",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v1a1 1 0 001 1h4a1 1 0 001-1v-1m3-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v7m3-2h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M9 16h6" />
      </svg>
    ),
    title: "Excel業務効率化",
    description: "煩雑な作業を自動化し、業務時間を大幅に削減します",
    features: [
      "マクロ・VBA開発",
      "データ分析・集計",
      "カスタム関数作成",
      "帳票自動化",
    ],
    href: "/services/excel-automation",
  },
];

export default function ServicesSection() {
  return (
    <ContentSection className="py-24">
      <FadeInUp>
        <SectionHeader
          title="提供サービス"
          subtitle="お客様のニーズに合わせた3つのITソリューション"
          centered
        />
      </FadeInUp>
      
      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <StaggerItem key={index}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              href={service.href}
              className="h-full"
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
      
      {/* Additional info */}
      <FadeInUp delay={0.4}>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            上記以外のご相談も承っております。お気軽にお問い合わせください。
          </p>
        </div>
      </FadeInUp>
    </ContentSection>
  );
}