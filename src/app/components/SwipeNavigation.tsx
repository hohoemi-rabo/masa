"use client";

import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface SwipeNavigationProps {
  children: React.ReactNode;
  prevPage?: string;
  nextPage?: string;
}

export default function SwipeNavigation({ 
  children, 
  prevPage, 
  nextPage 
}: SwipeNavigationProps) {
  const router = useRouter();
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // モバイルデバイスの検出
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (nextPage && isMobile) {
        setSwipeDirection("left");
        setIsSwiping(true);
        setTimeout(() => {
          router.push(nextPage);
        }, 200);
      }
    },
    onSwipedRight: () => {
      if (prevPage && isMobile) {
        setSwipeDirection("right");
        setIsSwiping(true);
        setTimeout(() => {
          router.push(prevPage);
        }, 200);
      }
    },
    onSwiping: () => {
      if (isMobile) {
        setIsSwiping(true);
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: false, // マウスでのスワイプは無効
    trackTouch: true,  // タッチのみ有効
    delta: 50,         // 最小スワイプ距離
  });

  // スワイプインジケーター
  const SwipeIndicator = () => {
    if (!isMobile) return null;
    
    return (
      <div className="fixed bottom-20 left-0 right-0 flex justify-center items-center pointer-events-none z-40 md:hidden">
        <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-3">
          {prevPage && (
            <span className="text-white/70 text-sm">
              ← 前のページ
            </span>
          )}
          <span className="text-white text-sm">スワイプで移動</span>
          {nextPage && (
            <span className="text-white/70 text-sm">
              次のページ →
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div 
      {...handlers} 
      className={`
        min-h-screen relative
        ${isSwiping && swipeDirection === "left" ? "transition-transform duration-200 -translate-x-4 opacity-90" : ""}
        ${isSwiping && swipeDirection === "right" ? "transition-transform duration-200 translate-x-4 opacity-90" : ""}
      `}
      onTransitionEnd={() => {
        setIsSwiping(false);
        setSwipeDirection(null);
      }}
    >
      {children}
      <SwipeIndicator />
    </div>
  );
}