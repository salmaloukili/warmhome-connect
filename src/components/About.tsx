import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import technicianImage from "@/assets/technician.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-accent">ThermoExpert</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience in the heating industry, we've built our reputation 
              on reliability, expertise, and exceptional customer service. Our team of certified 
              professionals is dedicated to keeping your home comfortable year-round.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Certified Excellence</h3>
                  <p className="text-sm text-muted-foreground">Fully licensed and insured professionals</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Local Experts</h3>
                  <p className="text-sm text-muted-foreground">Serving the community with pride</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">Same-day emergency service available</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Quality Guarantee</h3>
                  <p className="text-sm text-muted-foreground">100% satisfaction guaranteed</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Why Trust ThermoExpert?</h3>
              {[
                "15+ years of proven expertise in heating solutions",
                "500+ satisfied customers across the region",
                "24/7 emergency service for urgent repairs",
                "Transparent pricing with no hidden costs",
                "Comprehensive warranties on all installations"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img 
                src={technicianImage} 
                alt="Professional HVAC technician" 
                className="rounded-lg shadow-[var(--shadow-card)] w-full"
              />
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-[var(--shadow-card)] p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Years</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-accent rounded-lg shadow-[var(--shadow-card)] p-6 text-accent-foreground">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="text-sm uppercase tracking-wide opacity-90">Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;