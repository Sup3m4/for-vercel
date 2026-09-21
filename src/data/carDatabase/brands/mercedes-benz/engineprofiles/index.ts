import type { EngineProfile } from "@/data/carDatabase";

const modules = import.meta.glob<Record<string, any>>('./*.ts', { eager: true });

export const mercedesEngineProfiles: EngineProfile[] = [];

for (const path in modules) {
  if (!path.includes('index')) {
    const mod = modules[path];

    if (mod.default) {
      if (Array.isArray(mod.default)) mercedesEngineProfiles.push(...mod.default);
      else mercedesEngineProfiles.push(mod.default);
      continue;
    }

    for (const key in mod) {
      if (key === '__esModule') continue;

      const content = mod[key];
      if (Array.isArray(content)) {
        mercedesEngineProfiles.push(...content);
      } else if (content && typeof content === 'object') {
        mercedesEngineProfiles.push(content as EngineProfile);
      }
    }
  }
}