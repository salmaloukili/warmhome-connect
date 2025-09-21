import { Wrench, Clock, ThermometerSun, Settings, Zap, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: ThermometerSun,
      title: t('heatingInstallation'),
      description: t('heatingInstallationDesc')
    },
    {
      icon: Settings,
      title: t('systemMaintenance'),
      description: t('systemMaintenanceDesc')
    },
    {
      icon: Wrench,
      title: t('emergencyRepairs'),
      description: t('emergencyRepairsDesc')
    },
    {
      icon: Zap,
      title: t('energyEfficiency'),
      description: t('energyEfficiencyDesc')
    },
    {
      icon: Shield,
      title: t('safetyInspections'),
      description: t('safetyInspectionsDesc')
    },
    {
      icon: Clock,
      title: t('preventiveCare'),
      description: t('preventiveCareDesc')
    }
  ];
  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;