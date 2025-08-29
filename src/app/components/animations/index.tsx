"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// アニメーションバリアント定義
const fadeInUp: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInDown: Variants = {
  initial: { 
    opacity: 0, 
    y: -20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInLeft: Variants = {
  initial: { 
    opacity: 0, 
    x: -30 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInRight: Variants = {
  initial: { 
    opacity: 0, 
    x: 30 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const scaleIn: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.8 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Props定義
interface AnimationWrapperProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
  delay?: number;
}

// フェードイン（上から）
export function FadeInUp({ children, className = "", once = true, delay = 0 }: AnimationWrapperProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount: 0.3 }}
      className={className}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

// フェードイン（下から）
export function FadeInDown({ children, className = "", once = true, delay = 0 }: AnimationWrapperProps) {
  return (
    <motion.div
      variants={fadeInDown}
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount: 0.3 }}
      className={className}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

// フェードイン（左から）
export function FadeInLeft({ children, className = "", once = true, delay = 0 }: AnimationWrapperProps) {
  return (
    <motion.div
      variants={fadeInLeft}
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount: 0.3 }}
      className={className}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

// フェードイン（右から）
export function FadeInRight({ children, className = "", once = true, delay = 0 }: AnimationWrapperProps) {
  return (
    <motion.div
      variants={fadeInRight}
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount: 0.3 }}
      className={className}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

// スケールイン
export function ScaleIn({ children, className = "", once = true, delay = 0 }: AnimationWrapperProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount: 0.3 }}
      className={className}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

// スタガーコンテナ（子要素を順番に表示）
export function StaggerContainer({ children, className = "", once = true }: AnimationWrapperProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// スタガーアイテム（StaggerContainer内で使用）
export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}