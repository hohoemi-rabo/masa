export default function PcSupportPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">パソコン・スマホサポート</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            パソコンやスマートフォンのトラブルでお困りではありませんか？
            初心者の方から上級者の方まで、幅広くサポートいたします。
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">サービス内容</h2>
          <ul className="space-y-4">
            <li>
              <strong>初期設定サポート</strong>
              <p className="text-gray-600">新しいパソコンやスマホの初期設定をお手伝いします</p>
            </li>
            <li>
              <strong>トラブル解決</strong>
              <p className="text-gray-600">起動しない、動作が遅い、エラーが出るなどのトラブルを解決</p>
            </li>
            <li>
              <strong>データ移行</strong>
              <p className="text-gray-600">古い機器から新しい機器へのデータ移行をサポート</p>
            </li>
            <li>
              <strong>使い方レッスン</strong>
              <p className="text-gray-600">基本操作から応用まで、マンツーマンでレッスン</p>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">料金</h2>
          <p className="text-gray-600">
            お客様のご要望に応じて個別にお見積もりいたします。
            まずはお気軽にご相談ください。
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            お気軽にご相談ください
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            まずは無料相談から。あなたの課題をお聞かせください。
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            無料相談を申し込む
          </a>
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