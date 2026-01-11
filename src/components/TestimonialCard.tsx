import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company?: string;
  avatarInitials?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  title,
  company,
  avatarInitials,
  className,
}: TestimonialProps) {
  const prefersReducedMotion = useReducedMotion();
  const initials = avatarInitials || name.split(" ").map(n => n[0]).join("").toUpperCase();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "relative p-6 lg:p-8 rounded-2xl bg-surface-container border border-outline/20",
        className
      )}
    >
      <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
      
      <blockquote className="relative z-10 pt-6">
        <p className="text-on-surface leading-relaxed mb-6">
          "{quote}"
        </p>
        
        <footer className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
            <span className="text-sm font-bold text-primary">{initials}</span>
          </div>
          <div>
            <div className="font-semibold text-on-surface">{name}</div>
            <div className="text-sm text-on-surface-variant">
              {title}
              {company && <span> • {company}</span>}
            </div>
          </div>
        </footer>
      </blockquote>
    </motion.div>
  );
}

// Placeholder testimonials section for the home page
export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Enterprise standards aren't just for big companies. Every business and home deserves reliable, secure, well-documented IT support.",
      name: "Jesse Brand",
      title: "Owner & Operator",
      company: "J. Brand Technologies",
      avatarInitials: "JB",
    },
    // Note: Add real testimonials when available
    // These are example placeholders
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-on-surface mb-4">
            Built on Trust
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Owner-operated with direct accountability. No middlemen, no runaround.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
