export const mitsubishiEngineCodes = {
    // ===========================================================================
    // COMPACT & CITY CARS (Colt, Lancer, Space Star)
    // ===========================================================================
    "Mitsubishi-Colt-Gen 4 (CA) (1991-1996)-1.3 12v": [
      { code: "4G13", hp: "75 hp", torque: "108 Nm", profileId: "4g13-colt-ca" }
    ],
    "Mitsubishi-Colt-Gen 4 (CA) (1991-1996)-1.6 16v": [
      { code: "4G92", hp: "113 hp", torque: "137 Nm", profileId: "4g92-colt-ca" }
    ],
    "Mitsubishi-Colt-Gen 4 (CA) (1991-1996)-1.8 GTi": [
      { code: "4G93", hp: "140 hp", torque: "167 Nm", profileId: "4g93-colt-ca-gti" } // DOHC
    ],
  
    "Mitsubishi-Colt-Gen 5 (CJ) (1996-2003)-1.3 12v": [
      { code: "4G13", hp: "75 hp", torque: "108 Nm", profileId: "4g13-colt-cj-75" },
      { code: "4G13", hp: "82 hp", torque: "120 Nm", profileId: "4g13-colt-cj-82" } // 16v later
    ],
    "Mitsubishi-Colt-Gen 5 (CJ) (1996-2003)-1.6 16v": [
      { code: "4G92", hp: "90 hp", torque: "133 Nm", profileId: "4g92-colt-cj-90" },
      { code: "4G92", hp: "103 hp", torque: "141 Nm", profileId: "4g92-colt-cj-103" }
    ],
  
    "Mitsubishi-Colt-Gen 6 (Z30) (2002-2012)-1.1": [
      { code: "3A91", hp: "75 hp", torque: "100 Nm", profileId: "3a91-colt-z30" } // 3-cyl
    ],
    "Mitsubishi-Colt-Gen 6 (Z30) (2002-2012)-1.3": [
      { code: "4A90", hp: "95 hp", torque: "125 Nm", profileId: "4a90-colt-z30" }
    ],
    "Mitsubishi-Colt-Gen 6 (Z30) (2002-2012)-1.5": [
      { code: "4A91", hp: "109 hp", torque: "145 Nm", profileId: "4a91-colt-z30" }
    ],
    "Mitsubishi-Colt-Gen 6 (Z30) (2002-2012)-1.5 Turbo (CZT/Ralliart)": [
      { code: "4G15T", hp: "150 hp", torque: "210 Nm", profileId: "4g15t-colt-czt" }
    ],
    "Mitsubishi-Colt-Gen 6 (Z30) (2002-2012)-1.5 DI-D": [
      { code: "OM639", hp: "68 hp", torque: "160 Nm", profileId: "om639-68-colt" }, // Mercedes
      { code: "OM639", hp: "95 hp", torque: "210 Nm", profileId: "om639-95-colt" }
    ],
  
    "Mitsubishi-Colt-Gen 7 (2023-present)-1.0": [
      { code: "H4D", hp: "67 hp", torque: "95 Nm", profileId: "h4d-colt-gen7" } // Renault SCe 65
    ],
    "Mitsubishi-Colt-Gen 7 (2023-present)-1.0 Turbo": [
      { code: "H4Dt", hp: "91 hp", torque: "160 Nm", profileId: "h4dt-colt-gen7" } // Renault TCe 90
    ],
    "Mitsubishi-Colt-Gen 7 (2023-present)-1.6 Hybrid": [
      { code: "H4M", hp: "143 hp", torque: "148 Nm", profileId: "h4m-colt-gen7-hybrid" } // Renault E-Tech
    ],
  
    "Mitsubishi-Lancer-Gen 6 (CK/CP) (1995-2000)-1.3": [
      { code: "4G13", hp: "75 hp", torque: "108 Nm", profileId: "4g13-lancer-ck" }
    ],
    "Mitsubishi-Lancer-Gen 6 (CK/CP) (1995-2000)-1.6": [
      { code: "4G92", hp: "90 hp", torque: "133 Nm", profileId: "4g92-lancer-ck" }
    ],
    "Mitsubishi-Lancer-Gen 6 (CK/CP) (1995-2000)-2.0 Evo IV-VI": [
      { code: "4G63T", hp: "280 hp", torque: "353 Nm", profileId: "4g63t-evo-iv-vi" }
    ],
  
    "Mitsubishi-Lancer-Gen 7 (CS) (2000-2007)-1.3": [
      { code: "4G13", hp: "82 hp", torque: "120 Nm", profileId: "4g13-lancer-cs" }
    ],
    "Mitsubishi-Lancer-Gen 7 (CS) (2000-2007)-1.6": [
      { code: "4G18", hp: "98 hp", torque: "150 Nm", profileId: "4g18-lancer-cs" } // The most common
    ],
    "Mitsubishi-Lancer-Gen 7 (CS) (2000-2007)-2.0": [
      { code: "4G63", hp: "135 hp", torque: "176 Nm", profileId: "4g63-lancer-cs" } // NA 4G63
    ],
    "Mitsubishi-Lancer-Gen 7 (CS) (2000-2007)-2.0 Evo VII-IX": [
      { code: "4G63T", hp: "280 hp", torque: "383 Nm", profileId: "4g63t-evo-vii" }, // Evo VII
      { code: "4G63T", hp: "265 hp", torque: "355 Nm", profileId: "4g63t-evo-viii-265" }, // Evo VIII
      { code: "4G63T", hp: "280 hp", torque: "400 Nm", profileId: "4g63t-evo-ix" } // Evo IX MIVEC
    ],
  
    "Mitsubishi-Lancer-Gen 8 (CY/CZ) (2007-2017)-1.5": [
      { code: "4A91", hp: "109 hp", torque: "143 Nm", profileId: "4a91-lancer-cy" }
    ],
    "Mitsubishi-Lancer-Gen 8 (CY/CZ) (2007-2017)-1.6 MIVEC": [
      { code: "4A92", hp: "117 hp", torque: "154 Nm", profileId: "4a92-lancer-cy" }
    ],
    "Mitsubishi-Lancer-Gen 8 (CY/CZ) (2007-2017)-1.8 MIVEC": [
      { code: "4B10", hp: "143 hp", torque: "178 Nm", profileId: "4b10-lancer-cy" }
    ],
    "Mitsubishi-Lancer-Gen 8 (CY/CZ) (2007-2017)-2.0 Evo X": [
      { code: "4B11T", hp: "295 hp", torque: "366 Nm", profileId: "4b11t-evo-x" } // Aluminum block
    ],
    "Mitsubishi-Lancer-Gen 8 (CY/CZ) (2007-2017)-2.0 Di-D": [
      { code: "BWC", hp: "140 hp", torque: "310 Nm", profileId: "bwc-lancer-cy" } // VW 2.0 PD TDI
    ],
    "Mitsubishi-Lancer-Gen 8 (CY/CZ) (2007-2017)-1.8 Di-D MIVEC": [
      { code: "4N13", hp: "150 hp", torque: "300 Nm", profileId: "4n13-lancer-cy" } // Mitsubishi Diesel
    ],
  
    "Mitsubishi-Space Star-DG0 (1998-2005)-1.3": [
      { code: "4G13", hp: "82 hp", torque: "120 Nm", profileId: "4g13-space-star" },
      { code: "4G13", hp: "86 hp", torque: "117 Nm", profileId: "4g13-space-star-86" }
    ],
    "Mitsubishi-Space Star-DG0 (1998-2005)-1.6": [
      { code: "4G18", hp: "98 hp", torque: "150 Nm", profileId: "4g18-space-star" }
    ],
    "Mitsubishi-Space Star-DG0 (1998-2005)-1.8 GDI": [
      { code: "4G93", hp: "122 hp", torque: "174 Nm", profileId: "4g93-gdi-space-star" }
    ],
    "Mitsubishi-Space Star-DG0 (1998-2005)-1.9 DI-D": [
      { code: "F9Q", hp: "102 hp", torque: "215 Nm", profileId: "f9q-102-space-star" }, // Renault
      { code: "F9Q", hp: "115 hp", torque: "265 Nm", profileId: "f9q-115-space-star" }
    ],
  
    "Mitsubishi-Space Star-A00 (Mirage) (2012-present)-1.0": [
      { code: "3A90", hp: "71 hp", torque: "88 Nm", profileId: "3a90-mirage" }
    ],
    "Mitsubishi-Space Star-A00 (Mirage) (2012-present)-1.2": [
      { code: "3A92", hp: "80 hp", torque: "106 Nm", profileId: "3a92-mirage" }
    ],
  
    "Mitsubishi-Carisma-DA (1995-2004)-1.6": [
      { code: "4G92", hp: "90 hp", torque: "137 Nm", profileId: "4g92-carisma-90" },
      { code: "4G92", hp: "99 hp", torque: "137 Nm", profileId: "4g92-carisma-99" },
      { code: "4G92", hp: "103 hp", torque: "141 Nm", profileId: "4g92-carisma-103" }
    ],
    "Mitsubishi-Carisma-DA (1995-2004)-1.8": [
      { code: "4G93", hp: "115 hp", torque: "162 Nm", profileId: "4g93-carisma" } // MPI
    ],
    "Mitsubishi-Carisma-DA (1995-2004)-1.8 GDI": [
      { code: "4G93", hp: "122 hp", torque: "174 Nm", profileId: "4g93-gdi-carisma" },
      { code: "4G93", hp: "125 hp", torque: "174 Nm", profileId: "4g93-gdi-carisma-125" }
    ],
    "Mitsubishi-Carisma-DA (1995-2004)-1.9 TD": [
      { code: "F8Q", hp: "90 hp", torque: "176 Nm", profileId: "f8q-carisma" } // Renault
    ],
    "Mitsubishi-Carisma-DA (1995-2004)-1.9 DI-D": [
      { code: "F9Q", hp: "102 hp", torque: "215 Nm", profileId: "f9q-102-carisma" }, // Common Rail
      { code: "F9Q", hp: "115 hp", torque: "265 Nm", profileId: "f9q-115-carisma" }
    ],
  
    // ===========================================================================
    // SEDANS & SPORTS (Galant, 3000GT, Eclipse, Sigma)
    // ===========================================================================
    "Mitsubishi-Galant-Gen 6 (E30) (1987-1993)-1.8": [
      { code: "4G37", hp: "86 hp", torque: "138 Nm", profileId: "4g37-galant-e30" } // Carb or MPI
    ],
    "Mitsubishi-Galant-Gen 6 (E30) (1987-1993)-2.0": [
      { code: "4G63", hp: "109 hp", torque: "159 Nm", profileId: "4g63-sohc-galant-e30" }
    ],
    "Mitsubishi-Galant-Gen 6 (E30) (1987-1993)-2.0 GTi-16v": [
      { code: "4G63", hp: "144 hp", torque: "170 Nm", profileId: "4g63-dohc-galant-e30" }
    ],
    "Mitsubishi-Galant-Gen 6 (E30) (1987-1993)-2.0 VR-4 Turbo": [
      { code: "4G63T", hp: "240 hp", torque: "304 Nm", profileId: "4g63t-vr4-e30" }
    ],
    "Mitsubishi-Galant-Gen 6 (E30) (1987-1993)-1.8 TD": [
      { code: "4D65", hp: "75 hp", torque: "152 Nm", profileId: "4d65-galant-e30" }
    ],
  
    "Mitsubishi-Galant-Gen 7 (E50) (1992-1998)-1.8": [
      { code: "4G93", hp: "116 hp", torque: "154 Nm", profileId: "4g93-galant-e50" }
    ],
    "Mitsubishi-Galant-Gen 7 (E50) (1992-1998)-2.0 V6": [
      { code: "6A12", hp: "150 hp", torque: "179 Nm", profileId: "6a12-galant-e50" } // 2.0 V6
    ],
    "Mitsubishi-Galant-Gen 7 (E50) (1992-1998)-2.5 V6": [
      { code: "6G73", hp: "170 hp", torque: "216 Nm", profileId: "6g73-galant-e50" }
    ],
    "Mitsubishi-Galant-Gen 7 (E50) (1992-1998)-2.0 TD": [
      { code: "4D68", hp: "90 hp", torque: "191 Nm", profileId: "4d68-galant-e50" }
    ],
  
    "Mitsubishi-Galant-Gen 8 (EA0) (1996-2003)-2.0": [
      { code: "4G63", hp: "136 hp", torque: "178 Nm", profileId: "4g63-galant-ea0" }
    ],
    "Mitsubishi-Galant-Gen 8 (EA0) (1996-2003)-2.4 GDI": [
      { code: "4G64", hp: "150 hp", torque: "225 Nm", profileId: "4g64-gdi-galant-ea0" }
    ],
    "Mitsubishi-Galant-Gen 8 (EA0) (1996-2003)-2.5 V6": [
      { code: "6A13", hp: "163 hp", torque: "223 Nm", profileId: "6a13-galant-ea0" }
    ],
    "Mitsubishi-Galant-Gen 8 (EA0) (1996-2003)-2.5 V6 Twin Turbo": [
      { code: "6A13TT", hp: "280 hp", torque: "363 Nm", profileId: "6a13tt-vr4-ea0" }
    ],
    "Mitsubishi-Galant-Gen 8 (EA0) (1996-2003)-2.0 TD": [
      { code: "4D68", hp: "90 hp", torque: "202 Nm", profileId: "4d68-galant-ea0" }
    ],
  
    "Mitsubishi-3000GT-Z16A (1990-2000)-3.0 V6": [
      { code: "6G72", hp: "225 hp", torque: "275 Nm", profileId: "6g72-dohc-3000gt" }
    ],
    "Mitsubishi-3000GT-Z16A (1990-2000)-3.0 V6 Twin Turbo": [
      { code: "6G72T", hp: "286 hp", torque: "407 Nm", profileId: "6g72t-3000gt-vr4" }
    ],
  
    "Mitsubishi-Eclipse-Gen 1 (1G) (1990-1994)-1.8": [
      { code: "4G37", hp: "92 hp", torque: "143 Nm", profileId: "4g37-eclipse-1g" }
    ],
    "Mitsubishi-Eclipse-Gen 1 (1G) (1990-1994)-2.0": [
      { code: "4G63", hp: "135 hp", torque: "176 Nm", profileId: "4g63-eclipse-1g" } // GS DOHC
    ],
    "Mitsubishi-Eclipse-Gen 1 (1G) (1990-1994)-2.0 Turbo": [
      { code: "4G63T", hp: "195 hp", torque: "275 Nm", profileId: "4g63t-eclipse-1g" } // GSX
    ],
  
    "Mitsubishi-Eclipse-Gen 2 (2G) (1995-1999)-2.0 (420A)": [
      { code: "420A", hp: "140 hp", torque: "176 Nm", profileId: "420a-eclipse-2g" } // Chrysler
    ],
    "Mitsubishi-Eclipse-Gen 2 (2G) (1995-1999)-2.0 Turbo (4G63)": [
      { code: "4G63T", hp: "210 hp", torque: "290 Nm", profileId: "4g63t-eclipse-2g" }
    ],
  
    "Mitsubishi-Eclipse-Gen 3 (3G) (2000-2005)-2.4": [
      { code: "4G64", hp: "150 hp", torque: "214 Nm", profileId: "4g64-eclipse-3g" }
    ],
    "Mitsubishi-Eclipse-Gen 3 (3G) (2000-2005)-3.0 V6": [
      { code: "6G72", hp: "200 hp", torque: "278 Nm", profileId: "6g72-eclipse-3g" }
    ],
  
    "Mitsubishi-Eclipse-Gen 4 (4G) (2006-2012)-2.4 MIVEC": [
      { code: "4G69", hp: "162 hp", torque: "220 Nm", profileId: "4g69-eclipse-4g" }
    ],
    "Mitsubishi-Eclipse-Gen 4 (4G) (2006-2012)-3.8 V6 MIVEC": [
      { code: "6G75", hp: "263 hp", torque: "353 Nm", profileId: "6g75-eclipse-4g" }
    ],
  
    "Mitsubishi-Sigma-F10 (1990-1996)-3.0 V6 12v": [
      { code: "6G72", hp: "177 hp", torque: "251 Nm", profileId: "6g72-sohc-sigma" }
    ],
    "Mitsubishi-Sigma-F10 (1990-1996)-3.0 V6 24v": [
      { code: "6G72", hp: "205 hp", torque: "270 Nm", profileId: "6g72-dohc-sigma" }
    ],
  
    "Mitsubishi-Starion-A180 (1982-1989)-2.0 Turbo": [
      { code: "4G63T", hp: "180 hp", torque: "290 Nm", profileId: "4g63t-starion" } // Widebody
    ],
    "Mitsubishi-Starion-A180 (1982-1989)-2.6 Turbo": [
      { code: "4G54", hp: "155 hp", torque: "285 Nm", profileId: "4g54-starion" }
    ],
  
    // ===========================================================================
    // SUV & CROSSOVER
    // ===========================================================================
    "Mitsubishi-Pajero-Gen 1 (L040) (1982-1991)-2.6": [
      { code: "4G54", hp: "103 hp", torque: "192 Nm", profileId: "4g54-pajero-l040" }
    ],
    "Mitsubishi-Pajero-Gen 1 (L040) (1982-1991)-3.0 V6": [
      { code: "6G72", hp: "141 hp", torque: "228 Nm", profileId: "6g72-pajero-l040" }
    ],
    "Mitsubishi-Pajero-Gen 1 (L040) (1982-1991)-2.5 TD": [
      { code: "4D56", hp: "84 hp", torque: "201 Nm", profileId: "4d56-84-pajero" },
      { code: "4D56", hp: "95 hp", torque: "235 Nm", profileId: "4d56-95-pajero" } // Intercooler
    ],
  
    "Mitsubishi-Pajero-Gen 2 (V20) (1991-1999)-3.0 V6": [
      { code: "6G72", hp: "150 hp", torque: "236 Nm", profileId: "6g72-12v-pajero-v20" },
      { code: "6G72", hp: "181 hp", torque: "255 Nm", profileId: "6g72-24v-pajero-v20" }
    ],
    "Mitsubishi-Pajero-Gen 2 (V20) (1991-1999)-3.5 V6": [
      { code: "6G74", hp: "208 hp", torque: "300 Nm", profileId: "6g74-dohc-pajero-v20" }
    ],
    "Mitsubishi-Pajero-Gen 2 (V20) (1991-1999)-2.5 TD": [
      { code: "4D56", hp: "99 hp", torque: "240 Nm", profileId: "4d56-99-pajero-v20" }
    ],
    "Mitsubishi-Pajero-Gen 2 (V20) (1991-1999)-2.8 TD": [
      { code: "4M40", hp: "125 hp", torque: "292 Nm", profileId: "4m40-pajero-v20" }
    ],
  
    "Mitsubishi-Pajero-Gen 3 (V60) (1999-2006)-3.5 V6 GDI": [
      { code: "6G74", hp: "202 hp", torque: "318 Nm", profileId: "6g74-gdi-pajero-v60" }
    ],
    "Mitsubishi-Pajero-Gen 3 (V60) (1999-2006)-3.2 Di-D": [
      { code: "4M41", hp: "160 hp", torque: "373 Nm", profileId: "4m41-160-pajero-v60" }
    ],
    "Mitsubishi-Pajero-Gen 3 (V60) (1999-2006)-2.5 TD": [
      { code: "4D56", hp: "115 hp", torque: "240 Nm", profileId: "4d56-115-pajero-v60" }
    ],
  
    "Mitsubishi-Pajero-Gen 4 (V80) (2006-2021)-3.0 V6": [
      { code: "6G72", hp: "178 hp", torque: "261 Nm", profileId: "6g72-pajero-v80" }
    ],
    "Mitsubishi-Pajero-Gen 4 (V80) (2006-2021)-3.8 V6 MIVEC": [
      { code: "6G75", hp: "250 hp", torque: "329 Nm", profileId: "6g75-pajero-v80" }
    ],
    "Mitsubishi-Pajero-Gen 4 (V80) (2006-2021)-3.2 Di-D": [
      { code: "4M41", hp: "160 hp", torque: "381 Nm", profileId: "4m41-160-pajero-v80" },
      { code: "4M41", hp: "200 hp", torque: "441 Nm", profileId: "4m41-200-pajero-v80" } // Updated 2009+
    ],
  
    "Mitsubishi-Pajero Sport-Gen 1 (K90) (1996-2008)-3.0 V6": [
      { code: "6G72", hp: "177 hp", torque: "255 Nm", profileId: "6g72-pajero-sport-k90" }
    ],
    "Mitsubishi-Pajero Sport-Gen 1 (K90) (1996-2008)-2.5 TD": [
      { code: "4D56", hp: "99 hp", torque: "240 Nm", profileId: "4d56-99-pajero-sport" },
      { code: "4D56", hp: "115 hp", torque: "240 Nm", profileId: "4d56-115-pajero-sport" },
      { code: "4D56", hp: "133 hp", torque: "280 Nm", profileId: "4d56-133-pajero-sport" }
    ],
  
    "Mitsubishi-Pajero Sport-Gen 2 (KH) (2008-2015)-2.5 Di-D": [
      { code: "4D56", hp: "136 hp", torque: "314 Nm", profileId: "4d56-136-pajero-sport-kh" },
      { code: "4D56", hp: "178 hp", torque: "400 Nm", profileId: "4d56-178-pajero-sport-kh" }
    ],
    "Mitsubishi-Pajero Sport-Gen 2 (KH) (2008-2015)-3.2 Di-D": [
      { code: "4M41", hp: "160 hp", torque: "343 Nm", profileId: "4m41-pajero-sport-kh" }
    ],
    "Mitsubishi-Pajero Sport-Gen 2 (KH) (2008-2015)-3.0 V6": [
      { code: "6B31", hp: "220 hp", torque: "281 Nm", profileId: "6b31-pajero-sport-kh" }
    ],
  
    "Mitsubishi-Pajero Sport-Gen 3 (KS) (2015-present)-2.4 MIVEC Diesel": [
      { code: "4N15", hp: "181 hp", torque: "430 Nm", profileId: "4n15-pajero-sport-ks" }
    ],
  
    "Mitsubishi-Pajero Pinin-H60/H70 (1999-2005)-1.8 MPI": [
      { code: "4G93", hp: "114 hp", torque: "160 Nm", profileId: "4g93-pinin-mpi" }
    ],
    "Mitsubishi-Pajero Pinin-H60/H70 (1999-2005)-1.8 GDI": [
      { code: "4G93", hp: "120 hp", torque: "174 Nm", profileId: "4g93-pinin-gdi" }
    ],
    "Mitsubishi-Pajero Pinin-H60/H70 (1999-2005)-2.0 GDI": [
      { code: "4G94", hp: "129 hp", torque: "190 Nm", profileId: "4g94-pinin-gdi" }
    ],
  
    "Mitsubishi-Outlander-Gen 1 (CU) (2001-2006)-2.0": [
      { code: "4G63", hp: "136 hp", torque: "176 Nm", profileId: "4g63-outlander-cu" }
    ],
    "Mitsubishi-Outlander-Gen 1 (CU) (2001-2006)-2.4": [
      { code: "4G69", hp: "160 hp", torque: "216 Nm", profileId: "4g69-outlander-cu" }
    ],
    "Mitsubishi-Outlander-Gen 1 (CU) (2001-2006)-2.0 Turbo": [
      { code: "4G63T", hp: "202 hp", torque: "303 Nm", profileId: "4g63t-outlander-cu" }
    ],
  
    "Mitsubishi-Outlander-Gen 2 (CW) (2006-2012)-2.0": [
      { code: "4B11", hp: "147 hp", torque: "199 Nm", profileId: "4b11-outlander-cw" }
    ],
    "Mitsubishi-Outlander-Gen 2 (CW) (2006-2012)-2.4": [
      { code: "4B12", hp: "170 hp", torque: "232 Nm", profileId: "4b12-outlander-cw" }
    ],
    "Mitsubishi-Outlander-Gen 2 (CW) (2006-2012)-3.0 V6": [
      { code: "6B31", hp: "220 hp", torque: "276 Nm", profileId: "6b31-outlander-cw" }
    ],
    "Mitsubishi-Outlander-Gen 2 (CW) (2006-2012)-2.0 Di-D": [
      { code: "BSY", hp: "140 hp", torque: "310 Nm", profileId: "bsy-outlander-cw" } // VW TDI
    ],
    "Mitsubishi-Outlander-Gen 2 (CW) (2006-2012)-2.2 Di-D (PSA)": [
      { code: "4HK", hp: "156 hp", torque: "380 Nm", profileId: "4hk-outlander-cw" } // PSA DW12
    ],
    "Mitsubishi-Outlander-Gen 2 (CW) (2006-2012)-2.2 Di-D (MIVEC)": [
      { code: "4N14", hp: "177 hp", torque: "380 Nm", profileId: "4n14-outlander-cw" } // Mitsubishi
    ],
  
    "Mitsubishi-Outlander-Gen 3 (GF/GG) (2012-2021)-2.0 MIVEC": [
      { code: "4J11", hp: "150 hp", torque: "195 Nm", profileId: "4j11-outlander-gf" }
    ],
    "Mitsubishi-Outlander-Gen 3 (GF/GG) (2012-2021)-2.2 Di-D": [
      { code: "4N14", hp: "150 hp", torque: "360 Nm", profileId: "4n14-150-outlander-gf" }
    ],
    "Mitsubishi-Outlander-Gen 3 (GF/GG) (2012-2021)-2.0 PHEV": [
      { code: "4B11", hp: "121 hp", torque: "190 Nm", profileId: "4b11-phev-outlander" } // ICE Power
    ],
    "Mitsubishi-Outlander-Gen 3 (GF/GG) (2012-2021)-2.4 PHEV": [
      { code: "4B12", hp: "135 hp", torque: "211 Nm", profileId: "4b12-phev-outlander" }
    ],
  
    "Mitsubishi-Outlander-Gen 4 (GN) (2021-present)-2.5": [
      { code: "PR25DD", hp: "181 hp", torque: "245 Nm", profileId: "pr25dd-outlander-gn" } // Nissan
    ],
    "Mitsubishi-Outlander-Gen 4 (GN) (2021-present)-2.4 PHEV": [
      { code: "4B12", hp: "131 hp", torque: "195 Nm", profileId: "4b12-phev-outlander-gn" } // ICE Power
    ],
  
    "Mitsubishi-ASX-Gen 1 (GA) (2010-2022)-1.6 MIVEC": [
      { code: "4A92", hp: "117 hp", torque: "154 Nm", profileId: "4a92-asx" }
    ],
    "Mitsubishi-ASX-Gen 1 (GA) (2010-2022)-2.0 MIVEC": [
      { code: "4B11", hp: "150 hp", torque: "197 Nm", profileId: "4b11-asx" }
    ],
    "Mitsubishi-ASX-Gen 1 (GA) (2010-2022)-1.8 Di-D MIVEC": [
      { code: "4N13", hp: "116 hp", torque: "300 Nm", profileId: "4n13-116-asx" },
      { code: "4N13", hp: "150 hp", torque: "300 Nm", profileId: "4n13-150-asx" }
    ],
    "Mitsubishi-ASX-Gen 1 (GA) (2010-2022)-1.6 Di-D": [
      { code: "DV6C", hp: "114 hp", torque: "270 Nm", profileId: "dv6c-asx" } // PSA
    ],
    "Mitsubishi-ASX-Gen 1 (GA) (2010-2022)-2.2 Di-D": [
      { code: "4N14", hp: "150 hp", torque: "360 Nm", profileId: "4n14-asx" }
    ],
  
    "Mitsubishi-ASX-Gen 2 (2023-present)-1.0 Turbo": [
      { code: "H4Dt", hp: "91 hp", torque: "160 Nm", profileId: "h4dt-asx-gen2" }
    ],
    "Mitsubishi-ASX-Gen 2 (2023-present)-1.3 Mild Hybrid": [
      { code: "H5Ht", hp: "140 hp", torque: "260 Nm", profileId: "h5ht-140-asx-gen2" },
      { code: "H5Ht", hp: "158 hp", torque: "270 Nm", profileId: "h5ht-158-asx-gen2" }
    ],
    "Mitsubishi-ASX-Gen 2 (2023-present)-1.6 Hybrid": [
      { code: "H4M", hp: "143 hp", torque: "148 Nm", profileId: "h4m-asx-hybrid" }
    ],
    "Mitsubishi-ASX-Gen 2 (2023-present)-1.6 PHEV": [
      { code: "H4M", hp: "159 hp", torque: "144 Nm", profileId: "h4m-asx-phev" }
    ],
  
    "Mitsubishi-Eclipse Cross-GK (2017-present)-1.5 Turbo": [
      { code: "4B40", hp: "163 hp", torque: "250 Nm", profileId: "4b40-eclipse-cross" }
    ],
    "Mitsubishi-Eclipse Cross-GK (2017-present)-2.2 Di-D": [
      { code: "4N14", hp: "148 hp", torque: "388 Nm", profileId: "4n14-eclipse-cross" }
    ],
    "Mitsubishi-Eclipse Cross-GK (2017-present)-2.4 PHEV": [
      { code: "4B12", hp: "98 hp", torque: "193 Nm", profileId: "4b12-eclipse-cross-phev" } // ICE Power
    ],
  
    // ===========================================================================
    // MPV & VANS
    // ===========================================================================
    "Mitsubishi-Grandis-NA (2003-2011)-2.4 MIVEC": [
      { code: "4G69", hp: "165 hp", torque: "217 Nm", profileId: "4g69-grandis" }
    ],
    "Mitsubishi-Grandis-NA (2003-2011)-2.0 Di-D": [
      { code: "BSY", hp: "136 hp", torque: "310 Nm", profileId: "bsy-grandis" }
    ],
  
    "Mitsubishi-Space Wagon-Gen 2 (UF) (1991-1998)-2.0": [
      { code: "4G63", hp: "133 hp", torque: "176 Nm", profileId: "4g63-space-wagon-uf" }
    ],
    "Mitsubishi-Space Wagon-Gen 2 (UF) (1991-1998)-2.0 TD": [
      { code: "4D68", hp: "82 hp", torque: "172 Nm", profileId: "4d68-space-wagon-uf" }
    ],
  
    "Mitsubishi-Space Wagon-Gen 3 (N50) (1998-2004)-2.4 GDI": [
      { code: "4G64", hp: "150 hp", torque: "225 Nm", profileId: "4g64-space-wagon-n50" }
    ],
    "Mitsubishi-Space Wagon-Gen 3 (N50) (1998-2004)-2.0": [
      { code: "4G63", hp: "133 hp", torque: "175 Nm", profileId: "4g63-space-wagon-n50" }
    ],
  
    "Mitsubishi-Space Runner-Gen 1 (N10) (1991-1999)-1.8": [
      { code: "4G93", hp: "122 hp", torque: "161 Nm", profileId: "4g93-space-runner-n10" }
    ],
    "Mitsubishi-Space Runner-Gen 1 (N10) (1991-1999)-2.0 TD": [
      { code: "4D68", hp: "82 hp", torque: "172 Nm", profileId: "4d68-space-runner-n10" }
    ],
    "Mitsubishi-Space Runner-Gen 2 (N50) (1999-2002)-2.0": [
      { code: "4G63", hp: "136 hp", torque: "176 Nm", profileId: "4g63-space-runner-n50" }
    ],
    "Mitsubishi-Space Runner-Gen 2 (N50) (1999-2002)-2.4 GDI": [
      { code: "4G64", hp: "150 hp", torque: "225 Nm", profileId: "4g64-space-runner-n50" }
    ],
  
    "Mitsubishi-L300-P00/P10 (1986-2013)-2.0": [
      { code: "4G63", hp: "87 hp", torque: "155 Nm", profileId: "4g63-l300-87" },
      { code: "4G63", hp: "113 hp", torque: "159 Nm", profileId: "4g63-l300-113" }
    ],
    "Mitsubishi-L300-P00/P10 (1986-2013)-2.5 Diesel": [
      { code: "4D56", hp: "69 hp", torque: "142 Nm", profileId: "4d56-l300-na" }
    ],
    "Mitsubishi-L300-P00/P10 (1986-2013)-2.5 Turbo Diesel": [
      { code: "4D56T", hp: "87 hp", torque: "201 Nm", profileId: "4d56t-l300" }
    ],
  
    "Mitsubishi-L400-PA/PB/PC (1994-2007)-2.0": [
      { code: "4G63", hp: "113 hp", torque: "165 Nm", profileId: "4g63-l400" }
    ],
    "Mitsubishi-L400-PA/PB/PC (1994-2007)-2.4": [
      { code: "4G64", hp: "132 hp", torque: "192 Nm", profileId: "4g64-l400" }
    ],
    "Mitsubishi-L400-PA/PB/PC (1994-2007)-2.5 TD": [
      { code: "4D56T", hp: "87 hp", torque: "196 Nm", profileId: "4d56t-87-l400" },
      { code: "4D56T", hp: "99 hp", torque: "240 Nm", profileId: "4d56t-99-l400" }
    ],
    "Mitsubishi-L400-PA/PB/PC (1994-2007)-2.8 TD": [
      { code: "4M40", hp: "125 hp", torque: "294 Nm", profileId: "4m40-125-l400" },
      { code: "4M40", hp: "140 hp", torque: "314 Nm", profileId: "4m40-140-l400" }
    ],
  
    // ===========================================================================
    // PICKUP (L200)
    // ===========================================================================
    "Mitsubishi-L200-Gen 3 (K70) (1996-2006)-2.5 Diesel": [
      { code: "4D56", hp: "75 hp", torque: "149 Nm", profileId: "4d56-l200-na" }
    ],
    "Mitsubishi-L200-Gen 3 (K70) (1996-2006)-2.5 TD": [
      { code: "4D56T", hp: "99 hp", torque: "240 Nm", profileId: "4d56t-99-l200" },
      { code: "4D56T", hp: "115 hp", torque: "240 Nm", profileId: "4d56t-115-l200" },
      { code: "4D56T", hp: "133 hp", torque: "280 Nm", profileId: "4d56t-133-l200" } // Rallyart Power
    ],
  
    "Mitsubishi-L200-Gen 4 (KA/KB) (2006-2015)-2.5 Di-D": [
      { code: "4D56", hp: "136 hp", torque: "314 Nm", profileId: "4d56-136-l200-ka" },
      { code: "4D56", hp: "178 hp", torque: "400 Nm", profileId: "4d56-178-l200-ka" } // High Power
    ],
    "Mitsubishi-L200-Gen 4 (KA/KB) (2006-2015)-3.5 V6": [
      { code: "6G74", hp: "186 hp", torque: "303 Nm", profileId: "6g74-l200-ka" }
    ],
  
    "Mitsubishi-L200-Gen 5 (KJ/KK) (2015-2023)-2.4 Di-D MIVEC": [
      { code: "4N15", hp: "154 hp", torque: "380 Nm", profileId: "4n15-154-l200" },
      { code: "4N15", hp: "181 hp", torque: "430 Nm", profileId: "4n15-181-l200" }
    ],
  
    "Mitsubishi-L200-Gen 6 (2024-present)-2.4 Turbo Diesel": [
      { code: "4N16", hp: "150 hp", torque: "330 Nm", profileId: "4n16-150-l200-gen6" },
      { code: "4N16", hp: "184 hp", torque: "430 Nm", profileId: "4n16-184-l200-gen6" },
      { code: "4N16", hp: "204 hp", torque: "470 Nm", profileId: "4n16-204-l200-gen6" }
    ]
  };