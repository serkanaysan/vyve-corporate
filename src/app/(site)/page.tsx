import HeroSection from "@/components/sections/hero-section";
import { CoreFeatures } from "@/components/sections/core-features";
import FaqAccordion from "@/components/sections/faq-accordion";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <FaqAccordion />
      <CoreFeatures />
      {/* <ToolsTab /> */}
      {/* <BenefitsGrid /> */}
      {/* <TestimonialsSection /> */}
      {/* <PricingSection /> */}
    </>
  );
}
