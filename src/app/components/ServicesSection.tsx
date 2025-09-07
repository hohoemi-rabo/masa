"use client";

import ServiceCard from "./ServiceCard";
import { ContentSection, SectionHeader } from "./ui";
import { FiMonitor, FiCode, FiBarChart2 } from "react-icons/fi";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FiCode className="w-8 h-8" />,
    title: "Webサイト制作",
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
    title: "業務自動化・効率化",
    description: "GAS・スプレッドシートを活用し、業務時間を大幅に削減します",
    features: [
      "Google Apps Script開発",
      "スプレッドシート自動化",
      "Excel・データ分析・集計",
      "業務フロー最適化",
    ],
    href: "/services/excel-automation",
  },
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
];

interface ServicesSectionProps {
  useScrollAnimation?: boolean;
}

export default function ServicesSection({ useScrollAnimation = false }: ServicesSectionProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <ContentSection className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={useScrollAnimation ? undefined : { opacity: 1, y: 0 }}
        whileInView={useScrollAnimation ? { opacity: 1, y: 0 } : undefined}
        viewport={useScrollAnimation ? { once: true, amount: 0.3 } : undefined}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeader
          title="提供サービス"
          subtitle="お客様のニーズに合わせた3つのITソリューション"
          centered
        />
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        variants={containerVariants}
        initial="hidden"
        animate={useScrollAnimation ? undefined : "visible"}
        whileInView={useScrollAnimation ? "visible" : undefined}
        viewport={useScrollAnimation ? { once: true, amount: 0.2 } : undefined}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              href={service.href}
              className="h-full"
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Additional info */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={useScrollAnimation ? undefined : { opacity: 1, y: 0 }}
        whileInView={useScrollAnimation ? { opacity: 1, y: 0 } : undefined}
        viewport={useScrollAnimation ? { once: true, amount: 0.3 } : undefined}
        transition={{ duration: 0.6, delay: useScrollAnimation ? 0 : 0.5, ease: "easeOut" }}
      >
        <p className="text-muted-foreground">
          上記以外のご相談も承っております。お気軽にお問い合わせください。
        </p>
      </motion.div>
    </ContentSection>
  );
}