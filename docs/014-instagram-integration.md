# 014: Instagram API連携

## 概要
Instagram Basic Display APIを使用して最新投稿を自動取得・表示。

## タスク
- [ ] Instagram App設定
  - [ ] Facebook開発者アカウント作成
  - [ ] Instagram Basic Display App作成
  - [ ] アクセストークン取得
- [ ] API連携実装
  - [ ] 投稿データ取得
  - [ ] 画像/動画の取得
  - [ ] キャッシュ戦略
  - [ ] エラーハンドリング
- [ ] 表示コンポーネント
  - [ ] グリッドレイアウト（3×2）
  - [ ] ホバーエフェクト
  - [ ] モーダル表示
  - [ ] Instagramへのリンク
- [ ] 自動更新機能
  - [ ] 定期的なデータ取得
  - [ ] トークンの更新処理

## API仕様
```typescript
interface InstagramPost {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  timestamp: string;
  thumbnail_url?: string;  // for VIDEO
}
```

## キャッシュ戦略
- Supabaseに投稿データを保存
- 1時間ごとに更新チェック
- APIレート制限を考慮

## 完了条件
- 最新6件の投稿が表示
- 画像が正しく表示
- Instagramへのリンクが動作