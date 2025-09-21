import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import technicianImage from "@/assets/technician.jpg";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('aboutTitle')}
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t('aboutSubtitle')}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 border border-border rounded-lg">
                <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{t('certifiedExcellence')}</h3>
                <p className="text-sm text-muted-foreground">{t('certifiedDesc')}</p>
              </div>
              
              <div className="text-center p-4 border border-border rounded-lg">
                <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{t('localExpert')}</h3>
                <p className="text-sm text-muted-foreground">{t('localExpertDesc')}</p>
              </div>
              
              <div className="text-center p-4 border border-border rounded-lg">
                <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{t('quickResponse')}</h3>
                <p className="text-sm text-muted-foreground">{t('quickResponseDesc')}</p>
              </div>
              
              <div className="text-center p-4 border border-border rounded-lg">
                <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{t('qualityGuarantee')}</h3>
                <p className="text-sm text-muted-foreground">{t('qualityDesc')}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={technicianImage} 
              alt="Professional HVAC technician" 
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;