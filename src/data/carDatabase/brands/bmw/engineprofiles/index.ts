import type { EngineProfile } from "@/data/carDatabase";

const modules = import.meta.glob<{ default?: EngineProfile[] | EngineProfile, [key: string]: any }>('./*.ts', { eager: true });

export const bmwEngineProfiles: EngineProfile[] = [];

for (const path in modules) {
  if (!path.includes('index')) {
    const mod = modules[path];
    const content = mod.default || Object.values(mod)[0];
    if (Array.isArray(content)) {
      bmwEngineProfiles.push(...content);
    } else if (content) {
      bmwEngineProfiles.push(content as EngineProfile); //sdsd
    }
  }
}