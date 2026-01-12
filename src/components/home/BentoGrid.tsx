import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Monitor,
  Server,
  Cloud,
  FileText,
  Zap,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface BentoItem {
  icon: React.ElementType;
  title: string;
  description: string;
  metric?: string;
  href: string;
  span?: "default" | "wide" | "tall";
}

const bentoItems: BentoItem[] = [
  {
    icon: Monitor,
    title: "PC Repair & Optimization",
    description: "Fixed-price diagnostics, tune-ups, virus removal, and hardware upgrades for residential and business systems.",
    metric: "From $49",
    href: "/services#pc-repair",
    span: "wide",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security audits, threat remediation, 2FA setup, and enterprise-grade protection.",
    metric: "Audit-ready",
    href: "/services#cybersecurity",
  },
  {
    icon: Server,
    title: "Managed IT",
    description: "24/7 monitoring, automated patching, and proactive maintenance to prevent downtime.",
    metric: "From $59/device",
    href: "/managed-it",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Moving local files to SharePoint, OneDrive, or Azure with backup setup included.",
    metric: "Includes backup",
    href: "/pricing",
  },
  {
    icon: FileText,
    title: "Documentation-First",
    description: "Every job is documented. You always know what was done and why.",
    metric: "100% documented",
    href: "/about",
  },
  {
    icon: Zap,
    title: "Automation Scripts",
    description: "Custom Python/PowerShell scripts to automate workflows and eliminate repetitive tasks.",
    metric: "Policy-driven",
    href: "/pricing",
  },
];

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We serve homes and businesses in Midland, Gladwin, and Clare Counties in Central Michigan. We're based near Sanford, MI.",
  },
  {
    question: "How quickly can you respond to IT emergencies?",
    answer: "During business hours (Mon-Fri, 9am-5pm), we typically respond within 1-2 hours. After-hours emergency support is available at our emergency rate ($250/hr).",
  },
  {
    question: "Do you offer free estimates?",
    answer: "For most services, yes. Our diagnostic fee ($49) covers an initial assessment and is waived if you proceed with repairs. For larger projects, we provide free consultations and quotes.",
  },
  {
    question: "What makes you different from other IT providers?",
    answer: "You work directly with the owner, Jesse Brand. No account managers, no support tiers, no finger-pointing. Plus, every job is fully documented so you always know what was done.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
    },
  },
};

export function BentoGrid() {
  return (
    <section className="py-16 lg:py-24 bg-surface-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-on-surface mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Comprehensive technology solutions from quick repairs to ongoing IT management.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {bentoItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className={cn(
                item.span === "wide" && "md:col-span-2",
                item.span === "tall" && "md:row-span-2"
              )}
            >
              <Link
                to={item.href}
                className="group block h-full p-6 lg:p-8 rounded-2xl bg-surface-container border border-outline/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-on-surface-variant opacity-0 group-hover:opacity-100 transform translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" aria-hidden="true" />
                </div>
                
                <h3 className="text-lg font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {item.metric && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-tertiary/10 text-tertiary border border-tertiary/20">
                    {item.metric}
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <div className="mt-16 lg:mt-24">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-on-surface">
              Common Questions
            </h2>
          </div>
          
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-surface-container border border-outline/20 rounded-xl px-6"
                >
                  <AccordionTrigger className="hover:no-underline text-left py-4">
                    <span className="font-medium text-on-surface">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-on-surface-variant pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
