export interface Post {
  id: number;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  date: string;
}

export const posts: Post[] = [
  {
    id: 1,
    image: "https://picsum.photos/800/800?random=1",
    likes: 128,
    comments: 15,
    caption: "Next.js 15で作成したポートフォリオサイトが完成しました！最新技術を使った開発事例です。",
    date: "2024年12月20日",
  },
  {
    id: 2,
    image: "https://picsum.photos/800/800?random=2",
    likes: 95,
    comments: 8,
    caption: "Excel VBAで業務効率化！月間作業時間を80%削減した事例をご紹介。",
    date: "2024年12月18日",
  },
  {
    id: 3,
    image: "https://picsum.photos/800/800?random=3",
    likes: 156,
    comments: 23,
    caption: "パソコン講座を開催しました。初心者の方でも安心して学べる環境を提供しています。",
    date: "2024年12月15日",
  },
  {
    id: 4,
    image: "https://picsum.photos/800/800?random=4",
    likes: 203,
    comments: 31,
    caption: "最新のWeb技術トレンドについて解説。React Server Componentsの活用方法とは？",
    date: "2024年12月12日",
  },
  {
    id: 5,
    image: "https://picsum.photos/800/800?random=5",
    likes: 87,
    comments: 12,
    caption: "スマホの基本操作講座。シニアの方々に大好評をいただきました！",
    date: "2024年12月10日",
  },
  {
    id: 6,
    image: "https://picsum.photos/800/800?random=6",
    likes: 142,
    comments: 19,
    caption: "AI時代の効率的な開発手法。Claude CodeとGitHub Copilotの活用術。",
    date: "2024年12月8日",
  },
];

export function getPost(id: number): Post | undefined {
  return posts.find(post => post.id === id);
}