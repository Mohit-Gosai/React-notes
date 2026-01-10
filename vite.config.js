// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/react-swc' // or @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  base: "/React-notes/", // ADD THIS LINE
})