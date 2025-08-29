import { CardProps } from "@/types/components";
import { cn } from "@/app/lib/utils";

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden",
        hover && "transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

// Card variants
export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-6 py-4 border-b border-gray-200", className)}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-6 py-4 border-t border-gray-200 bg-gray-50", className)}>{children}</div>;
}