import { defineConfig } from 'vite'
import { resolve } from 'path'


import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);


export default defineConfig({
  plugins: [
  ],
  optimizeDeps: {
    include: ['vue', '@vueuse/core', 'tone', 'tonal', 'colord'],
  },
  publicDir: false,
  resolve: {
    alias: {
      "#": path.resolve(dirname, "../"),
    }
  },
  build: {
    outDir: "../lib",
    lib: {
      entry: resolve(dirname, './index.ts'),
      name: 'use-chromatone',
      fileName: 'use-chromatone',
      formats: ["es"],
    },
    chunkSizeWarningLimit: 100000,
    rollupOptions: {
      external: ['vue'],
      output: {
        manualChunks: {
          tone: ['tone']
        },
      },
    },
  },
})
