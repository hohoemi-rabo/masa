# 012: お問い合わせフォーム実装（Resend使用）

## 概要
Resendを使用したお問い合わせフォームの実装。フォーム送信時に直接メールで通知する仕組み。

## タスク
- [x] Resendのセットアップ
  - [x] Resendアカウント作成
  - [x] API キー取得
  - [ ] ドメイン認証（任意）※独自ドメイン取得後に実施予定
- [x] 環境変数の設定
  - [x] RESEND_API_KEY
  - [x] CONTACT_EMAIL（受信用メールアドレス）
- [x] フォームUIの作成
  - [x] 入力フィールド（名前、メール、電話、種別、内容）
  - [x] バリデーションメッセージ
  - [x] 送信ボタン
  - [x] ローディング状態
- [x] フォームバリデーション
  - [x] React Hook Form導入
  - [x] Zodによるスキーマ定義
  - [x] クライアント側バリデーション
- [x] API Route作成
  - [x] /api/contact エンドポイント
  - [x] フォームデータの受け取り
  - [x] サーバーサイドバリデーション
- [x] Resend連携
  - [x] resendライブラリ導入（npm install resend）
  - [x] 管理者宛て通知メール送信
  - [x] お客様宛て自動返信メール送信
  - [x] エラーハンドリング
- [x] スパム対策
  - [ ] レート制限※将来実装予定
  - [x] Honeypot フィールド（ボット対策）

## フォーム項目
```typescript
interface ContactForm {
  name: string;        // 必須
  email: string;       // 必須、メール形式
  phone?: string;      // 任意
  category: string;    // 必須、選択式
  message: string;     // 必須、最小50文字
}
```

## メール送信設定
```typescript
// 管理者宛て通知メールの例
const adminEmail = {
  from: 'お問い合わせフォーム <noreply@yourdomain.com>',
  to: process.env.CONTACT_EMAIL,
  subject: `【お問い合わせ】${category} - ${name}様`,
  html: `
    <h2>新しいお問い合わせがあります</h2>
    <p><strong>お名前：</strong>${name}</p>
    <p><strong>メール：</strong>${email}</p>
    <p><strong>電話：</strong>${phone || 'なし'}</p>
    <p><strong>種別：</strong>${category}</p>
    <p><strong>内容：</strong></p>
    <p>${message}</p>
  `
};

// お客様宛て自動返信メールの例
const customerEmail = {
  from: '加藤昌幸 <noreply@yourdomain.com>',
  to: email,
  subject: 'お問い合わせを承りました',
  html: `
    <p>${name} 様</p>
    <p>この度は、お問い合わせいただきありがとうございます。</p>
    <p>内容を確認次第、1～2営業日以内にご返信いたします。</p>
    <p>今しばらくお待ちください。</p>
    <br>
    <p>加藤昌幸</p>
  `
};
```

## 完了条件
- フォーム送信が成功
- 管理者に通知メールが送信される
- お客様に自動返信メールが送信される
- エラーハンドリングが適切に機能する