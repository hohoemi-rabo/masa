# 013: ブログシステム実装

## 概要
Supabaseを使用したブログ機能の実装。Markdown対応、カテゴリー/タグ管理。

## タスク
- [ ] ブログ一覧ページ
  - [ ] 記事カード表示
  - [ ] ページネーション
  - [ ] カテゴリーフィルター
  - [ ] 検索機能
- [ ] ブログ詳細ページ
  - [ ] Markdownレンダリング
  - [ ] 目次生成
  - [ ] 関連記事表示
  - [ ] シェアボタン
- [ ] 管理機能（簡易版）
  - [ ] 記事作成/編集画面
  - [ ] Markdownエディタ
  - [ ] プレビュー機能
  - [ ] 下書き保存
- [ ] SEO対策
  - [ ] 動的メタタグ
  - [ ] OGP画像
  - [ ] 構造化データ

## データ構造
```typescript
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;      // Markdown
  excerpt: string;      // 抜粋
  category: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

## 使用ライブラリ
- react-markdown
- remark-gfm
- rehype-highlight
- reading-time

## 完了条件
- 記事の作成/表示が可能
- Markdownが正しくレンダリング
- カテゴリー/タグでフィルタリング可能