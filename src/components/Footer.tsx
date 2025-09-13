import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charity-text text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-charity-gold mb-4">
              AL-AMEEN RELIEF FOUNDATION
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dedicated to serving widows, orphans, and vulnerable communities
              with compassion, dignity, and sustainable relief programs.
              Together, we build hope and create lasting positive change.
            </p>
          
          </div>

          <div>
            <h4 className="text-lg font-semibold text-charity-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-charity-gold transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-charity-gold transition-colors"
                >
                  Our Programs
                </a>
              </li>
              <li>
                <a
                  href="#donation"
                  className="text-gray-300 hover:text-charity-gold transition-colors"
                >
                  Donate
                </a>
              </li>
              
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-charity-gold mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-charity-gold" />
                <span className="text-gray-300 text-sm">
                  No 18b, Gbena 2 area,
                  <br />
                  Monatan, off Iwo road, Ibadan,Oyo State.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-charity-gold" />
                <a href="tel:+2348131895226" className="text-gray-300 text-sm">
                  +234 (0813) 189 5226
                </a>

              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-charity-gold" />
               
                <a href="tel:+2347062592021" className="text-gray-300 text-sm">
                  +234 (0706) 2592 021
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-charity-gold" />
                <span className="text-gray-300 text-sm">
                  info@alameen-relief.org
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 AL-AMEEN Relief Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-charity-gold text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-charity-gold text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-charity-gold text-sm transition-colors"
              >
                Transparency
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;