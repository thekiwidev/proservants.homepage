import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Container, Paragraph } from "@/components/ui";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden h-[calc(100dvh-4rem)]",
        className
      )}
    >
      {/* Decorative stars */}
      <div className="absolute top-30 right-20 w-8 h-8">
        <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
          <span className="text-primary-500 text-lg">✦</span>
        </div>
      </div>
      <div className="absolute top-32 right-96 text-2xl">
        <span className="text-accent-500">✦</span>
      </div>
      <div className="absolute bottom-40 left-20 text-2xl">
        <span className="text-primary-500">✦</span>
      </div>

      {/* Content */}
      <Container size="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <div className="absolute -left-4 top-4 w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-accent-500 text-lg">✦</span>
            </div>
            <h1 className="text-left text-3xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Your Roots, Your Way.{" "}
              <span className="text-primary-500">Authentic Culture</span>,
              Delivered.
            </h1>

            <Paragraph size="lg" className="mb-8 text-gray-700 max-w-lg">
              MigranX connects immigrants with the cultural foods and products
              that feel like home, all while building a vibrant community.
            </Paragraph>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">A</span>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">▶</span>
                </div>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative mx-auto w-full max-w-[95vw] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[700px] flex justify-center">
            <div className="relative rounded-[2.5rem] p-1 sm:p-2 w-full drop-shadow-2xl">
              <div className="w-full aspect-[5/7] rounded-[2rem] overflow-hidden">
                <Image
                  src="/images/hero.png"
                  alt="MigranX App Interface"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 50vw, 700px"
                />
              </div>
            </div>
            {/* Glowing ring effect */}
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 md:h-32">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-400/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-400/10 to-transparent rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
