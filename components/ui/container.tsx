import React from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  centerContent?: boolean;
  children: React.ReactNode;
}

const sizeClasses = {
  sm: "max-w-full md:max-w-2xl",
  md: "max-w-full md:max-w-4xl",
  lg: "max-w-full md:max-w-6xl",
  xl: "max-w-full md:max-w-7xl",
  full: "max-w-full",
};

export function Container({
  size = "lg",
  centerContent = false,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        centerContent && "flex flex-col items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
