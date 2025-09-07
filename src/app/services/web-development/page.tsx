import CTASection from "../../components/CTASection";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">ホームページ制作</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            AI時代の最新技術を活用し、効率的で高品質なWebサイトを制作します。
            お客様のビジネスに最適なソリューションをご提供いたします。
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">制作可能なサイト</h2>
          <ul className="space-y-4">
            <li>
              <strong>企業サイト</strong>
              <p className="text-gray-600">会社の顔となるコーポレートサイトを制作</p>
            </li>
            <li>
              <strong>ランディングページ</strong>
              <p className="text-gray-600">商品・サービスの訴求力の高いLPを制作</p>
            </li>
            <li>
              <strong>ECサイト</strong>
              <p className="text-gray-600">オンラインショップの構築から運用サポートまで</p>
            </li>
            <li>
              <strong>ブログ・メディアサイト</strong>
              <p className="text-gray-600">情報発信に最適なCMS付きサイトを構築</p>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">使用技術</h2>
          <p className="text-gray-600">
            Next.js、React、TypeScriptなど最新のフレームワークを使用し、
            高速で安全、SEOに強いサイトを制作します。
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">制作の流れ</h2>
          <ol className="space-y-2">
            <li>1. ヒアリング（無料相談）</li>
            <li>2. 企画・提案</li>
            <li>3. デザイン制作</li>
            <li>4. 開発・実装</li>
            <li>5. テスト・納品</li>
            <li>6. 運用サポート</li>
          </ol>
        </div>

        <CTASection />
      </div>
    </div>
  );
}