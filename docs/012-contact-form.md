# 012: お問い合わせフォーム実装（Resend使用）

## 概要
Resendを使用したお問い合わせフォームの実装。フォーム送信時に直接メールで通知する仕組み。

## タスク
- [ ] Resendのセットアップ
  - [ ] Resendアカウント作成
  - [ ] API キー取得
  - [ ] ドメイン認証（任意）
- [ ] 環境変数の設定
  - [ ] RESEND_API_KEY
  - [ ] CONTACT_EMAIL（受信用メールアドレス）
- [ ] フォームUIの作成
  - [ ] 入力フィールド（名前、メール、電話、種別、内容）
  - [ ] バリデーションメッセージ
  - [ ] 送信ボタン
  - [ ] ローディング状態
- [ ] フォームバリデーション
  - [ ] React Hook Form導入
  - [ ] Zodによるスキーマ定義
  - [ ] クライアント側バリデーション
- [ ] API Route作成
  - [ ] /api/contact エンドポイント
  - [ ] フォームデータの受け取り
  - [ ] サーバーサイドバリデーション
- [ ] Resend連携
  - [ ] resendライブラリ導入（npm install resend）
  - [ ] 管理者宛て通知メール送信
  - [ ] お客様宛て自動返信メール送信
  - [ ] エラーハンドリング
- [ ] スパム対策
  - [ ] レート制限
  - [ ] Honeypot フィールド（ボット対策）

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