import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "パソコン・スマホサポート",
      description: "初心者から上級者まで、あらゆるIT機器のトラブルを解決",
      features: [
        "パソコン・スマホの初期設定",
        "トラブルシューティング",
        "データ移行・バックアップ",
        "セキュリティ対策",
      ],
      href: "/services/pc-support",
    },
    {
      title: "ホームページ制作",
      description: "目的に合わせた最適なWebサイトを制作",
      features: [
        "企業サイト制作",
        "ランディングページ制作",
        "ECサイト構築",
        "レスポンシブデザイン",
      ],
      href: "/services/web-development",
    },
    {
      title: "Excel業務効率化",
      description: "Excel作業を自動化し、業務効率を大幅改善",
      features: [
        "マクロ・VBA開発",
        "データ分析・集計",
        "カスタム関数作成",
        "帳票自動化",
      ],
      href: "/services/excel-automation",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">サービス一覧</h1>
          <p className="text-lg text-gray-600">
            お客様のニーズに合わせた3つのサービスをご提供しています
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-primary-light mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="block text-center px-6 py-3 bg-primary-light text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}