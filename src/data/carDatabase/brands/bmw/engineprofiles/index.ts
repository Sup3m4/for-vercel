import type { EngineProfile } from "@/data/carDatabase";

// 1. Megnézzük, hogy egyáltalán talál-e fájlokat a glob
const modules = import.meta.glob<Record<string, any>>('./*.ts', { eager: true });


export const bmwEngineProfiles: EngineProfile[] = [];

for (const path in modules) {
  if (!path.includes('index')) {
    const mod = modules[path];
   

    for (const key in mod) {
      if (key === '__esModule') continue;

      const content = mod[key];
     

      if (Array.isArray(content)) {
        bmwEngineProfiles.push(...content);
      } else if (content && typeof content === 'object' && 'id' in content) {
        bmwEngineProfiles.push(content as EngineProfile);
      }
    }
  }
}

