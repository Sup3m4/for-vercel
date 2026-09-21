import type { EngineProfile } from "@/data/carDatabase";

// 1. Megnézzük, hogy egyáltalán talál-e fájlokat a glob
const modules = import.meta.glob<Record<string, any>>('./*.ts', { eager: true });
console.log("DEBUG [BMW Index]: Talált fájlok útvonalai:", Object.keys(modules));

export const bmwEngineProfiles: EngineProfile[] = [];

for (const path in modules) {
  if (!path.includes('index')) {
    const mod = modules[path];
    console.log(`DEBUG [BMW Index]: Fájl vizsgálata -> ${path}`, mod);

    for (const key in mod) {
      if (key === '__esModule') continue;

      const content = mod[key];
      console.log(`DEBUG [BMW Index]: Kulcs a fájlban: "${key}", Típusa tömb-e?: ${Array.isArray(content)}`, content);

      if (Array.isArray(content)) {
        bmwEngineProfiles.push(...content);
      } else if (content && typeof content === 'object' && 'id' in content) {
        bmwEngineProfiles.push(content as EngineProfile);
      }
    }
  }
}

console.log("DEBUG [BMW Index]: Összes sikeresen betöltött BMW elem száma:", bmwEngineProfiles.length);