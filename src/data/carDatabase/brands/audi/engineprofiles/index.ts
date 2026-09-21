import type { EngineProfile } from "@/data/carDatabase";

const modules = import.meta.glob<Record<string, any>>('./*.ts', { eager: true });

export const audiEngineProfiles: EngineProfile[] = Object.keys(modules)
  .filter(path => !path.includes('index'))
  .flatMap(path => {
    const mod = modules[path];

    if (mod.default) {
      return Array.isArray(mod.default) ? mod.default : [mod.default];
    }

    return Object.keys(mod)
      .filter(key => key !== '__esModule')
      .map(key => mod[key])
      .flatMap(content => Array.isArray(content) ? content : [content])
      .filter(content => content && typeof content === 'object' && 'id' in content); 
  }) as EngineProfile[];