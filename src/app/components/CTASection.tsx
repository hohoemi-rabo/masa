import Link from "next/link";

export default function CTASection() {
  return (
    <>
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            お気軽にご相談ください
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            ITのことでお困りのことがあれば、どんな小さなことでも
            <br />
            お気軽にご相談ください。お客様一人ひとりのレベルやニーズに合わせて、
            <br />
            最適なサポートを提供いたします。
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            無料相談を申し込む
          </Link>
        </div>
      </div>
      
      {/* Contact Info */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-center text-muted-foreground">
        <p>お電話でのお問い合わせも承っております。お気軽にお電話ください。</p>
        <p className="mt-2 font-semibold text-foreground">
          <a href="tel:090-5646-560" className="hover:text-primary transition-colors">
            TEL: 090-5646-560
          </a>
        </p>
        <p className="text-sm">電話受付：随時対応可能</p>
      </div>
    </>
  );
}