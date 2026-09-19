import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  return {
    plugins: [react()],
    base: process.env.VITE_BASE_PATH || '/project-card/',  // Match the repository name for GitHub Pages
    server: {
      port: 3008,
      open: true
    },
    build: {
      outDir: 'dist',
      sourcemap: true
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@asafarim/project-card': resolve(__dirname, '..')
      }
    },
  };
})