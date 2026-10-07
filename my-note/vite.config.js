import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 網址為 https://xiedailing.github.io/ispan_vue.js/
  base: '/ispan_vue.js/',
  plugins: [vue()],
})
