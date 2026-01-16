import { Link } from "react-router-dom";
import { Shield, Monitor, Server, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "PC Repair",
    description: "Diagnostics, tune-ups, virus removal, data recovery, and hardware upgrades for residential and business systems.",
    href: "/services#pc-repair",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Threat remediation, security audits, 2FA setup, and enterprise-grade protection for your home or business.",
    href: "/services#cybersecurity",
  },
  {
    icon: Server,
    title: "Managed IT",
    description: "24/7 monitoring, automated patching, backup management, and proactive maintenance for worry-free operations.",
    href: "/managed-it",
  },
];

export function ServiceCards() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How Can We Help?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From quick fixes to ongoing IT management, we provide comprehensive technology solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group card-elevated p-6 lg:p-8 hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
