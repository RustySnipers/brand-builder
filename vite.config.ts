import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "vite-plugin-prerender";

// Routes to pre-render for SEO
const prerenderRoutes = [
  "/",
  "/services",
  "/pricing",
  "/managed-it",
  "/security",
  "/architecture",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      prerender({
        staticDir: path.resolve(__dirname, "dist"),
        routes: prerenderRoutes,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
