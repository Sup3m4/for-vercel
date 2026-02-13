export const mazdaEngineTypes = {
    // --- ROADSTER & SPORT ---
  
    // MX-5 Miata
    "Mazda-MX-5 Miata-NA (1989-1997)": [
      { name: "1.6 I4 (B6ZE)", hp: "90-115 hp" },
      { name: "1.8 I4 (BP)", hp: "130 hp" }
    ],
    "Mazda-MX-5 Miata-NB (1998-2005)": [
      { name: "1.6 I4 (B6)", hp: "110 hp" },
      { name: "1.8 I4 (BP)", hp: "140-146 hp" },
      { name: "1.8 Turbo (Mazdaspeed)", hp: "178 hp" }
    ],
    "Mazda-MX-5 Miata-NC (2005-2015)": [
      { name: "1.8 I4 (MZR)", hp: "126 hp" },
      { name: "2.0 I4 (MZR)", hp: "160-170 hp" }
    ],
    "Mazda-MX-5 Miata-ND (2015-present)": [
      { name: "1.5 SkyActiv-G", hp: "131 hp" },
      { name: "2.0 SkyActiv-G", hp: "160 hp" }, // ND1
      { name: "2.0 SkyActiv-G (ND2)", hp: "184 hp" } // 2019+
    ],
  
    // RX-7 (Rotary)
    "Mazda-RX-7-SA/FB (1978-1985)": [
      { name: "1.1 (12A)", hp: "100-115 hp" }, // 2x573cc
      { name: "1.3 (13B-RESI)", hp: "135 hp" },
      { name: "1.1 Turbo (12A)", hp: "165 hp" } // Japán piac
    ],
    "Mazda-RX-7-FC (1985-1991)": [
      { name: "1.3 (13B)", hp: "146-160 hp" }, // NA
      { name: "1.3 Turbo (13B-T)", hp: "185-205 hp" }
    ],
    "Mazda-RX-7-FD (1992-2002)": [
      { name: "1.3 Twin-Turbo (13B-REW)", hp: "239-280 hp" }
    ],
  
    // RX-8
    "Mazda-RX-8-SE3P (2003-2012)": [
      { name: "1.3 Renesis (Standard)", hp: "192 hp" }, // 4-port
      { name: "1.3 Renesis (High Power)", hp: "231 hp" } // 6-port
    ],
  
    // MX-3 / MX-6
    "Mazda-MX-3-EC (1991-1998)": [
      { name: "1.6 I4", hp: "88-107 hp" },
      { name: "1.8 V6 (K8)", hp: "129-133 hp" } // A világ egyik legkisebb V6-osa
    ],
    "Mazda-MX-6-GD (1987-1992)": [
      { name: "2.2 I4", hp: "110 hp" },
      { name: "2.2 I4 Turbo", hp: "145 hp" }
    ],
    "Mazda-MX-6-GE (1991-1997)": [
      { name: "2.0 I4", hp: "115 hp" },
      { name: "2.5 V6 (KL)", hp: "164 hp" }
    ],
  
    // --- SZEMÉLYAUTÓK ---
  
    // Mazda2 / Demio
    "Mazda-Demio-DW (1996-2002)": [
      { name: "1.3 I4", hp: "63-72 hp" },
      { name: "1.5 I4", hp: "75 hp" }
    ],
    "Mazda-Mazda2-DY (2002-2007)": [
      { name: "1.25 I4 (Zetec)", hp: "75 hp" },
      { name: "1.4 I4 (Zetec)", hp: "80 hp" },
      { name: "1.6 I4", hp: "100 hp" },
      { name: "1.4 Diesel", hp: "68 hp" }
    ],
    "Mazda-Mazda2-DE (2007-2014)": [
      { name: "1.3 MZR", hp: "75-86 hp" },
      { name: "1.5 MZR", hp: "103 hp" },
      { name: "1.4 Diesel", hp: "68 hp" },
      { name: "1.6 Diesel", hp: "95 hp" }
    ],
    "Mazda-Mazda2-DJ/DL (2014-present)": [
      { name: "1.5 SkyActiv-G (75)", hp: "75 hp" },
      { name: "1.5 SkyActiv-G (90)", hp: "90 hp" },
      { name: "1.5 SkyActiv-G (115)", hp: "115 hp" },
      { name: "1.5 SkyActiv-D", hp: "105 hp" } // Diesel
    ],
    "Mazda-Mazda2-Hybrid (2022-present)": [
      { name: "1.5 Hybrid", hp: "116 hp" } // Toyota Yaris
    ],
  
    // Mazda3
    "Mazda-Mazda3-BK (2003-2009)": [
      { name: "1.4 MZR", hp: "84 hp" },
      { name: "1.6 MZR", hp: "105 hp" },
      { name: "2.0 MZR", hp: "150 hp" },
      { name: "2.3 MZR", hp: "160-171 hp" }, // USA
      { name: "2.3 DISI Turbo (MPS)", hp: "260 hp" },
      { name: "1.6 Diesel (PSA)", hp: "109 hp" }
    ],
    "Mazda-Mazda3-BL (2009-2013)": [
      { name: "1.6 MZR", hp: "105 hp" },
      { name: "2.0 MZR", hp: "150 hp" },
      { name: "2.0 MZR (DISI)", hp: "151 hp" }, // i-Stop
      { name: "2.3 DISI Turbo (MPS)", hp: "260 hp" },
      { name: "1.6 Diesel", hp: "115 hp" },
      { name: "2.2 MZR-CD", hp: "150-185 hp" }
    ],
    "Mazda-Mazda3-BM/BN (2013-2019)": [
      { name: "1.5 SkyActiv-G", hp: "100 hp" },
      { name: "2.0 SkyActiv-G (120)", hp: "120 hp" },
      { name: "2.0 SkyActiv-G (165)", hp: "165 hp" },
      { name: "2.5 SkyActiv-G", hp: "184 hp" }, // USA/GT
      { name: "1.5 SkyActiv-D", hp: "105 hp" },
      { name: "2.2 SkyActiv-D", hp: "150 hp" }
    ],
    "Mazda-Mazda3-BP (2019-present)": [
      { name: "2.0 SkyActiv-G M Hybrid", hp: "122-150 hp" },
      { name: "2.0 SkyActiv-X", hp: "180-186 hp" },
      { name: "2.5 SkyActiv-G Turbo", hp: "250 hp" }, // USA
      { name: "1.8 SkyActiv-D", hp: "116 hp" }
    ],
  
    // Mazda6
    "Mazda-Mazda6-GG/GY (2002-2007)": [
      { name: "1.8 MZR", hp: "120 hp" },
      { name: "2.0 MZR", hp: "141-147 hp" },
      { name: "2.3 MZR", hp: "166 hp" },
      { name: "3.0 V6", hp: "220 hp" }, // USA
      { name: "2.3 DISI Turbo (MPS)", hp: "260 hp" },
      { name: "2.0 MZR-CD", hp: "121-143 hp" }
    ],
    "Mazda-Mazda6-GH (2007-2012)": [
      { name: "1.8 MZR", hp: "120 hp" },
      { name: "2.0 MZR", hp: "147 hp" },
      { name: "2.0 DISI", hp: "155 hp" },
      { name: "2.5 MZR", hp: "170 hp" },
      { name: "3.7 V6", hp: "272 hp" }, // USA
      { name: "2.0 MZR-CD", hp: "140 hp" },
      { name: "2.2 MZR-CD", hp: "125-185 hp" }
    ],
    "Mazda-Mazda6-GJ/GL (2012-present)": [
      { name: "2.0 SkyActiv-G (145)", hp: "145 hp" },
      { name: "2.0 SkyActiv-G (165)", hp: "165 hp" },
      { name: "2.5 SkyActiv-G", hp: "192-194 hp" },
      { name: "2.5 SkyActiv-G Turbo", hp: "230-250 hp" },
      { name: "2.2 SkyActiv-D", hp: "150-184 hp" }
    ],
  
    // 323 / Familia
    "Mazda-323-BF (1985-1989)": [
      { name: "1.3 I4", hp: "68 hp" },
      { name: "1.5 I4", hp: "75 hp" },
      { name: "1.6 I4 Turbo", hp: "140 hp" }, // GTX
      { name: "1.7 Diesel", hp: "57 hp" }
    ],
    "Mazda-323-BG (1989-1994)": [
      { name: "1.3 16V", hp: "73 hp" },
      { name: "1.6 8V/16V", hp: "84-88 hp" },
      { name: "1.8 16V SOHC", hp: "103 hp" }, // F
      { name: "1.8 16V DOHC (GT)", hp: "128 hp" }, // GT
      { name: "1.8 Turbo (GTX)", hp: "163 hp" },
      { name: "1.8 Turbo (GTR)", hp: "185 hp" } // Homologation
    ],
    "Mazda-323-BA (1994-1998)": [
      { name: "1.5 16V", hp: "88 hp" },
      { name: "1.8 16V", hp: "114 hp" },
      { name: "2.0 V6", hp: "144 hp" }, // Lantis
      { name: "1.7 Turbo Diesel", hp: "82 hp" } // Isuzu
    ],
    "Mazda-323-BJ (1998-2003)": [
      { name: "1.3 16V", hp: "73 hp" },
      { name: "1.5 16V", hp: "88 hp" },
      { name: "1.6 16V", hp: "98 hp" },
      { name: "2.0 16V", hp: "130 hp" }, // Sportive
      { name: "2.0 DiTD", hp: "90-101 hp" }
    ],
  
    // 626 / Capella
    "Mazda-626-GD/GV (1987-1991)": [
      { name: "1.8 8V", hp: "90 hp" },
      { name: "2.0 8V/16V", hp: "90-148 hp" },
      { name: "2.2 12V", hp: "115 hp" },
      { name: "2.0 Diesel", hp: "60 hp" }
    ],
    "Mazda-626-GE (1991-1997)": [
      { name: "1.8 16V", hp: "105 hp" },
      { name: "2.0 16V", hp: "115 hp" },
      { name: "2.5 V6", hp: "165 hp" },
      { name: "2.0 Comprex Diesel", hp: "75 hp" }
    ],
    "Mazda-626-GF/GW (1997-2002)": [
      { name: "1.8 16V", hp: "90-100 hp" },
      { name: "2.0 16V", hp: "115-136 hp" },
      { name: "2.5 V6", hp: "167 hp" }, // US
      { name: "2.0 DiTD", hp: "90-110 hp" }
    ],
  
    // Xedos
    "Mazda-Xedos 6-CA (1992-1999)": [
      { name: "1.6 16V", hp: "107 hp" },
      { name: "2.0 V6", hp: "144 hp" }
    ],
    "Mazda-Xedos 9-TA (1993-2002)": [
      { name: "2.0 V6", hp: "144 hp" },
      { name: "2.5 V6", hp: "167 hp" },
      { name: "2.3 V6 Miller Cycle", hp: "210 hp" } // Supercharged
    ],
    // 121 / 929
  "Mazda-121-DA (1986-1991)": [
    { name: "1.1 (B1)", hp: "57 hp" },
    { name: "1.3 (B3)", hp: "64 hp" }
  ],
  "Mazda-121-DB (1991-1998)": [
    { name: "1.3 16V (B3)", hp: "53-72 hp" }
  ],
  "Mazda-121-JASM/JBSM (1996-2002)": [
    { name: "1.25 Zetec", hp: "75 hp" },
    { name: "1.3 Endura-E", hp: "60 hp" },
    { name: "1.8 Diesel", hp: "60 hp" }
  ],
  "Mazda-929-LA (1973-1977)": [
    { name: "1.8 I4", hp: "83 hp" },
    { name: "Rotary (12A/13B)", hp: "100-127 hp" } // RX-4
  ],
  "Mazda-929-HB (1981-1986)": [
    { name: "2.0 I4", hp: "90-101 hp" },
    { name: "2.0 I4 Turbo", hp: "120 hp" }
  ],
  "Mazda-929-HC (1986-1991)": [
    { name: "2.2 I4", hp: "115-136 hp" },
    { name: "3.0 V6 (JE)", hp: "158-190 hp" }
  ],
  "Mazda-929-HD (1991-1995)": [
    { name: "2.5 V6", hp: "160 hp" },
    { name: "3.0 V6", hp: "200 hp" }
  ],
  "Mazda-929-HE (1995-1999)": [
    { name: "3.0 V6", hp: "185-205 hp" } // Utolsó RWD szedán
  ],

  // --- SUV & CROSSOVER ---

  // CX-3 / CX-30
  "Mazda-CX-3-DK (2015-present)": [
    { name: "1.5 SkyActiv-G", hp: "120 hp" }, // Facelift után
    { name: "2.0 SkyActiv-G (120)", hp: "120 hp" },
    { name: "2.0 SkyActiv-G (150)", hp: "150 hp" }, // AWD
    { name: "1.5 SkyActiv-D", hp: "105 hp" },
    { name: "1.8 SkyActiv-D", hp: "115 hp" }
  ],
  "Mazda-CX-30-DM (2019-present)": [
    { name: "2.0 SkyActiv-G M Hybrid", hp: "122-150 hp" },
    { name: "2.5 SkyActiv-G", hp: "186 hp" },
    { name: "2.5 SkyActiv-G Turbo", hp: "227-250 hp" },
    { name: "2.0 SkyActiv-X", hp: "180-186 hp" },
    { name: "1.8 SkyActiv-D", hp: "116 hp" }
  ],

  // CX-5
  "Mazda-CX-5-KE (2012-2017)": [
    { name: "2.0 SkyActiv-G", hp: "160-165 hp" },
    { name: "2.5 SkyActiv-G", hp: "192 hp" },
    { name: "2.2 SkyActiv-D", hp: "150-175 hp" }
  ],
  "Mazda-CX-5-KF (2017-present)": [
    { name: "2.0 SkyActiv-G", hp: "160-165 hp" },
    { name: "2.5 SkyActiv-G", hp: "194 hp" },
    { name: "2.5 SkyActiv-G Turbo", hp: "230-250 hp" },
    { name: "2.2 SkyActiv-D", hp: "150-184 hp" }
  ],

  // CX-50 / CX-60 / CX-7 / CX-8 / CX-9 / CX-90
  "Mazda-CX-50-Gen 1 (2022-present)": [
    { name: "2.5 SkyActiv-G", hp: "187 hp" },
    { name: "2.5 SkyActiv-G Turbo", hp: "256 hp" }
  ],
  "Mazda-CX-60-KH (2022-present)": [
    { name: "2.5 e-SkyActiv PHEV", hp: "327 hp" },
    { name: "3.3 e-SkyActiv D (I6)", hp: "200-254 hp" }, // Soros 6 dízel
    { name: "3.3 e-SkyActiv G (I6)", hp: "284 hp" } // Soros 6 benzin
  ],
  "Mazda-CX-7-ER (2006-2012)": [
    { name: "2.3 DISI Turbo", hp: "238-260 hp" },
    { name: "2.5 MZR", hp: "161 hp" }, // US Facelift
    { name: "2.2 MZR-CD", hp: "173 hp" } // AdBlue
  ],
  "Mazda-CX-8-KG (2017-2023)": [
    { name: "2.5 SkyActiv-G", hp: "190 hp" },
    { name: "2.5 SkyActiv-G Turbo", hp: "230 hp" },
    { name: "2.2 SkyActiv-D", hp: "190 hp" }
  ],
  "Mazda-CX-9-TB (2006-2015)": [
    { name: "3.5 V6 (Ford)", hp: "263 hp" },
    { name: "3.7 V6 (MZI)", hp: "273 hp" }
  ],
  "Mazda-CX-9-TC (2016-2023)": [
    { name: "2.5 SkyActiv-G Turbo", hp: "227-250 hp" }
  ],
  "Mazda-CX-90-KK (2023-present)": [
    { name: "3.3 e-SkyActiv G Turbo (I6)", hp: "280-340 hp" },
    { name: "2.5 e-SkyActiv PHEV", hp: "323 hp" }
  ],

  // MX-30 / Tribute
  "Mazda-MX-30-DR (2020-present)": [
    { name: "e-SkyActiv EV", hp: "143 hp" },
    { name: "2.0 e-SkyActiv G", hp: "155 hp" }, // Mild Hybrid
    { name: "e-SkyActiv R-EV", hp: "170 hp" } // Wankel Range Extender!
  ],
  "Mazda-Tribute-EP (2000-2007)": [
    { name: "2.0 I4", hp: "124 hp" },
    { name: "2.3 I4", hp: "153 hp" },
    { name: "3.0 V6", hp: "200 hp" }
  ],
  "Mazda-Tribute-Gen 2 (2007-2011)": [
    { name: "2.5 I4", hp: "171 hp" },
    { name: "3.0 V6", hp: "240 hp" },
    { name: "2.5 Hybrid", hp: "177 hp" } // Ford rendszer
  ],

  // --- EGYTERŰEK ---

  // Mazda5 / Premacy
  "Mazda-Premacy-CP (1999-2005)": [
    { name: "1.8 I4", hp: "100-114 hp" },
    { name: "2.0 I4", hp: "131 hp" },
    { name: "2.0 DiTD", hp: "90-101 hp" }
  ],
  "Mazda-Mazda5-CR (2005-2010)": [
    { name: "1.8 MZR", hp: "116 hp" },
    { name: "2.0 MZR", hp: "145 hp" },
    { name: "2.0 MZR-CD", hp: "110-143 hp" }
  ],
  "Mazda-Mazda5-CW (2010-2018)": [
    { name: "1.8 MZR", hp: "115 hp" },
    { name: "2.0 MZR (DISI)", hp: "150 hp" },
    { name: "2.5 MZR", hp: "157 hp" }, // USA
    { name: "1.6 Diesel (PSA)", hp: "115 hp" }
  ],
  "Mazda-Premacy-CR (2005-2010)": [
    { name: "2.0 MZR", hp: "145 hp" },
    { name: "2.3 MZR", hp: "163 hp" }
  ],
  "Mazda-Premacy-CW (2010-2018)": [
    { name: "2.0 SkyActiv-G", hp: "151 hp" } // Japán piac
  ],

  // MPV / Bongo
  "Mazda-MPV-LV (1988-1999)": [
    { name: "3.0 V6", hp: "155 hp" },
    { name: "2.5 Turbo Diesel", hp: "115 hp" }
  ],
  "Mazda-MPV-LW (1999-2006)": [
    { name: "2.0 I4", hp: "122 hp" },
    { name: "2.3 MZR", hp: "141 hp" }, // 2002+
    { name: "2.5 V6", hp: "170 hp" },
    { name: "3.0 V6", hp: "200 hp" },
    { name: "2.0 Diesel", hp: "136 hp" }
  ],
  "Mazda-MPV-LY (2006-2016)": [
    { name: "2.3 MZR", hp: "163 hp" },
    { name: "2.3 DISI Turbo", hp: "245 hp" } // Japán belpiac
  ],
  "Mazda-Bongo-SK (1999-2020)": [
    { name: "1.8 I4", hp: "90 hp" },
    { name: "2.0 Diesel", hp: "86 hp" }
  ],
  "Mazda-Bongo-S400 (2020-present)": [
    { name: "1.5 I4", hp: "97 hp" } // Toyota/Daihatsu motor
  ],

  // --- PICKUPOK ---

  // BT-50
  "Mazda-BT-50-J97M (2006-2011)": [
    { name: "2.5 MZR-CD", hp: "143 hp" },
    { name: "3.0 MZR-CD", hp: "156 hp" }
  ],
  "Mazda-BT-50-UP/UR (2011-2020)": [
    { name: "2.2 MZ-CD", hp: "120-150 hp" }, // Ford Duratorq
    { name: "3.2 MZ-CD (I5)", hp: "200 hp" }  // Ford Duratorq I5
  ],
  "Mazda-BT-50-TF (2020-present)": [
    { name: "1.9 Diesel (Isuzu)", hp: "150 hp" },
    { name: "3.0 Diesel (Isuzu)", hp: "190 hp" }
  ],

  // B-Series
  "Mazda-B-Series-UF (1985-1998)": [
    { name: "2.0 I4", hp: "84 hp" },
    { name: "2.2 I4", hp: "92 hp" },
    { name: "2.6 I4", hp: "121 hp" }
  ],
  "Mazda-B-Series-UN (1998-2006)": [
    { name: "2.5 Diesel", hp: "78 hp" },
    { name: "2.5 Turbo Diesel", hp: "109-117 hp" }
  ],

  // --- KEI CARS ---
  "Mazda-Carol-HB12S/22S (1998-2000)": [
    { name: "0.66 I3", hp: "46-55 hp" }
  ],
  "Mazda-Carol-HB23S (2000-2004)": [
    { name: "0.66 I3", hp: "54 hp" }
  ],
  "Mazda-Carol-HB24S (2004-2009)": [
    { name: "0.66 I3", hp: "54 hp" }
  ],
  "Mazda-Carol-HB25S (2009-2014)": [
    { name: "0.66 I3", hp: "54 hp" }
  ],
  "Mazda-Carol-HB36S (2014-2021)": [
    { name: "0.66 I3", hp: "49-52 hp" }
  ],
  "Mazda-Carol-HB37S (2021-present)": [
    { name: "0.66 I3", hp: "46 hp" },
    { name: "0.66 I3 Mild Hybrid", hp: "49 hp" }
  ],
  "Mazda-AZ-1-PG6SA (1992-1994)": [
    { name: "0.66 Turbo (F6A)", hp: "64 hp" } // 10000 rpm redline!
  ],
  "Mazda-323-FA (1977-1980)": [
    { name: "1.0 PC", hp: "45 hp" },
    { name: "1.3 TC", hp: "60 hp" },
    { name: "1.4 UC", hp: "70 hp" } // RWD
  ],
  "Mazda-323-BD (1980-1985)": [
    { name: "1.1 E1", hp: "55 hp" },
    { name: "1.3 E3", hp: "68 hp" },
    { name: "1.5 E5", hp: "75-88 hp" } // FWD
  ],

  // 626 / Capella (Régi generációk)
  "Mazda-626-CB (1978-1982)": [
    { name: "1.6 NA", hp: "75 hp" },
    { name: "2.0 MA", hp: "90 hp" } // RWD
  ],
  "Mazda-626-GC (1982-1987)": [
    { name: "1.6 F6", hp: "80 hp" },
    { name: "2.0 FE", hp: "90-101 hp" },
    { name: "2.0 FE Turbo", hp: "118 hp" },
    { name: "2.0 Diesel", hp: "63 hp" }
  ],

  // Demio (Mazda2 alternatív néven)
  "Mazda-Demio-DY (2002-2007)": [
    { name: "1.3 ZJ-VE", hp: "90 hp" },
    { name: "1.5 ZY-VE", hp: "111 hp" }
  ],
  "Mazda-Demio-DE (2007-2014)": [
    { name: "1.3 ZJ-VE", hp: "90 hp" },
    { name: "1.5 ZY-VE", hp: "111 hp" }
  ],
  "Mazda-Demio-DJ (2014-present)": [
    { name: "1.3 SkyActiv-G", hp: "92 hp" },
    { name: "1.5 SkyActiv-G", hp: "110 hp" },
    { name: "1.5 SkyActiv-D", hp: "105 hp" }
  ]
};