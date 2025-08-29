import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToDonation = () => {
    const donationSection = document.getElementById('donation');
    donationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charity-blue/90 to-charity-blue/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          AL-AMEEN
          <span className="block text-charity-gold">RELIEF FOUNDATION</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Empowering widows, supporting orphans, and uplifting vulnerable communities 
          with compassion, dignity, and sustainable relief programs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-charity-gold hover:bg-charity-gold/90 text-white font-semibold px-8 py-6 text-lg"
            onClick={scrollToDonation}
          >
            Donate Now
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-charity-blue font-semibold px-8 py-6 text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;