import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  // Read .env from the repo root so there's a single env file for the project
  envDir: '..',

  resolve: {
      alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
  },
})