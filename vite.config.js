import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    assetsInclude: ['**/*.JPEG'],
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..'],
      },
      // Try to use port 5147 but allow fallback to other ports
      port: 5147,
      strictPort: false,
      cors: true, // Enable CORS for all requests
    },
    build: {
      // Ensure proper handling of JSX files
      rollupOptions: {
        input: {
          main: './index.html',
        },
        output: {
          // Ensure proper MIME types for JavaScript modules
          format: 'es',
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },
    },
  };

  // Base path - use root path for custom domain
  config.base = '/';

  return config;
});
