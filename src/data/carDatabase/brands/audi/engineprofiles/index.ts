import type { EngineProfile } from "@/data/carDatabase";

// 1. Betöltjük az adott mappa összes .ts fájlját
const modules = import.meta.glob<Record<string, any>>('./*.ts', { eager: true });

// 2. ITT NEVEZD ÁT A MÁRKÁDNAK MEGFELELŐEN:
// (pl. bmwEngineProfiles, audiEngineProfiles, vagy mercedesEngineProfiles)
export const audiEngineProfiles: EngineProfile[] = [];

for (const path in modules) {
  if (!path.includes('index')) {
    const mod = modules[path];

    // Végigmegyünk a fájlban lévő összes exporton
    for (const key in mod) {
      if (key === '__esModule') continue;

      const content = mod[key];
      
      // Ha a fájlban egy tömb van (pl. export const firstseriesProfiles = [...] ), kibontjuk
      if (Array.isArray(content)) {
        audiEngineProfiles.push(...content);
      } else if (content && typeof content === 'object' && 'id' in content) {
        audiEngineProfiles.push(content as EngineProfile);
      }
    }
  }
}