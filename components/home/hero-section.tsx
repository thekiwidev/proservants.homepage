"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Container, Paragraph, SectionHeading } from "@/components/ui";
import { FaApple, FaGoogle } from "react-icons/fa6";
import { motion } from "framer-motion";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn("relative overflow-hidden h-[calc(100vh-4rem)]", className)}
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
      {/* Dark overlay for readability */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
      />

      {/* Two-column content layout */}
      <Container
        size="xl"
        className="relative z-10 flex items-center justify-between h-full text-white px-4"
      >
        {/* Left content */}
        <motion.div
          className="max-w-xl"
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading
            size="2xl"
            role="h1"
            highlight="#fff"
            className="text-4xl lg:text-6xl lg:text-left font-bold mb-4 bg-primary-500 px-6 py-4"
          >
            Your Roots, Your Way. <span>Authentic Culture</span>, Delivered.
          </SectionHeading>
          <Paragraph
            size="xl"
            weight="medium"
            className="text-lg lg:text-xl mb-8 bg-accent-200 px-6 py-4"
          >
            MigranX connects immigrants with the cultural foods and products
            that feel like home, all while building a vibrant community.
          </Paragraph>
          <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </motion.div>

        {/* Right placeholder (empty for now) */}
        <div className="w-1/3 h-64 bg-transparent" />
      </Container>
    </section>
  );
}
