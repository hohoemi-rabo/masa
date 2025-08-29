import Link from "next/link";

const footerLinks = {
  サービス: [
    { name: "パソコン・スマホサポート", href: "/services/pc-support" },
    { name: "ホームページ制作", href: "/services/web-development" },
    { name: "Excel業務効率化", href: "/services/excel-automation" },
  ],
  情報: [
    { name: "制作実績", href: "/works" },
    { name: "ブログ", href: "/blog" },
    { name: "プロフィール", href: "/about" },
  ],
  サポート: [
    { name: "お問い合わせ", href: "/contact" },
    { name: "プライバシーポリシー", href: "/privacy" },
    { name: "利用規約", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-primary-light mb-4">パソコン講師</h3>
            <p className="text-sm text-gray-600">
              AI時代の効率的なITソリューションを提供します
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary-light transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} パソコン講師. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}