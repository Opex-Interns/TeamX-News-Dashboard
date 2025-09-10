import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import.meta.env.VITE_NEWSDATA_API_KEY


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
})
