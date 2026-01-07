import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service | J. Brand Technologies</title>
        <meta name="description" content="Terms of service for J. Brand Technologies IT services. Payment terms, scheduling, and service policies." />
        <link rel="canonical" href="https://jbrandtech.com/terms" />
      </Helmet>

      <section className="hero-gradient py-16">
        <div className="section-container">
          <h1 className="text-4xl font-bold text-primary-foreground">Terms of Service</h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-3xl prose prose-slate">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: January 2025
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Services</h2>
            <p className="text-muted-foreground mb-6">
              J. Brand Technologies provides IT services including PC repair, cybersecurity, network setup, cloud migration, and managed IT services to residential and business clients in Midland, Gladwin, and Clare Counties, Michigan.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Payment Terms</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li><strong>Hardware/Parts:</strong> 100% payment required upfront before ordering. No exceptions.</li>
              <li><strong>Residential Labor:</strong> Payment due upon completion or device pickup.</li>
              <li><strong>Business Projects:</strong> 50% deposit required to begin work; remaining 50% due upon completion.</li>
              <li><strong>Managed Plans/Retainers:</strong> Credit card auto-pay only (via Stripe or QuickBooks).</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Scheduling & Hours</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li><strong>Business Hours:</strong> Monday–Friday, 9:00 AM – 5:00 PM (strictly enforced)</li>
              <li><strong>Project Work:</strong> Scheduled in blocks; drop-in service not available</li>
              <li><strong>Emergency/After-Hours:</strong> Available at $250/hr rate (weekends, holidays, after 6 PM)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Managed Plan Support</h2>
            <p className="text-muted-foreground mb-6">
              Managed IT plans include proactive monitoring, patching, and automated maintenance. <strong>Support calls and troubleshooting are billed separately</strong> at the discounted rate of $85/hr for plan holders (vs. $125/hr standard rate). This policy ensures quality service and prevents support abuse.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Service Limitations</h2>
            <p className="text-muted-foreground mb-4">
              We do not provide the following services:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li><strong>Custom Application Development:</strong> We provide scripts and automation only, not full software applications.</li>
              <li><strong>Web Hosting:</strong> We can set up hosting with providers like GoDaddy or Squarespace, but do not host websites on our infrastructure.</li>
              <li><strong>Printer Hardware Repair:</strong> We provide software and driver support only. Physically damaged printers should be replaced.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Liability</h2>
            <p className="text-muted-foreground mb-6">
              J. Brand Technologies will exercise reasonable care in providing services. However, we are not liable for data loss, business interruption, or other damages beyond the cost of the specific service provided. Clients are responsible for maintaining backups of important data.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Handling</h2>
            <p className="text-muted-foreground mb-6">
              We maintain confidentiality of all client data accessed during service. We do not share, sell, or use client data for purposes other than providing the requested services. All service documentation is stored securely.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact</h2>
            <p className="text-muted-foreground">
              For questions about these terms:<br />
              Jesse Brand<br />
              Email: jesse.h.brand@gmail.com<br />
              Phone: 989-430-3848
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
