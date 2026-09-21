import type { EngineProfile } from "@/data/carDatabase";

// Beolvassuk az összes .ts fájlt ebből a mappából
const modules = import.meta.glob<{ default: EngineProfile | EngineProfile[] }>('./*.ts', { eager: true });

export const bmwEngineProfiles: EngineProfile[] = [];

for (const path in modules) {
  if (!path.includes('index')) {
    const mod = modules[path];
    const content = mod?.default; // Csak a default exportra támaszkodunk

    if (content) {
      if (Array.isArray(content)) {
        bmwEngineProfiles.push(...content);
      } else {
        bmwEngineProfiles.push(content);
      }
    }
  }
}