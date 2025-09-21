import { ThermometerSun, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <ThermometerSun className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold">ThermoExpert</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for all heating solutions. Over 15 years of 
              experience providing reliable, efficient heating services.
            </p>
            <div className="space-y-2">
              <p className="font-semibold">24/7 Emergency Service</p>
              <p className="text-primary-foreground/80">Licensed & Insured</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Heating Installation</li>
              <li>System Maintenance</li>
              <li>Emergency Repairs</li>
              <li>Energy Efficiency</li>
              <li>Safety Inspections</li>
              <li>Preventive Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">+1 (555) 123-4567</p>
                  <p className="text-sm text-primary-foreground/80">24/7 Emergency</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p>info@thermoexpert.com</p>
                  <p className="text-sm text-primary-foreground/80">Quick Response</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <p>Greater Metropolitan Area</p>
                  <p className="text-sm text-primary-foreground/80">Service Region</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm">Mon-Fri: 8AM-6PM</p>
                  <p className="text-sm">Sat: 9AM-4PM</p>
                  <p className="text-sm text-primary-foreground/80">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 ThermoExpert. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <button className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
                Terms of Service
              </button>
              <button className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;