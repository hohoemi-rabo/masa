import { SkeletonProps } from "@/types/components";
import { cn } from "@/app/lib/utils";

export default function Skeleton({ width = "100%", height = "1rem", className }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse bg-gray-200 rounded", className)}
      style={{ width, height }}
    />
  );
}

// Pre-defined skeleton variants
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("bg-white rounded-lg shadow-md p-6", className)}>
      <Skeleton height="1.5rem" className="mb-4" />
      <Skeleton height="1rem" className="mb-2" />
      <Skeleton height="1rem" width="75%" className="mb-4" />
      <Skeleton height="2rem" width="6rem" />
    </div>
  );
}

export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height="1rem"
          width={i === lines - 1 ? "60%" : "100%"}
        />
      ))}
    </div>
  );
}