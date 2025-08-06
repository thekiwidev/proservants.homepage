import React from "react";
import { cn } from "@/lib/utils";

type HeadingRole = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HighlightType = "gradient" | "primary" | "accent";

interface SectionHeadingProps {
  children: React.ReactNode;
  role?: HeadingRole;
  highlight?: HighlightType;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
  align?: "left" | "center" | "right";
}

const sizeClasses = {
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl",
  lg: "text-2xl md:text-3xl lg:text-4xl",
  xl: "text-3xl md:text-4xl lg:text-5xl",
  "2xl": "text-4xl md:text-5xl lg:text-6xl",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const highlightClasses = {
  gradient:
    "bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent",
  primary: "text-primary-500",
  accent: "text-accent-500",
};

export function SectionHeading({
  children,
  role: Component = "h2",
  highlight,
  className,
  size = "lg",
  weight = "bold",
  align = "center",
  ...props
}: SectionHeadingProps) {
  // Process children to apply highlighting to spans
  const processChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === "span") {
        const existingClassName = (child.props as { className?: string })
          .className;
        const spanClasses = highlight
          ? cn(existingClassName, highlightClasses[highlight], "font-serif")
          : cn(existingClassName, "font-serif");

        return React.cloneElement(
          child as React.ReactElement<{ className?: string }>,
          {
            className: spanClasses,
          }
        );
      }
      return child;
    });
  };

  return (
    <Component
      className={cn(
        "font-serif tracking-tight",
        sizeClasses[size],
        weightClasses[weight],
        alignClasses[align],
        "text-dark-900",
        className
      )}
      {...props}
    >
      {processChildren(children)}
    </Component>
  );
}
