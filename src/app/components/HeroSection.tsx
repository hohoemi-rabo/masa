"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "./ui";
import { FadeInUp, FadeInLeft, ScaleIn } from "./animations";

// 3Dコンポーネントを動的インポート（SSR無効化）
const RubiksCube = dynamic(() => import("./RubiksCube"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 bg-primary/30 dark:bg-primary-dark/30 rounded-2xl mx-auto mb-4 flex items-center justify-center animate-pulse">
          <svg
            className="w-12 h-12 text-primary dark:text-primary-dark"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-sm text-muted-foreground">3Dアニメーション</p>
        <p className="text-xs text-muted-foreground">読み込み中...</p>
      </div>
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-background dark:to-gray-900 transition-colors overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <FadeInLeft>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                テクノロジーで、
                <br />
                あなたの
                <span className="text-primary dark:text-primary-dark">"困った"</span>
                を解決します
              </h1>
            </FadeInLeft>
            
            <FadeInLeft delay={0.1}>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                パソコン・スマホサポートから、ホームページ制作、Excel業務効率化まで
                <br className="hidden sm:block" />
                AI時代の効率的なITソリューションを提供
              </p>
            </FadeInLeft>
            
            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    お問い合わせ
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    サービスを見る
                  </Button>
                </Link>
              </div>
            </FadeInUp>
            
            {/* Trust indicators */}
            <FadeInUp delay={0.3}>
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">信頼の実績</p>
                <div className="flex flex-col sm:flex-row gap-6 text-center lg:text-left">
                  <div>
                    <div className="text-2xl font-bold text-primary dark:text-primary-dark">50+</div>
                    <div className="text-sm text-muted-foreground">プロジェクト実績</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary dark:text-primary-dark">98%</div>
                    <div className="text-sm text-muted-foreground">顧客満足度</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary dark:text-primary-dark">24h</div>
                    <div className="text-sm text-muted-foreground">平均対応時間</div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
          
          {/* Right side - 3D Animation */}
          <ScaleIn delay={0.4}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <RubiksCube />
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}