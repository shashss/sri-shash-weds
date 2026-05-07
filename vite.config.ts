import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // This passes the "base" path to Vite so it knows it's in a subfolder
  vite: {
    base: '/sri-shash-weds/',
  },
  // This tells the TanStack Start plugin (which Lovable already included) to pre-render
  tanstack: {
    prerender: {
      enabled: true,
    },
  },
});
