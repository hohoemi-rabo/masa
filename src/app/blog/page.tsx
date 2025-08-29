export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Next.js 15の新機能を試してみた",
      date: "2024年12月20日",
      category: "技術",
      excerpt: "Next.js 15がリリースされました。Turbopackの改善やServer Actionsの機能強化など、注目の新機能を紹介します。",
    },
    {
      id: 2,
      title: "AIを活用した効率的な開発手法",
      date: "2024年12月15日",
      category: "AI",
      excerpt: "Claude CodeやGitHub Copilotなど、AI開発ツールを使った効率的な開発手法について解説します。",
    },
    {
      id: 3,
      title: "Excel VBAで業務効率化した事例",
      date: "2024年12月10日",
      category: "Excel",
      excerpt: "実際にExcel VBAを導入して業務効率化に成功した事例を紹介。作業時間を90%削減できた秘訣とは。",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">ブログ</h1>
          <p className="text-lg text-muted-foreground">
            技術情報やTips、事例などを発信しています
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {posts.map((post) => (
            <article key={post.id} className="mb-8 pb-8 border-b border-border last:border-b-0">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <span className="text-sm px-2 py-1 bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-dark rounded">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-3 hover:text-primary dark:hover:text-primary-dark cursor-pointer">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <button className="text-primary dark:text-primary-dark hover:underline">
                続きを読む →
              </button>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            もっと記事を見る（準備中）
          </p>
        </div>
      </div>
    </div>
  );
}