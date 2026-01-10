import { AppShell } from "@/components/layout/AppShell";
import { SEO } from "@/components/SEO";
import { HeroNew } from "@/components/home/HeroNew";
import { LogoStrip } from "@/components/home/LogoStrip";
import { PanelShowcase } from "@/components/home/PanelShowcase";
import { BentoGrid } from "@/components/home/BentoGrid";
import { TestimonialsSection } from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const Index = () => {
  return (
    <AppShell>
      <SEO
        title="J. Brand Technologies | Managed IT, Cybersecurity & PC Repair"
        description="Enterprise-grade IT services for homes and small businesses in Midland, Gladwin, and Clare Counties. Managed IT, cybersecurity, and PC repair with transparent pricing."
        canonical="/"
      />
      
      <HeroNew />
      <LogoStrip />
      <PanelShowcase />
      <BentoGrid />
      <TestimonialsSection />

      {/* CTA Band */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/20 via-surface to-tertiary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-on-surface mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-on-surface-variant mb-4 max-w-2xl mx-auto">
            Contact us today for a consultation. Transparent pricing, documented processes, security by default.
          </p>
          <p className="text-sm text-on-surface-variant mb-8">
            Managed plans include proactive maintenance. Support is billed separately at a discounted $85/hr.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-on-primary rounded-xl h-12 px-6">
              <Link to="/contact">
                Request Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-outline/30 text-on-surface hover:bg-surface-variant/50 rounded-xl h-12 px-6">
              <a href="tel:989-430-3848">
                <Phone className="mr-2 h-5 w-5" />
                989-430-3848
              </a>
            </Button>
          </div>
        </div>
      </section>
    </AppShell>
  );
};

export default Index;
