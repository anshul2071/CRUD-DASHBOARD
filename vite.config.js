import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Set the port to 5173 (or change to a different one if required)
    open: true,  // Automatically open the browser
  },
  build: {
    outDir: 'dist',  // Set the output directory for build
  },
})
