import type { EngineProfile } from "@/data/carDatabase"

export const mercedesEngineProfiles: EngineProfile[] = [
  {
    id: "om651de22la-c220d",
    brand: "Mercedes-Benz",
    model: "C 220 d",
    generation: "W205 Pre-facelift (2014-2018)",
    engineCode: "OM 651 DE 22 LA",
    profileId: "om651de22la-c220d",
    vinIdentifier: ["205004", "205003", "205005", "205204", "205205", "205304", "205305","205404", "205405"],
    displacement: "2,143 cc",
    power: "170 hp",
    torque: "400 Nm",
    fuelType: "Diesel (Common Rail)",
    cylinders: 4,
    valves: 16,
    compression: "16.2:1",
    yearRange: "2014-2018",
    oilSpecification: "MB 229.51 / 229.52 (5W-30)",

    vulnerabilities: [
      "Vezérműlánc nyúlás (hátul elhelyezett lánc, drága csere)",
      "Delphi piezo injektor hibák (korai évjáratok)",
      "Vízpumpa és termosztátház szivárgás",
      "Olajszűrő ház repedés/szivárgás",
      "DPF eltömődés városi használat mellett"
    ],
    timingType: "Láncos (Hátul szerelt - Duplex lánc)",
    injectionType: "Common Rail (CDI) - Delphi Piezo (később Szolenoid)",
    engineLifespan: "300,000+ km (ha a lánc karban van tartva)",
    turboType: "Twin-Turbo (Kétlépcsős feltöltés - BorgWarner)",
    ecuType: "Delphi CRD3",
    euroStandard: "Euro 6",
    maxPowerStockInternals: "220-230 hp",
    fuelConsumption: {
      city: "5.5 - 6.0 L/100km",
      highway: "4.0 - 4.5 L/100km",
      mixed: "4.8 L/100km",
      sporty: "7.5+ L/100km"
    },
    maintenanceSchedule: {
      oilAndFilters: [
        {
          interval: "25,000 km / 1 év",
          task: "Olajcsere (MB 229.52) + Szűrő",
          details: "A 25 ezres periódus túl hosszú. Javasolt 10-15 ezer km-re rövidíteni a lánc védelme érdekében.",
          importance: "Critical",
          laborDifficulty: "Intermediate",
          estimatedCost: "40-60.000 HUF"
        }
      ],
      ignitionAndEngine: [
        {
          interval: "200,000 km",
          task: "Vezérműlánc ellenőrzés/csere",
          details: "Mivel a lánc a motor hátulján van (tűzfal felől), a cseréhez gyakran ki kell venni a motort. Hidegindítási csörgésnél azonnal csere.",
          importance: "Critical",
          laborDifficulty: "Expert",
          estimatedCost: "400.000+ HUF"
        }
      ],
      preventiveAndSuspension: [],
      engineMechanical: [],
      coolingAndHvac: [
        {
          interval: "100,000 km",
          task: "Vízpumpa/Termosztát ház",
          details: "Műanyag alkatrészek hajlamosak a repedésre. Fagyálló fogyás esetén ellenőrizendő.",
          importance: "High",
          laborDifficulty: "Intermediate",
          estimatedCost: "80.000 HUF"
        }
      ],
      fluidsAndDrivetrain: []
    },
    tuningPotential: [
      {
        stage: "Stage 1",
        power: "200-205 hp",
        notes: "Biztonságos szoftveres optimalizálás, jelentős nyomatéknövekedés (480-500 Nm).",
        zeroToHundred: "7.4s -> 6.8s"
      }
    ],
    recommendedParts: {
      description: "Gyári vagy prémium utángyártott alkatrészek ajánlottak.",
      parts: [
        { category: "Vezérlés", brand: "IWIS / Gyári Mercedes", note: "Csak a gyári minőségű lánc ajánlott." },
        { category: "Olaj", brand: "Petronas / Mobil 1", note: "MB 229.52 specifikáció kötelező a DPF miatt." }
      ]
    },
    riskRating: 3, // 1-5 skála (3 közepes a lánc miatt)
    commonIssues: [
      "Hidegindítási lánccsörgés",
      "Hűtőfolyadék fogyás nyom nélkül (EGR hűtő vagy csonk)",
      "Injektor tömítés kifújás (fekete szurok a hengerfejen)"
    ],
    repairCostEstimate: "Magas (Lánccsere munkadíja miatt)",
    mechanicVerdict: "A 'Taxi-motor'. Ha a vezérlés rendben van, a világból kimegy. Kicsit nyersebb járású, mint az utódja, de nagyon takarékos. A lánc a gyenge pontja, figyelni kell a hangjára.",
    drivingExperience: "Erős nyomaték már alacsony fordulatról a biturbó miatt. Autópályán elemében van, csendes utazóautó."
  },
  {
    id: "om654de20-c220d",
    brand: "Mercedes-Benz",
    model: "C 220 d",
    generation: "W205 Facelift (2018-2021)",
    engineCode: "OM 654 DE 20",
    profileId: "om654de20-c220d",
    vinIdentifier: ["205014", "205015", "205214", "205215","205314", "205315","205414", "205415"],
    displacement: "1,950 cc",
    power: "194 hp",
    torque: "400 Nm",
    fuelType: "Diesel (Common Rail)",
    cylinders: 4,
    valves: 16,
    compression: "15.5:1",
    yearRange: "2018-2021",
    oilSpecification: "MB 229.52 / 229.71 (0W-20 / 5W-30)",

    vulnerabilities: [
      "Szelephimba / Görgős himba kopás (tűgörgős csapágy hiba)",
      "Vezérműtengely kopás (a himba hiba következménye)",
      "AdBlue rendszer (szivattyú, fűtőelem, NOx szenzor) hibák",
      "Injektor tűzkarika szivárgás"
    ],
    timingType: "Láncos (Hátul szerelt - javított konstrukció)",
    injectionType: "Common Rail (2500 bar) - Nanoslide hengerfal bevonat",
    engineLifespan: "300,000+ km (Modern, de bonyolultabb emissziós rendszer)",
    turboType: "Single Turbo (Változó geometriás - VGT)",
    ecuType: "Bosch MD1CS006",
    euroStandard: "Euro 6d-TEMP",
    maxPowerStockInternals: "240+ hp",
    fuelConsumption: {
      city: "5.2 - 5.8 L/100km",
      highway: "3.8 - 4.3 L/100km",
      mixed: "4.6 L/100km",
      sporty: "7.0+ L/100km"
    },
    maintenanceSchedule: {
      oilAndFilters: [
        {
          interval: "25,000 km / 1 év",
          task: "Olajcsere (MB 229.52/71) + Szűrő",
          details: "A 0W-20 olaj a gyári ajánlás a hatékonyság miatt, de sok szerelő az 5W-30-at javasolja a védelemért. A 25e km itt is sok.",
          importance: "Critical",
          laborDifficulty: "Intermediate",
          estimatedCost: "50-70.000 HUF"
        }
      ],
      ignitionAndEngine: [
        {
          interval: "150,000 km",
          task: "Szelephimbák ellenőrzése",
          details: "Ismert típushiba a himbák tűgörgőinek kopása, ami megeszi a vezérműtengelyt. Hangosabb járásnál azonnal ellenőrizni.",
          importance: "High",
          laborDifficulty: "Expert",
          estimatedCost: "150.000+ HUF"
        }
      ],
      preventiveAndSuspension: [],
      engineMechanical: [],
      coolingAndHvac: [],
      fluidsAndDrivetrain: [
        {
          interval: "Minden szerviznél",
          task: "AdBlue utántöltés",
          details: "A rendszer érzékeny a folyadék minőségére és szintjére.",
          importance: "Medium",
          laborDifficulty: "Easy",
          estimatedCost: "5-10.000 HUF"
        }
      ]
    },
    tuningPotential: [
      {
        stage: "Stage 1",
        power: "220-230 hp",
        notes: "Jelentős tartalék van a motorban (a C300d ugyanez a blokk biturbóval). A szoftveres optimalizálás nagyon hatékony.",
        zeroToHundred: "6.9s -> 6.2s"
      }
    ],
    recommendedParts: {
      description: "Csak gyári minősítésű kenőanyagok használhatók a Nanoslide bevonat miatt.",
      parts: [
        { category: "Olaj", brand: "Gyári Mercedes / Mobil 1 ESP", note: "MB 229.52 vagy 229.71." }
      ]
    },
    riskRating: 2, // Kicsit megbízhatóbb a lánc, de a himba hiba súlyos lehet
    commonIssues: [
      "Csattogó motorhang (vezérműtengely/himba hiba)",
      "AdBlue visszaszámlálás / indításgátlás",
      "Olajfolyás a turbó környékén"
    ],
    repairCostEstimate: "Közepes/Magas (AdBlue alkatrészek drágák)",
    mechanicVerdict: "Sokkal kulturáltabb és csendesebb, mint az OM651. A Nanoslide bevonat és az alu blokk miatt gyorsan melegszik és nagyon keveset fogyaszt. A szelephimbákra kell figyelni, de összességében kiváló modern dízel.",
    drivingExperience: "Selymesebb járás, kevésbé dízeles karakter. A 9G-Tronic váltóval (ami általában társul hozzá) nagyon sima és dinamikus."
  }
];