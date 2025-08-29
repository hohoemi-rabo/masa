import { ReactNode } from "react";

// Button types
export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

// Card types
export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

// Section types
export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

// Form types
export interface InputProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export interface TextareaProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
  rows?: number;
  value?: string;
  onChange?: (value: string) => void;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  required?: boolean;
  error?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

// Loading types
export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}