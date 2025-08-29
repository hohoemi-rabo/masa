# 016: SEO最適化

## 概要
検索エンジン最適化とメタデータの実装。

## タスク
- [ ] メタタグ設定
  - [ ] 各ページのtitle/description
  - [ ] OGP（Open Graph Protocol）
  - [ ] Twitter Card
  - [ ] canonical URL
- [ ] 構造化データ
  - [ ] Organization（会社情報）
  - [ ] Service（サービス情報）
  - [ ] BlogPosting（ブログ記事）
  - [ ] BreadcrumbList（パンくず）
- [ ] サイトマップ生成
  - [ ] 動的sitemap.xml
  - [ ] robots.txt設定
- [ ] パフォーマンス最適化
  - [ ] Core Web Vitals改善
  - [ ] 画像最適化
  - [ ] コード分割

## メタデータ例
```typescript
export const metadata = {
  title: 'パソコン講師 | IT サポート・ホームページ制作',
  description: 'パソコン・スマホのトラブル解決から、ホームページ制作、Excel業務効率化まで。AI時代の効率的なITソリューションを提供します。',
  openGraph: {
    title: 'パソコン講師ポートフォリオ',
    description: '...',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};
```

## ローカルSEO
- 地域キーワードの最適化
- Googleマイビジネス連携準備

## 完了条件
- Lighthouse SEOスコア90以上
- 構造化データテスト合格
- サイトマップ生成確認