import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/learn-redux-toolkit/practicing-to-deploy',
  plugins: [react()],
})
