import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components({
      // `../../packages/shared/src/components` - this works only on project startup, 
      // then if you add any new component in the `packages/shared/..`, it won't be reflected in `components.d.ts`
      dirs: ['src/components', '../../packages/shared/src/components']
    })
  ],
  resolve: {
    // https://github.com/vercel/turbo/discussions/620#discussioncomment-2136195
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@shared': fileURLToPath(new URL('../../packages/shared/src', import.meta.url))
    }
  },
  server: {
    port: 5173
  }
})
