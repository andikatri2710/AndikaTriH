import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' makes assets resolve relatively, so the build works both on
// USERNAME.github.io/ and USERNAME.github.io/REPOSITORY/ without changes.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
