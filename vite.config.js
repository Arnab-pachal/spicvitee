import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // Specifies the output directory for the build
  },
  css: {
    postcss: './postcss.config.js',  // Optional, if you want to explicitly specify PostCSS config
  },
  preview: {
    port: 8080, // Replace with the port your application should listen on
  },
  base: '/',  // Define the base path for your app (update this for deployment if necessary)
});
