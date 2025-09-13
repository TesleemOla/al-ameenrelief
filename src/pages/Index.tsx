import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import Jumbotron from "@/components/AccordionModal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Jumbotron />
      <AboutSection />

      <DonationSection />
      <Footer />
    </div>
  );
};

export default Index;
