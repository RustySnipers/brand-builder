import { motion } from "framer-motion";
import { Building2, Briefcase, Factory, Stethoscope, Scale, Store } from "lucide-react";

const trustedBy = [
  { icon: Stethoscope, label: "Medical Clinics" },
  { icon: Scale, label: "Law Firms" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Store, label: "Retail" },
  { icon: Building2, label: "Small Business" },
  { icon: Briefcase, label: "Professional Services" },
];

export function LogoStrip() {
  return (
    <section className="py-16 lg:py-20 bg-surface-container border-y border-outline/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-on-surface-variant mb-10 uppercase tracking-widest font-semibold">
          Trusted by businesses across Central Michigan
        </p>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {trustedBy.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 text-on-surface-variant/50 hover:text-primary/80 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 border border-outline/10 flex items-center justify-center">
                <item.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <span className="text-xs font-medium tracking-wide">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
