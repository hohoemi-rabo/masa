"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData, contactCategories } from "../lib/validations/contact";
import DragSwipeNavigation from "../components/DragSwipeNavigation";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: result.message });
        reset();
      } else {
        setSubmitMessage({ type: 'error', text: result.error || "送信に失敗しました" });
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitMessage({ type: 'error', text: "送信に失敗しました。しばらくしてから再度お試しください。" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DragSwipeNavigation prevPage="/profile">
      <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">お問い合わせ</h1>
          <p className="text-lg text-muted-foreground">
            ご質問・ご相談は以下のフォームからお気軽にお問い合わせください
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-card rounded-lg shadow-md p-8">
          {/* Honeypot field - hidden from users */}
          <input
            {...register("honeypot")}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
              placeholder="山田太郎"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              電話番号（任意）
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
              placeholder="090-1234-5678"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
              お問い合わせ種別 <span className="text-red-500">*</span>
            </label>
            <select
              {...register("category")}
              id="category"
              className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
            >
              <option value="">選択してください</option>
              {contactCategories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.category.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("message")}
              id="message"
              rows={6}
              className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
              placeholder="ご相談内容をお書きください"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-lg"
          >
            {isSubmitting ? "送信中..." : "送信する"}
          </button>
        </form>

        {submitMessage && (
          <div className={`mt-8 mb-6 p-4 rounded-lg ${
            submitMessage.type === 'success' 
              ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
          }`}>
            {submitMessage.text}
          </div>
        )}

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
    </DragSwipeNavigation>
  );
}