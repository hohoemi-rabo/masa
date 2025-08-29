export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">プロフィール</h1>
        
        <div className="prose max-w-none">
          <div className="bg-card rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">パソコン講師</h2>
            <p className="text-muted-foreground mb-6">
              IT業界での豊富な経験を活かし、個人・法人向けにITサポートサービスを提供しています。
              「テクノロジーを誰もが使いやすく」をモットーに、お客様に寄り添ったサポートを心がけています。
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">経歴</h3>
            <ul className="space-y-2 mb-6">
              <li>• IT企業でシステムエンジニアとして10年勤務</li>
              <li>• Web制作会社でフロントエンドエンジニアとして5年勤務</li>
              <li>• 2020年より独立、フリーランスとして活動開始</li>
              <li>• パソコン教室での講師経験多数</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">スキル・資格</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">プログラミング</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• JavaScript/TypeScript</li>
                  <li>• React/Next.js</li>
                  <li>• HTML/CSS</li>
                  <li>• Python</li>
                  <li>• VBA</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">その他</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 基本情報技術者</li>
                  <li>• Microsoft Office Specialist</li>
                  <li>• Google Workspace 認定</li>
                  <li>• Adobe Creative Suite</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">強み</h3>
            <ul className="space-y-2 mb-6">
              <li>✓ 技術的な内容を分かりやすく説明できる</li>
              <li>✓ 最新のAI技術を活用した効率的な開発</li>
              <li>✓ 幅広い年齢層への指導経験</li>
              <li>✓ 迅速で丁寧な対応</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">メッセージ</h3>
            <p className="text-muted-foreground">
              パソコンやスマートフォンは今や生活に欠かせないツールですが、
              使いこなすのは意外と難しいものです。
              私は、お客様一人ひとりのレベルやニーズに合わせて、
              最適なサポートを提供することを心がけています。
              <br /><br />
              また、AI時代の到来により、開発手法も大きく変わりつつあります。
              最新技術を積極的に取り入れながら、効率的で高品質なサービスを
              提供してまいります。
              <br /><br />
              ITのことでお困りのことがあれば、どんな小さなことでも
              お気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}