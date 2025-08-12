import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Container,
  Button,
  SectionHeading,
  Paragraph,
  ScrollAnimate,
} from "@/components/ui";

import { FaAppStore, FaGooglePlay } from "react-icons/fa6";

interface FinalCtaSectionProps {
  className?: string;
}

export function FinalCtaSection({ className }: FinalCtaSectionProps) {
  return (
    <section
      className={cn(
        "py-20 lg:py-32 bg-dark-900 border-b border-gray-800",
        className
      )}
    >
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left lg:pr-8">
            <ScrollAnimate type="text" direction="left">
              <SectionHeading
                role="h2"
                size="xl"
                className="mb-6 lg:text-left text-white"
                highlight="primary"
              >
                A Taste of Home is Waiting. Join the{" "}
                <span>MigranX Community</span>.
              </SectionHeading>
            </ScrollAnimate>

            <ScrollAnimate type="text" direction="left">
              <Paragraph size="lg" className="mb-12 text-gray-300">
                Your journey to rediscover your roots begins with a single tap.
                Download the app now and start connecting with authentic cultural
                foods from around the world.
              </Paragraph>
            </ScrollAnimate>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                radius="xl"
                className="bg-primary-600 text-white hover:bg-primary-700 w-full sm:w-auto gap-3 px-8"
              >
                <div className="flex flex-row items-center">
                  <FaAppStore className="w-6 h-6" />
                  <span className="text-xs ml-2">Download on the</span>
                </div>
                <p className="font-semibold text-left text-2xl">App Store</p>
              </Button>
              <Button
                radius="xl"
                className="bg-accent-600 text-white hover:bg-accent-700 w-full sm:w-auto flex items-center gap-3 px-8"
              >
                <div className="flex items-center">
                  <FaGooglePlay className="w-6 h-6" />
                  <span className="text-xs ml-2">Get it on</span>
                </div>
                <p className="font-semibold text-left text-2xl">Google Play</p>
              </Button>
            </div>
          </div>
          {/* Right Image */}
          <ScrollAnimate
            type="image"
            direction="none"
            className="h-[400px] sm:h-[500px] lg:h-[650px] xl:h-[750px] overflow-hidden lg:ml-auto"
          >
            <Image
              src="/images/hero.png"
              alt="MigranX App"
              width={900}
              height={750}
              className="object-cover w-full h-full"
              priority
            />
          </ScrollAnimate>
          {/* Stats or social proof */}
          <div className="col-span-1 lg:col-span-2 mt-16 pt-16 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2 text-white">
                  10,000+
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">
                  Happy Users
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 text-white">500+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">
                  Trusted Sellers
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 text-white">50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">
                  Cultural Regions
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
