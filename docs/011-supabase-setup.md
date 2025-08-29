# 011: Supabaseセットアップ

## 概要
Supabaseの初期設定とプロジェクトとの連携。

## タスク
- [ ] Supabaseプロジェクトの作成
  - [ ] アカウント作成/ログイン
  - [ ] 新規プロジェクト作成
  - [ ] APIキーの取得
- [ ] 環境変数の設定
  - [ ] NEXT_PUBLIC_SUPABASE_URL
  - [ ] NEXT_PUBLIC_SUPABASE_ANON_KEY
  - [ ] SUPABASE_SERVICE_ROLE_KEY
- [ ] Supabaseクライアントの設定
  - [ ] @supabase/supabase-jsインストール
  - [ ] クライアント初期化
  - [ ] 型定義の生成
- [ ] データベーススキーマ設計
  - [ ] contactsテーブル（お問い合わせ）
  - [ ] blog_postsテーブル（ブログ記事）
  - [ ] worksテーブル（制作実績）

## スキーマ例
```sql
-- お問い合わせ
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  category TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- ブログ記事
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  category TEXT,
  tags TEXT[],
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## 完了条件
- Supabaseとの接続確認
- 基本的なCRUD操作のテスト