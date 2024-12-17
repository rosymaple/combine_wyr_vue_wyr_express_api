import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// we need to create a proxy to pass our API request messages to the Express server
// must configure Vite dev server, it will be our proxy
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // requests to http://localhost:5173/wyr to go to http://localhost:3000/wyr
      '/wyr': 'http://localhost:3000/'
    }
  }
})
