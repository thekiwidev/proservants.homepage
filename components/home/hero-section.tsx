"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Container, Paragraph, SectionHeading } from "@/components/ui";
import { FaApple, FaGoogle } from "react-icons/fa6";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

interface HeroSectionProps {
  className?: string;
}

const parent = {
  hidden: {},
  visible: {
    transition: {
      // Stagger children so heading → paragraph → buttons
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const springSlow: Transition = {
  type: "spring",
  stiffness: 110,
  damping: 18,
  mass: 0.6,
  // duration is optional for spring; you can omit it if you like
  duration: 0.6,
};

// Left-aligned content: slide in from left + fade
const fromLeft: Variants = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: springSlow },
};

const fromLeftFast: Variants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 16, duration: 0.45 },
  },
};
export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden h_[calc(100vh-4rem)] h-[calc(100vh-4rem)]",
        className
      )}
    >
      {/* Full-screen background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Black overlay that fades to 0.5 AFTER content reveals */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        // Delay this so it's after the content finishes revealing.
        // Adjust 'delay' to taste if you tweak stagger above.
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
      />

      {/* Two-column content layout */}
      <Container
        size="xl"
        className="relative z-10 flex items-center justify-between h-full text-white px-4"
      >
        {/* Left content */}
        <motion.div
          className="max-w-xl"
          initial="hidden"
          animate="visible"
          variants={parent}
        >
          <motion.div variants={fromLeft}>
            <SectionHeading
              size="2xl"
              role="h1"
              highlight="#fff"
              className="text-4xl lg:text-6xl lg:text-left font-bold mb-4 bg-primary-500 px-6 py-4"
            >
              Your Roots, Your Way. <span>Authentic Culture</span>, Delivered.
            </SectionHeading>
          </motion.div>

          <motion.div variants={fromLeft}>
            <Paragraph
              size="xl"
              weight="medium"
              className="text-lg lg:text-xl mb-8 bg-accent-200 px-6 py-4"
            >
              MigranX connects immigrants with the cultural foods and products
              that feel like home, all while building a vibrant community.
            </Paragraph>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fromLeftFast}
          >
            <a
              href="#"
              className="flex items-center bg-white text-black px-10 py-4 rounded-xl hover:bg-gray-200 transition"
            >
              <FaApple className="h-10 w-10" />
              <div>
                <p className="text-sm font-medium m-0">Download on the</p>
                <p className="text-xl font-bold">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center bg-white text-black px-10 py-4 rounded-xl hover:bg-gray-200 transition"
            >
              <FaGoogle className="h-10 w-10" />
              <div>
                <span className="text-sm font-medium m-0">Get it on</span>
                <p className="text-xl font-bold">Google Play</p>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Right placeholder (unchanged) */}
        <div className="w-1/3 h-64 bg-transparent" />
      </Container>
    </section>
  );
}
