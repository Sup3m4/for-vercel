import type { EngineProfile } from "@/data/carDatabase";

const modules = import.meta.glob<Record<string, any>>('./*.ts', { eager: true });

export const bmwEngineProfiles: EngineProfile[] = Object.keys(modules)
  .filter(path => !path.includes('index'))
  .flatMap(path => {
    const mod = modules[path];

    // 1. Ha default exportot használsz
    if (mod.default) {
      return Array.isArray(mod.default) ? mod.default : [mod.default];
    }

    // 2. Ha named exportot használsz (pl. export const bmwB47 = {...})
    return Object.keys(mod)
      .filter(key => key !== '__esModule')
      .map(key => mod[key])
      .flatMap(content => Array.isArray(content) ? content : [content])
      // CSAK azokat az objektumokat engedjük át, amiknek van 'id' mezője (vagyis biztosan profilok)
      .filter(content => content && typeof content === 'object' && 'id' in content); 
  }) as EngineProfile[];