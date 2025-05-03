import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', 
  },
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    host: '0.0.0.0', 
    port: 5173,    
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,    
  },
  base: '/', 
});
