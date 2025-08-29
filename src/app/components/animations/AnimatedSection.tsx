"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

// reduced-motion対応のアニメーションラッパー
export function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        "@media (prefers-reduced-motion: reduce)": {
          animation: "none",
        },
      } as React.CSSProperties}
    >
      {children}
    </motion.section>
  );
}