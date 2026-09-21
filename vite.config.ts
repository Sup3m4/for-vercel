import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import obfuscator from 'rollup-plugin-obfuscator';

export default defineConfig(({ mode }) => {
  // Megnézzük, hogy a Cloudflare környezetében vagyunk-e (a Cloudflare automatikusan beállítja a CF_PAGES=1 változót)
  const isCloudflare = process.env.CF_PAGES === '1';

  return {
    plugins: [
      react(),
      // AZ ÚJ LOGIKA: Csak akkor zavarja össze a kódot, ha nem a Cloudflare-en vagyunk
      mode === 'production' && !isCloudflare && obfuscator({
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        disableConsoleOutput: false,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: false,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        stringArrayThreshold: 0.75,
        exclude: [/node_modules/]
      } as any),
    ].filter(Boolean),
    build: {
      chunkSizeWarningLimit: 10000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('three') || id.includes('@react-three') || id.includes('fiber')) {
                return 'v-3d';
              }
              return 'v-core';
            }
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
  };
});