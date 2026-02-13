import type { EngineProfile } from "@/data/carDatabase"

export const volkswagenEngineProfiles: EngineProfile[] = [
{
    id: "vw-golf-mk4-16-aeh",
    brand: "Volkswagen",
    model: "Golf",
    generation: "Mk4 (1J) (1997-2003)",
    engineCode: "AEH", // A legendás 8 szelepes "SR" motor
    profileId: "vw-golf-mk4-16-aeh",
    
    // A VW-nél a VIN nem tartalmazza a motorkódot, így itt nem tudunk szűrni.
    // A rendszer a "Golf" név és az "1999" évszám alapján fogja ezt feldobni.
    vinIdentifier: [], 

    displacement: "1,595 cc",
    power: "100 hp",
    torque: "145 Nm",
    fuelType: "Petrol (Naturally Aspirated)",
    cylinders: 4,
    valves: 8, // 8 szelepes konstrukció (SR - Saugrohr Einspritzung)
    compression: "10.3:1",
    yearRange: "1997-2000", // Az AEH-t később váltotta az AKL/BFQ
    oilSpecification: "VW 502.00 / 505.00 (5W-40)",

    vulnerabilities: [
      "Váltó szegecstörés (DUU/DUW váltók típushibája - differenciálmű szétrepül)",
      "Légtömegmérő (MAF) meghibásodás",
      "Fojtószelep elkoszolódás (alapjárat ingadozás)",
      "Olajfogyasztás (szelepszár szimmeringek)",
      "Lambda szonda hiba"
    ],
    timingType: "Szíjas (Belt)",
    injectionType: "MPI (Multi-point Injection) - Simos 2",
    engineLifespan: "300,000 - 400,000 km (Nagyon tartós blokk)",
    ecuType: "Siemens Simos 2",
    euroStandard: "Euro 2 / Euro 3",
    maxPowerStockInternals: "110 hp (Nem tuningolható érdemben)",
    fuelConsumption: {
      city: "8.5 - 9.5 L/100km",
      highway: "6.0 - 6.5 L/100km",
      mixed: "7.5 L/100km",
      sporty: "10.0+ L/100km"
    },
    maintenanceSchedule: {
      oilAndFilters: [
        {
          interval: "15,000 km / 1 év",
          task: "Olajcsere (5W-40) + Szűrő",
          details: "A hidrotőkék miatt fontos a jó minőségű olaj. 10W-40 is használható idősebb korban.",
          importance: "High",
          laborDifficulty: "Easy",
          estimatedCost: "25-35.000 HUF"
        }
      ],
      ignitionAndEngine: [
        {
          interval: "90,000 km / 6 év",
          task: "Vezérműszíj csere + Vízpumpa",
          details: "A műanyag vízpumpa lapátkerék hajlamos eltörni, mindig cserélni kell a szíjjal együtt.",
          importance: "Critical",
          laborDifficulty: "Intermediate",
          estimatedCost: "120.000 HUF"
        },
        {
          interval: "60,000 km",
          task: "Gyújtógyertyák cseréje",
          details: "A szívósor alatt vannak, kicsit nehézkes a hozzáférés.",
          importance: "Medium",
          laborDifficulty: "Intermediate",
          estimatedCost: "20.000 HUF"
        }
      ],
      preventiveAndSuspension: [],
      engineMechanical: [],
      coolingAndHvac: [
        {
          interval: "Megvételkor / Gyanú esetén",
          task: "Termosztát csere",
          details: "Gyakori hiba, hogy nyitva marad és nem melegszik be a motor.",
          importance: "Medium",
          laborDifficulty: "Easy",
          estimatedCost: "15.000 HUF"
        }
      ],
      fluidsAndDrivetrain: [
        {
          interval: "Egyszeri ellenőrzés",
          task: "Váltó szegecselés ellenőrzése (DUU váltó)",
          details: "Ha még a gyári szegecselt diffi van benne, érdemes kicserélni csavaros szettre, mielőtt szétrobban.",
          importance: "Critical",
          laborDifficulty: "Expert",
          estimatedCost: "100.000+ HUF (Javítókészlet + Munkadíj)"
        }
      ]
    },
    tuningPotential: [],
    recommendedParts: {
      description: "Egyszerű, olcsó alkatrészek.",
      parts: [
        { category: "Vezérlés", brand: "Continental / INA", note: "Vízpumpával együtt!" },
        { category: "Gyújtás", brand: "NGK / Bosch", note: "NGK BKUR6ET-10 ajánlott." }
      ]
    },
    riskRating: 2, // A váltóhiba miatt nem 1-es, amúgy a motor golyóálló
    commonIssues: [
      "Alapjárat ingadozás (fojtószelep)",
      "Nehezen veszi a rükvercet/egyest (váltórudazat)",
      "Ablakemelő szerkezet törés (típushiba a Golf 4-nél)"
    ],
    repairCostEstimate: "Alacsony",
    mechanicVerdict: "A 'Faék' egyszerűségű motor. Nem megy nagyon, de cserébe sokat fogyaszt cserébe viszont kimegy a világból. A DUU váltó a gyenge pontja, arra figyelni kell.",
    drivingExperience: "Klasszikus szívó karakter, rövid váltóáttételezéssel (autópályán sokat forog 130-nál ~4000 rpm)."
  }
]