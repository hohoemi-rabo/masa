import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  href,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-card text-card-foreground rounded-2xl shadow-lg dark:shadow-xl overflow-hidden transition-all duration-300",
        "hover:scale-105 hover:shadow-2xl dark:hover:shadow-2xl",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-8">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary-dark/20 dark:to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="text-primary dark:text-primary-dark">
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
              <svg
                className="w-5 h-5 text-primary dark:text-primary-dark mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* CTA Link */}
        <Link
          href={href}
          className="inline-flex items-center text-primary dark:text-primary-dark font-medium group-hover:gap-3 transition-all duration-300"
        >
          <span>詳しく見る</span>
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}