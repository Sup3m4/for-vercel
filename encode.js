import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'public/images/brands/audi/A3/8V/8v.glb');
const outputPath = path.join(__dirname, 'public/images/brands/audi/A3/8V/8v.dat');
const XOR_KEY = 0xAA;

try {
    const buffer = fs.readFileSync(inputPath);
    for (let i = 0; i < buffer.length; i++) {
        buffer[i] = buffer[i] ^ XOR_KEY;
    }
    fs.writeFileSync(outputPath, buffer);
    console.log('✅ Audi modell sikeresen titkosítva .dat formátumra!');
} catch (error) {
    console.error('❌ Hiba történt:', error.message);
}