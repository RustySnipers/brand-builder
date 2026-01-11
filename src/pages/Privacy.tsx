import { AppShell } from "@/components/layout/AppShell";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <AppShell>
      <Helmet>
        <title>Privacy Policy | J. Brand Technologies</title>
        <meta name="description" content="Privacy policy for J. Brand Technologies. Learn how we collect, use, and protect your information." />
        <link rel="canonical" href="https://jbrandtech.com/privacy" />
      </Helmet>

      <section className="hero-gradient py-16">
        <div className="section-container">
          <h1 className="text-4xl font-bold text-primary-foreground">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="max-w-3xl prose prose-slate">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: January 2025
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              When you contact us or use our services, we may collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Contact information (name, email, phone number)</li>
              <li>Location information (city, county for service area verification)</li>
              <li>Device and system information relevant to service requests</li>
              <li>Business information for commercial clients</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Provide IT services and support</li>
              <li>Communicate about your service requests</li>
              <li>Send invoices and process payments</li>
              <li>Maintain service documentation</li>
              <li>Improve our services</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate technical and organizational measures to protect your personal information. This includes encrypted communications, secure data storage, and access controls.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Retention</h2>
            <p className="text-muted-foreground mb-6">
              We retain service documentation and client records as long as necessary to provide ongoing support and comply with legal obligations. You may request deletion of your data by contacting us directly.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground mb-6">
              We may use third-party tools for remote support (TeamViewer, AnyDesk), payment processing (Stripe, QuickBooks), and monitoring (RMM platforms). These services have their own privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact</h2>
            <p className="text-muted-foreground">
              For questions about this privacy policy or your data, contact:<br />
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
