"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "accent" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  radius?: "sm" | "md" | "lg" | "xl" | "full" | "none";
  children: React.ReactNode;
}

const variantClasses = {
  primary: {
    base: "bg-primary-500 text-white border-transparent shadow-sm",
    hover: "bg-accent-500",
  },
  accent: {
    base: "bg-accent-500 text-white border-transparent shadow-sm",
    hover: "bg-primary-500",
  },
  outline: {
    base: "border-dark-200 text-dark-900 bg-white shadow-sm",
    hover: "bg-dark-100",
  },
  ghost: {
    base: "text-dark-900 border-transparent bg-transparent",
    hover: "bg-dark-50",
  },
  link: {
    base: "text-primary-500 underline-offset-4 hover:underline border-transparent bg-transparent p-0 h-auto font-normal",
    hover: "text-primary-600",
  },
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm font-semibold",
  md: "px-6 py-2.5 text-sm font-semibold",
  lg: "px-8 py-3 text-base font-semibold",
  xl: "px-10 py-4 text-lg font-semibold",
};

const defaultRadiusClasses = {
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-2xl",
};

const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  radius,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const isLinkVariant = variant === "link";

  // Get the appropriate border radius
  const getBorderRadius = () => {
    if (radius) return radiusClasses[radius];
    return defaultRadiusClasses[size];
  };

  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center font-sans transition-all duration-200 cursor-pointer overflow-hidden",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500/30",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "active:scale-95 transition-transform",
        "before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2",
        "before:w-[200%] before:h-[200%] before:bg-black/10 before:rounded-full",
        "before:translate-y-full before:transition-transform before:duration-500 before:ease-out",
        "hover:before:translate-y-1/2",
        variantClasses[variant].base,
        !isLinkVariant && sizeClasses[size],
        !isLinkVariant && "border",
        !isLinkVariant && getBorderRadius(),
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 relative z-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
