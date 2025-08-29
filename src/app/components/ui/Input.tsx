import { InputProps } from "@/types/components";
import { cn } from "@/app/lib/utils";

export default function Input({
  label,
  placeholder,
  required = false,
  error,
  className,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-foreground mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          "w-full px-4 py-2 border rounded-lg transition-colors bg-background text-foreground",
          "focus:ring-2 focus:ring-primary focus:border-transparent",
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-border hover:border-muted-foreground",
          className
        )}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}