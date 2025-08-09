import React from "react";
import { cn } from "@/lib/utils";

type HeadingRole = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HighlightType = "gradient" | "primary" | "accent" | `#${string}`;

function isValidHexCode(value: string): boolean {
  // Accepts #RGB, #RRGGBB, #RGBA, #RRGGBBAA
  return /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(value);
}

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
        let spanClasses;
        if (highlight) {
          if (highlight.startsWith("#")) {
            if (!isValidHexCode(highlight)) {
              console.warn(`Invalid hex code for highlight: ${highlight}`);
            }
            spanClasses = cn(existingClassName, "font-serif");
          } else {
            spanClasses = cn(
              existingClassName,
              highlight in highlightClasses
                ? highlightClasses[highlight as keyof typeof highlightClasses]
                : "",
              "font-serif"
            );
          }
        } else {
          spanClasses = cn(existingClassName, "font-serif");
        }

        return React.cloneElement(
          child as React.ReactElement<{
            className?: string;
            style?: React.CSSProperties;
          }>,
          {
            className: spanClasses,
            style:
              highlight &&
              highlight.startsWith("#") &&
              isValidHexCode(highlight)
                ? { color: highlight }
                : undefined,
          }
        );
      }
      return child;
    });
  };

  // Check if we have spans that should be highlighted
  const hasHighlightableSpans = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === "span"
  );

  // Only apply hex color to main component if there are no spans to highlight
  const shouldApplyHexColorToMain =
    highlight &&
    highlight.startsWith("#") &&
    isValidHexCode(highlight) &&
    !hasHighlightableSpans;

  // Get highlight classes for non-hex highlights (only if no spans to highlight)
  const getHighlightClass = () => {
    if (!highlight) return "";
    if (highlight.startsWith("#")) return "";
    if (hasHighlightableSpans) return ""; // Don't apply to main if spans exist
    if (highlight in highlightClasses) {
      return highlightClasses[highlight as keyof typeof highlightClasses];
    }
    return "";
  };

  return (
    <Component
      className={cn(
        "font-serif tracking-tight",
        sizeClasses[size],
        weightClasses[weight],
        alignClasses[align],
        "text-dark-900",
        getHighlightClass(),
        className
      )}
      style={shouldApplyHexColorToMain ? { color: highlight } : undefined}
      {...props}
    >
      {processChildren(children)}
    </Component>
  );
}
