import HeroSection from "./HeroSection";
import AdvantagesSection from "./AdvantagesSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import { useEffect } from "react";

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <ServicesSection />
      <AboutSection />
    </>
  );
};

export default HomePage;
