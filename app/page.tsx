import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ExploreFeatureSection } from "@/components/explore-feature-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { TrustSection } from "@/components/trust-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";
import {
  CartFeatureSection,
  DeliveryFeatureSection,
  ShippingFeatureSection,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-500">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <ExploreFeatureSection />
        <DeliveryFeatureSection />
        <ShippingFeatureSection />
        <CartFeatureSection />
        <HowItWorksSection />
        <TrustSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
