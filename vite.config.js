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
  base: '/',  // Define the base path for your app (update this for deployment if necessary)
});
