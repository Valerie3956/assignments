import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/bounty': {
        target: 'http://127.0.0.1:6600',
        changeOrigin: true,
        secure: false,
      },
    },
    port: 5173,
  },
});

