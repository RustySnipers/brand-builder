import { AppShell } from "@/components/layout/AppShell";
import { SEO } from "@/components/SEO";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const dataFlowSteps = [
  {
    title: "Input Collection",
    description: "We gather information about your devices, infrastructure, logs, and requirements through secure discovery processes.",
  },
  {
    title: "Analysis & Processing",
    description: "Your data is analyzed using security-first methodologies. Vulnerabilities are identified, policies are evaluated.",
  },
  {
    title: "Documentation",
    description: "Every finding, configuration, and action is documented for full audit trail and future reference.",
  },
  {
    title: "Output Delivery",
    description: "You receive actionable reports, remediation steps, and clear documentation of all work performed.",
  },
];

export default function Architecture() {
  return (
    <AppShell>
      <SEO
        title="System Architecture"
        description="Understand how J. Brand Technologies processes your IT needs—from input collection through analysis to audit-ready outputs."
        canonical="/architecture"
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-on-surface mb-6">
              System Architecture
            </h1>
            <p className="text-xl text-on-surface-variant">
              A clear view of how your IT challenges flow through our process to produce audit-ready solutions.
            </p>
          </motion.div>

          {/* Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ArchitectureDiagram />
          </motion.div>
        </div>
      </section>

      {/* How Data Moves */}
      <section className="py-16 lg:py-24 bg-surface-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-on-surface mb-12 text-center">
            How Data Moves
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataFlowSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl bg-surface-container border border-outline/20"
              >
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center mb-4 text-sm font-bold text-primary">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-on-surface mb-2">{step.title}</h3>
                <p className="text-sm text-on-surface-variant">{step.description}</p>
                {i < dataFlowSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 h-5 w-5 text-tertiary/50 -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-on-surface mb-8 text-center">
            Key Principles
          </h2>
          <div className="space-y-4">
            {[
              "Security-first design at every layer",
              "Least privilege access controls",
              "Full documentation and audit trails",
              "Clear, actionable outputs",
              "No data retained beyond service scope",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl bg-surface-container border border-outline/20"
              >
                <CheckCircle className="h-5 w-5 text-tertiary flex-shrink-0" />
                <span className="text-on-surface">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90 text-on-primary">
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
