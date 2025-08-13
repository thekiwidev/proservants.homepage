"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  type HTMLMotionProps,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollAnimateProps
  extends Omit<HTMLMotionProps<"div">, "style" | "children" | "ref"> {
  direction?: "left" | "right" | "none";
  type?: "image" | "text";
  children: React.ReactNode;
}

export function ScrollAnimate({
  direction = "none",
  type = "text",
  className,
  children,
  ...props
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const progress = useTransform(scrollYProgress, (v) => v);
  const [hasCompleted, setHasCompleted] = useState(false);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    },
    visible: { opacity: 1, x: 0 },
  };

  const variants = type === "image" ? imageVariants : textVariants;

  const opacity = useTransform(
    progress,
    [0, 1],
    [variants.hidden.opacity as number, variants.visible.opacity as number]
  );
  const scale = useTransform(
    progress,
    [0, 1],
    [
      type === "image" ? (variants.hidden as { scale: number }).scale : 1,
      type === "image" ? (variants.visible as { scale: number }).scale : 1,
    ]
  );
  const x = useTransform(
    progress,
    [0, 1],
    [type === "text" ? (variants.hidden as { x: number }).x : 0, 0]
  );

  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => {
      if (!hasCompleted && v >= 1) {
        setHasCompleted(true);
      }
    });
    return () => unsubscribe();
  }, [progress, hasCompleted]);

  const style = hasCompleted ? variants.visible : { opacity, scale, x };

  return (
    <motion.div ref={ref} style={style} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}
