import { ReactNode } from "react";
import { cn } from "../lib/utils";
import { FiCheck } from "react-icons/fi";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  href?: string; // 将来使用予定のため残すが任意にする
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-card text-card-foreground rounded-2xl overflow-hidden transition-all duration-300",
        "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.3)]",
        "hover:scale-[1.02] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.4)]",
        "border border-border/50",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-8">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary-dark/20 dark:to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <div className="text-primary dark:text-primary-dark group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        {/* Features list */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <FiCheck className="w-5 h-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* CTA Link */}
        {/* 将来実装予定 - 詳しく見るリンク
        <Link
          href={href}
          className="inline-flex items-center text-primary dark:text-primary-dark font-semibold hover:underline underline-offset-4 transition-all duration-300"
        >
          <span>詳しく見る</span>
          <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
        */}
      </div>
    </div>
  );
}