import type { EngineProfile } from "@/data/carDatabase";

// Dinamikusan, különálló darabokká (chunkokká) bontva töltjük be a fájlokat
const profileModules = import.meta.glob<{ [key: string]: EngineProfile[] } | EngineProfile[]>('./*.ts', { eager: false });

export async function getBmwEngineProfiles(): Promise<EngineProfile[]> {
  const allProfiles: EngineProfile[] = [];

  for (const path in profileModules) {
    if (!path.includes('index')) {
      const mod = await profileModules[path]();
      // Ha export default vagy névadó export van a fájlban
      const content = 'default' in mod ? mod.default : Object.values(mod)[0];
      
      if (Array.isArray(content)) {
        allProfiles.push(...content);
      } else if (content) {
        allProfiles.push(content as EngineProfile);
      }
    }
  }

  return allProfiles;
}