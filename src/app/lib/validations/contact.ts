import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "お名前は2文字以上で入力してください")
    .max(50, "お名前は50文字以内で入力してください"),
  email: z
    .string()
    .email("有効なメールアドレスを入力してください")
    .max(100, "メールアドレスは100文字以内で入力してください"),
  phone: z
    .string()
    .max(20, "電話番号は20文字以内で入力してください")
    .optional()
    .or(z.literal("")),
  category: z
    .string()
    .min(1, "お問い合わせ種別を選択してください"),
  message: z
    .string()
    .min(10, "お問い合わせ内容は10文字以上で入力してください")
    .max(2000, "お問い合わせ内容は2000文字以内で入力してください"),
  honeypot: z.string().max(0, "スパムの可能性があります").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const contactCategories = [
  { value: "web-development", label: "Webサイト制作" },
  { value: "automation", label: "業務自動化・効率化" },
  { value: "pc-support", label: "パソコン・スマホサポート" },
  { value: "other", label: "その他" },
] as const;