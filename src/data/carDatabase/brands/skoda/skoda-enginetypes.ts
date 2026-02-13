export const skodaEngineTypes = {
    // ===========================================================================
    // THE CLASSICS (Rear Engine & Early FWD)
    // ===========================================================================
    "Skoda-105-Type 742 (1976-1990)": [
      { name: "1.0 (105 S/L)", hp: "45 hp" }
    ],
    "Skoda-120-Type 742 (1976-1990)": [
      { name: "1.2 (120 L)", hp: "52 hp" },
      { name: "1.2 (120 LS/GLS)", hp: "58 hp" }
    ],
    "Skoda-130-Type 742 (1984-1990)": [
      { name: "1.3 (130 L/GL)", hp: "62 hp" },
      { name: "1.3 (135/136)", hp: "58-62 hp" } // Alloy head
    ],
    "Skoda-Favorit-Hatchback (1987-1995)": [
      { name: "1.3 (135)", hp: "54-58 hp" }, // Carb/Mono-Motronic
      { name: "1.3 (136)", hp: "62-68 hp" }
    ],
    "Skoda-Felicia-Hatchback/Combi (1994-2001)": [
      { name: "1.3 (135)", hp: "54 hp" }, // Skoda OHV
      { name: "1.3 (136 MPI)", hp: "68 hp" }, // Skoda OHV
      { name: "1.6 MPI", hp: "75 hp" }, // VW AEE
      { name: "1.9 D", hp: "64 hp" } // VW AEF
    ],
    "Skoda-Rapid-Coupe (1984-1990)": [
      { name: "1.2 (120)", hp: "58 hp" },
      { name: "1.3 (130)", hp: "62 hp" },
      { name: "1.3 (135/136)", hp: "58-62 hp" }
    ],
  
    // ===========================================================================
    // THE BESTSELLERS (Fabia, Octavia, Superb, Scala)
    // ===========================================================================
    "Skoda-Fabia-Gen 1 (6Y) (1999-2007)": [
      { name: "1.0", hp: "50 hp" }, // OHV
      { name: "1.2 HTP", hp: "54-64 hp" }, // 6v/12v
      { name: "1.4 MPI", hp: "60-68 hp" }, // Skoda OHV
      { name: "1.4 16v", hp: "75-100 hp" }, // VW
      { name: "2.0", hp: "115 hp" },
      { name: "1.9 SDI", hp: "64 hp" },
      { name: "1.4 TDI", hp: "70-75-80 hp" },
      { name: "1.9 TDI PD", hp: "100 hp" },
      { name: "1.9 TDI RS", hp: "130 hp" } // The diesel hot hatch
    ],
    "Skoda-Fabia-Gen 2 (5J) (2007-2014)": [
      { name: "1.2 HTP", hp: "60-70 hp" },
      { name: "1.2 TSI", hp: "86-105 hp" },
      { name: "1.4 16v", hp: "86 hp" },
      { name: "1.6 16v", hp: "105 hp" },
      { name: "1.4 TSI RS", hp: "180 hp" }, // Twincharger
      { name: "1.2 TDI", hp: "75 hp" }, // GreenLine
      { name: "1.4 TDI", hp: "70-80 hp" },
      { name: "1.6 TDI", hp: "75-90-105 hp" }, // CR
      { name: "1.9 TDI PD", hp: "105 hp" }
    ],
    "Skoda-Fabia-Gen 3 (NJ) (2014-2021)": [
      { name: "1.0 MPI", hp: "60-75 hp" },
      { name: "1.2 TSI", hp: "90-110 hp" },
      { name: "1.0 TSI", hp: "95-110 hp" },
      { name: "1.4 TDI", hp: "90-105 hp" } // 3-cyl
    ],
    "Skoda-Fabia-Gen 4 (PJ) (2021-present)": [
      { name: "1.0 MPI", hp: "65-80 hp" },
      { name: "1.0 TSI", hp: "95-110 hp" },
      { name: "1.5 TSI", hp: "150 hp" }
    ],
  
    "Skoda-Octavia-Gen 1 (1U) (1996-2010)": [
      { name: "1.4", hp: "60-75 hp" },
      { name: "1.6", hp: "75 hp" }, // AEE
      { name: "1.6", hp: "100-102 hp" }, // SR / BFQ
      { name: "1.8 20v", hp: "125 hp" },
      { name: "1.8 T", hp: "150 hp" },
      { name: "1.8 T RS", hp: "180 hp" },
      { name: "2.0", hp: "115 hp" },
      { name: "1.9 SDI", hp: "68 hp" },
      { name: "1.9 TDI", hp: "90-110 hp" }, // Rotary Pump
      { name: "1.9 TDI PD", hp: "100-130 hp" } // Pumpe Duse
    ],
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)": [
      { name: "1.4 MPI", hp: "75-80 hp" },
      { name: "1.4 TSI", hp: "122 hp" },
      { name: "1.6 MPI", hp: "102 hp" },
      { name: "1.6 FSI", hp: "115 hp" },
      { name: "1.8 TSI", hp: "160 hp" },
      { name: "2.0 FSI", hp: "150 hp" },
      { name: "2.0 TSI RS", hp: "200 hp" },
      { name: "1.9 TDI PD", hp: "105 hp" },
      { name: "1.6 TDI", hp: "105 hp" }, // CR
      { name: "2.0 TDI PD", hp: "140 hp" }, // BKD
      { name: "2.0 TDI PD RS", hp: "170 hp" }, // BMN
      { name: "2.0 TDI CR", hp: "110-140 hp" },
      { name: "2.0 TDI CR RS", hp: "170 hp" }
    ],
    "Skoda-Octavia-Gen 3 (5E) (2012-2020)": [
      { name: "1.2 TSI", hp: "86-105-110 hp" },
      { name: "1.0 TSI", hp: "115 hp" },
      { name: "1.4 TSI", hp: "140-150 hp" }, // G-TEC 110hp
      { name: "1.5 TSI", hp: "150 hp" },
      { name: "1.8 TSI", hp: "180 hp" },
      { name: "2.0 TSI RS", hp: "220-230-245 hp" },
      { name: "1.6 TDI", hp: "90-105-110-115 hp" },
      { name: "2.0 TDI", hp: "150 hp" },
      { name: "2.0 TDI RS", hp: "184 hp" }
    ],
    "Skoda-Octavia-Gen 4 (NX) (2019-present)": [
      { name: "1.0 TSI", hp: "110 hp" },
      { name: "1.5 TSI", hp: "150 hp" },
      { name: "2.0 TSI", hp: "190 hp" },
      { name: "2.0 TSI RS", hp: "245 hp" },
      { name: "1.4 TSI iV", hp: "204 hp" }, // PHEV
      { name: "1.4 TSI RS iV", hp: "245 hp" }, // PHEV
      { name: "2.0 TDI", hp: "115-150-200 hp" } // RS Diesel 200hp
    ],
  
    "Skoda-Superb-Gen 1 (3U) (2001-2008)": [
      { name: "1.8 T", hp: "150 hp" },
      { name: "2.0", hp: "115 hp" },
      { name: "2.8 V6", hp: "193 hp" },
      { name: "1.9 TDI PD", hp: "100-105-115-130 hp" },
      { name: "2.0 TDI PD", hp: "140 hp" }, // BSS (DPF)
      { name: "2.5 V6 TDI", hp: "155-163 hp" }
    ],
    "Skoda-Superb-Gen 2 (3T) (2008-2015)": [
      { name: "1.4 TSI", hp: "125 hp" },
      { name: "1.8 TSI", hp: "160 hp" },
      { name: "2.0 TSI", hp: "200 hp" },
      { name: "3.6 V6 FSI", hp: "260 hp" }, // VR6
      { name: "1.9 TDI PD", hp: "105 hp" },
      { name: "1.6 TDI", hp: "105 hp" },
      { name: "2.0 TDI PD", hp: "140 hp" },
      { name: "2.0 TDI CR", hp: "140-170 hp" }
    ],
    "Skoda-Superb-Gen 3 (3V) (2015-2023)": [
      { name: "1.4 TSI", hp: "125-150 hp" },
      { name: "1.5 TSI", hp: "150 hp" },
      { name: "1.8 TSI", hp: "180 hp" },
      { name: "2.0 TSI", hp: "220-272-280 hp" },
      { name: "1.4 TSI iV", hp: "218 hp" }, // PHEV
      { name: "1.6 TDI", hp: "120 hp" },
      { name: "2.0 TDI", hp: "150-190-200 hp" }
    ],
    "Skoda-Superb-Gen 4 (2023-present)": [
      { name: "1.5 TSI", hp: "150 hp" },
      { name: "2.0 TSI", hp: "204-265 hp" },
      { name: "1.5 TSI iV", hp: "204 hp" }, // New PHEV
      { name: "2.0 TDI", hp: "150-193 hp" }
    ],
  
    "Skoda-Rapid-Liftback (NH3) (2012-2019)": [
      { name: "1.2 MPI", hp: "75 hp" }, // 3-cyl
      { name: "1.2 TSI", hp: "86-90-105-110 hp" },
      { name: "1.4 TSI", hp: "122-125 hp" },
      { name: "1.0 TSI", hp: "95-110 hp" },
      { name: "1.6 TDI", hp: "90-105-115 hp" },
      { name: "1.4 TDI", hp: "90 hp" }
    ],
    "Skoda-Rapid-Spaceback (NH1) (2013-2019)": [
      { name: "1.2 TSI", hp: "86-90-105-110 hp" },
      { name: "1.0 TSI", hp: "95-110 hp" },
      { name: "1.4 TSI", hp: "122-125 hp" },
      { name: "1.6 TDI", hp: "90-105-115 hp" },
      { name: "1.4 TDI", hp: "90 hp" }
    ],
    "Skoda-Scala-Hatchback (2019-present)": [
      { name: "1.0 TSI", hp: "95-110-115 hp" },
      { name: "1.5 TSI", hp: "150 hp" },
      { name: "1.6 TDI", hp: "115 hp" }
    ],
    "Skoda-Citigo-Hatchback (2011-2020)": [
      { name: "1.0 MPI", hp: "60-75 hp" },
      { name: "1.0 CNG", hp: "68 hp" }
    ],
  
    // ===========================================================================
    // MPV & CROSSOVER/SUV
    // ===========================================================================
    "Skoda-Roomster-MPV (2006-2015)": [
      { name: "1.2 HTP", hp: "64-70 hp" },
      { name: "1.2 TSI", hp: "86-105 hp" },
      { name: "1.4 16v", hp: "86 hp" },
      { name: "1.6 16v", hp: "105 hp" },
      { name: "1.2 TDI", hp: "75 hp" },
      { name: "1.4 TDI", hp: "70-80 hp" },
      { name: "1.6 TDI", hp: "90-105 hp" },
      { name: "1.9 TDI PD", hp: "105 hp" }
    ],
    "Skoda-Yeti-SUV (2009-2017)": [
      { name: "1.2 TSI", hp: "105-110 hp" },
      { name: "1.4 TSI", hp: "122-125-150 hp" },
      { name: "1.8 TSI", hp: "152-160 hp" },
      { name: "1.6 TDI", hp: "105 hp" },
      { name: "2.0 TDI", hp: "110-140-150-170 hp" }
    ],
    "Skoda-Kamiq-SUV (2019-present)": [
      { name: "1.0 TSI", hp: "95-110-115 hp" },
      { name: "1.5 TSI", hp: "150 hp" },
      { name: "1.6 TDI", hp: "115 hp" }
    ],
    "Skoda-Karoq-SUV (2017-present)": [
      { name: "1.0 TSI", hp: "110-115 hp" },
      { name: "1.5 TSI", hp: "150 hp" },
      { name: "2.0 TSI", hp: "190 hp" },
      { name: "1.6 TDI", hp: "115 hp" },
      { name: "2.0 TDI", hp: "150-190 hp" }
    ],
    "Skoda-Kodiaq-Gen 1 (NS7) (2016-2023)": [
      { name: "1.4 TSI", hp: "125-150 hp" },
      { name: "1.5 TSI", hp: "150 hp" },
      { name: "2.0 TSI", hp: "180-190 hp" },
      { name: "2.0 TSI RS", hp: "245 hp" },
      { name: "2.0 TDI", hp: "150-190-200 hp" },
      { name: "2.0 BiTDI RS", hp: "240 hp" } // BiTurbo Diesel
    ],
    "Skoda-Kodiaq-Gen 2 (2023-present)": [
      { name: "1.5 TSI", hp: "150 hp" },
      { name: "2.0 TSI", hp: "204 hp" },
      { name: "1.5 TSI iV", hp: "204 hp" }, // PHEV
      { name: "2.0 TDI", hp: "150-193 hp" }
    ]
  };