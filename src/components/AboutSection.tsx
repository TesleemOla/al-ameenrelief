import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Home } from "lucide-react";

const AboutSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Supporting Widows",
      description: "Providing financial assistance, vocational training, and emotional support to help widows rebuild their lives with dignity and independence."
    },
    {
      icon: Users,
      title: "Caring for Orphans",
      description: "Ensuring orphaned children receive education, healthcare, nutritious meals, and the love they deserve for a brighter future."
    },
    {
      icon: Home,
      title: "Helping Vulnerable",
      description: "Reaching out to marginalized communities with emergency relief, shelter assistance, and long-term development programs."
    }
  ];

  return (
    <section className="py-20 bg-charity-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charity-blue mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-charity-text max-w-3xl mx-auto leading-relaxed">
            At AL-AMEEN Relief Foundation, we believe in the power of compassion and community. 
            Our mission is to provide sustainable support and create lasting change in the lives 
            of those who need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-charity-gold rounded-full mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charity-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-charity-text leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-charity-blue mb-4">
                Making a Difference Together
              </h3>
              <p className="text-charity-text leading-relaxed mb-6">
                Since our founding, we have touched thousands of lives through our comprehensive 
                programs. We work directly within communities to understand their unique needs 
                and develop solutions that create lasting impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-charity-gold">500+</div>
                  <div className="text-sm text-charity-text">Families Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-charity-gold">200+</div>
                  <div className="text-sm text-charity-text">Children Educated</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-charity-gold mb-2">Trust</div>
              <p className="text-charity-text">
                "AL-AMEEN" means "The Trustworthy" - a name that reflects our commitment 
                to transparency, accountability, and ethical service to our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;