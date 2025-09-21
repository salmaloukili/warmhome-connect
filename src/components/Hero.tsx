import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-heating.jpg";

const Hero = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional heating installation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('heroTitle')}
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent-hover text-accent-foreground px-8"
            >
              {t('getFreeQuote')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white/50 hover:bg-white/10 px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              {t('callNow')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">15+</div>
              <div className="text-xs md:text-sm uppercase tracking-wider">{t('yearsExperience')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">500+</div>
              <div className="text-xs md:text-sm uppercase tracking-wider">{t('happyCustomers')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-xs md:text-sm uppercase tracking-wider">{t('emergencyService')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;