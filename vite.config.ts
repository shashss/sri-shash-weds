import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // This tells TanStack to create a static version of your site
  tanstack: {
    prerender: {
      enabled: true,
    },
  },
  // This ensures your images and styles load at the correct URL
  vite: {
    base: '/sri-shash-weds/', 
  },
});
