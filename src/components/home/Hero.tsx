import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import Cover from "@/assets/Cover.png";

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={Cover}
          alt="Technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container py-20 lg:py-32">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Enterprise Standards.
            <br />
            <span className="text-teal-light">Local Service.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
            Managed IT, cybersecurity, and PC repair for homes and small businesses in Midland, Gladwin, & Clare Counties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Request Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="tel:989-430-3848">
                <Phone className="mr-2 h-5 w-5" />
                Call 989-430-3848
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
