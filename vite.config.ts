import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React és node_modules külső függőségek külön fájlba
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          
          // CSAK a konkrét motorprofil adatfájlokat daraboljuk szét egyesével!
          // Az index.ts fájlokat szándékosan kihagyjuk, hogy a futási sorrend ne boruljon fel
          if (id.includes('/engineprofiles/') && !id.endsWith('index.ts')) {
            const pathParts = id.split('/');
            // Fájlnév kinyerése (pl. "1series")
            const filename = pathParts.pop()?.replace('.ts', '') || 'data';
            // Márkanév kinyerése (pl. "bmw") - az "engineprofiles" előtti mappa
            const brand = pathParts[pathParts.length - 2]; 
            
            // Így minden egyes széria külön kis fájl lesz (pl. data-bmw-1series, data-audi-a3)
            return `data-${brand}-${filename}`;
          }
        }
      }
    },
    chunkSizeWarningLimit: 2000,
  }
})