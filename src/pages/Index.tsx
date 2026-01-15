import { AppShell } from "@/components/layout/AppShell";
import { SEO } from "@/components/SEO";
import { HeroNew } from "@/components/home/HeroNew";
import { LogoStrip } from "@/components/home/LogoStrip";
import { MeetTheExpert } from "@/components/home/MeetTheExpert";
import { PanelShowcase } from "@/components/home/PanelShowcase";
import { BentoGrid } from "@/components/home/BentoGrid";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const Index = () => {
  return (
    <AppShell>
      <SEO
        title="J. Brand Technologies | Managed IT, Cybersecurity & PC Repair"
        description="Enterprise-grade IT services for homes and small businesses in Midland, Gladwin, and Clare Counties. Managed IT, cybersecurity, and PC repair with transparent pricing. Call 989-430-3848."
        canonical="/"
      />
      
      <HeroNew />
      <LogoStrip />
      <MeetTheExpert />
      <PanelShowcase />
      <BentoGrid />

      {/* CTA Band */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[hsl(231,65%,30%)]/20 via-surface to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Get Started Today</p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-on-surface mb-6">
            Ready for Enterprise-Grade IT?
          </h2>
          <p className="text-lg text-on-surface-variant mb-4 max-w-2xl mx-auto leading-relaxed">
            Serving Midland, Gladwin, and Clare Counties with transparent pricing and documented processes.
          </p>
          <p className="text-sm text-on-surface-variant mb-10">
            Managed plans include proactive maintenance. Support billed separately at $85/hr.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[hsl(231,65%,30%)] hover:bg-[hsl(231,65%,25%)] text-white rounded-xl h-12 px-6">
              <Link to="/contact">
                Request Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[hsl(231,65%,30%)]/30 text-on-surface hover:bg-surface-variant/50 rounded-xl h-12 px-6">
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
