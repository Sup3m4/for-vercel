import { a1a38pProfiles } from "./a1-a38p";
import { a38va4b7Profiles } from "./a38v-a4b7";
import type { EngineProfile } from "@/data/carDatabase";
import { a4b8a5b10Profiles } from "./a7b8-a5b10";
import { a6c4a6c7Profiles } from "./a6c4-a6c7";
import { a6c8a7c8Profiles } from "./a6c8-a7c8";
import { a8d2a8d5Profiles } from "./a8d2-a8d5";
import { q2q3fjProfiles } from "./q2-q3fj";

// Itt fűzzük össze az összes eddigi és jövőbeli Audi profilt
export const audiEngineProfiles: EngineProfile[] = [
    ...a1a38pProfiles,
    ...a38va4b7Profiles,
    ...a4b8a5b10Profiles,
    ...a6c4a6c7Profiles,
    ...a6c8a7c8Profiles,
    ...a8d2a8d5Profiles,
    ...q2q3fjProfiles,
    
    // Ha elkészül a következő (pl. a4b8-q5.ts), csak ide kell majd beszúrnod
];