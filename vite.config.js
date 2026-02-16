import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Добавьте эту строку. Название должно СТРОГО совпадать с именем репозитория на GitHub
  base: '/headphones-big/', 
})