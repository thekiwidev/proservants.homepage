import React from "react";
import { cn } from "@/lib/utils";
import { Container, SectionHeading } from "@/components/ui";
import Image from "next/image";

interface DeliveryFeatureSectionProps {
  className?: string;
}

export function DeliveryFeatureSection({
  className,
}: DeliveryFeatureSectionProps) {
  const features = [
    {
      text: "Fresh, hot meals in under 30 minutes",
    },
    {
      text: "Authentic recipes from local chefs",
    },
    {
      text: "Real-time order tracking",
    },
  ];

  return (
    <section className={cn("py-20 lg:py-32 bg-accent-50", className)}>
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                INSTANT DELIVERY
              </span>
            </div>

            <SectionHeading
              role="h2"
              size="2xl"
              highlight="accent"
              className="lg:text-left"
            >
              From Our Kitchens to Your Table. <span>Instantly</span>.
            </SectionHeading>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Craving the comfort of home-cooked Jollof Rice or a savory plate
              of Suya? Our network of local chefs and restaurants ensures your
              favorite cultural dishes are delivered fresh and hot, straight to
              your doorstep. No more waiting, just delicious, authentic meals on
              demand.
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
                <span>Order Now</span>
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
                View Menu
              </button>
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="relative order-2 lg:order-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8">
                <svg
                  viewBox="0 0 32 32"
                  className="w-full h-full text-primary-400"
                >
                  <circle cx="16" cy="16" r="12" fill="currentColor" />
                  <circle cx="16" cy="16" r="6" fill="white" />
                </svg>
              </div>

              <div className="absolute -bottom-8 -left-8 w-12 h-12">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                    <path
                      fill="currentColor"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
              </div>

              {/* Phone container with floating effect */}
              <div className="relative mx-auto w-full max-w-[90vw] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] flex justify-center">
                <div className="relative rounded-[2.5rem] p-1 sm:p-2 w-full">
                  {/* Phone frame */}
                  <div className="w-full aspect-[5/7] rounded-[2rem] overflow-hidden">
                    <Image
                      src="/images/order-details.png"
                      alt="MigranX Order Details"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                    />
                  </div>
                </div>

                {/* Glowing ring effect */}
                <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 md:h-32">
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-400/20 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-400/10 to-transparent rounded-full blur-2xl"></div>
                </div>
              </div>

              {/* Floating delivery animation elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center animate-pulse">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary-600">
                  <path
                    fill="currentColor"
                    d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"
                  />
                </svg>
              </div>

              <div className="absolute top-3/4 -right-12 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-600">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
