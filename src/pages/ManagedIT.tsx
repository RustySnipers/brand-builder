import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Shield, Server, Check, X, ArrowRight, AlertCircle, Clock } from "lucide-react";

const planFeatures = [
  { feature: "RMM Agent (Auto-patching)", sentinel: true, server: true },
  { feature: "Managed Antivirus", sentinel: true, server: true },
  { feature: "Weekly Log Review", sentinel: true, server: true },
  { feature: "24/7 Uptime Monitoring", sentinel: true, server: true },
  { feature: "Firmware Management", sentinel: true, server: true },
  { feature: "Offsite Cloud Backup", sentinel: false, server: true },
  { feature: "Priority Response", sentinel: false, server: true },
];

export default function ManagedIT() {
  return (
    <Layout>
      <Helmet>
        <title>Managed IT Plans | J. Brand Technologies</title>
        <meta name="description" content="Proactive IT management with 24/7 monitoring, automated patching, and enterprise-grade security. Plans starting at $59/device/month." />
        <link rel="canonical" href="https://jbrandtech.com/managed-it" />
      </Helmet>

      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Managed IT Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Stop reacting to IT problems. Start preventing them. Our managed plans provide proactive monitoring, maintenance, and protection for your systems.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Who It's For</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Managed IT is ideal for businesses and power users who:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-teal flex-shrink-0" />
                  <span className="text-foreground">Have 5+ devices that need consistent maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-teal flex-shrink-0" />
                  <span className="text-foreground">Want to prevent downtime, not just react to it</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-teal flex-shrink-0" />
                  <span className="text-foreground">Need security baselines enforced automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-teal flex-shrink-0" />
                  <span className="text-foreground">Value documentation and visibility into their IT</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-semibold text-foreground mb-4 text-lg">The Solo Promise</h3>
              <p className="text-muted-foreground mb-6">
                When you work with J. Brand Technologies, you work directly with Jesse Brand. No account managers, no help desk runaround, no finger-pointing between teams.
              </p>
              <p className="text-muted-foreground">
                One person accountable for your IT. One person who knows your systems inside and out. That's the solo operator advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Compare Plans</h2>
            <p className="text-muted-foreground">Choose the level of coverage that fits your needs</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center px-6 py-4">
                      <div className="flex flex-col items-center">
                        <Shield className="h-6 w-6 text-primary mb-2" />
                        <span className="font-semibold text-foreground">Tech Sentinel</span>
                        <span className="text-sm text-muted-foreground">$59/device/mo</span>
                      </div>
                    </th>
                    <th className="text-center px-6 py-4">
                      <div className="flex flex-col items-center">
                        <Server className="h-6 w-6 text-teal mb-2" />
                        <span className="font-semibold text-foreground">Server / Network</span>
                        <span className="text-sm text-muted-foreground">$150/device/mo</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {planFeatures.map((row) => (
                    <tr key={row.feature} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-foreground">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.sentinel ? (
                          <Check className="h-5 w-5 text-teal mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.server ? (
                          <Check className="h-5 w-5 text-teal mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Support Policy */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Important: Support Billing Policy</h2>
                <p className="text-muted-foreground">
                  Please read this carefully before signing up for a managed plan.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-4">Support is NOT free with managed plans.</h3>
              <p className="text-muted-foreground mb-4">
                Many managed IT providers include "unlimited support" which leads to bloated pricing and incentivizes poor service. We take a different approach:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                  <span><strong>Proactive work IS included:</strong> Patching, monitoring, log reviews, firmware updates, and automated maintenance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Reactive support IS billed:</strong> Troubleshooting calls, on-site visits, and major issue resolution at <strong>$85/hr</strong> (discounted from $125/hr standard rate).</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Why This Works Better</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Keeps plan pricing low and predictable</li>
                <li>• Prevents support abuse and ticket spam</li>
                <li>• Ensures you only pay for what you actually need</li>
                <li>• Incentivizes building stable, well-maintained systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 hero-gradient">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Schedule an Assessment
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your IT environment and find the right level of coverage for your needs.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
