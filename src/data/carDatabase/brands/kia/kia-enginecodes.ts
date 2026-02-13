export const kiaEngineCodes = {
    // ===========================================================================
    // COMPACT & CITY CARS (Picanto, Rio, Ceed, Cerato)
    // ===========================================================================
    "Kia-Picanto-Gen 1 (SA) (2004-2011)-1.0 (Epsilon)": [
      { code: "G4HE", hp: "61 hp", torque: "86 Nm", profileId: "g4he-picanto-sa" }
    ],
    "Kia-Picanto-Gen 1 (SA) (2004-2011)-1.1 (Epsilon)": [
      { code: "G4HG", hp: "65 hp", torque: "97 Nm", profileId: "g4hg-picanto-sa" }
    ],
    "Kia-Picanto-Gen 1 (SA) (2004-2011)-1.1 CRDi": [
      { code: "D3FA", hp: "75 hp", torque: "153 Nm", profileId: "d3fa-picanto-sa" } // 3-cyl U-Line
    ],
  
    "Kia-Picanto-Gen 2 (TA) (2011-2017)-1.0 MPI": [
      { code: "G3LA", hp: "69 hp", torque: "95 Nm", profileId: "g3la-picanto-ta" }, // Kappa II 3-cyl
      { code: "B3LA", hp: "67 hp", torque: "90 Nm", profileId: "b3la-picanto-ta-lpg" } // LPi
    ],
    "Kia-Picanto-Gen 2 (TA) (2011-2017)-1.25 MPI": [
      { code: "G4LA", hp: "85 hp", torque: "121 Nm", profileId: "g4la-picanto-ta" } // Kappa II 4-cyl
    ],
  
    "Kia-Picanto-Gen 3 (JA) (2017-present)-1.0 MPI": [
      { code: "G3LA", hp: "67 hp", torque: "96 Nm", profileId: "g3la-picanto-ja" }
    ],
    "Kia-Picanto-Gen 3 (JA) (2017-present)-1.25 MPI": [
      { code: "G4LA", hp: "84 hp", torque: "122 Nm", profileId: "g4la-picanto-ja" }
    ],
    "Kia-Picanto-Gen 3 (JA) (2017-present)-1.0 T-GDI": [
      { code: "G3LC", hp: "100 hp", torque: "172 Nm", profileId: "g3lc-picanto-ja" } // Kappa II Turbo
    ],
  
    "Kia-Rio-Gen 2 (JB) (2005-2011)-1.4 16v": [
      { code: "G4EE", hp: "97 hp", torque: "125 Nm", profileId: "g4ee-rio-jb" } // Alpha II
    ],
    "Kia-Rio-Gen 2 (JB) (2005-2011)-1.6 CVVT": [
      { code: "G4ED", hp: "112 hp", torque: "146 Nm", profileId: "g4ed-rio-jb" } // Alpha II
    ],
    "Kia-Rio-Gen 2 (JB) (2005-2011)-1.5 CRDi": [
      { code: "D4FA", hp: "110 hp", torque: "235 Nm", profileId: "d4fa-rio-jb" } // U-Line VGT
    ],
  
    "Kia-Rio-Gen 3 (UB) (2011-2017)-1.25 CVVT": [
      { code: "G4LA", hp: "85 hp", torque: "121 Nm", profileId: "g4la-rio-ub" } // Kappa
    ],
    "Kia-Rio-Gen 3 (UB) (2011-2017)-1.4 CVVT": [
      { code: "G4FA", hp: "109 hp", torque: "137 Nm", profileId: "g4fa-rio-ub" } // Gamma
    ],
    "Kia-Rio-Gen 3 (UB) (2011-2017)-1.1 CRDi": [
      { code: "D3FA", hp: "75 hp", torque: "170 Nm", profileId: "d3fa-rio-ub" } // 3-cyl EcoDynamics
    ],
    "Kia-Rio-Gen 3 (UB) (2011-2017)-1.4 CRDi": [
      { code: "D4FC", hp: "90 hp", torque: "220 Nm", profileId: "d4fc-rio-ub" }
    ],
  
    "Kia-Rio-Gen 4 (YB) (2017-2023)-1.25 MPI": [
      { code: "G4LA", hp: "84 hp", torque: "122 Nm", profileId: "g4la-rio-yb" }
    ],
    "Kia-Rio-Gen 4 (YB) (2017-2023)-1.4 MPI": [
      { code: "G4LC", hp: "100 hp", torque: "133 Nm", profileId: "g4lc-rio-yb" } // Kappa
    ],
    "Kia-Rio-Gen 4 (YB) (2017-2023)-1.0 T-GDI": [
      { code: "G3LC", hp: "100 hp", torque: "172 Nm", profileId: "g3lc-100-rio-yb" },
      { code: "G3LC", hp: "120 hp", torque: "172 Nm", profileId: "g3lc-120-rio-yb" }
    ],
    "Kia-Rio-Gen 4 (YB) (2017-2023)-1.4 CRDi": [
      { code: "D4FC", hp: "77 hp", torque: "240 Nm", profileId: "d4fc-77-rio-yb" },
      { code: "D4FC", hp: "90 hp", torque: "240 Nm", profileId: "d4fc-90-rio-yb" }
    ],
  
    "Kia-Ceed-Gen 1 (ED) (2006-2012)-1.4 CVVT": [
      { code: "G4FA", hp: "105 hp", torque: "137 Nm", profileId: "g4fa-105-ceed-ed" }, // "Low power"
      { code: "G4FA", hp: "109 hp", torque: "137 Nm", profileId: "g4fa-109-ceed-ed" }
    ],
    "Kia-Ceed-Gen 1 (ED) (2006-2012)-1.6 CVVT": [
      { code: "G4FC", hp: "122 hp", torque: "154 Nm", profileId: "g4fc-122-ceed-ed" }, // Early models
      { code: "G4FC", hp: "126 hp", torque: "154 Nm", profileId: "g4fc-126-ceed-ed" }  // Facelift / EcoDynamics
    ],
    "Kia-Ceed-Gen 1 (ED) (2006-2012)-2.0 CVVT": [
      { code: "G4GC", hp: "143 hp", torque: "186 Nm", profileId: "g4gc-ceed-ed" } // Beta II
    ],
    "Kia-Ceed-Gen 1 (ED) (2006-2012)-1.6 CRDi": [
      { code: "D4FB", hp: "90 hp", torque: "235 Nm", profileId: "d4fb-90-ceed-ed" },
      { code: "D4FB", hp: "115 hp", torque: "255 Nm", profileId: "d4fb-115-ceed-ed" } // The most common
    ],
    "Kia-Ceed-Gen 1 (ED) (2006-2012)-2.0 CRDi": [
      { code: "D4EA-F", hp: "140 hp", torque: "305 Nm", profileId: "d4ea-f-ceed-ed" } // D-Line
    ],
  
    "Kia-Ceed-Gen 2 (JD) (2012-2018)-1.4 MPI": [
      { code: "G4FA", hp: "100 hp", torque: "137 Nm", profileId: "g4fa-ceed-jd" }, // Gamma
      { code: "G4LC", hp: "100 hp", torque: "134 Nm", profileId: "g4lc-ceed-jd-fl" } // Kappa (late models)
    ],
    "Kia-Ceed-Gen 2 (JD) (2012-2018)-1.6 GDI": [
      { code: "G4FD", hp: "135 hp", torque: "164 Nm", profileId: "g4fd-ceed-jd" } // Gamma GDI
    ],
    "Kia-Ceed-Gen 2 (JD) (2012-2018)-1.0 T-GDI": [
      { code: "G3LC", hp: "100 hp", torque: "172 Nm", profileId: "g3lc-100-ceed-jd" },
      { code: "G3LC", hp: "120 hp", torque: "172 Nm", profileId: "g3lc-120-ceed-jd" }
    ],
    "Kia-Ceed-Gen 2 (JD) (2012-2018)-1.6 T-GDI GT": [
      { code: "G4FJ", hp: "204 hp", torque: "265 Nm", profileId: "g4fj-ceed-jd-gt" }
    ],
    "Kia-Ceed-Gen 2 (JD) (2012-2018)-1.4 CRDi": [
      { code: "D4FC", hp: "90 hp", torque: "220 Nm", profileId: "d4fc-ceed-jd" }
    ],
    "Kia-Ceed-Gen 2 (JD) (2012-2018)-1.6 CRDi": [
      { code: "D4FB", hp: "110 hp", torque: "260 Nm", profileId: "d4fb-110-ceed-jd" },
      { code: "D4FB", hp: "128 hp", torque: "260 Nm", profileId: "d4fb-128-ceed-jd" },
      { code: "D4FB", hp: "136 hp", torque: "280 Nm", profileId: "d4fb-136-ceed-jd" } // DCT7
    ],
  
    "Kia-Ceed-Gen 3 (CD) (2018-present)-1.4 MPI": [
      { code: "G4LC", hp: "100 hp", torque: "134 Nm", profileId: "g4lc-ceed-cd" } // Kappa
    ],
    "Kia-Ceed-Gen 3 (CD) (2018-present)-1.0 T-GDI": [
      { code: "G3LC", hp: "100 hp", torque: "172 Nm", profileId: "g3lc-100-ceed-cd" },
      { code: "G3LC", hp: "120 hp", torque: "172 Nm", profileId: "g3lc-120-ceed-cd" }
    ],
    "Kia-Ceed-Gen 3 (CD) (2018-present)-1.4 T-GDI": [
      { code: "G4LD", hp: "140 hp", torque: "242 Nm", profileId: "g4ld-ceed-cd" } // Kappa II
    ],
    "Kia-Ceed-Gen 3 (CD) (2018-present)-1.5 T-GDI": [
      { code: "G4LH", hp: "160 hp", torque: "253 Nm", profileId: "g4lh-ceed-cd" } // Smartstream
    ],
    "Kia-Ceed-Gen 3 (CD) (2018-present)-1.6 T-GDI GT": [
      { code: "G4FJ", hp: "204 hp", torque: "265 Nm", profileId: "g4fj-ceed-cd-gt" }
    ],
    "Kia-Ceed-Gen 3 (CD) (2018-present)-1.6 CRDi": [
      { code: "D4FE", hp: "115 hp", torque: "280 Nm", profileId: "d4fe-115-ceed-cd" }, // Smartstream U3
      { code: "D4FE", hp: "136 hp", torque: "320 Nm", profileId: "d4fe-136-ceed-cd" }
    ],
    "Kia-Ceed-Gen 3 (CD) (2018-present)-1.6 GDI PHEV": [
      { code: "G4LE", hp: "141 hp", torque: "265 Nm", profileId: "g4le-ceed-cd-phev" }
    ],
  
    // ProCeed shares most engines with Ceed, but specific tuning/combinations exist
    "Kia-ProCeed-Gen 1 (ED) (2007-2012)-1.4 CVVT": [
       { code: "G4FA", hp: "109 hp", torque: "137 Nm", profileId: "g4fa-proceed-ed" }
    ],
    "Kia-ProCeed-Gen 1 (ED) (2007-2012)-1.6 CVVT": [
       { code: "G4FC", hp: "126 hp", torque: "154 Nm", profileId: "g4fc-proceed-ed" }
    ],
    "Kia-ProCeed-Gen 1 (ED) (2007-2012)-2.0 CVVT": [
       { code: "G4GC", hp: "143 hp", torque: "186 Nm", profileId: "g4gc-proceed-ed" }
    ],
    "Kia-ProCeed-Gen 1 (ED) (2007-2012)-1.6 CRDi": [
       { code: "D4FB", hp: "115 hp", torque: "255 Nm", profileId: "d4fb-115-proceed-ed" }
    ],
    "Kia-ProCeed-Gen 1 (ED) (2007-2012)-2.0 CRDi": [
       { code: "D4EA", hp: "140 hp", torque: "305 Nm", profileId: "d4ea-proceed-ed" }
    ],
  
    "Kia-ProCeed-Gen 2 (JD) (2013-2018)-1.6 T-GDI GT": [
       { code: "G4FJ", hp: "204 hp", torque: "265 Nm", profileId: "g4fj-proceed-jd-gt" }
    ],
  
    "Kia-ProCeed-Gen 3 (CD) (2019-present)-1.4 T-GDI": [
       { code: "G4LD", hp: "140 hp", torque: "242 Nm", profileId: "g4ld-proceed-cd" }
    ],
    "Kia-ProCeed-Gen 3 (CD) (2019-present)-1.5 T-GDI": [
       { code: "G4LH", hp: "160 hp", torque: "253 Nm", profileId: "g4lh-proceed-cd" }
    ],
    "Kia-ProCeed-Gen 3 (CD) (2019-present)-1.6 T-GDI GT": [
       { code: "G4FJ", hp: "204 hp", torque: "265 Nm", profileId: "g4fj-proceed-cd-gt" }
    ],
  
    "Kia-Cerato-LD (2003-2008)-1.6": [
      { code: "G4ED", hp: "105 hp", torque: "143 Nm", profileId: "g4ed-cerato" } // Alpha II
    ],
    "Kia-Cerato-LD (2003-2008)-2.0": [
      { code: "G4GC", hp: "143 hp", torque: "186 Nm", profileId: "g4gc-cerato" } // Beta II
    ],
    "Kia-Cerato-LD (2003-2008)-1.5 CRDi": [
      { code: "D4FA", hp: "102 hp", torque: "235 Nm", profileId: "d4fa-cerato" } // U-Line VGT
    ],
    "Kia-Cerato-LD (2003-2008)-1.6 CRDi": [
      { code: "D4FB", hp: "115 hp", torque: "255 Nm", profileId: "d4fb-cerato" }
    ],
    "Kia-Cerato-LD (2003-2008)-2.0 CRDi": [
      { code: "D4EA", hp: "112 hp", torque: "245 Nm", profileId: "d4ea-cerato" }
    ],
  
    "Kia-Sephia-Gen 2 (FB) (1997-2003)-1.5": [
      { code: "B5-DE", hp: "88 hp", torque: "135 Nm", profileId: "b5-de-sephia" } // Mazda B5
    ],
    "Kia-Sephia-Gen 2 (FB) (1997-2003)-1.6": [
      { code: "B6", hp: "101 hp", torque: "140 Nm", profileId: "b6-sephia" }
    ],
    "Kia-Sephia-Gen 2 (FB) (1997-2003)-1.8": [
      { code: "T8D", hp: "110 hp", torque: "152 Nm", profileId: "t8d-sephia" } // Kia T-series
    ],
  
    "Kia-Shuma-FB (1997-2004)-1.5 16v": [
      { code: "BFD", hp: "88 hp", torque: "132 Nm", profileId: "bfd-shuma" } // Mazda B5-DE derivative
    ],
    "Kia-Shuma-FB (1997-2004)-1.8 16v": [
      { code: "T8D", hp: "110 hp", torque: "152 Nm", profileId: "t8d-shuma" }
    ],
  
    "Kia-Pride-Y (1987-2000)-1.1": [
      { code: "B1", hp: "52 hp", torque: "80 Nm", profileId: "b1-pride" } // Mazda B1
    ],
    "Kia-Pride-Y (1987-2000)-1.3": [
      { code: "B3", hp: "64 hp", torque: "100 Nm", profileId: "b3-pride-64" }, // Mazda B3
      { code: "B3 (Inj)", hp: "72 hp", torque: "105 Nm", profileId: "b3-pride-72" }
    ],
    "Kia-Picanto-Gen 2 (TA) (2011-2017)-1.0 LPG": [
    { code: "B3LA", hp: "67 hp", torque: "90 Nm", profileId: "b3la-picanto-ta-lpg" } // LPi
  ],
        "Kia-Optima-Gen 3 (TF) (2010-2015)-2.0 CVVL": [
          { code: "G4ND", hp: "165 hp", torque: "196 Nm", profileId: "g4nd-optima-tf" } // Nu
        ],
        "Kia-Pregio-TB (1995-2006)-2.7 Diesel": [
    { code: "J2", hp: "80 hp", torque: "172 Nm", profileId: "j2-pregio" }
  ],
  "Kia-Pregio-TB (1995-2006)-2.5 TCi": [
    { code: "D4BH", hp: "94 hp", torque: "227 Nm", profileId: "d4bh-pregio" } // Intercooler
  ],
        "Kia-Optima-Gen 3 (TF) (2010-2015)-2.4 GDI": [
          { code: "G4KJ", hp: "200 hp", torque: "250 Nm", profileId: "g4kj-optima-tf" } // Theta II
        ],
        "Kia-Optima-Gen 3 (TF) (2010-2015)-2.0 Hybrid": [
          { code: "G4NE", hp: "150 hp", torque: "180 Nm", profileId: "g4ne-optima-tf-hybrid" } // Nu Atkinson
        ],
        "Kia-Optima-Gen 3 (TF) (2010-2015)-1.7 CRDi": [
          { code: "D4FD", hp: "136 hp", torque: "325 Nm", profileId: "d4fd-optima-tf" } // U2
        ],
      
        "Kia-Optima-Gen 4 (JF) (2015-2020)-2.0 CVVL": [
          { code: "G4ND", hp: "163 hp", torque: "196 Nm", profileId: "g4nd-optima-jf" }
        ],
        "Kia-Optima-Gen 4 (JF) (2015-2020)-2.0 T-GDI GT": [
          { code: "G4KH", hp: "245 hp", torque: "353 Nm", profileId: "g4kh-optima-gt" } // Theta II Turbo
        ],
        "Kia-Optima-Gen 4 (JF) (2015-2020)-2.0 GDI PHEV": [
          { code: "G4NG", hp: "205 hp", torque: "375 Nm", profileId: "g4ng-optima-phev" } // Nu GDI
        ],
        "Kia-Optima-Gen 4 (JF) (2015-2020)-1.7 CRDi": [
          { code: "D4FD", hp: "141 hp", torque: "340 Nm", profileId: "d4fd-141-optima-jf" } // DCT7
        ],
        "Kia-Optima-Gen 4 (JF) (2015-2020)-1.6 CRDi": [
          { code: "D4FE", hp: "136 hp", torque: "320 Nm", profileId: "d4fe-optima-jf" } // Smartstream U3 (Facelift)
        ],
      
        "Kia-Magentis-Gen 2 (MG) (2005-2010)-2.0": [
          { code: "G4KA", hp: "144 hp", torque: "189 Nm", profileId: "g4ka-magentis" } // Theta
        ],
        "Kia-Magentis-Gen 2 (MG) (2005-2010)-2.7 V6": [
          { code: "G6EA", hp: "188 hp", torque: "247 Nm", profileId: "g6ea-magentis" } // Mu
        ],
        "Kia-Magentis-Gen 2 (MG) (2005-2010)-2.0 CRDi": [
          { code: "D4EA", hp: "140 hp", torque: "305 Nm", profileId: "d4ea-magentis" } // D-Line
        ],
      
        "Kia-Stinger-CK (2017-2023)-2.0 T-GDI": [
          { code: "G4KL", hp: "255 hp", torque: "353 Nm", profileId: "g4kl-stinger" } // Theta II
        ],
        "Kia-Stinger-CK (2017-2023)-3.3 T-GDI V6": [
          { code: "G6DP", hp: "366 hp", torque: "510 Nm", profileId: "g6dp-stinger" } // Lambda II
        ],
        "Kia-Stinger-CK (2017-2023)-2.2 CRDi": [
          { code: "D4HB", hp: "200 hp", torque: "440 Nm", profileId: "d4hb-stinger" } // R-Series
        ],
      
        "Kia-Opirus-GH (2003-2010)-3.5 V6": [
          { code: "G6CU", hp: "203 hp", torque: "298 Nm", profileId: "g6cu-opirus" } // Sigma
        ],
        "Kia-Opirus-GH (2003-2010)-3.8 V6": [
          { code: "G6DA", hp: "266 hp", torque: "353 Nm", profileId: "g6da-opirus" } // Lambda
        ],
      
        "Kia-Clarus-FE (1996-2001)-1.8": [
          { code: "T8D", hp: "116 hp", torque: "152 Nm", profileId: "t8d-clarus" }
        ],
        "Kia-Clarus-FE (1996-2001)-2.0": [
          { code: "FE-DOHC", hp: "133 hp", torque: "171 Nm", profileId: "fe-dohc-clarus" } // Mazda FE
        ],
      
        // ===========================================================================
        // SUV & CROSSOVER
        // ===========================================================================
        "Kia-Sportage-Gen 2 (JE/KM) (2004-2010)-2.0 CVVT": [
          { code: "G4GC", hp: "141 hp", torque: "184 Nm", profileId: "g4gc-sportage-km" } // Beta II
        ],
        "Kia-Sportage-Gen 2 (JE/KM) (2004-2010)-2.7 V6": [
          { code: "G6BA", hp: "175 hp", torque: "241 Nm", profileId: "g6ba-sportage-km" }
        ],
        "Kia-Sportage-Gen 2 (JE/KM) (2004-2010)-2.0 CRDi": [
          { code: "D4EA", hp: "113 hp", torque: "245 Nm", profileId: "d4ea-113-sportage-km" },
          { code: "D4EA-V", hp: "140 hp", torque: "305 Nm", profileId: "d4ea-140-sportage-km" }, // VGT
          { code: "D4EA-F", hp: "150 hp", torque: "305 Nm", profileId: "d4ea-150-sportage-km" }  // Facelift
        ],
      
        "Kia-Sportage-Gen 3 (SL) (2010-2015)-1.6 GDI": [
          { code: "G4FD", hp: "135 hp", torque: "164 Nm", profileId: "g4fd-sportage-sl" }
        ],
        "Kia-Sportage-Gen 3 (SL) (2010-2015)-2.0 CVVT": [
          { code: "G4KD", hp: "163 hp", torque: "194 Nm", profileId: "g4kd-sportage-sl" } // Theta II MPI
        ],
        "Kia-Sportage-Gen 3 (SL) (2010-2015)-1.7 CRDi": [
          { code: "D4FD", hp: "115 hp", torque: "260 Nm", profileId: "d4fd-sportage-sl" }
        ],
        "Kia-Sportage-Gen 3 (SL) (2010-2015)-2.0 CRDi": [
          { code: "D4HA", hp: "136 hp", torque: "320 Nm", profileId: "d4ha-136-sportage-sl" }, // R-Series
          { code: "D4HA", hp: "184 hp", torque: "392 Nm", profileId: "d4ha-184-sportage-sl" }
        ],
      
        "Kia-Sportage-Gen 4 (QL) (2015-2021)-1.6 GDI": [
          { code: "G4FD", hp: "132 hp", torque: "161 Nm", profileId: "g4fd-sportage-ql" }
        ],
        "Kia-Sportage-Gen 4 (QL) (2015-2021)-1.6 T-GDI": [
          { code: "G4FJ", hp: "177 hp", torque: "265 Nm", profileId: "g4fj-sportage-ql" }
        ],
        "Kia-Sportage-Gen 4 (QL) (2015-2021)-2.0 MPI": [
          { code: "G4NA", hp: "155 hp", torque: "196 Nm", profileId: "g4na-sportage-ql" } // Nu
        ],
        "Kia-Sportage-Gen 4 (QL) (2015-2021)-1.7 CRDi": [
          { code: "D4FD", hp: "115 hp", torque: "280 Nm", profileId: "d4fd-115-sportage-ql" },
          { code: "D4FD", hp: "141 hp", torque: "340 Nm", profileId: "d4fd-141-sportage-ql" }
        ],
        "Kia-Sportage-Gen 4 (QL) (2015-2021)-2.0 CRDi": [
          { code: "D4HA", hp: "136 hp", torque: "373 Nm", profileId: "d4ha-136-sportage-ql" },
          { code: "D4HA", hp: "185 hp", torque: "400 Nm", profileId: "d4ha-185-sportage-ql" }
        ],
        "Kia-Sportage-Gen 4 (QL) (2015-2021)-1.6 CRDi Mild Hybrid": [
          { code: "D4FE", hp: "115 hp", torque: "280 Nm", profileId: "d4fe-115-sportage-ql" }, // U3
          { code: "D4FE", hp: "136 hp", torque: "320 Nm", profileId: "d4fe-136-sportage-ql" }
        ],
      
        "Kia-Sportage-Gen 5 (NQ5) (2021-present)-1.6 T-GDI": [
          { code: "G4FP", hp: "150 hp", torque: "250 Nm", profileId: "g4fp-150-sportage-nq5" },
          { code: "G4FP", hp: "180 hp", torque: "265 Nm", profileId: "g4fp-180-sportage-nq5" }
        ],
        "Kia-Sportage-Gen 5 (NQ5) (2021-present)-1.6 T-GDI Hybrid": [
          { code: "G4FT", hp: "230 hp", torque: "350 Nm", profileId: "g4ft-sportage-hybrid" }
        ],
        "Kia-Sportage-Gen 5 (NQ5) (2021-present)-1.6 T-GDI PHEV": [
          { code: "G4FT", hp: "265 hp", torque: "350 Nm", profileId: "g4ft-sportage-phev" }
        ],
        "Kia-Sportage-Gen 5 (NQ5) (2021-present)-1.6 CRDi": [
          { code: "D4FE", hp: "115 hp", torque: "280 Nm", profileId: "d4fe-115-sportage-nq5" },
          { code: "D4FE", hp: "136 hp", torque: "320 Nm", profileId: "d4fe-136-sportage-nq5" }
        ],
      
        "Kia-Sorento-Gen 1 (BL) (2002-2009)-2.4": [
          { code: "G4JS", hp: "139 hp", torque: "196 Nm", profileId: "g4js-sorento-bl" } // Sirius
        ],
        "Kia-Sorento-Gen 1 (BL) (2002-2009)-3.5 V6": [
          { code: "G6CU", hp: "195 hp", torque: "294 Nm", profileId: "g6cu-sorento-bl" } // Sigma
        ],
        "Kia-Sorento-Gen 1 (BL) (2002-2009)-2.5 CRDi": [
          { code: "D4CB", hp: "140 hp", torque: "343 Nm", profileId: "d4cb-140-sorento-bl" }, // A-Engine (pre-facelift)
          { code: "D4CB", hp: "170 hp", torque: "392 Nm", profileId: "d4cb-170-sorento-bl" }  // A-Engine (VGT)
        ],
      
        "Kia-Sorento-Gen 2 (XM) (2009-2014)-2.4": [
          { code: "G4KE", hp: "174 hp", torque: "225 Nm", profileId: "g4ke-sorento-xm" } // Theta II MPI
        ],
        "Kia-Sorento-Gen 2 (XM) (2009-2014)-2.2 CRDi": [
          { code: "D4HB", hp: "197 hp", torque: "421 Nm", profileId: "d4hb-sorento-xm" } // R-Series
        ],
      
        "Kia-Sorento-Gen 3 (UM) (2014-2020)-2.4 GDI": [
          { code: "G4KJ", hp: "188 hp", torque: "241 Nm", profileId: "g4kj-sorento-um" }
        ],
        "Kia-Sorento-Gen 3 (UM) (2014-2020)-2.0 CRDi": [
          { code: "D4HA", hp: "185 hp", torque: "402 Nm", profileId: "d4ha-sorento-um" }
        ],
        "Kia-Sorento-Gen 3 (UM) (2014-2020)-2.2 CRDi": [
          { code: "D4HB", hp: "200 hp", torque: "441 Nm", profileId: "d4hb-sorento-um" }
        ],
      
        "Kia-Sorento-Gen 4 (MQ4) (2020-present)-2.2 CRDi": [
          { code: "D4HE", hp: "202 hp", torque: "440 Nm", profileId: "d4he-sorento-mq4" } // Smartstream Diesel (Aluminum block)
        ],
        "Kia-Sorento-Gen 4 (MQ4) (2020-present)-1.6 T-GDI Hybrid": [
          { code: "G4FT", hp: "230 hp", torque: "350 Nm", profileId: "g4ft-sorento-hev" }
        ],
        "Kia-Sorento-Gen 4 (MQ4) (2020-present)-1.6 T-GDI PHEV": [
          { code: "G4FT", hp: "265 hp", torque: "350 Nm", profileId: "g4ft-sorento-phev" }
        ],
      
        "Kia-Niro-Gen 1 (DE) (2016-2022)-1.6 GDI Hybrid": [
          { code: "G4LE", hp: "141 hp", torque: "265 Nm", profileId: "g4le-niro-de-hev" }
        ],
        "Kia-Niro-Gen 1 (DE) (2016-2022)-1.6 GDI PHEV": [
          { code: "G4LE", hp: "141 hp", torque: "265 Nm", profileId: "g4le-niro-de-phev" }
        ],
        "Kia-Niro-Gen 2 (SG2) (2022-present)-1.6 GDI Hybrid": [
          { code: "G4LL", hp: "141 hp", torque: "265 Nm", profileId: "g4ll-niro-sg2-hev" } // Smartstream GDI
        ],
        "Kia-Niro-Gen 2 (SG2) (2022-present)-1.6 GDI PHEV": [
          { code: "G4LL", hp: "183 hp", torque: "265 Nm", profileId: "g4ll-niro-sg2-phev" }
        ],
      
        "Kia-Soul-Gen 1 (AM) (2008-2013)-1.6 CVVT": [
          { code: "G4FC", hp: "126 hp", torque: "156 Nm", profileId: "g4fc-soul-am" } // Gamma
        ],
        "Kia-Soul-Gen 1 (AM) (2008-2013)-1.6 CRDi": [
          { code: "D4FB", hp: "128 hp", torque: "260 Nm", profileId: "d4fb-soul-am" }
        ],
      
        "Kia-Soul-Gen 2 (PS) (2013-2019)-1.6 GDI": [
          { code: "G4FD", hp: "132 hp", torque: "161 Nm", profileId: "g4fd-soul-ps" }
        ],
        "Kia-Soul-Gen 2 (PS) (2013-2019)-1.6 T-GDI": [
          { code: "G4FJ", hp: "204 hp", torque: "265 Nm", profileId: "g4fj-soul-ps" }
        ],
        "Kia-Soul-Gen 2 (PS) (2013-2019)-1.6 CRDi": [
          { code: "D4FB", hp: "128 hp", torque: "260 Nm", profileId: "d4fb-128-soul-ps" },
          { code: "D4FB", hp: "136 hp", torque: "300 Nm", profileId: "d4fb-136-soul-ps" }
        ],
      
        "Kia-Soul-Gen 3 (SK3) (2019-present)-1.6 T-GDI": [
          { code: "G4FJ", hp: "204 hp", torque: "265 Nm", profileId: "g4fj-soul-sk3" }
        ],
        "Kia-Soul-Gen 3 (SK3) (2019-present)-2.0 MPI": [
          { code: "G4NH", hp: "147 hp", torque: "179 Nm", profileId: "g4nh-soul-sk3" } // Nu Atkinson (US)
        ],
      
        "Kia-Stonic-YB CUV (2017-present)-1.25 MPI": [
          { code: "G4LA", hp: "84 hp", torque: "122 Nm", profileId: "g4la-stonic" }
        ],
        "Kia-Stonic-YB CUV (2017-present)-1.4 MPI": [
          { code: "G4LC", hp: "100 hp", torque: "133 Nm", profileId: "g4lc-stonic" }
        ],
        "Kia-Stonic-YB CUV (2017-present)-1.0 T-GDI": [
          { code: "G3LC", hp: "100 hp", torque: "172 Nm", profileId: "g3lc-100-stonic" },
          { code: "G3LC", hp: "120 hp", torque: "172 Nm", profileId: "g3lc-120-stonic" }
        ],
        "Kia-Stonic-YB CUV (2017-present)-1.6 CRDi": [
          { code: "D4FB", hp: "110 hp", torque: "260 Nm", profileId: "d4fb-110-stonic" }, // U2
          { code: "D4FE", hp: "115 hp", torque: "280 Nm", profileId: "d4fe-115-stonic" }  // U3 (later models)
        ],
      
        "Kia-XCeed-CD CUV (2019-present)-1.0 T-GDI": [
          { code: "G3LC", hp: "120 hp", torque: "172 Nm", profileId: "g3lc-xceed" }
        ],
        "Kia-XCeed-CD CUV (2019-present)-1.4 T-GDI": [
          { code: "G4LD", hp: "140 hp", torque: "242 Nm", profileId: "g4ld-xceed" }
        ],
        "Kia-XCeed-CD CUV (2019-present)-1.5 T-GDI": [
          { code: "G4LH", hp: "160 hp", torque: "253 Nm", profileId: "g4lh-xceed" }
        ],
        "Kia-XCeed-CD CUV (2019-present)-1.6 T-GDI": [
          { code: "G4FJ", hp: "204 hp", torque: "265 Nm", profileId: "g4fj-xceed" }
        ],
        "Kia-XCeed-CD CUV (2019-present)-1.6 CRDi Mild Hybrid": [
          { code: "D4FE", hp: "136 hp", torque: "320 Nm", profileId: "d4fe-xceed" }
        ],
        "Kia-XCeed-CD CUV (2019-present)-1.6 GDI PHEV": [
          { code: "G4LE", hp: "141 hp", torque: "265 Nm", profileId: "g4le-xceed-phev" }
        ],
      
        // ===========================================================================
        // MPV & VANS
        // ===========================================================================
        "Kia-Carens-Gen 2 (UN) (2006-2013)-2.0 CVVT": [
          { code: "G4KA", hp: "144 hp", torque: "189 Nm", profileId: "g4ka-carens-un" } // Theta
        ],
        "Kia-Carens-Gen 2 (UN) (2006-2013)-2.0 CRDi": [
          { code: "D4EA-F", hp: "140 hp", torque: "305 Nm", profileId: "d4ea-carens-un" }
        ],
      
        "Kia-Carens-Gen 3 (RP) (2013-2019)-1.6 GDI": [
          { code: "G4FD", hp: "135 hp", torque: "165 Nm", profileId: "g4fd-carens-rp" }
        ],
        "Kia-Carens-Gen 3 (RP) (2013-2019)-2.0 GDI": [
          { code: "G4NC", hp: "166 hp", torque: "213 Nm", profileId: "g4nc-carens-rp" }
        ],
        "Kia-Carens-Gen 3 (RP) (2013-2019)-1.7 CRDi": [
          { code: "D4FD", hp: "115 hp", torque: "260 Nm", profileId: "d4fd-115-carens-rp" },
          { code: "D4FD", hp: "141 hp", torque: "340 Nm", profileId: "d4fd-141-carens-rp" }
        ],
      
        "Kia-Carnival-Gen 2 (VQ) (2006-2014)-2.7 V6": [
          { code: "G6EA", hp: "189 hp", torque: "249 Nm", profileId: "g6ea-carnival-vq" }
        ],
        "Kia-Carnival-Gen 2 (VQ) (2006-2014)-2.9 CRDi": [
          { code: "J3", hp: "185 hp", torque: "343 Nm", profileId: "j3-carnival-vq" }
        ],
        "Kia-Carnival-Gen 2 (VQ) (2006-2014)-2.2 CRDi": [
          { code: "D4HB", hp: "197 hp", torque: "421 Nm", profileId: "d4hb-carnival-vq" } // Facelift
        ],
      
        "Kia-Carnival-Gen 3 (YP) (2014-2020)-3.3 V6": [
          { code: "G6DH", hp: "276 hp", torque: "336 Nm", profileId: "g6dh-carnival-yp" }
        ],
        "Kia-Carnival-Gen 3 (YP) (2014-2020)-2.2 CRDi": [
          { code: "D4HB", hp: "202 hp", torque: "441 Nm", profileId: "d4hb-202-carnival-yp" }
        ],
      
        "Kia-Carnival-Gen 4 (KA4) (2020-present)-2.2 CRDi": [
          { code: "D4HE", hp: "202 hp", torque: "441 Nm", profileId: "d4he-carnival-ka4" } // Smartstream
        ],
        "Kia-Carnival-Gen 4 (KA4) (2020-present)-3.5 V6": [
          { code: "G6DU", hp: "290 hp", torque: "355 Nm", profileId: "g6du-carnival-ka4" } // Smartstream Lambda III
        ],
      
        "Kia-Venga-YN (2009-2019)-1.4 CVVT": [
          { code: "G4FA", hp: "90 hp", torque: "137 Nm", profileId: "g4fa-venga" }
        ],
        "Kia-Venga-YN (2009-2019)-1.6 CVVT": [
          { code: "G4FC", hp: "125 hp", torque: "156 Nm", profileId: "g4fc-venga" }
        ],
        "Kia-Venga-YN (2009-2019)-1.4 CRDi": [
          { code: "D4FC", hp: "77 hp", torque: "220 Nm", profileId: "d4fc-77-venga" },
          { code: "D4FC", hp: "90 hp", torque: "220 Nm", profileId: "d4fc-90-venga" }
        ],
        "Kia-Venga-YN (2009-2019)-1.6 CRDi": [
          { code: "D4FB", hp: "115 hp", torque: "260 Nm", profileId: "d4fb-115-venga" },
          { code: "D4FB", hp: "128 hp", torque: "260 Nm", profileId: "d4fb-128-venga" }
        ],
      
        "Kia-K2500/K2700-K-Series (2004-present)-2.5 TCi": [
          { code: "D4BH", hp: "94 hp", torque: "226 Nm", profileId: "d4bh-k2500" } // Turbo Intercooler
        ],
        "Kia-K2500/K2700-K-Series (2004-present)-2.5 CRDi": [
          { code: "D4CB", hp: "130 hp", torque: "255 Nm", profileId: "d4cb-k2500" } // A-Engine
        ],
        "Kia-K2500/K2700-K-Series (2004-present)-2.7 Diesel": [
          { code: "J2", hp: "80 hp", torque: "165 Nm", profileId: "j2-k2700" } // Naturally Aspirated
        ]
  };