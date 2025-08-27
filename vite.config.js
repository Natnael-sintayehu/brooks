import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/brook/", // 👈 repo name (important for GitHub Pages)
  build: {
    outDir: "docs", // GitHub Pages expects /docs in main branch
  },
});
