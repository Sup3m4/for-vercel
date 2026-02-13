export const lanciaEngineTypes = {
    // ===========================================================================
    // COMPACT & CITY CARS (Ypsilon, Delta, Musa, Y10)
    // ===========================================================================
    "Lancia-Ypsilon-Gen 1 (840) (1995-2003)": [
      { name: "1.1 (Elefantino Blu)", hp: "55 hp" },
      { name: "1.2", hp: "60 hp" },
      { name: "1.2 16v (Elefantino Rosso)", hp: "86 hp" },
      { name: "1.4 12v", hp: "80 hp" }
    ],
    "Lancia-Ypsilon-Gen 2 (843) (2003-2011)": [
      { name: "1.2 8v", hp: "60 hp" },
      { name: "1.4 8v", hp: "77 hp" },
      { name: "1.4 16v", hp: "95 hp" },
      { name: "1.3 Multijet", hp: "70-90-105 hp" } // Diesel
    ],
    "Lancia-Ypsilon-Gen 3 (846) (2011-2024)": [
      { name: "1.2 8v", hp: "69 hp" },
      { name: "0.9 TwinAir", hp: "85 hp" }, // 2-cylinder Turbo
      { name: "1.3 Multijet", hp: "95 hp" },
      { name: "1.0 Hybrid", hp: "70 hp" }   // Mild Hybrid (FireFly)
    ],
    "Lancia-Ypsilon-Gen 4 (2024-present)": [
      { name: "1.2 Hybrid", hp: "100 hp" },  // 48V e-DCT
      { name: "1.2 Hybrid 136", hp: "136 hp" }
    ],
  
    "Lancia-Delta-Gen 1 (831) (1979-1994)": [
      { name: "1.3", hp: "75-78 hp" },
      { name: "1.5", hp: "85 hp" },
      { name: "1.6 GT", hp: "105-108 hp" },
      { name: "1.6 HF Turbo", hp: "130-140 hp" },
      { name: "2.0 HF 4WD", hp: "165 hp" },
      { name: "2.0 HF Integrale 8v", hp: "185 hp" },
      { name: "2.0 HF Integrale 16v", hp: "200-210-215 hp" } // Evoluzione
    ],
    "Lancia-Delta-Gen 2 (836) (1993-1999)": [
      { name: "1.6", hp: "75-90-103 hp" },
      { name: "1.8 VVT", hp: "130 hp" },
      { name: "2.0 16v", hp: "139 hp" },
      { name: "2.0 HF Turbo", hp: "186-193 hp" }, // Lampredi Turbo
      { name: "1.9 TD", hp: "90 hp" }
    ],
    "Lancia-Delta-Gen 3 (844) (2008-2014)": [
      { name: "1.4 T-Jet", hp: "120-150 hp" },
      { name: "1.4 MultiAir", hp: "140 hp" },
      { name: "1.8 Di T-Jet", hp: "200 hp" }, // Direct Injection Turbo
      { name: "1.6 Multijet", hp: "120 hp" },
      { name: "2.0 Multijet", hp: "165 hp" },
      { name: "1.9 Twin Turbo Multijet", hp: "190 hp" }
    ],
  
    "Lancia-Musa-350 (2004-2012)": [
      { name: "1.4 8v", hp: "77 hp" },
      { name: "1.4 16v", hp: "95 hp" },
      { name: "1.3 Multijet", hp: "70-90-95 hp" },
      { name: "1.6 Multijet", hp: "120 hp" },
      { name: "1.9 Multijet", hp: "100 hp" }
    ],
  
    "Lancia-Y10-156 (1985-1995)": [
      { name: "1.0 FIRE", hp: "45 hp" },
      { name: "1.1 FIRE", hp: "50-54 hp" },
      { name: "1.0 Turbo", hp: "85 hp" },   // Brazil engine
      { name: "1.3 GT i.e.", hp: "72-76 hp" } // Brazil engine
    ],
  
    // ===========================================================================
    // SEDANS & LUXURY (Thema, Kappa, Thesis, Lybra, Dedra)
    // ===========================================================================
    "Lancia-Thema-Gen 1 (834) (1984-1994)": [
      { name: "2.0 i.e.", hp: "115-120 hp" },
      { name: "2.0 i.e. 16v", hp: "147-152 hp" },
      { name: "2.0 Turbo 8v", hp: "165 hp" },
      { name: "2.0 Turbo 16v", hp: "177-205 hp" },
      { name: "2.8 V6 (PRV)", hp: "150 hp" },
      { name: "3.0 V6 (Alfa)", hp: "175 hp" },
      { name: "8.32 (Ferrari)", hp: "205-215 hp" }, // Ferrari V8
      { name: "2.5 Turbo DS", hp: "100-118 hp" }
    ],
    "Lancia-Thema-Gen 2 (LX) (2011-2014)": [
      { name: "3.6 V6 Pentastar", hp: "286 hp" }, // Chrysler
      { name: "3.0 V6 CRD", hp: "190-239 hp" }    // VM Motori
    ],
  
    "Lancia-Kappa-838 (1994-2001)": [
      { name: "2.0 20v", hp: "146-155 hp" }, // 5-cyl VIS
      { name: "2.4 20v", hp: "175 hp" },     // 5-cyl VIS
      { name: "3.0 V6 24v", hp: "204 hp" },  // Alfa Busso
      { name: "2.0 16v Turbo", hp: "205 hp" }, // 4-cyl Lampredi
      { name: "2.0 20v Turbo", hp: "220 hp" }, // 5-cyl Turbo
      { name: "2.4 TDS/JTD", hp: "124-136 hp" }
    ],
  
    "Lancia-Thesis-841 (2001-2009)": [
      { name: "2.0 Turbo Soft", hp: "185 hp" }, // 5-cyl
      { name: "2.4 20v", hp: "170 hp" },        // 5-cyl
      { name: "3.0 V6", hp: "215 hp" },         // Alfa Busso
      { name: "3.2 V6", hp: "230 hp" },         // Alfa Busso
      { name: "2.4 JTD 10v", hp: "150 hp" },
      { name: "2.4 Multijet 20v", hp: "175-185 hp" }
    ],
  
    "Lancia-Lybra-839 (1999-2005)": [
      { name: "1.6 16v", hp: "103 hp" },
      { name: "1.8 VVT", hp: "130 hp" },
      { name: "2.0 20v", hp: "150-154 hp" }, // 5-cyl
      { name: "1.9 JTD", hp: "105-115 hp" },
      { name: "2.4 JTD", hp: "135-150 hp" }  // 5-cyl Diesel
    ],
  
    "Lancia-Dedra-835 (1989-1999)": [
      { name: "1.6 i.e.", hp: "75-90 hp" },
      { name: "1.8 i.e.", hp: "105-113 hp" },
      { name: "2.0 i.e.", hp: "113-115 hp" },
      { name: "2.0 Turbo", hp: "162-177 hp" }, // Integrale engine
      { name: "1.9 Turbo DS", hp: "90 hp" }
    ],
  
    "Lancia-Prisma-831 (1982-1989)": [
      { name: "1.3", hp: "78 hp" },
      { name: "1.5", hp: "80-85 hp" },
      { name: "1.6", hp: "100-108 hp" },
      { name: "2.0 4WD", hp: "115 hp" },
      { name: "1.9 Diesel", hp: "65 hp" },
      { name: "1.9 Turbo DS", hp: "80 hp" }
    ],
  
    "Lancia-Trevi-828 (1980-1984)": [
      { name: "1.6", hp: "100 hp" },
      { name: "2.0 i.e.", hp: "122 hp" },
      { name: "2.0 VX", hp: "135 hp" } // Volumex Supercharged
    ],
  
    "Lancia-Beta-828 (1972-1984)": [
      { name: "1.3", hp: "82 hp" },
      { name: "1.4", hp: "90 hp" },
      { name: "1.6", hp: "100 hp" },
      { name: "2.0", hp: "115-122 hp" },
      { name: "2.0 VX", hp: "135 hp" } // Volumex Supercharged
    ],
  
    "Lancia-Gamma-830 (1976-1984)": [
      { name: "2.0", hp: "115-120 hp" }, // Flat-4 Boxer
      { name: "2.5", hp: "140 hp" },     // Flat-4 Boxer
      { name: "2.5 i.e.", hp: "140 hp" }
    ],
  
    // ===========================================================================
    // SPORTS & COUPES (Fulvia, Flavia, Stratos)
    // ===========================================================================
    "Lancia-Fulvia-818 (1963-1976)": [
      { name: "1.1 V4", hp: "58 hp" },
      { name: "1.2 V4", hp: "80 hp" },
      { name: "1.3 V4", hp: "87-90 hp" }, // Rallye 1.3 S
      { name: "1.6 V4 HF", hp: "115-132 hp" } // Fanalone
    ],
  
    "Lancia-Flavia-Gen 1 (815/819) (1961-1971)": [
      { name: "1.5", hp: "78 hp" },      // Flat-4
      { name: "1.8", hp: "92-105 hp" },
      { name: "2.0", hp: "115-124 hp" }
    ],
    "Lancia-Flavia-Gen 2 (JS) (2012-2014)": [
      { name: "2.4", hp: "170 hp" } // Chrysler World Engine
    ],
  
    "Lancia-Stratos-HF (1973-1978)": [
      { name: "2.4 V6", hp: "190 hp" } // Ferrari Dino V6
    ],
  
    // ===========================================================================
    // MPV & VANS (Phedra, Zeta, Voyager)
    // ===========================================================================
    "Lancia-Phedra-179 (2002-2010)": [
      { name: "2.0 16v", hp: "136 hp" },
      { name: "3.0 V6", hp: "204 hp" },
      { name: "2.0 JTD", hp: "107-136 hp" },
      { name: "2.2 JTD Biturbo", hp: "128-170 hp" }
    ],
  
    "Lancia-Zeta-220 (1994-2002)": [
      { name: "2.0 Turbo", hp: "147 hp" },
      { name: "2.0 JTD", hp: "109 hp" },
      { name: "2.1 TD", hp: "109 hp" }
    ],
  
    "Lancia-Voyager-RT (2011-2015)": [
      { name: "2.8 CRD", hp: "163-178 hp" }, // VM Motori
      { name: "3.6 V6 Pentastar", hp: "283 hp" } // Chrysler
    ]
  };