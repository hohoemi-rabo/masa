import { CardProps } from "@/types/components";
import { cn } from "@/app/lib/utils";

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-lg shadow-md dark:shadow-lg overflow-hidden transition-colors",
        hover && "transition-all duration-200 hover:scale-105 hover:shadow-lg dark:hover:shadow-xl cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

// Card variants
export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-6 py-4 border-b border-border", className)}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-6 py-4 border-t border-border bg-muted", className)}>{children}</div>;
}