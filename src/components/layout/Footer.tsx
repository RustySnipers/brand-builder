import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook } from "lucide-react";
import Logo from "@/assets/Logo.png";

const navigation = {
  services: [
    { name: "PC Repair", href: "/services" },
    { name: "Cybersecurity", href: "/services" },
    { name: "Business IT", href: "/services" },
    { name: "Managed IT", href: "/managed-it" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="J. Brand Technologies" className="h-10 w-auto" />
              <span className="font-semibold text-lg">J. Brand Technologies</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Enterprise Standards. Local Service.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:989-430-3848" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                989-430-3848
              </a>
              <a href="mailto:jesse.h.brand@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                jesse.h.brand@gmail.com
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Serving Midland, Gladwin & Clare Counties</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-semibold mb-4">Business Hours</h3>
            <p className="text-sm text-primary-foreground/80 mb-2">Monday – Friday</p>
            <p className="text-sm text-primary-foreground mb-4">9:00 AM – 5:00 PM</p>
            <p className="text-xs text-primary-foreground/60 mb-6">After-hours available at emergency rate</p>
            
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jesse-h-brand/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/JBrandTechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} J. Brand Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
