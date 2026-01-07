import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ServiceCards } from "@/components/home/ServiceCards";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TrustSection } from "@/components/home/TrustSection";
import { CTABand } from "@/components/home/CTABand";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>J. Brand Technologies | Managed IT, Cybersecurity & PC Repair</title>
        <meta name="description" content="Enterprise-grade IT services for homes and small businesses in Midland, Gladwin, and Clare Counties. Managed IT, cybersecurity, and PC repair with transparent pricing." />
        <meta property="og:title" content="J. Brand Technologies | Enterprise Standards. Local Service." />
        <meta property="og:description" content="Managed IT, cybersecurity, and PC repair for homes and small businesses in Central Michigan." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://jbrandtech.com" />
      </Helmet>
      
      <Hero />
      <ServiceCards />
      <HowItWorks />
      <TrustSection />
      <CTABand />
    </Layout>
  );
};

export default Index;
