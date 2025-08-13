import React from "react";
import { cn } from "@/lib/utils";
import { Container, SectionHeading, Paragraph, ScrollAnimate } from "@/components/ui";
import Image from "next/image";

interface HowItWorksSectionProps {
  className?: string;
}

export function HowItWorksSection({ className }: HowItWorksSectionProps) {
  const steps = [
    {
      number: "1",
      title: "Explore & Discover",
      subtitle: "Discover Culture Through Community Stories",
      description:
        "Dive into a rich feed of short-form videos and content. See what's trending, get inspired by new recipes, and find hidden cultural gems shared by a vibrant community.",
      image: "/images/explore_image.png",
      alt: "Explore page with community videos",
      features: [
        "Browse trending cultural content",
        "Watch short-form videos",
        "Discover new products in videos",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Find & Add to Cart",
      subtitle: "Find What You Love. Add to Cart",
      description:
        "Browse through a diverse marketplace of authentic food, fashion, and handcrafted goods. You can add items to your cart and build your perfect order, no commitment needed.",
      image: "/images/cart-screen.png",
      alt: "Smart cart management interface",
      features: [
        "Browse authentic cultural products",
        "Add items without signing up",
        "Smart cart organization by seller",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Quick Sign Up",
      subtitle: "Checkout is a Tap Away",
      description:
        "Once you've filled your cart with your favorite items, simply sign up to create your account. We've made the process quick and easy so you can complete your purchase.",
      image: "/images/hero.png", // Using hero as placeholder for sign-up
      alt: "Simple sign-up process",
      features: [
        "Sign up only when ready to buy",
        "Quick and easy registration",
        "Secure account creation",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      number: "4",
      title: "Complete Your Order",
      subtitle: "Your Order, Your Way",
      description:
        "Our smart cart simplifies multi-seller orders by grouping your items. Choose the delivery method that works for you: instant delivery for food or flexible shipping for goods.",
      image: "/images/delivery-options.png",
      alt: "Flexible delivery options",
      features: [
        "Multiple delivery options",
        "Real-time order tracking",
        "Grouped by seller for easy checkout",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className={cn("py-20 lg:py-32 bg-gray-50", className)}>
      <Container size="xl">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              HOW IT WORKS
            </span>
          </div>
          <ScrollAnimate type="text" direction="left">
            <SectionHeading
              role="h2"
              size="2xl"
              highlight="accent"
              className="mb-6"
            >
              Simple. Seamless. <span>Satisfying.</span>
            </SectionHeading>
          </ScrollAnimate>
          <ScrollAnimate type="text" direction="left">
            <Paragraph
              size="lg"
              align="center"
              muted
              className="max-w-3xl mx-auto"
            >
              Experience the easiest way to connect with your cultural heritage.
              From discovery to delivery, every step is designed with you in mind.
            </Paragraph>
          </ScrollAnimate>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className={cn(
                  "grid lg:grid-cols-2 gap-16 items-center",
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                )}
              >
                {/* Content Side */}
                <ScrollAnimate
                  type="text"
                  direction={index % 2 === 0 ? "left" : "right"}
                  className={cn(
                    "space-y-8",
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <div className="text-primary-500">{step.icon}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-primary-600 mb-4">
                      {step.subtitle}
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-green-600"
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
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Step-specific CTA */}
                  <div className="pt-4">
                    <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                      {index === 0 && "Explore Now"}
                      {index === 1 && "Start Shopping"}
                      {index === 2 && "Quick Sign Up"}
                      {index === 3 && "Track Orders"}
                    </button>
                  </div>
                </ScrollAnimate>

                {/* Image Side */}
                <ScrollAnimate
                  type="image"
                  direction="none"
                  className={cn(
                    "relative",
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  )}
                >
                  <div className="relative mx-auto w-full max-w-[500px]">
                    {/* Decorative elements */}
                    <div
                      className={cn(
                        "absolute w-8 h-8 z-10",
                        index % 2 === 0 ? "-top-4 -left-4" : "-top-4 -right-4"
                      )}
                    >
                      <div className="w-full h-full bg-primary-400 rounded-full animate-pulse"></div>
                    </div>

                    <div
                      className={cn(
                        "absolute w-6 h-6 z-10",
                        index % 2 === 0
                          ? "-bottom-6 -right-6"
                          : "-bottom-6 -left-6"
                      )}
                    >
                      <div className="w-full h-full bg-accent-400 rounded-full animate-bounce"></div>
                    </div>

                    {/* Phone mockup container */}
                    <div className="relative rounded-[2.5rem] p-2">
                      <div className="w-full aspect-[5/7] rounded-[2rem] overflow-hidden">
                        {step.image ? (
                          <Image
                            src={step.image}
                            alt={step.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                          />
                        ) : (
                          // Custom placeholder for missing screenshots
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <div className="text-center p-8">
                              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                {step.icon}
                              </div>
                              <p className="text-gray-500 font-medium">
                                {step.alt}
                              </p>
                              <p className="text-sm text-gray-400 mt-2">
                                Screenshot Coming Soon
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Glowing effect */}
                    <div className="absolute inset-x-0 bottom-0 h-32">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-400/20 to-transparent rounded-full blur-3xl"></div>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>

              {/* Connection line to next step */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-16 hidden lg:block">
                  <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA Section */}
        <div className="text-center mt-20 pt-16 border-t border-gray-200">
          <ScrollAnimate type="text" direction="left">
            <SectionHeading
              role="h3"
              size="lg"
              highlight="primary"
              className="mb-6"
            >
              Ready to Experience <span>Authentic Culture</span>?
            </SectionHeading>
          </ScrollAnimate>
          <ScrollAnimate type="text" direction="left">
            <Paragraph size="lg" muted className="mb-8 max-w-2xl mx-auto">
              Join thousands of people who have already discovered their cultural
              roots through MigranX.
            </Paragraph>
          </ScrollAnimate>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Download App
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
