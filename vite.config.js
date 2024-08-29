import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://github.com/Calebcai/invite',
  server: {
    port: 3000,
    host: true,
  },
  publicDir: 'public',
  css: {
    modules: true
  }
})
