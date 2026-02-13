export const daciaEngineTypes = {
    // ===========================================================================
    // MODERN ERA (Logan, Sandero, Jogger)
    // ===========================================================================
    "Dacia-Logan-Gen 1 (L90) (2004-2012)": [
      { name: "1.4 MPI", hp: "75 hp" },
      { name: "1.6 MPI", hp: "87 hp" },
      { name: "1.6 16v", hp: "105 hp" },
      { name: "1.2 16v", hp: "75 hp" },
      { name: "1.5 dCi", hp: "68-70-85 hp" } // K9K
    ],
    "Dacia-Logan-Gen 2 (L52) (2012-2020)": [
      { name: "1.2 16v", hp: "75 hp" },
      { name: "0.9 TCe", hp: "90 hp" },
      { name: "1.0 SCe", hp: "73 hp" },
      { name: "1.5 dCi", hp: "75-90 hp" }
    ],
    "Dacia-Logan-Gen 3 (LJI) (2020-present)": [
      { name: "1.0 SCe", hp: "65 hp" },
      { name: "1.0 TCe", hp: "90 hp" },
      { name: "1.0 ECO-G", hp: "100 hp" }
    ],
  
    "Dacia-Sandero-Gen 1 (B90) (2008-2012)": [
      { name: "1.4 MPI", hp: "75 hp" },
      { name: "1.6 MPI", hp: "87 hp" },
      { name: "1.2 16v", hp: "75 hp" },
      { name: "1.5 dCi", hp: "68-88 hp" }
    ],
    "Dacia-Sandero-Gen 2 (B52) (2012-2020)": [
      { name: "1.2 16v", hp: "75 hp" },
      { name: "0.9 TCe", hp: "90 hp" },
      { name: "1.0 SCe", hp: "73 hp" },
      { name: "1.5 dCi", hp: "75-90 hp" }
    ],
    "Dacia-Sandero-Gen 3 (BJI) (2020-present)": [
      { name: "1.0 SCe", hp: "65 hp" },
      { name: "1.0 TCe", hp: "90 hp" },
      { name: "1.0 ECO-G", hp: "100 hp" }
    ],
  
    "Dacia-Jogger-Gen 1 (RJI) (2021-present)": [
      { name: "1.0 TCe", hp: "110 hp" },
      { name: "1.0 ECO-G", hp: "100 hp" },
      { name: "1.6 Hybrid", hp: "140 hp" } // First Dacia Hybrid
    ],
  
    // ===========================================================================
    // SUV & CROSSOVER (Duster)
    // ===========================================================================
    "Dacia-Duster-Gen 1 (HS) (2010-2017)": [
      { name: "1.6 16v", hp: "105 hp" },
      { name: "1.2 TCe", hp: "125 hp" },
      { name: "1.5 dCi", hp: "86-110 hp" }
    ],
    "Dacia-Duster-Gen 2 (HM) (2017-2024)": [
      { name: "1.6 SCe", hp: "115 hp" },
      { name: "1.2 TCe", hp: "125 hp" },
      { name: "1.3 TCe", hp: "130-150 hp" }, // Mercedes-Renault engine
      { name: "1.0 TCe", hp: "100 hp" },
      { name: "1.5 Blue dCi", hp: "95-115 hp" }
    ],
    "Dacia-Duster-Gen 3 (P1310) (2024-present)": [
      { name: "1.2 TCe 130", hp: "130 hp" }, // Mild Hybrid
      { name: "1.6 Hybrid 140", hp: "140 hp" },
      { name: "1.0 ECO-G 100", hp: "100 hp" }
    ],
  
    // ===========================================================================
    // MPV & VANS (Lodgy, Dokker)
    // ===========================================================================
    "Dacia-Lodgy-J92 (2012-2022)": [
      { name: "1.6 MPI", hp: "85 hp" },
      { name: "1.6 SCe", hp: "100 hp" },
      { name: "1.2 TCe", hp: "115 hp" },
      { name: "1.3 TCe", hp: "130 hp" },
      { name: "1.5 dCi", hp: "90-110 hp" }
    ],
    "Dacia-Dokker-K67 (2012-2021)": [
      { name: "1.6 MPI", hp: "85 hp" },
      { name: "1.6 SCe", hp: "100 hp" },
      { name: "1.2 TCe", hp: "115 hp" },
      { name: "1.3 TCe", hp: "130 hp" },
      { name: "1.5 dCi", hp: "75-90-95 hp" }
    ],
  
    // ===========================================================================
    // UTILITY & WORKHORSES (Pick-Up)
    // ===========================================================================
    "Dacia-Logan Pick-Up-U90 (2008-2012)": [
      { name: "1.6 MPI", hp: "87 hp" },
      { name: "1.5 dCi", hp: "68-85 hp" }
    ],
  
    // Matching keys with generations.ts exactly:
    "Dacia-Pick-Up-1304 (Pick-Up) (1981-2006)": [
      { name: "1.4", hp: "62 hp" },
      { name: "1.6", hp: "72 hp" },
      { name: "1.9 D", hp: "62 hp" } // Renault F8Q
    ],
    "Dacia-Pick-Up-1305 (Drop Side) (1985-2006)": [
      { name: "1.6", hp: "72 hp" },
      { name: "1.9 D", hp: "62 hp" }
    ],
    "Dacia-Pick-Up-1307 (Double Cab) (1992-2006)": [
      { name: "1.6", hp: "72 hp" },
      { name: "1.9 D", hp: "62 hp" }
    ],
  
    // ===========================================================================
    // TRANSITIONAL ERA
    // ===========================================================================
    "Dacia-Solenza-B41 (2003-2005)": [
      { name: "1.4 MPI", hp: "75 hp" }, // Renault E7J
      { name: "1.9 D", hp: "63 hp" }    // Renault F8Q
    ],
    "Dacia-SuperNova-B41 (2000-2003)": [
      { name: "1.4 MPI", hp: "75 hp" }
    ],
    "Dacia-Nova-523 (1995-2000)": [
      { name: "1.4 GLi", hp: "65 hp" }, // Transverse Cleon
      { name: "1.6 GT", hp: "72 hp" },
      { name: "1.6 GTi", hp: "72 hp" }  // Bosch MonoMotronic
    ]
  };