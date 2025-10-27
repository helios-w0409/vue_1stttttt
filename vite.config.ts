import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
<<<<<<< HEAD
// import vueDevTools from 'vite-plugin-vue-devtools'
=======
import vueDevTools from 'vite-plugin-vue-devtools'
>>>>>>> a22ff369f140829cab5940448bde39a3a3d8ff77

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
<<<<<<< HEAD
    // vueDevTools(),
=======
    vueDevTools(),
>>>>>>> a22ff369f140829cab5940448bde39a3a3d8ff77
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
