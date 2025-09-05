import Link from "next/link";
import Image from "next/image";
import { getPost } from "../../posts-data";
import { FiArrowLeft, FiHeart, FiMessageCircle, FiSend, FiBookmark, FiMoreHorizontal } from "react-icons/fi";

export default async function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getPost(parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">投稿が見つかりません</h1>
          <Link href="/instagram" className="text-primary hover:underline">
            Instagramページに戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border sticky top-0 bg-background z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/instagram" 
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span>戻る</span>
          </Link>
          <h1 className="text-lg font-semibold">投稿</h1>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative bg-black rounded-lg overflow-hidden aspect-square">
            <Image
              src={post.image}
              alt={`Post ${post.id}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Profile */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full p-0.5">
                  <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">PC</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">pc_instructor</p>
                  <p className="text-sm text-muted-foreground">パソコン講師</p>
                </div>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <FiMoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Caption */}
            <div className="bg-card p-6 rounded-lg">
              <p className="text-foreground mb-3">{post.caption}</p>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </div>

            {/* Actions */}
            <div className="bg-card p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button className="hover:scale-110 transition-transform">
                    <FiHeart className="w-7 h-7 text-foreground hover:text-red-500" />
                  </button>
                  <button className="hover:scale-110 transition-transform">
                    <FiMessageCircle className="w-7 h-7 text-foreground" />
                  </button>
                  <button className="hover:scale-110 transition-transform">
                    <FiSend className="w-7 h-7 text-foreground" />
                  </button>
                </div>
                <button className="hover:scale-110 transition-transform">
                  <FiBookmark className="w-7 h-7 text-foreground" />
                </button>
              </div>
              
              <div className="space-y-2">
                <p className="font-semibold text-foreground">{post.likes} いいね</p>
                <p className="text-sm text-muted-foreground">{post.comments} 件のコメント</p>
              </div>
            </div>

            {/* Comment form */}
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-4">コメントを追加</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="コメントを入力..."
                  className="flex-1 px-4 py-2 bg-muted rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                  投稿
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}