import type { EngineProfile } from "@/data/carDatabase"
export const alfaRomeoEngineProfiles: EngineProfile[] = [
//2.
    {
        id: "gme-t4-200",
        brand: "Alfa Romeo",
        model: "Giulia",
        generation: "Type 952 (2015-2023)",
        engineCode: "55273835",
        profileId: "gme-t4-200",
        displacement: "1,995 cc",
        power: "200 hp",
        torque: "330 Nm",
        fuelType: "Petrol (GME T4)",
        cylinders: 4,
        valves: 16,
        compression: "10.0:1",
        yearRange: "2016-Present",
    
        timingType: "Chain (MultiAir system)",
        injectionType: "Direct Injection (200 bar)",
        engineLifespan: "250,000+ km (MultiAir unit dependent)",
        turboType: "Twin-Scroll (Honeywell/Garrett)",
        ecuType: "Magneti Marelli MM10JA",
        euroStandard: "Euro 6d-TEMP",
        maxPowerStockInternals: "350 - 380 hp (Internals identical to 280hp version)",
    
        fuelConsumption: {
          city: "10.5 - 12.0 L/100km",
          highway: "6.2 - 7.5 L/100km",
          mixed: "8.4 - 9.5 L/100km",
          sporty: "14.0+ L/100km"
        },
    
        oilSpecification: "0W-30 ACEA C2 (Selenia Digitek Pure Energy)",
    
        vulnerabilities: [
          "Starter/Fuel Relays - Located behind the RH headlight, prone to water ingress causing no-start.",
          "Coolant Bleeder Screws - Factory plastic screws on coolant lines become brittle and snap.",
          "Battery Issues (Varta EFB) - Factory batteries die early, causing random 'Christmas Tree' dash lights.",
          "MultiAir Unit Failure - Sensitive to oil quality. Neglected oil changes kill the actuator unit.",
          "Turbo O-Rings - Coolant leaks around the turbocharger fittings are common.",
          "Oil Separator (PCV) - Blow-by issues on early 2016-2017 models causing oil consumption."
        ],
    
        maintenanceSchedule: {
          oilAndFilters: [
            {
              interval: "10,000 - 15,000 km",
              timeLimit: "1 year",
              task: "Engine Oil & Filter Service",
              details: "CRITICAL for MultiAir. Use 0W-30 ACEA C2. Never exceed 15k km.",
              parts: ["Filter (4892339AA)", "5.2L 0W-30 Oil"],
              importance: "Critical",
              laborDifficulty: "Easy",
              estimatedCost: "160 - 220"
            },
            {
              interval: "30,000 km",
              timeLimit: "2 years",
              task: "Cabin Air Filter",
              details: "Located inside the glovebox area. Filters PM2.5 particles.",
              parts: ["Cabin Filter (77367667)"],
              importance: "Low",
              laborDifficulty: "Easy",
              estimatedCost: "40 - 70"
            },
            {
              interval: "45,000 km",
              timeLimit: "3 years",
              task: "Engine Air Filter",
              details: "Twin-scroll turbo needs good airflow. OEM filter box is quite efficient.",
              parts: ["Air Filter (50534420)"],
              importance: "Medium",
              laborDifficulty: "Easy",
              estimatedCost: "60 - 90"
            }
          ],

          ignitionAndEngine: [
            {
              interval: "60,000 km",
              timeLimit: "4 years",
              task: "Spark Plugs (NGK Iridium)",
              details: "Direct injection engines wear plugs faster. Misfires can damage the cat.",
              parts: ["4x NGK ILZKR7G7G"],
              importance: "High",
              laborDifficulty: "Intermediate",
              estimatedCost: "180 - 250"
            },
            {
              interval: "100,000 km",
              timeLimit: "6 years",
              task: "Serpentine Belt",
              details: "Check tensioner for wobbling. Drives alternator and AC.",
              parts: ["Belt (71775716)", "Tensioner"],
              importance: "High",
              laborDifficulty: "Intermediate",
              estimatedCost: "200 - 300"
            },
            {
              interval: "150,000 km",
              timeLimit: "N/A",
              task: "MultiAir Filter Screen",
              details: "Tiny mesh filter in the MultiAir unit. If clogged, variable valve timing fails.",
              parts: ["Filter Screen"],
              importance: "Medium",
              laborDifficulty: "Advanced",
              estimatedCost: "150 - 250"
            }
          ],

          preventiveAndSuspension: [
            {
              interval: "N/A",
              timeLimit: "Immediately",
              task: "Replace Factory Relays",
              details: "Replace the 6 OMROM relays behind the headlight with sealed MOPAR ones.",
              parts: ["6x Mopar Micro Relay"],
              importance: "Critical",
              laborDifficulty: "Easy",
              estimatedCost: "80 - 120"
            },
            {
              interval: "4 Years",
              timeLimit: "4 years",
              task: "Battery Replacement (AGM Upgrade)",
              details: "Replace stock EFB battery with a high-quality AGM (e.g., Exide/Bosch) to fix electrical glitches.",
              parts: ["95Ah AGM Battery"],
              importance: "High",
              laborDifficulty: "Easy",
              estimatedCost: "250 - 350"
            },
            {
              interval: "100,000 km",
              timeLimit: "N/A",
              task: "Front Control Arm Bushings",
              details: "The double-wishbone suspension is precise but bushes wear out on bad roads.",
              parts: ["Lower Control Arms"],
              importance: "Medium",
              laborDifficulty: "Intermediate",
              estimatedCost: "600 - 800"
            }
          ],

          engineMechanical: [
            {
              interval: "160,000 km",
              timeLimit: "10 years",
              task: "PCV / Oil Separator Check",
              details: "If oil consumption rises, the diaphragm in the separator has failed.",
              parts: ["Oil Separator Assembly"],
              importance: "Medium",
              laborDifficulty: "Intermediate",
              estimatedCost: "300 - 450"
            },
            {
              interval: "Lifetime",
              timeLimit: "N/A",
              task: "Timing Chain",
              details: "Designed for life, but listen for rattle past 200k km. Tensioner is hydraulic.",
              parts: ["Chain Kit"],
              importance: "Low",
              laborDifficulty: "Expert",
              estimatedCost: "1,500+"
            }
          ],

          coolingAndHvac: [
            {
              interval: "N/A",
              timeLimit: "Preventive",
              task: "Bleeder Screw Upgrade",
              details: "Replace plastic coolant bleed screws with aftermarket metal ones to prevent bursting.",
              parts: ["Metal Bleeder Screws"],
              importance: "High",
              laborDifficulty: "Easy",
              estimatedCost: "30 - 50"
            },
            {
              interval: "120,000 km",
              timeLimit: "8 years",
              task: "Coolant Reservoir",
              details: "Plastic welds can fail over time causing leaks under pressure.",
              parts: ["Expansion Tank"],
              importance: "Medium",
              laborDifficulty: "Easy",
              estimatedCost: "120 - 160"
            }
          ],

          fluidsAndDrivetrain: [
            {
              interval: "80,000 - 100,000 km",
              timeLimit: "8 years",
              task: "ZF 8HP Transmission Fluid",
              details: "Alfa says 'Lifetime' but ZF recommends service. Crucial for longevity.",
              parts: ["ZF Lifeguard 8 Fluid", "Pan/Filter"],
              importance: "Critical",
              laborDifficulty: "Intermediate",
              estimatedCost: "500 - 700"
            },
            {
              interval: "2 Years",
              timeLimit: "2 years",
              task: "Brake Fluid Flush",
              details: "Brake-by-wire (IBS) system requires clean fluid.",
              parts: ["DOT 4 Class 6 (Low Viscosity)"],
              importance: "High",
              laborDifficulty: "Intermediate",
              estimatedCost: "100 - 150"
            }
          ]
        },
    
        tuningPotential: [
          { 
            stage: "Stage 1 (Unlock)", 
            power: "300 - 310 hp", 
            notes: "The 200hp engine is hardware-identical to the 280hp Veloce. A simple remap unlocks huge potential (+100hp).",
            zeroToHundred: "5.4s",        // Stock 200hp is 6.6s
            hundredToTwoHundred: "14.5s" 
          },
          { 
            stage: "Stage 2", 
            power: "320 - 330 hp", 
            notes: "Downpipe + Intake. Turbo limit is reached quickly after Stage 1.",
            zeroToHundred: "5.1s", 
            hundredToTwoHundred: "13.8s"
          },
          { 
            stage: "Hybrid Turbo", 
            power: "380 - 400 hp", 
            notes: "Larger compressor wheel needed. Fuel system becomes the limit.",
            zeroToHundred: "4.2s", 
            hundredToTwoHundred: "10.5s"
          }
        ],
    
        recommendedParts: {
          description: "Alfa Romeos are sensitive to electronics and sensors. Stick to OEM or high-end Tier 1 suppliers.",
          parts: [
            { category: "Battery", brand: "Varta (AGM) / Bosch", note: "Avoid standard lead-acid. Get AGM to solve random electrical errors." },
            { category: "Engine Oil", brand: "Selenia / Motul", note: "Selenia Digitek 0W-30 is the factory fill. Motul 8100 Eco-Clean is a great alternative." },
            { category: "Spark Plugs", brand: "NGK", note: "Only use the specific Iridium plugs designed for the GME engine." },
            { category: "Relays", brand: "Mopar / Omron", note: "Get the updated, sealed relays for the front fuse box." },
            { category: "Brakes", brand: "Brembo", note: "OEM supplier. The braking system is brake-by-wire (Continental MK C1)." }
          ]
        },
    
        oemPlusUpgrades: [
          {
            name: "Veloce / QV Paddle Shifters",
            description: "Adding the massive aluminium column-mounted paddle shifters.",
            benefit: "Best-in-class tactile feel. Transforms the driving experience completely."
          },
          {
            name: "DNA Race Mode",
            description: "Enabling 'Race Mode' via software (requires switch modification on non-QV).",
            benefit: "Disables traction control fully and opens exhaust valves (if equipped)."
          },
          {
            name: "CarPlay / Android Auto Retrofit",
            description: "Software activation or hardware module for 2016-2017 models.",
            benefit: "Modernizes the infotainment system significantly."
          }
        ],

        fluidCapacities: [
          { system: "Engine Oil", capacity: "5.2 Liters", spec: "0W-30 ACEA C2" },
          { system: "Coolant (Main)", capacity: "8.6 Liters", spec: "Paraflu UP (Red/Pink)" },
          { system: "Coolant (Intercooler)", capacity: "4.5 Liters", spec: "Separate low-temp circuit" },
          { system: "Automatic Transmission", capacity: "Approx 8.5L (Dry) / 4.5L (Service)", spec: "ZF Lifeguard 8 (Green)" },
          { system: "Rear Differential", capacity: "0.8 - 1.1 Liters", spec: "75W-85 GL-5" },
          { system: "Brake Fluid", capacity: "1.0 Liter", spec: "DOT 4 Class 6" }
        ],
    
        torqueSpecs: [
          { part: "Wheel Bolts", value: "120 Nm", note: "M14 x 1.5 bolts" },
          { part: "Oil Drain Plug", value: "20 Nm", note: "Plastic plug on some sumps, check carefully!" },
          { part: "Spark Plugs", value: "18 Nm", note: "Thin walls, do not overtighten" },
          { part: "Coil Pack Bolts", value: "10 Nm", note: "Standard M6 bolts" },
          { part: "Oil Filter Cap", value: "25 Nm", note: "Plastic housing" }
        ],

        crossReferenceParts: [
          {
            partName: "Oil Filter",
            category: "Maintenance",
            oem: { 
              brand: "Alfa Genuine", 
              code: "4892339AA", 
              approxPrice: "35 EUR" 
            },
            crossRef: { 
              brand: "UFI", 
              code: "25.140.00", 
              approxPrice: "12 EUR", 
              source: "OEM Supplier" 
            },
            note: "UFI makes the filter for Alfa. It is identical."
          },
          {
            partName: "Spark Plugs",
            category: "Ignition",
            oem: { 
              brand: "Alfa Genuine", 
              code: "55266340", 
              approxPrice: "30 EUR / pc" 
            },
            crossRef: { 
              brand: "NGK", 
              code: "ILZKR7G7G", 
              approxPrice: "14 EUR / pc", 
              source: "OEM Supplier" 
            },
            note: "Do not use generic plugs. The MultiAir system is sensitive to combustion stability."
          },
          {
            partName: "Brake Pads (Front 330mm)",
            category: "Brakes",
            oem: { 
              brand: "Alfa Genuine", 
              code: "77367660", 
              approxPrice: "180 EUR" 
            },
            crossRef: { 
              brand: "Brembo", 
              code: "P 23 182", 
              approxPrice: "75 EUR", 
              source: "OEM Supplier" 
            },
            note: "Standard Brembo 4-piston calipers are used on the 2.0T."
          },
          {
            partName: "Thermostat",
            category: "Cooling",
            oem: { 
              brand: "Alfa Genuine", 
              code: "50534228", 
              approxPrice: "140 EUR" 
            },
            crossRef: { 
              brand: "Gates", 
              code: "TH50588G1", 
              approxPrice: "65 EUR", 
              source: "Aftermarket" 
            },
            note: "Common failure point causing slow warmup."
          }
        ],

        tuningGraphData: {
          stock:  { hp: 200, nm: 330 },
          stage1: { hp: 310, nm: 460 },
          stage2: { hp: 330, nm: 480 },
          stage3: { hp: 400, nm: 520 }
        },
    
        engineeringData: {
          blockDesign: "Aluminum Open Deck",
          crankshaft: "Forged Steel (Offset crank for reduced friction)",
          pistonSpeed: "Moderate (Long stroke 90mm)",
          alternator: "Intelligent Alternator (IBS controlled)",
          
          rotatingAssembly: {
            pistonConstruction: "Cast Aluminum",
            wristPinDiameter: "N/A",
            connectingRodLength: "N/A",
            rodBoltSize: "N/A",
            crankMainJournal: "N/A",
            crankRodJournal: "N/A",
            rodRatio: "N/A"
          },
    
          cylinderHead: {
            combustionChamberVol: "N/A",
            intakePortFlow: "Variable (MultiAir)",
            valveSizes: "16V SOHC (UniAir actuation)",
            valveStemDiameter: "N/A",
            camshaftDuration: "Variable",
            lifterType: "Hydraulic Finger Followers"
          },
    
          oilAndCooling: {
            oilSquirters: "Yes",
            oilPumpType: "Variable Displacement",
            thermostatOpening: "88°C",
            oilCooler: "Water-to-Oil"
          },
    
          fuelSystem: {
            systemType: "Direct Injection (GDI)",
            maxPressure: "200 Bar",
            injectors: "Multi-hole"
          },
    
          tuningLimits: {
            maxSafeTorqueStock: "Approx. 500 Nm (Transmission limit is higher, rods are safe)",
            maxSafePowerStock: "Approx. 350-380 hp (Turbo is the limit)",
            maxSafeRPM: "6500 RPM",
            weakestLink: "Turbocharger (Stock unit is small)"
          }
        },
    
        transmission: {
          manual: {
            name: "Getrag G217 (Rare)",
            torqueLimit: "N/A",
            oilType: "N/A",
            note: "6-speed manual was available in early Euro models. Rare."
          },
          automatics: [
            {
              name: "ZF 8HP50 (8-Speed)",
              torqueLimit: "500 Nm (Official) / 600+ (Real world)",
              oilType: "ZF Lifeguard 8",
              note: "The industry standard for RWD automatics. Tuning the TCU (xHP) makes it shift as fast as a DCT."
            }
          ]
        },
    
        riskRating: 4,
        drivingExperience: "The Giulia is the handling benchmark of the segment. The 11.8:1 steering ratio is ferociously quick. The 200hp engine feels lively low-down but runs out of breath at the top end due to the factory detune. The chassis is clearly capable of handling double the power. It feels lighter and more agile than a 3-Series or C-Class.",
        mechanicVerdict: "Surprisingly reliable powertrain. The GME T4 engine is solid if oil changes are frequent (MultiAir needs clean oil). The bad reputation comes from early electrical glitches (relays, dead batteries). Mechanically, it is far superior to the old TwinSpark era. Buy a 2018+ model to avoid early teething issues.",
        commonIssues: [
          "Dead Battery / Electrical Gremlins",
          "Coolant leaks (Turbo O-rings, Bleed screws)",
          "Start/Stop unavailable message",
          "Relay failure (No start)",
          "Infotainment screen delamination (Early models)"
        ],
        repairCostEstimate: "$800 - $1,200 / year",
        model3DHotspots: [
          {
            x: 0.70, y: 0.3, z: 1.0, 
            label: "Front Relays (Hidden)",
            details: "Behind the RH headlight liner. 6 relays here control the starter/fuel. Water kills them.",
            critical: true
          },
          {
            x: -0.4, y: 0.35, z: -1.7, 
            label: "Battery (AGM)",
            details: "In the trunk. A weak battery causes 90% of the car's random warning lights.",
            critical: true
          },
          {
            x: 0.0, y: 0.4, z: 0.5, 
            label: "MultiAir Unit",
            details: "Top of engine. Variable valve system. Needs clean oil or it fails ($1500).",
            critical: false
          },
          {
            x: 0.3, y: 0.3, z: 0.2, 
            label: "Coolant Lines",
            details: "Check turbo coolant lines on the right side for pink crust/leaks.",
            critical: false
          }
        ],

        InspectionChecklist: [
          {
            id: "relay_check",
            category: "Electronics",
            question: "Does the car start immediately without multiple clicks?",
            howToCheck: "Listen near the front right wheel. Corroded relays cause intermittent starting issues.",
            costUSD: 150,
            costEUR: 100,
            severity: "HIGH"
          },
          {
            id: "coolant_leak_turbo",
            category: "Engine",
            question: "Is there a sweet smell of coolant or pink crust near the turbo?",
            howToCheck: "Inspect the O-rings where coolant lines enter the turbocharger (Passenger side).",
            costUSD: 300,
            costEUR: 250,
            severity: "MEDIUM"
          },
          {
            id: "multiair_noise",
            category: "Engine",
            question: "Is there excessive ticking/clattering from the top of the engine?",
            howToCheck: "MultiAir units can fail. Some ticking is normal (injectors), but loud clatter is bad.",
            costUSD: 1800,
            costEUR: 1500,
            severity: "HIGH"
          },
          {
            id: "infotainment_cracks",
            category: "Interior",
            question: "Is the infotainment screen crazed or delaminating?",
            howToCheck: "Early models (2016-2018) had screens that crack internally from heat.",
            costUSD: 900,
            costEUR: 800,
            severity: "LOW"
          },
          {
            id: "battery_health",
            category: "Electronics",
            question: "Are there random warnings (ESC, Steering, Engine) on the dash?",
            howToCheck: "If the dashboard lights up like a christmas tree, it is 99% a dying battery.",
            costUSD: 300,
            costEUR: 250,
            severity: "MEDIUM"
          }
        ],

        sisterModels: [
          { 
            name: "Alfa Romeo Stelvio 2.0T", 
            note: "Identical powertrain and chassis, just lifted. All engine issues apply." 
          },
          { 
            name: "Jeep Wrangler (JL) 2.0T", 
            note: "Uses a version of the GME T4 engine (Hurricane), but with different tuning and layout." 
          },
          { 
            name: "Maserati Grecale GT", 
            note: "Uses the GME T4 engine with a 48V mild hybrid system." 
          }
        ],
        
        engineBayHotspots: [
          {
            x: 50, y: 35, 
            label: "MultiAir Module",
            details: "The 'heart' of the engine head. Controls intake valves. Oil quality is paramount.",
            critical: true
          },
          {
            x: 20, y: 70, 
            label: "Coolant Reservoir",
            details: "Check for cracks in the plastic seams. The system runs at high pressure.",
            critical: false
          },
          {
            x: 80, y: 20, 
            label: "Relay Access",
            details: "Access through the wheel well liner. Preventive replacement is recommended.",
            critical: true
          },
          {
            x: 30, y: 50, 
            label: "Turbocharger",
            details: "Twin-scroll unit. Check O-rings on coolant lines entering the core.",
            critical: false
          }
        ],
        model3DPath: "/images/brands/alfa-romeo/Giulia/draco_giulia.glb",
        model3DScale: 80,
        model3DRotation: [0, 0, 0],
        engineBayImageUrl: "/images/brands/alfa-romeo/Giulia/2.0_Turbo/gme_t4_engine.png",
    }

]