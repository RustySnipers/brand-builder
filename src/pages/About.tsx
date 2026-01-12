import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Award, FileText, Shield, DollarSign, User, ArrowRight, Linkedin } from "lucide-react";
import Profile from "@/assets/Profile.png";

const whyBrand = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprise charges. You know what you'll pay before we start.",
  },
  {
    icon: FileText,
    title: "Documentation-First",
    description: "Every job is documented. You'll always know what was done and why.",
  },
  {
    icon: Shield,
    title: "Security Baseline by Default",
    description: "Security best practices are built into every service, not an upsell.",
  },
  {
    icon: User,
    title: "Direct Access",
    description: "Work directly with Jesse. No account managers, no help desk runaround.",
  },
];

const expertise = [
  "Enterprise systems analysis",
  "Cybersecurity operations",
  "Cloud infrastructure (Azure, AWS)",
  "Automation & scripting",
  "ITIL-style service management",
  "Technical documentation",
];

export default function About() {
  return (
    <AppShell>
      <Helmet>
        <title>About Jesse Brand | Local IT Expert in Central Michigan | J. Brand Technologies</title>
        <meta name="description" content="Meet Jesse Brand, owner of J. Brand Technologies. Enterprise IT experience with local, personal service for homes and businesses in Midland, Gladwin & Clare Counties." />
        <link rel="canonical" href="https://jbrandtech.com/about" />
      </Helmet>

      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Your Local IT Expert in Central Michigan
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Owner-operated IT services. Enterprise standards. Local accountability. Serving Midland, Gladwin & Clare Counties.
            </p>
          </div>
        </div>
      </section>

      {/* The Solo Promise */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                The Solo Promise
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                One Person. Full Accountability.
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                When you work with J. Brand Technologies, you work directly with Jesse Brand. There's no account manager, no support tiers, no finger-pointing between teams.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Every recommendation, every configuration, every line of documentation comes from the same person who answers your calls. That's the solo operator advantage: complete accountability and zero runaround.
              </p>
              <p className="text-muted-foreground">
                This doesn't mean working alone—it means you always have a single point of contact who knows your systems inside and out.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={Profile} 
                  alt="Jesse Brand - Owner of J. Brand Technologies" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card border rounded-lg p-4 shadow-soft">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-teal" />
                  <div>
                    <div className="font-semibold text-foreground">Jesse Brand</div>
                    <div className="text-sm text-muted-foreground">Owner & Operator</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Bio */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Background & Expertise</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Jesse Brand brings years of enterprise IT experience to small businesses and residential clients in Central Michigan. His background spans the full spectrum of modern IT operations:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {expertise.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card rounded-lg p-4 border">
                  <div className="w-2 h-2 rounded-full bg-teal" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mb-6">
              This enterprise background means you get the same rigorous standards, security practices, and documentation that large organizations demand—delivered with the personal attention and flexibility that only a local, owner-operated business can provide.
            </p>

            <a 
              href="https://www.linkedin.com/in/jesse-h-brand/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              View full professional profile on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Why J. Brand */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose J. Brand Technologies?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We do things differently. Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyBrand.map((item) => (
              <div key={item.title} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 hero-gradient">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Ready to experience IT support the way it should be? Get in touch today.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </AppShell>
  );
}
