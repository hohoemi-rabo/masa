import CTASection from "../../components/CTASection";

export default function ExcelAutomationPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Excel業務効率化</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            繰り返しのExcel作業に時間を取られていませんか？
            マクロやVBAを活用して、業務を自動化・効率化します。
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">こんなお悩みを解決</h2>
          <ul className="space-y-4">
            <li>
              <strong>定型作業の自動化</strong>
              <p className="text-gray-600">毎日・毎週・毎月の繰り返し作業を自動化</p>
            </li>
            <li>
              <strong>データ集計・分析</strong>
              <p className="text-gray-600">複数ファイルからのデータ集計を瞬時に実行</p>
            </li>
            <li>
              <strong>帳票作成</strong>
              <p className="text-gray-600">請求書、見積書などの帳票を自動生成</p>
            </li>
            <li>
              <strong>データ変換・加工</strong>
              <p className="text-gray-600">CSVやデータベースとの連携処理を効率化</p>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">導入効果</h2>
          <ul className="space-y-2">
            <li>✓ 作業時間を最大90%削減</li>
            <li>✓ ヒューマンエラーの防止</li>
            <li>✓ 業務の標準化・属人化の解消</li>
            <li>✓ 本来の業務に集中できる環境づくり</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">サポート内容</h2>
          <p className="text-gray-600">
            現状の業務フローをヒアリングし、最適な自動化ソリューションをご提案します。
            マクロ開発から使い方のレクチャーまで、トータルでサポートいたします。
          </p>
        </div>

        <CTASection />
      </div>
    </div>
  );
}