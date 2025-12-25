import HeroSection from "@/components/sections/hero-section";
import { CoreFeatures } from "@/components/sections/core-features";
import FaqAccordion from "@/components/sections/faq-accordion";
import BenefitsGrid from "@/components/sections/benefits-grid";
// import ToolsTab from "@/components/sections/tools-tab";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <CoreFeatures />
      {/* <ToolsTab /> */}
      <FaqAccordion />
      <BenefitsGrid />
      {/* <TestimonialsSection /> */}
      {/* <PricingSection /> */}
    </>
  );
}
