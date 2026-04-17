import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Custom domain (e.g. hairatwoodmans.co.uk) is served at the site root → base '/'.
// Only if you use the default URL https://<user>.github.io/<repo>/ (no custom domain),
// set VITE_BASE_PATH=/<repo>/ when building.
export default defineConfig(({ command }) => {
  const base =
    command === 'serve'
      ? '/'
      : process.env.VITE_BASE_PATH ?? '/';

  return {
    base,
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
