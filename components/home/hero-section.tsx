"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Container, Paragraph, SectionHeading } from "@/components/ui";
import { FaAppStore, FaGooglePlay } from "react-icons/fa6";

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
      <div className="absolute inset-0 bg-black/50" />

      {/* Two-column content layout */}
      <Container
        size="xl"
        className="relative z-10 flex items-center justify-between h-full text-white px-4"
      >
        {/* Left content */}
        <div className="max-w-xl">
          <SectionHeading
            size="2xl"
            role="h1"
            highlight="#fff"
            className="text-4xl lg:text-6xl lg:text-left font-bold mb-4 bg-primary-600 px-6 py-4"
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
              className="bg-white text-black px-10 py-4 rounded-xl hover:bg-gray-200 transition"
            >
              <div className="flex items-center gap-2">
                <FaAppStore className="h-5 w-5" />
                <span>Download on the</span>
              </div>
              <p className="text-xl font-bold">App Store</p>
            </a>
            <a
              href="#"
              className="bg-white text-black px-10 py-4 rounded-xl hover:bg-gray-200 transition"
            >
              <div className="flex items-center gap-2">
                <FaGooglePlay className="h-5 w-5" />
                <span>Get it on</span>
              </div>
              <p className="text-xl font-bold">Google Play</p>
            </a>
          </div>
        </div>

        {/* Right placeholder (empty for now) */}
        <div className="w-1/3 h-64 bg-transparent" />
      </Container>
    </section>
  );
}
