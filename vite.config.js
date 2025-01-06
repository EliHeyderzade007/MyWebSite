import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT,
  },
  plugins: [vercel()],
  define: {
    'process.env.VITE_KEY': JSON.stringify(process.env.VITE_KEY)
  }
})
