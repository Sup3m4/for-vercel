import type { EngineProfile } from "@/data/carDatabase";

const modules = import.meta.glob<Record<string, any>>('./*.ts', { eager: true });

export const bmwEngineProfiles: EngineProfile[] = [];

for (const path in modules) {
  if (!path.includes('index')) {
    const mod = modules[path];

    // 1. Ha véletlenül van default export, használjuk azt
    if (mod.default) {
      if (Array.isArray(mod.default)) {
        bmwEngineProfiles.push(...mod.default);
      } else {
        bmwEngineProfiles.push(mod.default);
      }
      continue;
    }

    // 2. Ha nincs default (named exportokat használsz), akkor végigmegyünk az exportokon
    for (const key in mod) {
      // KISZŰRJÜK az éles környezet (Rollup) által beletett belső jelölőt, ami a hibát okozta!
      if (key === '__esModule') continue;

      const content = mod[key];
      if (Array.isArray(content)) {
        bmwEngineProfiles.push(...content);
      } else if (content && typeof content === 'object') {
        bmwEngineProfiles.push(content as EngineProfile);
      }
    }
  }
}