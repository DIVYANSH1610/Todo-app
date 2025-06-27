import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Todo-app/', // 👈 This is required!
  plugins: [react()],
})
