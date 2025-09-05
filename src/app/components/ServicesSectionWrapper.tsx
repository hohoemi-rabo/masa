import { Suspense } from "react";
import ServicesSection from "./ServicesSection";
import { ServicesSectionSkeleton } from "./LoadingSkeleton";

// 人工的な遅延を追加（デモ用）
async function DelayedServicesSection({ useScrollAnimation }: { useScrollAnimation?: boolean }) {
  // 実際のプロダクションではこの遅延は不要
  // データベースやAPIからのフェッチをシミュレート
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return <ServicesSection useScrollAnimation={useScrollAnimation} />;
}

export default function ServicesSectionWrapper({ useScrollAnimation = false }: { useScrollAnimation?: boolean }) {
  return (
    <Suspense fallback={<ServicesSectionSkeleton />}>
      <DelayedServicesSection useScrollAnimation={useScrollAnimation} />
    </Suspense>
  );
}