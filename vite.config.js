import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
      '@pages': path.resolve(process.cwd(), './src/pages'),
      '@components': path.resolve(process.cwd(), './src/components'),
      '@utils': path.resolve(process.cwd(), './src/utils'),
      '@tests': path.resolve(process.cwd(), './src/tests')
    },
  },
})
