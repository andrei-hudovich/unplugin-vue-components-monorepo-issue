import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components({
      dts: true,
      dirs: ['src/components']
    })
  ],
  resolve: {
    alias: {
      '@shared': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5174
  }
})
