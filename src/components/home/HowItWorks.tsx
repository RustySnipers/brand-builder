import { MessageSquare, Search, FileCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Contact",
    description: "Reach out by phone, email, or our contact form. Describe your issue or project needs.",
  },
  {
    icon: Search,
    step: "02",
    title: "Diagnose & Plan",
    description: "We assess the situation, provide transparent pricing, and outline a clear path forward.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Fix & Document",
    description: "We resolve the issue, document everything, and ensure you understand what was done.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, straightforward, and transparent from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <div className="text-center">
                <div className="relative inline-flex">
                  <div className="w-24 h-24 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center mb-6 mx-auto">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal text-teal-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
