import { Suspense } from "react";
import ProfileSection from "./ProfileSection";
import { ProfileSectionSkeleton } from "./LoadingSkeleton";

// 人工的な遅延を追加（デモ用）
async function DelayedProfileSection() {
  // 実際のプロダクションではこの遅延は不要
  // データベースやAPIからのフェッチをシミュレート
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return <ProfileSection />;
}

export default function ProfileSectionWrapper() {
  return (
    <Suspense fallback={<ProfileSectionSkeleton />}>
      <DelayedProfileSection />
    </Suspense>
  );
}