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
      </div>
    </div>
  );
}