"use client";

import Link from "next/link";
import { ContentSection } from "./ui";
import { motion } from "framer-motion";
import { FiCode, FiMonitor, FiAward, FiUsers } from "react-icons/fi";

export default function ProfileSection() {
  const skills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    { name: "Spreadsheet/GAS", level: 88 },
    { name: "Excel VBA", level: 85 },
    { name: "Python", level: 75 },
  ];

  const stats = [
    { icon: <FiMonitor />, value: "10年+", label: "IT業界経験" },
    { icon: <FiUsers />, value: "500+", label: "サポート実績" },
    { icon: <FiCode />, value: "50+", label: "開発プロジェクト" },
    { icon: <FiAward />, value: "98%", label: "顧客満足度" },
  ];

  return (
    <ContentSection className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            プロフィール
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            豊富な経験と確かな技術力で、お客様のIT課題を解決します
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-20"></div>
                <div className="relative bg-card p-8 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    IT業界15年以上の実績
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    IT業界で15年以上の経験を積み、システム開発からWeb制作まで幅広く対応。
                    現在はパソコン教室を運営しながら、個人・法人向けにITサポートサービスを提供しています。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    「テクノロジーを誰もが使いやすく」をモットーに、
                    お客様に寄り添ったサポートを心がけています。
                  </p>
                </div>
              </div>

              {/* Skills Progress Bars */}
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-foreground mb-4">スキルセット</h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats and Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-center text-primary dark:text-primary-dark text-3xl mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-foreground mb-4">経歴</h4>
              <div className="space-y-4 relative">
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
                
                {[
                  { phase: "現在", title: "パソコン教室運営・ITコンサルタント", desc: "個人・法人向けITサポート、Web制作、業務自動化" },
                  { phase: "技術拡張", title: "Web開発・自動化技術の習得と実践", desc: "React/Next.js、Google Apps Script等を継続学習" },
                  { phase: "IT業界", title: "システムエンジニア", desc: "15年以上の実務経験、幅広いシステム開発に従事" },
                ].map((item, index) => (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-medium">{item.phase}</div>
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            詳しいプロフィールは
            <Link href="/profile" className="text-primary dark:text-primary-dark hover:underline mx-1">
              こちら
            </Link>
            からご覧いただけます
          </p>
        </motion.div>
      </div>
    </ContentSection>
  );
}