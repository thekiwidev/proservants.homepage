"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Container, SectionHeading, Paragraph, ScrollAnimate } from "@/components/ui";
import {
  FaShieldAlt,
  FaLock,
  FaKey,
  FaBolt,
  FaApple,
  FaGoogle,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";

interface TrustSectionProps {
  className?: string;
}

export function TrustSection({ className }: TrustSectionProps) {
  const [isPaused] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef<number>(0);
  const speedRef = useRef<number>(1); // Slower speed for testimonials
  const isTransitioningRef = useRef<boolean>(false);

  const testimonials = [
    {
      quote:
        "MigranX is a lifeline. I can finally get my favorite Ghanaian fufu mix right here in Houston!",
      author: "Kwame A.",
      location: "Houston, TX",
      avatar: "K",
      country: "🇬🇭",
    },
    {
      quote:
        "The community feature is amazing. I've connected with so many people who share my love for authentic Lebanese cuisine.",
      author: "Fatima M.",
      location: "Detroit, MI",
      avatar: "F",
      country: "🇱🇧",
    },
    {
      quote:
        "As a seller, MigranX has helped me reach customers I never could before. The platform is so easy to use!",
      author: "Maria S.",
      location: "Los Angeles, CA",
      avatar: "M",
      country: "🇲🇽",
    },
    {
      quote:
        "Finally found authentic Nigerian plantain chips! The quality is exactly like back home.",
      author: "Adaora O.",
      location: "Atlanta, GA",
      avatar: "A",
      country: "🇳🇬",
    },
    {
      quote:
        "The delivery was so fast! Got fresh injera delivered to my door in under 2 hours.",
      author: "Samuel T.",
      location: "Washington, DC",
      avatar: "S",
      country: "🇪🇹",
    },
    {
      quote:
        "Love how I can support small businesses from my home country. Great way to stay connected!",
      author: "Priya K.",
      location: "San Francisco, CA",
      avatar: "P",
      country: "🇮🇳",
    },
  ];

  const stripeFeatures = [
    {
      title: "End-to-End Encryption",
      description:
        "All data is secured with end-to-end encryption, a core standard of Stripe's infrastructure",
      icon: <FaLock className="w-6 h-6" />,
    },
    {
      title: "PCI DSS Level 1 Certified",
      description:
        "Stripe is certified at the highest level of security in the payments industry",
      icon: <FaShieldAlt className="w-6 h-6" />,
    },
    {
      title: "Advanced Tokenization",
      description:
        "Your sensitive card details are tokenized—we never store them on our servers",
      icon: <FaKey className="w-6 h-6" />,
    },
    {
      title: "Stripe Radar Protection",
      description:
        "Backed by advanced machine learning fraud detection to protect against fraudulent transactions",
      icon: <FaBolt className="w-6 h-6" />,
    },
  ];

  // Create duplicated testimonials for seamless scrolling
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  // Handle the marquee animation with improved smoothness
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let lastTimestamp = 0;

    // Store all children elements for measurement
    const getItemWidth = () => {
      if (!container.firstChild) return 0;
      const firstItem = container.firstChild as HTMLElement;
      // Get computed gap (margin) value
      const style = window.getComputedStyle(container);
      const gap = parseInt(style.columnGap || "24", 10); // Default to 24px if undefined
      return firstItem.offsetWidth + gap;
    };

    // Get total content width
    const getContentWidth = () => {
      const itemWidth = getItemWidth();
      // Use enough items to cover the visible area plus extra buffer
      return itemWidth * testimonials.length;
    };

    // Initialize after first render
    const initialize = () => {
      // Create many copies to ensure no empty spaces
      const contentWidth = getContentWidth();
      const viewportWidth = window.innerWidth;

      // Ensure we have enough copies to fill viewport plus buffer
      const requiredCopies = Math.ceil((viewportWidth * 2) / contentWidth) + 1;

      // Already have duplication from the JSX
      // This is just checking if we need to add more programmatically
      if (
        requiredCopies > 2 &&
        container.children.length < requiredCopies * testimonials.length
      ) {
        // More duplication might be needed for very small images or large screens
        // But we already have duplicatedTestimonials in the JSX
      }
    };

    // Call initialize on mount
    initialize();

    const animate = (timestamp: number): void => {
      // Skip first frame for smoother initial render
      if (lastTimestamp === 0) {
        lastTimestamp = timestamp;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Calculate time delta for frame-rate independent animation
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused && !isTransitioningRef.current) {
        // Update position with time-based animation
        positionRef.current -= (speedRef.current * delta) / 16; // Normalized to 60fps

        const itemWidth = getItemWidth();

        // Only perform DOM manipulation when needed
        if (itemWidth > 0 && Math.abs(positionRef.current) >= itemWidth) {
          // Instead of immediately moving DOM elements, which causes jitter,
          // we'll use a clean approach that avoids DOM manipulation during visible transitions

          // Set transition flag
          isTransitioningRef.current = true;

          // Using setTimeout with 0 delay to move the operation out of the animation frame
          setTimeout(() => {
            // Reset position
            positionRef.current += itemWidth;

            // Move first child to end
            if (container.firstChild) {
              container.appendChild(container.firstChild);
            }

            // Apply new position immediately after DOM change
            container.style.transform = `translateX(${positionRef.current}px)`;

            // Clear transition flag - ready for next animation frame
            isTransitioningRef.current = false;
          }, 0);
        } else {
          // Regular position update
          container.style.transform = `translateX(${positionRef.current}px)`;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = () => {
      initialize();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [testimonials.length, isPaused]);

  // Handle hover - using refs to avoid re-renders
  const handleMouseEnter = () => {
    speedRef.current = 0.3; // Slower speed on hover
  };

  const handleMouseLeave = () => {
    speedRef.current = 1; // Normal speed
  };

  return (
    <section className={cn("py-20 lg:py-32 bg-white", className)}>
      <Container size="xl">
        {/* Security Section with Central Focus Design */}
        <div className="text-center mb-32">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              SECURE PAYMENTS
            </span>
          </div>

          <ScrollAnimate type="text" direction="left">
            <SectionHeading
              role="h2"
              size="2xl"
              highlight="accent"
              className="mb-6"
            >
              Your Security. Powered by <span>Stripe</span>.
            </SectionHeading>
          </ScrollAnimate>

          <ScrollAnimate type="text" direction="left">
            <Paragraph
              size="lg"
              align="center"
              muted
              className="max-w-3xl mx-auto mb-16"
            >
              We prioritize your peace of mind. That&apos;s why we&apos;ve
              partnered with Stripe, a global leader in payment processing, to
              handle all transactions. Your personal and payment information is
              protected by industry-leading security protocols.
            </Paragraph>
          </ScrollAnimate>

          {/* Central Stripe Logo with Radiating Security Features */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central Stripe Badge */}
            <div className="relative z-10 w-32 h-32 mx-auto mb-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-white font-bold text-lg">STRIPE</div>
              <div className="absolute inset-0 bg-indigo-600 rounded-full animate-pulse opacity-20"></div>
            </div>

            {/* Radiating Security Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {stripeFeatures.map((feature, index) => (
                <div key={index} className="relative">
                  {/* Connection line to center - hidden on mobile */}
                  <div className="hidden lg:block absolute top-8 left-1/2 w-px h-20 bg-gray-200 transform -translate-x-1/2 -translate-y-24"></div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accepted Payment Methods */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <p className="text-sm font-medium text-gray-500 mb-6">
              Accepted Payment Methods
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="h-12 bg-gray-100 rounded-lg px-6 flex items-center gap-2 text-sm font-semibold text-gray-700 shadow-sm">
                <FaCcVisa className="w-5 h-5 text-blue-600" />
                Visa
              </div>
              <div className="h-12 bg-gray-100 rounded-lg px-6 flex items-center gap-2 text-sm font-semibold text-gray-700 shadow-sm">
                <FaCcMastercard className="w-5 h-5 text-red-600" />
                Mastercard
              </div>
              <div className="h-12 bg-gray-100 rounded-lg px-6 flex items-center gap-2 text-sm font-semibold text-gray-700 shadow-sm">
                <FaApple className="w-5 h-5 text-gray-800" />
                Apple Pay
              </div>
              <div className="h-12 bg-gray-100 rounded-lg px-6 flex items-center gap-2 text-sm font-semibold text-gray-700 shadow-sm">
                <FaGoogle className="w-5 h-5 text-blue-500" />
                Google Pay
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Marquee Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              COMMUNITY LOVE
            </span>
          </div>

          <ScrollAnimate type="text" direction="left">
            <SectionHeading
              role="h2"
              size="2xl"
              highlight="accent"
              className="mb-6"
            >
              Stories from the <span>MigranX Community</span>
            </SectionHeading>
          </ScrollAnimate>

          <ScrollAnimate type="text" direction="left">
            <Paragraph
              size="lg"
              align="center"
              muted
              className="max-w-2xl mx-auto mb-16"
            >
              The heart of our marketplace is the people who use it. See what our
              users and sellers have to say.
            </Paragraph>
          </ScrollAnimate>

          {/* Scrolling Testimonials Marquee */}
          <div className="relative overflow-hidden py-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white to-transparent z-10"></div>

            {/* Scrolling container */}
            <div
              ref={containerRef}
              className="flex gap-6"
              style={{
                display: "inline-flex",
                willChange: "transform",
                transition: "none",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Multiple duplicated testimonials for seamless scrolling */}
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`testimonial-${index}`}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-3 text-left flex-1">
                      <div className="font-semibold text-gray-900 flex items-center gap-2">
                        {testimonial.author}
                        <span className="text-lg">{testimonial.country}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-left italic leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
