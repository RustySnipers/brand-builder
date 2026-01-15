import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, FileText, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import Cover from "@/assets/Cover.png";

const trustBadges = [
  { icon: Shield, label: "Security-first design" },
  { icon: Lock, label: "Least privilege" },
  { icon: FileText, label: "Fully documented" },
];

export function HeroNew() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface" aria-labelledby="hero-heading">
      {/* Subtle background pattern */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(231,65%,30%)]/5 via-transparent to-accent/5" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsla(231,65%,45%,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsla(231,65%,45%,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          >
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">Serving Midland, Gladwin & Clare Counties</span>
            </motion.div>

            <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface mb-6">
              Enterprise Standards.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Local Service.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-on-surface-variant mb-8 max-w-xl leading-relaxed">
              Managed IT, Cybersecurity, and PC Repair for Midland, Gladwin, and Clare Counties. 
              Transparent pricing. Documentation-first approach. No hidden fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="bg-[hsl(231,65%,30%)] hover:bg-[hsl(231,65%,25%)] text-white rounded-xl h-12 px-6 text-base font-semibold shadow-lg shadow-primary/25">
                <Link to="/contact">
                  Request Service
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[hsl(231,65%,30%)]/30 text-on-surface hover:bg-surface-variant/50 rounded-xl h-12 px-6 text-base font-semibold">
                <a href="tel:989-430-3848">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Call 989-430-3848
                </a>
              </Button>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-variant/50 border border-outline/10"
                >
                  <badge.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span className="text-sm text-on-surface-variant">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Cover Image */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl scale-105" aria-hidden="true" />
              
              {/* Cover image */}
              <img 
                src={Cover} 
                alt="J. Brand Technologies - Enterprise IT infrastructure and server room"
                className="relative rounded-xl shadow-2xl border border-outline/20 w-full"
              />
              
              {/* Business hours overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container/95 backdrop-blur-sm rounded-lg p-4 border border-outline/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-on-surface-variant">Business Hours</div>
                    <div className="font-medium text-on-surface">Mon–Fri, 9am–5pm</div>
                  </div>
                  <Link 
                    to="/contact"
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                  >
                    Get started
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
