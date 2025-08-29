export default function WorksPage() {
  const works = [
    {
      id: 1,
      title: "企業コーポレートサイト",
      category: "Web制作",
      description: "中小企業様のコーポレートサイトをリニューアル。モダンなデザインと高速表示を実現。",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "在庫管理システム",
      category: "Excel自動化",
      description: "Excel VBAを使用した在庫管理システムの構築。月間作業時間を80%削減。",
      technologies: ["Excel VBA", "Access"],
    },
    {
      id: 3,
      title: "ECサイト構築",
      category: "Web制作",
      description: "地域特産品のECサイトを構築。決済システムの導入から運用サポートまで対応。",
      technologies: ["React", "Node.js", "Stripe"],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">制作実績</h1>
          <p className="text-lg text-muted-foreground">
            これまでに手がけたプロジェクトの一部をご紹介します
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-dark rounded-full mb-3">
                  {work.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">{work.title}</h3>
                <p className="text-muted-foreground mb-4">{work.description}</p>
                <div className="flex flex-wrap gap-2">
                  {work.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            さらに詳しい実績については、お問い合わせください
          </p>
        </div>
      </div>
    </div>
  );
}