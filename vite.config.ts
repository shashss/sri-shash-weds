import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // This tells the TanStack engine to build static HTML files
  tanstack: {
    prerender: {
      enabled: true,
      routes: ["/"], // Add other pages here if you have them, e.g., ["/", "/venue"]
    },
  },
  // This ensures your images/links work on your GitHub URL
  vite: {
    base: '/sri-shash-weds/', 
  },
});
