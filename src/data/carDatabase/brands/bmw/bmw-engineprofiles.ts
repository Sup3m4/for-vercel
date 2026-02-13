import type { EngineProfile } from "@/data/carDatabase"

export const bmwEngineProfiles: EngineProfile[] = [
    {
        id: "b58b30m0-f32-440i",
        brand: "BMW",
        model: "440i",
        generation: "F32/F33/F36 (LCI) (2016-2020)",
        engineCode: "B58B30M0",
        profileId: "b58b30m0-f32-440i",
        displacement: "2,998 cc",
        power: "326 hp",
        torque: "450 Nm",
        fuelType: "Petrol (Direct Injection)",
        cylinders: 6,
        valves: 24,
        compression: "11.0:1",
        yearRange: "2016-2020",
    
        timingType: "Chain (Rear mounted - Vanos)",
        injectionType: "HDEV5 High Precision Direct Injection",
        engineLifespan: "300,000+ km (Robust 'Closed Deck' design)",
        turboType: "TwinScroll (Bosch Mahle Turbo Systems - BMTS)",
        ecuType: "Bosch MG1CS003 (Note: Locked on prod. > 06/2020)",
        euroStandard: "Euro 6",
        maxPowerStockInternals: "600+ hp (Legendary strength)",
    
        fuelConsumption: {
          city: "10.5 - 12.0 L/100km",
          highway: "6.5 - 7.8 L/100km",
          mixed: "8.5 - 9.5 L/100km",
          sporty: "14.0+ L/100km"
        },
    
        oilSpecification: "BMW Longlife-01 / LL-14 FE+ (0W-20 or 5W-30)",
    
        vulnerabilities: [
          "Coolant Loss (Main & Aux) - Stone chips on radiators or cap leaks.",
          "PCV Diaphragm Failure - Integrated into valve cover, causes whistling.",
          "Oil Filter Disintegration - Filter tears if removed incorrectly.",
          "VANOS Solenoids - Sludge buildup can cause timing errors.",
          "Charge Cooler Leaks - Internal leak into intake manifold.",
          "Rear Main Seal - Can fail if PCV is blocked."
        ],
    
        maintenanceSchedule: {
          oilAndFilters: [
            {
              interval: "8,000 - 10,000 km",
              timeLimit: "1 year",
              task: "Engine Oil & Filter Service",
              details: "Ignore BMW 30k interval. B58 runs hot. Use 5W-30 or 5W-40 LL-01 for protection over efficiency.",
              parts: ["Filter (11428583898)", "6.5L Synthetic Oil"],
              importance: "Critical",
              laborDifficulty: "Easy",
              estimatedCost: "140 - 190"
            },
            {
              interval: "Every Service",
              timeLimit: "N/A",
              task: "Oil Filter Inspection",
              details: "CRITICAL: The B58 filter often breaks in the housing. Ensure the old O-ring is removed from the tip.",
              parts: ["Included in Oil Service"],
              importance: "Critical",
              laborDifficulty: "Easy",
              estimatedCost: "0"
            },
            {
              interval: "30,000 km",
              timeLimit: "2 years",
              task: "Engine Air Filter",
              details: "Turbo needs breath. Stock filter is good, but gets dirty fast.",
              parts: ["Air Filter Element"],
              importance: "Medium",
              laborDifficulty: "Easy",
              estimatedCost: "50 - 80"
            },
            {
              interval: "Every Service",
              timeLimit: "N/A",
              task: "Check Coolant Levels (Both Tanks)",
              details: "B58 has TWO reservoirs. One for engine, one for intercooler. Low level in small tank = big trouble.",
              parts: ["Distilled Water / Coolant"],
              importance: "High",
              laborDifficulty: "Easy",
              estimatedCost: "10 - 20"
            }
          ],

          ignitionAndEngine: [
            {
              interval: "45,000 - 60,000 km",
              timeLimit: "4 years",
              task: "Spark Plugs (OEM/NGK)",
              details: "Direct injection + Turbo eats plugs. Reduce gap if Tuned (Stage 1/2).",
              parts: ["6x NGK 94201 / OEM High Power"],
              importance: "High",
              laborDifficulty: "Intermediate (Rear cyl tight)",
              estimatedCost: "180 - 250"
            },
            {
              interval: "80,000 km",
              timeLimit: "5 years",
              task: "Ignition Coils",
              details: "Stock coils are good (Eldor), but replace if misfires occur under load.",
              parts: ["6x Eldor / Delphi Coils"],
              importance: "Medium",
              laborDifficulty: "Intermediate",
              estimatedCost: "300 - 450"
            },
            {
              interval: "100,000 km",
              timeLimit: "6 years",
              task: "Valve Cover & PCV Assembly",
              details: "PCV is built into the cover. If it fails (whistling sound), replace entire cover.",
              parts: ["Valve Cover Assembly", "Gasket"],
              importance: "High",
              laborDifficulty: "Advanced",
              estimatedCost: "600 - 850"
            },
            {
              interval: "100,000 km",
              timeLimit: "6 years",
              task: "Drive Belt & Tensioner",
              details: "Standard maintenance. Check for oil leaks onto belt from OFH.",
              parts: ["Ribbed V-Belt", "Tensioner"],
              importance: "Medium",
              laborDifficulty: "Easy",
              estimatedCost: "200 - 300"
            }
          ],

          preventiveAndSuspension: [
            {
              interval: "60,000 km",
              timeLimit: "N/A",
              task: "Charge Pipe Upgrade",
              details: "Stock plastic charge pipe becomes brittle and cracks under boost. Replace with aluminum.",
              parts: ["Aluminum Charge Pipe Kit"],
              importance: "High",
              laborDifficulty: "Intermediate",
              estimatedCost: "300 - 500"
            },
            {
              interval: "80,000 km",
              timeLimit: "5 years",
              task: "Thrust Arm Bushings (Front)",
              details: "Hydraulic bushings leak fluid. Causes vague steering and braking vibration.",
              parts: ["Thrust Arms or Monoball Upgrade"],
              importance: "Medium",
              laborDifficulty: "Intermediate",
              estimatedCost: "400 - 600"
            },
            {
              interval: "100,000 km",
              timeLimit: "7 years",
              task: "Water Pump (Electric)",
              details: "B58 pump is reliable, but mechanical thermostat housing can leak.",
              parts: ["Water Pump", "Thermostat Module"],
              importance: "Medium",
              laborDifficulty: "Advanced",
              estimatedCost: "700 - 1,000"
            },
            {
              interval: "Every Oil Change",
              timeLimit: "N/A",
              task: "Inspect Heat Exchanger",
              details: "Front mounted radiators are prone to stone damage causing coolant loss.",
              parts: ["Rock Guards (Preventative)"],
              importance: "Medium",
              laborDifficulty: "Easy",
              estimatedCost: "0"
            }
          ],

          engineMechanical: [
            {
              interval: "120,000 km",
              timeLimit: "8 years",
              task: "Oil Filter Housing Gasket",
              details: "Leaks oil and coolant down the back of the engine. Complex repair due to location.",
              parts: ["OFH Gaskets", "Heat Exchanger O-rings"],
              importance: "Medium",
              laborDifficulty: "Advanced",
              estimatedCost: "800 - 1,200"
            },
            {
              interval: "150,000 km",
              timeLimit: "N/A",
              task: "Intake Valve Cleaning",
              details: "B58 has less carbon buildup than N54/N55, but still direct injection.",
              parts: ["Walnut Blasting Media", "Gaskets"],
              importance: "Low",
              laborDifficulty: "Advanced",
              estimatedCost: "500 - 700"
            },
            {
              interval: "250,000 km",
              timeLimit: "N/A",
              task: "Timing Chain Check",
              details: "Chain is rear-mounted but robust. Only service if noisy (PUMA measure).",
              parts: ["Chain Kit", "Engine Out Labor"],
              importance: "Low",
              laborDifficulty: "Expert (Engine-Out)",
              estimatedCost: "4,000 - 6,000"
            }
          ],

          coolingAndHvac: [
            {
              interval: "Every 2 Years",
              timeLimit: "2 years",
              task: "Coolant Flush (HT & LT Circuits)",
              details: "Two separate circuits! High Temp (Engine) and Low Temp (Intercooler).",
              parts: ["BMW HT-12 / LC-18 Coolant"],
              importance: "Medium",
              laborDifficulty: "Intermediate (Vacuum fill req.)",
              estimatedCost: "200 - 300"
            },
            {
              interval: "120,000 km",
              timeLimit: "8 years",
              task: "Main Reservoir Cap",
              details: "Cap fails, system loses pressure, coolant boils off.",
              parts: ["Expansion Tank Cap"],
              importance: "High",
              laborDifficulty: "Easy",
              estimatedCost: "20 - 40"
            }
          ],

          fluidsAndDrivetrain: [
            {
              interval: "2 Years",
              timeLimit: "2 years",
              task: "Brake Fluid Flush",
              details: "Hydroscopic fluid absorbs water, corroding DSC unit.",
              parts: ["DOT 4 LV"],
              importance: "High",
              laborDifficulty: "Easy",
              estimatedCost: "100 - 150"
            },
            {
              interval: "80,000 km",
              timeLimit: "N/A",
              task: "ZF 8HP Transmission Service",
              details: "BMW says 'Lifetime', ZF says 80-100k km. Pan filter + Fluid.",
              parts: ["ZF Lifeguard 8", "Integrated Pan/Filter"],
              importance: "Critical",
              laborDifficulty: "Intermediate",
              estimatedCost: "500 - 700"
            },
            {
              interval: "80,000 km",
              timeLimit: "N/A",
              task: "Rear Differential Oil",
              details: "Simple drain and fill. Essential for RWD/xDrive longevity.",
              parts: ["75W-85 GL-5 (G2)"],
              importance: "Medium",
              laborDifficulty: "Easy",
              estimatedCost: "100 - 150"
            },
            {
              interval: "100,000 km",
              timeLimit: "N/A",
              task: "xDrive Transfer Case (If AWD)",
              details: "Sensitive to tyre circumference. Change fluid to prevent clutch slip.",
              parts: ["DTF-1 Fluid"],
              importance: "High",
              laborDifficulty: "Intermediate",
              estimatedCost: "200 - 300"
            }
          ]
        },
    
        tuningPotential: [
          { 
            stage: "Stage 1", 
            power: "380 - 400 hp", 
            notes: "MHD / Bootmod3. No hardware needed. Massive gains.",
            zeroToHundred: "4.2s",       // 0-100 km/h idő
            hundredToTwoHundred: "9.8s"  // 100-200 km/h idő
          },
          { 
            stage: "Stage 2", 
            power: "420 - 450 hp", 
            notes: "Requires High Flow Downpipe. Serious M3/M4 fighter.",
            zeroToHundred: "3.8s", 
            hundredToTwoHundred: "8.5s"
          },
          { 
            stage: "Stage 2+ (HPFP)", 
            power: "480 - 500 hp", 
            notes: "Ethanol mix (E30) + TU Fuel Pump upgrade.",
            zeroToHundred: "3.4s", 
            hundredToTwoHundred: "7.2s"
          }
        ],
    
        recommendedParts: {
          description: "The B58 is robust, but sensitive to sensors and plastic quality. Stick to OEM for engine management.",
          parts: [
            { category: "Oil Filter", brand: "Mann / Mahle (OEM)", note: "CRITICAL. Do not use cheap filters, they crumble." },
            { category: "Spark Plugs", brand: "NGK (94201)", note: "Best for Tuned engines. Gap to 0.022\" for Stage 2." },
            { category: "Coils", brand: "Eldor", note: "The most reliable OEM coil supplier for B58." },
            { category: "Charge Pipe", brand: "VRSF / FTP", note: "Essential upgrade. Stock plastic pipe blows up." },
            { category: "Coolant", brand: "BMW HT-12", note: "Do not mix Green/Blue coolants. B58 uses Green/Magenta depending on year." },
            { category: "Brakes", brand: "Zimmermann / Akebono", note: "Low dust pads recommended for M-Sport brakes." },
            { category: "Downpipe", brand: "VRSF / Wagner", note: "For sound and Stage 2 power (Sports Cat rec.)." }
          ]
        },
    
        oemPlusUpgrades: [
          {
            name: "M-Performance Power & Sound (MPPSK)",
            description: "Official BMW Tune + Valved Exhaust.",
            benefit: "Warranty friendly 360hp + Gunshot burbles. The best sounding exhaust."
          },
          {
            name: "TU (Technical Update) HPFP",
            description: "Retrofitting the High Pressure Fuel Pump from the B58TU (Supra/G20).",
            benefit: "Allows for higher ethanol mixes and more power on stock turbo."
          },
          {
            name: "xHP Transmission Tune",
            description: "Software flash for the ZF 8HP Gearbox.",
            benefit: "Faster shifts, removed torque limiters, customizable shift points."
          },
          {
            name: "LCI Tail Lights",
            description: "Updating pre-LCI lights to the 2017+ LED Blackline lights.",
            benefit: "Modernizes the rear end significantly."
          }
        ],

        fluidCapacities: [
          { system: "Engine Oil", capacity: "6.5 Liters", spec: "BMW LL-01 / 0W-20 or 5W-30" },
          { system: "Coolant (High Temp - Engine)", capacity: "7.2 Liters", spec: "BMW LC-18 (Green) or LC-87" },
          { system: "Coolant (Low Temp - Intercooler)", capacity: "2.8 Liters", spec: "Do not mix circuits!" },
          { system: "Automatic Transmission (8HP50)", capacity: "8.5 Liters (Dry)", spec: "ZF Lifeguard 8" },
          { system: "Rear Differential", capacity: "0.8 - 1.0 Liters", spec: "Hypoid Axle Oil G2" },
          { system: "Brake Fluid", capacity: "1.0 Liter", spec: "DOT 4 LV (Low Viscosity)" },
          { system: "Fuel Tank", capacity: "60 Liters", spec: "95 RON minimum (98+ Rec)" }
        ],
    
        torqueSpecs: [
          { part: "Oil Filter Cap", value: "25 Nm", note: "Do not overtighten! Plastic housing." },
          { part: "Oil Drain Plug", value: "25 Nm", note: "Replace copper washer" },
          { part: "Spark Plugs", value: "23 Nm", note: "Special thin-wall socket required" },
          { part: "Wheel Bolts", value: "140 Nm", note: "M14x1.25 bolts" },
          { part: "Valve Cover Bolts", value: "6 Nm", note: "Specific sequence required" },
          { part: "Intake Manifold", value: "15 Nm", note: "Check for leaks after" },
          { part: "Vanos Actuator", value: "8 Nm", note: "Fragile screws" }
        ],

        tuningGraphData: {
          // STOCK
          stock:  { hp: 326, nm: 450 },
          // STAGE 1 (MHD/BM3)
          stage1: { hp: 390, nm: 560 },
          // STAGE 2 (Downpipe)
          stage2: { hp: 440, nm: 620 },
          // STAGE 3 (Big Turbo)
          stage3: { hp: 600, nm: 750 }
        },
    
        engineeringData: {
          blockDesign: "Closed Deck / Electric Arc Wire Sprayed",
          crankshaft: "Forged Steel (Nitrided)",
          pistonSpeed: "High capability (Stroke 94.6mm)",
          alternator: "Intelligent Generator Control (IBS)",
          
          rotatingAssembly: {
            pistonConstruction: "Mahle Cast Aluminum (Grafal coated)",
            connectingRod: "Forged Fracture-Split",
            stroke: "94.6 mm (Undersquare design for torque)",
            bore: "82.0 mm",
            compressionRatio: "11.0:1 (High for turbo - efficient)",
            rodBearings: "Polymer Coated (Irox)"
          },
    
          cylinderHead: {
            valvetrain: "Double VANOS + Valvetronic Gen 3",
            intake: "Integrated Intercooler (W2A)",
            exhaust: "Integrated Exhaust Manifold (6-into-2)",
            valves: "Sodium filled exhaust valves"
          },
    
          oilAndCooling: {
            waterPump: "Mechanical Belt Driven (Unlike N55 Electric)",
            thermostat: "Heat Management Module (Rotary valve)",
            intercooler: "Indirect (Air-to-Water) integrated in manifold",
            heatEncapsulation: "Engine encapsulation for heat retention"
          },
    
          fuelSystem: {
            systemType: "HDEV5 Direct Injection",
            maxPressure: "200 Bar (Stock) / 350 Bar (TU Pump)",
            injectors: "Solenoid type (Laser drilled)"
          },
    
          tuningLimits: {
            maxSafeTorqueStock: "Approx. 700-750 Nm",
            maxSafePowerStock: "Approx. 600-650 whp (Closed Deck strength)",
            weakestLink: "Transmission (8HP50) limits torque before engine",
            ethanolLimit: "E30 max on stock fuel pump"
          }
        },
    
        transmission: {
          manual: {
            name: "ZF S6-53 (6-Speed Manual)",
            torqueLimit: "600 Nm",
            oilType: "MTF-LT-5",
            note: "Rubber feel stock, benefits from CDV delete and short shifter."
          },
          automatics: [
            {
              name: "ZF 8HP50 (8-Speed Steptronic)",
              torqueLimit: "500 Nm (Stock Rating) / 750+ (Real)",
              oilType: "ZF Lifeguard 8",
              note: "The benchmark automatic. Lightning fast with xHP flash. Reliable but needs fluid at 80k km."
            }
          ]
        },
    
        riskRating: 4,
        drivingExperience: "The B58 is a masterpiece of modern engineering. It feels like a large displacement N/A engine down low due to the small turbo and Valvetronic, but pulls relentlessly to redline. The ZF 8-speed is telepathic. In the 440i, it's a refined cruiser that turns into a drift missile with a downshift. It's less raw than the S55 in the M4, but much better for daily driving.",
        mechanicVerdict: "The 'German 2JZ'. Finally, a reliable BMW turbo 6. The closed deck block is bulletproof. Main issues are coolant leaks (stone chips) and the Vanos actuators (back of engine). Much easier to work on than an Audi V8, but the rear-mounted timing chain is a concern for very high mileage (300k+). Buy it.",
        commonIssues: [
          "Coolant low warning (Check both tanks)",
          "PCV Whistle (Valve cover replacement)",
          "Charge pipe crack (Plastic failure)",
          "Vanos Solenoid jams",
          "Oil filter housing leaks"
        ],
        repairCostEstimate: "$800 - $1,500 / year",
        
        model3DHotspots: [
          {
            x: 0.65, y: 0.22, z: 1.1, 
            label: "M-Sport Brakes",
            details: "Blue calipers. Great stopping power but high dust. Rotors are expensive.",
            critical: false
          },
          {
            x: -0.4, y: 0.25, z: -1.8, 
            label: "M-Performance Exhaust",
            details: "Check if MPPSK is installed (Carbon tips). Valves can rattle.",
            critical: false
          },
          {
            x: 0.1, y: 0.3, z: 0.5, 
            label: "Sunroof Drains",
            details: "Can clog, leading to water in footwell/electronics.",
            critical: false
          },
          {
            x: 0.1, y: 0.15, z: 2.1, 
            label: "Radiators (Vulnerable)",
            details: "Wide open grills leave radiators exposed to stone chips. Leak source #1.",
            critical: true
          }
        ],
        
        engineBayHotspots: [
          {
            x: 28, y: 55, // Bal oldal (A képen a piros légszűrő kúp)
            label: "BMS Intake (Upgrade)",
            details: "High flow intake installed. Increases induction sound and throttle response. Check filter cleanliness.",
            critical: false 
          },
          {
            x: 82, y: 45, // Jobb oldal közép (Hűtővíz tartály)
            label: "Coolant Expansion Tank",
            details: "Main engine coolant reservoir. Check level when cold. B58 has a second smaller tank for the intercooler nearby.",
            critical: true 
          },
          {
            x: 30, y: 30, // Balra hátul (Légszűrő mögött/mellett a tűzfalnál)
            label: "Oil Filter Housing",
            details: "Located at the back left. Notorious for leaking oil onto the belt. Also, plastic housing can crack if overtightened.",
            critical: true
          },
          {
            x: 88, y: 25, // Jobb hátul (Fekete doboz a sarokban)
            label: "DME / ECU",
            details: "Engine Control Unit located under the cover. On 2020+ models, this is locked against OBD tuning.",
            critical: false
          },
          {
            x: 50, y: 40, // Közép (Motorburkolat)
            label: "Valve Cover / PCV",
            details: "The PCV valve is integrated into this cover. If you hear a loud whistling/squealing at idle, the diaphragm has failed.",
            critical: false
          },
          {
            x: 45, y: 65, // Bal-Közép lent (A cső ami a motorba megy)
            label: "Charge Pipe",
            details: "Connects intercooler to throttle body. Stock plastic pipe is brittle and explodes under boost. Recommend aluminum upgrade.",
            critical: true
          }
        ],
        model3DPath: "/images/brands/bmw/f32/draco_f32_model.glb", 
        model3DScale: 2,
        model3DRotation: [0, 0, 0],
        engineBayImageUrl: "/images/brands/bmw/f32/b58_engine.jpg", 
    },
    {
      id: "n55b30m0-f15-35i",
      brand: "BMW",
      model: "X5 35i",
      generation: "F15 (2014-2018)",
      engineCode: "N55B30M0",
      profileId: "n55b30m0-f15-35i",
      displacement: "2,979 cc",
      power: "306 hp",
      torque: "400 Nm",
      fuelType: "Petrol (Direct Injection)",
      cylinders: 6,
      valves: 24,
      compression: "10.2:1",
      yearRange: "2014-2018",
      oilSpecification: "BMW Longlife-01 / LL-04 (5W-30 / 5W-40)",
  
      vulnerabilities: [
        "Elektromos vízpumpa és termosztát hirtelen meghibásodása (80-100e km)",
        "Műanyag Charge Pipe (töltőlevegő cső) törés/repedés nyomás alatt",
        "Olajszűrő ház tömítés (OFHG) szivárgás (az olaj a szíjra folyhat!)",
        "Szelepfedél tömítés (VCG) szivárgás és fedél repedés",
        "Vanos szolenoidok lerakadása/hibája",
        "Wastegate zörgés (turbó kopás magasabb futásnál)"
      ],
      timingType: "Láncos (Elöl szerelt - megbízhatóbb konstrukció, mint az N47/N20)",
      injectionType: "High Precision Injection (HPI) - Bosch Szolenoid (megbízhatóbb a korábbi piezo-nál)",
      engineLifespan: "250,000+ km (Rendszeres hűtőrendszer karbantartással)",
      turboType: "Single Turbo (TwinScroll - BorgWarner B03)",
      ecuType: "Bosch MEVD17.2",
      euroStandard: "Euro 6",
      maxPowerStockInternals: "400-420 hp (Open Deck blokk, nem bír annyit, mint a B58)",
      fuelConsumption: {
        city: "11.5 - 13.5 L/100km", // Az X5 súlya miatt városban iszákos
        highway: "8.5 - 9.5 L/100km",
        mixed: "10.8 L/100km",
        sporty: "15.0+ L/100km"
      },
      maintenanceSchedule: {
        oilAndFilters: [
          {
            interval: "10,000 - 12,000 km",
            task: "Olajcsere (Motul/Castrol 5W-40) + Szűrő",
            details: "A turbós üzem és a hőterhelés miatt a gyári 30 ezres periódust szigorúan felezni/harmadolni kell.",
            importance: "Critical",
            laborDifficulty: "Easy",
            estimatedCost: "45-65.000 HUF"
          }
        ],
        ignitionAndEngine: [
          {
            interval: "60,000 km",
            task: "Gyújtógyertyák és Trafók",
            details: "Az N55 érzékeny a gyújtáskimaradásra. Tuningolt autóknál a gyertyacsere intervalluma feleződik (30e km).",
            importance: "High",
            laborDifficulty: "Intermediate",
            estimatedCost: "60-90.000 HUF"
          }
        ],
        preventiveAndSuspension: [],
        engineMechanical: [
          {
            interval: "100,000 km",
            task: "Olajszűrő ház tömítés (OFHG) csere",
            details: "Kritikus pont: ha folyik, az olaj a hosszbordás szíjra jut, ami elszakadhat, és a darabjait beszívhatja a főtengely szimering (motorhalál).",
            importance: "Critical",
            laborDifficulty: "Intermediate",
            estimatedCost: "90-120.000 HUF"
          }
        ],
        coolingAndHvac: [
          {
            interval: "90,000 - 120,000 km",
            task: "Elektromos Vízpumpa + Termosztát",
            details: "Nincs előjele a hibának, a műanyag ház elreped vagy az elektronika leég. Tréler lesz a vége. Megelőző csere ajánlott.",
            importance: "Critical",
            laborDifficulty: "Intermediate",
            estimatedCost: "160.000+ HUF"
          }
        ],
        fluidsAndDrivetrain: []
      },
      tuningPotential: [
        {
          stage: "Stage 1",
          power: "360-370 hp",
          notes: "Csak szoftver. A gyári műanyag Charge Pipe-ot AZONNAL alumíniumra kell cserélni, mert el fog durrani.",
          zeroToHundred: "6.5s -> 5.9s (SUV súly)"
        },
        {
          stage: "Stage 2",
          power: "390-400 hp",
          notes: "Nagyobb Intercooler + Downpipe szükséges. Ez a biztonságos határ a gyári turbóval.",
          zeroToHundred: "5.9s -> 5.4s"
        }
      ],
      recommendedParts: {
        description: "A motor megbízható, de a műanyag segédberendezések (csövek, pumpák) gyengék.",
        parts: [
          { category: "Upgrade", brand: "FTP / Wagner", note: "Alumínium Charge Pipe (Kötelező, ha jót akarsz)." },
          { category: "Vízpumpa", brand: "Pierburg (Gyári)", note: "Csak a gyári minőség bírja a hőt." },
          { category: "Olaj", brand: "Motul 8100 X-cess / Ravenol VST", note: "5W-40 ajánlott a jobb hőtűrés miatt." }
        ]
      },
      riskRating: 3, // Közepes kockázat (a vízpumpa és tömítések miatt)
      commonIssues: [
        "Charge Pipe repedés (durranás, majd 'Drivetrain Malfunction')",
        "Olajszivárgások (Szelepfedél, Olajteknő)",
        "Vízpumpa hiba (túlmelegedés figyelmeztetés)",
        "Kiegyenlítőtartály repedés"
      ],
      repairCostEstimate: "Közepes/Magas (BMW alkatrészárak, elektromos vízpumpa drága)",
      mechanicVerdict: "Az N55 sokkal megbízhatóbb, mint a hírhedt előd N54. Nincsenek magasnyomású pumpa drámák. Egyetlen igazi ellensége a hanyag karbantartás és a műanyag alkatrészek öregedése. Az X5-ben sokat fogyaszt, de cserébe nagyon kulturált és nyomatékos.",
      drivingExperience: "Klasszikus sorhatos hang, azonnali reakció a TwinScroll turbó miatt. Nem olyan robbanékony, mint egy M-es motor, de a mindennapokra tökéletes, selymes járású erőforrás."
    }
]