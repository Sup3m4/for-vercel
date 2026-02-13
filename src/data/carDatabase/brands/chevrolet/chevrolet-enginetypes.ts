export const chevroletEngineTypes = {
    // --- SPORT & PERFORMANCE ---
  
    // Camaro
    "Chevrolet-Camaro-Gen 1 (1967-1969)": [
      { name: "3.8 I6", hp: "140 hp" },
      { name: "4.1 I6", hp: "155 hp" },
      { name: "4.9 V8 (302 Z28)", hp: "290 hp" },
      { name: "5.0 V8 (307)", hp: "200 hp" },
      { name: "5.4 V8 (327)", hp: "210-275 hp" },
      { name: "5.7 V8 (350)", hp: "250-295 hp" }, // SS
      { name: "6.5 V8 (396)", hp: "325-375 hp" }, // SS396
      { name: "7.0 V8 (427 COPO)", hp: "425-430 hp" } // ZL1
    ],
    "Chevrolet-Camaro-Gen 2 (1970-1981)": [
      { name: "4.1 I6", hp: "100-155 hp" },
      { name: "3.8 V6", hp: "115 hp" }, // Buick V6 (late models)
      { name: "5.0 V8 (305)", hp: "130-165 hp" },
      { name: "5.0 V8 (307)", hp: "200 hp" },
      { name: "5.7 V8 (350)", hp: "145-360 hp" }, // Z28/LT-1
      { name: "6.6 V8 (402)", hp: "300-375 hp" }, // SS396
      { name: "7.4 V8 (454)", hp: "265 hp" } // SS454 (early)
    ],
    "Chevrolet-Camaro-Gen 3 (1982-1992)": [
      { name: "2.5 I4", hp: "90-92 hp" }, // Iron Duke
      { name: "2.8 V6", hp: "102-135 hp" },
      { name: "3.1 V6", hp: "140 hp" },
      { name: "5.0 V8 (305)", hp: "145-230 hp" }, // Z28/IROC-Z
      { name: "5.7 V8 (350)", hp: "225-245 hp" } // IROC-Z/Z28 1LE
    ],
    "Chevrolet-Camaro-Gen 4 (1993-2002)": [
      { name: "3.4 V6", hp: "160 hp" },
      { name: "3.8 V6", hp: "200 hp" },
      { name: "5.7 V8 (LT1)", hp: "275-285 hp" }, // Z28/SS (1993-1997)
      { name: "5.7 V8 (LS1)", hp: "305-325 hp" } // Z28/SS (1998-2002)
    ],
    "Chevrolet-Camaro-Gen 5 (2010-2015)": [
      { name: "3.6 V6", hp: "304-323 hp" },
      { name: "6.2 V8 (L99)", hp: "400 hp" }, // Auto
      { name: "6.2 V8 (LS3)", hp: "426 hp" }, // Manual SS
      { name: "6.2 V8 Supercharged (LSA)", hp: "580 hp" }, // ZL1
      { name: "7.0 V8 (LS7)", hp: "505 hp" } // Z/28
    ],
    "Chevrolet-Camaro-Gen 6 (2016-2024)": [
      { name: "2.0 Turbo", hp: "275 hp" },
      { name: "3.6 V6", hp: "335 hp" },
      { name: "6.2 V8 (LT1)", hp: "455 hp" }, // SS
      { name: "6.2 V8 Supercharged (LT4)", hp: "650 hp" } // ZL1
    ],
  
    // Corvette
    "Chevrolet-Corvette-C1 (1953-1962)": [
      { name: "3.9 I6 (Blue Flame)", hp: "150-155 hp" },
      { name: "4.3 V8 (265)", hp: "195-240 hp" },
      { name: "4.6 V8 (283)", hp: "220-290 hp" }, // Fuelie
      { name: "5.4 V8 (327)", hp: "250-360 hp" }
    ],
    "Chevrolet-Corvette-C2 (Sting Ray) (1963-1967)": [
      { name: "5.4 V8 (327)", hp: "250-375 hp" },
      { name: "6.5 V8 (396)", hp: "425 hp" },
      { name: "7.0 V8 (427)", hp: "390-435 hp" }, // Tri-Power
      { name: "7.0 V8 (L88)", hp: "430 hp" } // Underrated
    ],
    "Chevrolet-Corvette-C3 (Stingray) (1968-1982)": [
      { name: "5.0 V8 (305)", hp: "180 hp" }, // California only
      { name: "5.4 V8 (327)", hp: "300-350 hp" },
      { name: "5.7 V8 (350)", hp: "165-370 hp" }, // Small Block
      { name: "7.0 V8 (427)", hp: "390-435 hp" }, // Big Block
      { name: "7.0 V8 (ZL1)", hp: "430 hp" },
      { name: "7.4 V8 (454)", hp: "270-465 hp" } // LS5/LS6
    ],
    "Chevrolet-Corvette-C4 (1984-1996)": [
      { name: "5.7 V8 (Crossfire)", hp: "205 hp" }, // 1984
      { name: "5.7 V8 (L98 TPI)", hp: "230-250 hp" },
      { name: "5.7 V8 (LT1)", hp: "300 hp" },
      { name: "5.7 V8 (LT4)", hp: "330 hp" }, // Grand Sport
      { name: "5.7 V8 DOHC (LT5)", hp: "375-405 hp" } // ZR-1
    ],
    "Chevrolet-Corvette-C5 (1997-2004)": [
      { name: "5.7 V8 (LS1)", hp: "345-350 hp" },
      { name: "5.7 V8 (LS6)", hp: "385-405 hp" } // Z06
    ],
    "Chevrolet-Corvette-C6 (2005-2013)": [
      { name: "6.0 V8 (LS2)", hp: "400 hp" },
      { name: "6.2 V8 (LS3)", hp: "430-436 hp" },
      { name: "7.0 V8 (LS7)", hp: "505 hp" }, // Z06
      { name: "6.2 V8 Supercharged (LS9)", hp: "638 hp" } // ZR1
    ],
    "Chevrolet-Corvette-C7 (2014-2019)": [
      { name: "6.2 V8 (LT1)", hp: "455-460 hp" },
      { name: "6.2 V8 Supercharged (LT4)", hp: "650 hp" }, // Z06
      { name: "6.2 V8 Supercharged (LT5)", hp: "755 hp" } // ZR1
    ],
    "Chevrolet-Corvette-C8 (2020-present)": [
      { name: "6.2 V8 (LT2)", hp: "490-495 hp" },
      { name: "5.5 V8 Flat-Plane (LT6)", hp: "670 hp" }, // Z06
      { name: "6.2 V8 Hybrid (LT2+E)", hp: "655 hp" } // E-Ray
    ],
  
    // SS & SSR
    "Chevrolet-SS-Gen 1 (2014-2017)": [
      { name: "6.2 V8 (LS3)", hp: "415 hp" }
    ],
    "Chevrolet-SSR-Gen 1 (2003-2006)": [
      { name: "5.3 V8", hp: "300 hp" }, // 2003-2004
      { name: "6.0 V8 (LS2)", hp: "390-400 hp" } // 2005-2006
    ],
  
    // --- KISAUTÓK ---
  
    // Spark / Matiz
    "Chevrolet-Spark-M150 (2000-2005)": [
      { name: "0.8 I3", hp: "52 hp" },
      { name: "1.0 I4", hp: "64 hp" }
    ],
    "Chevrolet-Spark-M200 (2005-2009)": [
      { name: "0.8 I3", hp: "52 hp" },
      { name: "1.0 I4", hp: "66 hp" }
    ],
    "Chevrolet-Spark-M300 (2009-2015)": [
      { name: "1.0 I4", hp: "68 hp" },
      { name: "1.2 I4", hp: "81 hp" },
      { name: "1.2 I4 (US)", hp: "84 hp" }
    ],
    "Chevrolet-Spark-M400 (2015-2022)": [
      { name: "1.0 I3", hp: "75 hp" },
      { name: "1.4 I4", hp: "98 hp" }
    ],
    "Chevrolet-Matiz-M100 (1998-2000)": [
      { name: "0.8 I3", hp: "51 hp" }
    ],
    "Chevrolet-Matiz-M150 (2000-2005)": [
      { name: "0.8 I3", hp: "51 hp" },
      { name: "1.0 I4", hp: "63 hp" }
    ],
    "Chevrolet-Matiz-M200 (2005-2009)": [
      { name: "0.8 I3", hp: "52 hp" },
      { name: "1.0 I4", hp: "66 hp" }
    ],
    "Chevrolet-Beat-M300 (2009-2016)": [
      { name: "1.2 I4", hp: "80 hp" },
      { name: "1.0 Diesel", hp: "57 hp" }
    ],
    "Chevrolet-Beat-M400 (2017-2021)": [
      { name: "1.2 I4", hp: "81 hp" }
    ],
  
    // Aveo / Sonic
    "Chevrolet-Aveo-T200 (2002-2006)": [
      { name: "1.2 8V", hp: "72 hp" },
      { name: "1.4 8V", hp: "83 hp" },
      { name: "1.4 16V", hp: "94 hp" },
      { name: "1.6 16V", hp: "103-106 hp" }
    ],
    "Chevrolet-Aveo-T250 (2006-2011)": [
      { name: "1.2 16V", hp: "84 hp" },
      { name: "1.4 16V", hp: "100 hp" },
      { name: "1.6 16V", hp: "106 hp" }
    ],
    "Chevrolet-Aveo-T300 (2011-2020)": [
      { name: "1.2", hp: "86 hp" },
      { name: "1.4", hp: "100 hp" },
      { name: "1.6", hp: "115 hp" },
      { name: "1.3 Diesel", hp: "75-95 hp" }
    ],
    "Chevrolet-Sonic-Gen 1 (2011-2020)": [
      { name: "1.8 I4", hp: "138 hp" },
      { name: "1.4 Turbo", hp: "138 hp" },
      { name: "1.6 I4", hp: "115 hp" } // Global
    ],
  
    // Electric / Hybrid
    "Chevrolet-Bolt EV-Gen 1 (2017-2021)": [
      { name: "Electric Motor", hp: "200 hp" }
    ],
    "Chevrolet-Bolt EV-Gen 1 Facelift (2022-2023)": [
      { name: "Electric Motor", hp: "200 hp" }
    ],
    "Chevrolet-Bolt EUV-Gen 1 (2022-2023)": [
      { name: "Electric Motor", hp: "200 hp" }
    ],
    "Chevrolet-Volt-Gen 1 (2011-2015)": [
      { name: "1.4 I4 + Electric (Voltec 1)", hp: "149 hp" } // System output
    ],
    "Chevrolet-Volt-Gen 2 (2016-2019)": [
      { name: "1.5 I4 + Electric (Voltec 2)", hp: "149 hp" } // Improved EV range
    ],
  
    // Emerging Markets
    "Chevrolet-Onix-Gen 1 (2012-2019)": [
      { name: "1.0", hp: "78-80 hp" },
      { name: "1.4", hp: "98-106 hp" }
    ],
    "Chevrolet-Onix-Gen 2 (2019-present)": [
      { name: "1.0", hp: "82 hp" },
      { name: "1.0 Turbo", hp: "116 hp" },
      { name: "1.2", hp: "90 hp" },
      { name: "1.2 Turbo", hp: "130 hp" }
    ],
    "Chevrolet-Sail-Gen 1 (2001-2009)": [
      { name: "1.6", hp: "92 hp" }
    ],
    "Chevrolet-Sail-Gen 2 (2010-2014)": [
      { name: "1.2", hp: "86 hp" },
      { name: "1.4", hp: "102 hp" }
    ],
    "Chevrolet-Sail-Gen 3 (2015-2023)": [
      { name: "1.3", hp: "100 hp" },
      { name: "1.5", hp: "111 hp" }
    ],
    // --- KOMPAKTOK & KÖZÉPKATEGÓRIA ---

  // Cruze
  "Chevrolet-Cruze-J300 (2008-2016)": [
    { name: "1.6 I4", hp: "113-124 hp" },
    { name: "1.8 I4", hp: "141 hp" },
    { name: "1.4 Turbo", hp: "140 hp" },
    { name: "2.0 VCDi", hp: "150-163 hp" }, // Diesel
    { name: "1.7 VCDi", hp: "130 hp" }
  ],
  "Chevrolet-Cruze-J400 (2016-2019) US/Global": [
    { name: "1.4 Turbo", hp: "153 hp" },
    { name: "1.6 Diesel", hp: "137 hp" }
  ],
  "Chevrolet-Cruze-J400 (2014-present) CN/South America": [
    { name: "1.5 I4", hp: "113 hp" },
    { name: "1.4 Turbo", hp: "150 hp" }
  ],

  // Cavalier
  "Chevrolet-Cavalier-Gen 1 (1982-1987)": [
    { name: "1.8 I4", hp: "88 hp" },
    { name: "2.0 I4", hp: "86 hp" },
    { name: "2.8 V6", hp: "120-130 hp" } // Z24
  ],
  "Chevrolet-Cavalier-Gen 2 (1988-1994)": [
    { name: "2.0 I4", hp: "90 hp" },
    { name: "2.2 I4", hp: "95-110 hp" },
    { name: "2.8 V6", hp: "125-130 hp" },
    { name: "3.1 V6", hp: "140 hp" }
  ],
  "Chevrolet-Cavalier-Gen 3 (1995-2005)": [
    { name: "2.2 I4 OHV", hp: "115-120 hp" },
    { name: "2.2 I4 Ecotec", hp: "140 hp" },
    { name: "2.3 I4 Quad 4", hp: "150 hp" },
    { name: "2.4 I4 Twin Cam", hp: "150 hp" } // Z24
  ],
  "Chevrolet-Cavalier-Gen 4 (2016-present)": [
    { name: "1.5 I4", hp: "107 hp" },
    { name: "1.0 Turbo", hp: "116 hp" }, // Onix alapú
    { name: "1.3 Turbo", hp: "161 hp" }
  ],

  // Cobalt
  "Chevrolet-Cobalt-Gen 1 (2005-2010) US": [
    { name: "2.2 Ecotec", hp: "145-155 hp" },
    { name: "2.4 Ecotec", hp: "171 hp" }, // SS NA
    { name: "2.0 Supercharged", hp: "205 hp" }, // SS SC
    { name: "2.0 Turbo", hp: "260 hp" } // SS Turbo
  ],
  "Chevrolet-Cobalt-Gen 2 (2011-2020) Brazil/CIS": [
    { name: "1.4", hp: "97-102 hp" },
    { name: "1.8", hp: "106-108 hp" },
    { name: "1.5", hp: "105 hp" }
  ],

  // Lacetti / Optra / Nubira
  "Chevrolet-Lacetti-J200 (2002-2011)": [
    { name: "1.4 16V", hp: "94 hp" },
    { name: "1.6 16V", hp: "109 hp" },
    { name: "1.8 16V", hp: "121 hp" },
    { name: "2.0 Diesel", hp: "121 hp" }
  ],
  "Chevrolet-Optra-J200 (2002-2011)": [
    { name: "1.6", hp: "109 hp" },
    { name: "1.8", hp: "122 hp" },
    { name: "2.0", hp: "132 hp" } // USA
  ],
  "Chevrolet-Optra-Baojun 630 (2011-present)": [
    { name: "1.5", hp: "110 hp" },
    { name: "1.8", hp: "143 hp" }
  ],
  "Chevrolet-Nubira-J200 (2003-2008)": [
    { name: "1.6", hp: "109 hp" },
    { name: "1.8", hp: "122 hp" },
    { name: "2.0 Diesel", hp: "121 hp" }
  ],

  // Epica
  "Chevrolet-Epica-V200 (2000-2006)": [
    { name: "2.0", hp: "131 hp" }, // Evanda
    { name: "2.5 V6", hp: "155 hp" } // US Verona
  ],
  "Chevrolet-Epica-V250 (2006-2011)": [
    { name: "2.0 I6", hp: "141 hp" }, // Soros 6
    { name: "2.5 I6", hp: "154 hp" },
    { name: "2.0 Diesel", hp: "148 hp" }
  ],

  // Malibu
  "Chevrolet-Malibu-Gen 4 (1978-1983)": [
    { name: "3.3 V6", hp: "95 hp" },
    { name: "3.8 V6", hp: "115 hp" },
    { name: "4.4 V8", hp: "120 hp" },
    { name: "5.0 V8", hp: "140-155 hp" },
    { name: "5.7 V8 Diesel", hp: "105 hp" }
  ],
  "Chevrolet-Malibu-Gen 5 (1997-2003)": [
    { name: "2.4 I4", hp: "150 hp" },
    { name: "3.1 V6", hp: "155-170 hp" }
  ],
  "Chevrolet-Malibu-Gen 6 (2004-2007)": [
    { name: "2.2 Ecotec", hp: "144 hp" },
    { name: "3.5 V6", hp: "200-217 hp" },
    { name: "3.9 V6", hp: "240 hp" } // SS
  ],
  "Chevrolet-Malibu-Gen 7 (2008-2012)": [
    { name: "2.4 I4", hp: "169 hp" },
    { name: "3.5 V6", hp: "217 hp" },
    { name: "3.6 V6", hp: "252 hp" }
  ],
  "Chevrolet-Malibu-Gen 8 (2013-2015)": [
    { name: "2.5 I4", hp: "197 hp" },
    { name: "2.0 Turbo", hp: "259 hp" },
    { name: "2.4 Hybrid", hp: "182 hp" } // eAssist
  ],
  "Chevrolet-Malibu-Gen 9 (2016-2024)": [
    { name: "1.5 Turbo", hp: "160 hp" },
    { name: "2.0 Turbo", hp: "250 hp" },
    { name: "1.8 Hybrid", hp: "182 hp" }
  ],

  // Lumina
  "Chevrolet-Lumina-Gen 1 (1990-1994)": [
    { name: "2.5 I4", hp: "110 hp" },
    { name: "3.1 V6", hp: "135-140 hp" },
    { name: "3.4 V6 DOHC", hp: "210 hp" } // Z34
  ],
  "Chevrolet-Lumina-Gen 2 (1995-2001)": [
    { name: "3.1 V6", hp: "160-175 hp" },
    { name: "3.4 V6 DOHC", hp: "210-215 hp" },
    { name: "3.8 V6", hp: "200 hp" } // LTZ
  ],
  "Chevrolet-Lumina-Middle East (1998-2013)": [
    { name: "3.6 V6", hp: "240 hp" },
    { name: "3.8 V6", hp: "200 hp" },
    { name: "5.7 V8 (LS1)", hp: "329 hp" }, // SS
    { name: "6.0 V8 (L98)", hp: "362 hp" } // SS (VE)
  ],

  // Monte Carlo
  "Chevrolet-Monte Carlo-Gen 1 (1970-1972)": [
    { name: "5.7 V8 (350)", hp: "250-300 hp" },
    { name: "6.6 V8 (400)", hp: "265 hp" },
    { name: "6.6 V8 (402)", hp: "300-330 hp" },
    { name: "7.4 V8 (454)", hp: "270-360 hp" } // SS
  ],
  "Chevrolet-Monte Carlo-Gen 2 (1973-1977)": [
    { name: "5.7 V8 (350)", hp: "145-175 hp" },
    { name: "6.6 V8 (400)", hp: "175-180 hp" },
    { name: "7.4 V8 (454)", hp: "215-245 hp" }
  ],
  "Chevrolet-Monte Carlo-Gen 3 (1978-1980)": [
    { name: "3.3 V6", hp: "95 hp" },
    { name: "3.8 V6", hp: "115 hp" }, // Buick
    { name: "5.0 V8 (305)", hp: "140-160 hp" }
  ],
  "Chevrolet-Monte Carlo-Gen 4 (1981-1988)": [
    { name: "3.8 V6", hp: "110 hp" },
    { name: "4.3 V6", hp: "140 hp" },
    { name: "5.0 V8 (305)", hp: "150-180 hp" } // SS
  ],
  "Chevrolet-Monte Carlo-Gen 5 (1995-1999)": [
    { name: "3.1 V6", hp: "160 hp" },
    { name: "3.4 V6 DOHC", hp: "210-215 hp" }, // Z34
    { name: "3.8 V6", hp: "200 hp" }
  ],
  "Chevrolet-Monte Carlo-Gen 6 (2000-2007)": [
    { name: "3.4 V6", hp: "180 hp" },
    { name: "3.8 V6", hp: "200 hp" },
    { name: "3.8 V6 Supercharged", hp: "240 hp" }, // SS
    { name: "5.3 V8", hp: "303 hp" } // SS (2006-07)
  ],

  // --- NAGY SZEDÁNOK (FULL-SIZE) ---

  // Impala
  "Chevrolet-Impala-Gen 1-4 (1958-1970)": [
    { name: "3.9 I6", hp: "135 hp" },
    { name: "4.6 V8 (283)", hp: "185-230 hp" },
    { name: "5.4 V8 (327)", hp: "250-300 hp" },
    { name: "5.7 V8 (348)", hp: "250-335 hp" }, // W-series
    { name: "6.7 V8 (409)", hp: "340-425 hp" },
    { name: "7.0 V8 (427)", hp: "385-425 hp" }
  ],
  "Chevrolet-Impala-Gen 5 (1971-1976)": [
    { name: "5.7 V8 (350)", hp: "145-245 hp" },
    { name: "6.6 V8 (400)", hp: "150-180 hp" },
    { name: "7.4 V8 (454)", hp: "215-365 hp" }
  ],
  "Chevrolet-Impala-Gen 6 (1977-1985)": [
    { name: "3.8 V6", hp: "110 hp" },
    { name: "4.4 V8", hp: "120 hp" },
    { name: "5.0 V8", hp: "140-160 hp" },
    { name: "5.7 V8 Diesel", hp: "105 hp" }
  ],
  "Chevrolet-Impala-Gen 7 (1994-1996) SS": [
    { name: "5.7 V8 (LT1)", hp: "260 hp" } // Detuned Corvette engine
  ],
  "Chevrolet-Impala-Gen 8 (2000-2005)": [
    { name: "3.4 V6", hp: "180 hp" },
    { name: "3.8 V6", hp: "200 hp" },
    { name: "3.8 V6 Supercharged", hp: "240 hp" } // SS
  ],
  "Chevrolet-Impala-Gen 9 (2006-2013)": [
    { name: "3.5 V6", hp: "211 hp" },
    { name: "3.9 V6", hp: "233 hp" },
    { name: "5.3 V8", hp: "303 hp" }, // SS
    { name: "3.6 V6", hp: "300 hp" } // 2012+
  ],
  "Chevrolet-Impala-Gen 10 (2014-2020)": [
    { name: "2.5 I4", hp: "196 hp" },
    { name: "3.6 V6", hp: "305 hp" }
  ],

  // Caprice
  "Chevrolet-Caprice-Gen 1 (1966-1970)": [
    { name: "5.4 V8 (327)", hp: "275 hp" },
    { name: "6.5 V8 (396)", hp: "325 hp" },
    { name: "7.0 V8 (427)", hp: "385-425 hp" }
  ],
  "Chevrolet-Caprice-Gen 2 (1971-1976)": [
    { name: "6.6 V8 (400)", hp: "150-180 hp" },
    { name: "7.4 V8 (454)", hp: "215-365 hp" }
  ],
  "Chevrolet-Caprice-Gen 3 (1977-1990)": [
    { name: "3.8 V6", hp: "110 hp" },
    { name: "4.3 V6", hp: "130-140 hp" },
    { name: "5.0 V8", hp: "140-170 hp" },
    { name: "5.7 V8", hp: "170 hp" }, // Police package 9C1
    { name: "5.7 V8 Diesel", hp: "105 hp" }
  ],
  "Chevrolet-Caprice-Gen 4 (1991-1996)": [
    { name: "4.3 V8 (L99)", hp: "200 hp" },
    { name: "5.0 V8", hp: "170 hp" },
    { name: "5.7 V8 (LT1)", hp: "260 hp" } // Police/Wagon
  ],
  "Chevrolet-Caprice-Gen 5 (1999-2006) Middle East": [
    { name: "5.7 V8 (LS1)", hp: "295-325 hp" }
  ],
  "Chevrolet-Caprice-Gen 6 (2006-2017) PPV": [
    { name: "3.6 V6", hp: "301 hp" },
    { name: "6.0 V8 (L77)", hp: "355 hp" } // Police Pursuit Vehicle
  ],
  // --- KLASSZIKUSOK (CLASSIC & MUSCLE) ---

  // Bel Air
  "Chevrolet-Bel Air-Gen 1 (1950-1954)": [
    { name: "3.5 I6 (216)", hp: "92 hp" },
    { name: "3.9 I6 (235)", hp: "105-125 hp" } // Blue Flame
  ],
  "Chevrolet-Bel Air-Gen 2 (1955-1957)": [
    { name: "3.9 I6 (235)", hp: "123-140 hp" },
    { name: "4.3 V8 (265)", hp: "162-225 hp" }, // Small Block születése
    { name: "4.6 V8 (283)", hp: "185-283 hp" } // Fuelie
  ],
  "Chevrolet-Bel Air-Gen 3 (1958)": [
    { name: "3.9 I6 (235)", hp: "145 hp" },
    { name: "4.6 V8 (283)", hp: "185-230 hp" },
    { name: "5.7 V8 (348)", hp: "250-315 hp" } // W-series
  ],
  "Chevrolet-Bel Air-Gen 4 (1959-1960)": [
    { name: "3.9 I6 (235)", hp: "135 hp" },
    { name: "4.6 V8 (283)", hp: "170-230 hp" },
    { name: "5.7 V8 (348)", hp: "250-335 hp" }
  ],
  "Chevrolet-Bel Air-Gen 5 (1961-1964)": [
    { name: "3.8 I6 (230)", hp: "140 hp" },
    { name: "4.6 V8 (283)", hp: "170-195 hp" },
    { name: "5.4 V8 (327)", hp: "250-300 hp" },
    { name: "6.7 V8 (409)", hp: "340-425 hp" } // "She's real fine"
  ],
  "Chevrolet-Bel Air-Gen 6 (1965-1970)": [
    { name: "4.1 I6 (250)", hp: "155 hp" },
    { name: "5.4 V8 (327)", hp: "210-275 hp" },
    { name: "6.5 V8 (396)", hp: "325-425 hp" },
    { name: "7.0 V8 (427)", hp: "335-425 hp" }
  ],
  "Chevrolet-Bel Air-Gen 7 (1971-1975)": [
    { name: "5.7 V8 (350)", hp: "145-245 hp" },
    { name: "6.6 V8 (400)", hp: "150-175 hp" },
    { name: "7.4 V8 (454)", hp: "215-270 hp" }
  ],

  // Chevelle
  "Chevrolet-Chevelle-Gen 1 (1964-1967)": [
    { name: "3.2 I6 (194)", hp: "120 hp" },
    { name: "3.8 I6 (230)", hp: "140 hp" },
    { name: "4.6 V8 (283)", hp: "195-220 hp" },
    { name: "5.4 V8 (327)", hp: "250-350 hp" },
    { name: "6.5 V8 (396)", hp: "325-375 hp" } // SS396
  ],
  "Chevrolet-Chevelle-Gen 2 (1968-1972)": [
    { name: "4.1 I6 (250)", hp: "155 hp" },
    { name: "5.0 V8 (307)", hp: "200 hp" },
    { name: "5.7 V8 (350)", hp: "250-300 hp" },
    { name: "6.5 V8 (396/402)", hp: "325-375 hp" },
    { name: "7.4 V8 (454 LS6)", hp: "450 hp" } // The King
  ],
  "Chevrolet-Chevelle-Gen 3 (1973-1977)": [
    { name: "4.1 I6 (250)", hp: "100-110 hp" },
    { name: "5.0 V8 (305)", hp: "140 hp" },
    { name: "5.7 V8 (350)", hp: "145-175 hp" },
    { name: "7.4 V8 (454)", hp: "235-245 hp" } // Laguna S-3
  ],

  // Nova
  "Chevrolet-Nova-Gen 1 (Chevy II) (1962-1965)": [
    { name: "2.5 I4 (153)", hp: "90 hp" },
    { name: "3.2 I6 (194)", hp: "120 hp" },
    { name: "4.6 V8 (283)", hp: "195 hp" }, // 1964+
    { name: "5.4 V8 (327)", hp: "250-300 hp" } // 1965+
  ],
  "Chevrolet-Nova-Gen 2 (1966-1967)": [
    { name: "3.2 I6 (194)", hp: "120 hp" },
    { name: "3.8 I6 (230)", hp: "140 hp" },
    { name: "4.6 V8 (283)", hp: "195-220 hp" },
    { name: "5.4 V8 (327)", hp: "275-350 hp" } // SS (L79)
  ],
  "Chevrolet-Nova-Gen 3 (1968-1974)": [
    { name: "4.1 I6 (250)", hp: "155 hp" },
    { name: "5.0 V8 (307)", hp: "200 hp" },
    { name: "5.7 V8 (350)", hp: "250-300 hp" },
    { name: "6.5 V8 (396)", hp: "350-375 hp" } // SS396
  ],
  "Chevrolet-Nova-Gen 4 (1975-1979)": [
    { name: "4.1 I6", hp: "105 hp" },
    { name: "4.3 V8 (262)", hp: "110 hp" },
    { name: "5.0 V8 (305)", hp: "140 hp" },
    { name: "5.7 V8 (350)", hp: "165-170 hp" }
  ],
  "Chevrolet-Nova-Gen 5 (1985-1988)": [
    { name: "1.6 I4 (4A-C)", hp: "74 hp" }, // Toyota motor
    { name: "1.6 I4 DOHC (4A-GE)", hp: "112 hp" } // Twin Cam
  ],

  // El Camino
  "Chevrolet-El Camino-Gen 1 (1959-1960)": [
    { name: "3.9 I6", hp: "135 hp" },
    { name: "4.6 V8 (283)", hp: "170-230 hp" },
    { name: "5.7 V8 (348)", hp: "250-335 hp" }
  ],
  "Chevrolet-El Camino-Gen 2 (1964-1967)": [
    { name: "3.2 I6", hp: "120 hp" },
    { name: "4.6 V8 (283)", hp: "195-220 hp" },
    { name: "5.4 V8 (327)", hp: "250-300 hp" },
    { name: "6.5 V8 (396)", hp: "325-375 hp" }
  ],
  "Chevrolet-El Camino-Gen 3 (1968-1972)": [
    { name: "5.0 V8 (307)", hp: "200 hp" },
    { name: "5.7 V8 (350)", hp: "250-300 hp" },
    { name: "6.5 V8 (396)", hp: "325-375 hp" },
    { name: "7.4 V8 (454)", hp: "360-450 hp" }
  ],
  "Chevrolet-El Camino-Gen 4 (1973-1977)": [
    { name: "5.7 V8 (350)", hp: "145-175 hp" },
    { name: "6.6 V8 (400)", hp: "150-180 hp" },
    { name: "7.4 V8 (454)", hp: "215-245 hp" }
  ],
  "Chevrolet-El Camino-Gen 5 (1978-1987)": [
    { name: "3.3 V6", hp: "95 hp" },
    { name: "3.8 V6", hp: "110-115 hp" },
    { name: "4.3 V6", hp: "140 hp" },
    { name: "5.0 V8 (305)", hp: "140-165 hp" },
    { name: "5.7 V8 Diesel", hp: "105 hp" }
  ],

  // Corvair
  "Chevrolet-Corvair-Gen 1 (1960-1964)": [
    { name: "2.3 H6 (140)", hp: "80-95 hp" }, // Boxer
    { name: "2.4 H6 (145)", hp: "80-102 hp" },
    { name: "2.4 H6 Turbo (150)", hp: "150 hp" } // Spyder
  ],
  "Chevrolet-Corvair-Gen 2 (1965-1969)": [
    { name: "2.7 H6 (164)", hp: "95-140 hp" },
    { name: "2.7 H6 Turbo (180)", hp: "180 hp" } // Corsa
  ],

  // --- SUV & CROSSOVER ---

  // Trax / Tracker
  "Chevrolet-Trax-Gen 1 (2013-2022)": [
    { name: "1.4 Turbo (LUJ/LUV)", hp: "140 hp" },
    { name: "1.6 I4", hp: "115 hp" },
    { name: "1.7 Diesel", hp: "130 hp" },
    { name: "1.8 I4", hp: "140 hp" },
    { name: "1.4 Turbo (LE2)", hp: "153 hp" } // Facelift
  ],
  "Chevrolet-Trax-Gen 2 (2024-present)": [
    { name: "1.2 Turbo", hp: "137 hp" }
  ],
  "Chevrolet-Tracker-Gen 1 (1989-1998)": [
    { name: "1.6 8V", hp: "80 hp" },
    { name: "1.6 16V", hp: "95 hp" }
  ],
  "Chevrolet-Tracker-Gen 2 (1999-2004)": [
    { name: "2.0 I4", hp: "127 hp" },
    { name: "2.5 V6", hp: "155 hp" }
  ],
  "Chevrolet-Tracker-Gen 3 (2013-2018)": [
    { name: "1.8 I4", hp: "140 hp" } // Rebadged Trax
  ],
  "Chevrolet-Tracker-Gen 4 (2019-present)": [
    { name: "1.0 Turbo", hp: "116 hp" }, // Onix platform
    { name: "1.2 Turbo", hp: "132 hp" },
    { name: "1.3 Turbo", hp: "162 hp" }
  ],

  // Trailblazer
  "Chevrolet-Trailblazer-Gen 1 (2002-2009)": [
    { name: "4.2 I6 (Vortec 4200)", hp: "275-291 hp" },
    { name: "5.3 V8 (LM4/LH6)", hp: "300 hp" },
    { name: "6.0 V8 (LS2)", hp: "395 hp" } // SS
  ],
  "Chevrolet-Trailblazer-Gen 2 (2012-present)": [
    { name: "2.5 Duramax", hp: "163 hp" },
    { name: "2.8 Duramax", hp: "180-200 hp" },
    { name: "3.6 V6", hp: "239 hp" }
  ],
  "Chevrolet-Trailblazer-Crossover (2020-present)": [
    { name: "1.2 Turbo", hp: "137 hp" },
    { name: "1.3 Turbo", hp: "155 hp" }
  ],

  // Equinox
  "Chevrolet-Equinox-Gen 1 (2005-2009)": [
    { name: "3.4 V6", hp: "185 hp" },
    { name: "3.6 V6", hp: "264 hp" } // Sport
  ],
  "Chevrolet-Equinox-Gen 2 (2010-2017)": [
    { name: "2.4 I4", hp: "182 hp" },
    { name: "3.0 V6", hp: "264 hp" },
    { name: "3.6 V6", hp: "301 hp" } // 2013+
  ],
  "Chevrolet-Equinox-Gen 3 (2018-2024)": [
    { name: "1.5 Turbo", hp: "170 hp" },
    { name: "2.0 Turbo", hp: "252 hp" },
    { name: "1.6 Diesel", hp: "137 hp" }
  ],
  "Chevrolet-Equinox-Gen 4 (2025-present)": [
    { name: "1.5 Turbo", hp: "175 hp" }
  ],
  "Chevrolet-Equinox-EV (2024-present)": [
    { name: "Electric FWD", hp: "213 hp" },
    { name: "Electric AWD", hp: "288 hp" }
  ],

  // Blazer
  "Chevrolet-Blazer-K5 Gen 1 (1969-1972)": [
    { name: "5.7 V8 (350)", hp: "255 hp" }
  ],
  "Chevrolet-Blazer-K5 Gen 2 (1973-1991)": [
    { name: "5.7 V8 (350)", hp: "160-210 hp" },
    { name: "6.2 V8 Diesel", hp: "130 hp" }
  ],
  "Chevrolet-Blazer-S-10 Blazer Gen 1 (1983-1994)": [
    { name: "2.8 V6", hp: "110-125 hp" },
    { name: "4.3 V6", hp: "160-200 hp" }
  ],
  "Chevrolet-Blazer-S-10 Blazer Gen 2 (1995-2005)": [
    { name: "4.3 V6 (Vortec)", hp: "190 hp" }
  ],
  "Chevrolet-Blazer-Crossover (2019-present)": [
    { name: "2.5 I4", hp: "193 hp" },
    { name: "2.0 Turbo", hp: "228 hp" },
    { name: "3.6 V6", hp: "308 hp" }
  ],
  "Chevrolet-Blazer-EV (2024-present)": [
    { name: "Electric SS", hp: "557 hp" }
  ],

  // Traverse
  "Chevrolet-Traverse-Gen 1 (2009-2017)": [
    { name: "3.6 V6", hp: "281-288 hp" }
  ],
  "Chevrolet-Traverse-Gen 2 (2018-2023)": [
    { name: "2.0 Turbo", hp: "255 hp" }, // RS
    { name: "3.6 V6", hp: "310 hp" }
  ],
  "Chevrolet-Traverse-Gen 3 (2024-present)": [
    { name: "2.5 Turbo", hp: "328 hp" }
  ],

  // Tahoe
  "Chevrolet-Tahoe-Gen 1 (1995-1999)": [
    { name: "5.7 V8 (Vortec)", hp: "255 hp" },
    { name: "6.5 V8 Diesel", hp: "180 hp" }
  ],
  "Chevrolet-Tahoe-Gen 2 (2000-2006)": [
    { name: "4.8 V8", hp: "275-285 hp" },
    { name: "5.3 V8", hp: "285-295 hp" }
  ],
  "Chevrolet-Tahoe-Gen 3 (2007-2014)": [
    { name: "4.8 V8", hp: "295 hp" },
    { name: "5.3 V8", hp: "320 hp" },
    { name: "6.0 V8 Hybrid", hp: "332 hp" }
  ],
  "Chevrolet-Tahoe-Gen 4 (2015-2020)": [
    { name: "5.3 V8 (EcoTec3)", hp: "355 hp" },
    { name: "6.2 V8 (EcoTec3)", hp: "420 hp" }
  ],
  "Chevrolet-Tahoe-Gen 5 (2021-present)": [
    { name: "5.3 V8", hp: "355 hp" },
    { name: "6.2 V8", hp: "420 hp" },
    { name: "3.0 I6 Duramax", hp: "277-305 hp" }
  ],

  // Suburban (Motorok hasonlóak a Tahoe-hoz, de a nagyobb modelleknél gyakoribb a nagy motor)
  "Chevrolet-Suburban-Gen 7 (1973-1991)": [
    { name: "5.7 V8 (350)", hp: "160-210 hp" },
    { name: "7.4 V8 (454)", hp: "230-240 hp" },
    { name: "6.2 V8 Diesel", hp: "130 hp" }
  ],
  "Chevrolet-Suburban-Gen 8 (1992-1999)": [
    { name: "5.7 V8 (350)", hp: "210-255 hp" },
    { name: "7.4 V8 (454)", hp: "230-290 hp" },
    { name: "6.5 V8 Diesel", hp: "190 hp" }
  ],
  "Chevrolet-Suburban-Gen 9 (2000-2006)": [
    { name: "5.3 V8", hp: "285-295 hp" }, // 1500
    { name: "6.0 V8", hp: "300-335 hp" }, // 2500
    { name: "8.1 V8", hp: "340 hp" } // 2500
  ],
  "Chevrolet-Suburban-Gen 10 (2007-2014)": [
    { name: "5.3 V8", hp: "310-320 hp" },
    { name: "6.0 V8", hp: "352-366 hp" }
  ],
  "Chevrolet-Suburban-Gen 11 (2015-2020)": [
    { name: "5.3 V8", hp: "355 hp" },
    { name: "6.2 V8", hp: "420 hp" }
  ],
  "Chevrolet-Suburban-Gen 12 (2021-present)": [
    { name: "5.3 V8", hp: "355 hp" },
    { name: "6.2 V8", hp: "420 hp" },
    { name: "3.0 I6 Duramax", hp: "277-305 hp" }
  ],

  // Captiva / Orlando / HHR
  "Chevrolet-Captiva-Gen 1 (2006-2018)": [
    { name: "2.4 I4", hp: "136-167 hp" },
    { name: "3.2 V6", hp: "230 hp" },
    { name: "3.0 V6", hp: "258 hp" },
    { name: "2.0 VCDi", hp: "127-150 hp" },
    { name: "2.2 VCDi", hp: "163-184 hp" }
  ],
  "Chevrolet-Captiva-Gen 2 (2019-present)": [
    { name: "1.5 Turbo", hp: "147 hp" } // Baojun
  ],
  "Chevrolet-Orlando-Gen 1 (2011-2018)": [
    { name: "1.8 I4", hp: "141 hp" },
    { name: "1.4 Turbo", hp: "140 hp" },
    { name: "2.0 VCDi", hp: "130-163 hp" }
  ],
  "Chevrolet-Orlando-Gen 2 (2018-present)": [
    { name: "1.3 Turbo", hp: "161 hp" }
  ],
  "Chevrolet-HHR-Gen 1 (2006-2011)": [
    { name: "2.2 Ecotec", hp: "143-155 hp" },
    { name: "2.4 Ecotec", hp: "172 hp" },
    { name: "2.0 Turbo SS", hp: "260 hp" }
  ],
  "Chevrolet-Groove-Gen 1 (2020-present)": [
    { name: "1.5 I4", hp: "110 hp" }
  ],
  "Chevrolet-Niva-Gen 1 (1998-2020)": [
    { name: "1.7 I4", hp: "80 hp" }, // Lada motor
    { name: "1.8 I4 (Opel)", hp: "125 hp" } // FAM-1 (ritka)
  ],

  // --- PICKUPOK & TEHERAUTÓK ---

  // Colorado / S-10
  "Chevrolet-Colorado-Gen 1 (2004-2012)": [
    { name: "2.8 I4", hp: "175 hp" },
    { name: "2.9 I4", hp: "185 hp" },
    { name: "3.5 I5", hp: "220 hp" },
    { name: "3.7 I5", hp: "242 hp" },
    { name: "5.3 V8", hp: "300 hp" }
  ],
  "Chevrolet-Colorado-Gen 2 (2015-2022)": [
    { name: "2.5 I4", hp: "200 hp" },
    { name: "3.6 V6", hp: "308 hp" },
    { name: "2.8 Duramax", hp: "181 hp" } // US Diesel
  ],
  "Chevrolet-Colorado-Gen 3 (2023-present)": [
    { name: "2.7 Turbo", hp: "237 hp" },
    { name: "2.7 Turbo Plus", hp: "310 hp" },
    { name: "2.7 Turbo HO", hp: "310 hp" } // High Output
  ],
  "Chevrolet-S-10-Gen 1 (1982-1993)": [
    { name: "2.5 I4 (Iron Duke)", hp: "92 hp" },
    { name: "2.8 V6", hp: "110-125 hp" },
    { name: "4.3 V6", hp: "160 hp" }
  ],
  "Chevrolet-S-10-Gen 2 (1994-2004)": [
    { name: "2.2 I4", hp: "118-120 hp" },
    { name: "4.3 V6", hp: "180-195 hp" }
  ],
  "Chevrolet-S-10-Gen 3 (2012-present)": [
    { name: "2.4 Flex", hp: "141 hp" },
    { name: "2.5 Ecotec", hp: "197 hp" },
    { name: "2.8 Duramax", hp: "200 hp" }
  ],

  // Silverado 1500
  "Chevrolet-Silverado 1500-Gen 1 (1999-2006)": [
    { name: "4.3 V6", hp: "200 hp" },
    { name: "4.8 V8", hp: "270-285 hp" },
    { name: "5.3 V8", hp: "285-295 hp" },
    { name: "6.0 V8 (SS)", hp: "345 hp" }
  ],
  "Chevrolet-Silverado 1500-Gen 2 (2007-2013)": [
    { name: "4.3 V6", hp: "195 hp" },
    { name: "4.8 V8", hp: "295-302 hp" },
    { name: "5.3 V8", hp: "315 hp" },
    { name: "6.0 V8", hp: "367 hp" }, // VortecMax
    { name: "6.2 V8", hp: "403 hp" }
  ],
  "Chevrolet-Silverado 1500-Gen 3 (2014-2018)": [
    { name: "4.3 V6", hp: "285 hp" },
    { name: "5.3 V8", hp: "355 hp" },
    { name: "6.2 V8", hp: "420 hp" }
  ],
  "Chevrolet-Silverado 1500-Gen 4 (2019-present)": [
    { name: "2.7 Turbo", hp: "310 hp" },
    { name: "4.3 V6", hp: "285 hp" },
    { name: "5.3 V8", hp: "355 hp" },
    { name: "6.2 V8", hp: "420 hp" },
    { name: "3.0 I6 Duramax", hp: "277-305 hp" }
  ],
  "Chevrolet-Silverado 1500-EV (2024-present)": [
    { name: "Electric WT", hp: "510 hp" },
    { name: "Electric RST", hp: "754 hp" }
  ],

  // Silverado HD (2500/3500)
  "Chevrolet-Silverado 2500 HD-Gen 1 (2001-2006)": [
    { name: "6.0 V8", hp: "300 hp" },
    { name: "8.1 V8", hp: "340 hp" },
    { name: "6.6 V8 Duramax (LB7/LLY/LBZ)", hp: "300-360 hp" }
  ],
  "Chevrolet-Silverado 2500 HD-Gen 2 (2007-2014)": [
    { name: "6.0 V8", hp: "360 hp" },
    { name: "6.6 V8 Duramax (LMM/LML)", hp: "365-397 hp" }
  ],
  "Chevrolet-Silverado 2500 HD-Gen 3 (2015-2019)": [
    { name: "6.0 V8", hp: "360 hp" },
    { name: "6.6 V8 Duramax (LML/L5P)", hp: "397-445 hp" }
  ],
  "Chevrolet-Silverado 2500 HD-Gen 4 (2020-present)": [
    { name: "6.6 V8 Gas", hp: "401 hp" },
    { name: "6.6 V8 Duramax (L5P)", hp: "470 hp" }
  ],
  "Chevrolet-Silverado 3500 HD-Gen 1 (2001-2006)": [
    { name: "6.0 V8", hp: "300 hp" },
    { name: "8.1 V8", hp: "340 hp" },
    { name: "6.6 V8 Duramax", hp: "300-360 hp" }
  ],
  "Chevrolet-Silverado 3500 HD-Gen 2 (2007-2014)": [
    { name: "6.0 V8", hp: "360 hp" },
    { name: "6.6 V8 Duramax", hp: "365-397 hp" }
  ],
  "Chevrolet-Silverado 3500 HD-Gen 3 (2015-2019)": [
    { name: "6.0 V8", hp: "360 hp" },
    { name: "6.6 V8 Duramax", hp: "445 hp" }
  ],
  "Chevrolet-Silverado 3500 HD-Gen 4 (2020-present)": [
    { name: "6.6 V8 Gas", hp: "401 hp" },
    { name: "6.6 V8 Duramax", hp: "470 hp" }
  ],

  // Avalanche & C/K
  "Chevrolet-Avalanche-Gen 1 (2001-2006)": [
    { name: "5.3 V8", hp: "285-295 hp" },
    { name: "8.1 V8 (2500)", hp: "340 hp" }
  ],
  "Chevrolet-Avalanche-Gen 2 (2007-2013)": [
    { name: "5.3 V8", hp: "310-320 hp" },
    { name: "6.0 V8", hp: "366 hp" }
  ],
  "Chevrolet-C/K Series-Gen 3 (1973-1987) Square Body": [
    { name: "5.0 V8 (305)", hp: "160 hp" },
    { name: "5.7 V8 (350)", hp: "165-210 hp" },
    { name: "7.4 V8 (454)", hp: "230 hp" },
    { name: "6.2 V8 Diesel", hp: "130 hp" }
  ],
  "Chevrolet-C/K Series-Gen 4 (1988-1998) GMT400": [
    { name: "4.3 V6", hp: "160-200 hp" },
    { name: "5.0 V8 (305)", hp: "175-230 hp" }, // Vortec '96+
    { name: "5.7 V8 (350)", hp: "210-255 hp" }, // Vortec '96+
    { name: "7.4 V8 (454)", hp: "230-290 hp" },
    { name: "6.5 V8 Turbo Diesel", hp: "190 hp" }
  ],

  // --- EGYTERŰEK & FURGONOK ---

  // Astro / Express
  "Chevrolet-Astro-Gen 1 (1985-1994)": [
    { name: "2.5 I4", hp: "98 hp" },
    { name: "4.3 V6", hp: "150-200 hp" }
  ],
  "Chevrolet-Astro-Gen 2 (1995-2005)": [
    { name: "4.3 V6", hp: "190 hp" }
  ],
  "Chevrolet-Express-Gen 1 (1996-2002)": [
    { name: "4.3 V6", hp: "200 hp" },
    { name: "5.0 V8", hp: "220-230 hp" },
    { name: "5.7 V8", hp: "250-255 hp" },
    { name: "7.4 V8", hp: "290 hp" },
    { name: "6.5 Diesel", hp: "190 hp" },
    { name: "8.1 V8", hp: "340 hp" } // 2001-2002
  ],
  "Chevrolet-Express-Gen 2 (2003-present)": [
    { name: "4.3 V6", hp: "195-276 hp" }, // Gen 5 4.3 in newer
    { name: "4.8 V8", hp: "285 hp" },
    { name: "5.3 V8", hp: "310 hp" },
    { name: "6.0 V8", hp: "323-342 hp" },
    { name: "6.6 V8 Gas", hp: "401 hp" },
    { name: "6.6 V8 Duramax", hp: "260 hp" }, // Detuned
    { name: "2.8 Duramax I4", hp: "181 hp" }
  ],
  "Chevrolet-City Express-Gen 1 (2014-2018)": [
    { name: "2.0 I4", hp: "131 hp" }
  ],

  // Uplander / Venture / Lumina APV
  "Chevrolet-Uplander-Gen 1 (2005-2009)": [
    { name: "3.5 V6", hp: "200 hp" },
    { name: "3.9 V6", hp: "240 hp" }
  ],
  "Chevrolet-Venture-Gen 1 (1997-2005)": [
    { name: "3.4 V6", hp: "180-185 hp" }
  ],
  "Chevrolet-Lumina APV-Gen 1 (1990-1996)": [
    { name: "3.1 V6", hp: "120 hp" },
    { name: "3.8 V6", hp: "170 hp" },
    { name: "3.4 V6", hp: "180 hp" }
  ],
  "Chevrolet-C/K Series-Gen 1 (1960-1966)": [
    { name: "3.8 I6 (230)", hp: "140 hp" },
    { name: "3.9 I6 (235)", hp: "135 hp" },
    { name: "4.6 V8 (283)", hp: "160-175 hp" },
    { name: "5.4 V8 (327)", hp: "220 hp" }
  ],
  "Chevrolet-C/K Series-Gen 2 (1967-1972) Action Line": [
    { name: "4.1 I6 (250)", hp: "155 hp" },
    { name: "4.8 I6 (292)", hp: "170 hp" },
    { name: "4.6 V8 (283)", hp: "175 hp" },
    { name: "5.0 V8 (307)", hp: "200 hp" },
    { name: "5.4 V8 (327)", hp: "220 hp" },
    { name: "6.5 V8 (396)", hp: "310-325 hp" },
    { name: "6.6 V8 (402)", hp: "300 hp" }
  ]
};