import React from "react";
import { cn } from "@/lib/utils";
import { Container, SectionHeading } from "@/components/ui";
import Image from "next/image";

interface ExploreFeatureSectionProps {
  className?: string;
}

export function ExploreFeatureSection({
  className,
}: ExploreFeatureSectionProps) {
  const features = [
    {
      text: "Cultural videos and stories",
    },
    {
      text: "Connect with your community",
    },
    {
      text: "Discover authentic recipes",
    },
  ];

  return (
    <section className={cn("py-20 lg:py-32 bg-primary-50/50", className)}>
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Phone mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8">
                <svg viewBox="0 0 32 32" className="w-full h-full text-black">
                  <path
                    fill="currentColor"
                    d="M16 2l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z"
                  />
                </svg>
              </div>

              <div className="absolute -bottom-8 -right-8 w-12 h-12">
                <div className="w-full h-full bg-primary-400 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-black">
                    <path
                      fill="currentColor"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
              </div>

              {/* Phone container with floating effect */}
              <div className="relative mx-auto w-full max-w-[90vw] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] flex justify-center">
                {/* Removed blur overlay */}
                <div className="relative rounded-[2.5rem] p-1 sm:p-2 w-full">
                  {/* Phone frame */}
                  <div className="w-full aspect-[5/7] rounded-[2rem] overflow-hidden">
                    <Image
                      src="/images/explore_image.png"
                      alt="MigranX Explore Feature"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
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
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                EXPLORE & CONNECT
              </span>
            </div>

            <SectionHeading
              role="h2"
              size="2xl"
              highlight="accent"
              className="lg:text-left"
            >
              Your Daily Dose of Delicious and <span>Discovery</span>.
            </SectionHeading>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Our &apos;Explore&apos; feed is where the magic happens. Watch
              short-form videos from creators showcasing their favorite dishes,
              new products, and cultural trends. Get inspired, discover hidden
              gems, and click to shop or order directly from the videos you
              love. It&apos;s the ultimate fusion of entertainment, community,
              and commerce.
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
                <span>Explore Community</span>
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
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
