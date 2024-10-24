import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows Vite to listen on all local IP addresses
    port: 3000, // Optional: you can specify a port or leave it to the default 5173
  }
})

