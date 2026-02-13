  export interface EngineCode {code: string; years: string; hp: number; nm: number; riskScore: number; specificInfo: string;commonSpecs: { displacement: string; cylinders: string; blockMaterial: string; boreStroke: string; compressionRatio: string; valves: number; };}
  export interface EngineGeneration { id: string; label: string; enginecodes: EngineCode[]; }
  export interface EngineFamily { id: string; label: string;}
  export interface EngineLayout { id: string; label: string;}
  export interface FuelTypeGroup { id: 'Petrol' | 'Diesel'; label: string;}

  export interface

  import { DIESEL_BOXER_FAMILIES } from 'src/data/carDatabase/engines/diesel/boxer-enginefamilies';
  
  
  // --- A VÁZ (SKELETON) ---
  export const EngineDatabase = {
  
    // 1. ÜZEMANYAGOK (Itt mondjuk meg, mi tartozik hozzájuk)
    FuelTypeGroup: [
      {
        id: 'Diesel',
        label: 'Diesel',
        // Csak ezek jelennek meg, ha Dízelt választasz:
        layouts: ['inline', 'v-engine', 'boxer', 'w-engine'] 
      },
      {
        id: 'Petrol',
        label: 'Petrol',
        // Benzinnél jöhet minden (kivéve ami nem létezik):
        layouts: ['inline', 'v-engine', 'boxer', 'vr-engine', 'w-engine', 'rotary']
      }
    ],
  
    // 2. ELRENDEZÉSEK (Ez a közös tár, ebből válogatunk)
    EngineLayout: [
      { 
        id: 'inline', 
        label: 'Inline / Straight', 
        description: "Cylinders are arranged in a single, vertical row."
      },
      { 
        id: 'v-engine', 
        label: 'V-Engine', 
        description: "Cylinders are arranged in two banks at an angle (usually 60 or 90 degrees) forming a 'V'."
      },
      { 
        id: 'boxer', 
        label: 'Flat / Boxer', 
        description: "Cylinders are positioned horizontally on opposite sides of a central crankshaft."
      },
      { 
        id: 'vr-engine', 
        label: 'VR-Engine', 
        description: "A hybrid layout developed by VW, combining a narrow-angle V-engine with an inline design."
      },
      { 
        id: 'w-engine', 
        label: 'W-Engine', 
        description: "Resembles two V-engines joined together (essentially four banks of cylinders)."
      },
      { 
        id: 'rotary', 
        label: 'Rotary / Wankel', 
        description: "Uses a triangular rotor instead of pistons, which spins to produce power."
      }
    ],

    EngineFamilies: {
        'boxer': DIESEL_BOXER_FAMILIES,
 
      } as Record<string, any[]> 
  };