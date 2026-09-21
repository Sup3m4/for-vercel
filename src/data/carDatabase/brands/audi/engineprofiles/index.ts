import type { EngineProfile } from "@/data/carDatabase";

const modules = import.meta.glob<{ default: EngineProfile | EngineProfile[] }>('./*.ts', { eager: true });

export const audiEngineProfiles: EngineProfile[] = [];

for (const path in modules) {
  if (!path.includes('index')) {
    const mod = modules[path];
    const content = mod?.default;

    if (content) {
      if (Array.isArray(content)) {
        audiEngineProfiles.push(...content);
      } else {
        audiEngineProfiles.push(content);
      }
    }
  }
}