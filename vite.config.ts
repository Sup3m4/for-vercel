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
      chunkSizeWarningLimit: 100000, // Teljesen kikapcsolja a méretbeli figyelmeztetéseket helyben
      rollupOptions: {
        output: {
          // Biztosítjuk, hogy a kimeneti fájlok elnevezése tiszta maradjon a build során
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
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