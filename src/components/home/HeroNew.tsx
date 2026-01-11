import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, FileText, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const trustBadges = [
  { icon: Shield, label: "Security-first design" },
  { icon: Lock, label: "Least privilege" },
  { icon: FileText, label: "Audit-ready outputs" },
];

export function HeroNew() {
  const prefersReducedMotion = useReducedMotion();
  
  const animationProps = prefersReducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
    : {};

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-variant/30 to-surface">
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
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <span className="text-sm font-medium text-primary">Serving Midland, Gladwin & Clare Counties</span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface mb-6">
              Enterprise Standards.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-primary">
                Local Service.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-on-surface-variant mb-8 max-w-xl leading-relaxed">
              Ingest your IT challenges. Normalize signals. Produce audit-ready solutions with documentation and security built in.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-on-primary rounded-xl h-12 px-6 text-base font-semibold shadow-lg shadow-primary/25">
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-outline/30 text-on-surface hover:bg-surface-variant/50 rounded-xl h-12 px-6 text-base font-semibold">
                <Link to="/architecture">
                  <Play className="mr-2 h-4 w-4" />
                  View Architecture
                </Link>
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
                  <badge.icon className="h-4 w-4 text-tertiary" />
                  <span className="text-sm text-on-surface-variant">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-tertiary/20 blur-3xl" />
              
              {/* Main container */}
              <div className="relative h-full rounded-3xl bg-surface-container border border-outline/20 p-6 lg:p-8 overflow-hidden">
                {/* Process visualization */}
                <div className="h-full flex flex-col justify-between">
                  {/* Input */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                      <span className="text-2xl">📥</span>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">Input</div>
                      <div className="text-sm text-on-surface font-medium">Your IT challenges</div>
                    </div>
                  </motion.div>

                  {/* Process Arrow */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    className="flex-1 flex justify-center py-4"
                  >
                    <div className="w-px h-full bg-gradient-to-b from-primary via-tertiary to-primary opacity-50" />
                  </motion.div>

                  {/* Process */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex items-center justify-center py-6"
                  >
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center border border-outline/20">
                        <span className="text-4xl">⚙️</span>
                      </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 rounded-3xl border border-dashed border-outline/30"
                      />
                    </div>
                  </motion.div>

                  {/* Process Arrow */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    className="flex-1 flex justify-center py-4"
                  >
                    <div className="w-px h-full bg-gradient-to-b from-primary via-tertiary to-primary opacity-50" />
                  </motion.div>

                  {/* Output */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    className="flex items-center gap-4 justify-end"
                  >
                    <div className="text-right">
                      <div className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">Output</div>
                      <div className="text-sm text-on-surface font-medium">Audit-ready solutions</div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-tertiary/15 flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
