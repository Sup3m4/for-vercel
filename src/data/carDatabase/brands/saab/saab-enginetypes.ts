export const saabEngineTypes = {
    // ===========================================================================
    // SAAB 9-3 GENERATIONS
    // ===========================================================================
    "Saab-9-3-Gen 1 Coupe (YS3D) (1998-2002)": [
      { name: "2.0i", hp: "130 hp" },
      { name: "2.0t (LPT)", hp: "154 hp" },
      { name: "2.0 Turbo (HOT)", hp: "185-200 hp" },
      { name: "2.3 Turbo Viggen", hp: "225-230 hp" },
      { name: "2.2 TiD", hp: "115-125 hp" }
    ],
    "Saab-9-3-Gen 1 Convertible (YS3D) (1998-2003)": [
      { name: "2.0i", hp: "130 hp" },
      { name: "2.0t (LPT)", hp: "150-154 hp" },
      { name: "2.0 Turbo (HOT)", hp: "185-205 hp" }, // Aero
      { name: "2.3 Turbo Viggen", hp: "230 hp" }
    ],
    "Saab-9-3-Gen 1 5-door (YS3D) (1998-2002)": [
      { name: "2.0i", hp: "130 hp" },
      { name: "2.0t", hp: "154 hp" },
      { name: "2.0 Turbo", hp: "185-205 hp" },
      { name: "2.3 Turbo Viggen", hp: "225 hp" },
      { name: "2.2 TiD", hp: "115-125 hp" }
    ],
    
    // Gen 2 SS/SC/CV (The "Sports" Era)
    "Saab-9-3-Gen 2 SportSedan (YS3F) (2003-2011)": [
      { name: "1.8i", hp: "122 hp" },
      { name: "1.8t", hp: "150 hp" },                // Actually 2.0L
      { name: "2.0t", hp: "175 hp" },
      { name: "2.0T Aero", hp: "210 hp" },
      { name: "2.8 V6 Turbo", hp: "250-255 hp" },
      { name: "2.8 V6 Turbo X", hp: "280 hp" },
      { name: "1.9 TiD", hp: "120-150 hp" },
      { name: "1.9 TTiD", hp: "180 hp" },            // Twin Turbo
      { name: "2.2 TiD", hp: "125 hp" }
    ],
    "Saab-9-3-Gen 2 SportCombi (YS3F) (2005-2011)": [
      { name: "1.8i", hp: "122 hp" },
      { name: "1.8t", hp: "150 hp" },
      { name: "2.0t", hp: "175 hp" },
      { name: "2.0T Aero", hp: "210 hp" },
      { name: "2.8 V6 Turbo", hp: "250-255 hp" },
      { name: "2.8 V6 Turbo X", hp: "280 hp" },
      { name: "1.9 TiD", hp: "120-150 hp" },
      { name: "1.9 TTiD", hp: "180 hp" }
    ],
    "Saab-9-3-Gen 2 Convertible (YS3F) (2003-2011)": [
      { name: "1.8t", hp: "150 hp" },
      { name: "2.0t", hp: "175 hp" },
      { name: "2.0T Aero", hp: "210 hp" },
      { name: "2.8 V6 Turbo", hp: "250-255 hp" },
      { name: "1.9 TiD", hp: "150 hp" },
      { name: "1.9 TTiD", hp: "180 hp" }
    ],
    "Saab-9-3-Gen 2 X (Cross) (2009-2011)": [
      { name: "2.0T", hp: "210 hp" },
      { name: "1.9 TTiD", hp: "180 hp" }
    ],
    "Saab-9-3-Gen 2 Griffin (Facelift) (2011-2014)": [
      { name: "2.0t BioPower", hp: "163-220 hp" },   // Direct Injection
      { name: "1.9 TTiD", hp: "130-180 hp" }
    ],
  
    // ===========================================================================
    // SAAB 9-5 GENERATIONS
    // ===========================================================================
    "Saab-9-5-Gen 1 Sedan (YS3E) (1997-2009)": [
      { name: "2.0t", hp: "150-180 hp" },            // BioPower available
      { name: "2.3t", hp: "170-185 hp" },
      { name: "2.3 Turbo Aero", hp: "230-260 hp" },  // The highway king
      { name: "3.0 V6t", hp: "200 hp" },             // Asymmetric Turbo
      { name: "1.9 TiD", hp: "150 hp" },
      { name: "2.2 TiD", hp: "120 hp" },
      { name: "3.0 V6 TiD", hp: "176 hp" }           // Isuzu engine
    ],
    "Saab-9-5-Gen 1 SportCombi (YS3E) (1998-2009)": [
      { name: "2.0t", hp: "150-180 hp" },
      { name: "2.3t", hp: "170-185 hp" },
      { name: "2.3 Turbo Aero", hp: "230-260 hp" },
      { name: "3.0 V6t", hp: "200 hp" },
      { name: "1.9 TiD", hp: "150 hp" },
      { name: "2.2 TiD", hp: "120 hp" },
      { name: "3.0 V6 TiD", hp: "176 hp" }
    ],
    "Saab-9-5-Gen 2 Sedan (YS3G) (2010-2011)": [
      { name: "1.6 Turbo", hp: "180 hp" },
      { name: "2.0 Turbo", hp: "220 hp" },
      { name: "2.8 V6 Turbo", hp: "300 hp" },
      { name: "2.0 TiD", hp: "160 hp" },
      { name: "2.0 TTiD", hp: "190 hp" }
    ],
    "Saab-9-5-Gen 2 SportCombi (YS3G) (2011)": [
      { name: "2.0 Turbo", hp: "220 hp" },
      { name: "2.0 TTiD", hp: "190 hp" }
    ],
  
    // ===========================================================================
    // SAAB 900 & 9000 (The Classics)
    // ===========================================================================
    "Saab-900-Classic CombiCoupe (1978-1993)": [
      { name: "2.0c (Single Carb)", hp: "100 hp" },
      { name: "2.0i (Injection)", hp: "118 hp" },
      { name: "2.0 Turbo 8v", hp: "145 hp" },
      { name: "2.0 Turbo 16v (Aero/SPG)", hp: "160-175 hp" }, // APC
      { name: "2.1i 16v", hp: "140 hp" }
    ],
    "Saab-900-Classic Sedan (1980-1993)": [
      { name: "2.0c", hp: "100 hp" },
      { name: "2.0i", hp: "118 hp" },
      { name: "2.0 Turbo 8v", hp: "145 hp" },
      { name: "2.0 Turbo 16v", hp: "160 hp" }
    ],
    "Saab-900-Classic Convertible (1986-1993)": [
      { name: "2.0 Turbo 16v", hp: "160-175 hp" },
      { name: "2.1i 16v", hp: "140 hp" }
    ],
    "Saab-900-NG Coupe (1994-1998)": [
      { name: "2.0i", hp: "130 hp" },
      { name: "2.0 Turbo", hp: "185 hp" },
      { name: "2.3i", hp: "150 hp" },
      { name: "2.5 V6", hp: "170 hp" }
    ],
    "Saab-900-NG 5-door (1994-1998)": [
      { name: "2.0i", hp: "130 hp" },
      { name: "2.0 Turbo", hp: "185 hp" },
      { name: "2.3i", hp: "150 hp" },
      { name: "2.5 V6", hp: "170 hp" }
    ],
    "Saab-900-NG Convertible (1994-1998)": [
      { name: "2.0i", hp: "130 hp" },
      { name: "2.0 Turbo", hp: "185 hp" },
      { name: "2.3i", hp: "150 hp" },
      { name: "2.5 V6", hp: "170 hp" }
    ],
  
    "Saab-9000-CC (CombiCoupe) (1984-1992)": [
      { name: "2.0i", hp: "130 hp" },
      { name: "2.0 Turbo", hp: "160-175 hp" },
      { name: "2.3i", hp: "150 hp" },
      { name: "2.3 Turbo", hp: "200 hp" }
    ],
    "Saab-9000-CD (Sedan) (1988-1997)": [
      { name: "2.0i", hp: "130 hp" },
      { name: "2.0 Turbo", hp: "150-185 hp" },
      { name: "2.3i", hp: "150 hp" },
      { name: "2.3 Turbo", hp: "200 hp" },
      { name: "2.3 Turbo Aero", hp: "225 hp" },
      { name: "3.0 V6", hp: "210 hp" }
    ],
    "Saab-9000-CS (CombiCoupe Facelift) (1991-1998)": [
      { name: "2.0i", hp: "130 hp" },
      { name: "2.0t (LPT)", hp: "150 hp" },
      { name: "2.3i", hp: "150 hp" },
      { name: "2.3t (LPT)", hp: "170 hp" },
      { name: "2.3 Turbo Aero", hp: "225 hp" },
      { name: "3.0 V6", hp: "210 hp" }
    ],
  
    // ===========================================================================
    // COLLABORATIONS & OTHERS
    // ===========================================================================
    "Saab-9-2X-Wagon (2004-2006)": [
      { name: "2.5 Linear", hp: "165-173 hp" },     // Subaru Boxer
      { name: "2.0 Turbo Aero", hp: "227 hp" },     // WRX engine
      { name: "2.5 Turbo Aero", hp: "230 hp" }      // 2006 only
    ],
    "Saab-9-7X-SUV (2005-2009)": [
      { name: "4.2i 6-cyl", hp: "275-290 hp" },
      { name: "5.3 V8", hp: "300 hp" },
      { name: "6.0 V8 Aero", hp: "390 hp" }         // LS2 Corvette engine
    ],
    "Saab-9-4X-SUV (2011)": [
      { name: "3.0 V6", hp: "265 hp" },
      { name: "2.8 V6 Turbo", hp: "300 hp" }
    ],
    
    "Saab-99-Sedan (1968-1984)": [
      { name: "1.7", hp: "80 hp" },                 // Triumph
      { name: "2.0", hp: "100-118 hp" },            // Saab B engine
      { name: "2.0 Turbo", hp: "145 hp" }           // The first Turbo
    ],
    "Saab-99-CombiCoupe (1974-1984)": [
      { name: "2.0", hp: "100-118 hp" },
      { name: "2.0 Turbo", hp: "145 hp" }
    ],
    "Saab-90-Sedan (1984-1987)": [
      { name: "2.0 Carb", hp: "100 hp" }
    ],
    "Saab-96-V4 (1967-1980)": [
      { name: "1.5 V4", hp: "65 hp" },              // Ford Taunus V4
      { name: "1.7 V4 (S)", hp: "68 hp" }
    ],
    "Saab-96-2-Stroke (1960-1968)": [
      { name: "841cc 3-cyl", hp: "38-42 hp" },
      { name: "841cc 3-cyl Sport", hp: "52 hp" }
    ],
    "Saab-95-Station Wagon (1959-1978)": [
      { name: "841cc 3-cyl", hp: "38 hp" },
      { name: "1.5 V4", hp: "65 hp" }
    ],
    "Saab-Sonett-Sonett II (1966-1969)": [
      { name: "841cc 3-cyl", hp: "60 hp" },
      { name: "1.5 V4", hp: "65 hp" }
    ],
    "Saab-Sonett-Sonett III (1970-1974)": [
      { name: "1.5 V4", hp: "65 hp" },
      { name: "1.7 V4", hp: "65 hp" }               // US emission changes
    ]
  }