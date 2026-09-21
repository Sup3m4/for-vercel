import type { EngineProfile } from "@/data/carDatabase";

const modules = import.meta.glob<{ default?: EngineProfile[] | EngineProfile, [key: string]: any }>('./*.ts', { eager: true });

export const mercedesEngineProfiles: EngineProfile[] = [];

for (const path in modules) {
  if (!path.includes('index')) {
    const mod = modules[path];
    const content = mod.default || Object.values(mod)[0];
    if (Array.isArray(content)) {
      mercedesEngineProfiles.push(...content);
    } else if (content) {
      mercedesEngineProfiles.push(content as EngineProfile);
    }
  }
}