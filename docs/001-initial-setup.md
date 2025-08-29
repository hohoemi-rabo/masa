# 001: 初期セットアップとプロジェクト構造

## 概要
Next.js 15とTailwind CSS v3.4の基本セットアップを完了し、プロジェクトの基礎構造を構築する。

## タスク
- [x] Next.js 15のセットアップ
- [x] Tailwind CSS v3.4の設定
- [x] TypeScriptの設定
- [x] 基本的なフォルダ構造の作成
- [x] ESLintとPrettierの設定
- [x] 環境変数の設定（.env.local）

## フォルダ構造
```
src/
├── app/
│   ├── (routes)/        # ルートグループ
│   ├── components/      # 共通コンポーネント
│   ├── lib/            # ユーティリティ関数
│   └── styles/         # スタイル関連
├── types/              # TypeScript型定義
└── config/             # 設定ファイル
```

## 完了条件
- 開発サーバーが正常に起動する
- TypeScriptエラーがない
- Lintエラーがない