import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  Cloud,
  Shield,
  Server,
  Laptop,
  FileText,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Lock,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PanelItem {
  id: string;
  icon: React.ElementType;
  label: string;
  description: string;
}

const inputItems: PanelItem[] = [
  { id: "endpoints", icon: Laptop, label: "Endpoints", description: "Workstations, laptops, servers" },
  { id: "network", icon: Cloud, label: "Network", description: "Routers, firewalls, WiFi APs" },
  { id: "logs", icon: FileText, label: "Logs", description: "Event logs, audit trails" },
  { id: "requirements", icon: CheckCircle, label: "Requirements", description: "Your business needs" },
];

const processingSteps = {
  endpoints: [
    { label: "Discovery Scan", status: "complete" },
    { label: "Vulnerability Assessment", status: "complete" },
    { label: "Policy Enforcement", status: "active" },
    { label: "Documentation", status: "pending" },
  ],
  network: [
    { label: "Topology Mapping", status: "complete" },
    { label: "Security Audit", status: "complete" },
    { label: "Configuration Review", status: "active" },
    { label: "Optimization", status: "pending" },
  ],
  logs: [
    { label: "Collection", status: "complete" },
    { label: "Normalization", status: "complete" },
    { label: "Analysis", status: "active" },
    { label: "Alert Correlation", status: "pending" },
  ],
  requirements: [
    { label: "Assessment", status: "complete" },
    { label: "Gap Analysis", status: "complete" },
    { label: "Solution Design", status: "active" },
    { label: "Implementation Plan", status: "pending" },
  ],
};

const outputCards = {
  endpoints: [
    { icon: Shield, label: "Security Score", value: "94/100", color: "text-tertiary" },
    { icon: AlertTriangle, label: "Issues Found", value: "3", color: "text-amber-400" },
    { icon: FileText, label: "Documented", value: "100%", color: "text-primary" },
  ],
  network: [
    { icon: Lock, label: "Firewall Status", value: "Hardened", color: "text-tertiary" },
    { icon: Zap, label: "Performance", value: "Optimized", color: "text-primary" },
    { icon: FileText, label: "Topology Map", value: "Complete", color: "text-tertiary" },
  ],
  logs: [
    { icon: BarChart3, label: "Events Analyzed", value: "10K+", color: "text-primary" },
    { icon: AlertTriangle, label: "Anomalies", value: "2", color: "text-amber-400" },
    { icon: CheckCircle, label: "Report Ready", value: "Yes", color: "text-tertiary" },
  ],
  requirements: [
    { icon: CheckCircle, label: "Gaps Identified", value: "5", color: "text-amber-400" },
    { icon: FileText, label: "Solutions", value: "Proposed", color: "text-primary" },
    { icon: Zap, label: "ROI Estimate", value: "Included", color: "text-tertiary" },
  ],
};

export function PanelShowcase() {
  const [selectedInput, setSelectedInput] = useState<string>("endpoints");
  const prefersReducedMotion = useReducedMotion();
  
  const springTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring", damping: 20, stiffness: 300 };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-on-surface mb-4">
            How We Work
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Policy-driven execution with clear logs and traceability at every step.
          </p>
        </div>

        {/* Three-Panel Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Panel: Inputs */}
          <div className="rounded-2xl bg-surface-container border border-outline/20 p-6 lg:p-8">
            <h3 className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-6">
              Inputs
            </h3>
            <div className="space-y-3">
              {inputItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setSelectedInput(item.id)}
                  className={cn(
                    "w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-200",
                    selectedInput === item.id
                      ? "bg-primary/15 border border-primary/30"
                      : "bg-surface-variant/30 border border-transparent hover:bg-surface-variant/50"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                    selectedInput === item.id ? "bg-primary/20" : "bg-surface-variant"
                  )}>
                    <item.icon className={cn(
                      "h-5 w-5",
                      selectedInput === item.id ? "text-primary" : "text-on-surface-variant"
                    )} />
                  </div>
                  <div>
                    <div className={cn(
                      "font-medium",
                      selectedInput === item.id ? "text-primary" : "text-on-surface"
                    )}>
                      {item.label}
                    </div>
                    <div className="text-sm text-on-surface-variant">{item.description}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Center Panel: Processing */}
          <div className="rounded-2xl bg-surface-container border border-outline/20 p-6 lg:p-8">
            <h3 className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-6">
              Processing
            </h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedInput}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="space-y-4"
              >
                {processingSteps[selectedInput as keyof typeof processingSteps].map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="relative">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                        step.status === "complete" && "bg-tertiary/20 text-tertiary",
                        step.status === "active" && "bg-primary/20 text-primary animate-pulse",
                        step.status === "pending" && "bg-surface-variant text-on-surface-variant"
                      )}>
                        {step.status === "complete" ? "✓" : i + 1}
                      </div>
                      {i < 3 && (
                        <div className={cn(
                          "absolute left-1/2 top-full w-px h-4 -translate-x-1/2",
                          step.status === "complete" ? "bg-tertiary/30" : "bg-outline/20"
                        )} />
                      )}
                    </div>
                    <span className={cn(
                      "font-medium",
                      step.status === "complete" && "text-tertiary",
                      step.status === "active" && "text-primary",
                      step.status === "pending" && "text-on-surface-variant"
                    )}>
                      {step.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Panel: Outputs */}
          <div className="rounded-2xl bg-surface-container border border-outline/20 p-6 lg:p-8">
            <h3 className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-6">
              Outputs
            </h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedInput}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="space-y-4"
              >
                {outputCards[selectedInput as keyof typeof outputCards].map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-surface-variant/30 border border-outline/10"
                  >
                    <div className="flex items-center gap-3">
                      <card.icon className={cn("h-5 w-5", card.color)} />
                      <span className="text-sm text-on-surface-variant">{card.label}</span>
                    </div>
                    <span className={cn("font-semibold", card.color)}>{card.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
