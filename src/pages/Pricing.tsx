import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Clock, CreditCard, Calendar, AlertCircle } from "lucide-react";

const residentialPricing = [
  { service: "Diagnostic / Bench Fee", price: "$49", note: "Full hardware scan & error log review. Waived if repair approved." },
  { service: "PC Tune-Up & Optimization", price: "$99", note: "Bloatware removal, OS updates, startup optimization, temp file cleanup." },
  { service: "Virus & Threat Remediation", price: "$129", note: "Deep scan remediation, browser reset, basic protection install." },
  { service: 'OS "Fresh Start" Re-install', price: "$129", note: "Windows/Linux install, driver updates, basic setup. Data backup extra." },
  { service: "Data Recovery (Tier 1)", price: "$149", note: "Software-based only. If mechanical failure, refer to a lab." },
  { service: "Laptop Screen Replacement", price: "$89", note: "Labor only. Client pays for the screen part cost upfront." },
  { service: "Hardware Component Install", price: "$59", note: "RAM, GPU, or SSD. Includes driver verification." },
  { service: "Custom PC Build / Rebuild", price: "$149", note: "Assembly, cable management, BIOS config, stress testing." },
  { service: "Data Migration", price: "$99", note: "Moving data from old PC to new PC (up to 1TB)." },
];

const businessRates = [
  { service: "Standard Consulting Rate", price: "$125/hr", note: "1-hour minimum" },
  { service: "Remote Support Block", price: "$45/15-min", note: "Quick remote fixes" },
  { service: "Emergency / After-Hours", price: "$250/hr", note: "Weekends, holidays, after 6 PM" },
  { service: "Managed Plan Support", price: "$85/hr", note: "Discounted for plan holders" },
];

const projectPricing = [
  { service: "Network Setup", price: "$750+", note: "Firewall config (Ubiquiti/Meraki), guest WiFi isolation, secure DNS, printer mapping." },
  { service: 'Security Audit ("The Fortress Check")', price: "$499", note: "Vulnerability scan, password policy review, 2FA setup, risk report." },
  { service: "Cloud Migration", price: "$999+", note: "Moving local files to SharePoint/OneDrive/Azure. Includes backup setup." },
  { service: "Automation Script", price: "$500+", note: "Custom Python/PowerShell scripts to automate workflows (e.g., auto-filing invoices)." },
];

const managedPlans = [
  {
    name: "Tech Sentinel",
    price: "$59",
    unit: "/device/month",
    features: [
      "RMM agent: auto-patching Windows & apps",
      "Managed AV: enterprise-grade (client provided)",
      "Weekly automated log review",
      "24/7 uptime monitoring",
      "Firmware management",
    ],
    note: "Support is NOT free. Reactive support billed at discounted rate: $85/hr.",
  },
  {
    name: "Server / Network",
    price: "$150",
    unit: "/device/month",
    features: [
      "Offsite cloud backup management",
    ],
    note: "Support is NOT free. Major outages/restores billed at discounted rate: $85/hr.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      <Helmet>
        <title>Pricing | J. Brand Technologies</title>
        <meta name="description" content="Transparent pricing for PC repair, cybersecurity, and managed IT services. Fixed-price residential services starting at $49. Business rates and managed plans available." />
        <link rel="canonical" href="https://jbrandtech.com/pricing" />
      </Helmet>

      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Transparent Pricing
            </h1>
            <p className="text-xl text-primary-foreground/90">
              No hidden fees. No surprises. Know exactly what you'll pay before we start.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Pricing */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-foreground mb-2">Residential / PC Repair</h2>
          <p className="text-muted-foreground mb-8">Fixed-price services for home computers and personal devices</p>

          <div className="bg-card rounded-lg border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Service</th>
                  <th className="text-right px-6 py-4 font-semibold text-foreground">Price</th>
                  <th className="hidden md:table-cell text-left px-6 py-4 font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {residentialPricing.map((item) => (
                  <tr key={item.service} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-foreground">{item.service}</div>
                      {item.note && <div className="text-sm text-muted-foreground md:hidden">{item.note}</div>}
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-teal">{item.price}</td>
                    <td className="hidden md:table-cell px-6 py-4 text-sm text-muted-foreground">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Business Rates */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Business Rates</h2>
              <p className="text-muted-foreground mb-8">Hourly and block rates for business clients</p>

              <div className="bg-card rounded-lg border overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y">
                    {businessRates.map((item) => (
                      <tr key={item.service} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-foreground">{item.service}</div>
                          <div className="text-sm text-muted-foreground">{item.note}</div>
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-teal whitespace-nowrap">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
              <p className="text-muted-foreground mb-8">Fixed-price project work for larger initiatives</p>

              <div className="bg-card rounded-lg border overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y">
                    {projectPricing.map((item) => (
                      <tr key={item.service} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-foreground">{item.service}</div>
                          <div className="text-sm text-muted-foreground">{item.note}</div>
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-teal whitespace-nowrap">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Plans */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Managed IT Plans</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proactive monitoring and maintenance to prevent problems before they happen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {managedPlans.map((plan) => (
              <div key={plan.name} className="card-elevated p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-teal">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    {plan.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="cta" size="lg">
              <Link to="/managed-it">
                Learn More About Managed IT
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-foreground mb-8">Policies & Terms</h2>

          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="payment" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Payment Terms</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <ul className="space-y-2">
                    <li><strong>Hardware/Parts:</strong> 100% upfront. No exceptions.</li>
                    <li><strong>Residential labor:</strong> Due upon completion/pickup.</li>
                    <li><strong>Business projects:</strong> 50% deposit, 50% upon completion.</li>
                    <li><strong>Retainers:</strong> Credit card auto-pay only (Stripe/QuickBooks).</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="scheduling" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Scheduling</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <ul className="space-y-2">
                    <li><strong>Business hours:</strong> Monday–Friday, 9am–5pm (strictly enforced).</li>
                    <li><strong>Project work:</strong> Scheduled in blocks. No drop-ins.</li>
                    <li><strong>After-hours:</strong> Available at emergency rate ($250/hr).</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Managed Plan Support</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p className="mb-4">
                    <strong>Important:</strong> Support is NOT included free with managed plans. This prevents abuse and ensures quality service.
                  </p>
                  <ul className="space-y-2">
                    <li>Managed plan holders receive a <strong>discounted support rate of $85/hr</strong> (vs. $125/hr standard).</li>
                    <li>This applies to troubleshooting calls, on-site visits, and major issue resolution.</li>
                    <li>Proactive monitoring, patching, and automated maintenance ARE included in the plan.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="scope" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Scope Limits</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p className="mb-4">To maintain quality and focus, we do not offer:</p>
                  <ul className="space-y-2">
                    <li><strong>Custom app development:</strong> Scripts/automation only, not full software applications.</li>
                    <li><strong>Web hosting:</strong> We can set up GoDaddy/Squarespace; we do not host on our servers.</li>
                    <li><strong>Printer hardware repair:</strong> Software/drivers only; if physically broken, we recommend replacement.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 hero-gradient">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a quote or to schedule service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Request Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/contact">Get a Business Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
