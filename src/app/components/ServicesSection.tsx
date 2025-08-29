import ServiceCard from "./ServiceCard";
import { ContentSection, SectionHeader } from "./ui";
import { StaggerContainer, StaggerItem, FadeInUp } from "./animations";
import { FiMonitor, FiCode, FiBarChart2 } from "react-icons/fi";

const services = [
  {
    icon: <FiMonitor className="w-8 h-8" />,
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
    icon: <FiCode className="w-8 h-8" />,
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
    icon: <FiBarChart2 className="w-8 h-8" />,
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