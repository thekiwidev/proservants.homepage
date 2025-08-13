"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

interface ScrollAnimateProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ScrollAnimate({ children, className, ...props }: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const mappedProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useMotionValue(0);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    const unsubscribe = mappedProgress.on("change", (v) => {
      if (!hasCompleted) {
        opacity.set(v);
        if (v >= 1) {
          opacity.set(1);
          setHasCompleted(true);
        }
      }
    });
    return unsubscribe;
  }, [mappedProgress, hasCompleted, opacity]);

  return (
    <motion.div ref={ref} className={className} style={{ opacity }} {...props}>
      {children}
    </motion.div>
  );
}

