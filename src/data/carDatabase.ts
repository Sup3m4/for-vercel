export interface EngineProfile {
  id: string;
  brand: string;
  model: string;
  generation: string;
  engineCode: string;
  profileId: string;
  displacement: string;
  power: string;
  torque: string;
  fuelType: string;
  cylinders: number;
  valves: number;
  compression: string;
  yearRange: string;
  // Premium content
  oilSpecification: string;
  sisterModels?: {name: string; note: string; }[];
  crossReferenceParts: {partName: string; category: string; oem: {brand: string;code: string;approxPrice: string;};crossRef: {brand: string;code: string;approxPrice: string;source: string;autodoclink: string;advanceautopartslink: string; };note: string;}[];
  InspectionChecklist?: {id: string; category: "Engine" | "Exhaust" |  "Emissions" | "Brakes" | "Fuel" |  "Interior" | "Lights"  | "Comfort"  | "Cooling" |  "Transmission" | "Suspension" | "Electronics" | "Body";question: string;howToCheck: string;costUSD: number; costEUR: number;severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";}[],
  vulnerabilities: string[];
  timingType: string;  
  materialOverrides?: {metalness: number; roughness: number;envMapIntensity?: number;};   
  floorSettings?: {mixStrength: number;roughness: number;}; 
  lightSettings?: {headlightIntensity?: number; headlightDistance?: number; headlightTargetDistance?: number; headlightPenumbra?: number;headlightAngle?: number; headlightRadiusTop?: number; headlightOpacity?: number; meshGlowHeadlight?: number; meshGlowTaillight?: number; meshGlowDrl?: number; useBloom?: boolean;};
  model3DVerticalOffset?: number;
  modelForwardDir?: number; 
  manualLightPositions?: {headlights?: { x: number; y: number; z: number };taillights?: { x: number; y: number; z: number };};
  customLightNames?: {headlights?: string[];taillights?: string[];drllight?: string[];brakelights?: string;};    
  injectionType: string;      
  engineLifespan: string;     
  turboType?: string;         
  ecuType: string;             
  euroStandard: string;     
  maxPowerStockInternals: string; 
  fuelConsumption: {
    city: string;
    highway: string;
    mixed: string;
    sporty: string;};
  maintenanceSchedule?: {oilAndFilters: {interval: string; timeLimit?: string; task: string; details: string; parts?: string[]; importance?: "Critical" | "High" | "Medium" | "Low"; laborDifficulty?: "Easy" | "Intermediate" | `Intermediate ${string}`| "Advanced" | "Extreme" | "Expert" | `Expert ${string}`; estimatedCost?: string; }[];ignitionAndEngine: {interval: string; timeLimit?: string; task: string; details: string; parts?: string[]; importance?: "Critical" | "High" | "Medium" | "Low"; laborDifficulty?: "Easy" | "Intermediate" | `Intermediate ${string}`| "Advanced" |"Extreme" | "Expert" | `Expert ${string}`; estimatedCost?: string; }[];preventiveAndSuspension:{interval: string; timeLimit?: string; task: string; details: string; parts?: string[]; importance?: "Critical" | "High" | "Medium" | "Low"; laborDifficulty?: "Easy" | "Intermediate"| `Intermediate ${string}` | "Advanced" | "Expert" | `Expert ${string}`; estimatedCost?: string; }[];engineMechanical:{interval: string; timeLimit?: string; task: string; details: string; parts?: string[]; importance?: "Critical" | "High" | "Medium" | "Low"; laborDifficulty?: "Easy" | "Intermediate" | `Intermediate ${string}` | "Advanced" | "Extreme" | "Expert" | `Expert ${string}`; estimatedCost?: string; }[];coolingAndHvac:{interval: string; timeLimit?: string; task: string; details: string; parts?: string[]; importance?: "Critical" | "High" | "Medium" | "Low"; laborDifficulty?: "Easy" | "Intermediate" | `Intermediate ${string}` | "Advanced" | "Expert" | `Expert ${string}`; estimatedCost?: string; }[];fluidsAndDrivetrain:{interval: string; timeLimit?: string; task: string; details: string; parts?: string[]; importance?: "Critical" | "High" | "Medium" | "Low"; laborDifficulty?: "Easy" | "Intermediate" | "Advanced" | "Expert" | `Expert ${string}`; estimatedCost?: string; }[];};
  tuningPotential: { stage: string; power: string; notes: string; zeroToHundred?: string; hundredToTwoHundred?: string; }[];
  recommendedParts?: {description: string;parts: { category: string; brand: string; note: string }[];};
  oemPlusUpgrades?: {name: string;description: string;benefit: string;}[];
  transmission?: {manual?: {name: string;torqueLimit: string;oilType: string;note: string;};automatics: {name: string;torqueLimit: string;oilType: string;note: string;}[];};
  riskRating: number;
  tuningGraphData?: {stock: { hp: number; nm: number };stage1: { hp: number; nm: number };stage2: { hp: number; nm: number };stage3: { hp: number; nm: number };};
  commonIssues: string[];
  repairCostEstimate: string;
  author?: string;
  cameraSettings?: {minDistanceMultiplier: number;}
  disableNightMode?: boolean,
  hotspotSettings?: {distanceFactor?: number;}
  fluidCapacities?: {system: string;capacity: string;spec: string;}[];
  torqueSpecs?: {part: string;value: string;note: string;}[];
  engineeringData?: {blockDesign: string;crankshaft: string;pistonSpeed: string;alternator?: string;rotatingAssembly?: Record<string, string>; cylinderHead?: Record<string, string>;oilAndCooling?: Record<string, string>;fuelSystem?: Record<string, string>;tuningLimits?: Record<string, string>;electrical?: Record<string, string>;};
  mechanicVerdict: string;
  drivingExperience: string;
  model3DScale?: number;
  popupAnimationName?: string;
  model3DPath?: string;
  model3DRotation?: [number, number, number];
  engineBayImageUrl?: string;
  model3DHotspots?: { x: number; y: number; z: number; label: string; details: string; critical?: boolean; }[];
  engineBayHotspots?: { x: number; y: number;label: string; details: string; critical?: boolean; }[];
  visualTechGuide?: {views: {id: string;        label: string;    imageUrl: string;  hotspots: {x: number;      y: number;       title: string;details: string;bgPulse?: boolean; }[];}[];};
}

import { bmwModels } from "@/data/carDatabase/brands/bmw/bmw-models";
import { bmwGenerations } from "./carDatabase/brands/bmw/bmw-generations";
import { bmwEngineTypes } from "./carDatabase/brands/bmw/bmw-enginetypes";
import { bmwEngineCodes } from "./carDatabase/brands/bmw/bmw-enginecodes";
import { bmwEngineProfiles } from "./carDatabase/brands/bmw/engineprofiles";

import { audiModels } from "./carDatabase/brands/audi/audi-models";
import { audiGenerations } from "./carDatabase/brands/audi/audi-generations";
import { audiEngineTypes } from "./carDatabase/brands/audi/audi-enginetypes";
import { audiEngineCodes } from "./carDatabase/brands/audi/audi-enginecodes";
import { audiEngineProfiles } from "./carDatabase/brands/audi/engineprofiles";

import { mercedesModels } from "./carDatabase/brands/mercedes-benz/mercedes-models";
import { mercedesGenerations } from "./carDatabase/brands/mercedes-benz/mercedes-generations";
import { mercedesEngineTypes } from "./carDatabase/brands/mercedes-benz/mercedes-enginetypes";
import { mercedesEngineCodes } from "./carDatabase/brands/mercedes-benz/mercedes-enginecodes";
import { mercedesEngineProfiles } from "./carDatabase/brands/mercedes-benz/mercedes-engineprofiles";

import { volkswagenModels } from "./carDatabase/brands/volkswagen/volkswagen-models";
import { volkswagenGenerations } from "./carDatabase/brands/volkswagen/volkswagen-generations";
import { volkswagenEngineTypes } from "./carDatabase/brands/volkswagen/volkswagen-enginetypes";
import { volkswagenEngineCodes } from "./carDatabase/brands/volkswagen/volkswagen-enginecodes";
import { volkswagenEngineProfiles } from "./carDatabase/brands/volkswagen/volkswagen-engineprofiles";

import { porscheModels } from "./carDatabase/brands/porsche/porsche-models";
import { porscheGenerations } from "./carDatabase/brands/porsche/porsche-generations";
import { porscheEngineTypes } from "./carDatabase/brands/porsche/porsche-enginetypes";
import { porscheEngineCodes } from "./carDatabase/brands/porsche/porsche-enginecodes";

import { toyotaModels } from "./carDatabase/brands/toyota/toyota-models";
import { toyotaGenerations } from "./carDatabase/brands/toyota/toyota-generations";
import { toyotaEngineTypes } from "./carDatabase/brands/toyota/toyota-enginetypes";
import { toyotaEngineCodes } from "./carDatabase/brands/toyota/toyota-enginecodes";

import { hondaModels } from "./carDatabase/brands/honda/honda-models";
import { hondaGenerations } from "./carDatabase/brands/honda/honda-generations";
import { hondaEngineTypes } from "./carDatabase/brands/honda/honda-enginetypes";
import { hondaEngineCodes } from "./carDatabase/brands/honda/honda-enginecodes";

import { nissanModels } from "./carDatabase/brands/nissan/nissan-models";
import { nissanGenerations } from "./carDatabase/brands/nissan/nissan-generations";
import { nissanEngineTypes } from "./carDatabase/brands/nissan/nissan-enginetypes";
import { nissanEngineCodes } from "./carDatabase/brands/nissan/nissan-enginecodes";

import { fordModels } from "./carDatabase/brands/ford/ford-models";
import { fordGenerations} from "./carDatabase/brands/ford/ford-generations";
import { fordEngineTypes } from "./carDatabase/brands/ford/ford-enginetypes";
import { fordEngineCodes } from "./carDatabase/brands/ford/ford-enginecodes";

import { chevroletModels } from "./carDatabase/brands/chevrolet/chevrolet-models";
import { chevroletGenerations } from "./carDatabase/brands/chevrolet/chevrolet-generations";
import { chevroletEngineTypes } from "./carDatabase/brands/chevrolet/chevrolet-enginetypes";
import { chevroletEngineCodes } from "./carDatabase/brands/chevrolet/chevrolet-enginecodes";

import { mazdaModels } from "./carDatabase/brands/mazda/mazda-models";
import { mazdaGenerations } from "./carDatabase/brands/mazda/mazda-generations";
import { mazdaEngineTypes } from "./carDatabase/brands/mazda/mazda-enginetypes";
import { mazdaEngineCodes } from "./carDatabase/brands/mazda/mazda-enginecodes";

import { subaruModels } from "./carDatabase/brands/subaru/subaru-models";
import { subaruGenerations} from "./carDatabase/brands/subaru/subaru-generations";
import { subaruEngineTypes } from "./carDatabase/brands/subaru/subaru-enginetypes";
import { subaruEngineCodes } from "./carDatabase/brands/subaru/subaru-enginecodes";

import { lexusModels } from "./carDatabase/brands/lexus/lexus-models";
import { lexusGenerations } from "./carDatabase/brands/lexus/lexus-generations";
import { lexusEngineTypes } from "./carDatabase/brands/lexus/lexus-enginetypes";
import { lexusEngineCodes } from "./carDatabase/brands/lexus/lexus-enginecodes";

import { jaguarModels } from "./carDatabase/brands/jaguar/jaguar-models";
import { jaguarGenerations } from "./carDatabase/brands/jaguar/jaguar-generations";
import { jaguarEngineTypes} from "./carDatabase/brands/jaguar/jaguar-enginetypes";
import { jaguarEngineCodes } from "./carDatabase/brands/jaguar/jaguar-enginecodes";

import { landRoverModels } from "./carDatabase/brands/land-rover/land-rover-models";
import { landRoverGenerations} from "./carDatabase/brands/land-rover/land-rover-generations";
import { landRoverEngineTypes } from "./carDatabase/brands/land-rover/land-rover-enginetypes";
import { landRoverEngineCodes } from "./carDatabase/brands/land-rover/land-rover-enginecodes";

import { alfaRomeoModels } from "./carDatabase/brands/alfa-romeo/alfa-romeo-models";
import { alfaRomeoGenerations } from "./carDatabase/brands/alfa-romeo/alfa-romeo-generations";
import { alfaRomeoEngineTypes } from "./carDatabase/brands/alfa-romeo/alfa-romeo-enginetypes";
import { alfaRomeoEngineCodes } from "./carDatabase/brands/alfa-romeo/alfa-romeo-enginecodes";
import { alfaRomeoEngineProfiles } from "./carDatabase/brands/alfa-romeo/alfa-romeo-engineprofiles";

import { maseratiModels } from "./carDatabase/brands/maserati/maserati-models";
import { maseratiGenerations } from "./carDatabase/brands/maserati/maserati-generations";
import { maseratiEngineTypes } from "./carDatabase/brands/maserati/maserati-enginetypes";
import { maseratiEngineCodes } from "./carDatabase/brands/maserati/maserati-enginecodes";

import { seatModels } from "./carDatabase/brands/seat/seat-models";
import { seatGenerations } from "./carDatabase/brands/seat/seat-generations";
import { seatEngineTypes } from "./carDatabase/brands/seat/seat-enginetypes";
import { seatEngineCodes } from "./carDatabase/brands/seat/seat-enginecodes";

import { ferrariModels } from "./carDatabase/brands/ferrari/ferrari-models";
import { ferrariGenerations } from "./carDatabase/brands/ferrari/ferrari-generations";
import { ferrariEngineTypes } from "./carDatabase/brands/ferrari/ferrari-enginetypes";
import { ferrariEngineCodes } from "./carDatabase/brands/ferrari/ferrari-enginecodes";

import { lamborghiniModels } from "./carDatabase/brands/lamborghini/lamborghini-models";
import { lamborghiniGenerations } from "./carDatabase/brands/lamborghini/lamborghini-generations";
import { lamborghiniEngineTypes } from "./carDatabase/brands/lamborghini/lamborghini-enginetypes";
import { lamborghiniEngineCodes } from "./carDatabase/brands/lamborghini/lamborghini-enginecodes";

import { mclarenModels } from "./carDatabase/brands/mclaren/mclaren-models";
import { mclarenGenerations } from "./carDatabase/brands/mclaren/mclaren-generations";
import { mclarenEngineTypes } from "./carDatabase/brands/mclaren/mclaren-enginetypes";
import { mclarenEngineCodes } from "./carDatabase/brands/mclaren/mclaren-enginecodes";

import { volvoModels } from "./carDatabase/brands/volvo/volvo-models";
import { volvoGenerations } from "./carDatabase/brands/volvo/volvo-generations";
import { volvoEngineTypes } from "./carDatabase/brands/volvo/volvo-enginetypes";
import { volvoEngineCodes } from "./carDatabase/brands/volvo/volvo-enginecodes";

import { saabModels } from "./carDatabase/brands/saab/saab-models";
import { saabGenerations } from "./carDatabase/brands/saab/saab-generations";
import { saabEngineTypes } from "./carDatabase/brands/saab/saab-enginetypes";
import { saabEngineCodes } from "./carDatabase/brands/saab/saab-enginecodes";

import { miniModels } from "./carDatabase/brands/mini/mini-models";
import { miniGenerations } from "./carDatabase/brands/mini/mini-generations";
import { miniEngineTypes } from "./carDatabase/brands/mini/mini-enginetypes";
import { miniEngineCodes } from "./carDatabase/brands/mini/mini-enginecodes";

import { fiatModels } from "./carDatabase/brands/fiat/fiat-models";
import { fiatGenerations } from "./carDatabase/brands/fiat/fiat-generations";
import { fiatEngineTypes } from "./carDatabase/brands/fiat/fiat-enginetypes";
import { fiatEngineCodes } from "./carDatabase/brands/fiat/fiat-enginecodes";

import { peugeotModels } from "./carDatabase/brands/peugeot/peugeot-models";
import { peugeotGenerations} from "./carDatabase/brands/peugeot/peugeot-generations";
import { peugeotEngineTypes } from "./carDatabase/brands/peugeot/peugeot-enginetypes";
import { peugeotEngineCodes } from "./carDatabase/brands/peugeot/peugeot-enginecodes";

import { renaultModels } from "./carDatabase/brands/renault/renault-models";
import { renaultGenerations } from "./carDatabase/brands/renault/renault-generations";
import { renaultEngineTypes } from "./carDatabase/brands/renault/renault-enginetypes";
import { renaultEngineCodes } from "./carDatabase/brands/renault/renault-enginecodes";

import { citroenModels } from "./carDatabase/brands/citroen/citroen-models";
import { citroenGenerations } from "./carDatabase/brands/citroen/citroen-generations";
import { citroenEngineTypes } from "./carDatabase/brands/citroen/citroen-enginetypes";
import { citroenEngineCodes } from "./carDatabase/brands/citroen/citroen-enginecodes";

import { opelModels } from "./carDatabase/brands/opel/opel-models";
import { opelGenerations } from "./carDatabase/brands/opel/opel-generations";
import { opelEngineTypes } from "./carDatabase/brands/opel/opel-enginetypes";
import { opelEngineCodes } from "./carDatabase/brands/opel/opel-enginecodes";

import { skodaModels } from "./carDatabase/brands/skoda/skoda-models";
import { skodaGenerations } from "./carDatabase/brands/skoda/skoda-generations";
import { skodaEngineTypes } from "./carDatabase/brands/skoda/skoda-enginetypes";
import { skodaEngineCodes } from "./carDatabase/brands/skoda/skoda-enginecodes";

import { suzukiModels } from "./carDatabase/brands/suzuki/suzuki-models";
import { suzukiGenerations } from "./carDatabase/brands/suzuki/suzuki-generations";
import { suzukiEngineTypes } from "./carDatabase/brands/suzuki/suzuki-enginetypes";
import { suzukiEngineCodes } from "./carDatabase/brands/suzuki/suzuki-enginecodes";

import { hyundaiModels } from "./carDatabase/brands/hyundai/hyundai-models";
import { hyundaiGenerations } from "./carDatabase/brands/hyundai/hyundai-generations";
import { hyundaiEngineTypes } from "./carDatabase/brands/hyundai/hyundai-enginetypes";
import { hyundaiEngineCodes } from "./carDatabase/brands/hyundai/hyundai-enginecodes";

import { kiaModels } from "./carDatabase/brands/kia/kia-models";
import { kiaGenerations } from "./carDatabase/brands/kia/kia-generations";
import { kiaEngineTypes } from "./carDatabase/brands/kia/kia-enginetypes";
import { kiaEngineCodes } from "./carDatabase/brands/kia/kia-enginecodes";

import { daciaModels } from "./carDatabase/brands/dacia/dacia-models";
import { daciaGenerations } from "./carDatabase/brands/dacia/dacia-generations";
import { daciaEngineTypes } from "./carDatabase/brands/dacia/dacia-enginetypes";
import { daciaEngineCodes } from "./carDatabase/brands/dacia/dacia-enginecodes";

import { mitsubishiModels } from "./carDatabase/brands/mitsubishi/mitsubishi-models";
import { mitsubishiGenerations } from "./carDatabase/brands/mitsubishi/mitsubishi-generations";
import { mitsubishiEngineTypes } from "./carDatabase/brands/mitsubishi/mitsubishi-enginetypes";
import { mitsubishiEngineCodes } from "./carDatabase/brands/mitsubishi/mitsubishi-enginecodes";

import { jeepModels, } from "./carDatabase/brands/jeep/jeep-models";
import { jeepGenerations } from "./carDatabase/brands/jeep/jeep-generations";
import { jeepEngineTypes } from "./carDatabase/brands/jeep/jeep-enginetypes";
import { jeepEngineCodes } from "./carDatabase/brands/jeep/jeep-enginecodes";

import { lanciaModels } from "./carDatabase/brands/lancia/lancia-models";
import { lanciaGenerations } from "./carDatabase/brands/lancia/lancia-generations";
import { lanciaEngineTypes } from "./carDatabase/brands/lancia/lancia-enginetypes";
import { lanciaEngineCodes } from "./carDatabase/brands/lancia/lancia-enginecodes";
import { smartModels } from "./carDatabase/brands/smart/smart-models";
import { smartGenerations } from "./carDatabase/brands/smart/smart-generations";
import { smartEngineTypes } from "./carDatabase/brands/smart/smart-enginetypes";
import { smartEngineCodes } from "./carDatabase/brands/smart/smart-enginecodes";

export interface EngineTypeEntry {
  name: string;
  hp: string;
  engineCode?: string; 
}


export const carDatabase = {
  brands: [
    "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Porsche", 
    "Toyota", "Honda", "Nissan", "Ford", "Chevrolet",
    "Mazda", "Subaru", "Lexus", "Jaguar", "Land Rover",
    "Alfa Romeo", "Maserati", "Ferrari", "Lamborghini", "McLaren",
    "Volvo", "Saab", "Mini", "Fiat", "Peugeot",
    "Renault", "Citroen", "Opel", "Skoda", "Seat", 
    "Suzuki", "Hyundai", "Kia", "Dacia", "Mitsubishi", "Jeep", 
    "Lancia", "Smart", "Dodge", "Cadillac", "Chrysler", "MG", 
  ],
  
  models: {
    "BMW": bmwModels,
    "Mercedes-Benz": mercedesModels,
    "Audi": audiModels,
    "Volkswagen": volkswagenModels,
    "Porsche": porscheModels,
    "Toyota": toyotaModels,
    "Honda": hondaModels,
    "Nissan": nissanModels,
    "Ford": fordModels,
    "Chevrolet": chevroletModels,
    "Mazda": mazdaModels,
    "Subaru": subaruModels,
    "Lexus": lexusModels,
    "Jaguar": jaguarModels,
    "Land Rover": landRoverModels,
    "Alfa Romeo": alfaRomeoModels,
    "Maserati": maseratiModels,
    "Ferrari": ferrariModels,
    "Lamborghini": lamborghiniModels,
    "McLaren": mclarenModels,
    "Volvo": volvoModels,
    "Saab": saabModels,
    "Mini": miniModels,
    "Fiat": fiatModels,
    "Peugeot": peugeotModels,
    "Renault": renaultModels,
    "Citroen": citroenModels,
    "Opel": opelModels,
    "Skoda": skodaModels,
    "Seat": seatModels,
    "Suzuki": suzukiModels,
    "Hyundai": hyundaiModels,
    "Kia": kiaModels,
    "Dacia": daciaModels,
    "Mitsubishi": mitsubishiModels,
    "Jeep": jeepModels,
    "Lancia": lanciaModels,
    "Smart": smartModels,
  },
  
  generations: {

    ...bmwGenerations,
    ...audiGenerations,
    ...mercedesGenerations,
    ...volkswagenGenerations,
    ...porscheGenerations,
    ...toyotaGenerations,
    ...hondaGenerations,
    ...nissanGenerations,
    ...fordGenerations,
    ...chevroletGenerations,
    ...mazdaGenerations,
    ...subaruGenerations,
    ...lexusGenerations,
    ...jaguarGenerations,
    ...landRoverGenerations,
    ...alfaRomeoGenerations,
    ...maseratiGenerations,
    ...seatGenerations,
    ...ferrariGenerations,
    ...lamborghiniGenerations,
    ...mclarenGenerations,
    ...volvoGenerations,
    ...saabGenerations,
    ...miniGenerations,
    ...fiatGenerations,
    ...peugeotGenerations,
    ...renaultGenerations,
    ...citroenGenerations,
    ...opelGenerations,
    ...skodaGenerations,
    ...suzukiGenerations,
    ...hyundaiGenerations,
    ...kiaGenerations,
    ...daciaGenerations,
    ...mitsubishiGenerations,
    ...jeepGenerations,
    ...lanciaGenerations,
    ...smartGenerations,
  },

  // Engine types
  engineTypes: {

  ...bmwEngineTypes,
  ...audiEngineTypes,
  ...mercedesEngineTypes,
  ...volkswagenEngineTypes,
  ...porscheEngineTypes,
  ...toyotaEngineTypes,
  ...hondaEngineTypes,
  ...nissanEngineTypes,
  ...fordEngineTypes,
  ...chevroletEngineTypes,
  ...mazdaEngineTypes,
  ...subaruEngineTypes,
  ...lexusEngineTypes,
  ...jaguarEngineTypes,
  ...landRoverEngineTypes,
  ...alfaRomeoEngineTypes,
  ...maseratiEngineTypes,
  ...seatEngineTypes,
  ...ferrariEngineTypes,
  ...lamborghiniEngineTypes,
  ...mclarenEngineTypes,
  ...volvoEngineTypes,
  ...saabEngineTypes,
  ...miniEngineTypes,
  ...fiatEngineTypes,
  ...peugeotEngineTypes,
  ...renaultEngineTypes,
  ...citroenEngineTypes,
  ...opelEngineTypes,
  ...skodaEngineTypes,
  ...suzukiEngineTypes,
  ...hyundaiEngineTypes,
  ...kiaEngineTypes,
  ...daciaEngineTypes,
  ...mitsubishiEngineTypes,
  ...jeepEngineTypes,
  ...lanciaEngineTypes,
  ...smartEngineTypes,
 
  } as Record<string, (string | EngineTypeEntry)[]>,
  
  
  engineCodes: {
    // BMW
  ...bmwEngineCodes,
  ...audiEngineCodes,
  ...mercedesEngineCodes,
  ...volkswagenEngineCodes,
  ...porscheEngineCodes,
  ...toyotaEngineCodes,
  ...hondaEngineCodes,
  ...nissanEngineCodes,
  ...fordEngineCodes,
  ...chevroletEngineCodes,
  ...mazdaEngineCodes,
  ...subaruEngineCodes,
  ...lexusEngineCodes,
  ...jaguarEngineCodes,
  ...landRoverEngineCodes,
  ...alfaRomeoEngineCodes,
  ...maseratiEngineCodes,
  ...seatEngineCodes,
  ...ferrariEngineCodes,
  ...lamborghiniEngineCodes,
  ...mclarenEngineCodes,
  ...volvoEngineCodes,
  ...saabEngineCodes,
  ...miniEngineCodes,
  ...fiatEngineCodes,
  ...peugeotEngineCodes,
  ...renaultEngineCodes,
  ...citroenEngineCodes,
  ...opelEngineCodes,
  ...skodaEngineCodes,
  ...suzukiEngineCodes,
  ...hyundaiEngineCodes,
  ...kiaEngineCodes,
  ...daciaEngineCodes,
  ...mitsubishiEngineCodes,
  ...jeepEngineCodes,
  ...lanciaEngineCodes,
  ...smartEngineCodes,
    
  } as Record<string, (string | { code: string; hp: string; torque?: string; profileId?: string })[]>,
};

export const engineProfiles: EngineProfile[] = [
  
  //Engine Profiles
...bmwEngineProfiles,
...audiEngineProfiles,
...mercedesEngineProfiles,
...volkswagenEngineProfiles,
...alfaRomeoEngineProfiles,

 
];

export function getEngineProfile(
  brand: string,
  model: string,
  generation: string,
  engineCode: string,
  profileId?: string
): EngineProfile | undefined {
  if (profileId) {
    const foundById = engineProfiles.find((p) => p.id === profileId);
    if (foundById) return foundById;
  }
  return engineProfiles.find(
    (p) =>
      p.brand === brand &&
      p.model === model &&
      p.generation === generation &&
      p.engineCode === engineCode
  );
}
