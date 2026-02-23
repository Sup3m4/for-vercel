import { a1a38pProfiles } from "./a1-a38p";
import { a38va4b7Profiles } from "./a38v-a4b7";
import type { EngineProfile } from "@/data/carDatabase";

// Itt fűzzük össze az összes eddigi és jövőbeli Audi profilt
export const audiEngineProfiles: EngineProfile[] = [
    ...a1a38pProfiles,
    ...a38va4b7Profiles,
    // Ha elkészül a következő (pl. a4b8-q5.ts), csak ide kell majd beszúrnod
];