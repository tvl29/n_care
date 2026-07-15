import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // Only applied for `npm run build` (production/GitHub Pages). Local dev
  // (`npm run dev`) stays on the root path, so images and other public/
  // assets resolve correctly while you're still testing before deploying.
  // Must match your GitHub repo name exactly (case-sensitive).
  base: command === 'build' ? '/n_care/' : '/',
}))
