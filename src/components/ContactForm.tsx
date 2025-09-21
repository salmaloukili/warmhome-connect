import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual email service)
    try {
      // Here you would integrate with a service like EmailJS, Formspree, or Netlify Forms
      console.log("Form submission:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        className: "bg-success text-success-foreground",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to improve your home's heating? Contact us for a free consultation 
            and personalized quote tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-[var(--shadow-card)]">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">24/7 Emergency Service</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-primary">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-[var(--shadow-card)]">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">Quick Response Guaranteed</p>
                  </div>
                </div>
                <p className="text-lg text-primary">info@thermoexpert.com</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-[var(--shadow-card)]">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Service Area</h3>
                    <p className="text-muted-foreground">Local & Surrounding Areas</p>
                  </div>
                </div>
                <p className="text-primary">Greater Metropolitan Area</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-[var(--shadow-card)]">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8AM - 6PM</p>
                    <p className="text-muted-foreground">Saturday: 9AM - 4PM</p>
                    <p className="text-muted-foreground">Emergency: 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-2xl">Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Needed</Label>
                      <Select onValueChange={handleServiceChange}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="installation">Heating Installation</SelectItem>
                          <SelectItem value="maintenance">System Maintenance</SelectItem>
                          <SelectItem value="repair">Emergency Repair</SelectItem>
                          <SelectItem value="efficiency">Energy Efficiency Upgrade</SelectItem>
                          <SelectItem value="inspection">Safety Inspection</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Please describe your heating needs or any specific questions you have..."
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    variant="cta"
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours. For emergencies, please call us directly.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;