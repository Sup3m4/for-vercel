export const jeepEngineCodes = {
    // ===========================================================================
    // OFF-ROAD ICONS (Wrangler, CJ, Gladiator)
    // ===========================================================================
    "Jeep-Wrangler-Gen 1 (YJ) (1987-1995)-2.5": [
      { code: "EPE", hp: "117 hp", torque: "183 Nm", profileId: "epe-amc-150-yj" }, // AMC 150 (TBI)
      { code: "EPE", hp: "123 hp", torque: "188 Nm", profileId: "epe-amc-150-mpi-yj" } // MPI (1991+)
    ],
    "Jeep-Wrangler-Gen 1 (YJ) (1987-1995)-4.0": [
      { code: "ERH", hp: "177 hp", torque: "296 Nm", profileId: "erh-amc-242-yj" }, // AMC 242 (Renix)
      { code: "ERH", hp: "190 hp", torque: "298 Nm", profileId: "erh-amc-242-ho-yj" } // High Output (1991+)
    ],
    "Jeep-Wrangler-Gen 1 (YJ) (1987-1995)-4.2": [
      { code: "EFC", hp: "112 hp", torque: "285 Nm", profileId: "efc-amc-258-yj" } // Carbureted
    ],
  
    "Jeep-Wrangler-Gen 2 (TJ) (1997-2006)-2.5": [
      { code: "EPE", hp: "120 hp", torque: "190 Nm", profileId: "epe-amc-150-tj" }
    ],
    "Jeep-Wrangler-Gen 2 (TJ) (1997-2006)-2.4": [
      { code: "ED1", hp: "147 hp", torque: "224 Nm", profileId: "ed1-powertech-tj" } // DOHC
    ],
    "Jeep-Wrangler-Gen 2 (TJ) (1997-2006)-4.0": [
      { code: "ERH", hp: "190 hp", torque: "319 Nm", profileId: "erh-amc-242-tj" } // The Legend
    ],
  
    "Jeep-Wrangler-Gen 3 (JK) (2007-2018)-3.8 V6": [
      { code: "EGT", hp: "202 hp", torque: "321 Nm", profileId: "egt-jk-v6" }
    ],
    "Jeep-Wrangler-Gen 3 (JK) (2007-2018)-3.6 V6 Pentastar": [
      { code: "ERB", hp: "285 hp", torque: "353 Nm", profileId: "erb-pentastar-jk" }
    ],
    "Jeep-Wrangler-Gen 3 (JK) (2007-2018)-2.8 CRD": [
      { code: "ENS", hp: "177 hp", torque: "410 Nm", profileId: "ens-vm-ra428-jk" }, // VM Motori
      { code: "ENS", hp: "200 hp", torque: "460 Nm", profileId: "ens-vm-ra428-200-jk" }
    ],
  
    "Jeep-Wrangler-Gen 4 (JL) (2018-present)-2.0 Turbo": [
      { code: "EC1", hp: "272 hp", torque: "400 Nm", profileId: "ec1-gme-hurricane-jl" }
    ],
    "Jeep-Wrangler-Gen 4 (JL) (2018-present)-3.6 V6 Pentastar": [
      { code: "ERC", hp: "285 hp", torque: "353 Nm", profileId: "erc-pentastar-jl" } // Upgrade with eTorque option
    ],
    "Jeep-Wrangler-Gen 4 (JL) (2018-present)-6.4 V8 HEMI (392)": [
      { code: "ESG", hp: "470 hp", torque: "637 Nm", profileId: "esg-hemi-392-jl" }
    ],
    "Jeep-Wrangler-Gen 4 (JL) (2018-present)-2.2 MultiJet II": [
      { code: "EBJ", hp: "200 hp", torque: "450 Nm", profileId: "ebj-multijet-jl" }
    ],
    "Jeep-Wrangler-Gen 4 (JL) (2018-present)-2.0 4xe PHEV": [
      { code: "EC1", hp: "380 hp", torque: "637 Nm", profileId: "ec1-4xe-jl" } // Combined System
    ],
  
    // CJ Series - Separated as requested
    "Jeep-CJ-CJ-5 (1954-1983)-2.2 Hurricane": [
      { code: "F-134", hp: "75 hp", torque: "154 Nm", profileId: "f134-hurricane-cj5" }
    ],
    "Jeep-CJ-CJ-5 (1954-1983)-3.7 V6": [
      { code: "Dauntless 225", hp: "155 hp", torque: "292 Nm", profileId: "dauntless-225-cj5" } // Buick
    ],
    "Jeep-CJ-CJ-5 (1954-1983)-3.8 Inline-6": [
      { code: "AMC 232", hp: "100 hp", torque: "251 Nm", profileId: "amc-232-cj5" }
    ],
    "Jeep-CJ-CJ-5 (1954-1983)-4.2 Inline-6": [
      { code: "AMC 258", hp: "112 hp", torque: "285 Nm", profileId: "amc-258-cj5" }
    ],
    "Jeep-CJ-CJ-5 (1954-1983)-5.0 V8": [
      { code: "AMC 304", hp: "150 hp", torque: "332 Nm", profileId: "amc-304-cj5" }
    ],
  
    "Jeep-CJ-CJ-7 (1976-1986)-2.5 Inline-4": [
      { code: "Iron Duke", hp: "85 hp", torque: "169 Nm", profileId: "gm-iron-duke-cj7" }, // GM (early)
      { code: "AMC 150", hp: "105 hp", torque: "180 Nm", profileId: "amc-150-cj7" }     // AMC (late)
    ],
    "Jeep-CJ-CJ-7 (1976-1986)-4.2 Inline-6": [
      { code: "AMC 258", hp: "112 hp", torque: "285 Nm", profileId: "amc-258-cj7" }
    ],
    "Jeep-CJ-CJ-7 (1976-1986)-5.0 V8": [
      { code: "AMC 304", hp: "150 hp", torque: "332 Nm", profileId: "amc-304-cj7" }
    ],
  
    "Jeep-Gladiator-JT (2019-present)-3.6 V6 Pentastar": [
      { code: "ERC", hp: "285 hp", torque: "353 Nm", profileId: "erc-pentastar-jt" }
    ],
    "Jeep-Gladiator-JT (2019-present)-3.0 V6 EcoDiesel": [
      { code: "EXF", hp: "260 hp", torque: "600 Nm", profileId: "exf-ecodiesel-jt" } // VM Motori A630
    ],
  
    // ===========================================================================
    // LUXURY & FAMILY SUV (Grand Cherokee, Commander)
    // ===========================================================================
    "Jeep-Grand Cherokee-Gen 1 (ZJ) (1993-1998)-4.0": [
      { code: "ERH", hp: "190 hp", torque: "298 Nm", profileId: "erh-amc-242-zj" }
    ],
    "Jeep-Grand Cherokee-Gen 1 (ZJ) (1993-1998)-5.2 V8": [
      { code: "ELF", hp: "220 hp", torque: "386 Nm", profileId: "elf-magnum-318-zj" }
    ],
    "Jeep-Grand Cherokee-Gen 1 (ZJ) (1993-1998)-5.9 V8": [
      { code: "EML", hp: "245 hp", torque: "468 Nm", profileId: "eml-magnum-360-zj" } // The 5.9 Limited
    ],
    "Jeep-Grand Cherokee-Gen 1 (ZJ) (1993-1998)-2.5 TD": [
      { code: "ENC", hp: "115 hp", torque: "278 Nm", profileId: "enc-vm-425-zj" } // VM Motori
    ],
  
    "Jeep-Grand Cherokee-Gen 2 (WJ) (1999-2004)-4.0": [
      { code: "ERH", hp: "190 hp", torque: "298 Nm", profileId: "erh-powertech-i6-wj" }
    ],
    "Jeep-Grand Cherokee-Gen 2 (WJ) (1999-2004)-4.7 V8": [
      { code: "EVA", hp: "235 hp", torque: "400 Nm", profileId: "eva-powertech-v8-wj" },
      { code: "EVC", hp: "265 hp", torque: "441 Nm", profileId: "evc-powertech-ho-wj" } // High Output
    ],
    "Jeep-Grand Cherokee-Gen 2 (WJ) (1999-2004)-3.1 TD": [
      { code: "EXA", hp: "140 hp", torque: "384 Nm", profileId: "exa-vm-531-wj" } // 5-cyl
    ],
    "Jeep-Grand Cherokee-Gen 2 (WJ) (1999-2004)-2.7 CRD": [
      { code: "OM612", hp: "163 hp", torque: "400 Nm", profileId: "om612-wj" } // Mercedes
    ],
  
    "Jeep-Grand Cherokee-Gen 3 (WK) (2005-2010)-3.7 V6": [
      { code: "EKG", hp: "210 hp", torque: "319 Nm", profileId: "ekg-powertech-v6-wk" }
    ],
    "Jeep-Grand Cherokee-Gen 3 (WK) (2005-2010)-4.7 V8": [
      { code: "EVA", hp: "235 hp", torque: "400 Nm", profileId: "eva-powertech-v8-wk" },
      { code: "EVE", hp: "305 hp", torque: "453 Nm", profileId: "eve-powertech-v8-corsair-wk" } // 2008+ update
    ],
    "Jeep-Grand Cherokee-Gen 3 (WK) (2005-2010)-5.7 V8 HEMI": [
      { code: "EZB", hp: "330 hp", torque: "502 Nm", profileId: "ezb-hemi-wk" },
      { code: "EZH", hp: "360 hp", torque: "520 Nm", profileId: "ezh-hemi-eagle-wk" } // VVT
    ],
    "Jeep-Grand Cherokee-Gen 3 (WK) (2005-2010)-6.1 V8 HEMI SRT8": [
      { code: "ESF", hp: "425 hp", torque: "569 Nm", profileId: "esf-hemi-srt8-wk" }
    ],
    "Jeep-Grand Cherokee-Gen 3 (WK) (2005-2010)-3.0 CRD": [
      { code: "OM642", hp: "218 hp", torque: "510 Nm", profileId: "om642-wk" } // Mercedes V6
    ],
  
    "Jeep-Grand Cherokee-Gen 4 (WK2) (2011-2021)-3.6 V6 Pentastar": [
      { code: "ERB", hp: "295 hp", torque: "353 Nm", profileId: "erb-pentastar-wk2" }
    ],
    "Jeep-Grand Cherokee-Gen 4 (WK2) (2011-2021)-5.7 V8 HEMI": [
      { code: "EZH", hp: "360 hp", torque: "520 Nm", profileId: "ezh-hemi-wk2" }
    ],
    "Jeep-Grand Cherokee-Gen 4 (WK2) (2011-2021)-6.4 V8 HEMI SRT": [
      { code: "ESG", hp: "475 hp", torque: "637 Nm", profileId: "esg-hemi-srt-wk2" }
    ],
    "Jeep-Grand Cherokee-Gen 4 (WK2) (2011-2021)-6.2 V8 Supercharged Trackhawk": [
      { code: "ESD", hp: "707 hp", torque: "875 Nm", profileId: "esd-hellcat-trackhawk-wk2" }
    ],
    "Jeep-Grand Cherokee-Gen 4 (WK2) (2011-2021)-3.0 V6 EcoDiesel": [
      { code: "EXF", hp: "240 hp", torque: "570 Nm", profileId: "exf-ecodiesel-wk2" }, // VM A630
      { code: "EXF", hp: "250 hp", torque: "570 Nm", profileId: "exf-ecodiesel-250-wk2" }
    ],
  
    "Jeep-Grand Cherokee-Gen 5 (WL) (2021-present)-3.6 V6 Pentastar": [
      { code: "ERC", hp: "293 hp", torque: "353 Nm", profileId: "erc-pentastar-wl" }
    ],
    "Jeep-Grand Cherokee-Gen 5 (WL) (2021-present)-5.7 V8 HEMI": [
      { code: "EZH", hp: "357 hp", torque: "529 Nm", profileId: "ezh-hemi-wl" }
    ],
    "Jeep-Grand Cherokee-Gen 5 (WL) (2021-present)-2.0 4xe PHEV": [
      { code: "EC1", hp: "375 hp", torque: "637 Nm", profileId: "ec1-4xe-wl" }
    ],
  
    "Jeep-Commander-XK (2006-2010)-3.7 V6": [
      { code: "EKG", hp: "210 hp", torque: "319 Nm", profileId: "ekg-commander" }
    ],
    "Jeep-Commander-XK (2006-2010)-4.7 V8": [
      { code: "EVA", hp: "235 hp", torque: "400 Nm", profileId: "eva-commander" },
      { code: "EVE", hp: "305 hp", torque: "453 Nm", profileId: "eve-commander-ho" }
    ],
    "Jeep-Commander-XK (2006-2010)-5.7 V8 HEMI": [
      { code: "EZB", hp: "330 hp", torque: "502 Nm", profileId: "ezb-hemi-commander" }
    ],
    "Jeep-Commander-XK (2006-2010)-3.0 CRD": [
      { code: "OM642", hp: "218 hp", torque: "510 Nm", profileId: "om642-commander" }
    ],
  
    // ===========================================================================
    // COMPACT & CROSSOVER
    // ===========================================================================
    "Jeep-Cherokee-Gen 2 (XJ) (1984-2001)-2.5": [
      { code: "EPE", hp: "121 hp", torque: "190 Nm", profileId: "epe-amc-150-xj" }
    ],
    "Jeep-Cherokee-Gen 2 (XJ) (1984-2001)-4.0": [
      { code: "ERH", hp: "177 hp", torque: "296 Nm", profileId: "erh-amc-242-xj" },
      { code: "ERH", hp: "190 hp", torque: "305 Nm", profileId: "erh-amc-242-ho-xj" }
    ],
    "Jeep-Cherokee-Gen 2 (XJ) (1984-2001)-2.1 TD": [
      { code: "J8S", hp: "87 hp", torque: "184 Nm", profileId: "j8s-renault-xj" } // Renault
    ],
    "Jeep-Cherokee-Gen 2 (XJ) (1984-2001)-2.5 TD": [
      { code: "ENC", hp: "115 hp", torque: "300 Nm", profileId: "enc-vm-425-xj" }
    ],
  
    "Jeep-Cherokee-Gen 3 (KJ) (2002-2007)-2.4": [
      { code: "ED1", hp: "147 hp", torque: "214 Nm", profileId: "ed1-liberty-kj" }
    ],
    "Jeep-Cherokee-Gen 3 (KJ) (2002-2007)-3.7 V6": [
      { code: "EKG", hp: "210 hp", torque: "319 Nm", profileId: "ekg-liberty-kj" }
    ],
    "Jeep-Cherokee-Gen 3 (KJ) (2002-2007)-2.5 CRD": [
      { code: "R 425", hp: "143 hp", torque: "343 Nm", profileId: "r425-vm-kj" }
    ],
    "Jeep-Cherokee-Gen 3 (KJ) (2002-2007)-2.8 CRD": [
      { code: "R 428", hp: "150 hp", torque: "360 Nm", profileId: "r428-vm-kj" },
      { code: "R 428", hp: "163 hp", torque: "400 Nm", profileId: "r428-vm-kj-vgt" }
    ],
  
    "Jeep-Cherokee-Gen 4 (KK) (2008-2013)-3.7 V6": [
      { code: "EKG", hp: "210 hp", torque: "319 Nm", profileId: "ekg-liberty-kk" }
    ],
    "Jeep-Cherokee-Gen 4 (KK) (2008-2013)-2.8 CRD": [
      { code: "ENS", hp: "177 hp", torque: "410 Nm", profileId: "ens-vm-kk" },
      { code: "ENS", hp: "200 hp", torque: "460 Nm", profileId: "ens-vm-kk-200" }
    ],
  
    "Jeep-Cherokee-Gen 5 (KL) (2014-present)-2.4 MultiAir": [
      { code: "ED6", hp: "184 hp", torque: "232 Nm", profileId: "ed6-multiair-kl" } // Tigershark
    ],
    "Jeep-Cherokee-Gen 5 (KL) (2014-present)-3.2 V6 Pentastar": [
      { code: "EHB", hp: "271 hp", torque: "324 Nm", profileId: "ehb-pentastar-kl" } // Downsized 3.6
    ],
    "Jeep-Cherokee-Gen 5 (KL) (2014-present)-2.0 MultiJet": [
      { code: "EBT", hp: "140 hp", torque: "350 Nm", profileId: "ebt-multijet-kl-140" },
      { code: "EBT", hp: "170 hp", torque: "350 Nm", profileId: "ebt-multijet-kl-170" }
    ],
    "Jeep-Cherokee-Gen 5 (KL) (2014-present)-2.2 MultiJet": [
      { code: "EBJ", hp: "185 hp", torque: "440 Nm", profileId: "ebj-multijet-kl-185" },
      { code: "EBJ", hp: "200 hp", torque: "440 Nm", profileId: "ebj-multijet-kl-200" }
    ],
  
    "Jeep-Compass-Gen 1 (MK49) (2007-2016)-2.0": [
      { code: "ECN", hp: "156 hp", torque: "190 Nm", profileId: "ecn-compass-mk" }
    ],
    "Jeep-Compass-Gen 1 (MK49) (2007-2016)-2.4": [
      { code: "ED3", hp: "170 hp", torque: "220 Nm", profileId: "ed3-compass-mk" }
    ],
    "Jeep-Compass-Gen 1 (MK49) (2007-2016)-2.0 CRD": [
      { code: "ECD", hp: "140 hp", torque: "310 Nm", profileId: "ecd-vw-tdi-compass" } // VW Pump Duse
    ],
    "Jeep-Compass-Gen 1 (MK49) (2007-2016)-2.2 CRD": [
      { code: "ENE", hp: "136 hp", torque: "320 Nm", profileId: "ene-om651-compass-136" }, // Mercedes
      { code: "ENE", hp: "163 hp", torque: "320 Nm", profileId: "ene-om651-compass-163" }
    ],
  
    "Jeep-Compass-Gen 2 (MP) (2017-present)-1.4 MultiAir": [
      { code: "55263624", hp: "140 hp", torque: "230 Nm", profileId: "ma-compass-mp-140" },
      { code: "55263623", hp: "170 hp", torque: "250 Nm", profileId: "ma-compass-mp-170" }
    ],
    "Jeep-Compass-Gen 2 (MP) (2017-present)-1.3 Turbo": [
      { code: "GSE T4", hp: "130 hp", torque: "270 Nm", profileId: "gse-compass-mp-130" },
      { code: "GSE T4", hp: "150 hp", torque: "270 Nm", profileId: "gse-compass-mp-150" }
    ],
    "Jeep-Compass-Gen 2 (MP) (2017-present)-1.6 MultiJet": [
      { code: "55260384", hp: "120 hp", torque: "320 Nm", profileId: "mj-16-compass-mp" }
    ],
    "Jeep-Compass-Gen 2 (MP) (2017-present)-2.0 MultiJet": [
      { code: "55263087", hp: "140 hp", torque: "350 Nm", profileId: "mj-20-compass-mp-140" },
      { code: "55263088", hp: "170 hp", torque: "380 Nm", profileId: "mj-20-compass-mp-170" }
    ],
    "Jeep-Compass-Gen 2 (MP) (2017-present)-1.3 4xe PHEV": [
      { code: "GSE T4", hp: "190 hp", torque: "270 Nm", profileId: "phev-190-compass" },
      { code: "GSE T4", hp: "240 hp", torque: "270 Nm", profileId: "phev-240-compass" }
    ],
  
    "Jeep-Patriot-MK74 (2007-2016)-2.0": [
      { code: "ECN", hp: "156 hp", torque: "190 Nm", profileId: "ecn-patriot" }
    ],
    "Jeep-Patriot-MK74 (2007-2016)-2.4": [
      { code: "ED3", hp: "170 hp", torque: "220 Nm", profileId: "ed3-patriot" }
    ],
    "Jeep-Patriot-MK74 (2007-2016)-2.0 CRD": [
      { code: "ECD", hp: "140 hp", torque: "310 Nm", profileId: "ecd-vw-tdi-patriot" }
    ],
    "Jeep-Patriot-MK74 (2007-2016)-2.2 CRD": [
      { code: "ENE", hp: "163 hp", torque: "320 Nm", profileId: "ene-om651-patriot" }
    ],
  
    "Jeep-Renegade-BU (2014-present)-1.6 E-Torq": [
      { code: "EJH", hp: "110 hp", torque: "152 Nm", profileId: "ejh-etorq-renegade" }
    ],
    "Jeep-Renegade-BU (2014-present)-1.4 MultiAir": [
      { code: "EAM", hp: "140 hp", torque: "230 Nm", profileId: "eam-renegade-140" },
      { code: "EAM", hp: "170 hp", torque: "250 Nm", profileId: "eam-renegade-170" }
    ],
    "Jeep-Renegade-BU (2014-present)-1.0 Turbo": [
      { code: "GSE T3", hp: "120 hp", torque: "190 Nm", profileId: "gse-t3-renegade" }
    ],
    "Jeep-Renegade-BU (2014-present)-1.3 Turbo": [
      { code: "GSE T4", hp: "150 hp", torque: "270 Nm", profileId: "gse-t4-renegade-150" },
      { code: "GSE T4", hp: "180 hp", torque: "270 Nm", profileId: "gse-t4-renegade-180" }
    ],
    "Jeep-Renegade-BU (2014-present)-1.6 MultiJet": [
      { code: "EJG", hp: "120 hp", torque: "320 Nm", profileId: "ejg-renegade" }
    ],
    "Jeep-Renegade-BU (2014-present)-2.0 MultiJet": [
      { code: "EBT", hp: "140 hp", torque: "350 Nm", profileId: "ebt-renegade-140" },
      { code: "EBT", hp: "170 hp", torque: "350 Nm", profileId: "ebt-renegade-170" }
    ],
    "Jeep-Renegade-BU (2014-present)-1.3 4xe PHEV": [
      { code: "GSE T4", hp: "190 hp", torque: "270 Nm", profileId: "phev-190-renegade" },
      { code: "GSE T4", hp: "240 hp", torque: "270 Nm", profileId: "phev-240-renegade" }
    ],
  
    "Jeep-Avenger-Gen 1 (2023-present)-1.2 Turbo": [
      { code: "EB2 ADTD", hp: "100 hp", torque: "205 Nm", profileId: "eb2-puretech-avenger" } // PSA
    ],
    "Jeep-Avenger-Gen 1 (2023-present)-1.2 e-Hybrid": [
      { code: "EB2 LTY", hp: "100 hp", torque: "205 Nm", profileId: "eb2-e-hybrid-avenger" } // 48V MHEV
    ]
  };