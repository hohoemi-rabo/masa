"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiHeart, FiMessageCircle } from "react-icons/fi";
import ViewTransitionLink from "../components/ViewTransitionLink";
import { posts } from "./posts-data";
import CTASection from "../components/CTASection";
import DragSwipeNavigation from "../components/DragSwipeNavigation";

export default function InstagramPage() {
  // postsデータをposts-data.tsからインポート

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
    <DragSwipeNavigation prevPage="/works" nextPage="/profile">
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
              className="relative aspect-square bg-muted rounded-lg overflow-hidden group"
            >
              <ViewTransitionLink href={`/instagram/photo/${post.id}`}>
                <div className="cursor-pointer relative w-full h-full">
                  <Image
                    src={post.image}
                    alt={`Post ${post.id}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
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
                </div>
              </ViewTransitionLink>
            </motion.div>
          ))}
        </motion.div>

        <CTASection />
      </div>
      </div>
    </DragSwipeNavigation>
  );
}