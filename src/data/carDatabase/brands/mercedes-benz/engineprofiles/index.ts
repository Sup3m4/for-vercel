import type { EngineProfile } from "@/data/carDatabase";

// Dinamikusan, különálló darabokká bontva tölti be a mappában lévő ts fájlokat
const profileModules = import.meta.glob<{ [key: string]: EngineProfile[] } | EngineProfile[]>('./*.ts', { eager: false });

export async function getMercedesEngineProfiles(): Promise<EngineProfile[]> {
  const allProfiles: EngineProfile[] = [];

  for (const path in profileModules) {
    if (!path.includes('index')) {
      const mod = await profileModules[path]();
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