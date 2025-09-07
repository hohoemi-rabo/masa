"use client";

import { useState } from "react";
import { Button, Input, Textarea, Select } from "../components/ui";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: フォーム送信処理を実装
    console.log("Form submitted:", formData);
    alert("お問い合わせを受け付けました。後日ご連絡いたします。");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">お問い合わせ</h1>
          <p className="text-lg text-muted-foreground">
            ご質問・ご相談は以下のフォームからお気軽にお問い合わせください
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-md p-8">
          <Input
            label="お名前"
            required
            value={formData.name}
            onChange={(value) => setFormData({ ...formData, name: value })}
          />
          
          <Input
            label="メールアドレス"
            type="email"
            required
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
          />
          
          <Input
            label="電話番号（任意）"
            type="tel"
            value={formData.phone}
            onChange={(value) => setFormData({ ...formData, phone: value })}
          />
          
          <Select
            label="お問い合わせ種別"
            required
            options={[
              { value: "pc-support", label: "パソコン・スマホサポート" },
              { value: "web-development", label: "ホームページ制作" },
              { value: "excel-automation", label: "Excel業務効率化" },
              { value: "other", label: "その他" },
            ]}
            value={formData.category}
            onChange={(value) => setFormData({ ...formData, category: value })}
          />
          
          <Textarea
            label="お問い合わせ内容"
            required
            rows={6}
            placeholder="ご相談内容をお書きください"
            value={formData.message}
            onChange={(value) => setFormData({ ...formData, message: value })}
          />

          <Button type="submit" className="w-full" size="lg">
            送信する
          </Button>
        </form>

        <div className="mt-8 text-center text-muted-foreground">
          <p>お電話でのお問い合わせも承っております。お気軽にお電話ください。</p>
          <p className="mt-2 font-semibold text-foreground">
            <a href="tel:090-5646-560" className="hover:text-primary transition-colors">
              TEL: 090-5646-560
            </a>
          </p>
          <p className="text-sm">電話受付：随時対応可能</p>
        </div>
      </div>
    </div>
  );
}