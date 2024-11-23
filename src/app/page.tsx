import AboutSection from "@/components/AboutSection";
import CallToActionSection from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServiceSection";
import TestimonialsSection from "@/components/TestimonailSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
}
