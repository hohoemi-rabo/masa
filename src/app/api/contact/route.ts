import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema, contactCategories } from "@/app/lib/validations/contact";
import { ZodError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // バリデーション
    const validatedData = contactFormSchema.parse(body);
    const { name, email, phone, category, message, honeypot } = validatedData;
    
    // Honeypot チェック（ボット対策）
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json(
        { error: "スパムの可能性があります" },
        { status: 400 }
      );
    }
    
    // カテゴリ名を取得
    const categoryLabel = contactCategories.find(cat => cat.value === category)?.label || category;
    
    // 管理者宛てメール
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">
          新しいお問い合わせがあります
        </h2>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>お名前：</strong>${name}</p>
          <p><strong>メールアドレス：</strong>${email}</p>
          <p><strong>電話番号：</strong>${phone || "なし"}</p>
          <p><strong>お問い合わせ種別：</strong>${categoryLabel}</p>
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">お問い合わせ内容：</h3>
          <div style="background: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 4px; white-space: pre-wrap;">
${message}
          </div>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
          <p>このメールは自動送信されています。</p>
        </div>
      </div>
    `;
    
    // お客様宛て自動返信メール
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">
          お問い合わせを承りました
        </h2>
        <div style="margin: 20px 0;">
          <p>${name} 様</p>
          <p>この度は、お問い合わせいただきありがとうございます。</p>
          <p>以下の内容でお問い合わせを承りました。</p>
        </div>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>お問い合わせ種別：</strong>${categoryLabel}</p>
          <p><strong>お問い合わせ内容：</strong></p>
          <div style="background: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 4px; white-space: pre-wrap;">
${message}
          </div>
        </div>
        <div style="margin: 20px 0;">
          <p>内容を確認次第、1～2営業日以内にご返信いたします。</p>
          <p>今しばらくお待ちください。</p>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p><strong>加藤昌幸</strong><br>
          ITコンサルタント・Webサイト制作<br>
          TEL: 090-5646-560</p>
        </div>
      </div>
    `;
    
    // 管理者宛てメール送信
    await resend.emails.send({
      from: "お問い合わせフォーム <noreply@masa-olive.vercel.app>",
      to: process.env.CONTACT_EMAIL || "test@example.com",
      subject: `【お問い合わせ】${categoryLabel} - ${name}様`,
      html: adminEmailHtml,
    });
    
    // お客様宛て自動返信メール送信
    await resend.emails.send({
      from: "加藤昌幸 <noreply@masa-olive.vercel.app>",
      to: email,
      subject: "お問い合わせを承りました",
      html: customerEmailHtml,
    });
    
    return NextResponse.json({ 
      message: "お問い合わせを承りました。ありがとうございます。" 
    });
    
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "入力内容に不備があります", details: error.issues },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "送信に失敗しました。しばらくしてから再度お試しください。" },
      { status: 500 }
    );
  }
}