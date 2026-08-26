import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TARGET_DIR = path.join(__dirname, 'public', 'images', 'brands');

console.log(`🧹 Takarítás indítva: ${TARGET_DIR}`);

if (!fs.existsSync(TARGET_DIR)) {
  console.error(`❌ HIBA: A mappa nem létezik: ${TARGET_DIR}`);
  process.exit(1);
}

let deletedCount = 0;

function cleanFolder(currentDir) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      cleanFolder(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      
      // Ha NEM .dat fájl (tehát a maradék .glb vagy kiterjesztés nélküli 3D objektum), akkor töröljük!
      if (ext !== '.dat') {
        fs.unlinkSync(fullPath);
        console.log(`🗑️ Törölve: ${path.relative(TARGET_DIR, fullPath)}`);
        deletedCount++;
      }
    }
  });
}

cleanFolder(TARGET_DIR);
console.log(`\n✅ Kész! Összesen ${deletedCount} db felesleges fájl lett törölve.`);