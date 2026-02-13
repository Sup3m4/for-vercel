// enginecodes: 1Z, AAE, AAH, AAN, AAR, AAT, ABC, ABK, ABZ, ACE, ACK, ADP, ADR, AEB, AEC, AEH, AEL, AEW, AFB, AFN, AGA, AGB, AGN, AGR, AGU, AHC, AHF, AHH, AHK, AHL, AHU, AJK, AJL, AJM, AJQ, AKE, AKF, AKJ, AKL, AKN, ALF, ALG, ALH, ALT, ALZ, AMF, AMK, AML, ANA, ANB, ANK, ANY, APF, APG, APP, APR, APS, APT, APU, APX, APY, AQA, AQD, AQF, AQH, ARE, ARG, ARJ, ARM, ARS, ARY, ARZ, ASB, ASE, ASJ, ASN, ASV, ASZ, ATD, ATJ, ATL, AUA, AUK, AUM, AUQ, AVB, AVF, AVG, AVJ, AVU, AWA, AWT, AWX, AXR, AXW, AXX, AYM, AZB, AZC, AZR, BAD, BAG, BAM, BAR, BAT, BAU, BBJ, BBK, BBY, BCY, BCZ, BDB, BDG, BDH, BDV, BDW, BDX, BEX, BFB, BFL, BFM, BFQ, BFV, BGB, BGU, BHC, BHE, BHK, BHT, BHZ, BKC, BKD, BKE, BKH, BKN, BLB, BLF, BLP, BLR, BLS, BLX, BMJ, BMK, BMM, BMN, BNG, BNS, BPJ, BPK, BPP, BPW, BRB, BRD, BRE, BRV, BSE, BSF, BSM, BTR, BUB, BUG, BUH, BUJ, BUL, BUN, BVJ, BVN, BVY, BWA, BWE, BXA, BXE, BYH, BYT, BZB, CABA, CABB, CABD, CAEA, CAEB, CAGA, CAGB, CAGC, CAHA, CAJA, CAKA, CALA, CALB, CAMA, CANA, CAPA, CASA, CAUA, CAVG, CAWB, CAXA, CAXC, CAYB, CAYC, CBAB, CBBB, CBZA, CBZB, CCBA, CCDA, CCFA, CCFC, CCGA, CCSA, CCWA, CCZA, CCZC, CDAA, CDHA, CDHB, CDLA, CDLB, CDLH, CDNB, CDNC, CDRA, CDSB, CDTA, CDUC, CDUD, CDYA, CDYC, CEJA, CEPA, CEPB, CESA, CEUA, CEUC, CFFB, CFGB, CFHD, CFSA, CGKA, CGLB, CGLC, CGQB, CGTA, CGWA, CGWB, CGXB, CHHC, CHJA, CHPB, CHVA, CHZB, CHZD, CHZE, CHZJ, CJCA, CJCB, CJCC, CJCD, CJEB, CJGA, CJMA, CJSA, CJSB, CJXC, CJXG, CJZA, CKVB, CKVC, CLAA, CLAB, CLHA, CLLB, CMBA, CMDA, CMEA, CMPA, CMUA, CNCD, CNDA, CNHA, CNTC, CNVA, CNYA, CPMA, CPSA, CPTA, CRBC, CRCA, CRDB, CREC, CRKB, CRLB, CRTC, CRTF, CSPA, CSPB, CSWB, CTBA, CTBD, CTCC, CTEC, CTGA, CTGE, CTHG, CTSA, CTTA, CTUA, CTUC, CTUD, CTVA, CTXA, CTYA, CTYB, CUKB, CULB, CULC, CUNA, CUPA, CUSB, CUVC, CUWA, CVJA, CVKB, CVNA, CVUA, CVUB, CVUC, CVZA, CWGD, CWUB, CWWB, CWZA, CXMA, CXSA, CXUA, CXYA, CYGA, CYPA, CYPB, CYRB, CYVB, CZAC, CZCA, CZDA, CZDD, CZEA, CZGA, CZGB, CZPB, CZSE, CZZA, DADA, DAJB, DAXB, DAXC, DAZA, DBGA, DBKA, DCBD, DCBE, DCPC, DCUE, DDTA, DDVB, DDVC, DDWA, DDYA, DECA, DEMA, DETA, DEUA, DEUB, DEUC, DEWA, DEZD, DFBA, DFGA, DFHA, DGEA, DHUB, DHVA, DHXA, DHXC, DJHA, DJPB, DKAB, DKAC, DKLA, DKLD, DKNA, DKRF, DKTA, DKTC, DKWA, DKZA, DKZC, DLAA, DLAC, DLGA, DLHA, DLZA, DMKC, DMSB, DMTA, DMWA, DNFB, DNNA, DNTA, DNUE, DNUF, DNWA, DPAA, DPCA, DSRB, DSUD, DTNA, DTPA, DTSA, DTUA, DXDB, DXPA, DYGA

export interface EngineCodes {
  id: string;
  name: string;
  
  // 1. IDENTITY & PERFORMANCE (Most Relevant)
  horsepower: string;
  torque: string;
  fuelType: string;
  configuration: string;
  displacement: string;
  boreStroke: string;
  compression: string;
  firingOrder: string;
  maxRpm: string;
  imageUrl?: string;
  productionYears: string; 
  applications: string;
  

  // 2. RELIABILITY & VERDICT (Critical for Users)
  reliabilityScore: number;
  maintenanceComplexity: string;
  maintenanceCost: number;
  commonFailures: string[];
  pros: string[];
  cons: string[];
  weakestLink: string;
  tuningPotential: number;
  carbonBuildupRisk: string;

  // 3. HARDWARE & CONSTRUCTION
  blockMaterial: string;
  blockConstruction: string;
  deckWebbing: string;
  cylinderCoating: string;
  bedplate: string;
  crankshaftType: string;
  connectingRods: string;
  pistonDesign: string;
  pistonRingCoating: string;
  balanceShafts: string;
  valveSpecs: string;
  headFasteners: string;
  headMaterial: string;
  valvetrain: string;
  valveSprings: string;

  // 4. SYSTEMS & AUXILIARIES
  injectionSystem: string;
  fuelPressure: string;
  injectorPosition: string;
  hpfpDrive: string;
  fuelSystemHeadroom: string;
  turboCharger: string;
  turboBearing: string;
  actuatorType: string;
  intercoolerSystem: string;
  intakePlenum: string;
  throttleBody: string;
  timingChainSystem: string;
  timingLocation: string;
  timingTensioner: string;
  variableValveTiming: string;
  valveLiftSystem: string;
  exhaustManifold: string;
  coolingStrategy: string;
  thermostatControl: string;
  waterPumpType: string;
  waterPumpImpeller: string;
  oilCoolerType: string;
  oilPumpDesign: string;
  oilSquirters: string;
  oilFilterLocation: string;
  dipstick: string;
  egrDesign: string;
  pcvSystem: string;
  opf_dpf: string;
  sensorArchitecture: string;
  ecuArchitecture: string;
  tuningProtection: string;

  // 5. PHYSICAL DATA & NVH
  dryWeight: string;
  fullyEquippedWeight: string;
  weightDistribution: string;
  bellhousingPattern: string;
  harmonicBalancer: string;
  engineMountingType: string;
  acousticInsulation: string;
  torsionalVibrationDamper: string;
  intakeResonators: string;
  activeNoiseCancellation: boolean;
  mountingOrientation: string;
  enginePlacement: string;
  drivetrainCompatibility: string;
  sumpType: string;
  stockBlockLimit: string;

  warnings?: Partial<Record<keyof Omit<EngineCodes, 'warnings'>, string>>; //7-15 hiba motorkódonként
}

//1Z

export const audiEngineCodesList: Record<string, EngineCodes> = {
  "1Z": {
    id: "1Z",
    name: "VAG 1.9 TDI Gen 1 (1Z) - The VP37 Original",
  
    // --- 1. OVERVIEW & PERFORMANCE (The Baseline) ---
    fuelType: "Diesel",
    horsepower: "66 kW / 90 HP @ 4000 RPM",
    torque: "202 Nm @ 1900 RPM",
    configuration: "Inline-4",
    displacement: "1896 cc",
    boreStroke: "79.5 x 95.5 mm (Undersquare - Torque biased)",
    compression: "19.5:1",
    firingOrder: "1-3-4-2",
    maxRpm: "4600 RPM (Soft cut) - 5100 RPM (Hard cut)",
    productionYears: "1991 - 1996",
    applications: "Audi 80 (B4), A4 (B5), A6 (C4), VW Golf Mk3, Passat (B4), Vento, SEAT Ibiza/Toledo",
  
    // --- 2. BLOCK & ROTATING ASSEMBLY (The Bones) ---
    blockMaterial: "Grey Cast Iron (GG25) - Extremely durable",
    blockConstruction: "Open Deck (but with massive inter-cylinder wall thickness)",
    deckWebbing: "Heavy-duty casting (derived from 1.6TD but significantly reinforced)",
    cylinderCoating: "None (Standard Honed Iron)",
    bedplate: "No (Traditional 5 individual main bearing caps)",
    crankshaftType: "Forged Steel, 4 counterweights (Standard nose design)",
    connectingRods: "Forged Steel I-Beam (Traditional split, NOT fracture-split on 1Z)",
    pistonDesign: "Cast Aluminum (Mahle/Alcan) with toroidal combustion bowl & steel ring carrier",
    pistonRingCoating: "Chrome-ceramic top ring, plasma-coated oil control ring",
    balanceShafts: "None",
    headFasteners: "M12 Poly-drive (Ribe) stretch bolts (10.9 grade)",
  
    // --- 3. FUEL & COMBUSTION (The Heart: VP37) ---
    injectionSystem: "Bosch VP37 Electronic Distributor Pump (Axial Plunger)",
    fuelPressure: "Injector Opening: 190 bar (Pilot) / 300 bar (Main) - Peak line pressure ~850 bar",
    injectorPosition: "Direct Injection (Vertical, screwed into cylinder head)",
    hpfpDrive: "Tooth Belt driven (Single belt drives Camshaft + Pump)",
    fuelSystemHeadroom: "Stock 10mm plunger pump maxes out at ~110-115 HP. Upgrade to 11mm (from Auto) or 12mm required for high power.",
  
    // --- 4. FORCED INDUCTION (The Turbo) ---
    turboCharger: "Garrett GT1544 or KKK K03-006 (Wastegate type - Fixed Geometry)",
    turboBearing: "Journal Bearing (Oil cooled)",
    actuatorType: "Pneumatic Pressure Actuator (Boost pressure pushes wastegate open)",
    intercoolerSystem: "Side Mount Intercooler (SMIC) - often undersized for tuning",
    intakePlenum: "Cast Aluminum, fixed geometry (EGR valve integrated)",
    throttleBody: "None (Diesel regulation via fuel mass only)",
  
    // --- 5. CYLINDER HEAD & VALVETRAIN ---
    headMaterial: "Cast Aluminum Alloy",
    valvetrain: "SOHC (Single Overhead Cam), 2 valves/cyl (8v), Hydraulic Bucket Tappets",
    valveSpecs: "Intake: 36.0mm / Exhaust: 31.5mm (Standard stems)",
    timingChainSystem: "Toothed Belt (Gates PowerGrip style)",
    timingLocation: "Front (Service friendly)",
    timingTensioner: "Semi-automatic spring-loaded tensioner (Requires manual pretension)",
    variableValveTiming: "None",
    valveLiftSystem: "None",
    exhaustManifold: "Cast Iron (Separate from Turbo)",
    valveSprings: "Single conical springs",
  
    // --- 6. LUBRICATION & COOLING ---
    oilPumpDesign: "Internal Gear Pump (Chain-driven from crankshaft nose)",
    oilSquirters: "Yes (Oil spray jets for piston cooling)",
    oilFilterLocation: "Front of block, angled housing (Easy access)",
    dipstick: "Physical dipstick present",
    coolingStrategy: "Longitudinal flow (Block to Head)",
    thermostatControl: "Traditional Wax Pellet (87°C opening)",
    waterPumpType: "Mechanical (Driven by V-belt/Serpentine belt - NOT timing belt on early 1Z)",
    waterPumpImpeller: "Plastic (Early) / Metal (Recommended upgrade)",
    oilCoolerType: "Oil-to-Water Heat Exchanger (Donut style at oil filter base)",
  
    // --- 7. EMISSIONS & ELECTRONICS ---
    egrDesign: "Pneumatic EGR valve (Vacuum operated), prone to heavy soot clogging",
    pcvSystem: "Puck-style pressure regulator valve on valve cover (vents to intake)",
    opf_dpf: "None (Euro 2 standard)",
    ecuArchitecture: "Bosch MSA 12 (8-bit, Plastic case) or MSA 15 (16-bit, Metal case)",
    tuningProtection: "Socketed Chips (MSA12 - Requires soldering) / OBD Flash (MSA15 late models)",
    sensorArchitecture: "Needle Lift Sensor (Injector #3), MAF (Pierburg/Bosch), MAP (often inside ECU)",
  
    // --- 8. PHYSICS & MOUNTING ---
    dryWeight: "Approx. 135 kg",
    fullyEquippedWeight: "Approx. 165 kg",
    weightDistribution: "Tall engine, COG relatively high",
    bellhousingPattern: "VAG 012 / 02A (4-cylinder pattern)",
    mountingOrientation: "Longitudinal (Audi A4 B5) or Transverse (Golf 3 / Audi 80 B4)",
    enginePlacement: "Front-engine",
    drivetrainCompatibility: "FWD or Quattro (Torsen)",
    sumpType: "Wet Sump (Stamped Steel or Cast Aluminum depending on chassis)",
  
    // --- 9. NVH & REZONANCIA ---
    harmonicBalancer: "Rubber-damped heavy steel pulley",
    engineMountingType: "Passive Hydraulic Mounts (Oil filled rubber)",
    acousticInsulation: "Plastic top cover (often missing), hood liner",
    torsionalVibrationDamper: "Single Mass Flywheel (Early 80/Golf) or Dual Mass (A4 B5)",
    intakeResonators: "Basic intake muffler box",
    activeNoiseCancellation: false,
  
    // --- 10. TUNING & HARDWARE LIMIT ---
    stockBlockLimit: "Approx. 200 HP (Connecting rods are the limit)",
    weakestLink: "Crankshaft Timing Gear Keyway ('Crank Nose'), Connecting Rods",
    tuningPotential: 6, // 1-10 (Limited by fuelling/head flow compared to PD engines)
    carbonBuildupRisk: "Medium (Intake manifold clogs from EGR + Oil breather sludge)",
  
    // --- 11. VERDICT & RELIABILITY (The Reality Check) ---
    reliabilityScore: 9, // Legendary status
    maintenanceComplexity: "Low (Very accessible, simple mechanics)",
    maintenanceCost: 2, // 1-10 Scale (Extremely cheap parts)

    warnings: {
      crankshaftType: "CRITICAL: The 'Crank Nose' issue. The timing gear keyway on the crankshaft can wear down, causing the timing to jump, which leads to total engine destruction.",
      ecuArchitecture: "Relay 109 failure is common; it cuts power to the ECU without warning, causing the engine to die instantly in traffic.",
      actuatorType: "The N75 boost control valve and its braided vacuum lines are prone to failure, forcing the car into 'Limp Mode' and killing all power.",
      injectionSystem: "The Bosch VP37 quantity adjuster can become contaminated with metal debris, leading to erratic idling or a 'shudder' during deceleration.",
      turboCharger: "Wastegate actuators on early units often rust through or seize, leading to overboost and potential turbocharger overspeed failure.",
      torsionalVibrationDamper: "The Dual Mass Flywheel (DMF) is a wear item; failure causes severe vibrations that can damage the gearbox input shaft.",
      egrDesign: "Excessive soot buildup in the intake manifold due to the EGR system can restrict airflow by up to 50%, causing heavy smoke and loss of power.",
      oilPumpDesign: "The intermediate shaft that drives the oil pump has internal bushings that wear out, leading to low oil pressure warnings when the engine is hot."
    },
    
    commonFailures: [
      "Crankshaft timing gear wear ('Crank Nose' issue) leading to potential timing jumps and engine damage.",
      "Power supply relay (Relay 109) failure, causing sudden engine stalling or starting problems.",
      "Turbo boost control valve (N75) malfunctions, often resulting in 'Limp Mode'.",
      "Perishing of original braided vacuum lines, leading to boost and EGR control issues.",
      "Contamination or wear of the injection pump quantity adjuster, causing unstable idle or performance."
    ],
    
    pros: [
      "Indestructible Block: Can easily do 500,000+ km with basic maintenance. The iron block is immensely rigid.",
      "Fuel Economy: Easily achieves 4.5 - 5.0 L/100km even in heavy chassis due to high thermal efficiency and low friction.",
      "Simplicity: No DPF, No complex VGT vanes (on 1Z), No AdBlue, No high-pressure rail sensors. It runs even with a dead battery once started (mostly).",
      "Bio-fuel Compatibility: The robust VP37 pump tolerates lower lubricity fuels and vegetable oil blends better than any PD or CR engine."
    ],
    
    cons: [
      "Agricultural Refinement: High NVH (Noise, Vibration, Harshness). The 'Tractor' idle sound is distinct and unavoidable due to the direct injection knock.",
      "Crank Nose Weakness: A critical design flaw that requires vigilant monitoring during every timing belt change.",
      "Slow Warm-up: Thermal efficiency is so high it takes a long time to produce cabin heat in winter (Coolant glow plugs often fail).",
      "Limited Stock Power: 90 HP is modest. Overtaking requires momentum compared to modern variable-geometry turbo diesels."
    ],
    imageUrl: "/images/engines/1Z.png"
  },

  //AAE

  "AAE": {
    id: "AAE",
    name: "Audi 2.0 8v (AAE) - The Mono-Motronic Workhorse",
  
    // --- 1. OVERVIEW & PERFORMANCE (The Baseline) ---
    fuelType: "Petrol",
    horsepower: "74 kW / 101 hp @ 5500 RPM",
    torque: "157 Nm @ 2750-3500 RPM",
    configuration: "Inline-4",
    displacement: "1984 cc",
    boreStroke: "82.5 x 92.8 mm (Undersquare - Torque focused)",
    compression: "9.2:1",
    firingOrder: "1-3-4-2",
    maxRpm: "6200 RPM",
    productionYears: "1990 - 1996",
    applications: "Audi 100 (C4), Audi A6 (C4)",
    
  
    // --- 2. BLOCK & ROTATING ASSEMBLY (The Bones) ---
    blockMaterial: "Grey Cast Iron (GG25) - High thermal stability",
    blockConstruction: "Open Deck (Standard VAG 4-cylinder geometry)",
    deckWebbing: "Standard cast webbing (Derived from the 1.8/2.0 EA827 base)",
    cylinderCoating: "None (Standard Honed Iron)",
    bedplate: "No (Traditional 5 individual main bearing caps)",
    crankshaftType: "Cast Iron, 4 counterweights (Standard economy design)",
    connectingRods: "Forged Steel I-Beam (Traditional split, robust for NA power levels)",
    pistonDesign: "Cast Aluminum (Mahle/Kolbenschmidt) with flat top & valve reliefs",
    pistonRingCoating: "Standard Chrome top ring, traditional oil control rings",
    balanceShafts: "None",
    headFasteners: "M11 Poly-drive (Ribe) stretch bolts (Standard grade)",
  
    // --- 3. FUEL & COMBUSTION (The Heart: Mono-Motronic) ---
    injectionSystem: "Bosch Mono-Motronic MA 2.2 (Single Point Injection - SPI)",
    fuelPressure: "System Pressure: 0.8 - 1.2 bar (Low pressure TBI system)",
    injectorPosition: "Throttle Body Injection (Central injector above butterfly valve)",
    hpfpDrive: "None (Electric in-tank lift pump only)",
    fuelSystemHeadroom: "None - The single injector and TBI unit are the absolute bottleneck.",
  
    // --- 4. FORCED INDUCTION (The Turbo) ---
    turboCharger: "None (Naturally Aspirated)",
    turboBearing: "N/A",
    actuatorType: "N/A",
    intercoolerSystem: "N/A",
    intakePlenum: "Cast Aluminum 'Frying Pan' style air cleaner housing",
    throttleBody: "Single barrel 38mm with integrated fuel injector & idle actuator",
  
    // --- 5. CYLINDER HEAD & VALVETRAIN ---
    headMaterial: "Cast Aluminum Alloy",
    valvetrain: "SOHC (Single Overhead Cam), 2 valves/cyl (8v), Hydraulic Bucket Tappets",
    valveSpecs: "Intake: 40.0mm / Exhaust: 33.0mm (Solid stems)",
    timingChainSystem: "Toothed Belt (Traditional rubber/fabric timing belt)",
    timingLocation: "Front (High serviceability)",
    timingTensioner: "Manual eccentric pulley (Requires manual tension adjustment)",
    variableValveTiming: "None",
    valveLiftSystem: "None",
    exhaustManifold: "Cast Iron 4-2-1 (Standard log style)",
    valveSprings: "Single conical springs",
  
    // --- 6. LUBRICATION & COOLING ---
    oilPumpDesign: "External Gear Pump (Driven by intermediate shaft)",
    oilSquirters: "No (Relies on splash lubrication for piston cooling)",
    oilFilterLocation: "Right side of block, horizontal mount",
    dipstick: "Physical dipstick present",
    coolingStrategy: "Longitudinal flow (Standard block-to-head path)",
    thermostatControl: "Traditional Wax Pellet (87°C opening)",
    waterPumpType: "Mechanical (Driven by external V-belt/Serpentine belt)",
    waterPumpImpeller: "Plastic (Early) / Metal (Recommended aftermarket upgrade)",
    oilCoolerType: "Oil-to-Water Heat Exchanger (Donut style at oil filter base)",
  
    // --- 7. EMISSIONS & ELECTRONICS ---
    egrDesign: "None (Internal EGR via valve overlap strategy)",
    pcvSystem: "Simple breather hose to intake boot (Vacuum regulated)",
    opf_dpf: "None (Euro 1 / Euro 2 standard)",
    ecuArchitecture: "Bosch Mono-Motronic (35-pin connector)",
    tuningProtection: "None (but un-tuneable due to SPI limitations)",
    sensorArchitecture: "Single Lambda (Narrowband), Hall Sender (Distributor), IAT (TBI integrated)",
  
    // --- 8. PHYSICS & MOUNTING ---
    dryWeight: "Approx. 132 kg",
    fullyEquippedWeight: "Approx. 155 kg",
    weightDistribution: "Relatively light front end (4-cylinder advantage)",
    bellhousingPattern: "VAG 012 / 01A (Small block pattern)",
    mountingOrientation: "Longitudinal (Audi 100/A6 C4 chassis)",
    enginePlacement: "Front-engine",
    drivetrainCompatibility: "FWD (Front-wheel drive)",
    sumpType: "Wet Sump (Stamped Steel)",
  
    // --- 9. NVH & REZONANCIA ---
    harmonicBalancer: "Solid steel pulley (early) / Rubber-damped (late)",
    engineMountingType: "Passive Hydraulic Mounts (Standard oil-filled rubber)",
    acousticInsulation: "Minimal hood liner, basic plastic TBI cover",
    torsionalVibrationDamper: "Single Mass Flywheel (SMF) - Traditional reliability",
    intakeResonators: "None",
    activeNoiseCancellation: false,
  
    // --- 10. TUNING & HARDWARE LIMIT ---
    stockBlockLimit: "Approx. 150 hp (Limited by head flow and TBI, not internals)",
    weakestLink: "Mono-Motronic injection unit & Rubber intake flange",
    tuningPotential: 1, // 1-10 (Virtually zero without conversion to MPI)
    carbonBuildupRisk: "Low (Wet manifold injection continuously washes intake valves)",
  
    // --- 11. VERDICT & RELIABILITY (The Reality Check) ---
    reliabilityScore: 8, // Near indestructible mechanics
    maintenanceComplexity: "Low (The benchmark for a simple Audi engine)",
    maintenanceCost: 1, // 1-10 Scale (Cheapest VAG parts bin)

    warnings: {
      throttleBody: "The rubber mounting flange beneath the Mono-Motronic unit frequently cracks, causing massive vacuum leaks and a high or erratic idle.",
      sensorArchitecture: "The Hall Sender inside the ignition distributor is a notorious failure point; when it dies, the engine will not start or will stall randomly when hot.",
      waterPumpImpeller: "Original plastic impellers often separate from the metal shaft, leading to instant overheating while the temperature gauge still looks normal at first.",
      coolingStrategy: "Plastic coolant flanges on the back of the cylinder head become brittle and crack, leading to sudden, hard-to-trace coolant loss.",
      hpfpDrive: "The electric in-tank fuel pump on these aging C4 chassis is prone to sudden failure, especially if the car is often driven with a near-empty tank.",
      oilCoolerType: "The seal on the oil-to-water heat exchanger often perishes, leading to oil mixing with the coolant (mayonnaise) or vice-versa.",
      oilPumpDesign: "Intermediate shaft gear wear can cause a high-pitched 'whining' noise; if ignored, it can lead to oil pump drive failure and engine seizure.",
      thermostatControl: "The thermostat often fails in the 'open' position, preventing the engine from ever reaching operating temperature, which ruins fuel economy."
    },
    
    commonFailures: [
      "Throttle body mounting flange cracking, causing severe vacuum leaks and rough idle.",
      "Hall sender in the ignition distributor failing, leading to sudden engine stalls or no-start conditions.",
      "Coolant leaks from aging plastic flanges and connectors at the rear of the cylinder head.",
      "Original braided vacuum hoses rotting over time, affecting idle stability and cold start performance.",
      "Idle air control (IAC) stepper motor or throttle actuator sticking, causing erratic idling or stalling."
    ],
    
    pros: [
      "Extreme simplicity: minimal sensors and a single injector make diagnosis exceptionally easy.",
      "Exceptional reliability: the iron block and simple top end can easily exceed 500,000 km.",
      "Serviceability: the spacious C4 engine bay allows for easy access to all components, lowering labor costs.",
      "Parts availability: shares a high degree of components with other VAG models, making repairs very cheap."
    ],
    
    cons: [
      "Underpowered: 101 hp is barely adequate for the heavy Audi A6 C4 chassis, especially under load.",
      "Fuel Inefficiency: inefficient fuel atomization compared to modern multi-point systems, leading to higher consumption.",
      "Limited Tuning: the Mono-Motronic system offers virtually no headroom for meaningful performance gains.",
      "Aging Electronics: many units now suffer from ghost idle issues due to wear in the mechanical throttle actuator."
    ],
    imageUrl: "/images/engines/AAE.png"
  },












};