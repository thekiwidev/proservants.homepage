import React from "react";
import { cn } from "@/lib/utils";
import { Container, SectionHeading } from "@/components/ui";

interface FeatureCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ number, icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="mb-6">
        <span className="text-gray-400 text-sm font-medium">{number}</span>
      </div>

      <div className="flex justify-center mb-8">
        <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white">
          {icon}
        </div>
      </div>

      <h3 className="text-xl font-bold text-black mb-4 text-center">{title}</h3>

      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  );
}

interface FeaturesSectionProps {
  className?: string;
}

export function FeaturesSection({ className }: FeaturesSectionProps) {
  const features = [
    {
      number: "01",
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Shop by Region",
      description:
        "Explore a world of authentic flavors and products from a curated list of regions. Our smart search and filtering make it easy to find exactly what you're craving.",
    },
    {
      number: "02",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Community Connection",
      description:
        "Our 'Explore' page is a vibrant space for short videos, cultural stories, and fun facts. Share your own recipes, connect with sellers, and become part of a global family.",
    },
    {
      number: "03",
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
      title: "Flexible Delivery",
      description:
        "From fresh, perishable goods delivered fast by our verified in-house drivers to non-perishable items shipped nationwide via trusted partners like USPS and UPS.",
    },
  ];

  return (
    <section className={cn("py-20 lg:py-32 bg-primary-50", className)}>
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div className="lg:sticky lg:top-30">
            <SectionHeading
              highlight="primary"
              className="text-4xl lg:text-left lg:text-6xl font-bold text-black leading-tight mb-6"
            >
              <span>Authentic</span> cultural connections
            </SectionHeading>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Connecting immigrants with their cultural heritage through
              authentic products, community engagement, and seamless delivery
              experiences.
            </p>

            {/* Testimonial */}
            <div className="mt-12 p-6 bg-black rounded-2xl text-white">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-6xl mt-6">&ldquo;</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                &ldquo;MigranX is a lifeline. I can finally get my favorite
                Ghanaian fufu mix and connect with my community right here in
                Houston!&rdquo;
              </p>
              <p className="text-xs text-gray-300">- Kwame A., Houston, TX</p>
            </div>
          </div>

          {/* Right content - Feature cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                number={feature.number}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
