import { motion } from "framer-motion";
import { CheckCircle, Shield, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Profile from "@/assets/Profile.png";

const credentials = [
  { icon: Shield, text: "Security-first methodology" },
  { icon: FileText, text: "Documentation-driven processes" },
  { icon: Users, text: "Local business focused" },
];

export function MeetTheExpert() {
  return (
    <section className="py-24 lg:py-32 bg-surface-container" aria-labelledby="expert-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-3xl scale-110" aria-hidden="true" />
              
              {/* Profile image */}
              <div className="relative">
                <img 
                  src={Profile} 
                  alt="Jesse Brand - Lead Systems Architect at J. Brand Technologies"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-2xl"
                />
              </div>
              
              {/* Name badge */}
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold text-on-surface">Jesse Brand</p>
                <p className="text-sm text-primary">Lead Systems Architect</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
              Your Local Tech Sentinel
            </p>
            <h2 id="expert-heading" className="font-display text-3xl lg:text-4xl font-bold text-on-surface mb-6">
              Stop Trusting Your Business Data to Chat-Bots
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Get a dedicated human expert who understands local business needs. Based in Sanford, MI, 
              I provide enterprise-grade IT solutions with the personalized attention your business deserves.
            </p>

            <ul className="space-y-4 mb-8">
              {credentials.map((item, index) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-on-surface">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-on-primary rounded-xl h-12 px-6">
              <Link to="/about">
                Learn More About Jesse
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
