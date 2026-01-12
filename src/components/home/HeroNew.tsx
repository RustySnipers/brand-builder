import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, FileText, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const trustBadges = [
  { icon: Shield, label: "Security-first design" },
  { icon: Lock, label: "Least privilege" },
  { icon: FileText, label: "Fully documented" },
];

const howItWorks = [
  { step: "1", title: "Contact", description: "Call, text, or fill out our form" },
  { step: "2", title: "Diagnose", description: "We assess your situation" },
  { step: "3", title: "Resolve", description: "Fix, document, and deliver" },
];

export function HeroNew() {
  const prefersReducedMotion = useReducedMotion();
  
  const animationProps = prefersReducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
    : {};

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-variant/30 to-surface" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(var(--md-sys-color-primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(var(--md-sys-color-tertiary)/0.1),transparent_50%)]" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsla(var(--md-sys-color-tertiary)/0.5) 1px, transparent 1px),
                              linear-gradient(90deg, hsla(var(--md-sys-color-tertiary)/0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">Serving Midland, Gladwin & Clare Counties</span>
            </motion.div>

            <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface mb-6">
              Managed IT & PC Repair
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-primary">
                in Central Michigan
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-on-surface-variant mb-8 max-w-xl leading-relaxed">
              Reliable computer repair, 24/7 IT monitoring, and cybersecurity for homes and small businesses. Transparent pricing. No hidden fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-on-primary rounded-xl h-12 px-6 text-base font-semibold shadow-lg shadow-primary/25">
                <Link to="/contact">
                  Request Service
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-outline/30 text-on-surface hover:bg-surface-variant/50 rounded-xl h-12 px-6 text-base font-semibold">
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-variant/50 border border-outline/10"
                >
                  <badge.icon className="h-4 w-4 text-tertiary" aria-hidden="true" />
                  <span className="text-sm text-on-surface-variant">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: How It Works */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-tertiary/20 blur-3xl" aria-hidden="true" />
              
              {/* Main container */}
              <div className="relative rounded-3xl bg-surface-container border border-outline/20 p-6 lg:p-8 overflow-hidden">
                <h2 className="text-lg font-semibold text-on-surface mb-6 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-tertiary" aria-hidden="true" />
                  How It Works
                </h2>
                
                <div className="space-y-6">
                  {howItWorks.map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary">{item.step}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-on-surface">{item.title}</div>
                        <div className="text-sm text-on-surface-variant">{item.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-outline/20">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
