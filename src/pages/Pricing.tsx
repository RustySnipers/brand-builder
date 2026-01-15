import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Clock, CreditCard, Calendar, AlertCircle, Check, X, Star } from "lucide-react";

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
  { service: "IT Consulting & Project Labor", price: "$125/hr", note: "Strategic planning, audits, infrastructure reviews. Quoted per project or billed hourly." },
  { service: "On-Demand Support (Break/Fix)", price: "$125/hr", note: "Standard rate: Mon-Fri, 9am-5pm" },
  { service: "Emergency / After-Hours", price: "$185/hr", note: "Weekends, holidays, after 5 PM" },
];

const projectPricing = [
  { service: 'Security Audit ("The Fortress Check")', price: "$499", note: "Vulnerability scan, password policy review, 2FA setup, risk report." },
  { service: "Cloud Migration", price: "$999+", note: "Moving local files to SharePoint/OneDrive/Azure. Includes backup setup." },
  { service: "Automation Script", price: "$500+", note: "Custom Python/PowerShell scripts to automate workflows (e.g., auto-filing invoices)." },
];

const planFeatures = [
  { feature: "Managed Antivirus (EDR)", core: true, premier: true },
  { feature: "Automated Patch Management", core: true, premier: true },
  { feature: "Remote Support Access", core: "Standard (Mon-Fri)", premier: "Priority Queue" },
  { feature: "System Health Reporting", core: "Monthly", premier: "Weekly" },
  { feature: "RMM Agent (Proactive Maintenance)", core: false, premier: true },
  { feature: "24/7 Uptime Monitoring", core: false, premier: true },
];

export default function Pricing() {
  return (
    <AppShell>
      <Helmet>
        <title>IT Service Pricing | PC Repair & Managed IT Costs | J. Brand Technologies</title>
        <meta name="description" content="Transparent IT pricing: PC repair from $49, managed IT from $45/device/month, security audits $499. No hidden fees. Serving Midland, Gladwin & Clare Counties, MI." />
        <link rel="canonical" href="https://jbrandtech.com/pricing" />
      </Helmet>

      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Transparent IT Service Pricing
            </h1>
            <p className="text-xl text-primary-foreground/90">
              No hidden fees. No surprises. Fixed-price PC repair starting at $49. Managed IT from $45/device/month.
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
              <h2 className="text-3xl font-bold text-foreground mb-2">Professional Services</h2>
              <p className="text-muted-foreground mb-8">Expert support for projects, consulting, and issues outside of managed plans</p>

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
              Our proactive Tech Sentinel plans ensure your systems are secure, up-to-date, and performing optimally. Choose the level of protection that fits your business needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center px-6 py-4 bg-muted/30">
                      <div className="flex flex-col items-center">
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
          <h2 className="text-3xl font-bold text-foreground mb-8">Policies & Terms of Service</h2>

          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="payment" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <span className="font-semibold">1. Payment Terms</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <ul className="space-y-3">
                    <li><strong>Managed Services (Autopay):</strong> To ensure continuous service and security protection, all Tech Sentinel managed service plans require a valid credit card or bank account on file. Billing is processed automatically via Stripe on the 1st of every month.</li>
                    <li><strong>One-Time & Project Fees:</strong> Invoices for hourly labor, consulting projects, or hardware are due upon receipt. We accept payment via Stripe (Credit Card/ACH) or Cash.</li>
                    <li><strong>Late Payments:</strong> Invoices unpaid after 15 days are subject to a 5% late fee. Services may be suspended for accounts more than 30 days past due.</li>
                    <li><strong>Hardware Procurement:</strong> All hardware orders require 100% payment upfront before procurement.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="scheduling" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-semibold">2. Scheduling & Availability</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <ul className="space-y-3">
                    <li><strong>Standard Business Hours:</strong> Monday through Friday, 9:00 AM to 5:00 PM EST.</li>
                    <li><strong>Service Windows:</strong> Scheduled maintenance, patching, and non-emergency updates are performed during standard business hours unless explicitly arranged otherwise.</li>
                    <li><strong>Cancellations:</strong> We request at least 24 hours' notice for cancellations of scheduled onsite visits. Missed appointments or cancellations made with less than 24 hours' notice may be subject to a cancellation fee equal to one (1) billable hour.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-semibold">3. Managed Plan Support</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <ul className="space-y-3">
                    <li><strong>Coverage:</strong> Tech Sentinel plans cover the implementation and management of the specific monitoring and security tools defined in your tier.</li>
                    <li><strong>Remote-First Approach:</strong> To provide the fastest resolution and keep costs efficient, we utilize secure remote support tools for the majority of tickets.</li>
                    <li><strong>Onsite Visits:</strong> Onsite support visits are billed at the standard hourly rate unless defined otherwise in a specific project agreement.</li>
                    <li><strong>Remediation:</strong> Issues identified by monitoring (e.g., virus removal, hardware failure, OS corruption) are billed at the standard hourly rate for remediation, though Premier clients receive priority scheduling.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="scope" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    <span className="font-semibold">4. Scope Limits</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <ul className="space-y-3">
                    <li><strong>Third-Party Vendors:</strong> We act as your knowledgeable advocate with third-party vendors (ISPs, software providers), but we cannot guarantee the uptime, performance, or support responsiveness of third-party services.</li>
                    <li><strong>Data Liability:</strong> J. Brand Technologies employs industry-standard security and backup practices. However, the client is responsible for maintaining redundant, offsite backups. We are not liable for data loss due to catastrophic hardware failure, natural disasters, or cyberattacks beyond our reasonable control.</li>
                    <li><strong>Right of Refusal:</strong> We reserve the right to refuse service on equipment that is obsolete (End of Life), physically hazardous, or contains illegal content.</li>
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
    </AppShell>
  );
}
