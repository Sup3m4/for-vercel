export const jeepEngineTypes = {
    // ===========================================================================
    // OFF-ROAD ICONS (Wrangler, CJ, Gladiator)
    // ===========================================================================
    "Jeep-Wrangler-Gen 1 (YJ) (1987-1995)": [
      { name: "2.5", hp: "117-123 hp" },       // AMC Inline-4
      { name: "4.0", hp: "177-190 hp" },       // AMC Inline-6 (Legend)
      { name: "4.2", hp: "112 hp" }            // AMC Inline-6 (Carbureted, early models)
    ],
    "Jeep-Wrangler-Gen 2 (TJ) (1997-2006)": [
      { name: "2.5", hp: "120 hp" },           // AMC Inline-4
      { name: "2.4", hp: "147 hp" },           // Chrysler PowerTech (Neon engine)
      { name: "4.0", hp: "190 hp" }            // The final evolution of the AMC I6
    ],
    "Jeep-Wrangler-Gen 3 (JK) (2007-2018)": [
      { name: "3.8 V6", hp: "202 hp" },        // EGH (Early models, minivan engine)
      { name: "3.6 V6 Pentastar", hp: "285 hp" }, // The big upgrade (2012+)
      { name: "2.8 CRD", hp: "177-200 hp" }    // VM Motori Diesel
    ],
    "Jeep-Wrangler-Gen 4 (JL) (2018-present)": [
      { name: "2.0 Turbo", hp: "272 hp" },     // GME Hurricane
      { name: "3.6 V6 Pentastar", hp: "285 hp" },
      { name: "6.4 V8 HEMI (392)", hp: "470 hp" }, // Rubicon 392
      { name: "2.2 MultiJet II", hp: "200 hp" }, // Fiat Diesel
      { name: "2.0 4xe PHEV", hp: "380 hp" }   // Plug-in Hybrid
    ],
  
    "Jeep-CJ-CJ-5 (1954-1983)": [
      { name: "2.2 Hurricane", hp: "75 hp" },  // F-head 134
      { name: "3.7 V6", hp: "155 hp" },        // Dauntless Buick V6
      { name: "3.8 Inline-6", hp: "100 hp" },  // AMC 232
      { name: "4.2 Inline-6", hp: "112 hp" },  // AMC 258
      { name: "5.0 V8", hp: "150 hp" }         // AMC 304
    ],
    "Jeep-CJ-CJ-7 (1976-1986)": [
      { name: "2.5 Inline-4", hp: "85 hp" },   // GM Iron Duke
      { name: "4.2 Inline-6", hp: "112 hp" },  // AMC 258
      { name: "5.0 V8", hp: "150 hp" }         // AMC 304
    ],
  
    "Jeep-Gladiator-JT (2019-present)": [
      { name: "3.6 V6 Pentastar", hp: "285 hp" },
      { name: "3.0 V6 EcoDiesel", hp: "260 hp" }
    ],
  
    // ===========================================================================
    // LUXURY & FAMILY SUV (Grand Cherokee, Commander)
    // ===========================================================================
    "Jeep-Grand Cherokee-Gen 1 (ZJ) (1993-1998)": [
      { name: "4.0", hp: "190 hp" },           // AMC I6
      { name: "5.2 V8", hp: "220 hp" },        // Magnum V8
      { name: "5.9 V8", hp: "245 hp" },        // The "5.9 Limited" (Fastest SUV of its time)
      { name: "2.5 TD", hp: "115 hp" }         // VM Motori (The infamous 4-head engine)
    ],
    "Jeep-Grand Cherokee-Gen 2 (WJ) (1999-2004)": [
      { name: "4.0", hp: "190 hp" },           // PowerTech I6
      { name: "4.7 V8", hp: "235-265 hp" },    // PowerTech V8 (HO available)
      { name: "3.1 TD", hp: "140 hp" },        // VM Motori 5-cyl
      { name: "2.7 CRD", hp: "163 hp" }        // Mercedes OM612 (The good diesel)
    ],
    "Jeep-Grand Cherokee-Gen 3 (WK) (2005-2010)": [
      { name: "3.7 V6", hp: "210 hp" },
      { name: "4.7 V8", hp: "235-305 hp" },
      { name: "5.7 V8 HEMI", hp: "330-360 hp" },
      { name: "6.1 V8 HEMI SRT8", hp: "425 hp" },
      { name: "3.0 CRD", hp: "218 hp" }        // Mercedes OM642 V6
    ],
    "Jeep-Grand Cherokee-Gen 4 (WK2) (2011-2021)": [
      { name: "3.6 V6 Pentastar", hp: "295 hp" },
      { name: "5.7 V8 HEMI", hp: "360 hp" },
      { name: "6.4 V8 HEMI SRT", hp: "475 hp" },
      { name: "6.2 V8 Supercharged Trackhawk", hp: "707 hp" }, // The Beast
      { name: "3.0 V6 EcoDiesel", hp: "240-250 hp" } // VM Motori V6
    ],
    "Jeep-Grand Cherokee-Gen 5 (WL) (2021-present)": [
      { name: "3.6 V6 Pentastar", hp: "293 hp" },
      { name: "5.7 V8 HEMI", hp: "357 hp" },
      { name: "2.0 4xe PHEV", hp: "375 hp" }
    ],
  
    "Jeep-Commander-XK (2006-2010)": [
      { name: "3.7 V6", hp: "210 hp" },
      { name: "4.7 V8", hp: "235-305 hp" },
      { name: "5.7 V8 HEMI", hp: "330 hp" },
      { name: "3.0 CRD", hp: "218 hp" }        // Mercedes V6 Diesel
    ],
  
    // ===========================================================================
    // COMPACT & CROSSOVER
    // ===========================================================================
    "Jeep-Cherokee-Gen 2 (XJ) (1984-2001)": [
      { name: "2.5", hp: "121 hp" },
      { name: "4.0", hp: "177-190 hp" },
      { name: "2.1 TD", hp: "87 hp" },         // Renault Diesel
      { name: "2.5 TD", hp: "115 hp" }         // VM Motori
    ],
    "Jeep-Cherokee-Gen 3 (KJ) (2002-2007)": [
      { name: "2.4", hp: "147 hp" },
      { name: "3.7 V6", hp: "210 hp" },
      { name: "2.5 CRD", hp: "143 hp" },
      { name: "2.8 CRD", hp: "150-163 hp" }
    ],
    "Jeep-Cherokee-Gen 4 (KK) (2008-2013)": [
      { name: "3.7 V6", hp: "210 hp" },
      { name: "2.8 CRD", hp: "177-200 hp" }
    ],
    "Jeep-Cherokee-Gen 5 (KL) (2014-present)": [
      { name: "2.4 MultiAir", hp: "184 hp" },
      { name: "3.2 V6 Pentastar", hp: "271 hp" },
      { name: "2.0 MultiJet", hp: "140-170 hp" }, // Fiat Diesel
      { name: "2.2 MultiJet", hp: "185-200 hp" }
    ],
  
    "Jeep-Compass-Gen 1 (MK49) (2007-2016)": [
      { name: "2.0", hp: "156 hp" },           // World Engine
      { name: "2.4", hp: "170 hp" },
      { name: "2.0 CRD", hp: "140 hp" },       // VW TDI (early models)
      { name: "2.2 CRD", hp: "136-163 hp" }    // Mercedes OM651 (later models)
    ],
    "Jeep-Compass-Gen 2 (MP) (2017-present)": [
      { name: "1.4 MultiAir", hp: "140-170 hp" },
      { name: "1.3 Turbo", hp: "130-150 hp" }, // GSE
      { name: "1.6 MultiJet", hp: "120 hp" },
      { name: "2.0 MultiJet", hp: "140-170 hp" },
      { name: "1.3 4xe PHEV", hp: "190-240 hp" }
    ],
  
    "Jeep-Patriot-MK74 (2007-2016)": [
      { name: "2.0", hp: "156 hp" },
      { name: "2.4", hp: "170 hp" },
      { name: "2.0 CRD", hp: "140 hp" },       // VW TDI
      { name: "2.2 CRD", hp: "163 hp" }        // Mercedes
    ],
  
    "Jeep-Renegade-BU (2014-present)": [
      { name: "1.6 E-Torq", hp: "110 hp" },
      { name: "1.4 MultiAir", hp: "140-170 hp" },
      { name: "1.0 Turbo", hp: "120 hp" },     // GSE 3-cyl
      { name: "1.3 Turbo", hp: "150-180 hp" }, // GSE 4-cyl
      { name: "1.6 MultiJet", hp: "120 hp" },
      { name: "2.0 MultiJet", hp: "140-170 hp" },
      { name: "1.3 4xe PHEV", hp: "190-240 hp" }
    ],
  
    "Jeep-Avenger-Gen 1 (2023-present)": [
      { name: "1.2 Turbo", hp: "100 hp" },     // PSA PureTech (called "1.2 GSE" by Jeep)
      { name: "1.2 e-Hybrid", hp: "100+28 hp" }
    ]
  };