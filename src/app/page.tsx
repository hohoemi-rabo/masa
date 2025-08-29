import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              テクノロジーで、あなたの"困った"を解決します
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              パソコン・スマホサポートから、ホームページ制作、Excel業務効率化まで
              <br />
              AI時代の効率的なITソリューションを提供
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary-light text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                お問い合わせ
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 border border-primary-light text-primary-light rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                サービスを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            提供サービス
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">パソコン・スマホサポート</h3>
              <p className="text-gray-600 mb-4">
                トラブル解決、初期設定、使い方指導まで、あなたのIT環境を全面サポート
              </p>
              <Link href="/services/pc-support" className="text-primary-light hover:underline">
                詳しく見る →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">ホームページ制作</h3>
              <p className="text-gray-600 mb-4">
                企業サイト、ランディングページ、ECサイトまで、目的に合わせた最適なサイトを制作
              </p>
              <Link href="/services/web-development" className="text-primary-light hover:underline">
                詳しく見る →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Excel業務効率化</h3>
              <p className="text-gray-600 mb-4">
                マクロ開発、自動化、データ分析で、業務時間を大幅削減
              </p>
              <Link href="/services/excel-automation" className="text-primary-light hover:underline">
                詳しく見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            お気軽にご相談ください
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            まずは無料相談から。あなたの課題をお聞かせください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-light text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </div>
  );
}