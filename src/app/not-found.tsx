import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">ページが見つかりません</h2>
        <p className="text-muted-foreground mb-8">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary-light text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}