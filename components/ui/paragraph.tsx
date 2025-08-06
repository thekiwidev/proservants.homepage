import React from "react";
import { cn } from "@/lib/utils";

type ParagraphSize = "sm" | "md" | "lg" | "xl";
type ParagraphWeight = "normal" | "medium" | "semibold";
type ParagraphAlign = "left" | "center" | "right" | "justify";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: ParagraphSize;
  weight?: ParagraphWeight;
  align?: ParagraphAlign;
  muted?: boolean;
  children: React.ReactNode;
}

const sizeClasses = {
  sm: "text-sm leading-relaxed",
  md: "text-base leading-relaxed",
  lg: "text-lg leading-relaxed",
  xl: "text-xl leading-relaxed",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

export function Paragraph({
  size = "md",
  weight = "normal",
  align = "left",
  muted = false,
  className,
  children,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(
        "font-sans",
        sizeClasses[size],
        weightClasses[weight],
        alignClasses[align],
        muted ? "text-dark-600" : "text-dark-700",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
