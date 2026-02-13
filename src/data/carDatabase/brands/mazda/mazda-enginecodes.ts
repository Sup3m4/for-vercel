export const mazdaEngineCodes = {
    // --- ROADSTER & SPORT ---
  
    // MX-5 Miata
    "Mazda-MX-5 Miata-NA (1989-1997)-1.6 I4 (B6ZE)": [
      { code: "B6ZE(RS)", hp: "115 hp", torque: "135 Nm", profileId: "b6ze-mx5-na-early" }, // Early
      { code: "B6", hp: "90 hp", torque: "129 Nm", profileId: "b6-mx5-na-late" } // Late EU/UK detuned
    ],
    "Mazda-MX-5 Miata-NA (1989-1997)-1.8 I4 (BP)": [
      { code: "BP-ZE", hp: "130 hp", torque: "157 Nm", profileId: "bpze-mx5-na" }
    ],
    "Mazda-MX-5 Miata-NB (1998-2005)-1.6 I4 (B6)": [
      { code: "B6-ZE", hp: "110 hp", torque: "134 Nm", profileId: "b6ze-mx5-nb" }
    ],
    "Mazda-MX-5 Miata-NB (1998-2005)-1.8 I4 (BP)": [
      { code: "BP-4W", hp: "140 hp", torque: "162 Nm", profileId: "bp4w-mx5-nb1" }, // Pre-facelift
      { code: "BP-Z3", hp: "146 hp", torque: "168 Nm", profileId: "bpz3-mx5-nb2-vvt" } // VVT
    ],
    "Mazda-MX-5 Miata-NB (1998-2005)-1.8 Turbo (Mazdaspeed)": [
      { code: "BP-Z3T", hp: "178 hp", torque: "225 Nm", profileId: "bpz3t-mazdaspeed-miata" }
    ],
    "Mazda-MX-5 Miata-NC (2005-2015)-1.8 I4 (MZR)": [
      { code: "L8-VE", hp: "126 hp", torque: "167 Nm", profileId: "l8ve-mx5-nc" }
    ],
    "Mazda-MX-5 Miata-NC (2005-2015)-2.0 I4 (MZR)": [
      { code: "LF-VE", hp: "160 hp", torque: "188 Nm", profileId: "lfve-mx5-nc" },
      { code: "LF-VE (Forged)", hp: "170 hp", torque: "190 Nm", profileId: "lfve-mx5-nc-facelift" }
    ],
    "Mazda-MX-5 Miata-ND (2015-present)-1.5 SkyActiv-G": [
      { code: "P5-VP", hp: "131 hp", torque: "150 Nm", profileId: "p5vp-mx5-nd" }
    ],
    "Mazda-MX-5 Miata-ND (2015-present)-2.0 SkyActiv-G": [
      { code: "PE-VPS", hp: "160 hp", torque: "200 Nm", profileId: "pe-vps-mx5-nd1" }
    ],
    "Mazda-MX-5 Miata-ND (2015-present)-2.0 SkyActiv-G (ND2)": [
      { code: "PE-VPS", hp: "184 hp", torque: "205 Nm", profileId: "pe-vps-mx5-nd2" } // 7500 rpm redline
    ],
  
    // RX-7
    "Mazda-RX-7-SA/FB (1978-1985)-1.1 (12A)": [
      { code: "12A", hp: "100-115 hp", torque: "145 Nm", profileId: "12a-rx7-fb" }
    ],
    "Mazda-RX-7-SA/FB (1978-1985)-1.3 (13B-RESI)": [
      { code: "13B-RESI", hp: "135 hp", torque: "183 Nm", profileId: "13b-resi-rx7-gslse" } // GSL-SE
    ],
    "Mazda-RX-7-SA/FB (1978-1985)-1.1 Turbo (12A)": [
      { code: "12A-T", hp: "165 hp", torque: "225 Nm", profileId: "12at-rx7-fb-japan" }
    ],
    "Mazda-RX-7-FC (1985-1991)-1.3 (13B)": [
      { code: "13B-DEI", hp: "146-160 hp", torque: "187 Nm", profileId: "13b-dei-rx7-fc" }
    ],
    "Mazda-RX-7-FC (1985-1991)-1.3 Turbo (13B-T)": [
      { code: "13B-T", hp: "185-200 hp", torque: "245-265 Nm", profileId: "13bt-rx7-fc-turbo" }
    ],
    "Mazda-RX-7-FD (1992-2002)-1.3 Twin-Turbo (13B-REW)": [
      { code: "13B-REW", hp: "239-255 hp", torque: "294 Nm", profileId: "13b-rew-rx7-fd-export" },
      { code: "13B-REW", hp: "265-280 hp", torque: "314 Nm", profileId: "13b-rew-rx7-fd-jdm" }
    ],
  
    // RX-8
    "Mazda-RX-8-SE3P (2003-2012)-1.3 Renesis (Standard)": [
      { code: "13B-MSP (4-port)", hp: "192 hp", torque: "220 Nm", profileId: "13b-msp-4port-rx8" }
    ],
    "Mazda-RX-8-SE3P (2003-2012)-1.3 Renesis (High Power)": [
      { code: "13B-MSP (6-port)", hp: "231 hp", torque: "211 Nm", profileId: "13b-msp-6port-rx8" }
    ],
  
    // MX-3 / MX-6
    "Mazda-MX-3-EC (1991-1998)-1.6 I4": [
      { code: "B6-ME", hp: "88-107 hp", torque: "135 Nm", profileId: "b6me-mx3" }
    ],
    "Mazda-MX-3-EC (1991-1998)-1.8 V6 (K8)": [
      { code: "K8-DE", hp: "133 hp", torque: "157 Nm", profileId: "k8de-mx3-v6" }
    ],
    "Mazda-MX-6-GD (1987-1992)-2.2 I4": [
      { code: "F2", hp: "110 hp", torque: "176 Nm", profileId: "f2-mx6-gd" }
    ],
    "Mazda-MX-6-GD (1987-1992)-2.2 I4 Turbo": [
      { code: "F2T", hp: "145 hp", torque: "258 Nm", profileId: "f2t-mx6-gd-turbo" }
    ],
    "Mazda-MX-6-GE (1991-1997)-2.0 I4": [
      { code: "FS-DE", hp: "115 hp", torque: "170 Nm", profileId: "fsde-mx6-ge" }
    ],
    "Mazda-MX-6-GE (1991-1997)-2.5 V6 (KL)": [
      { code: "KL-DE", hp: "164 hp", torque: "217 Nm", profileId: "klde-mx6-ge" },
      { code: "KL-ZE", hp: "200 hp", torque: "224 Nm", profileId: "klze-mx6-jdm" } // J-Spec
    ],
  
    // --- SZEMÉLYAUTÓK (Kisautók) ---
  
    // 121
    "Mazda-121-DA (1986-1991)-1.1 (B1)": [
      { code: "B1", hp: "57 hp", torque: "86 Nm", profileId: "b1-121-da" }
    ],
    "Mazda-121-DA (1986-1991)-1.3 (B3)": [
      { code: "B3", hp: "64 hp", torque: "98 Nm", profileId: "b3-121-da" }
    ],
    "Mazda-121-DB (1991-1998)-1.3 16V (B3)": [
      { code: "B3-MI", hp: "72 hp", torque: "102 Nm", profileId: "b3mi-121-db" },
      { code: "B3", hp: "53 hp", torque: "97 Nm", profileId: "b3-121-db-low" }
    ],
    "Mazda-121-JASM/JBSM (1996-2002)-1.25 Zetec": [
      { code: "DHA", hp: "75 hp", torque: "110 Nm", profileId: "dha-121-fiesta" } // Ford
    ],
    "Mazda-121-JASM/JBSM (1996-2002)-1.3 Endura-E": [
      { code: "J4", hp: "60 hp", torque: "103 Nm", profileId: "j4-121-endura" }
    ],
    "Mazda-121-JASM/JBSM (1996-2002)-1.8 Diesel": [
      { code: "RTJ", hp: "60 hp", torque: "105 Nm", profileId: "rtj-121-diesel" }
    ],
  
    // Demio / Mazda2
    "Mazda-Demio-DW (1996-2002)-1.3 I4": [
      { code: "B3-ME", hp: "63-72 hp", torque: "105 Nm", profileId: "b3me-demio-dw" }
    ],
    "Mazda-Demio-DW (1996-2002)-1.5 I4": [
      { code: "B5-ME", hp: "75 hp", torque: "116 Nm", profileId: "b5me-demio-dw" }
    ],
    "Mazda-Mazda2-DY (2002-2007)-1.25 I4 (Zetec)": [
      { code: "FUJA", hp: "75 hp", torque: "110 Nm", profileId: "fuja-mz2-dy" }
    ],
    "Mazda-Mazda2-DY (2002-2007)-1.4 I4 (Zetec)": [
      { code: "FXJA", hp: "80 hp", torque: "124 Nm", profileId: "fxja-mz2-dy" }
    ],
    "Mazda-Mazda2-DY (2002-2007)-1.6 I4": [
      { code: "FYJA", hp: "100 hp", torque: "146 Nm", profileId: "fyja-mz2-dy" }
    ],
    "Mazda-Mazda2-DY (2002-2007)-1.4 Diesel": [
      { code: "F6JA (PSA)", hp: "68 hp", torque: "160 Nm", profileId: "f6ja-mz2-dy" }
    ],
    "Mazda-Mazda2-DE (2007-2014)-1.3 MZR": [
      { code: "ZJ-VE", hp: "75 hp", torque: "121 Nm", profileId: "zjve-mz2-de-low" },
      { code: "ZJ-VE (High)", hp: "86 hp", torque: "122 Nm", profileId: "zjve-mz2-de-high" }
    ],
    "Mazda-Mazda2-DE (2007-2014)-1.5 MZR": [
      { code: "ZY-VE", hp: "103 hp", torque: "137 Nm", profileId: "zyve-mz2-de" }
    ],
    "Mazda-Mazda2-DE (2007-2014)-1.4 Diesel": [
      { code: "Y4 (PSA)", hp: "68 hp", torque: "160 Nm", profileId: "y4-mz2-de" }
    ],
    "Mazda-Mazda2-DE (2007-2014)-1.6 Diesel": [
      { code: "Y6 (PSA)", hp: "95 hp", torque: "205 Nm", profileId: "y6-mz2-de" }
    ],
    "Mazda-Mazda2-DJ/DL (2014-present)-1.5 SkyActiv-G (75)": [
      { code: "P5-VPS", hp: "75 hp", torque: "135 Nm", profileId: "p5vps-mz2-dj-75" }
    ],
    "Mazda-Mazda2-DJ/DL (2014-present)-1.5 SkyActiv-G (90)": [
      { code: "P5-VPS", hp: "90 hp", torque: "148 Nm", profileId: "p5vps-mz2-dj-90" }
    ],
    "Mazda-Mazda2-DJ/DL (2014-present)-1.5 SkyActiv-G (115)": [
      { code: "P5-VPS", hp: "115 hp", torque: "149 Nm", profileId: "p5vps-mz2-dj-115" }
    ],
    "Mazda-Mazda2-DJ/DL (2014-present)-1.5 SkyActiv-D": [
      { code: "S5-DPTS", hp: "105 hp", torque: "220-250 Nm", profileId: "s5dpts-mz2-dj" }
    ],
    "Mazda-Mazda2-Hybrid (2022-present)-1.5 Hybrid": [
      { code: "M15A-FXE", hp: "116 hp", torque: "120+141 Nm", profileId: "m15a-fxe-mz2-hybrid" } // Toyota
    ],
  
    // Demio Extra Generations
    "Mazda-Demio-DY (2002-2007)-1.3 ZJ-VE": [
      { code: "ZJ-VE", hp: "90 hp", torque: "124 Nm", profileId: "zjve-demio-dy" }
    ],
    "Mazda-Demio-DY (2002-2007)-1.5 ZY-VE": [
      { code: "ZY-VE", hp: "111 hp", torque: "140 Nm", profileId: "zyve-demio-dy" }
    ],
    "Mazda-Demio-DE (2007-2014)-1.3 ZJ-VE": [
      { code: "ZJ-VE", hp: "90 hp", torque: "120 Nm", profileId: "zjve-demio-de" }
    ],
    "Mazda-Demio-DE (2007-2014)-1.5 ZY-VE": [
      { code: "ZY-VE", hp: "111 hp", torque: "140 Nm", profileId: "zyve-demio-de" }
    ],
    "Mazda-Demio-DJ (2014-present)-1.3 SkyActiv-G": [
      { code: "P3-VPS", hp: "92 hp", torque: "121 Nm", profileId: "p3vps-demio-dj" }
    ],
    "Mazda-Demio-DJ (2014-present)-1.5 SkyActiv-G": [
      { code: "P5-VPS", hp: "110 hp", torque: "141 Nm", profileId: "p5vps-demio-dj" }
    ],
    "Mazda-Demio-DJ (2014-present)-1.5 SkyActiv-D": [
      { code: "S5-DPTS", hp: "105 hp", torque: "250 Nm", profileId: "s5dpts-demio-dj" }
    ],
    // --- SZEMÉLYAUTÓK (Folytatás) ---

  // Mazda3
  "Mazda-Mazda3-BK (2003-2009)-1.4 MZR": [
    { code: "ZJ-VE", hp: "84 hp", torque: "122 Nm", profileId: "zjve-mz3-bk" }
  ],
  "Mazda-Mazda3-BK (2003-2009)-1.6 MZR": [
    { code: "Z6-VE", hp: "105 hp", torque: "145 Nm", profileId: "z6ve-mz3-bk" }
  ],
  "Mazda-Mazda3-BK (2003-2009)-2.0 MZR": [
    { code: "LF-DE", hp: "150 hp", torque: "187 Nm", profileId: "lfde-mz3-bk" }
  ],
  "Mazda-Mazda3-BK (2003-2009)-2.3 MZR": [
    { code: "L3-VE", hp: "160-171 hp", torque: "203-214 Nm", profileId: "l3ve-mz3-bk-us" }
  ],
  "Mazda-Mazda3-BK (2003-2009)-2.3 DISI Turbo (MPS)": [
    { code: "L3-VDT", hp: "260 hp", torque: "380 Nm", profileId: "l3vdt-mps-bk" }
  ],
  "Mazda-Mazda3-BK (2003-2009)-1.6 Diesel (PSA)": [
    { code: "Y6", hp: "109 hp", torque: "240 Nm", profileId: "y6-mz3-bk" } // PSA DV6
  ],

  "Mazda-Mazda3-BL (2009-2013)-1.6 MZR": [
    { code: "Z6-VE", hp: "105 hp", torque: "145 Nm", profileId: "z6ve-mz3-bl" }
  ],
  "Mazda-Mazda3-BL (2009-2013)-2.0 MZR": [
    { code: "LF-DE", hp: "150 hp", torque: "187 Nm", profileId: "lfde-mz3-bl" }
  ],
  "Mazda-Mazda3-BL (2009-2013)-2.0 MZR (DISI)": [
    { code: "LF-VD", hp: "151 hp", torque: "191 Nm", profileId: "lfvd-disi-mz3-bl" }
  ],
  "Mazda-Mazda3-BL (2009-2013)-2.3 DISI Turbo (MPS)": [
    { code: "L3-VDT", hp: "260 hp", torque: "380 Nm", profileId: "l3vdt-mps-bl" }
  ],
  "Mazda-Mazda3-BL (2009-2013)-1.6 Diesel": [
    { code: "Y6", hp: "115 hp", torque: "270 Nm", profileId: "y6-mz3-bl-facelift" }
  ],
  "Mazda-Mazda3-BL (2009-2013)-2.2 MZR-CD": [
    { code: "R2-AA (Low)", hp: "150 hp", torque: "360 Nm", profileId: "r2aa-mz3-bl-150" },
    { code: "R2-AA (High)", hp: "185 hp", torque: "400 Nm", profileId: "r2aa-mz3-bl-185" }
  ],

  "Mazda-Mazda3-BM/BN (2013-2019)-1.5 SkyActiv-G": [
    { code: "P5-VPS", hp: "100 hp", torque: "150 Nm", profileId: "p5vps-mz3-bm" }
  ],
  "Mazda-Mazda3-BM/BN (2013-2019)-2.0 SkyActiv-G (120)": [
    { code: "PE-VPS", hp: "120 hp", torque: "210 Nm", profileId: "pevps-mz3-bm-120" }
  ],
  "Mazda-Mazda3-BM/BN (2013-2019)-2.0 SkyActiv-G (165)": [
    { code: "PE-VPS", hp: "165 hp", torque: "210 Nm", profileId: "pevps-mz3-bm-165" }
  ],
  "Mazda-Mazda3-BM/BN (2013-2019)-2.5 SkyActiv-G": [
    { code: "PY-VPS", hp: "184 hp", torque: "250 Nm", profileId: "pyvps-mz3-bm" }
  ],
  "Mazda-Mazda3-BM/BN (2013-2019)-1.5 SkyActiv-D": [
    { code: "S5-DPTS", hp: "105 hp", torque: "270 Nm", profileId: "s5dpts-mz3-bm" }
  ],
  "Mazda-Mazda3-BM/BN (2013-2019)-2.2 SkyActiv-D": [
    { code: "SH-VPTS", hp: "150 hp", torque: "380 Nm", profileId: "shvpts-mz3-bm" }
  ],

  "Mazda-Mazda3-BP (2019-present)-2.0 SkyActiv-G M Hybrid": [
    { code: "PE-VPS", hp: "122 hp", torque: "213 Nm", profileId: "pevps-mz3-bp-122" },
    { code: "PE-VPS", hp: "150 hp", torque: "213 Nm", profileId: "pevps-mz3-bp-150" }
  ],
  "Mazda-Mazda3-BP (2019-present)-2.0 SkyActiv-X": [
    { code: "HF-VPH", hp: "180-186 hp", torque: "224-240 Nm", profileId: "hfvph-skyactiv-x" } // SPCCI
  ],
  "Mazda-Mazda3-BP (2019-present)-2.5 SkyActiv-G Turbo": [
    { code: "PY-VPTS", hp: "250 hp", torque: "434 Nm", profileId: "pyvpts-mz3-turbo" }
  ],
  "Mazda-Mazda3-BP (2019-present)-1.8 SkyActiv-D": [
    { code: "S8-DPTS", hp: "116 hp", torque: "270 Nm", profileId: "s8dpts-mz3-bp" }
  ],

  // Mazda6
  "Mazda-Mazda6-GG/GY (2002-2007)-1.8 MZR": [
    { code: "L8-DE", hp: "120 hp", torque: "165 Nm", profileId: "l8de-mz6-gg" }
  ],
  "Mazda-Mazda6-GG/GY (2002-2007)-2.0 MZR": [
    { code: "LF-DE", hp: "141 hp", torque: "181 Nm", profileId: "lfde-mz6-gg" },
    { code: "LF-VE", hp: "147 hp", torque: "184 Nm", profileId: "lfve-mz6-gg-facelift" }
  ],
  "Mazda-Mazda6-GG/GY (2002-2007)-2.3 MZR": [
    { code: "L3-VE", hp: "166 hp", torque: "207 Nm", profileId: "l3ve-mz6-gg" }
  ],
  "Mazda-Mazda6-GG/GY (2002-2007)-3.0 V6": [
    { code: "AJ", hp: "220 hp", torque: "260 Nm", profileId: "aj-v6-mz6-gg" } // Ford Duratec 30
  ],
  "Mazda-Mazda6-GG/GY (2002-2007)-2.3 DISI Turbo (MPS)": [
    { code: "L3-VDT", hp: "260 hp", torque: "380 Nm", profileId: "l3vdt-mps6-gg" }
  ],
  "Mazda-Mazda6-GG/GY (2002-2007)-2.0 MZR-CD": [
    { code: "RF5C", hp: "121 hp", torque: "310 Nm", profileId: "rf5c-mz6-gg" },
    { code: "RF7J", hp: "143 hp", torque: "360 Nm", profileId: "rf7j-mz6-gg-dpf" }
  ],

  "Mazda-Mazda6-GH (2007-2012)-1.8 MZR": [
    { code: "L8-DE", hp: "120 hp", torque: "165 Nm", profileId: "l8de-mz6-gh" }
  ],
  "Mazda-Mazda6-GH (2007-2012)-2.0 MZR": [
    { code: "LF-VE", hp: "147 hp", torque: "184 Nm", profileId: "lfve-mz6-gh" }
  ],
  "Mazda-Mazda6-GH (2007-2012)-2.0 DISI": [
    { code: "LF-VD", hp: "155 hp", torque: "193 Nm", profileId: "lfvd-mz6-gh" }
  ],
  "Mazda-Mazda6-GH (2007-2012)-2.5 MZR": [
    { code: "L5-VE", hp: "170 hp", torque: "226 Nm", profileId: "l5ve-mz6-gh" }
  ],
  "Mazda-Mazda6-GH (2007-2012)-3.7 V6": [
    { code: "MZI-3.7", hp: "272 hp", torque: "365 Nm", profileId: "mzi37-mz6-gh-us" } // Cyclone
  ],
  "Mazda-Mazda6-GH (2007-2012)-2.0 MZR-CD": [
    { code: "RF7J", hp: "140 hp", torque: "330 Nm", profileId: "rf7j-mz6-gh" }
  ],
  "Mazda-Mazda6-GH (2007-2012)-2.2 MZR-CD": [
    { code: "R2-AA", hp: "125-185 hp", torque: "310-400 Nm", profileId: "r2aa-mz6-gh" }
  ],

  "Mazda-Mazda6-GJ/GL (2012-present)-2.0 SkyActiv-G (145)": [
    { code: "PE-VPS", hp: "145 hp", torque: "210 Nm", profileId: "pevps-mz6-gj-145" }
  ],
  "Mazda-Mazda6-GJ/GL (2012-present)-2.0 SkyActiv-G (165)": [
    { code: "PE-VPS", hp: "165 hp", torque: "210 Nm", profileId: "pevps-mz6-gj-165" }
  ],
  "Mazda-Mazda6-GJ/GL (2012-present)-2.5 SkyActiv-G": [
    { code: "PY-VPS", hp: "192-194 hp", torque: "256 Nm", profileId: "pyvps-mz6-gj" }
  ],
  "Mazda-Mazda6-GJ/GL (2012-present)-2.5 SkyActiv-G Turbo": [
    { code: "PY-VPTS", hp: "230-250 hp", torque: "420 Nm", profileId: "pyvpts-mz6-turbo" }
  ],
  "Mazda-Mazda6-GJ/GL (2012-present)-2.2 SkyActiv-D": [
    { code: "SH-VPTS", hp: "150 hp", torque: "380 Nm", profileId: "shvpts-mz6-150" },
    { code: "SH-VPTS (High)", hp: "175-184 hp", torque: "420-445 Nm", profileId: "shvpts-mz6-175" }
  ],

  // 323 / Familia
  "Mazda-323-BF (1985-1989)-1.3 I4": [
    { code: "E3", hp: "68 hp", torque: "95 Nm", profileId: "e3-323-bf" }
  ],
  "Mazda-323-BF (1985-1989)-1.5 I4": [
    { code: "E5", hp: "75 hp", torque: "110 Nm", profileId: "e5-323-bf" }
  ],
  "Mazda-323-BF (1985-1989)-1.6 I4 Turbo": [
    { code: "B6T", hp: "140 hp", torque: "186 Nm", profileId: "b6t-323-gtx-bf" }
  ],
  "Mazda-323-BF (1985-1989)-1.7 Diesel": [
    { code: "PN", hp: "57 hp", torque: "107 Nm", profileId: "pn-323-bf" }
  ],

  "Mazda-323-BG (1989-1994)-1.3 16V": [
    { code: "B3", hp: "73 hp", torque: "104 Nm", profileId: "b3-323-bg" }
  ],
  "Mazda-323-BG (1989-1994)-1.6 8V/16V": [
    { code: "B6 (8V)", hp: "84 hp", torque: "125 Nm", profileId: "b6-323-bg-8v" },
    { code: "B6 (16V)", hp: "88 hp", torque: "132 Nm", profileId: "b6-323-bg-16v" }
  ],
  "Mazda-323-BG (1989-1994)-1.8 16V SOHC": [
    { code: "BP (SOHC)", hp: "103 hp", torque: "148 Nm", profileId: "bp-sohc-323-bg" }
  ],
  "Mazda-323-BG (1989-1994)-1.8 16V DOHC (GT)": [
    { code: "BP (DOHC)", hp: "128 hp", torque: "157 Nm", profileId: "bp-dohc-323-bg" }
  ],
  "Mazda-323-BG (1989-1994)-1.8 Turbo (GTX)": [
    { code: "BP-T", hp: "163 hp", torque: "216 Nm", profileId: "bpt-323-gtx-bg" }
  ],
  "Mazda-323-BG (1989-1994)-1.8 Turbo (GTR)": [
    { code: "BP-T (GTR)", hp: "185 hp", torque: "235 Nm", profileId: "bpt-323-gtr-bg" }
  ],

  "Mazda-323-BA (1994-1998)-1.5 16V": [
    { code: "Z5-DE", hp: "88 hp", torque: "132 Nm", profileId: "z5de-323-ba" }
  ],
  "Mazda-323-BA (1994-1998)-1.8 16V": [
    { code: "BP-ZE", hp: "114 hp", torque: "157 Nm", profileId: "bpze-323-ba" }
  ],
  "Mazda-323-BA (1994-1998)-2.0 V6": [
    { code: "KF-DE", hp: "144 hp", torque: "180 Nm", profileId: "kfde-323-ba-v6" }
  ],
  "Mazda-323-BA (1994-1998)-1.7 Turbo Diesel": [
    { code: "4EE1-T", hp: "82 hp", torque: "168 Nm", profileId: "4ee1t-323-ba" } // Isuzu
  ],

  "Mazda-323-BJ (1998-2003)-1.3 16V": [
    { code: "B3-ME", hp: "73 hp", torque: "108 Nm", profileId: "b3me-323-bj" }
  ],
  "Mazda-323-BJ (1998-2003)-1.5 16V": [
    { code: "ZL-DE", hp: "88 hp", torque: "132 Nm", profileId: "zlde-323-bj" }
  ],
  "Mazda-323-BJ (1998-2003)-1.6 16V": [
    { code: "ZM-DE", hp: "98 hp", torque: "145 Nm", profileId: "zmde-323-bj" }
  ],
  "Mazda-323-BJ (1998-2003)-2.0 16V": [
    { code: "FS-DE", hp: "130 hp", torque: "171 Nm", profileId: "fsde-323-bj" }
  ],
  "Mazda-323-BJ (1998-2003)-2.0 DiTD": [
    { code: "RF2A", hp: "90 hp", torque: "220 Nm", profileId: "rf2a-323-bj" },
    { code: "RF4F", hp: "101 hp", torque: "230 Nm", profileId: "rf4f-323-bj" }
  ],

  // 626 / Capella
  "Mazda-626-GD/GV (1987-1991)-1.8 8V": [
    { code: "F8", hp: "90 hp", torque: "135 Nm", profileId: "f8-626-gd" }
  ],
  "Mazda-626-GD/GV (1987-1991)-2.0 8V/16V": [
    { code: "FE", hp: "90 hp", torque: "150 Nm", profileId: "fe-626-gd-8v" },
    { code: "FE-DOHC", hp: "148 hp", torque: "182 Nm", profileId: "fedohc-626-gd-16v" }
  ],
  "Mazda-626-GD/GV (1987-1991)-2.2 12V": [
    { code: "F2", hp: "115 hp", torque: "175 Nm", profileId: "f2-626-gd" }
  ],
  "Mazda-626-GD/GV (1987-1991)-2.0 Diesel": [
    { code: "RF", hp: "60 hp", torque: "119 Nm", profileId: "rf-626-gd" }
  ],

  "Mazda-626-GE (1991-1997)-1.8 16V": [
    { code: "FP-DE", hp: "105 hp", torque: "155 Nm", profileId: "fpde-626-ge" }
  ],
  "Mazda-626-GE (1991-1997)-2.0 16V": [
    { code: "FS-DE", hp: "115 hp", torque: "170 Nm", profileId: "fsde-626-ge" }
  ],
  "Mazda-626-GE (1991-1997)-2.5 V6": [
    { code: "KL-DE", hp: "165 hp", torque: "217 Nm", profileId: "klde-626-ge" }
  ],
  "Mazda-626-GE (1991-1997)-2.0 Comprex Diesel": [
    { code: "RF-CX", hp: "75 hp", torque: "169 Nm", profileId: "rfcx-626-ge" }
  ],

  "Mazda-626-GF/GW (1997-2002)-1.8 16V": [
    { code: "FP-DE", hp: "90-100 hp", torque: "145 Nm", profileId: "fpde-626-gf" }
  ],
  "Mazda-626-GF/GW (1997-2002)-2.0 16V": [
    { code: "FS-DE", hp: "115 hp", torque: "170 Nm", profileId: "fsde-626-gf-115" },
    { code: "FS-DE (HP)", hp: "136 hp", torque: "178 Nm", profileId: "fsde-626-gf-136" }
  ],
  "Mazda-626-GF/GW (1997-2002)-2.5 V6": [
    { code: "KL-G4", hp: "167 hp", torque: "221 Nm", profileId: "klg4-626-gf-us" }
  ],
  "Mazda-626-GF/GW (1997-2002)-2.0 DiTD": [
    { code: "RF2A", hp: "90-101 hp", torque: "220-230 Nm", profileId: "rf2a-626-gf" },
    { code: "RF4F", hp: "110 hp", torque: "230 Nm", profileId: "rf4f-626-gf" }
  ],

  // Xedos / 929 / Others
  "Mazda-Xedos 6-CA (1992-1999)-1.6 16V": [
    { code: "B6-DE", hp: "107 hp", torque: "138 Nm", profileId: "b6de-xedos6" }
  ],
  "Mazda-Xedos 6-CA (1992-1999)-2.0 V6": [
    { code: "KF-DE", hp: "144 hp", torque: "172 Nm", profileId: "kfde-xedos6" }
  ],
  "Mazda-Xedos 9-TA (1993-2002)-2.0 V6": [
    { code: "KF-DE", hp: "144 hp", torque: "172 Nm", profileId: "kfde-xedos9" }
  ],
  "Mazda-Xedos 9-TA (1993-2002)-2.5 V6": [
    { code: "KL-DE", hp: "167 hp", torque: "212 Nm", profileId: "klde-xedos9" }
  ],
  "Mazda-Xedos 9-TA (1993-2002)-2.3 V6 Miller Cycle": [
    { code: "KJ-ZEM", hp: "210 hp", torque: "290 Nm", profileId: "kjzem-xedos9-miller" }
  ],

  "Mazda-929-LA (1973-1977)-1.8 I4": [
    { code: "VC", hp: "83 hp", torque: "135 Nm", profileId: "vc-929-la" }
  ],
  "Mazda-929-LA (1973-1977)-Rotary (12A/13B)": [
    { code: "12A / 13B", hp: "100-127 hp", torque: "135-160 Nm", profileId: "rotary-929-la" }
  ],
  "Mazda-929-HB (1981-1986)-2.0 I4": [
    { code: "MA", hp: "90-101 hp", torque: "155 Nm", profileId: "ma-929-hb" }
  ],
  "Mazda-929-HB (1981-1986)-2.0 I4 Turbo": [
    { code: "FET", hp: "120 hp", torque: "196 Nm", profileId: "fet-929-hb" }
  ],
  "Mazda-929-HC (1986-1991)-2.2 I4": [
    { code: "F2", hp: "115-136 hp", torque: "175-190 Nm", profileId: "f2-929-hc" }
  ],
  "Mazda-929-HC (1986-1991)-3.0 V6 (JE)": [
    { code: "JE", hp: "158 hp", torque: "230 Nm", profileId: "je-929-hc-sohc" },
    { code: "JE-ZE", hp: "190 hp", torque: "250 Nm", profileId: "jeze-929-hc-dohc" }
  ],
  "Mazda-929-HD (1991-1995)-2.5 V6": [
    { code: "J5-DE", hp: "160 hp", torque: "211 Nm", profileId: "j5de-929-hd" }
  ],
  "Mazda-929-HD (1991-1995)-3.0 V6": [
    { code: "JE-ZE", hp: "200 hp", torque: "272 Nm", profileId: "jeze-929-hd" }
  ],
  "Mazda-929-HE (1995-1999)-3.0 V6": [
    { code: "JE-ZE", hp: "185-205 hp", torque: "270 Nm", profileId: "jeze-929-he" }
  ],

  // --- SUV & CROSSOVER ---

  // CX-3
  "Mazda-CX-3-DK (2015-present)-1.5 SkyActiv-G": [
    { code: "P5-VPS", hp: "120 hp", torque: "150 Nm", profileId: "p5vps-cx3" }
  ],
  "Mazda-CX-3-DK (2015-present)-2.0 SkyActiv-G (120)": [
    { code: "PE-VPS", hp: "120 hp", torque: "204 Nm", profileId: "pevps-cx3-120" }
  ],
  "Mazda-CX-3-DK (2015-present)-2.0 SkyActiv-G (150)": [
    { code: "PE-VPS", hp: "150 hp", torque: "204 Nm", profileId: "pevps-cx3-150" }
  ],
  "Mazda-CX-3-DK (2015-present)-1.5 SkyActiv-D": [
    { code: "S5-DPTS", hp: "105 hp", torque: "270 Nm", profileId: "s5dpts-cx3" }
  ],
  "Mazda-CX-3-DK (2015-present)-1.8 SkyActiv-D": [
    { code: "S8-DPTS", hp: "115 hp", torque: "270 Nm", profileId: "s8dpts-cx3" }
  ],

  // CX-30
  "Mazda-CX-30-DM (2019-present)-2.0 SkyActiv-G M Hybrid": [
    { code: "PE-VPS", hp: "122-150 hp", torque: "213 Nm", profileId: "pevps-cx30" }
  ],
  "Mazda-CX-30-DM (2019-present)-2.5 SkyActiv-G": [
    { code: "PY-VPS", hp: "186 hp", torque: "252 Nm", profileId: "pyvps-cx30" }
  ],
  "Mazda-CX-30-DM (2019-present)-2.5 SkyActiv-G Turbo": [
    { code: "PY-VPTS", hp: "227-250 hp", torque: "434 Nm", profileId: "pyvpts-cx30-turbo" }
  ],
  "Mazda-CX-30-DM (2019-present)-2.0 SkyActiv-X": [
    { code: "HF-VPH", hp: "180-186 hp", torque: "224-240 Nm", profileId: "hfvph-cx30-x" }
  ],
  "Mazda-CX-30-DM (2019-present)-1.8 SkyActiv-D": [
    { code: "S8-DPTS", hp: "116 hp", torque: "270 Nm", profileId: "s8dpts-cx30" }
  ],

  // CX-5
  "Mazda-CX-5-KE (2012-2017)-2.0 SkyActiv-G": [
    { code: "PE-VPS", hp: "160-165 hp", torque: "208-210 Nm", profileId: "pevps-cx5-ke" }
  ],
  "Mazda-CX-5-KE (2012-2017)-2.5 SkyActiv-G": [
    { code: "PY-VPS", hp: "192 hp", torque: "256 Nm", profileId: "pyvps-cx5-ke" }
  ],
  "Mazda-CX-5-KE (2012-2017)-2.2 SkyActiv-D": [
    { code: "SH-VPTS", hp: "150-175 hp", torque: "380-420 Nm", profileId: "shvpts-cx5-ke" }
  ],

  "Mazda-CX-5-KF (2017-present)-2.0 SkyActiv-G": [
    { code: "PE-VPS", hp: "160-165 hp", torque: "213 Nm", profileId: "pevps-cx5-kf" }
  ],
  "Mazda-CX-5-KF (2017-present)-2.5 SkyActiv-G": [
    { code: "PY-VPS", hp: "194 hp", torque: "258 Nm", profileId: "pyvps-cx5-kf" }
  ],
  "Mazda-CX-5-KF (2017-present)-2.5 SkyActiv-G Turbo": [
    { code: "PY-VPTS", hp: "230-250 hp", torque: "420 Nm", profileId: "pyvpts-cx5-kf-turbo" }
  ],
  "Mazda-CX-5-KF (2017-present)-2.2 SkyActiv-D": [
    { code: "SH-VPTS", hp: "150-184 hp", torque: "380-445 Nm", profileId: "shvpts-cx5-kf" }
  ],

  // CX-50 / 60 / 90
  "Mazda-CX-50-Gen 1 (2022-present)-2.5 SkyActiv-G": [
    { code: "PY-VPS", hp: "187 hp", torque: "252 Nm", profileId: "pyvps-cx50" }
  ],
  "Mazda-CX-50-Gen 1 (2022-present)-2.5 SkyActiv-G Turbo": [
    { code: "PY-VPTS", hp: "256 hp", torque: "434 Nm", profileId: "pyvpts-cx50" }
  ],

  "Mazda-CX-60-KH (2022-present)-2.5 e-SkyActiv PHEV": [
    { code: "PY-VPH", hp: "327 hp", torque: "500 Nm", profileId: "pyvph-cx60-phev" }
  ],
  "Mazda-CX-60-KH (2022-present)-3.3 e-SkyActiv D (I6)": [
    { code: "T3-VPTS", hp: "200-254 hp", torque: "450-550 Nm", profileId: "t3vpts-cx60-diesel" }
  ],
  "Mazda-CX-60-KH (2022-present)-3.3 e-SkyActiv G (I6)": [
    { code: "HF-VPH", hp: "284 hp", torque: "450 Nm", profileId: "hfvph-cx60-gas" } // Correct code TBD, assuming based on X tech or new
  ],

  "Mazda-CX-7-ER (2006-2012)-2.3 DISI Turbo": [
    { code: "L3-VDT", hp: "238-260 hp", torque: "350-380 Nm", profileId: "l3vdt-cx7" }
  ],
  "Mazda-CX-7-ER (2006-2012)-2.5 MZR": [
    { code: "L5-VE", hp: "161 hp", torque: "218 Nm", profileId: "l5ve-cx7" }
  ],
  "Mazda-CX-7-ER (2006-2012)-2.2 MZR-CD": [
    { code: "R2-AA", hp: "173 hp", torque: "400 Nm", profileId: "r2aa-cx7" }
  ],

  "Mazda-CX-8-KG (2017-2023)-2.5 SkyActiv-G": [
    { code: "PY-VPS", hp: "190 hp", torque: "252 Nm", profileId: "pyvps-cx8" }
  ],
  "Mazda-CX-8-KG (2017-2023)-2.5 SkyActiv-G Turbo": [
    { code: "PY-VPTS", hp: "230 hp", torque: "420 Nm", profileId: "pyvpts-cx8" }
  ],
  "Mazda-CX-8-KG (2017-2023)-2.2 SkyActiv-D": [
    { code: "SH-VPTS", hp: "190 hp", torque: "450 Nm", profileId: "shvpts-cx8" }
  ],

  "Mazda-CX-9-TB (2006-2015)-3.5 V6 (Ford)": [
    { code: "Cyclone", hp: "263 hp", torque: "337 Nm", profileId: "cyclone-cx9-35" }
  ],
  "Mazda-CX-9-TB (2006-2015)-3.7 V6 (MZI)": [
    { code: "MZI-3.7", hp: "273 hp", torque: "366 Nm", profileId: "mzi37-cx9" }
  ],
  "Mazda-CX-9-TC (2016-2023)-2.5 SkyActiv-G Turbo": [
    { code: "PY-VPTS", hp: "227-250 hp", torque: "420 Nm", profileId: "pyvpts-cx9-tc" }
  ],

  "Mazda-CX-90-KK (2023-present)-3.3 e-SkyActiv G Turbo (I6)": [
    { code: "T3-VPTS (Gas)", hp: "280-340 hp", torque: "450-500 Nm", profileId: "t3vpts-cx90-gas" }
  ],
  "Mazda-CX-90-KK (2023-present)-2.5 e-SkyActiv PHEV": [
    { code: "PY-VPH", hp: "323 hp", torque: "500 Nm", profileId: "pyvph-cx90-phev" }
  ],

  "Mazda-MX-30-DR (2020-present)-e-SkyActiv EV": [
    { code: "e-SkyActiv", hp: "143 hp", torque: "265 Nm", profileId: "eskyactiv-mx30-ev" }
  ],
  "Mazda-MX-30-DR (2020-present)-2.0 e-SkyActiv G": [
    { code: "PE-VPS", hp: "155 hp", torque: "200 Nm", profileId: "pevps-mx30-mild" }
  ],
  "Mazda-MX-30-DR (2020-present)-e-SkyActiv R-EV": [
    { code: "8C (Rotary)", hp: "170 hp", torque: "260 Nm", profileId: "8c-rotary-mx30" }
  ],

  "Mazda-Tribute-EP (2000-2007)-2.0 I4": [
    { code: "YF", hp: "124 hp", torque: "175 Nm", profileId: "yf-tribute" }
  ],
  "Mazda-Tribute-EP (2000-2007)-2.3 I4": [
    { code: "L3-VE", hp: "153 hp", torque: "206 Nm", profileId: "l3ve-tribute" }
  ],
  "Mazda-Tribute-EP (2000-2007)-3.0 V6": [
    { code: "AJ", hp: "200 hp", torque: "265 Nm", profileId: "aj-tribute" }
  ],
  "Mazda-Tribute-Gen 2 (2007-2011)-2.5 I4": [
    { code: "L5-VE", hp: "171 hp", torque: "232 Nm", profileId: "l5ve-tribute" }
  ],
  "Mazda-Tribute-Gen 2 (2007-2011)-3.0 V6": [
    { code: "AJ", hp: "240 hp", torque: "302 Nm", profileId: "aj-tribute-g2" }
  ],
  "Mazda-Tribute-Gen 2 (2007-2011)-2.5 Hybrid": [
    { code: "L3 (Atkinson)", hp: "177 hp", torque: "184 Nm", profileId: "l3-hybrid-tribute" }
  ],

  // --- EGYTERŰEK ---

  // Mazda5 / Premacy
  "Mazda-Premacy-CP (1999-2005)-1.8 I4": [
    { code: "FP-DE", hp: "100-114 hp", torque: "161 Nm", profileId: "fpde-premacy" }
  ],
  "Mazda-Premacy-CP (1999-2005)-2.0 I4": [
    { code: "FS-DE", hp: "131 hp", torque: "171 Nm", profileId: "fsde-premacy" }
  ],
  "Mazda-Premacy-CP (1999-2005)-2.0 DiTD": [
    { code: "RF4F", hp: "90-101 hp", torque: "230 Nm", profileId: "rf4f-premacy" }
  ],

  "Mazda-Mazda5-CR (2005-2010)-1.8 MZR": [
    { code: "L8-DE", hp: "116 hp", torque: "165 Nm", profileId: "l8de-mz5-cr" }
  ],
  "Mazda-Mazda5-CR (2005-2010)-2.0 MZR": [
    { code: "LF-DE", hp: "145 hp", torque: "185 Nm", profileId: "lfde-mz5-cr" }
  ],
  "Mazda-Mazda5-CR (2005-2010)-2.0 MZR-CD": [
    { code: "RF7J", hp: "110-143 hp", torque: "310-360 Nm", profileId: "rf7j-mz5-cr" }
  ],

  "Mazda-Mazda5-CW (2010-2018)-1.8 MZR": [
    { code: "L8-DE", hp: "115 hp", torque: "165 Nm", profileId: "l8de-mz5-cw" }
  ],
  "Mazda-Mazda5-CW (2010-2018)-2.0 MZR (DISI)": [
    { code: "LF-VD", hp: "150 hp", torque: "191 Nm", profileId: "lfvd-mz5-cw" }
  ],
  "Mazda-Mazda5-CW (2010-2018)-2.5 MZR": [
    { code: "L5-VE", hp: "157 hp", torque: "221 Nm", profileId: "l5ve-mz5-cw" }
  ],
  "Mazda-Mazda5-CW (2010-2018)-1.6 Diesel (PSA)": [
    { code: "Y6", hp: "115 hp", torque: "270 Nm", profileId: "y6-mz5-cw" }
  ],

  "Mazda-Premacy-CR (2005-2010)-2.0 MZR": [
    { code: "LF-VD", hp: "145 hp", torque: "185 Nm", profileId: "lfvd-premacy-cr" }
  ],
  "Mazda-Premacy-CR (2005-2010)-2.3 MZR": [
    { code: "L3-VE", hp: "163 hp", torque: "203 Nm", profileId: "l3ve-premacy-cr" }
  ],
  "Mazda-Premacy-CW (2010-2018)-2.0 SkyActiv-G": [
    { code: "PE-VPS", hp: "151 hp", torque: "190 Nm", profileId: "pevps-premacy-cw" }
  ],

  // MPV
  "Mazda-MPV-LV (1988-1999)-3.0 V6": [
    { code: "JE", hp: "155 hp", torque: "230 Nm", profileId: "je-mpv-lv" }
  ],
  "Mazda-MPV-LV (1988-1999)-2.5 Turbo Diesel": [
    { code: "WL-T", hp: "115 hp", torque: "280 Nm", profileId: "wlt-mpv-lv" }
  ],
  "Mazda-MPV-LW (1999-2006)-2.0 I4": [
    { code: "FS-DE", hp: "122 hp", torque: "175 Nm", profileId: "fsde-mpv-lw" }
  ],
  "Mazda-MPV-LW (1999-2006)-2.3 MZR": [
    { code: "L3-VE", hp: "141 hp", torque: "195 Nm", profileId: "l3ve-mpv-lw" }
  ],
  "Mazda-MPV-LW (1999-2006)-2.5 V6": [
    { code: "GY-DE", hp: "170 hp", torque: "207 Nm", profileId: "gyde-mpv-lw" } // Ford Duratec
  ],
  "Mazda-MPV-LW (1999-2006)-3.0 V6": [
    { code: "AJ", hp: "200 hp", torque: "270 Nm", profileId: "aj-mpv-lw" }
  ],
  "Mazda-MPV-LW (1999-2006)-2.0 Diesel": [
    { code: "RF5C", hp: "136 hp", torque: "310 Nm", profileId: "rf5c-mpv-lw" }
  ],
  "Mazda-MPV-LY (2006-2016)-2.3 MZR": [
    { code: "L3-VE", hp: "163 hp", torque: "203 Nm", profileId: "l3ve-mpv-ly" }
  ],
  "Mazda-MPV-LY (2006-2016)-2.3 DISI Turbo": [
    { code: "L3-VDT", hp: "245 hp", torque: "350 Nm", profileId: "l3vdt-mpv-ly" }
  ],

  // Bongo
  "Mazda-Bongo-SK (1999-2020)-1.8 I4": [
    { code: "F8", hp: "90 hp", torque: "135 Nm", profileId: "f8-bongo-sk" }
  ],
  "Mazda-Bongo-SK (1999-2020)-2.0 Diesel": [
    { code: "RF", hp: "86 hp", torque: "170 Nm", profileId: "rf-bongo-sk" }
  ],
  "Mazda-Bongo-S400 (2020-present)-1.5 I4": [
    { code: "2NR-VE", hp: "97 hp", torque: "134 Nm", profileId: "2nrve-bongo-s400" } // Toyota
  ],

  // --- PICKUPOK ---

  // BT-50
  "Mazda-BT-50-J97M (2006-2011)-2.5 MZR-CD": [
    { code: "WL-C", hp: "143 hp", torque: "330 Nm", profileId: "wlc-bt50-j97m" }
  ],
  "Mazda-BT-50-J97M (2006-2011)-3.0 MZR-CD": [
    { code: "WE-C", hp: "156 hp", torque: "380 Nm", profileId: "wec-bt50-j97m" }
  ],
  "Mazda-BT-50-UP/UR (2011-2020)-2.2 MZ-CD": [
    { code: "P4-AT", hp: "120-150 hp", torque: "375 Nm", profileId: "p4at-bt50-up" } // Ford Puma
  ],
  "Mazda-BT-50-UP/UR (2011-2020)-3.2 MZ-CD (I5)": [
    { code: "P5-AT", hp: "200 hp", torque: "470 Nm", profileId: "p5at-bt50-up" }
  ],
  "Mazda-BT-50-TF (2020-present)-1.9 Diesel (Isuzu)": [
    { code: "RZ4E-TC", hp: "150 hp", torque: "350 Nm", profileId: "rz4etc-bt50-tf" }
  ],
  "Mazda-BT-50-TF (2020-present)-3.0 Diesel (Isuzu)": [
    { code: "4JJ3-TCX", hp: "190 hp", torque: "450 Nm", profileId: "4jj3tcx-bt50-tf" }
  ],

  // B-Series
  "Mazda-B-Series-UF (1985-1998)-2.0 I4": [
    { code: "FE", hp: "84 hp", torque: "155 Nm", profileId: "fe-bseries-uf" }
  ],
  "Mazda-B-Series-UF (1985-1998)-2.2 I4": [
    { code: "F2", hp: "92 hp", torque: "175 Nm", profileId: "f2-bseries-uf" }
  ],
  "Mazda-B-Series-UF (1985-1998)-2.6 I4": [
    { code: "G6", hp: "121 hp", torque: "202 Nm", profileId: "g6-bseries-uf" }
  ],
  "Mazda-B-Series-UN (1998-2006)-2.5 Diesel": [
    { code: "WL", hp: "78 hp", torque: "170 Nm", profileId: "wl-bseries-un" }
  ],
  "Mazda-B-Series-UN (1998-2006)-2.5 Turbo Diesel": [
    { code: "WL-T", hp: "109-117 hp", torque: "266-280 Nm", profileId: "wlt-bseries-un" }
  ],

  // --- KEI CARS ---

  "Mazda-Carol-HB12S/22S (1998-2000)-0.66 I3": [
    { code: "F6A", hp: "46-52 hp", torque: "60 Nm", profileId: "f6a-carol-hb12" },
    { code: "K6A", hp: "55 hp", torque: "61 Nm", profileId: "k6a-carol-hb22" }
  ],
  "Mazda-Carol-HB23S (2000-2004)-0.66 I3": [
    { code: "K6A", hp: "54 hp", torque: "63 Nm", profileId: "k6a-carol-hb23" }
  ],
  "Mazda-Carol-HB24S (2004-2009)-0.66 I3": [
    { code: "K6A", hp: "54 hp", torque: "63 Nm", profileId: "k6a-carol-hb24" }
  ],
  "Mazda-Carol-HB25S (2009-2014)-0.66 I3": [
    { code: "K6A", hp: "54 hp", torque: "63 Nm", profileId: "k6a-carol-hb25" }
  ],
  "Mazda-Carol-HB36S (2014-2021)-0.66 I3": [
    { code: "R06A", hp: "49-52 hp", torque: "63 Nm", profileId: "r06a-carol-hb36" }
  ],
  "Mazda-Carol-HB37S (2021-present)-0.66 I3": [
    { code: "R06A", hp: "46 hp", torque: "55 Nm", profileId: "r06a-carol-hb37" }
  ],
  "Mazda-Carol-HB37S (2021-present)-0.66 I3 Mild Hybrid": [
    { code: "R06D", hp: "49 hp", torque: "58 Nm", profileId: "r06d-carol-hybrid" }
  ],

  "Mazda-AZ-1-PG6SA (1992-1994)-0.66 Turbo (F6A)": [
    { code: "F6A Turbo", hp: "64 hp", torque: "85 Nm", profileId: "f6a-turbo-az1" }
  ],

  // --- HIÁNYZÓK PÓTLÁSA (Enginetypes-ből) ---

  // 323 / Familia (Régi generációk)
  "Mazda-323-FA (1977-1980)-1.0 PC": [
    { code: "PC", hp: "45 hp", torque: "70 Nm", profileId: "pc-323-fa" }
  ],
  "Mazda-323-FA (1977-1980)-1.3 TC": [
    { code: "TC", hp: "60 hp", torque: "90 Nm", profileId: "tc-323-fa" }
  ],
  "Mazda-323-FA (1977-1980)-1.4 UC": [
    { code: "UC", hp: "70 hp", torque: "105 Nm", profileId: "uc-323-fa" }
  ],
  "Mazda-323-BD (1980-1985)-1.1 E1": [
    { code: "E1", hp: "55 hp", torque: "80 Nm", profileId: "e1-323-bd" }
  ],
  "Mazda-323-BD (1980-1985)-1.3 E3": [
    { code: "E3", hp: "68 hp", torque: "95 Nm", profileId: "e3-323-bd" }
  ],
  "Mazda-323-BD (1980-1985)-1.5 E5": [
    { code: "E5", hp: "75-88 hp", torque: "115 Nm", profileId: "e5-323-bd" }
  ],

  // 626 / Capella (Régi generációk)
  "Mazda-626-CB (1978-1982)-1.6 NA": [
    { code: "NA", hp: "75 hp", torque: "120 Nm", profileId: "na-626-cb" }
  ],
  "Mazda-626-CB (1978-1982)-2.0 MA": [
    { code: "MA", hp: "90 hp", torque: "155 Nm", profileId: "ma-626-cb" }
  ],
  "Mazda-626-GC (1982-1987)-1.6 F6": [
    { code: "F6", hp: "80 hp", torque: "120 Nm", profileId: "f6-626-gc" }
  ],
  "Mazda-626-GC (1982-1987)-2.0 FE": [
    { code: "FE", hp: "90-101 hp", torque: "155 Nm", profileId: "fe-626-gc" }
  ],
  "Mazda-626-GC (1982-1987)-2.0 FE Turbo": [
    { code: "FET", hp: "118 hp", torque: "190 Nm", profileId: "fet-626-gc" }
  ],
  "Mazda-626-GC (1982-1987)-2.0 Diesel": [
    { code: "RF", hp: "63 hp", torque: "120 Nm", profileId: "rf-626-gc" }
  ],
};