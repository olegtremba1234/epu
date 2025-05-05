import Hero from "../components/HeroSection";
import TilesSection from "../components/TilesSection";
import About from "../components/AboutSection";
import Services from "../components/ServicesSection";
import LogisticsSection from "../components/LogisticsSection";
import Benefits from "../components/BenefitsSection";
import PartnersSection from "../components/PartnersSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Tiles Section */}
      <TilesSection />
      {/* About Section */}
      <About />
      {/* Services Section */}
      <Services />
      {/* Logistics Section */}
      <LogisticsSection />
      {/* Benefits Section */}
      <Benefits />
      {/* Partners Section */}
      <PartnersSection />
      {/* CTA Section */}
      <ContactSection />
    </div>
  );
}
