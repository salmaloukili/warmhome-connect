import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
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
        title: t('sendMessage'),
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
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="h-5 w-5 text-accent" />
                <h3 className="font-semibold">{t('callNow')}</h3>
              </div>
              <p className="text-lg font-semibold text-primary">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">24/7 {t('emergencyService')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-5 w-5 text-accent" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-primary">info@thermoexpert.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-accent" />
                <h3 className="font-semibold">Service Area</h3>
              </div>
              <p className="text-primary">Greater Metropolitan Area</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg border border-border">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t('fullName')} *</Label>
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
                    <Label htmlFor="email">{t('emailAddress')} *</Label>
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
                    <Label htmlFor="phone">{t('phoneNumber')}</Label>
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
                    <Label htmlFor="service">{t('serviceType')}</Label>
                    <Select onValueChange={handleServiceChange}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder={t('selectService')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="installation">{t('installation')}</SelectItem>
                        <SelectItem value="maintenance">{t('maintenance')}</SelectItem>
                        <SelectItem value="repair">{t('repair')}</SelectItem>
                        <SelectItem value="inspection">{t('inspection')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">{t('message')} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder={t('messagePlaceholder')}
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "..." : t('sendMessage')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;