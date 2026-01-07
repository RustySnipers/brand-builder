import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

export function CTABand() {
  return (
    <section className="py-16 lg:py-20 cta-gradient">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you need a quick fix or ongoing IT support, we're here to help. Reach out today for transparent pricing and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Request Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
              <a href="tel:989-430-3848">
                <Phone className="mr-2 h-5 w-5" />
                Call / Text
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
              <a href="mailto:jesse.h.brand@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
