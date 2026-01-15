import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  Home,
  Briefcase,
  DollarSign,
  Server,
  Shield,
  Network,
  User,
  Phone,
  Menu,
  X,
  ChevronLeft,
  Mail,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/assets/Logo.png";

interface AppShellProps {
  children: ReactNode;
}

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
  { name: "Managed IT", href: "/managed-it", icon: Server },
  { name: "Security", href: "/security", icon: Shield },
  { name: "Architecture", href: "/architecture", icon: Network },
  { name: "About", href: "/about", icon: User },
  { name: "Contact", href: "/contact", icon: Phone },
];

const footerLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jesse-h-brand/", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/JBrandTechnologies/", icon: Facebook },
];

export function AppShell({ children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  
  const drawerTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, damping: 25, stiffness: 300 };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex bg-surface">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col fixed left-0 top-0 h-full z-40 transition-all duration-300 ease-out",
          "bg-surface-container border-r border-outline/20",
          sidebarCollapsed ? "w-[72px]" : "w-[280px]"
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-outline/20">
          <Link to="/" className="flex items-center gap-3 overflow-hidden">
            <img src={Logo} alt="J. Brand Technologies" className="h-9 w-auto flex-shrink-0" />
            {!sidebarCollapsed && (
              <span className="font-semibold text-on-surface whitespace-nowrap">
                J. Brand Tech
              </span>
            )}
          </Link>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1.5 rounded-md hover:bg-surface-variant/50 text-on-surface-variant transition-colors"
            aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <ChevronLeft className={cn("h-5 w-5 transition-transform", sidebarCollapsed && "rotate-180")} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto" aria-label="Main navigation">
          <ul className="space-y-1 px-3">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    "hover:bg-surface-variant/50",
                    isActive(item.href)
                      ? "bg-primary/15 text-primary"
                      : "text-on-surface-variant hover:text-on-surface"
                  )}
                  title={sidebarCollapsed ? item.name : undefined}
                >
                  <item.icon className={cn("h-5 w-5 flex-shrink-0", isActive(item.href) && "text-primary")} />
                  {!sidebarCollapsed && <span className="font-medium">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-outline/20">
          {!sidebarCollapsed && (
            <>
              <div className="text-xs text-on-surface-variant mb-4">
                <div className="font-semibold text-on-surface mb-2 text-sm">J. Brand Technologies</div>
                <div className="font-medium text-primary/80 mb-1">Enterprise Standards. Local Service.</div>
                <div className="leading-relaxed">Proudly serving Midland, Gladwin, and Clare Counties.</div>
                <div className="mt-1">Sanford, MI Area • 989-430-3848</div>
              </div>
              {/* Social Links */}
              <div className="flex gap-3 mb-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface-variant/50 hover:bg-primary/15 text-on-surface-variant hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <div className="text-xs text-on-surface-variant mb-2">
                © 2026 J. Brand Technologies. Serving Central Michigan.
              </div>
              <div className="flex gap-4 text-xs text-on-surface-variant">
                {footerLinks.map((link) => (
                  <Link key={link.name} to={link.href} className="hover:text-on-surface transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 bg-surface-container/95 backdrop-blur-lg border-b border-outline/20">
        <div className="flex items-center justify-between h-full px-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="J. Brand Technologies" className="h-8 w-auto" />
            <span className="font-semibold text-on-surface text-sm">J. Brand Tech</span>
          </Link>
          
          <a
            href="tel:989-430-3848"
            className="p-2 -mr-2 text-primary hover:text-primary/80 transition-colors"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <motion.aside
              initial={prefersReducedMotion ? { x: 0 } : { x: "-100%" }}
              animate={{ x: 0 }}
              exit={prefersReducedMotion ? { x: 0 } : { x: "-100%" }}
              transition={drawerTransition}
              className="lg:hidden fixed left-0 top-0 bottom-0 z-50 w-[280px] bg-surface-container"
            >
              <div className="h-14 flex items-center justify-between px-4 border-b border-outline/20">
                <Link to="/" onClick={() => setSidebarOpen(false)} className="flex items-center gap-2">
                  <img src={Logo} alt="J. Brand Technologies" className="h-8 w-auto" />
                  <span className="font-semibold text-on-surface">J. Brand Tech</span>
                </Link>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="py-4" aria-label="Mobile navigation">
                <ul className="space-y-1 px-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-3 py-3 rounded-lg transition-all",
                          isActive(item.href)
                            ? "bg-primary/15 text-primary"
                            : "text-on-surface-variant hover:bg-surface-variant/50 hover:text-on-surface"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-outline/20 bg-surface-container">
                <div className="space-y-3">
                  <a
                    href="tel:989-430-3848"
                    className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>989-430-3848</span>
                  </a>
                  <a
                    href="mailto:jesse.h.brand@gmail.com"
                    className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>jesse.h.brand@gmail.com</span>
                  </a>
                </div>
                {/* Social Links */}
                <div className="flex gap-3 mb-3 mt-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-surface-variant/50 hover:bg-primary/15 text-on-surface-variant hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <div className="text-xs text-on-surface-variant mb-2">
                  © 2026 J. Brand Technologies. Serving Central Michigan.
                </div>
                <div className="flex gap-4 text-xs text-on-surface-variant">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setSidebarOpen(false)}
                      className="hover:text-on-surface transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 min-h-screen transition-all duration-300",
          "pt-14 lg:pt-0",
          sidebarCollapsed ? "lg:pl-[72px]" : "lg:pl-[280px]"
        )}
      >
        {children}
      </main>
    </div>
  );
}
