export const kiaEngineTypes = {
    // ===========================================================================
    // COMPACT & CITY CARS
    // ===========================================================================
    "Kia-Picanto-Gen 1 (SA) (2004-2011)": [
      { name: "1.0 (Epsilon)", hp: "61 hp" },
      { name: "1.1 (Epsilon)", hp: "65 hp" },
      { name: "1.1 CRDi", hp: "75 hp" } // 3-cyl
    ],
    "Kia-Picanto-Gen 2 (TA) (2011-2017)": [
      { name: "1.0 MPI", hp: "69 hp" }, // Kappa
      { name: "1.25 MPI", hp: "85 hp" }, // Kappa
      { name: "1.0 LPG", hp: "67 hp" }
    ],
    "Kia-Picanto-Gen 3 (JA) (2017-present)": [
      { name: "1.0 MPI", hp: "67 hp" },
      { name: "1.25 MPI", hp: "84 hp" },
      { name: "1.0 T-GDI", hp: "100 hp" }
    ],
    "Kia-Pregio-TB (1995-2006)": [
    { name: "2.7 Diesel", hp: "80 hp" }, // A legendás "szívódízel" (J2)
    { name: "2.5 TCi", hp: "94 hp" }     // A turbós változat (D4BH)
  ],
  
    "Kia-Rio-Gen 2 (JB) (2005-2011)": [
      { name: "1.4 16v", hp: "97 hp" },
      { name: "1.6 CVVT", hp: "112 hp" },
      { name: "1.5 CRDi", hp: "110 hp" } // Very strong for this size
    ],
    "Kia-Rio-Gen 3 (UB) (2011-2017)": [
      { name: "1.25 CVVT", hp: "85 hp" },
      { name: "1.4 CVVT", hp: "109 hp" },
      { name: "1.1 CRDi", hp: "75 hp" }, // 3-cyl EcoDynamics
      { name: "1.4 CRDi", hp: "90 hp" }
    ],
    "Kia-Rio-Gen 4 (YB) (2017-2023)": [
      { name: "1.25 MPI", hp: "84 hp" },
      { name: "1.4 MPI", hp: "100 hp" },
      { name: "1.0 T-GDI", hp: "100-120 hp" },
      { name: "1.4 CRDi", hp: "77-90 hp" }
    ],
  
    "Kia-Ceed-Gen 1 (ED) (2006-2012)": [
      { name: "1.4 CVVT", hp: "105-109 hp" }, // Gamma
      { name: "1.6 CVVT", hp: "122-126 hp" }, // Gamma
      { name: "2.0 CVVT", hp: "143 hp" }, // Beta II
      { name: "1.6 CRDi", hp: "90-115 hp" }, // U-Line (Chain)
      { name: "2.0 CRDi", hp: "140 hp" } // D-Line (Belt)
    ],
    "Kia-Ceed-Gen 2 (JD) (2012-2018)": [
      { name: "1.4 MPI", hp: "100 hp" },
      { name: "1.6 GDI", hp: "135 hp" },
      { name: "1.0 T-GDI", hp: "100-120 hp" }, // Facelift
      { name: "1.6 T-GDI GT", hp: "204 hp" },
      { name: "1.4 CRDi", hp: "90 hp" },
      { name: "1.6 CRDi", hp: "110-128-136 hp" }
    ],
    "Kia-Ceed-Gen 3 (CD) (2018-present)": [
      { name: "1.4 MPI", hp: "100 hp" },
      { name: "1.0 T-GDI", hp: "100-120 hp" },
      { name: "1.4 T-GDI", hp: "140 hp" },
      { name: "1.5 T-GDI", hp: "160 hp" }, // Smartstream
      { name: "1.6 T-GDI GT", hp: "204 hp" },
      { name: "1.6 CRDi", hp: "115-136 hp" }, // Smartstream Diesel
      { name: "1.6 GDI PHEV", hp: "141 hp" }
    ],
  
    "Kia-ProCeed-Gen 1 (ED) (2007-2012)": [
      { name: "1.4 CVVT", hp: "109 hp" },
      { name: "1.6 CVVT", hp: "126 hp" },
      { name: "2.0 CVVT", hp: "143 hp" },
      { name: "1.6 CRDi", hp: "90-115 hp" },
      { name: "2.0 CRDi", hp: "140 hp" }
    ],
    "Kia-ProCeed-Gen 2 (JD) (2013-2018)": [
      { name: "1.4 MPI", hp: "100 hp" },
      { name: "1.6 GDI", hp: "135 hp" },
      { name: "1.6 T-GDI GT", hp: "204 hp" },
      { name: "1.6 CRDi", hp: "110-128-136 hp" }
    ],
    "Kia-ProCeed-Gen 3 (CD) (2019-present)": [
      { name: "1.4 T-GDI", hp: "140 hp" },
      { name: "1.5 T-GDI", hp: "160 hp" },
      { name: "1.6 T-GDI GT", hp: "204 hp" },
      { name: "1.6 CRDi", hp: "136 hp" }
    ],
  
    "Kia-Cerato-LD (2003-2008)": [
      { name: "1.6", hp: "105 hp" },
      { name: "2.0", hp: "143 hp" },
      { name: "1.5 CRDi", hp: "102 hp" },
      { name: "1.6 CRDi", hp: "115 hp" },
      { name: "2.0 CRDi", hp: "112 hp" }
    ],
    "Kia-Sephia-Gen 2 (FB) (1997-2003)": [
      { name: "1.5", hp: "88 hp" }, // Mazda B5
      { name: "1.6", hp: "101 hp" },
      { name: "1.8", hp: "110 hp" } // Mazda BP
    ],
    "Kia-Shuma-FB (1997-2004)": [
      { name: "1.5 16v", hp: "88 hp" },
      { name: "1.8 16v", hp: "110 hp" }
    ],
    "Kia-Pride-Y (1987-2000)": [
      { name: "1.1", hp: "52 hp" },
      { name: "1.3", hp: "64-72 hp" } // Mazda B3
    ],
  
    // ===========================================================================
    // SEDANS & LUXURY
    // ===========================================================================
    "Kia-Optima-Gen 3 (TF) (2010-2015)": [
      { name: "2.0 CVVL", hp: "165 hp" }, // Nu
      { name: "2.4 GDI", hp: "200 hp" },
      { name: "2.0 Hybrid", hp: "150+40 hp" },
      { name: "1.7 CRDi", hp: "136 hp" }
    ],
    "Kia-Optima-Gen 4 (JF) (2015-2020)": [
      { name: "2.0 CVVL", hp: "163 hp" },
      { name: "2.0 T-GDI GT", hp: "245 hp" },
      { name: "2.0 GDI PHEV", hp: "205 hp" },
      { name: "1.7 CRDi", hp: "141 hp" },
      { name: "1.6 CRDi", hp: "136 hp" } // Facelift
    ],
    "Kia-Magentis-Gen 2 (MG) (2005-2010)": [
      { name: "2.0", hp: "144 hp" },
      { name: "2.7 V6", hp: "188 hp" },
      { name: "2.0 CRDi", hp: "140-150 hp" }
    ],
    "Kia-Stinger-CK (2017-2023)": [
      { name: "2.0 T-GDI", hp: "255 hp" },
      { name: "3.3 T-GDI V6", hp: "366-370 hp" }, // The Beast
      { name: "2.2 CRDi", hp: "200 hp" }
    ],
    "Kia-Opirus-GH (2003-2010)": [
      { name: "3.5 V6", hp: "203 hp" }, // Sigma
      { name: "3.8 V6", hp: "266 hp" }  // Lambda
    ],
    "Kia-Clarus-FE (1996-2001)": [
      { name: "1.8", hp: "116 hp" },
      { name: "2.0", hp: "133 hp" } // Mazda FE
    ],
  
    // ===========================================================================
    // SUV & CROSSOVER
    // ===========================================================================
    "Kia-Sportage-Gen 2 (JE/KM) (2004-2010)": [
      { name: "2.0 CVVT", hp: "141 hp" },
      { name: "2.7 V6", hp: "175 hp" },
      { name: "2.0 CRDi", hp: "113-140-150 hp" }
    ],
    "Kia-Sportage-Gen 3 (SL) (2010-2015)": [
      { name: "1.6 GDI", hp: "135 hp" },
      { name: "2.0 CVVT", hp: "163 hp" },
      { name: "1.7 CRDi", hp: "115 hp" },
      { name: "2.0 CRDi", hp: "136-184 hp" }
    ],
    "Kia-Sportage-Gen 4 (QL) (2015-2021)": [
      { name: "1.6 GDI", hp: "132 hp" },
      { name: "1.6 T-GDI", hp: "177 hp" },
      { name: "2.0 MPI", hp: "155 hp" },
      { name: "1.7 CRDi", hp: "115-141 hp" },
      { name: "2.0 CRDi", hp: "136-185 hp" },
      { name: "1.6 CRDi Mild Hybrid", hp: "115-136 hp" }
    ],
    "Kia-Sportage-Gen 5 (NQ5) (2021-present)": [
      { name: "1.6 T-GDI", hp: "150-180 hp" },
      { name: "1.6 T-GDI Hybrid", hp: "230 hp" },
      { name: "1.6 T-GDI PHEV", hp: "265 hp" },
      { name: "1.6 CRDi", hp: "115-136 hp" }
    ],
  
    "Kia-Sorento-Gen 1 (BL) (2002-2009)": [
      { name: "2.4", hp: "139 hp" },
      { name: "3.5 V6", hp: "195 hp" },
      { name: "2.5 CRDi", hp: "140-170 hp" } // A-Engine
    ],
    "Kia-Sorento-Gen 2 (XM) (2009-2014)": [
      { name: "2.4", hp: "174 hp" },
      { name: "2.2 CRDi", hp: "197 hp" } // R-Series
    ],
    "Kia-Sorento-Gen 3 (UM) (2014-2020)": [
      { name: "2.4 GDI", hp: "188 hp" },
      { name: "2.0 CRDi", hp: "185 hp" },
      { name: "2.2 CRDi", hp: "200 hp" }
    ],
    "Kia-Sorento-Gen 4 (MQ4) (2020-present)": [
      { name: "2.2 CRDi", hp: "202 hp" },
      { name: "1.6 T-GDI Hybrid", hp: "230 hp" },
      { name: "1.6 T-GDI PHEV", hp: "265 hp" }
    ],
  
    "Kia-Niro-Gen 1 (DE) (2016-2022)": [
      { name: "1.6 GDI Hybrid", hp: "141 hp" },
      { name: "1.6 GDI PHEV", hp: "141 hp" }
    ],
    "Kia-Niro-Gen 2 (SG2) (2022-present)": [
      { name: "1.6 GDI Hybrid", hp: "141 hp" },
      { name: "1.6 GDI PHEV", hp: "183 hp" } // Stronger electric motor
    ],
  
    "Kia-Soul-Gen 1 (AM) (2008-2013)": [
      { name: "1.6 CVVT", hp: "126 hp" },
      { name: "1.6 CRDi", hp: "128 hp" }
    ],
    "Kia-Soul-Gen 2 (PS) (2013-2019)": [
      { name: "1.6 GDI", hp: "132 hp" },
      { name: "1.6 T-GDI", hp: "204 hp" }, // Sport
      { name: "1.6 CRDi", hp: "128-136 hp" }
    ],
    "Kia-Soul-Gen 3 (SK3) (2019-present)": [
      { name: "1.6 T-GDI", hp: "204 hp" }, // Mostly sold as EV in EU
      { name: "2.0 MPI", hp: "147 hp" } // US Spec
    ],
  
    "Kia-Stonic-YB CUV (2017-present)": [
      { name: "1.25 MPI", hp: "84 hp" },
      { name: "1.4 MPI", hp: "100 hp" },
      { name: "1.0 T-GDI", hp: "100-120 hp" },
      { name: "1.6 CRDi", hp: "110-115 hp" } // Discontinued early
    ],
    "Kia-XCeed-CD CUV (2019-present)": [
      { name: "1.0 T-GDI", hp: "120 hp" },
      { name: "1.4 T-GDI", hp: "140 hp" },
      { name: "1.5 T-GDI", hp: "160 hp" },
      { name: "1.6 T-GDI", hp: "204 hp" },
      { name: "1.6 CRDi Mild Hybrid", hp: "136 hp" },
      { name: "1.6 GDI PHEV", hp: "141 hp" }
    ],
  
    // ===========================================================================
    // MPV & VANS
    // ===========================================================================
    "Kia-Carens-Gen 2 (UN) (2006-2013)": [
      { name: "2.0 CVVT", hp: "144 hp" },
      { name: "2.0 CRDi", hp: "140 hp" }
    ],
    "Kia-Carens-Gen 3 (RP) (2013-2019)": [
      { name: "1.6 GDI", hp: "135 hp" },
      { name: "2.0 GDI", hp: "166 hp" },
      { name: "1.7 CRDi", hp: "115-136-141 hp" }
    ],
    "Kia-Carnival-Gen 2 (VQ) (2006-2014)": [
      { name: "2.7 V6", hp: "189 hp" },
      { name: "2.9 CRDi", hp: "185 hp" }, // J3 engine
      { name: "2.2 CRDi", hp: "197 hp" } // R-series (Facelift)
    ],
    "Kia-Carnival-Gen 3 (YP) (2014-2020)": [
      { name: "3.3 V6", hp: "276 hp" },
      { name: "2.2 CRDi", hp: "202 hp" }
    ],
    "Kia-Carnival-Gen 4 (KA4) (2020-present)": [
      { name: "2.2 CRDi", hp: "202 hp" },
      { name: "3.5 V6", hp: "290 hp" }
    ],
    "Kia-Venga-YN (2009-2019)": [
      { name: "1.4 CVVT", hp: "90 hp" },
      { name: "1.6 CVVT", hp: "125 hp" },
      { name: "1.4 CRDi", hp: "77-90 hp" },
      { name: "1.6 CRDi", hp: "115-128 hp" }
    ],
    "Kia-K2500/K2700-K-Series (2004-present)": [
      { name: "2.5 TCi", hp: "94 hp" }, // D4BH
      { name: "2.5 CRDi", hp: "130 hp" }, // D4CB
      { name: "2.7 Diesel", hp: "80 hp" } // J2
    ]
  };