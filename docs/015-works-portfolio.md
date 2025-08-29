# 015: 制作実績ポートフォリオ

## 概要
制作実績を管理・表示するポートフォリオ機能の実装。

## タスク
- [ ] 実績一覧ページ
  - [ ] グリッド/リスト表示切り替え
  - [ ] カテゴリーフィルター
  - [ ] 使用技術タグ
- [ ] 実績詳細モーダル/ページ
  - [ ] プロジェクト画像ギャラリー
  - [ ] 詳細説明
  - [ ] 使用技術スタック
  - [ ] 外部リンク（デモ/GitHub）
- [ ] データ管理
  - [ ] Supabaseでのデータ管理
  - [ ] 画像アップロード機能
  - [ ] 表示順序の管理

## データ構造
```typescript
interface Work {
  id: string;
  title: string;
  slug: string;
  category: 'web' | 'system' | 'excel' | 'other';
  description: string;
  client?: string;
  duration: string;        // e.g., "2024年1月〜3月"
  technologies: string[];
  images: string[];
  thumbnailImage: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;       // ホームページに表示
  order: number;
  createdAt: Date;
}
```

## 表示要件
- ホームページ: 注目の3件
- 実績ページ: 全件表示
- レスポンシブギャラリー

## 完了条件
- 実績の追加/編集が可能
- フィルター機能が動作
- 画像が適切に表示