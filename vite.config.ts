// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/JakeRiggsProductions_Website/', // Your repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})