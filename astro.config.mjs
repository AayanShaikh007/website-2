import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
 devToolbar: { enabled: false },
 vite: {
  plugins: [tailwindcss()],
  // Prepare the optional viewer before the first click, avoiding stale late-created dependency URLs.
  optimizeDeps: { include: ['@google/model-viewer'] },
 },
});
