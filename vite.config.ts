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
        exclude: [/node_modules/]
      } as any),
    ].filter(Boolean),
    build: {
      chunkSizeWarningLimit: 10000,
      rollupOptions: {
        output: {
          // Ez a finomhangolt logika megakadályozza az ezer fájl létrejöttét
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // Ha Three.js-t vagy ehhez kapcsolódó 3D csomagot talál, azt egyetlen különálló "vendor-3d" fájlba gyűjti
              if (id.includes('three') || id.includes('@react-three') || id.includes('fiber')) {
                return 'vendor-3d';
              }
              // Minden más egyéb külső alapcsomagot (pl. React) egyetlen közös "vendor-core" fájlba rak
              return 'vendor-core';
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
