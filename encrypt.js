import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname pótlása ES modulban
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const XOR_KEY = 0xAA; 
const TARGET_DIR = path.join(__dirname, 'public', 'images', 'brands');

console.log(`🔍 Keresés indítása a 'brands' mappában: ${TARGET_DIR}`);

if (!fs.existsSync(TARGET_DIR)) {
  console.error(`❌ HIBA: A 'brands' mappa nem létezik ezen az útvonalon: ${TARGET_DIR}`);
  process.exit(1);
}

let totalProcessed = 0;

function walkAndEncrypt(currentDir) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      // Rekurzívan bejárja az összes almappát
      walkAndEncrypt(fullPath);
    } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.glb') {
      const outputPath = fullPath.replace(/\.glb$/i, '.dat');

      try {
        const buffer = fs.readFileSync(fullPath);
        
        // XOR titkosítás bájtszinten
        for (let i = 0; i < buffer.length; i++) {
          buffer[i] = buffer[i] ^ XOR_KEY;
        }
        
        fs.writeFileSync(outputPath, buffer);
        console.log(`🔒 Titkosítva: ${path.relative(TARGET_DIR, fullPath)} ➡️ .dat`);
        totalProcessed++;
      } catch (error) {
        console.error(`❌ Hiba a(z) ${entry.name} fájl titkosításakor:`, error);
      }
    }
  });
}

walkAndEncrypt(TARGET_DIR);
console.log(`\n✅ Kész! Összesen ${totalProcessed} db .glb fájl lett automatikusan feldolgozva a mappákban.`);