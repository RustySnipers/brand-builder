import { motion } from "framer-motion";
import { Cloud, Monitor, Shield, Server, Laptop, Network } from "lucide-react";

const compatibleWith = [
  { icon: Cloud, label: "Cloud Platforms" },
  { icon: Monitor, label: "Workstations" },
  { icon: Server, label: "Servers" },
  { icon: Shield, label: "Security Tools" },
  { icon: Laptop, label: "Laptops" },
  { icon: Network, label: "Networks" },
];

export function LogoStrip() {
  return (
    <section className="py-12 bg-surface border-y border-outline/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-on-surface-variant mb-8 uppercase tracking-wider font-medium">
          Compatible with your existing infrastructure
        </p>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {compatibleWith.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 text-on-surface-variant/60 hover:text-on-surface-variant transition-colors"
            >
              <item.icon className="h-8 w-8" />
              <span className="text-xs font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
