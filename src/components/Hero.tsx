import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-heating.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional heating installation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Expert Heating
            <span className="block bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Professional installation, maintenance, and repair services for all your heating needs. 
            Trusted by homeowners for reliable, efficient solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-8 py-4"
            >
              Get Free Quote
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm uppercase tracking-wider">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wider">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;