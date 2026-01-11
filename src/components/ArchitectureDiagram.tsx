import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ArchitectureDiagram() {
  const prefersReducedMotion = useReducedMotion();
  
  const fadeIn = prefersReducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
    : {};
  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 800 500"
        className="w-full h-auto"
        role="img"
        aria-label="System architecture diagram showing data flow from client inputs through processing to outputs"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(231, 88%, 62%)" />
            <stop offset="100%" stopColor="hsl(231, 88%, 45%)" />
          </linearGradient>
          <linearGradient id="tertiaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(175, 97%, 69%)" />
            <stop offset="100%" stopColor="hsl(175, 97%, 50%)" />
          </linearGradient>
          <linearGradient id="surfaceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 20%, 12%)" />
            <stop offset="100%" stopColor="hsl(220, 15%, 8%)" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Arrow marker */}
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="hsl(175, 97%, 69%)"
            />
          </marker>
        </defs>

        {/* Background */}
        <rect width="800" height="500" fill="hsl(220, 15%, 4%)" rx="16" />

        {/* Grid pattern */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="hsl(175, 97%, 69%)"
            strokeWidth="0.5"
            strokeOpacity="0.05"
          />
        </pattern>
        <rect width="800" height="500" fill="url(#grid)" />

        {/* Section Labels */}
        <text x="130" y="50" fill="hsl(210, 10%, 60%)" fontSize="12" fontWeight="600" textAnchor="middle">
          INPUTS
        </text>
        <text x="400" y="50" fill="hsl(210, 10%, 60%)" fontSize="12" fontWeight="600" textAnchor="middle">
          PROCESSING
        </text>
        <text x="670" y="50" fill="hsl(210, 10%, 60%)" fontSize="12" fontWeight="600" textAnchor="middle">
          OUTPUTS
        </text>

        {/* Input Nodes */}
        <g>
          {/* Client Devices */}
          <motion.g
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <rect x="50" y="100" width="160" height="60" rx="12" fill="url(#surfaceGradient)" stroke="hsl(231, 88%, 62%)" strokeWidth="2" />
            <text x="130" y="125" fill="hsl(210, 15%, 90%)" fontSize="14" fontWeight="600" textAnchor="middle">Client Devices</text>
            <text x="130" y="145" fill="hsl(210, 10%, 60%)" fontSize="11" textAnchor="middle">Endpoints & Workstations</text>
          </motion.g>

          {/* Network Infrastructure */}
          <motion.g
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <rect x="50" y="180" width="160" height="60" rx="12" fill="url(#surfaceGradient)" stroke="hsl(231, 88%, 62%)" strokeWidth="2" />
            <text x="130" y="205" fill="hsl(210, 15%, 90%)" fontSize="14" fontWeight="600" textAnchor="middle">Network</text>
            <text x="130" y="225" fill="hsl(210, 10%, 60%)" fontSize="11" textAnchor="middle">Routers & Firewalls</text>
          </motion.g>

          {/* Logs & Data */}
          <motion.g
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <rect x="50" y="260" width="160" height="60" rx="12" fill="url(#surfaceGradient)" stroke="hsl(231, 88%, 62%)" strokeWidth="2" />
            <text x="130" y="285" fill="hsl(210, 15%, 90%)" fontSize="14" fontWeight="600" textAnchor="middle">Logs & Events</text>
            <text x="130" y="305" fill="hsl(210, 10%, 60%)" fontSize="11" textAnchor="middle">Audit Trails</text>
          </motion.g>
        </g>

        {/* Processing Engine */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <rect x="300" y="120" width="200" height="200" rx="20" fill="url(#surfaceGradient)" stroke="hsl(175, 97%, 69%)" strokeWidth="2" filter="url(#glow)" />
          <text x="400" y="165" fill="hsl(175, 97%, 69%)" fontSize="16" fontWeight="700" textAnchor="middle">J. Brand Tech</text>
          <text x="400" y="190" fill="hsl(175, 97%, 69%)" fontSize="14" fontWeight="600" textAnchor="middle">Processing Engine</text>
          
          {/* Engine steps */}
          <text x="400" y="230" fill="hsl(210, 10%, 60%)" fontSize="11" textAnchor="middle">• Discovery & Assessment</text>
          <text x="400" y="250" fill="hsl(210, 10%, 60%)" fontSize="11" textAnchor="middle">• Security Analysis</text>
          <text x="400" y="270" fill="hsl(210, 10%, 60%)" fontSize="11" textAnchor="middle">• Policy Enforcement</text>
          <text x="400" y="290" fill="hsl(210, 10%, 60%)" fontSize="11" textAnchor="middle">• Documentation</text>
        </motion.g>

        {/* Output Nodes */}
        <g>
          {/* Reports */}
          <motion.g
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <rect x="590" y="100" width="160" height="60" rx="12" fill="url(#surfaceGradient)" stroke="hsl(175, 97%, 69%)" strokeWidth="2" />
            <text x="670" y="125" fill="hsl(210, 15%, 90%)" fontSize="14" fontWeight="600" textAnchor="middle">Audit Reports</text>
            <text x="670" y="145" fill="hsl(210, 10%, 60%)" fontSize="11" textAnchor="middle">Security & Compliance</text>
          </motion.g>

          {/* Actions */}
          <motion.g
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <rect x="590" y="180" width="160" height="60" rx="12" fill="url(#surfaceGradient)" stroke="hsl(175, 97%, 69%)" strokeWidth="2" />
            <text x="670" y="205" fill="hsl(210, 15%, 90%)" fontSize="14" fontWeight="600" textAnchor="middle">Remediation</text>
            <text x="670" y="225" fill="hsl(210, 10%, 60%)" fontSize="11" textAnchor="middle">Automated Actions</text>
          </motion.g>

          {/* Documentation */}
          <motion.g
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <rect x="590" y="260" width="160" height="60" rx="12" fill="url(#surfaceGradient)" stroke="hsl(175, 97%, 69%)" strokeWidth="2" />
            <text x="670" y="285" fill="hsl(210, 15%, 90%)" fontSize="14" fontWeight="600" textAnchor="middle">Documentation</text>
            <text x="670" y="305" fill="hsl(210, 10%, 60%)" fontSize="11" textAnchor="middle">Full Audit Trail</text>
          </motion.g>
        </g>

        {/* Flow Arrows - Input to Processing */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <line x1="210" y1="130" x2="290" y2="180" stroke="hsl(175, 97%, 69%)" strokeWidth="2" strokeOpacity="0.6" markerEnd="url(#arrowhead)" />
          <line x1="210" y1="210" x2="290" y2="210" stroke="hsl(175, 97%, 69%)" strokeWidth="2" strokeOpacity="0.6" markerEnd="url(#arrowhead)" />
          <line x1="210" y1="290" x2="290" y2="240" stroke="hsl(175, 97%, 69%)" strokeWidth="2" strokeOpacity="0.6" markerEnd="url(#arrowhead)" />
        </motion.g>

        {/* Flow Arrows - Processing to Output */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <line x1="510" y1="180" x2="580" y2="130" stroke="hsl(175, 97%, 69%)" strokeWidth="2" strokeOpacity="0.6" markerEnd="url(#arrowhead)" />
          <line x1="510" y1="210" x2="580" y2="210" stroke="hsl(175, 97%, 69%)" strokeWidth="2" strokeOpacity="0.6" markerEnd="url(#arrowhead)" />
          <line x1="510" y1="240" x2="580" y2="290" stroke="hsl(175, 97%, 69%)" strokeWidth="2" strokeOpacity="0.6" markerEnd="url(#arrowhead)" />
        </motion.g>

        {/* Footer text */}
        <text x="400" y="400" fill="hsl(210, 10%, 50%)" fontSize="11" textAnchor="middle">
          Security-first design • Least privilege • Audit-ready outputs
        </text>
        
        {/* Local service area */}
        <text x="400" y="430" fill="hsl(210, 10%, 40%)" fontSize="10" textAnchor="middle">
          Serving Midland, Gladwin & Clare Counties | Based in Sanford, MI
        </text>
      </svg>
    </div>
  );
}
