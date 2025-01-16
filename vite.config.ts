import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures proper base path for deployment
  optimizeDeps: {
    exclude: ['lucide-react'], // Keep this as per your requirements
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Split large dependencies into separate chunks
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the chunk size limit to avoid warnings
    assetsInlineLimit: 0, // Disable asset inlining to ensure all assets are in separate files
  },
  server: {
    open: true, // Automatically open the browser when the dev server starts
  },
});