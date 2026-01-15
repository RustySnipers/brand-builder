import { AppShell } from "@/components/layout/AppShell";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <AppShell>
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
              Last updated: January 2026
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Services</h2>
            <p className="text-muted-foreground mb-6">
              J. Brand Technologies provides IT services including PC repair, cybersecurity, cloud migration, and managed IT services to residential and business clients in Midland, Gladwin, and Clare Counties, Michigan.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Payment Terms</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
              <li><strong>Managed Services (Autopay):</strong> To ensure continuous service and security protection, all Tech Sentinel managed service plans require a valid credit card or bank account on file. Billing is processed automatically via Stripe on the 1st of every month for that month's service.</li>
              <li><strong>One-Time & Project Fees:</strong> Invoices for hourly labor, consulting projects, or hardware are due upon receipt. We accept payment via Stripe (Credit Card/ACH) or Cash.</li>
              <li><strong>Late Payments:</strong> Invoices unpaid after 15 days are subject to a 5% late fee. Services may be suspended for accounts more than 30 days past due.</li>
              <li><strong>Hardware Procurement:</strong> All hardware orders require 100% payment upfront before procurement.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Scheduling & Availability</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
              <li><strong>Standard Business Hours:</strong> Monday through Friday, 9:00 AM to 5:00 PM EST.</li>
              <li><strong>Service Windows:</strong> Scheduled maintenance, patching, and non-emergency updates are performed during standard business hours unless explicitly arranged otherwise to minimize business disruption.</li>
              <li><strong>Cancellations:</strong> We request at least 24 hours' notice for cancellations of scheduled onsite visits. Missed appointments or cancellations made with less than 24 hours' notice may be subject to a cancellation fee equal to one (1) billable hour.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Managed Plan Support</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
              <li><strong>Coverage:</strong> Tech Sentinel plans cover the implementation and management of the specific monitoring and security tools defined in your tier.</li>
              <li><strong>Remote-First Approach:</strong> To provide the fastest resolution and keep costs efficient, we utilize secure remote support tools for the majority of tickets.</li>
              <li><strong>Onsite Visits:</strong> Onsite support visits are billed at the standard hourly rate unless defined otherwise in a specific project agreement.</li>
              <li><strong>Remediation:</strong> Issues identified by monitoring (e.g., virus removal, hardware failure, OS corruption) are billed at the standard hourly rate for remediation, though Premier clients receive priority scheduling.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Scope Limits</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
              <li><strong>Third-Party Vendors:</strong> We act as your knowledgeable advocate with third-party vendors (ISPs, software providers), but we cannot guarantee the uptime, performance, or support responsiveness of third-party services.</li>
              <li><strong>Data Liability:</strong> J. Brand Technologies employs industry-standard security and backup practices. However, the client is responsible for maintaining redundant, offsite backups. We are not liable for data loss due to catastrophic hardware failure, natural disasters, or cyberattacks beyond our reasonable control.</li>
              <li><strong>Right of Refusal:</strong> We reserve the right to refuse service on equipment that is obsolete (End of Life), physically hazardous, or contains illegal content.</li>
            </ul>

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
    </AppShell>
  );
}
