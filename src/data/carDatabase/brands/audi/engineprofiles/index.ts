import { a1a38pProfiles } from "./a1-a38p";
import { a38va4b7Profiles } from "./a38v-a4b7";
import type { EngineProfile } from "@/data/carDatabase";
import { a4b8a5b10Profiles } from "./a7b8-a5b10";
import { a6c4a6c9Profiles } from "./a6c4-a6c9";

// Itt fűzzük össze az összes eddigi és jövőbeli Audi profilt
export const audiEngineProfiles: EngineProfile[] = [
    ...a1a38pProfiles,
    ...a38va4b7Profiles,
    ...a4b8a5b10Profiles,
    ...a6c4a6c9Profiles
    // Ha elkészül a következő (pl. a4b8-q5.ts), csak ide kell majd beszúrnod
];