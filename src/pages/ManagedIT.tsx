import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Shield, Check, X, ArrowRight, AlertCircle, Clock, Star } from "lucide-react";

const planFeatures = [
  { feature: "Managed Antivirus (EDR)", core: true, premier: true },
  { feature: "Automated Patch Management", core: true, premier: true },
  { feature: "Remote Support Access", core: "Standard (Mon-Fri)", premier: "Priority Queue" },
  { feature: "System Health Reporting", core: "Monthly", premier: "Weekly" },
  { feature: "RMM Agent (Proactive Maintenance)", core: false, premier: true },
  { feature: "24/7 Uptime Monitoring", core: false, premier: true },
];

export default function ManagedIT() {
  return (
    <AppShell>
      <Helmet>
        <title>Managed IT Services | 24/7 Monitoring & Support | J. Brand Technologies</title>
        <meta name="description" content="Proactive IT management for Central Michigan businesses. 24/7 monitoring, auto-patching, security. Plans from $45/device/month. Serving Midland, Gladwin & Clare Counties." />
        <link rel="canonical" href="https://jbrandtech.com/managed-it" />
      </Helmet>

      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Managed IT Services for Central Michigan Businesses
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Stop reacting to IT problems. Start preventing them. 24/7 monitoring, automated patching, and proactive maintenance from $45/device/month.
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
            <p className="text-muted-foreground">Choose the level of protection that fits your business needs</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center px-6 py-4 bg-muted/30">
                      <div className="flex flex-col items-center">
                        <Shield className="h-6 w-6 text-primary mb-2" />
                        <span className="font-semibold text-foreground">Tech Sentinel Core</span>
                        <span className="text-2xl font-bold text-teal mt-1">$45</span>
                        <span className="text-sm text-muted-foreground">/device/month</span>
                        <span className="text-xs text-muted-foreground mt-1">Basic Security & Maintenance</span>
                      </div>
                    </th>
                    <th className="text-center px-6 py-4 bg-primary/5 border-l-2 border-primary">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="h-4 w-4 text-primary fill-primary" />
                          <span className="text-xs font-medium text-primary uppercase">Recommended</span>
                        </div>
                        <Shield className="h-6 w-6 text-teal mb-2" />
                        <span className="font-semibold text-foreground">Tech Sentinel Premier</span>
                        <span className="text-2xl font-bold text-teal mt-1">$85</span>
                        <span className="text-sm text-muted-foreground">/device/month</span>
                        <span className="text-xs text-muted-foreground mt-1">Maximum Uptime & Priority Support</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {planFeatures.map((row) => (
                    <tr key={row.feature} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-foreground">{row.feature}</td>
                      <td className="px-6 py-4 text-center bg-muted/30">
                        {row.core === true ? (
                          <Check className="h-5 w-5 text-teal mx-auto" />
                        ) : row.core === false ? (
                          <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                        ) : (
                          <span className="text-sm text-muted-foreground">{row.core}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center bg-primary/5 border-l-2 border-primary">
                        {row.premier === true ? (
                          <Check className="h-5 w-5 text-teal mx-auto" />
                        ) : row.premier === false ? (
                          <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                        ) : (
                          <span className="text-sm font-medium text-foreground">{row.premier}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-foreground flex items-start gap-2">
                <Star className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Recommendation:</strong> Tech Sentinel Premier is strongly recommended for servers and critical workstations where downtime directly impacts revenue.</span>
              </p>
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
              <h3 className="font-semibold text-foreground mb-4">Remote-First Support Approach</h3>
              <p className="text-muted-foreground mb-4">
                To provide the fastest resolution and keep costs efficient, we utilize secure remote support tools for the majority of tickets. This allows us to respond quickly without travel delays.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                  <span><strong>Proactive work IS included:</strong> Patching, monitoring, health reports, and automated maintenance per your tier.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Reactive support is billed at the standard hourly rate:</strong> This includes troubleshooting calls, on-site visits, and issue remediation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Premier clients receive priority scheduling:</strong> When issues arise, you move to the front of the queue.</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Why This Works Better</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Keeps plan pricing low and predictable</li>
                <li>• Faster response via remote-first approach</li>
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
    </AppShell>
  );
}
