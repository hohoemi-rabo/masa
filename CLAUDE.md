# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `npm run dev` - Start development server with Turbopack (opens at http://localhost:3000)
- `npm run build` - Build production app with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Architecture

This is a Next.js 15.5.2 application using React 19 and the App Router architecture with TypeScript.

**Key Structure:**
- Uses App Router (`src/app/`) with file-based routing
- TypeScript configured with strict mode and path aliases (`@/*` maps to `./src/*`)
- Tailwind CSS v4 for styling with PostCSS
- Geist fonts (Sans and Mono) from Google Fonts
- ESLint with Next.js configuration

**Core Files:**
- `src/app/layout.tsx` - Root layout with font loading and global styles
- `src/app/page.tsx` - Home page component
- `src/app/globals.css` - Global Tailwind styles
- `tsconfig.json` - TypeScript config with Next.js plugin and path aliases

**Development Notes:**
- Uses Turbopack for faster builds and development
- React 19 with concurrent features
- Modern ES2017 target with bundler module resolution
- Static assets in `public/` directory

## Next.js App Router Best Practices

**File Organization:**
- Place pages in `src/app/` directory using folder-based routing
- Use `page.tsx` for route components, `layout.tsx` for layouts
- Create `loading.tsx` for loading UI, `error.tsx` for error boundaries
- Use `not-found.tsx` for 404 pages
- Group related routes in folders, use `(groups)` for organization without affecting URLs

**Components and Data Fetching:**
- Server Components by default for better performance
- Use Client Components (`'use client'`) only when needed for interactivity
- Server Components can fetch data directly with async/await
- Use React Suspense boundaries for progressive loading
- Prefer server-side data fetching over client-side when possible

**Routing Patterns:**
- Dynamic routes: `[id]/page.tsx` for `/product/123`
- Catch-all routes: `[...slug]/page.tsx` for multiple segments
- Parallel routes: `@modal` folders for simultaneous rendering
- Intercepting routes: `(..)` for modal-like experiences

**Performance:**
- Use `loading.tsx` files for instant loading states
- Implement proper error boundaries with `error.tsx`
- Leverage automatic code splitting per route
- Use `generateStaticParams` for static generation of dynamic routes
- Optimize images with Next.js Image component

## プロジェクト要件（REQUIREMENTS.mdより）

### プロジェクト概要
パソコン講師ポートフォリオサイトの構築。新規顧客獲得と既存顧客への信頼性向上を目的とし、AI時代の効率的な開発手法をアピール。

**ターゲットユーザー：**
- 主要：個人のお客様（パソコン・スマホサポート希望者）
- 副次：中小企業経営者（ホームページ制作依頼）

### 技術スタック
- **フロントエンド：** Next.js 15（App Router）、TypeScript 5.x、Tailwind CSS v3.4
- **アニメーション：** Framer Motion v11、Three.js（React Three Fiber v8）
- **状態管理：** Zustand v4
- **バックエンド：** Supabase（認証・データ管理）
- **デプロイ：** Vercel、画像最適化はCloudinary

### サイト構成
```
/ (ホーム) - 3Dルービックキューブアニメーション
├── /services (サービス一覧)
│   ├── /pc-support (パソコン・スマホサポート)
│   ├── /web-development (ホームページ制作)
│   └── /excel-automation (Excel業務効率化)
├── /works (制作実績)
├── /blog (ブログ)
├── /about (プロフィール)
└── /contact (お問い合わせ)
```

### 主要機能要件
1. **ダークモード切り替え** - localStorage保存、システム設定連動
2. **お問い合わせフォーム** - Supabase保存、自動返信メール
3. **ブログCMS** - Markdown対応、カテゴリー・タグ管理
4. **Instagram API連携** - 最新投稿の自動取得・表示
5. **3Dルービックキューブ** - Three.js使用、マウス連動
6. **スクロールアニメーション** - Intersection Observer使用

### パフォーマンス目標
- Lighthouse Score：90以上（全カテゴリ）
- First Contentful Paint：1.5秒以内
- Time to Interactive：3.5秒以内

### カラースキーム
```
ライトモード: Primary #0070f3, Secondary #00d9ff
ダークモード: Primary #0098ff, Secondary #00d9ff
```

### 実装順序
1. 基礎セットアップ（Next.js 15、Supabase）
2. コア機能（3Dアニメーション、ダークモード）
3. 段階的機能追加（各ページ、フォーム、ブログ、Instagram連携）
4. 最終調整（最適化、SEO、デプロイ）