import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ThermometerSun } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={scrollToTop}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-accent to-accent-hover rounded-full flex items-center justify-center">
              <ThermometerSun className="h-6 w-6 text-accent-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">ThermoExpert</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={scrollToTop}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
            >
              <Phone className="h-4 w-4" />
              (555) 123-4567
            </a>
            <Button 
              variant="default" 
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={scrollToTop}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                Contact
              </button>
              <div className="pt-4 space-y-3">
                <a 
                  href="tel:+15551234567" 
                  className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
                >
                  <Phone className="h-4 w-4" />
                  (555) 123-4567
                </a>
                <Button 
                  variant="default" 
                  onClick={() => scrollToSection('contact')}
                  className="w-full"
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;