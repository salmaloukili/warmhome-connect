import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Shield, Clock, ThermometerSun, Settings, Zap } from "lucide-react";
import serviceImage from "@/assets/service-heating.jpg";

const services = [
  {
    icon: ThermometerSun,
    title: "Heating Installation",
    description: "Complete installation of new heating systems, boilers, and radiators with professional expertise and quality guarantees."
  },
  {
    icon: Settings,
    title: "System Maintenance",
    description: "Regular maintenance and servicing to keep your heating system running efficiently and extend its lifespan."
  },
  {
    icon: Wrench,
    title: "Emergency Repairs",
    description: "24/7 emergency repair services for heating breakdowns, ensuring your home stays warm when you need it most."
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Upgrade your system for better energy efficiency, reducing costs and environmental impact."
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Comprehensive safety checks and certifications to ensure your heating system meets all safety standards."
  },
  {
    icon: Clock,
    title: "Preventive Care",
    description: "Scheduled maintenance programs to prevent costly breakdowns and ensure optimal performance year-round."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From installation to maintenance, we provide comprehensive heating solutions 
            tailored to your specific needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img 
              src={serviceImage} 
              alt="Modern heating system" 
              className="rounded-lg shadow-[var(--shadow-card)] w-full"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-3xl font-bold mb-6">Why Choose Our Services?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-2">Certified Professionals</h4>
                  <p className="text-muted-foreground">Licensed and insured technicians with extensive training and experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-2">Quality Guarantee</h4>
                  <p className="text-muted-foreground">All work comes with comprehensive warranties and satisfaction guarantees.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-2">Transparent Pricing</h4>
                  <p className="text-muted-foreground">No hidden fees - clear, upfront pricing for all services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-hover rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;