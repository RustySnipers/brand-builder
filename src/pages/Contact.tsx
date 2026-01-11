import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, AlertCircle, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "PC Repair / Tune-Up",
  "Virus / Malware Removal",
  "Data Recovery",
  "Hardware Upgrade / Install",
  "Security Audit",
  "Network Setup",
  "Cloud Migration",
  "Managed IT Inquiry",
  "Other",
];

export default function Contact() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    customerType: "",
    service: "",
    deviceCount: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build mailto link with form data
    const subject = encodeURIComponent(`Service Request: ${formData.service || "General Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Location: ${formData.location}\n` +
      `Customer Type: ${formData.customerType}\n` +
      `Service Needed: ${formData.service}\n` +
      `Device Count: ${formData.deviceCount || "N/A"}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:jesse.h.brand@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your default email app will open with the form details.",
    });
  };

  const copyDetails = () => {
    const details = 
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Location: ${formData.location}\n` +
      `Customer Type: ${formData.customerType}\n` +
      `Service Needed: ${formData.service}\n` +
      `Device Count: ${formData.deviceCount || "N/A"}\n\n` +
      `Message:\n${formData.message}`;
    
    navigator.clipboard.writeText(details);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
    toast({
      title: "Copied to clipboard",
      description: "You can now paste this into an email.",
    });
  };

  return (
    <AppShell>
      <Helmet>
        <title>Contact | J. Brand Technologies</title>
        <meta name="description" content="Get in touch with J. Brand Technologies for IT support, PC repair, cybersecurity, and managed IT services in Midland, Gladwin, and Clare Counties." />
        <link rel="canonical" href="https://jbrandtech.com/contact" />
      </Helmet>

      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Ready to solve your IT challenges? Reach out by phone, email, or fill out the form below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="card-elevated p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone / Text</h3>
                    <a href="tel:989-430-3848" className="text-teal hover:text-teal-dark transition-colors font-medium">
                      989-430-3848
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:jesse.h.brand@gmail.com" className="text-teal hover:text-teal-dark transition-colors font-medium break-all">
                      jesse.h.brand@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
                    <p className="text-muted-foreground">
                      Midland, Gladwin & Clare Counties
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Based near Sanford, MI</p>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-foreground">Monday – Friday</p>
                    <p className="text-foreground font-medium">9:00 AM – 5:00 PM</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      After-hours available at emergency rate
                    </p>
                  </div>
                </div>
              </div>

              {/* Before You Submit */}
              <div className="bg-muted rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-foreground">Before You Submit</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Business hours: Mon–Fri, 9am–5pm</li>
                  <li>• After-hours calls billed at $250/hr</li>
                  <li>• Diagnostic bench fee: $49 (waived if repair approved)</li>
                  <li>• Hardware/parts require upfront payment</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Request Service</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(989) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">City / County *</Label>
                      <Input
                        id="location"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g., Midland, MI"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="customerType">I am a... *</Label>
                      <Select
                        value={formData.customerType}
                        onValueChange={(value) => setFormData({ ...formData, customerType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Customer</SelectItem>
                          <SelectItem value="business">Business Customer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deviceCount">Number of Devices (optional)</Label>
                    <Input
                      id="deviceCount"
                      value={formData.deviceCount}
                      onChange={(e) => setFormData({ ...formData, deviceCount: e.target.value })}
                      placeholder="e.g., 5 workstations, 1 server"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your issue or project *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the problem you're experiencing or the project you need help with..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" variant="cta" size="lg" className="flex-1">
                      Submit Request
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      onClick={copyDetails}
                      disabled={!formData.name || !formData.email}
                    >
                      {copied ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy Details
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Clicking "Submit Request" will open your email client with the form details pre-filled. 
                    Alternatively, copy the details and paste them into your preferred email app.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
