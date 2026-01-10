import { AppShell } from "@/components/layout/AppShell";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const principles = [
  {
    icon: Lock,
    title: "Least Privilege",
    description: "Access is granted only when necessary. Systems are configured with minimal permissions by default.",
  },
  {
    icon: Shield,
    title: "Defense in Depth",
    description: "Multiple layers of security controls. No single point of failure in protection.",
  },
  {
    icon: Eye,
    title: "Visibility & Monitoring",
    description: "Designed for audit trails and logging. Know what happened, when, and why.",
  },
  {
    icon: FileText,
    title: "Documentation-First",
    description: "Every configuration is documented. Security decisions are traceable and reviewable.",
  },
];

const dataHandling = [
  "We collect only what's necessary to deliver services",
  "Data is handled securely during all operations",
  "No data is shared with third parties without consent",
  "Client data is returned or securely deleted upon request",
];

const securityPractices = [
  { label: "MFA/2FA Support", status: "Available", description: "Multi-factor authentication setup for your accounts" },
  { label: "Encrypted Communications", status: "Standard", description: "All remote sessions use encrypted connections" },
  { label: "Secure File Transfer", status: "Available", description: "Encrypted file transfer for sensitive data" },
  { label: "Access Logging", status: "Standard", description: "All administrative access is logged" },
];

export default function Security() {
  return (
    <AppShell>
      <SEO
        title="Security & Trust Center"
        description="Learn about our security-first design principles, data handling practices, and commitment to protecting your IT infrastructure."
        canonical="/security"
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trust Center</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-on-surface mb-6">
              Security & Trust
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Security-first design principles guide every service we deliver. Your data protection is not an afterthought—it's foundational.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Principles */}
      <section className="py-16 lg:py-24 bg-surface-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-on-surface mb-12 text-center">
            Security-First Design Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-surface-container border border-outline/20"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <principle.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-on-surface mb-2">{principle.title}</h3>
                <p className="text-on-surface-variant">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-on-surface mb-6">
                Data Handling Overview
              </h2>
              <p className="text-on-surface-variant mb-8">
                Transparency in how we handle your data is essential to trust. Here's our approach:
              </p>
              <ul className="space-y-4">
                {dataHandling.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-tertiary flex-shrink-0 mt-0.5" />
                    <span className="text-on-surface">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-surface-container border border-outline/20">
              <h3 className="font-semibold text-on-surface mb-6">Security Practices</h3>
              <div className="space-y-4">
                {securityPractices.map((practice) => (
                  <div key={practice.label} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium text-on-surface">{practice.label}</div>
                      <div className="text-sm text-on-surface-variant">{practice.description}</div>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-tertiary/10 text-tertiary whitespace-nowrap">
                      {practice.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Disclosure */}
      <section className="py-16 lg:py-24 bg-surface-variant/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-display text-2xl font-bold text-on-surface mb-4">
            Security Concerns?
          </h2>
          <p className="text-on-surface-variant mb-8">
            If you have security concerns or need to report a potential issue, please contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-on-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-outline/30">
              <Link to="/privacy">Privacy Policy</Link>
            </Button>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
