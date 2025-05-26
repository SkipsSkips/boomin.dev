import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: "./",
=======
  base: "/",
>>>>>>> b5bfd99 (Initial commit)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
