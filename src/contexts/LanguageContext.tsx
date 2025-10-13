import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    getQuote: 'Get Quote',
    
    // Hero
    heroTitle: 'Expert Heating Solutions',
    heroSubtitle: 'Professional installation, maintenance, and repair services for all your heating needs.',
    getFreeQuote: 'Get Free Quote',
    callNow: 'Call Now',
    yearsExperience: 'Years Experience',
    happyCustomers: 'Happy Customers',
    emergencyService: 'Emergency Service',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Professional heating solutions tailored to your needs.',
    heatingInstallation: 'Heating Installation',
    heatingInstallationDesc: 'Complete installation of new heating systems and boilers.',
    systemMaintenance: 'System Maintenance',
    systemMaintenanceDesc: 'Regular maintenance to keep your system running efficiently.',
    emergencyRepairs: 'Emergency Repairs',
    emergencyRepairsDesc: '24/7 emergency repair services for heating breakdowns.',
    energyEfficiency: 'Energy Efficiency',
    energyEfficiencyDesc: 'Upgrade your system for better energy efficiency.',
    safetyInspections: 'Safety Inspections',
    safetyInspectionsDesc: 'Comprehensive safety checks and certifications.',
    preventiveCare: 'Preventive Care',
    preventiveCareDesc: 'Scheduled maintenance programs to prevent breakdowns.',
    
    // About
    aboutTitle: 'About AGLS',
    aboutSubtitle: 'With over 15 years of experience, we provide reliable heating solutions.',
    whyTrust: 'Why Trust AGLS?',
    certifiedExcellence: 'Certified Excellence',
    certifiedDesc: 'Fully licensed and insured professionals',
    localExpert: 'Local Expert',
    localExpertDesc: 'Serving the community with pride',
    quickResponse: 'Quick Response',
    quickResponseDesc: 'Same-day emergency service available',
    qualityGuarantee: 'Quality Guarantee',
    qualityDesc: '100% satisfaction guaranteed',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to upgrade your heating system? Contact us for a free consultation.',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    serviceType: 'Service Type',
    selectService: 'Select a service',
    installation: 'Installation',
    maintenance: 'Maintenance',
    repair: 'Repair',
    inspection: 'Inspection',
    message: 'Message',
    messagePlaceholder: 'Tell us about your heating needs...',
    sendMessage: 'Send Message',
    
    // Footer
    footerTagline: 'Professional heating solutions you can trust.',
    quickLinks: 'Quick Links',
    ourServices: 'Our Services',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
  },
  fr: {
    // Header
    home: 'Accueil',
    services: 'Services',
    about: 'À propos',
    contact: 'Contact',
    getQuote: 'Devis',
    
    // Hero
    heroTitle: 'Solutions de Chauffage Expertes',
    heroSubtitle: 'Installation, maintenance et réparation professionnelles pour tous vos besoins de chauffage.',
    getFreeQuote: 'Devis Gratuit',
    callNow: 'Appeler',
    yearsExperience: 'Années d\'Expérience',
    happyCustomers: 'Clients Satisfaits',
    emergencyService: 'Service d\'Urgence',
    
    // Services
    servicesTitle: 'Nos Services',
    servicesSubtitle: 'Solutions de chauffage professionnelles adaptées à vos besoins.',
    heatingInstallation: 'Installation de Chauffage',
    heatingInstallationDesc: 'Installation complète de nouveaux systèmes de chauffage et chaudières.',
    systemMaintenance: 'Maintenance du Système',
    systemMaintenanceDesc: 'Maintenance régulière pour maintenir votre système efficace.',
    emergencyRepairs: 'Réparations d\'Urgence',
    emergencyRepairsDesc: 'Service de réparation d\'urgence 24/7 pour pannes de chauffage.',
    energyEfficiency: 'Efficacité Énergétique',
    energyEfficiencyDesc: 'Améliorez votre système pour une meilleure efficacité énergétique.',
    safetyInspections: 'Inspections de Sécurité',
    safetyInspectionsDesc: 'Contrôles de sécurité complets et certifications.',
    preventiveCare: 'Soins Préventifs',
    preventiveCareDesc: 'Programmes de maintenance programmée pour prévenir les pannes.',
    
    // About
    aboutTitle: 'À propos de AGLS',
    aboutSubtitle: 'Avec plus de 15 ans d\'expérience, nous fournissons des solutions de chauffage fiables.',
    whyTrust: 'Pourquoi faire confiance à AGLS ?',
    certifiedExcellence: 'Excellence Certifiée',
    certifiedDesc: 'Professionnels entièrement agréés et assurés',
    localExpert: 'Expert Local',
    localExpertDesc: 'Au service de la communauté avec fierté',
    quickResponse: 'Réponse Rapide',
    quickResponseDesc: 'Service d\'urgence le jour même disponible',
    qualityGuarantee: 'Garantie de Qualité',
    qualityDesc: '100% de satisfaction garantie',
    
    // Contact
    contactTitle: 'Contactez-nous',
    contactSubtitle: 'Prêt à améliorer votre système de chauffage ? Contactez-nous pour une consultation gratuite.',
    fullName: 'Nom Complet',
    emailAddress: 'Adresse E-mail',
    phoneNumber: 'Numéro de Téléphone',
    serviceType: 'Type de Service',
    selectService: 'Sélectionnez un service',
    installation: 'Installation',
    maintenance: 'Maintenance',
    repair: 'Réparation',
    inspection: 'Inspection',
    message: 'Message',
    messagePlaceholder: 'Parlez-nous de vos besoins en chauffage...',
    sendMessage: 'Envoyer le Message',
    
    // Footer
    footerTagline: 'Solutions de chauffage professionnelles en qui vous pouvez avoir confiance.',
    quickLinks: 'Liens Rapides',
    ourServices: 'Nos Services',
    followUs: 'Suivez-nous',
    allRightsReserved: 'Tous droits réservés.',
  },
  nl: {
    // Header
    home: 'Home',
    services: 'Diensten',
    about: 'Over Ons',
    contact: 'Contact',
    getQuote: 'Offerte',
    
    // Hero
    heroTitle: 'Expert Verwarmingsoplossingen',
    heroSubtitle: 'Professionele installatie, onderhoud en reparatieservices voor al uw verwarmingsbehoeften.',
    getFreeQuote: 'Gratis Offerte',
    callNow: 'Bel Nu',
    yearsExperience: 'Jaar Ervaring',
    happyCustomers: 'Tevreden Klanten',
    emergencyService: 'Nooddienst',
    
    // Services
    servicesTitle: 'Onze Diensten',
    servicesSubtitle: 'Professionele verwarmingsoplossingen op maat voor uw behoeften.',
    heatingInstallation: 'Verwarmingsinstallatie',
    heatingInstallationDesc: 'Volledige installatie van nieuwe verwarmingssystemen en ketels.',
    systemMaintenance: 'Systeemonderhoud',
    systemMaintenanceDesc: 'Regelmatig onderhoud om uw systeem efficiënt te houden.',
    emergencyRepairs: 'Noodreparaties',
    emergencyRepairsDesc: '24/7 noodreparatieservice voor verwarmingsstoringen.',
    energyEfficiency: 'Energie-efficiëntie',
    energyEfficiencyDesc: 'Upgrade uw systeem voor betere energie-efficiëntie.',
    safetyInspections: 'Veiligheidsinspecties',
    safetyInspectionsDesc: 'Uitgebreide veiligheidscontroles en certificeringen.',
    preventiveCare: 'Preventieve Zorg',
    preventiveCareDesc: 'Geplande onderhoudsprogramma\'s om storingen te voorkomen.',
    
    // About
    aboutTitle: 'Over AGLS',
    aboutSubtitle: 'Met meer dan 15 jaar ervaring leveren wij betrouwbare verwarmingsoplossingen.',
    whyTrust: 'Waarom AGLS vertrouwen?',
    certifiedExcellence: 'Gecertificeerde Excellentie',
    certifiedDesc: 'Volledig gelicentieerde en verzekerde professionals',
    localExpert: 'Lokale Expert',
    localExpertDesc: 'Trots ten dienste van de gemeenschap',
    quickResponse: 'Snelle Reactie',
    quickResponseDesc: 'Nooddienst op dezelfde dag beschikbaar',
    qualityGuarantee: 'Kwaliteitsgarantie',
    qualityDesc: '100% tevredenheidsgarantie',
    
    // Contact
    contactTitle: 'Contact Opnemen',
    contactSubtitle: 'Klaar om uw verwarmingssysteem te upgraden? Neem contact met ons op voor een gratis consultatie.',
    fullName: 'Volledige Naam',
    emailAddress: 'E-mailadres',
    phoneNumber: 'Telefoonnummer',
    serviceType: 'Service Type',
    selectService: 'Selecteer een service',
    installation: 'Installatie',
    maintenance: 'Onderhoud',
    repair: 'Reparatie',
    inspection: 'Inspectie',
    message: 'Bericht',
    messagePlaceholder: 'Vertel ons over uw verwarmingsbehoeften...',
    sendMessage: 'Bericht Versturen',
    
    // Footer
    footerTagline: 'Professionele verwarmingsoplossingen die u kunt vertrouwen.',
    quickLinks: 'Snelle Links',
    ourServices: 'Onze Diensten',
    followUs: 'Volg Ons',
    allRightsReserved: 'Alle rechten voorbehouden.',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};