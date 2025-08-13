import React from "react";
import { cn } from "@/lib/utils";
import { Container, SectionHeading, ScrollAnimate } from "@/components/ui";
import Image from "next/image";

interface CartFeatureSectionProps {
  className?: string;
}

export function CartFeatureSection({ className }: CartFeatureSectionProps) {
  const features = [
    {
      text: "Items grouped by seller for easy organization",
    },
    {
      text: "Flexible checkout - buy single or multiple items",
    },
    {
      text: "Effortless cart management and wishlist",
    },
  ];

  return (
    <section className={cn("py-20 lg:py-32 bg-gray-50", className)}>
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="order-1 lg:order-1">
            <ScrollAnimate type="text" direction="left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                  SMART CART SYSTEM
                </span>
              </div>

              <SectionHeading
                role="h2"
                size="2xl"
                highlight="accent"
                className="lg:text-left"
              >
                Your Cart, Your Way. <span>Complete Control</span>.
              </SectionHeading>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Shopping for multiple items from different sellers can be a
                hassle, but we&apos;ve made it simple. Our smart cart system gives
                you the power to manage your purchases exactly how you want, with
                items automatically grouped by seller for a cleaner, more
                organized experience.
              </p>

              {/* Feature list */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-black font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <span>Start Shopping</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                  See Features
                </button>
              </div>
            </ScrollAnimate>
          </div>

          {/* Right side - Phone mockup */}
          <ScrollAnimate
            type="image"
            direction="none"
            className="relative order-2 lg:order-2"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8">
                <svg
                  viewBox="0 0 32 32"
                  className="w-full h-full text-blue-500"
                >
                  <rect
                    x="4"
                    y="4"
                    width="24"
                    height="24"
                    rx="4"
                    fill="currentColor"
                  />
                  <rect
                    x="8"
                    y="8"
                    width="16"
                    height="16"
                    rx="2"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="absolute -bottom-8 -left-8 w-12 h-12">
                <div className="w-full h-full bg-primary-400 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-black">
                    <path
                      fill="currentColor"
                      d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h5c.55 0 1 .45 1 1s-.45 1-1 1h-1v11c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6H2c-.55 0-1-.45-1-1s.45-1 1-1h5zM9 3v1h6V3H9zM5 6v11h14V6H5z"
                    />
                  </svg>
                </div>
              </div>

              {/* Phone container with shadow */}
              <div className="relative mx-auto w-full max-w-[90vw] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] flex justify-center">
                <div className="relative rounded-[2.5rem] p-1 sm:p-2 w-full drop-shadow-2xl">
                  {/* Phone frame with enhanced shadow */}
                  <div className="w-full aspect-[5/7] rounded-[2rem] overflow-hidden">
                    <Image
                      src="/images/cart-screen.png"
                      alt="MigranX Smart Cart Management"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                    />
                  </div>
                </div>

                {/* Glowing ring effect */}
                <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 md:h-32">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-400/10 to-transparent rounded-full blur-2xl"></div>
                </div>
              </div>

              {/* Floating cart animation elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600">
                  <path
                    fill="currentColor"
                    d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                  />
                </svg>
              </div>

              <div className="absolute top-3/4 -right-12 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-600">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                  />
                </svg>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </Container>
    </section>
  );
}
