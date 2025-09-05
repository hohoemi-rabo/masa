"use client";

import { motion } from "framer-motion";
import { FiHeart, FiMessageCircle, FiSend, FiBookmark, FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";

interface Post {
  id: number;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  date: string;
}

export default function InstagramPage() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // ダミーデータ（将来的にはInstagram APIから取得）
  const posts: Post[] = [
    {
      id: 1,
      image: "https://picsum.photos/400/400?random=1",
      likes: 128,
      comments: 15,
      caption: "Next.js 15で作成したポートフォリオサイトが完成しました！最新技術を使った開発事例です。",
      date: "2024年12月20日",
    },
    {
      id: 2,
      image: "https://picsum.photos/400/400?random=2",
      likes: 95,
      comments: 8,
      caption: "Excel VBAで業務効率化！月間作業時間を80%削減した事例をご紹介。",
      date: "2024年12月18日",
    },
    {
      id: 3,
      image: "https://picsum.photos/400/400?random=3",
      likes: 156,
      comments: 23,
      caption: "パソコン講座を開催しました。初心者の方でも安心して学べる環境を提供しています。",
      date: "2024年12月15日",
    },
    {
      id: 4,
      image: "https://picsum.photos/400/400?random=4",
      likes: 203,
      comments: 31,
      caption: "最新のWeb技術トレンドについて解説。React Server Componentsの活用方法とは？",
      date: "2024年12月12日",
    },
    {
      id: 5,
      image: "https://picsum.photos/400/400?random=5",
      likes: 87,
      comments: 12,
      caption: "スマホの基本操作講座。シニアの方々に大好評をいただきました！",
      date: "2024年12月10日",
    },
    {
      id: 6,
      image: "https://picsum.photos/400/400?random=6",
      likes: 142,
      comments: 19,
      caption: "AI時代の効率的な開発手法。Claude CodeとGitHub Copilotの活用術。",
      date: "2024年12月8日",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full p-1"
              >
                <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-foreground">PC</span>
                </div>
              </motion.div>
              
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">@pc_instructor</h1>
                <div className="flex gap-6 mb-4">
                  <span className="text-sm">
                    <strong className="text-foreground">6</strong>{" "}
                    <span className="text-muted-foreground">投稿</span>
                  </span>
                  <span className="text-sm">
                    <strong className="text-foreground">1,234</strong>{" "}
                    <span className="text-muted-foreground">フォロワー</span>
                  </span>
                  <span className="text-sm">
                    <strong className="text-foreground">567</strong>{" "}
                    <span className="text-muted-foreground">フォロー中</span>
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">パソコン講師</p>
                  <p className="text-sm text-muted-foreground">
                    IT業界20年の経験を活かし、個人・法人向けにITサポートを提供
                    <br />
                    💻 パソコン・スマホサポート
                    <br />
                    🌐 ホームページ制作
                    <br />
                    📊 Excel業務効率化
                  </p>
                </div>
              </div>
            </div>
            
            <button className="hidden md:block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              フォロー
            </button>
          </div>

          {/* Tabs */}
          <div className="border-t border-border pt-4">
            <div className="flex gap-8 justify-center">
              <button className="flex items-center gap-2 text-foreground font-semibold border-t-2 border-foreground pt-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                投稿
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground pt-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                </svg>
                保存済み
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground pt-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                タグ付け
              </button>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <motion.div
          className="grid grid-cols-3 gap-1 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="relative aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedPost(post)}
            >
              <img
                src={post.image}
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <FiHeart className="w-6 h-6 fill-white" />
                    <span className="font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMessageCircle className="w-6 h-6 fill-white" />
                    <span className="font-semibold">{post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Post Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-lg max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center">
              <img
                src={selectedPost.image}
                alt={`Post ${selectedPost.id}`}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>

            {/* Details */}
            <div className="md:w-2/5 p-6 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full p-0.5">
                    <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">PC</span>
                    </div>
                  </div>
                  <span className="font-semibold text-foreground">pc_instructor</span>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <FiMoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Caption */}
              <div className="flex-1 mb-4">
                <p className="text-foreground mb-2">{selectedPost.caption}</p>
                <p className="text-sm text-muted-foreground">{selectedPost.date}</p>
              </div>

              {/* Actions */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <button className="hover:scale-110 transition-transform">
                      <FiHeart className="w-6 h-6 text-foreground hover:text-red-500" />
                    </button>
                    <button className="hover:scale-110 transition-transform">
                      <FiMessageCircle className="w-6 h-6 text-foreground" />
                    </button>
                    <button className="hover:scale-110 transition-transform">
                      <FiSend className="w-6 h-6 text-foreground" />
                    </button>
                  </div>
                  <button className="hover:scale-110 transition-transform">
                    <FiBookmark className="w-6 h-6 text-foreground" />
                  </button>
                </div>
                
                <div className="text-sm">
                  <span className="font-semibold text-foreground">{selectedPost.likes} いいね</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}