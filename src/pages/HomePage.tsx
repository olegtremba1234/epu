import Hero from "../components/HeroSection";
import About from "../components/AboutSection";
import Services from "../components/ServicesSection";
import Benefits from "../components/BenefitsSection";
import ContactSection from "../components/ContactSection";
import Partners from "../components/PartnersSection";
import TilesSection from "../components/TilesSection";
import LogisticsSection from "../components/LogisticsSection";

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
      {/* Benefits Section */}
      <LogisticsSection />
      <Benefits />
      {/* Partners Section */}
      <Partners />
      {/* CTA Section */}
      <ContactSection />
    </div>
  );
}
