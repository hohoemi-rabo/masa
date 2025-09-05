import Link from "next/link";
import { ReactNode } from "react";

interface ViewTransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

// 通常のLinkコンポーネント（View Transitions API削除）
export default function ViewTransitionLink({ 
  href, 
  children, 
  className = "",
  onClick 
}: ViewTransitionLinkProps) {
  return (
    <Link 
      href={href} 
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}