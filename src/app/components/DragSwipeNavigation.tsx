"use client";

import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface DragSwipeNavigationProps {
  children: React.ReactNode;
  prevPage?: string;
  nextPage?: string;
}

export default function DragSwipeNavigation({ 
  children, 
  prevPage, 
  nextPage 
}: DragSwipeNavigationProps) {
  const router = useRouter();
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'horizontal' | 'vertical' | null>(null);
  const [initialTouch, setInitialTouch] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
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
    onSwipeStart: (eventData) => {
      if (!isMobile) return;
      
      // スワイプ開始時の座標を記録
      setInitialTouch({ x: eventData.initial[0], y: eventData.initial[1] });
      setSwipeDirection(null);
    },
    onSwiping: (eventData) => {
      if (!isMobile) return;
      
      // 最初の15pxの動きで方向を判定
      if (!swipeDirection && initialTouch) {
        const deltaX = Math.abs(eventData.deltaX);
        const deltaY = Math.abs(eventData.deltaY);
        
        if (deltaX > 15 || deltaY > 15) {
          // 45度以上なら縦スクロール、それ以外は横スワイプ
          if (deltaY > deltaX) {
            setSwipeDirection('vertical');
            return; // 縦スクロールの場合は何もしない
          } else {
            setSwipeDirection('horizontal');
          }
        }
      }
      
      // 横スワイプと判定された場合のみ処理
      if (swipeDirection === 'horizontal') {
        setIsDragging(true);
        // ドラッグ量を制限（画面幅の80%まで）
        const maxDrag = window.innerWidth * 0.8;
        const currentDrag = Math.min(Math.max(eventData.deltaX, -maxDrag), maxDrag);
        
        // 前後のページがない方向へのドラッグを制限
        if (!prevPage && currentDrag > 0) {
          setDragX(currentDrag * 0.2); // 抵抗感を演出
        } else if (!nextPage && currentDrag < 0) {
          setDragX(currentDrag * 0.2); // 抵抗感を演出
        } else {
          setDragX(currentDrag);
        }
      }
    },
    onSwipedLeft: () => {
      if (!isMobile || !nextPage || swipeDirection !== 'horizontal') {
        resetDrag();
        return;
      }
      
      const threshold = window.innerWidth * 0.3; // 30%以上で遷移
      if (Math.abs(dragX) > threshold) {
        animateAndNavigate('left');
      } else {
        resetDrag();
      }
    },
    onSwipedRight: () => {
      if (!isMobile || !prevPage || swipeDirection !== 'horizontal') {
        resetDrag();
        return;
      }
      
      const threshold = window.innerWidth * 0.3; // 30%以上で遷移
      if (Math.abs(dragX) > threshold) {
        animateAndNavigate('right');
      } else {
        resetDrag();
      }
    },
    onTouchEndOrOnMouseUp: () => {
      if (!isDragging || swipeDirection !== 'horizontal') {
        setSwipeDirection(null);
        setInitialTouch(null);
        return;
      }
      
      const threshold = window.innerWidth * 0.3;
      
      // ドラッグ量がしきい値を超えていたら遷移
      if (Math.abs(dragX) > threshold) {
        if (dragX < 0 && nextPage) {
          animateAndNavigate('left');
        } else if (dragX > 0 && prevPage) {
          animateAndNavigate('right');
        } else {
          resetDrag();
        }
      } else {
        resetDrag();
      }
      
      setSwipeDirection(null);
      setInitialTouch(null);
    },
    preventScrollOnSwipe: false, // 縦スクロールを邪魔しない
    trackMouse: false,
    trackTouch: true,
    delta: 10, // 感度を上げる
  });

  const animateAndNavigate = (direction: 'left' | 'right') => {
    const targetX = direction === 'left' ? -window.innerWidth : window.innerWidth;
    setDragX(targetX);
    
    setTimeout(() => {
      if (direction === 'left' && nextPage) {
        router.push(nextPage);
      } else if (direction === 'right' && prevPage) {
        router.push(prevPage);
      }
    }, 300);
  };

  const resetDrag = () => {
    setDragX(0);
    setTimeout(() => {
      setIsDragging(false);
    }, 300);
  };

  // ページ名を取得する関数
  const getPageName = (path: string) => {
    const pageNames: { [key: string]: string } = {
      '/': 'ホーム',
      '/services': 'サービス',
      '/works': '制作実績',
      '/profile': 'プロフィール',
      '/contact': 'お問い合わせ',
      '/instagram': 'Instagram',
    };
    return pageNames[path] || 'ページ';
  };

  // 現在のページを取得
  const getCurrentPage = () => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '';
  };

  // スワイプインジケーター
  const SwipeIndicator = () => {
    if (!isMobile) return null;
    
    // ドラッグ中は非表示
    if (isDragging) return null;
    
    return (
      <div className="fixed bottom-20 left-0 right-0 flex justify-center items-center pointer-events-none z-40 md:hidden">
        <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
          {prevPage && (
            <span className="text-white/70 text-sm">
              ← {getPageName(prevPage)}
            </span>
          )}
          <span className="text-white/60 text-sm">|</span>
          <span className="text-white font-semibold text-sm">
            {getPageName(getCurrentPage())}
          </span>
          <span className="text-white/60 text-sm">|</span>
          {nextPage && (
            <span className="text-white/70 text-sm">
              {getPageName(nextPage)} →
            </span>
          )}
        </div>
      </div>
    );
  };

  // プレビューオーバーレイ（ドラッグ中に次/前のページを示唆）
  const PreviewOverlay = () => {
    if (!isDragging || !isMobile) return null;
    
    const showNext = dragX < -50 && nextPage;
    const showPrev = dragX > 50 && prevPage;
    
    if (!showNext && !showPrev) return null;
    
    return (
      <div 
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          background: dragX < 0 
            ? `linear-gradient(to right, transparent, rgba(0,0,0,${Math.min(Math.abs(dragX) / 300, 0.3)}))` 
            : `linear-gradient(to left, transparent, rgba(0,0,0,${Math.min(Math.abs(dragX) / 300, 0.3)}))`
        }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 text-white font-bold text-2xl"
          style={{
            left: dragX < 0 ? 'auto' : '20px',
            right: dragX < 0 ? '20px' : 'auto',
            opacity: Math.min(Math.abs(dragX) / 200, 1)
          }}
        >
          {dragX < 0 && nextPage && `→ ${getPageName(nextPage)}`}
          {dragX > 0 && prevPage && `← ${getPageName(prevPage)}`}
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div 
        {...handlers} 
        ref={(el) => {
          containerRef.current = el;
          if (handlers.ref) {
            handlers.ref(el);
          }
        }}
        className="min-h-screen"
        style={{
          transform: `translateX(${dragX}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
      <PreviewOverlay />
      <SwipeIndicator />
    </div>
  );
}