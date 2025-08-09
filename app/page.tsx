import {
  HeroSection,
  FeaturesSection,
  ExploreFeatureSection,
  DeliveryFeatureSection,
  ShippingFeatureSection,
  CartFeatureSection,
  HowItWorksSection,
  TrustSection,
  FinalCtaSection,
} from "@/components/home";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-500">
      <HeroSection />
      <FeaturesSection />
      <ExploreFeatureSection />
      <DeliveryFeatureSection />
      <ShippingFeatureSection />
      <CartFeatureSection />
      <HowItWorksSection />
      <TrustSection />
      <FinalCtaSection />
    </div>
  );
}
