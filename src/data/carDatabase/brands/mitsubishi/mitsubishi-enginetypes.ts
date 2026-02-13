export const mitsubishiEngineTypes = {
    // ===========================================================================
    // COMPACT & CITY CARS (Colt, Lancer, Space Star)
    // ===========================================================================
    "Mitsubishi-Colt-Gen 4 (CA) (1991-1996)": [
      { name: "1.3 12v", hp: "75 hp" },
      { name: "1.6 16v", hp: "113 hp" },
      { name: "1.8 GTi", hp: "140 hp" }  // 4G93
    ],
    "Mitsubishi-Colt-Gen 5 (CJ) (1996-2003)": [
      { name: "1.3 12v", hp: "75-82 hp" },
      { name: "1.6 16v", hp: "90-103 hp" }
    ],
    "Mitsubishi-Colt-Gen 6 (Z30) (2002-2012)": [
      { name: "1.1", hp: "75 hp" },      // 3-cyl
      { name: "1.3", hp: "95 hp" },
      { name: "1.5", hp: "109 hp" },
      { name: "1.5 Turbo (CZT/Ralliart)", hp: "150 hp" },
      { name: "1.5 DI-D", hp: "68-95 hp" } // Mercedes OM639
    ],
    "Mitsubishi-Colt-Gen 7 (2023-present)": [
      { name: "1.0", hp: "67 hp" },
      { name: "1.0 Turbo", hp: "91 hp" },
      { name: "1.6 Hybrid", hp: "143 hp" } // Renault E-Tech
    ],
  
    "Mitsubishi-Lancer-Gen 6 (CK/CP) (1995-2000)": [
      { name: "1.3", hp: "75 hp" },
      { name: "1.6", hp: "90 hp" },
      { name: "2.0 Evo IV-VI", hp: "280 hp" } // 4G63T
    ],
    "Mitsubishi-Lancer-Gen 7 (CS) (2000-2007)": [
      { name: "1.3", hp: "82 hp" },
      { name: "1.6", hp: "98 hp" },
      { name: "2.0", hp: "135 hp" },     // 4G63 NA
      { name: "2.0 Evo VII-IX", hp: "265-280 hp" }
    ],
    "Mitsubishi-Lancer-Gen 8 (CY/CZ) (2007-2017)": [
      { name: "1.5", hp: "109 hp" },
      { name: "1.6 MIVEC", hp: "117 hp" },
      { name: "1.8 MIVEC", hp: "140-143 hp" },
      { name: "2.0 Evo X", hp: "295-360 hp" }, // 4B11T
      { name: "2.0 Di-D", hp: "140 hp" },      // VW PD TDI
      { name: "1.8 Di-D MIVEC", hp: "150 hp" } // Mitsubishi Diesel
    ],
  
    "Mitsubishi-Space Star-DG0 (1998-2005)": [
      { name: "1.3", hp: "82-86 hp" },
      { name: "1.6", hp: "98 hp" },
      { name: "1.8 GDI", hp: "122 hp" },
      { name: "1.9 DI-D", hp: "102-115 hp" }   // Renault F9Q
    ],
    "Mitsubishi-Space Star-A00 (Mirage) (2012-present)": [
      { name: "1.0", hp: "71 hp" },
      { name: "1.2", hp: "80 hp" }
    ],
  
    "Mitsubishi-Carisma-DA (1995-2004)": [
      { name: "1.6", hp: "90-99-103 hp" },
      { name: "1.8", hp: "115 hp" },
      { name: "1.8 GDI", hp: "122-125 hp" },   // The first mass GDI
      { name: "1.9 TD", hp: "90 hp" },         // Renault F8Q
      { name: "1.9 DI-D", hp: "102-115 hp" }   // Renault F9Q Common Rail
    ],
  
    // ===========================================================================
    // SEDANS & SPORTS (Galant, 3000GT, Eclipse, Sigma)
    // ===========================================================================
    "Mitsubishi-Galant-Gen 6 (E30) (1987-1993)": [
      { name: "1.8", hp: "86-90 hp" },
      { name: "2.0", hp: "109 hp" },
      { name: "2.0 GTi-16v", hp: "144 hp" },
      { name: "2.0 VR-4 Turbo", hp: "240 hp" },
      { name: "1.8 TD", hp: "75 hp" }
    ],
    "Mitsubishi-Galant-Gen 7 (E50) (1992-1998)": [
      { name: "1.8", hp: "116-126 hp" },
      { name: "2.0 V6", hp: "150 hp" },        // Tiny V6 (6A12)
      { name: "2.5 V6", hp: "170 hp" },
      { name: "2.0 TD", hp: "90 hp" }
    ],
    "Mitsubishi-Galant-Gen 8 (EA0) (1996-2003)": [
      { name: "2.0", hp: "133-136 hp" },       // 4G63
      { name: "2.4 GDI", hp: "150 hp" },
      { name: "2.5 V6", hp: "160-163 hp" },    // 6A13 (The smooth one)
      { name: "2.5 V6 Twin Turbo", hp: "280 hp" }, // VR-4
      { name: "2.0 TD", hp: "90 hp" }          // 4D68
    ],
  
    "Mitsubishi-3000GT-Z16A (1990-2000)": [
      { name: "3.0 V6", hp: "225 hp" },
      { name: "3.0 V6 Twin Turbo", hp: "286-320 hp" }
    ],
  
    "Mitsubishi-Eclipse-Gen 1 (1G) (1990-1994)": [
      { name: "1.8", hp: "92 hp" },
      { name: "2.0", hp: "135-150 hp" },       // 4G63
      { name: "2.0 Turbo", hp: "190-195 hp" }  // 4G63T
    ],
    "Mitsubishi-Eclipse-Gen 2 (2G) (1995-1999)": [
      { name: "2.0 (420A)", hp: "140 hp" },    // Chrysler engine (Non-Turbo)
      { name: "2.0 Turbo (4G63)", hp: "210 hp" }
    ],
    "Mitsubishi-Eclipse-Gen 3 (3G) (2000-2005)": [
      { name: "2.4", hp: "150 hp" },
      { name: "3.0 V6", hp: "200-210 hp" }
    ],
    "Mitsubishi-Eclipse-Gen 4 (4G) (2006-2012)": [
      { name: "2.4 MIVEC", hp: "162 hp" },
      { name: "3.8 V6 MIVEC", hp: "263 hp" }
    ],
  
    "Mitsubishi-Sigma-F10 (1990-1996)": [
      { name: "3.0 V6 12v", hp: "177 hp" },
      { name: "3.0 V6 24v", hp: "205 hp" }
    ],
    "Mitsubishi-Starion-A180 (1982-1989)": [
      { name: "2.0 Turbo", hp: "170-180 hp" }, // 4G63T
      { name: "2.6 Turbo", hp: "155 hp" }      // 4G54
    ],
  
    // ===========================================================================
    // SUV & CROSSOVER
    // ===========================================================================
    "Mitsubishi-Pajero-Gen 1 (L040) (1982-1991)": [
      { name: "2.6", hp: "103 hp" },
      { name: "3.0 V6", hp: "141 hp" },
      { name: "2.5 TD", hp: "84-95 hp" }       // 4D56
    ],
    "Mitsubishi-Pajero-Gen 2 (V20) (1991-1999)": [
      { name: "3.0 V6", hp: "150-181 hp" },
      { name: "3.5 V6", hp: "208 hp" },
      { name: "2.5 TD", hp: "99 hp" },         // 4D56 Intercooler
      { name: "2.8 TD", hp: "125 hp" }         // 4M40 (Legendary reliability)
    ],
    "Mitsubishi-Pajero-Gen 3 (V60) (1999-2006)": [
      { name: "3.5 V6 GDI", hp: "202 hp" },
      { name: "3.2 Di-D", hp: "160-165 hp" },  // 4M41
      { name: "2.5 TD", hp: "115 hp" }         // 4D56 Classic
    ],
    "Mitsubishi-Pajero-Gen 4 (V80) (2006-2021)": [
      { name: "3.0 V6", hp: "178 hp" },
      { name: "3.8 V6 MIVEC", hp: "250 hp" },
      { name: "3.2 Di-D", hp: "160-200 hp" }   // 4M41 Common Rail (200hp is best)
    ],
  
    "Mitsubishi-Pajero Sport-Gen 1 (K90) (1996-2008)": [
      { name: "3.0 V6", hp: "170-177 hp" },
      { name: "2.5 TD", hp: "99-115-133 hp" }
    ],
    "Mitsubishi-Pajero Sport-Gen 2 (KH) (2008-2015)": [
      { name: "2.5 Di-D", hp: "136-178 hp" },
      { name: "3.2 Di-D", hp: "160 hp" },
      { name: "3.0 V6", hp: "220 hp" }
    ],
    "Mitsubishi-Pajero Sport-Gen 3 (KS) (2015-present)": [
      { name: "2.4 MIVEC Diesel", hp: "181 hp" } // 4N15
    ],
  
    "Mitsubishi-Pajero Pinin-H60/H70 (1999-2005)": [
      { name: "1.8 MPI", hp: "114 hp" },
      { name: "1.8 GDI", hp: "120 hp" },
      { name: "2.0 GDI", hp: "129 hp" }
    ],
  
    "Mitsubishi-Outlander-Gen 1 (CU) (2001-2006)": [
      { name: "2.0", hp: "136 hp" },           // 4G63
      { name: "2.4", hp: "160 hp" },
      { name: "2.0 Turbo", hp: "202 hp" }      // Detuned Evo engine
    ],
    "Mitsubishi-Outlander-Gen 2 (CW) (2006-2012)": [
      { name: "2.0", hp: "147 hp" },
      { name: "2.4", hp: "170 hp" },
      { name: "3.0 V6", hp: "220 hp" },
      { name: "2.0 Di-D", hp: "140 hp" },      // VW PD TDI
      { name: "2.2 Di-D (PSA)", hp: "156 hp" },// Peugeot/Citroen
      { name: "2.2 Di-D (MIVEC)", hp: "177 hp" } // Mitsubishi Engine
    ],
    "Mitsubishi-Outlander-Gen 3 (GF/GG) (2012-2021)": [
      { name: "2.0 MIVEC", hp: "150 hp" },
      { name: "2.2 Di-D", hp: "150 hp" },
      { name: "2.0 PHEV", hp: "121+82+82 hp" },// 4B11 + Electric
      { name: "2.4 PHEV", hp: "135 hp" }       // Updated powertrain
    ],
    "Mitsubishi-Outlander-Gen 4 (GN) (2021-present)": [
      { name: "2.5", hp: "181 hp" },           // Nissan engine
      { name: "2.4 PHEV", hp: "248 hp (System)" }
    ],
  
    "Mitsubishi-ASX-Gen 1 (GA) (2010-2022)": [
      { name: "1.6 MIVEC", hp: "117 hp" },     // Most popular
      { name: "2.0 MIVEC", hp: "150 hp" },
      { name: "1.8 Di-D MIVEC", hp: "116-150 hp" }, // Variable valve diesel
      { name: "1.6 Di-D", hp: "114 hp" },      // PSA
      { name: "2.2 Di-D", hp: "150 hp" }
    ],
    "Mitsubishi-ASX-Gen 2 (2023-present)": [
      { name: "1.0 Turbo", hp: "91 hp" },
      { name: "1.3 Mild Hybrid", hp: "140-158 hp" },
      { name: "1.6 Hybrid", hp: "143 hp" },
      { name: "1.6 PHEV", hp: "159 hp" }
    ],
  
    "Mitsubishi-Eclipse Cross-GK (2017-present)": [
      { name: "1.5 Turbo", hp: "163 hp" },
      { name: "2.2 Di-D", hp: "148 hp" },
      { name: "2.4 PHEV", hp: "188 hp (System)" }
    ],
  
    // ===========================================================================
    // MPV & VANS
    // ===========================================================================
    "Mitsubishi-Grandis-NA (2003-2011)": [
      { name: "2.4 MIVEC", hp: "165 hp" },
      { name: "2.0 Di-D", hp: "136 hp" }       // VW PD TDI
    ],
    "Mitsubishi-Space Wagon-Gen 2 (UF) (1991-1998)": [
      { name: "2.0", hp: "133 hp" },
      { name: "2.0 TD", hp: "82 hp" }
    ],
    "Mitsubishi-Space Wagon-Gen 3 (N50) (1998-2004)": [
      { name: "2.4 GDI", hp: "150 hp" },
      { name: "2.0", hp: "133 hp" }
    ],
    "Mitsubishi-Space Runner-Gen 1 (N10) (1991-1999)": [
      { name: "1.8", hp: "122 hp" },
      { name: "2.0 TD", hp: "82 hp" }
    ],
    "Mitsubishi-Space Runner-Gen 2 (N50) (1999-2002)": [
      { name: "2.0", hp: "136 hp" },
      { name: "2.4 GDI", hp: "150 hp" }
    ],
    "Mitsubishi-L300-P00/P10 (1986-2013)": [
      { name: "2.0", hp: "87-113 hp" },
      { name: "2.5 Diesel", hp: "69 hp" },
      { name: "2.5 Turbo Diesel", hp: "87 hp" }
    ],
    "Mitsubishi-L400-PA/PB/PC (1994-2007)": [
      { name: "2.0", hp: "113 hp" },
      { name: "2.4", hp: "132 hp" },
      { name: "2.5 TD", hp: "87-99 hp" },
      { name: "2.8 TD", hp: "125-140 hp" }     // 4M40
    ],
  
    // ===========================================================================
    // PICKUP (L200)
    // ===========================================================================
    "Mitsubishi-L200-Gen 3 (K70) (1996-2006)": [
      { name: "2.5 Diesel", hp: "75 hp" },     // NA
      { name: "2.5 TD", hp: "99-115-133 hp" }  // 4D56T
    ],
    "Mitsubishi-L200-Gen 4 (KA/KB) (2006-2015)": [
      { name: "2.5 Di-D", hp: "136-178 hp" },  // Common Rail
      { name: "3.5 V6", hp: "186 hp" }         // Rare Petrol
    ],
    "Mitsubishi-L200-Gen 5 (KJ/KK) (2015-2023)": [
      { name: "2.4 Di-D MIVEC", hp: "154-181 hp" } // 4N15
    ],
    "Mitsubishi-L200-Gen 6 (2024-present)": [
      { name: "2.4 Turbo Diesel", hp: "150-184-204 hp" } // 4N16
    ]
  };