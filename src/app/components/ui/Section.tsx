import { SectionProps, SectionHeaderProps } from "@/types/components";
import { cn } from "@/app/lib/utils";

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

// Section variants
export function HeroSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("bg-gradient-to-b from-blue-50 to-background dark:from-gray-900 dark:to-background py-20 transition-colors", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function ContentSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("py-16 bg-background transition-colors", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function CtaSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("py-16 bg-muted transition-colors", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">{children}</div>
    </section>
  );
}