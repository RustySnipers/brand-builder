import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Monitor, 
  RefreshCw, 
  Bug, 
  HardDrive, 
  Laptop, 
  Cpu, 
  Box,
  ArrowLeftRight,
  Shield,
  Lock,
  Cloud,
  Code,
  Network,
  Server,
  AlertTriangle,
  ArrowRight
} from "lucide-react";

const pcRepairServices = [
  { icon: Monitor, name: "Diagnostic / Bench Fee", price: "$49", description: "Full hardware scan & error log review. Waived if repair service is approved." },
  { icon: RefreshCw, name: "PC Tune-Up & Optimization", price: "$99", description: "Bloatware removal, OS updates, startup optimization, temporary file cleanup." },
  { icon: Bug, name: "Virus & Threat Remediation", price: "$129", description: "Deep scan remediation, browser reset, installation of basic protection." },
  { icon: HardDrive, name: 'OS "Fresh Start" Re-install', price: "$129", description: "Windows/Linux install, driver updates, basic software setup. Data backup is extra." },
  { icon: HardDrive, name: "Data Recovery (Tier 1)", price: "$149", description: "Software-based recovery for deleted files/formatted drives. Mechanical failures referred to lab." },
  { icon: Laptop, name: "Laptop Screen Replacement", price: "$89", description: "Labor only. Client pays for screen part cost upfront." },
  { icon: Cpu, name: "Hardware Component Install", price: "$59", description: "Install RAM, GPU, or SSD. Includes driver verification." },
  { icon: Box, name: "Custom PC Build / Rebuild", price: "$149", description: "Assembly, cable management, BIOS config, stress testing." },
  { icon: ArrowLeftRight, name: "Data Migration", price: "$99", description: "Moving data from old PC to new PC (up to 1TB)." },
];

const securityServices = [
  { icon: Shield, name: 'Security Audit ("The Fortress Check")', price: "$499", description: "Vulnerability scan, password policy review, 2FA setup, comprehensive risk report." },
  { icon: Lock, name: "Threat Remediation", price: "Included w/ PC services", description: "Enterprise-grade malware removal and system hardening." },
  { icon: Shield, name: "2FA / MFA Setup", price: "Included w/ audit", description: "Multi-factor authentication implementation across your accounts." },
];

const businessServices = [
  { icon: Network, name: "Network Setup", price: "$750+", description: "Firewall config (Ubiquiti/Meraki), guest WiFi isolation, secure DNS, printer mapping." },
  { icon: Cloud, name: "Cloud Migration", price: "$999+", description: "Moving local files to SharePoint/OneDrive/Azure. Includes backup setup." },
  { icon: Code, name: "Automation Script", price: "$500+", description: "Custom Python/PowerShell scripts to automate workflows (e.g., auto-filing invoices)." },
  { icon: Server, name: "Remote Support Block", price: "$45/15-min", description: "Quick remote-in fixes via TeamViewer/AnyDesk." },
];

const scopeLimits = [
  "Custom app development (scripts/automation only; not full software applications)",
  "Web hosting (we can set up GoDaddy/Squarespace; we do not host on our servers)",
  "Printer hardware repair (software/drivers only; if physically broken, recommend replacement)",
];

export default function Services() {
  return (
    <Layout>
      <Helmet>
        <title>IT Services | J. Brand Technologies | Midland, Gladwin & Clare Counties</title>
        <meta name="description" content="PC repair, cybersecurity, and business IT services in Midland, Gladwin, & Clare Counties. Serving the Sanford, MI area with fixed-price residential services and project-based business solutions." />
        <link rel="canonical" href="https://jbrandtech.com/services" />
      </Helmet>

      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive technology solutions from quick repairs to ongoing IT management. Transparent pricing, enterprise standards.
            </p>
          </div>
        </div>
      </section>

      {/* PC Repair */}
      <section id="pc-repair" className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Monitor className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">PC Repair & Optimization</h2>
              <p className="text-muted-foreground">Fixed-price services for residential and business systems</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pcRepairServices.map((service) => (
              <div key={service.name} className="card-elevated p-6">
                <div className="flex items-start justify-between mb-3">
                  <service.icon className="h-5 w-5 text-primary mt-1" />
                  <span className="font-bold text-teal">{service.price}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity */}
      <section id="cybersecurity" className="py-16 lg:py-24 bg-muted">
        <div className="section-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Cybersecurity & Protection</h2>
              <p className="text-muted-foreground">Enterprise-grade security for homes and small businesses</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {securityServices.map((service) => (
              <div key={service.name} className="card-elevated p-6">
                <div className="flex items-start justify-between mb-3">
                  <service.icon className="h-5 w-5 text-primary mt-1" />
                  <span className="font-bold text-teal text-sm">{service.price}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business IT */}
      <section id="business-it" className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Network className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Business IT & Networking</h2>
              <p className="text-muted-foreground">Project-based solutions for growing businesses</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {businessServices.map((service) => (
              <div key={service.name} className="card-elevated p-6">
                <div className="flex items-start justify-between mb-3">
                  <service.icon className="h-5 w-5 text-primary mt-1" />
                  <span className="font-bold text-teal">{service.price}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold text-foreground">What We Don't Do</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              To maintain quality and focus, we do not offer the following services:
            </p>
            <ul className="space-y-2">
              {scopeLimits.map((limit) => (
                <li key={limit} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-muted-foreground/50">•</span>
                  {limit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 hero-gradient">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Need Help Deciding?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Not sure which service is right for you? Contact us for a free consultation and we'll help you find the best solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Request Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/pricing">View All Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
