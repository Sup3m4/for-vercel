import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import obfuscator from 'rollup-plugin-obfuscator';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      mode === 'production' && obfuscator({
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
        // Kifejezetten megtiltjuk, hogy a node_modules-t vagy a szétvágott chunkokat bántsa
        exclude: [/node_modules/, /vendor/, /chunk/]
      } as any),
    ].filter(Boolean),
    build: {
      chunkSizeWarningLimit: 10000,
      // Kényszerítjük a Vite-et, hogy különálló fizikai fájlokba mentse a modulokat
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // Teljesen különálló fájlneveket kényszerítünk ki a külső elemeknek
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // Ha 3D könyvtár, kap egy teljesen egyedi "v-3d" nevet
              if (id.includes('three') || id.includes('@react-three') || id.includes('fiber')) {
                return 'v-3d';
              }
              // Minden más külső könyvtár egy külön "v-core" fájlba megy
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
