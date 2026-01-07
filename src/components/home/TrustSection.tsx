import { Award, FileText, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Enterprise Experience",
    description: "Background in enterprise systems analysis, cybersecurity operations, and cloud infrastructure.",
  },
  {
    icon: FileText,
    title: "Documentation-First",
    description: "Every job is documented thoroughly so you always know what was done and why.",
  },
  {
    icon: Shield,
    title: "Security Baseline",
    description: "Security best practices applied by default, not as an afterthought.",
  },
  {
    icon: Users,
    title: "Owner-Operated",
    description: "Work directly with Jesse Brand. No middlemen, no runaround.",
  },
];

export function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Built on Enterprise Experience
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              J. Brand Technologies brings enterprise-level IT expertise to homes and small businesses. You get the same rigorous standards that large organizations demand, delivered with the personal attention of a local provider.
            </p>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl hero-gradient p-8 lg:p-12">
              <div className="h-full flex flex-col justify-center text-primary-foreground">
                <blockquote className="text-xl lg:text-2xl font-medium mb-6">
                  "Enterprise standards aren't just for big companies. Every business and home deserves reliable, secure, well-documented IT support."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <span className="text-lg font-bold">JB</span>
                  </div>
                  <div>
                    <div className="font-semibold">Jesse Brand</div>
                    <div className="text-sm text-primary-foreground/80">Owner & Operator</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
