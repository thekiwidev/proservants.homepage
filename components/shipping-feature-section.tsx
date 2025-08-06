import React from "react";
import { cn } from "@/lib/utils";
import { Container, SectionHeading } from "@/components/ui";
import Image from "next/image";

interface ShippingFeatureSectionProps {
  className?: string;
}

export function ShippingFeatureSection({
  className,
}: ShippingFeatureSectionProps) {
  const features = [
    {
      text: "Choose between in-house or third-party delivery",
    },
    {
      text: "Real-time tracking with detailed updates",
    },
    {
      text: "Flexible rates based on your timeline",
    },
  ];

  return (
    <section className={cn("py-20 lg:py-32 bg-white", className)}>
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Phone mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8">
                <svg
                  viewBox="0 0 32 32"
                  className="w-full h-full text-purple-500"
                >
                  <path
                    fill="currentColor"
                    d="M16 2L20 10L28 10L22 16L24 24L16 20L8 24L10 16L4 10L12 10Z"
                  />
                </svg>
              </div>

              <div className="absolute -bottom-8 -right-8 w-12 h-12">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                    <path
                      fill="currentColor"
                      d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
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
                      src="/images/delivery-options.png"
                      alt="MigranX Flexible Shipping Options"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                    />
                  </div>
                </div>

                {/* Glowing ring effect */}
                <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 md:h-32">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-400/10 to-transparent rounded-full blur-2xl"></div>
                </div>
              </div>

              {/* Floating shipping animation elements */}
              <div className="absolute top-1/4 -right-8 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center animate-pulse">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-600">
                  <path
                    fill="currentColor"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              </div>

              <div className="absolute top-3/4 -left-12 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center animate-bounce">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
                  <path
                    fill="currentColor"
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                FLEXIBLE SHIPPING
              </span>
            </div>

            <SectionHeading
              role="h2"
              size="2xl"
              highlight="accent"
              className="lg:text-left"
            >
              Shipping, Simplified. <span>Your Way</span>.
            </SectionHeading>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Buying that perfect handcrafted item or beautiful piece of fabric
              shouldn&apos;t be complicated. Our app puts you in control of the
              shipping process. Choose from our reliable in-house delivery
              service or select a trusted third-party logistics partner with the
              flexibility to match your budget and timeline.
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
                <span>Compare Shipping</span>
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
                Track Order
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
