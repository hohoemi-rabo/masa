import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-12 text-center">プロフィール</h1>
        
        {/* Profile Header - 2 grid layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/images/profile.png"
                  alt="加藤昌幸のプロフィール写真"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-20"></div>
            </div>
          </div>
          
          {/* Profile Info */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">加藤 昌幸</h2>
            <p className="text-xl text-primary font-semibold mb-6">ITコンサルタント・パソコン教室運営</p>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              IT業界で15年以上の経験を積み、システム開発からWeb制作まで幅広く対応。
              現在はパソコン教室を運営しながら、個人・法人向けにITサポートサービスを提供しています。
            </p>
            <p className="text-muted-foreground text-lg">
              「テクノロジーを誰もが使いやすく」をモットーに、お客様に寄り添ったサポートを心がけています。
            </p>
          </div>
        </div>
        
        {/* Career and Skills - 2 columns to match profile layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Career */}
          <div className="bg-card rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">経歴</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary font-semibold">現在</span>
                <div>
                  <h4 className="font-semibold text-foreground">パソコン教室運営・ITコンサルタント</h4>
                  <p className="text-sm text-muted-foreground">個人・法人向けITサポート、Web制作、業務自動化</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-semibold">技術拡張</span>
                <div>
                  <h4 className="font-semibold text-foreground">Web開発・自動化技術の習得と実践</h4>
                  <p className="text-sm text-muted-foreground">React/Next.js、Google Apps Script等を継続学習</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-semibold">IT業界</span>
                <div>
                  <h4 className="font-semibold text-foreground">システムエンジニア</h4>
                  <p className="text-sm text-muted-foreground">15年以上の実務経験、幅広いシステム開発に従事</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="bg-card rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">スキルセット</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground">JavaScript/TypeScript</span>
                <div className="w-40 bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">React/Next.js</span>
                <div className="w-40 bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">Spreadsheet/GAS</span>
                <div className="w-40 bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">Excel VBA</span>
                <div className="w-40 bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">Python</span>
                <div className="w-40 bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services and Strengths - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Services */}
          <div className="bg-card rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">提供サービス</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌐</span>
                <div>
                  <h4 className="font-semibold text-foreground">Webサイト制作</h4>
                  <p className="text-sm text-muted-foreground">企業サイト、LP、ECサイト構築</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold text-foreground">業務自動化・効率化</h4>
                  <p className="text-sm text-muted-foreground">GAS、スプレッドシート、Excel自動化</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💻</span>
                <div>
                  <h4 className="font-semibold text-foreground">パソコン・スマホサポート</h4>
                  <p className="text-sm text-muted-foreground">トラブル解決、初期設定、データ移行</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Strengths */}
          <div className="bg-card rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">強み</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">技術的な内容を分かりやすく説明</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">最新のAI技術を活用した効率的な開発</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">幅広い年齢層への指導経験</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">迅速で丁寧な対応</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact CTA - Full width */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">📧 お気軽にご相談ください</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            ITのことでお困りのことがあれば、どんな小さなことでも
            お気軽にご相談ください。お客様一人ひとりのレベルやニーズに合わせて、
            最適なサポートを提供いたします。
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            お問い合わせはこちら
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            お気軽にご相談ください
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            まずは無料相談から。あなたの課題をお聞かせください。
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            無料相談を申し込む
          </Link>
        </div>

        {/* Contact Info */}
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