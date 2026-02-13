export const skodaEngineCodes = {
    // ===========================================================================
    // THE CLASSICS (Rear Engine & Early FWD)
    // ===========================================================================
    "Skoda-105-Type 742 (1976-1990)-1.0 (105 S/L)": [
      { code: "742.10", hp: "45 hp", torque: "73 Nm", profileId: "742-10-skoda-105" }
    ],
    "Skoda-120-Type 742 (1976-1990)-1.2 (120 L)": [
      { code: "742.12", hp: "52 hp", torque: "85 Nm", profileId: "742-12-skoda-120l" }
    ],
    "Skoda-120-Type 742 (1976-1990)-1.2 (120 LS/GLS)": [
      { code: "742.12X", hp: "58 hp", torque: "90 Nm", profileId: "742-12x-skoda-120ls" }
    ],
    "Skoda-130-Type 742 (1984-1990)-1.3 (130 L/GL)": [
      { code: "742.13", hp: "62 hp", torque: "97 Nm", profileId: "742-13-skoda-130" }
    ],
    "Skoda-130-Type 742 (1984-1990)-1.3 (135/136)": [
      { code: "742.135", hp: "58 hp", torque: "94 Nm", profileId: "742-135-skoda-rapid" }, // Unleaded capable
      { code: "742.136", hp: "62 hp", torque: "100 Nm", profileId: "742-136-skoda-rapid" }
    ],
  
    "Skoda-Favorit-Hatchback (1987-1995)-1.3 (135)": [
      { code: "781.135 (L/LS)", hp: "58 hp", torque: "94 Nm", profileId: "781-135-favorit" }, // Carb
      { code: "781.135B", hp: "54 hp", torque: "93 Nm", profileId: "781-135b-favorit-mono" } // Mono-Motronic
    ],
    "Skoda-Favorit-Hatchback (1987-1995)-1.3 (136)": [
      { code: "781.136 (L/LS)", hp: "62 hp", torque: "100 Nm", profileId: "781-136-favorit" }, // Carb
      { code: "781.136B", hp: "68 hp", torque: "100 Nm", profileId: "781-136b-favorit-mono" } // Mono-Motronic
    ],
  
    "Skoda-Felicia-Hatchback/Combi (1994-2001)-1.3 (135)": [
      { code: "135B (AMG)", hp: "54 hp", torque: "94 Nm", profileId: "135b-felicia" }, // Mono-Motronic
      { code: "135M", hp: "54 hp", torque: "99 Nm", profileId: "135m-felicia-mpi" } // MPI
    ],
    "Skoda-Felicia-Hatchback/Combi (1994-2001)-1.3 (136 MPI)": [
      { code: "136B (AMH)", hp: "68 hp", torque: "100 Nm", profileId: "136b-felicia" },
      { code: "136M", hp: "68 hp", torque: "106 Nm", profileId: "136m-felicia-mpi" } // The best OHV
    ],
    "Skoda-Felicia-Hatchback/Combi (1994-2001)-1.6 MPI": [
      { code: "AEE", hp: "75 hp", torque: "135 Nm", profileId: "aee-felicia" } // VW Engine
    ],
    "Skoda-Felicia-Hatchback/Combi (1994-2001)-1.9 D": [
      { code: "AEF", hp: "64 hp", torque: "124 Nm", profileId: "aef-felicia-diesel" } // VW Lucas pump
    ],
  
    // ===========================================================================
    // SKODA FABIA (The Small Car King)
    // ===========================================================================
    "Skoda-Fabia-Gen 1 (6Y) (1999-2007)-1.0": [
      { code: "ARV", hp: "50 hp", torque: "84 Nm", profileId: "arv-fabia-1" }, // Skoda OHV
      { code: "AQV", hp: "50 hp", torque: "84 Nm", profileId: "aqv-fabia-1" }
    ],
    "Skoda-Fabia-Gen 1 (6Y) (1999-2007)-1.2 HTP": [
      { code: "AWY", hp: "54 hp", torque: "106 Nm", profileId: "awy-fabia-1-6v" }, // 6v
      { code: "BMD", hp: "54 hp", torque: "106 Nm", profileId: "bmd-fabia-1-6v" },
      { code: "AZQ", hp: "64 hp", torque: "112 Nm", profileId: "azq-fabia-1-12v" }, // 12v
      { code: "BME", hp: "64 hp", torque: "112 Nm", profileId: "bme-fabia-1-12v" }
    ],
    "Skoda-Fabia-Gen 1 (6Y) (1999-2007)-1.4 MPI": [
      { code: "AZE", hp: "60 hp", torque: "118 Nm", profileId: "aze-fabia-1-ohv" },
      { code: "AME", hp: "68 hp", torque: "120 Nm", profileId: "ame-fabia-1-ohv" },
      { code: "AQW", hp: "68 hp", torque: "120 Nm", profileId: "aqw-fabia-1-ohv" },
      { code: "ATZ", hp: "68 hp", torque: "120 Nm", profileId: "atz-fabia-1-ohv" }
    ],
    "Skoda-Fabia-Gen 1 (6Y) (1999-2007)-1.4 16v": [
      { code: "AUA", hp: "75 hp", torque: "126 Nm", profileId: "aua-fabia-1" },
      { code: "BBY", hp: "75 hp", torque: "126 Nm", profileId: "bby-fabia-1" },
      { code: "BKY", hp: "75 hp", torque: "126 Nm", profileId: "bky-fabia-1" },
      { code: "AUB", hp: "100 hp", torque: "126 Nm", profileId: "aub-fabia-1" },
      { code: "BBZ", hp: "100 hp", torque: "126 Nm", profileId: "bbz-fabia-1" }
    ],
    "Skoda-Fabia-Gen 1 (6Y) (1999-2007)-2.0": [
      { code: "AZL", hp: "115 hp", torque: "170 Nm", profileId: "azl-fabia-1" }
    ],
    "Skoda-Fabia-Gen 1 (6Y) (1999-2007)-1.9 SDI": [
      { code: "ASY", hp: "64 hp", torque: "125 Nm", profileId: "asy-fabia-1" }
    ],
    "Skoda-Fabia-Gen 1 (6Y) (1999-2007)-1.4 TDI": [
      { code: "AMF", hp: "75 hp", torque: "195 Nm", profileId: "amf-fabia-1" },
      { code: "BNM", hp: "70 hp", torque: "155 Nm", profileId: "bnm-fabia-1" },
      { code: "BNV", hp: "80 hp", torque: "195 Nm", profileId: "bnv-fabia-1" }
    ],
    "Skoda-Fabia-Gen 1 (6Y) (1999-2007)-1.9 TDI PD": [
      { code: "ATD", hp: "100 hp", torque: "240 Nm", profileId: "atd-fabia-1" },
      { code: "AXR", hp: "100 hp", torque: "240 Nm", profileId: "axr-fabia-1" }
    ],
    "Skoda-Fabia-Gen 1 (6Y) (1999-2007)-1.9 TDI RS": [
      { code: "ASZ", hp: "130 hp", torque: "310 Nm", profileId: "asz-fabia-1-rs" },
      { code: "BLT", hp: "130 hp", torque: "310 Nm", profileId: "blt-fabia-1-rs" }
    ],
  
    "Skoda-Fabia-Gen 2 (5J) (2007-2014)-1.2 HTP": [
      { code: "BBM", hp: "60 hp", torque: "108 Nm", profileId: "bbm-fabia-2" },
      { code: "CHFA", hp: "60 hp", torque: "108 Nm", profileId: "chfa-fabia-2" },
      { code: "BZG", hp: "70 hp", torque: "112 Nm", profileId: "bzg-fabia-2" },
      { code: "CEVA", hp: "70 hp", torque: "112 Nm", profileId: "ceva-fabia-2" },
      { code: "CGPA", hp: "70 hp", torque: "112 Nm", profileId: "cgpa-fabia-2" } // Improved chain
    ],
    "Skoda-Fabia-Gen 2 (5J) (2007-2014)-1.2 TSI": [
      { code: "CBZA", hp: "86 hp", torque: "160 Nm", profileId: "cbza-fabia-2" }, // Chain issue
      { code: "CBZB", hp: "105 hp", torque: "175 Nm", profileId: "cbzb-fabia-2" }
    ],
    "Skoda-Fabia-Gen 2 (5J) (2007-2014)-1.4 16v": [
      { code: "BXW", hp: "86 hp", torque: "132 Nm", profileId: "bxw-fabia-2" },
      { code: "CGGB", hp: "86 hp", torque: "132 Nm", profileId: "cggb-fabia-2" }
    ],
    "Skoda-Fabia-Gen 2 (5J) (2007-2014)-1.6 16v": [
      { code: "BTS", hp: "105 hp", torque: "153 Nm", profileId: "bts-fabia-2" } // Chain driven
    ],
    "Skoda-Fabia-Gen 2 (5J) (2007-2014)-1.4 TSI RS": [
      { code: "CAVE", hp: "180 hp", torque: "250 Nm", profileId: "cave-fabia-2-rs" }, // Oil consumption issues
      { code: "CTHE", hp: "180 hp", torque: "250 Nm", profileId: "cthe-fabia-2-rs" } // Revised pistons
    ],
    "Skoda-Fabia-Gen 2 (5J) (2007-2014)-1.6 TDI": [
      { code: "CAYA", hp: "75 hp", torque: "195 Nm", profileId: "caya-fabia-2" },
      { code: "CAYB", hp: "90 hp", torque: "230 Nm", profileId: "cayb-fabia-2" },
      { code: "CAYC", hp: "105 hp", torque: "250 Nm", profileId: "cayc-fabia-2" }
    ],
  
    "Skoda-Fabia-Gen 3 (NJ) (2014-2021)-1.0 TSI": [
      { code: "CHZB", hp: "95 hp", torque: "160 Nm", profileId: "chzb-fabia-3" },
      { code: "CHZC", hp: "110 hp", torque: "200 Nm", profileId: "chzc-fabia-3" },
      { code: "DKLD", hp: "95 hp", torque: "160 Nm", profileId: "dkld-fabia-3" } // OPF
    ],
    "Skoda-Fabia-Gen 3 (NJ) (2014-2021)-1.2 TSI": [
      { code: "CJZC", hp: "90 hp", torque: "160 Nm", profileId: "cjzc-fabia-3" }, // Belt driven
      { code: "CJZD", hp: "110 hp", torque: "175 Nm", profileId: "cjzd-fabia-3" }
    ],
    "Skoda-Fabia-Gen 3 (NJ) (2014-2021)-1.4 TDI": [
      { code: "CUSB", hp: "90 hp", torque: "230 Nm", profileId: "cusb-fabia-3" }, // 3-cyl
      { code: "CUTA", hp: "105 hp", torque: "250 Nm", profileId: "cuta-fabia-3" }
    ],
  
    // ===========================================================================
    // SKODA OCTAVIA (The Heart of the Brand)
    // ===========================================================================
    "Skoda-Octavia-Gen 1 (1U) (1996-2010)-1.6": [
      { code: "AEE", hp: "75 hp", torque: "135 Nm", profileId: "aee-octavia-1" },
      { code: "AEH", hp: "100 hp", torque: "145 Nm", profileId: "aeh-octavia-1" },
      { code: "AKL", hp: "100 hp", torque: "145 Nm", profileId: "akl-octavia-1" },
      { code: "AVU", hp: "102 hp", torque: "148 Nm", profileId: "avu-octavia-1" },
      { code: "BFQ", hp: "102 hp", torque: "148 Nm", profileId: "bfq-octavia-1" } // Reliable legend
    ],
    "Skoda-Octavia-Gen 1 (1U) (1996-2010)-1.8 20v": [
      { code: "AGN", hp: "125 hp", torque: "170 Nm", profileId: "agn-octavia-1" }
    ],
    "Skoda-Octavia-Gen 1 (1U) (1996-2010)-1.8 T": [
      { code: "AGU", hp: "150 hp", torque: "210 Nm", profileId: "agu-octavia-1" }, // Big port head
      { code: "ARZ", hp: "150 hp", torque: "210 Nm", profileId: "arz-octavia-1" },
      { code: "AUM", hp: "150 hp", torque: "210 Nm", profileId: "aum-octavia-1" } // K03s turbo
    ],
    "Skoda-Octavia-Gen 1 (1U) (1996-2010)-1.8 T RS": [
      { code: "AUQ", hp: "180 hp", torque: "235 Nm", profileId: "auq-octavia-1-rs" }
    ],
    "Skoda-Octavia-Gen 1 (1U) (1996-2010)-2.0": [
      { code: "APK", hp: "115 hp", torque: "170 Nm", profileId: "apk-octavia-1" },
      { code: "AQY", hp: "115 hp", torque: "170 Nm", profileId: "aqy-octavia-1" },
      { code: "AZJ", hp: "115 hp", torque: "172 Nm", profileId: "azj-octavia-1" }
    ],
    "Skoda-Octavia-Gen 1 (1U) (1996-2010)-1.9 TDI": [
      { code: "AGR", hp: "90 hp", torque: "210 Nm", profileId: "agr-octavia-1" }, // Wastegate
      { code: "ALH", hp: "90 hp", torque: "210 Nm", profileId: "alh-octavia-1" }, // VGT
      { code: "AHF", hp: "110 hp", torque: "235 Nm", profileId: "ahf-octavia-1" },
      { code: "ASV", hp: "110 hp", torque: "235 Nm", profileId: "asv-octavia-1" }
    ],
    "Skoda-Octavia-Gen 1 (1U) (1996-2010)-1.9 TDI PD": [
      { code: "ATD", hp: "100 hp", torque: "240 Nm", profileId: "atd-octavia-1" },
      { code: "AXR", hp: "100 hp", torque: "240 Nm", profileId: "axr-octavia-1" },
      { code: "ASZ", hp: "130 hp", torque: "310 Nm", profileId: "asz-octavia-1" }
    ],
  
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)-1.4 MPI": [
      { code: "BCA", hp: "75 hp", torque: "126 Nm", profileId: "bca-octavia-2" },
      { code: "BUD", hp: "80 hp", torque: "132 Nm", profileId: "bud-octavia-2" },
      { code: "CGGA", hp: "80 hp", torque: "132 Nm", profileId: "cgga-octavia-2" }
    ],
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)-1.4 TSI": [
      { code: "CAXA", hp: "122 hp", torque: "200 Nm", profileId: "caxa-octavia-2" } // Chain driven
    ],
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)-1.6 MPI": [
      { code: "BGU", hp: "102 hp", torque: "148 Nm", profileId: "bgu-octavia-2" },
      { code: "BSE", hp: "102 hp", torque: "148 Nm", profileId: "bse-octavia-2" }, // The reliable one
      { code: "BSF", hp: "102 hp", torque: "148 Nm", profileId: "bsf-octavia-2" },
      { code: "CCSA", hp: "102 hp", torque: "148 Nm", profileId: "ccsa-octavia-2" }
    ],
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)-1.6 FSI": [
      { code: "BLF", hp: "115 hp", torque: "155 Nm", profileId: "blf-octavia-2" } // Chain driven
    ],
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)-1.8 TSI": [
      { code: "BZB", hp: "160 hp", torque: "250 Nm", profileId: "bzb-octavia-2" }, // EA888 Gen 1
      { code: "CDAA", hp: "160 hp", torque: "250 Nm", profileId: "cdaa-octavia-2" } // EA888 Gen 2 (Oil consumption!)
    ],
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)-2.0 FSI": [
      { code: "BLR", hp: "150 hp", torque: "200 Nm", profileId: "blr-octavia-2" },
      { code: "BLY", hp: "150 hp", torque: "200 Nm", profileId: "bly-octavia-2" },
      { code: "BVX", hp: "150 hp", torque: "200 Nm", profileId: "bvx-octavia-2" }, // 4x4
      { code: "BVY", hp: "150 hp", torque: "200 Nm", profileId: "bvy-octavia-2" }
    ],
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)-2.0 TSI RS": [
      { code: "BWA", hp: "200 hp", torque: "280 Nm", profileId: "bwa-octavia-2-rs" }, // EA113 Belt
      { code: "CCZA", hp: "200 hp", torque: "280 Nm", profileId: "ccza-octavia-2-rs" } // EA888 Chain (Tensioner issues!)
    ],
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)-1.9 TDI PD": [
      { code: "BJB", hp: "105 hp", torque: "250 Nm", profileId: "bjb-octavia-2" },
      { code: "BKC", hp: "105 hp", torque: "250 Nm", profileId: "bkc-octavia-2" },
      { code: "BXE", hp: "105 hp", torque: "250 Nm", profileId: "bxe-octavia-2" }, // Conrod issues
      { code: "BLS", hp: "105 hp", torque: "250 Nm", profileId: "bls-octavia-2" } // DPF
    ],
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)-1.6 TDI": [
      { code: "CAYC", hp: "105 hp", torque: "250 Nm", profileId: "cayc-octavia-2" } // Continental injectors
    ],
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)-2.0 TDI PD": [
      { code: "BKD", hp: "140 hp", torque: "320 Nm", profileId: "bkd-octavia-2" }, // 16v (Crackhead)
      { code: "BMM", hp: "140 hp", torque: "320 Nm", profileId: "bmm-octavia-2" } // 8v (Reliable DPF)
    ],
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)-2.0 TDI PD RS": [
      { code: "BMN", hp: "170 hp", torque: "350 Nm", profileId: "bmn-octavia-2-rs" } // Piezo PD (Injector issues)
    ],
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)-2.0 TDI CR": [
      { code: "CFHC", hp: "140 hp", torque: "320 Nm", profileId: "cfhc-octavia-2" }, // Common Rail (Reliable)
      { code: "CFHF", hp: "110 hp", torque: "280 Nm", profileId: "cfhf-octavia-2" }
    ],
    "Skoda-Octavia-Gen 2 (1Z) (2004-2013)-2.0 TDI CR RS": [
      { code: "CEGA", hp: "170 hp", torque: "350 Nm", profileId: "cega-octavia-2-rs" }
    ],
  
    "Skoda-Octavia-Gen 3 (5E) (2012-2020)-1.2 TSI": [
      { code: "CJZB", hp: "86 hp", torque: "160 Nm", profileId: "cjzb-octavia-3" },
      { code: "CJZA", hp: "105 hp", torque: "175 Nm", profileId: "cjza-octavia-3" },
      { code: "CYVB", hp: "110 hp", torque: "175 Nm", profileId: "cyvb-octavia-3" }
    ],
    "Skoda-Octavia-Gen 3 (5E) (2012-2020)-1.4 TSI": [
      { code: "CHPA", hp: "140 hp", torque: "250 Nm", profileId: "chpa-octavia-3" }, // ACT
      { code: "CZDA", hp: "150 hp", torque: "250 Nm", profileId: "czda-octavia-3" }, // ACT
      { code: "CPWA", hp: "110 hp", torque: "200 Nm", profileId: "cpwa-octavia-3-gtec" } // G-TEC
    ],
    "Skoda-Octavia-Gen 3 (5E) (2012-2020)-1.8 TSI": [
      { code: "CJSA", hp: "180 hp", torque: "250 Nm", profileId: "cjsa-octavia-3" }, // FWD
      { code: "CJSB", hp: "180 hp", torque: "280 Nm", profileId: "cjsb-octavia-3" } // 4x4
    ],
    "Skoda-Octavia-Gen 3 (5E) (2012-2020)-2.0 TSI RS": [
      { code: "CHHB", hp: "220 hp", torque: "350 Nm", profileId: "chhb-octavia-3-rs" },
      { code: "CHHA", hp: "230 hp", torque: "350 Nm", profileId: "chha-octavia-3-rs230" },
      { code: "DLBA", hp: "245 hp", torque: "370 Nm", profileId: "dlba-octavia-3-rs245" }
    ],
    "Skoda-Octavia-Gen 3 (5E) (2012-2020)-1.6 TDI": [
      { code: "CLHB", hp: "90 hp", torque: "230 Nm", profileId: "clhb-octavia-3" },
      { code: "CLHA", hp: "105 hp", torque: "250 Nm", profileId: "clha-octavia-3" },
      { code: "CXXB", hp: "110 hp", torque: "250 Nm", profileId: "cxxb-octavia-3" },
      { code: "DBKA", hp: "110 hp", torque: "250 Nm", profileId: "dbka-octavia-3" },
      { code: "DDYA", hp: "115 hp", torque: "250 Nm", profileId: "ddya-octavia-3" }
    ],
    "Skoda-Octavia-Gen 3 (5E) (2012-2020)-2.0 TDI": [
      { code: "CKFC", hp: "150 hp", torque: "320 Nm", profileId: "ckfc-octavia-3" }, // EA288
      { code: "CRMB", hp: "150 hp", torque: "320 Nm", profileId: "crmb-octavia-3" }
    ],
    "Skoda-Octavia-Gen 3 (5E) (2012-2020)-2.0 TDI RS": [
      { code: "CUPA", hp: "184 hp", torque: "380 Nm", profileId: "cupa-octavia-3-rs" },
      { code: "CUNA", hp: "184 hp", torque: "380 Nm", profileId: "cuna-octavia-3-rs" },
      { code: "DJGA", hp: "184 hp", torque: "380 Nm", profileId: "djga-octavia-3-rs" }
    ],
  
    "Skoda-Octavia-Gen 4 (NX) (2019-present)-1.5 TSI": [
      { code: "DPCA", hp: "150 hp", torque: "250 Nm", profileId: "dpca-octavia-4" }
    ],
    "Skoda-Octavia-Gen 4 (NX) (2019-present)-2.0 TSI RS": [
      { code: "DNPA", hp: "245 hp", torque: "370 Nm", profileId: "dnpa-octavia-4-rs" } // EA888 Gen 4
    ],
    "Skoda-Octavia-Gen 4 (NX) (2019-present)-2.0 TDI": [
      { code: "DSTB", hp: "150 hp", torque: "360 Nm", profileId: "dstb-octavia-4" },
      { code: "DTUA", hp: "200 hp", torque: "400 Nm", profileId: "dtua-octavia-4-rs-tdi" } // RS
    ],
        "Skoda-Superb-Gen 1 (3U) (2001-2008)-1.8 T": [
          { code: "AWT", hp: "150 hp", torque: "210 Nm", profileId: "awt-superb-1" }
        ],
        "Skoda-Superb-Gen 1 (3U) (2001-2008)-2.0": [
          { code: "AZM", hp: "115 hp", torque: "172 Nm", profileId: "azm-superb-1" }
        ],
        "Skoda-Superb-Gen 1 (3U) (2001-2008)-2.8 V6": [
          { code: "AMX", hp: "193 hp", torque: "280 Nm", profileId: "amx-superb-1" },
          { code: "BBG", hp: "190 hp", torque: "260 Nm", profileId: "bbg-superb-1" }
        ],
        "Skoda-Superb-Gen 1 (3U) (2001-2008)-1.9 TDI PD": [
          { code: "AVB", hp: "100 hp", torque: "250 Nm", profileId: "avb-superb-1" },
          { code: "BSV", hp: "105 hp", torque: "250 Nm", profileId: "bsv-superb-1" },
          { code: "BPZ", hp: "115 hp", torque: "285 Nm", profileId: "bpz-superb-1" },
          { code: "AWX", hp: "130 hp", torque: "285 Nm", profileId: "awx-superb-1" }, // 5-speed
          { code: "AVF", hp: "130 hp", torque: "310 Nm", profileId: "avf-superb-1" }  // 6-speed
        ],
        "Skoda-Superb-Gen 1 (3U) (2001-2008)-2.0 TDI PD": [
          { code: "BSS", hp: "140 hp", torque: "320 Nm", profileId: "bss-superb-1" } // DPF issues
        ],
        "Skoda-Superb-Gen 1 (3U) (2001-2008)-2.5 V6 TDI": [
          { code: "AYM", hp: "155 hp", torque: "310 Nm", profileId: "aym-superb-1" },
          { code: "BDG", hp: "163 hp", torque: "350 Nm", profileId: "bdg-superb-1" } // Better cam durability
        ],
      
        "Skoda-Superb-Gen 2 (3T) (2008-2015)-1.4 TSI": [
          { code: "CAXC", hp: "125 hp", torque: "200 Nm", profileId: "caxc-superb-2" }
        ],
        "Skoda-Superb-Gen 2 (3T) (2008-2015)-1.8 TSI": [
          { code: "BZB", hp: "160 hp", torque: "250 Nm", profileId: "bzb-superb-2" },
          { code: "CDAA", hp: "160 hp", torque: "250 Nm", profileId: "cdaa-superb-2" }
        ],
        "Skoda-Superb-Gen 2 (3T) (2008-2015)-2.0 TSI": [
          { code: "CCZA", hp: "200 hp", torque: "280 Nm", profileId: "ccza-superb-2" }
        ],
        "Skoda-Superb-Gen 2 (3T) (2008-2015)-3.6 V6 FSI": [
          { code: "CDVA", hp: "260 hp", torque: "350 Nm", profileId: "cdva-superb-2-vr6" } // 4x4 Only
        ],
        "Skoda-Superb-Gen 2 (3T) (2008-2015)-1.9 TDI PD": [
          { code: "BLS", hp: "105 hp", torque: "250 Nm", profileId: "bls-superb-2" }, // DPF
          { code: "BXE", hp: "105 hp", torque: "250 Nm", profileId: "bxe-superb-2" }
        ],
        "Skoda-Superb-Gen 2 (3T) (2008-2015)-1.6 TDI": [
          { code: "CAYC", hp: "105 hp", torque: "250 Nm", profileId: "cayc-superb-2" }
        ],
        "Skoda-Superb-Gen 2 (3T) (2008-2015)-2.0 TDI PD": [
          { code: "BMP", hp: "140 hp", torque: "320 Nm", profileId: "bmp-superb-2" } // 8v DPF
        ],
        "Skoda-Superb-Gen 2 (3T) (2008-2015)-2.0 TDI CR": [
          { code: "CBBB", hp: "170 hp", torque: "350 Nm", profileId: "cbbb-superb-2" },
          { code: "CFGB", hp: "170 hp", torque: "350 Nm", profileId: "cfgb-superb-2" },
          { code: "CFFB", hp: "140 hp", torque: "320 Nm", profileId: "cffb-superb-2" }
        ],
      
        "Skoda-Superb-Gen 3 (3V) (2015-2023)-1.4 TSI": [
          { code: "CZCA", hp: "125 hp", torque: "200 Nm", profileId: "czca-superb-3" },
          { code: "CZDA", hp: "150 hp", torque: "250 Nm", profileId: "czda-superb-3" }, // ACT
          { code: "CZEA", hp: "150 hp", torque: "250 Nm", profileId: "czea-superb-3" }
        ],
        "Skoda-Superb-Gen 3 (3V) (2015-2023)-1.5 TSI": [
          { code: "DADA", hp: "150 hp", torque: "250 Nm", profileId: "dada-superb-3" }, // EVO
          { code: "DPCA", hp: "150 hp", torque: "250 Nm", profileId: "dpca-superb-3" }
        ],
        "Skoda-Superb-Gen 3 (3V) (2015-2023)-1.8 TSI": [
          { code: "CJSA", hp: "180 hp", torque: "250 Nm", profileId: "cjsa-superb-3" }, // DSG limit
          { code: "CJSC", hp: "180 hp", torque: "320 Nm", profileId: "cjsc-superb-3" }  // Manual
        ],
        "Skoda-Superb-Gen 3 (3V) (2015-2023)-2.0 TSI": [
          { code: "CHHB", hp: "220 hp", torque: "350 Nm", profileId: "chhb-superb-3" },
          { code: "CJXA", hp: "280 hp", torque: "350 Nm", profileId: "cjxa-superb-3-4x4" }, // Sleeper
          { code: "DNUA", hp: "272 hp", torque: "350 Nm", profileId: "dnua-superb-3-opf" }
        ],
        "Skoda-Superb-Gen 3 (3V) (2015-2023)-1.4 TSI iV": [
          { code: "DGEB", hp: "218 hp", torque: "400 Nm", profileId: "dgeb-superb-3-iv" } // PHEV
        ],
        "Skoda-Superb-Gen 3 (3V) (2015-2023)-1.6 TDI": [
          { code: "DCXA", hp: "120 hp", torque: "250 Nm", profileId: "dcxa-superb-3" }
        ],
        "Skoda-Superb-Gen 3 (3V) (2015-2023)-2.0 TDI": [
          { code: "CRLB", hp: "150 hp", torque: "340 Nm", profileId: "crlb-superb-3" },
          { code: "DDAA", hp: "190 hp", torque: "400 Nm", profileId: "ddaa-superb-3" },
          { code: "DFHA", hp: "190 hp", torque: "400 Nm", profileId: "dfha-superb-3" },
          { code: "DTUA", hp: "200 hp", torque: "400 Nm", profileId: "dtua-superb-3-evo" }
        ],
      
        "Skoda-Superb-Gen 4 (2023-present)-1.5 TSI": [
          { code: "DXDB", hp: "150 hp", torque: "250 Nm", profileId: "dxdb-superb-4" } // Mild-Hybrid
        ],
        "Skoda-Superb-Gen 4 (2023-present)-2.0 TSI": [
          { code: "DNPA", hp: "265 hp", torque: "400 Nm", profileId: "dnpa-superb-4-4x4" }
        ],
        "Skoda-Superb-Gen 4 (2023-present)-1.5 TSI iV": [
          { code: "DGEA", hp: "204 hp", torque: "350 Nm", profileId: "dgea-superb-4-iv" } // New PHEV 1.5
        ],
        "Skoda-Superb-Gen 4 (2023-present)-2.0 TDI": [
          { code: "DXPA", hp: "150 hp", torque: "360 Nm", profileId: "dxpa-superb-4" },
          { code: "DMZA", hp: "193 hp", torque: "400 Nm", profileId: "dmza-superb-4-4x4" }
        ],
      
        // ===========================================================================
        // RAPID & SCALA
        // ===========================================================================
        "Skoda-Rapid-Liftback (NH3) (2012-2019)-1.2 MPI": [
          { code: "CGPC", hp: "75 hp", torque: "112 Nm", profileId: "cgpc-rapid" }
        ],
        "Skoda-Rapid-Liftback (NH3) (2012-2019)-1.2 TSI": [
          { code: "CBZA", hp: "86 hp", torque: "160 Nm", profileId: "cbza-rapid" },
          { code: "CBZB", hp: "105 hp", torque: "175 Nm", profileId: "cbzb-rapid" },
          { code: "CJZC", hp: "90 hp", torque: "160 Nm", profileId: "cjzc-rapid" }, // Belt
          { code: "CJZD", hp: "110 hp", torque: "175 Nm", profileId: "cjzd-rapid" }  // Belt
        ],
        "Skoda-Rapid-Liftback (NH3) (2012-2019)-1.4 TSI": [
          { code: "CAXA", hp: "122 hp", torque: "200 Nm", profileId: "caxa-rapid" },
          { code: "CZCA", hp: "125 hp", torque: "200 Nm", profileId: "czca-rapid" }
        ],
        "Skoda-Rapid-Liftback (NH3) (2012-2019)-1.0 TSI": [
          { code: "CHZB", hp: "95 hp", torque: "160 Nm", profileId: "chzb-rapid" },
          { code: "CHZC", hp: "110 hp", torque: "200 Nm", profileId: "chzc-rapid" }
        ],
        "Skoda-Rapid-Liftback (NH3) (2012-2019)-1.6 TDI": [
          { code: "CAYB", hp: "90 hp", torque: "230 Nm", profileId: "cayb-rapid" },
          { code: "CAYC", hp: "105 hp", torque: "250 Nm", profileId: "cayc-rapid" },
          { code: "CXMA", hp: "115 hp", torque: "250 Nm", profileId: "cxma-rapid" }
        ],
        "Skoda-Rapid-Liftback (NH3) (2012-2019)-1.4 TDI": [
          { code: "CUSB", hp: "90 hp", torque: "230 Nm", profileId: "cusb-rapid" }
        ],
      
        // Rapid Spaceback (Same engines mostly)
        "Skoda-Rapid-Spaceback (NH1) (2013-2019)-1.2 TSI": [
          { code: "CBZA", hp: "86 hp", torque: "160 Nm", profileId: "cbza-rapid-sb" },
          { code: "CJZC", hp: "90 hp", torque: "160 Nm", profileId: "cjzc-rapid-sb" }
        ],
        "Skoda-Rapid-Spaceback (NH1) (2013-2019)-1.0 TSI": [
          { code: "CHZB", hp: "95 hp", torque: "160 Nm", profileId: "chzb-rapid-sb" }
        ],
        "Skoda-Rapid-Spaceback (NH1) (2013-2019)-1.4 TSI": [
          { code: "CAXA", hp: "122 hp", torque: "200 Nm", profileId: "caxa-rapid-sb" }
        ],
        "Skoda-Rapid-Spaceback (NH1) (2013-2019)-1.6 TDI": [
          { code: "CAYC", hp: "105 hp", torque: "250 Nm", profileId: "cayc-rapid-sb" }
        ],
        "Skoda-Rapid-Spaceback (NH1) (2013-2019)-1.4 TDI": [
          { code: "CUSB", hp: "90 hp", torque: "230 Nm", profileId: "cusb-rapid-sb" }
        ],
      
        "Skoda-Scala-Hatchback (2019-present)-1.0 TSI": [
          { code: "DKLA", hp: "95 hp", torque: "175 Nm", profileId: "dkla-scala" },
          { code: "DKRF", hp: "115 hp", torque: "200 Nm", profileId: "dkrf-scala" },
          { code: "DLAA", hp: "110 hp", torque: "200 Nm", profileId: "dlaa-scala-evo" }
        ],
        "Skoda-Scala-Hatchback (2019-present)-1.5 TSI": [
          { code: "DADA", hp: "150 hp", torque: "250 Nm", profileId: "dada-scala" },
          { code: "DPCA", hp: "150 hp", torque: "250 Nm", profileId: "dpca-scala" }
        ],
        "Skoda-Scala-Hatchback (2019-present)-1.6 TDI": [
          { code: "DGTD", hp: "115 hp", torque: "250 Nm", profileId: "dgtd-scala" }
        ],
      
        "Skoda-Citigo-Hatchback (2011-2020)-1.0 MPI": [
          { code: "CHYA", hp: "60 hp", torque: "95 Nm", profileId: "chya-citigo" },
          { code: "CHYB", hp: "75 hp", torque: "95 Nm", profileId: "chyb-citigo" }
        ],
        "Skoda-Citigo-Hatchback (2011-2020)-1.0 CNG": [
          { code: "CPGA", hp: "68 hp", torque: "90 Nm", profileId: "cpga-citigo-cng" }
        ],
      
        // ===========================================================================
        // MPV & CROSSOVER/SUV (Yeti, Roomster, Kamiq, Karoq, Kodiaq)
        // ===========================================================================
        "Skoda-Roomster-MPV (2006-2015)-1.2 HTP": [
          { code: "BME", hp: "64 hp", torque: "112 Nm", profileId: "bme-roomster" },
          { code: "CGPA", hp: "70 hp", torque: "112 Nm", profileId: "cgpa-roomster" }
        ],
        "Skoda-Roomster-MPV (2006-2015)-1.2 TSI": [
          { code: "CBZA", hp: "86 hp", torque: "160 Nm", profileId: "cbza-roomster" },
          { code: "CBZB", hp: "105 hp", torque: "175 Nm", profileId: "cbzb-roomster" }
        ],
        "Skoda-Roomster-MPV (2006-2015)-1.4 16v": [
          { code: "BXW", hp: "86 hp", torque: "132 Nm", profileId: "bxw-roomster" },
          { code: "CGGB", hp: "86 hp", torque: "132 Nm", profileId: "cggb-roomster" }
        ],
        "Skoda-Roomster-MPV (2006-2015)-1.6 16v": [
          { code: "BTS", hp: "105 hp", torque: "153 Nm", profileId: "bts-roomster" }
        ],
        "Skoda-Roomster-MPV (2006-2015)-1.2 TDI": [
          { code: "CFWA", hp: "75 hp", torque: "180 Nm", profileId: "cfwa-roomster" }
        ],
        "Skoda-Roomster-MPV (2006-2015)-1.4 TDI": [
          { code: "BNM", hp: "70 hp", torque: "155 Nm", profileId: "bnm-roomster" },
          { code: "BMS", hp: "80 hp", torque: "195 Nm", profileId: "bms-roomster" }
        ],
        "Skoda-Roomster-MPV (2006-2015)-1.6 TDI": [
          { code: "CAYB", hp: "90 hp", torque: "230 Nm", profileId: "cayb-roomster" },
          { code: "CAYC", hp: "105 hp", torque: "250 Nm", profileId: "cayc-roomster" }
        ],
        "Skoda-Roomster-MPV (2006-2015)-1.9 TDI PD": [
          { code: "BSW", hp: "105 hp", torque: "240 Nm", profileId: "bsw-roomster" } // No DPF usually
        ],
      
        "Skoda-Yeti-SUV (2009-2017)-1.2 TSI": [
          { code: "CBZB", hp: "105 hp", torque: "175 Nm", profileId: "cbzb-yeti" },
          { code: "CYVB", hp: "110 hp", torque: "175 Nm", profileId: "cyvb-yeti" } // Belt
        ],
        "Skoda-Yeti-SUV (2009-2017)-1.4 TSI": [
          { code: "CAXA", hp: "122 hp", torque: "200 Nm", profileId: "caxa-yeti" },
          { code: "CZDA", hp: "150 hp", torque: "250 Nm", profileId: "czda-yeti" }
        ],
        "Skoda-Yeti-SUV (2009-2017)-1.8 TSI": [
          { code: "CDAA", hp: "160 hp", torque: "250 Nm", profileId: "cdaa-yeti" },
          { code: "CDAB", hp: "152 hp", torque: "250 Nm", profileId: "cdab-yeti" }
        ],
        "Skoda-Yeti-SUV (2009-2017)-1.6 TDI": [
          { code: "CAYC", hp: "105 hp", torque: "250 Nm", profileId: "cayc-yeti" }
        ],
        "Skoda-Yeti-SUV (2009-2017)-2.0 TDI": [
          { code: "CFHA", hp: "110 hp", torque: "250 Nm", profileId: "cfha-yeti" },
          { code: "CFHC", hp: "140 hp", torque: "320 Nm", profileId: "cfhc-yeti" },
          { code: "CFJA", hp: "170 hp", torque: "350 Nm", profileId: "cfja-yeti" },
          { code: "CEGA", hp: "170 hp", torque: "350 Nm", profileId: "cega-yeti" },
          { code: "CUUB", hp: "150 hp", torque: "340 Nm", profileId: "cuub-yeti-euro6" }
        ],
      
        "Skoda-Kamiq-SUV (2019-present)-1.0 TSI": [
          { code: "DKLA", hp: "95 hp", torque: "175 Nm", profileId: "dkla-kamiq" },
          { code: "DKRF", hp: "115 hp", torque: "200 Nm", profileId: "dkrf-kamiq" },
          { code: "DLAA", hp: "110 hp", torque: "200 Nm", profileId: "dlaa-kamiq" }
        ],
        "Skoda-Kamiq-SUV (2019-present)-1.5 TSI": [
          { code: "DADA", hp: "150 hp", torque: "250 Nm", profileId: "dada-kamiq" },
          { code: "DPCA", hp: "150 hp", torque: "250 Nm", profileId: "dpca-kamiq" }
        ],
        "Skoda-Kamiq-SUV (2019-present)-1.6 TDI": [
          { code: "DGTD", hp: "115 hp", torque: "250 Nm", profileId: "dgtd-kamiq" }
        ],
      
        "Skoda-Karoq-SUV (2017-present)-1.0 TSI": [
          { code: "CHZJ", hp: "115 hp", torque: "200 Nm", profileId: "chzj-karoq" },
          { code: "DLAA", hp: "110 hp", torque: "200 Nm", profileId: "dlaa-karoq" }
        ],
        "Skoda-Karoq-SUV (2017-present)-1.5 TSI": [
          { code: "DADA", hp: "150 hp", torque: "250 Nm", profileId: "dada-karoq" },
          { code: "DPCA", hp: "150 hp", torque: "250 Nm", profileId: "dpca-karoq" }
        ],
        "Skoda-Karoq-SUV (2017-present)-2.0 TSI": [
          { code: "DKZA", hp: "190 hp", torque: "320 Nm", profileId: "dkza-karoq-4x4" }
        ],
        "Skoda-Karoq-SUV (2017-present)-1.6 TDI": [
          { code: "DDYA", hp: "115 hp", torque: "250 Nm", profileId: "ddya-karoq" }
        ],
        "Skoda-Karoq-SUV (2017-present)-2.0 TDI": [
          { code: "DFFA", hp: "150 hp", torque: "340 Nm", profileId: "dffa-karoq" },
          { code: "DFHA", hp: "190 hp", torque: "400 Nm", profileId: "dfha-karoq" }
        ],
      
        "Skoda-Kodiaq-Gen 1 (NS7) (2016-2023)-1.4 TSI": [
          { code: "CZCA", hp: "125 hp", torque: "200 Nm", profileId: "czca-kodiaq" },
          { code: "CZDA", hp: "150 hp", torque: "250 Nm", profileId: "czda-kodiaq" }
        ],
        "Skoda-Kodiaq-Gen 1 (NS7) (2016-2023)-1.5 TSI": [
          { code: "DADA", hp: "150 hp", torque: "250 Nm", profileId: "dada-kodiaq" },
          { code: "DPCA", hp: "150 hp", torque: "250 Nm", profileId: "dpca-kodiaq" }
        ],
        "Skoda-Kodiaq-Gen 1 (NS7) (2016-2023)-2.0 TSI": [
          { code: "CZPA", hp: "180 hp", torque: "320 Nm", profileId: "czpa-kodiaq" },
          { code: "DKZA", hp: "190 hp", torque: "320 Nm", profileId: "dkza-kodiaq" }
        ],
        "Skoda-Kodiaq-Gen 1 (NS7) (2016-2023)-2.0 TSI RS": [
          { code: "DNPA", hp: "245 hp", torque: "370 Nm", profileId: "dnpa-kodiaq-rs" } // Petrol facelift
        ],
        "Skoda-Kodiaq-Gen 1 (NS7) (2016-2023)-2.0 TDI": [
          { code: "DBGA", hp: "150 hp", torque: "340 Nm", profileId: "dbga-kodiaq" },
          { code: "DFGA", hp: "150 hp", torque: "340 Nm", profileId: "dfga-kodiaq" },
          { code: "DFHA", hp: "190 hp", torque: "400 Nm", profileId: "dfha-kodiaq" },
          { code: "DTUA", hp: "200 hp", torque: "400 Nm", profileId: "dtua-kodiaq-evo" }
        ],
        "Skoda-Kodiaq-Gen 1 (NS7) (2016-2023)-2.0 BiTDI RS": [
          { code: "CUAA", hp: "240 hp", torque: "500 Nm", profileId: "cuaa-kodiaq-rs-biturbo" } // The Beast
        ],
      
        "Skoda-Kodiaq-Gen 2 (2023-present)-1.5 TSI": [
          { code: "DXDB", hp: "150 hp", torque: "250 Nm", profileId: "dxdb-kodiaq-2" } // mHEV
        ],
        "Skoda-Kodiaq-Gen 2 (2023-present)-2.0 TSI": [
          { code: "DNPA", hp: "204 hp", torque: "320 Nm", profileId: "dnpa-kodiaq-2" }
        ],
        "Skoda-Kodiaq-Gen 2 (2023-present)-1.5 TSI iV": [
          { code: "DGEA", hp: "204 hp", torque: "350 Nm", profileId: "dgea-kodiaq-2-iv" }
        ],
        "Skoda-Kodiaq-Gen 2 (2023-present)-2.0 TDI": [
          { code: "DXPA", hp: "150 hp", torque: "360 Nm", profileId: "dxpa-kodiaq-2" },
          { code: "DMZA", hp: "193 hp", torque: "400 Nm", profileId: "dmza-kodiaq-2-4x4" }
        ]
  };