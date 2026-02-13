export const hondaEngineCodes = {
    // =============================================================================
    // ICONS & SPORTS CARS
    // =============================================================================
  
    // --- NSX ---
    "Honda-NSX-Mk1 / Acura NSX (NA1 - NA2) (1990-2005)-3.0 V6 VTEC": [
      { code: "C30A3", hp: "255 hp", torque: "285 Nm", profileId: "c30a3-nsx-auto" }, // Auto
      { code: "C30A", hp: "274 hp", torque: "285 Nm", profileId: "c30a-nsx-man" }     // Manual
    ],
    "Honda-NSX-Mk1 / Acura NSX (NA1 - NA2) (1990-2005)-3.2 V6 VTEC": [
      { code: "C32B", hp: "280 hp", torque: "304 Nm", profileId: "c32b-nsx-jdm" },    // JDM
      { code: "C32B", hp: "294 hp", torque: "304 Nm", profileId: "c32b-nsx-eu-us" }   // Export
    ],
    "Honda-NSX-Mk1 / Acura NSX (NA1 - NA2) (1990-2005)-3.2 V6 Type R": [
      { code: "C32B", hp: "280 hp", torque: "304 Nm", profileId: "c32b-nsx-r" }       // Blueprinted
    ],
    "Honda-NSX-Mk1 / Acura NSX (NA1 - NA2) (1990-2005)-3.2 V6 Type S": [
      { code: "C32B", hp: "280 hp", torque: "304 Nm", profileId: "c32b-nsx-s" }
    ],
    "Honda-NSX-Mk2 (NC1) (2016-2022)-3.5 V6 Twin-Turbo Hybrid": [
      { code: "JNC1", hp: "581 hp", torque: "646 Nm", profileId: "jnc1-nsx" }
    ],
    "Honda-NSX-Mk2 (NC1) (2016-2022)-3.5 V6 Twin-Turbo Hybrid Type S": [
      { code: "JNC1", hp: "608 hp", torque: "667 Nm", profileId: "jnc1-nsx-s" }
    ],
  
    // --- S2000 ---
    "Honda-S2000-Mk1 (AP1) (1999-2003)-2.0 VTEC": [
      { code: "F20C", hp: "240 hp", torque: "208 Nm", profileId: "f20c-s2000-eu" }, // EU/US
      { code: "F20C", hp: "250 hp", torque: "218 Nm", profileId: "f20c-s2000-jdm" }  // JDM
    ],
    "Honda-S2000-Mk2 (AP2) (2004-2009)-2.0 VTEC": [
      { code: "F20C", hp: "240 hp", torque: "208 Nm", profileId: "f20c-s2000-ap2" }  // EU/JDM
    ],
    "Honda-S2000-Mk2 (AP2) (2004-2009)-2.2 VTEC": [
      { code: "F22C1", hp: "240 hp", torque: "220 Nm", profileId: "f22c1-s2000" }    // US/JDM
    ],
    "Honda-S2000-Mk2 (AP2) (2004-2009)-2.2 VTEC CR": [
      { code: "F22C1", hp: "240 hp", torque: "220 Nm", profileId: "f22c1-s2000-cr" }
    ],
  
    // --- Integra ---
    "Honda-Integra-Mk1 (DA1 - DA3) (1985-1989)-1.5": [
      { code: "EW5", hp: "86 hp", torque: "126 Nm", profileId: "ew5-integra" }
    ],
    "Honda-Integra-Mk1 (DA1 - DA3) (1985-1989)-1.6": [
      { code: "ZC", hp: "113 hp", torque: "135 Nm", profileId: "zc-sohc-integra" }
    ],
    "Honda-Integra-Mk1 (DA1 - DA3) (1985-1989)-1.6 DOHC": [
      { code: "D16A1", hp: "118 hp", torque: "140 Nm", profileId: "d16a1-integra" }
    ],
    "Honda-Integra-Mk2 (DA5 - DA9) (1989-1993)-1.6 SOHC Dual Carb": [
      { code: "ZC", hp: "105 hp", torque: "135 Nm", profileId: "zc-carb-integra" }
    ],
    "Honda-Integra-Mk2 (DA5 - DA9) (1989-1993)-1.6 SOHC PGM-FI": [
      { code: "ZC", hp: "120 hp", torque: "142 Nm", profileId: "zc-fi-integra" }
    ],
    "Honda-Integra-Mk2 (DA5 - DA9) (1989-1993)-1.7 VTEC": [
      { code: "B17A1", hp: "160 hp", torque: "159 Nm", profileId: "b17a1-integra-gsr" }
    ],
    "Honda-Integra-Mk2 (DA5 - DA9) (1989-1993)-1.8 DOHC": [
      { code: "B18A1", hp: "130 hp", torque: "164 Nm", profileId: "b18a1-integra-90" },
      { code: "B18A1", hp: "140 hp", torque: "174 Nm", profileId: "b18a1-integra-92" }
    ],
    "Honda-Integra-Mk3 (DC1 - DC2 - DC4) (1993-2001)-1.6 SOHC": [
      { code: "ZC", hp: "105 hp", torque: "135 Nm", profileId: "zc-dc1-105" },
      { code: "ZC", hp: "120 hp", torque: "144 Nm", profileId: "zc-dc1-120" }
    ],
    "Honda-Integra-Mk3 (DC1 - DC2 - DC4) (1993-2001)-1.8 DOHC": [
      { code: "B18B1", hp: "142 hp", torque: "172 Nm", profileId: "b18b1-integra" }
    ],
    "Honda-Integra-Mk3 (DC1 - DC2 - DC4) (1993-2001)-1.8 VTEC SiR": [
      { code: "B18C", hp: "180 hp", torque: "174 Nm", profileId: "b18c-sir-g" }
    ],
    "Honda-Integra-Mk3 (DC1 - DC2 - DC4) (1993-2001)-1.8 VTEC Type R": [
      { code: "B18C6", hp: "190 hp", torque: "178 Nm", profileId: "b18c6-itr-eu" },  // EU
      { code: "B18C", hp: "200 hp", torque: "181 Nm", profileId: "b18c-itr-jdm" }    // JDM 96/98 Spec
    ],
    "Honda-Integra-Mk4 / Acura RSX (DC5) (2001-2006)-2.0 i-VTEC": [
      { code: "K20A3", hp: "160 hp", torque: "191 Nm", profileId: "k20a3-integra-base" }
    ],
    "Honda-Integra-Mk4 / Acura RSX (DC5) (2001-2006)-2.0 i-VTEC Type S": [
      { code: "K20A2", hp: "200 hp", torque: "193 Nm", profileId: "k20a2-rsx-s" }, // Pre-facelift
      { code: "K20Z1", hp: "210 hp", torque: "194 Nm", profileId: "k20z1-rsx-s" } // Facelift
    ],
    "Honda-Integra-Mk4 / Acura RSX (DC5) (2001-2006)-2.0 i-VTEC Type R": [
      { code: "K20A", hp: "220 hp", torque: "206 Nm", profileId: "k20a-itr-dc5" }
    ],
    "Honda-Integra-Mk5 (DE) (2022-present)-1.5 Turbo": [
      { code: "L15CA", hp: "203 hp", torque: "260 Nm", profileId: "l15ca-integra" }
    ],
    "Honda-Integra-Mk5 (DE) (2022-present)-2.0 Type S": [
      { code: "K20C1", hp: "324 hp", torque: "420 Nm", profileId: "k20c1-integra-s" }
    ],
  
    // --- Prelude ---
    "Honda-Prelude-Mk1 (SN) (1978-1982)-1.6": [
      { code: "EL", hp: "80 hp", torque: "125 Nm", profileId: "el-prelude" }
    ],
    "Honda-Prelude-Mk1 (SN) (1978-1982)-1.8": [
      { code: "EK", hp: "90 hp", torque: "135 Nm", profileId: "ek-prelude" }
    ],
    "Honda-Prelude-Mk2 (AB - BA) (1982-1987)-1.8 Dual Carb": [
      { code: "AB", hp: "105 hp", torque: "153 Nm", profileId: "ab-prelude" }, // ET/A18A
      { code: "A18A", hp: "105 hp", torque: "153 Nm", profileId: "a18a-prelude" }
    ],
    "Honda-Prelude-Mk2 (AB - BA) (1982-1987)-2.0i DOHC 16V": [
      { code: "B20A1", hp: "137 hp", torque: "172 Nm", profileId: "b20a1-prelude" }
    ],
    "Honda-Prelude-Mk2 (AB - BA) (1982-1987)-2.0i SOHC 12V": [
      { code: "A20A3", hp: "110 hp", torque: "152 Nm", profileId: "a20a3-prelude" }
    ],
    "Honda-Prelude-Mk3 (BA3 - BA5) (1987-1991)-2.0 Dual Carb": [
      { code: "B20A3", hp: "109 hp", torque: "150 Nm", profileId: "b20a3-prelude" },
      { code: "B20A4", hp: "114 hp", torque: "157 Nm", profileId: "b20a4-prelude" }
    ],
    "Honda-Prelude-Mk3 (BA3 - BA5) (1987-1991)-2.0i 16V": [
      { code: "B20A5", hp: "137 hp", torque: "175 Nm", profileId: "b20a5-prelude" }, // 135-137hp
      { code: "B20A7", hp: "150 hp", torque: "180 Nm", profileId: "b20a7-prelude" }, // EU high output
      { code: "B20A9", hp: "140 hp", torque: "175 Nm", profileId: "b20a9-prelude" }  // Facelift
    ],
    "Honda-Prelude-Mk3 (BA3 - BA5) (1987-1991)-2.1i": [
      { code: "B21A1", hp: "140 hp", torque: "183 Nm", profileId: "b21a1-prelude" }
    ],
    "Honda-Prelude-Mk4 (BA8 - BB4) (1991-1996)-2.0i": [
      { code: "F20A4", hp: "133 hp", torque: "179 Nm", profileId: "f20a4-prelude" }
    ],
    "Honda-Prelude-Mk4 (BA8 - BB4) (1991-1996)-2.2i VTEC": [
      { code: "H22A2", hp: "185 hp", torque: "212 Nm", profileId: "h22a2-prelude" }, // EU
      { code: "H22A1", hp: "190 hp", torque: "214 Nm", profileId: "h22a1-prelude" }, // US
      { code: "H22A", hp: "200 hp", torque: "218 Nm", profileId: "h22a-prelude-jdm" } // JDM
    ],
    "Honda-Prelude-Mk4 (BA8 - BB4) (1991-1996)-2.3i": [
      { code: "H23A1", hp: "160 hp", torque: "209 Nm", profileId: "h23a1-prelude" }, // US/EU
      { code: "H23A2", hp: "160 hp", torque: "209 Nm", profileId: "h23a2-prelude" }
    ],
    "Honda-Prelude-Mk5 (BB5 - BB9) (1996-2001)-2.0i": [
      { code: "F20A4", hp: "133 hp", torque: "179 Nm", profileId: "f20a4-prelude-mk5" }
    ],
    "Honda-Prelude-Mk5 (BB5 - BB9) (1996-2001)-2.2 VTi": [
      { code: "H22A5", hp: "185 hp", torque: "206 Nm", profileId: "h22a5-prelude" }, // 4WS
      { code: "H22A8", hp: "200 hp", torque: "212 Nm", profileId: "h22a8-prelude" }  // Red Top
    ],
    "Honda-Prelude-Mk5 (BB5 - BB9) (1996-2001)-2.2 Type S": [
      { code: "H22A", hp: "220 hp", torque: "221 Nm", profileId: "h22a-types-prelude" }
    ],
  
    // --- CR-X ---
    "Honda-CR-X-Mk1 (AF - AS) (1983-1987)-1.3": [
      { code: "EV1", hp: "60 hp", torque: "99 Nm", profileId: "ev1-crx" }
    ],
    "Honda-CR-X-Mk1 (AF - AS) (1983-1987)-1.5i": [
      { code: "EW3", hp: "100 hp", torque: "130 Nm", profileId: "ew3-crx" } // Si
    ],
    "Honda-CR-X-Mk1 (AF - AS) (1983-1987)-1.6i 16V": [
      { code: "ZC1", hp: "125 hp", torque: "140 Nm", profileId: "zc1-crx" } // Browntop
    ],
    "Honda-CR-X-Mk1 (AF - AS) (1983-1987)-1.6 Si": [
      { code: "ZC1", hp: "135 hp", torque: "152 Nm", profileId: "zc1-crx-si" }
    ],
    "Honda-CR-X-Mk2 (ED - EE) (1987-1991)-1.4 Dual Carb": [
      { code: "D14A1", hp: "90 hp", torque: "112 Nm", profileId: "d14a1-crx" }
    ],
    "Honda-CR-X-Mk2 (ED - EE) (1987-1991)-1.5 Dual Carb": [
      { code: "D15B2", hp: "90 hp", torque: "119 Nm", profileId: "d15b2-crx" }, // DX
      { code: "D15B6", hp: "62 hp", torque: "112 Nm", profileId: "d15b6-crx-hf" } // HF (High Efficiency)
    ],
    "Honda-CR-X-Mk2 (ED - EE) (1987-1991)-1.6i 16V": [
      { code: "D16A9", hp: "130 hp", torque: "143 Nm", profileId: "d16a9-crx" }, // Non-Cat
      { code: "D16Z5", hp: "124 hp", torque: "140 Nm", profileId: "d16z5-crx" }  // Cat
    ],
    "Honda-CR-X-Mk2 (ED - EE) (1987-1991)-1.6i VTEC": [
      { code: "B16A1", hp: "150 hp", torque: "144 Nm", profileId: "b16a1-crx-vt" }
    ],
    "Honda-CR-X-Mk2 (ED - EE) (1987-1991)-1.6 SiR": [
      { code: "B16A", hp: "160 hp", torque: "152 Nm", profileId: "b16a-crx-sir" }
    ],
    "Honda-CR-X-Mk3 del Sol (EG - EH) (1992-1998)-1.5 VXi": [
      { code: "D15B", hp: "102 hp", torque: "133 Nm", profileId: "d15b-delsol" } // JDM VTEC-E / 16V
    ],
    "Honda-CR-X-Mk3 del Sol (EG - EH) (1992-1998)-1.6 ESi": [
      { code: "D16Z6", hp: "125 hp", torque: "142 Nm", profileId: "d16z6-delsol" },
      { code: "D16Y8", hp: "127 hp", torque: "145 Nm", profileId: "d16y8-delsol" } // Later models
    ],
    "Honda-CR-X-Mk3 del Sol (EG - EH) (1992-1998)-1.6 VTi": [
      { code: "B16A2", hp: "160 hp", torque: "150 Nm", profileId: "b16a2-delsol" }
    ],
    "Honda-CR-X-Mk3 del Sol (EG - EH) (1992-1998)-1.6 SiR": [
      { code: "B16A", hp: "170 hp", torque: "157 Nm", profileId: "b16a-delsol-sir" }
    ],
  
    // --- CR-Z ---
    "Honda-CR-Z-Mk1 (ZF1) (2010-2012)-1.5 IMA Hybrid": [
      { code: "LEA1", hp: "124 hp", torque: "174 Nm", profileId: "lea1-crz" }
    ],
    "Honda-CR-Z-Mk1 Facelift (ZF2) (2012-2016)-1.5 IMA Hybrid": [
      { code: "LEA3", hp: "137 hp", torque: "190 Nm", profileId: "lea3-crz" }
    ],
  
    // =============================================================================
    // PASSENGER CARS (CORE MODELS)
    // =============================================================================
  
    // --- Civic ---
    "Honda-Civic-Gen 1 (SB) (1972-1979)-1.2": [
      { code: "EB1", hp: "50 hp", torque: "80 Nm", profileId: "eb1-civic" },
      { code: "EB2", hp: "54 hp", torque: "82 Nm", profileId: "eb2-civic" }
    ],
    "Honda-Civic-Gen 1 (SB) (1972-1979)-1.5 CVCC": [
      { code: "ED1", hp: "53 hp", torque: "92 Nm", profileId: "ed1-civic" }, // Early
      { code: "ED3", hp: "60 hp", torque: "100 Nm", profileId: "ed3-civic" } // Late
    ],
    "Honda-Civic-Gen 1 (SB) (1972-1979)-1.2 RS": [
      { code: "EB3", hp: "75 hp", torque: "101 Nm", profileId: "eb3-civic-rs" }
    ],
    "Honda-Civic-Gen 2 (SL - SS) (1979-1983)-1.3": [
      { code: "EN1", hp: "60 hp", torque: "94 Nm", profileId: "en1-civic" },
      { code: "EN4", hp: "60 hp", torque: "94 Nm", profileId: "en4-civic" }
    ],
    "Honda-Civic-Gen 2 (SL - SS) (1979-1983)-1.5": [
      { code: "EM1", hp: "70 hp", torque: "108 Nm", profileId: "em1-civic" } // Non-CVCC
    ],
    "Honda-Civic-Gen 2 (SL - SS) (1979-1983)-1.5 CVCC": [
      { code: "EJ1", hp: "67 hp", torque: "104 Nm", profileId: "ej1-civic" }
    ],
    "Honda-Civic-Gen 3 (AG - AH) (1983-1987)-1.2": [
      { code: "ZA1", hp: "54 hp", torque: "88 Nm", profileId: "za1-civic" }
    ],
    "Honda-Civic-Gen 3 (AG - AH) (1983-1987)-1.3": [
      { code: "EV1", hp: "71 hp", torque: "105 Nm", profileId: "ev1-civic" }
    ],
    "Honda-Civic-Gen 3 (AG - AH) (1983-1987)-1.5": [
      { code: "EW1", hp: "85 hp", torque: "126 Nm", profileId: "ew1-civic" }, // Carb
      { code: "EW2", hp: "85 hp", torque: "126 Nm", profileId: "ew2-civic" }  // Injection
    ],
    "Honda-Civic-Gen 3 (AG - AH) (1983-1987)-1.5i GT": [
      { code: "EW3", hp: "100 hp", torque: "130 Nm", profileId: "ew3-civic-gt" } // Si
    ],
    "Honda-Civic-Gen 3 (AG - AH) (1983-1987)-1.6i 16V": [
      { code: "ZC1", hp: "135 hp", torque: "152 Nm", profileId: "zc1-civic-si" } // JDM/EU Si
    ],
    "Honda-Civic-Gen 4 (EC - EE) (1987-1991)-1.3": [
      { code: "D13B1", hp: "75 hp", torque: "102 Nm", profileId: "d13b1-civic" }
    ],
    "Honda-Civic-Gen 4 (EC - EE) (1987-1991)-1.4 Dual Carb": [
      { code: "D14A1", hp: "90 hp", torque: "112 Nm", profileId: "d14a1-civic" }
    ],
    "Honda-Civic-Gen 4 (EC - EE) (1987-1991)-1.5i": [
      { code: "D15B2", hp: "90 hp", torque: "119 Nm", profileId: "d15b2-civic" } // DPFI
    ],
    "Honda-Civic-Gen 4 (EC - EE) (1987-1991)-1.6i 16V": [
      { code: "D16A9", hp: "130 hp", torque: "143 Nm", profileId: "d16a9-civic" }, // No Cat
      { code: "D16Z5", hp: "124 hp", torque: "140 Nm", profileId: "d16z5-civic" }  // Cat
    ],
    "Honda-Civic-Gen 4 (EC - EE) (1987-1991)-1.6i VTEC": [
      { code: "B16A1", hp: "150 hp", torque: "144 Nm", profileId: "b16a1-civic-ee9" }
    ],
    "Honda-Civic-Gen 4 (EC - EE) (1987-1991)-1.6 SiR": [
      { code: "B16A", hp: "160 hp", torque: "152 Nm", profileId: "b16a-civic-ef9" }
    ],
    "Honda-Civic-Gen 5 (EG - EH) (1991-1995)-1.3": [
      { code: "D13B2", hp: "75 hp", torque: "102 Nm", profileId: "d13b2-civic" }
    ],
    "Honda-Civic-Gen 5 (EG - EH) (1991-1995)-1.5 LSi": [
      { code: "D15B2", hp: "90 hp", torque: "119 Nm", profileId: "d15b2-civic-lsi" }, // DPFI
      { code: "D15B7", hp: "102 hp", torque: "133 Nm", profileId: "d15b7-civic-dx" }  // MPFI (US)
    ],
    "Honda-Civic-Gen 5 (EG - EH) (1991-1995)-1.5 VEi": [
      { code: "D15Z1", hp: "90 hp", torque: "129 Nm", profileId: "d15z1-civic-vei" } // VTEC-E
    ],
    "Honda-Civic-Gen 5 (EG - EH) (1991-1995)-1.6 ESi": [
      { code: "D16Z6", hp: "125 hp", torque: "142 Nm", profileId: "d16z6-civic-esi" }
    ],
    "Honda-Civic-Gen 5 (EG - EH) (1991-1995)-1.6 VTi": [
      { code: "B16A2", hp: "160 hp", torque: "150 Nm", profileId: "b16a2-civic-vti" }
    ],
    "Honda-Civic-Gen 5 (EG - EH) (1991-1995)-1.6 SiR II": [
      { code: "B16A", hp: "170 hp", torque: "157 Nm", profileId: "b16a-civic-sir2" }
    ],
    "Honda-Civic-Gen 6 (EK - EJ - MA - MB) (1995-2000)-1.4i": [
      { code: "D14A3", hp: "75 hp", torque: "110 Nm", profileId: "d14a3-civic" }, // EJ9 restricted
      { code: "D14A2", hp: "90 hp", torque: "117 Nm", profileId: "d14a2-civic-ma" } // MA8
    ],
    "Honda-Civic-Gen 6 (EK - EJ - MA - MB) (1995-2000)-1.4i S": [
      { code: "D14A4", hp: "90 hp", torque: "110 Nm", profileId: "d14a4-civic" }, // EJ9
      { code: "D14Z2", hp: "90 hp", torque: "110 Nm", profileId: "d14z2-civic" }  // Facelift
    ],
    "Honda-Civic-Gen 6 (EK - EJ - MA - MB) (1995-2000)-1.5i LS": [
      { code: "D15Z6", hp: "114 hp", torque: "134 Nm", profileId: "d15z6-civic-ek3" } // VTEC-E
    ],
    "Honda-Civic-Gen 6 (EK - EJ - MA - MB) (1995-2000)-1.6i LS": [
      { code: "D16Y3", hp: "113 hp", torque: "140 Nm", profileId: "d16y3-civic-mb" }
    ],
    "Honda-Civic-Gen 6 (EK - EJ - MA - MB) (1995-2000)-1.6i SR": [
      { code: "D16Y8", hp: "125 hp", torque: "144 Nm", profileId: "d16y8-civic-coupe" }, // Coupe/SR
      { code: "D16Y2", hp: "126 hp", torque: "144 Nm", profileId: "d16y2-civic-mb" }
    ],
    "Honda-Civic-Gen 6 (EK - EJ - MA - MB) (1995-2000)-1.6 VTi": [
      { code: "B16A2", hp: "160 hp", torque: "150 Nm", profileId: "b16a2-civic-ek4" }
    ],
    "Honda-Civic-Gen 6 (EK - EJ - MA - MB) (1995-2000)-1.6 Type R": [
      { code: "B16B", hp: "185 hp", torque: "160 Nm", profileId: "b16b-civic-type-r" } // EK9
    ],
    "Honda-Civic-Gen 6 (EK - EJ - MA - MB) (1995-2000)-1.8 VTi": [
      { code: "B18C4", hp: "169 hp", torque: "166 Nm", profileId: "b18c4-civic-mb6" } // MB6/MC2
    ],
    "Honda-Civic-Gen 6 (EK - EJ - MA - MB) (1995-2000)-2.0i TD": [
      { code: "20T2N", hp: "86 hp", torque: "170 Nm", profileId: "20t2n-civic-diesel" }, // Rover L-Series
      { code: "20T2R", hp: "105 hp", torque: "210 Nm", profileId: "20t2r-civic-diesel" }
    ],
    "Honda-Civic-Gen 7 (EP - EU - ES) (2000-2005)-1.4i": [
      { code: "D14Z6", hp: "90 hp", torque: "130 Nm", profileId: "d14z6-civic" }
    ],
    "Honda-Civic-Gen 7 (EP - EU - ES) (2000-2005)-1.6i VTEC": [
      { code: "D16V1", hp: "110 hp", torque: "152 Nm", profileId: "d16v1-civic" }
    ],
    "Honda-Civic-Gen 7 (EP - EU - ES) (2000-2005)-1.7 CTDi": [
      { code: "4EE2", hp: "100 hp", torque: "220 Nm", profileId: "4ee2-civic-diesel" } // Isuzu Circle L
    ],
    "Honda-Civic-Gen 7 (EP - EU - ES) (2000-2005)-2.0 Type S": [
      { code: "K20A3", hp: "160 hp", torque: "191 Nm", profileId: "k20a3-civic-ev1" } // EV1 (5 door) / US Si
    ],
    "Honda-Civic-Gen 7 (EP - EU - ES) (2000-2005)-2.0 Type R": [
      { code: "K20A2", hp: "200 hp", torque: "196 Nm", profileId: "k20a2-civic-ep3" }, // EU
      { code: "K20A", hp: "215 hp", torque: "202 Nm", profileId: "k20a-civic-ep3-jdm" } // JDM
    ],
    "Honda-Civic-Gen 7 (EP - EU - ES) (2000-2005)-1.3 IMA Hybrid": [
      { code: "LDA1", hp: "90 hp", torque: "159 Nm", profileId: "lda1-civic-hybrid" }
    ],
    "Honda-Civic-Gen 8 Hatchback (FN - FK) (2005-2011)-1.4 i-DSI": [
      { code: "L13A7", hp: "83 hp", torque: "119 Nm", profileId: "l13a7-civic" }
    ],
    "Honda-Civic-Gen 8 Hatchback (FN - FK) (2005-2011)-1.4 i-VTEC": [
      { code: "L13Z1", hp: "100 hp", torque: "127 Nm", profileId: "l13z1-civic" }
    ],
    "Honda-Civic-Gen 8 Hatchback (FN - FK) (2005-2011)-1.8 i-VTEC": [
      { code: "R18A2", hp: "140 hp", torque: "174 Nm", profileId: "r18a2-civic" }
    ],
    "Honda-Civic-Gen 8 Hatchback (FN - FK) (2005-2011)-2.2 i-CTDi": [
      { code: "N22A2", hp: "140 hp", torque: "340 Nm", profileId: "n22a2-civic" }
    ],
    "Honda-Civic-Gen 8 Hatchback (FN - FK) (2005-2011)-2.0 Type R": [
      { code: "K20Z4", hp: "201 hp", torque: "193 Nm", profileId: "k20z4-civic-fn2" }
    ],
    "Honda-Civic-Gen 8 Hatchback (FN - FK) (2005-2011)-2.0 Type R Mugen": [
      { code: "K20Z4", hp: "240 hp", torque: "213 Nm", profileId: "k20z4-mugen-fn2" }
    ],
    "Honda-Civic-Gen 8 Sedan (FD - FA) (2005-2011)-1.3 Hybrid": [
      { code: "LDA2", hp: "95 hp", torque: "123 Nm", profileId: "lda2-civic-hybrid" }
    ],
    "Honda-Civic-Gen 8 Sedan (FD - FA) (2005-2011)-2.0 Si": [
      { code: "K20Z3", hp: "197 hp", torque: "188 Nm", profileId: "k20z3-civic-si" }
    ],
    "Honda-Civic-Gen 8 Sedan (FD - FA) (2005-2011)-1.6 i-VTEC": [
      { code: "R16A1", hp: "125 hp", torque: "151 Nm", profileId: "r16a1-civic" } // Singapore/Turkey
    ],
    "Honda-Civic-Gen 8 Sedan (FD - FA) (2005-2011)-1.8 i-VTEC": [
      { code: "R18A1", hp: "140 hp", torque: "174 Nm", profileId: "r18a1-civic-fd" }
    ],
    "Honda-Civic-Gen 8 Sedan (FD - FA) (2005-2011)-2.0 Type R": [
      { code: "K20A", hp: "225 hp", torque: "215 Nm", profileId: "k20a-civic-fd2" } // JDM Only
    ],
    "Honda-Civic-Gen 9 (FB - FK) (2011-2017)-1.4 i-VTEC": [
      { code: "L13Z4", hp: "100 hp", torque: "127 Nm", profileId: "l13z4-civic" }
    ],
    "Honda-Civic-Gen 9 (FB - FK) (2011-2017)-1.8 i-VTEC": [
      { code: "R18Z4", hp: "142 hp", torque: "174 Nm", profileId: "r18z4-civic" }
    ],
    "Honda-Civic-Gen 9 (FB - FK) (2011-2017)-2.4 Si": [
      { code: "K24Z7", hp: "205 hp", torque: "236 Nm", profileId: "k24z7-civic-si" }
    ],
    "Honda-Civic-Gen 9 (FB - FK) (2011-2017)-1.6 i-DTEC": [
      { code: "N16A1", hp: "120 hp", torque: "300 Nm", profileId: "n16a1-civic" }
    ],
    "Honda-Civic-Gen 9 (FB - FK) (2011-2017)-2.2 i-DTEC": [
      { code: "N22B4", hp: "150 hp", torque: "350 Nm", profileId: "n22b4-civic" }
    ],
    "Honda-Civic-Gen 9 (FB - FK) (2011-2017)-2.0 Type R Turbo": [
      { code: "K20C1", hp: "310 hp", torque: "400 Nm", profileId: "k20c1-civic-fk2" }
    ],
    "Honda-Civic-Gen 10 (FC - FK) (2017-2022)-1.0 VTEC Turbo": [
      { code: "P10A2", hp: "129 hp", torque: "200 Nm", profileId: "p10a2-civic" }
    ],
    "Honda-Civic-Gen 10 (FC - FK) (2017-2022)-1.5 VTEC Turbo": [
      { code: "L15B7", hp: "182 hp", torque: "240 Nm", profileId: "l15b7-civic" }
    ],
    "Honda-Civic-Gen 10 (FC - FK) (2017-2022)-1.6 i-DTEC": [
      { code: "N16A1", hp: "120 hp", torque: "300 Nm", profileId: "n16a1-civic-fk" }
    ],
    "Honda-Civic-Gen 10 (FC - FK) (2017-2022)-2.0 Type R": [
      { code: "K20C1", hp: "320 hp", torque: "400 Nm", profileId: "k20c1-civic-fk8" }
    ],
    "Honda-Civic-Gen 11 (FE - FL) (2022-present)-2.0 e:HEV Hybrid": [
      { code: "LFC-H4", hp: "184 hp", torque: "315 Nm", profileId: "lfc-h4-civic-ehev" }, // 2.0L Engine LFC + Motor H4
      { code: "LFA1", hp: "184 hp", torque: "315 Nm", profileId: "lfa1-civic-ehev" } // Engine Code variant
    ],
    "Honda-Civic-Gen 11 (FE - FL) (2022-present)-1.5 VTEC Turbo": [
      { code: "L15C", hp: "182 hp", torque: "240 Nm", profileId: "l15c-civic-fl1" }, // EU/JP Hatch
      { code: "L15B7", hp: "180 hp", torque: "240 Nm", profileId: "l15b7-civic-fe1" } // US Sedan
    ],
    "Honda-Civic-Gen 11 (FE - FL) (2022-present)-2.0 Type R": [
      { code: "K20C1", hp: "329 hp", torque: "420 Nm", profileId: "k20c1-civic-fl5" }
    ],
  
    // --- Accord ---
    "Honda-Accord-Gen 1 (SJ - SM) (1976-1981)-1.6": [
      { code: "EG", hp: "68 hp", torque: "115 Nm", profileId: "eg-accord" },
      { code: "EL", hp: "80 hp", torque: "126 Nm", profileId: "el-accord" }
    ],
    "Honda-Accord-Gen 1 (SJ - SM) (1976-1981)-1.8": [
      { code: "EK", hp: "95 hp", torque: "132 Nm", profileId: "ek-accord" }
    ],
    "Honda-Accord-Gen 2 (SY - SZ) (1981-1985)-1.6": [
      { code: "EL", hp: "80 hp", torque: "126 Nm", profileId: "el-accord-mk2" }
    ],
    "Honda-Accord-Gen 2 (SY - SZ) (1981-1985)-1.8": [
      { code: "EK1", hp: "97 hp", torque: "140 Nm", profileId: "ek1-accord" }
    ],
    "Honda-Accord-Gen 3 (CA) (1985-1989)-1.6": [
      { code: "A16A1", hp: "88 hp", torque: "123 Nm", profileId: "a16a1-accord" }
    ],
    "Honda-Accord-Gen 3 (CA) (1985-1989)-2.0 EX": [
      { code: "A20A1", hp: "102 hp", torque: "148 Nm", profileId: "a20a1-accord" }, // Carb
      { code: "A20A2", hp: "106 hp", torque: "153 Nm", profileId: "a20a2-accord" }
    ],
    "Honda-Accord-Gen 3 (CA) (1985-1989)-2.0i 16V": [
      { code: "B20A2", hp: "137 hp", torque: "170 Nm", profileId: "b20a2-accord" },
      { code: "B20A8", hp: "133 hp", torque: "167 Nm", profileId: "b20a8-accord" }
    ],
    "Honda-Accord-Gen 3 (CA) (1985-1989)-2.0i DOHC": [
      { code: "B20A", hp: "160 hp", torque: "186 Nm", profileId: "b20a-accord-jdm" } // JDM
    ],
    "Honda-Accord-Gen 4 (CB) (1989-1993)-2.0": [
      { code: "F20A2", hp: "110 hp", torque: "158 Nm", profileId: "f20a2-accord" }, // Carb
      { code: "F20A6", hp: "90 hp", torque: "148 Nm", profileId: "f20a6-accord" }  // Carb Cat
    ],
    "Honda-Accord-Gen 4 (CB) (1989-1993)-2.0i": [
      { code: "F20A4", hp: "133 hp", torque: "179 Nm", profileId: "f20a4-accord" }
    ],
    "Honda-Accord-Gen 4 (CB) (1989-1993)-2.2i": [
      { code: "F22A3", hp: "150 hp", torque: "198 Nm", profileId: "f22a3-accord" }
    ],
    "Honda-Accord-Gen 4 (CB) (1989-1993)-2.0i 16V 4WS": [
      { code: "F20A4", hp: "133 hp", torque: "179 Nm", profileId: "f20a4-accord-4ws" }
    ],
    "Honda-Accord-Gen 5 EU (CC - CE) (1993-1998)-2.0i": [
      { code: "F20Z1", hp: "131 hp", torque: "178 Nm", profileId: "f20z1-accord" },
      { code: "F20Z2", hp: "115 hp", torque: "172 Nm", profileId: "f20z2-accord" }
    ],
    "Honda-Accord-Gen 5 EU (CC - CE) (1993-1998)-2.0i S": [
      { code: "F20Z1", hp: "131 hp", torque: "178 Nm", profileId: "f20z1-accord-s" }
    ],
    "Honda-Accord-Gen 5 EU (CC - CE) (1993-1998)-2.2i VTEC": [
      { code: "F22Z2", hp: "150 hp", torque: "200 Nm", profileId: "f22z2-accord" }
    ],
    "Honda-Accord-Gen 5 EU (CC - CE) (1993-1998)-2.3i SR": [
      { code: "H23A3", hp: "158 hp", torque: "209 Nm", profileId: "h23a3-accord" }
    ],
    "Honda-Accord-Gen 5 EU (CC - CE) (1993-1998)-2.0 TDI": [
      { code: "20T2N", hp: "105 hp", torque: "210 Nm", profileId: "20t2n-accord" } // Rover
    ],
    "Honda-Accord-Gen 5 JP-US (CD) (1993-1997)-2.2 VTEC": [
      { code: "F22B1", hp: "145 hp", torque: "199 Nm", profileId: "f22b1-accord" }
    ],
    "Honda-Accord-Gen 5 JP-US (CD) (1993-1997)-2.2 VTEC (H22A)": [
      { code: "H22A", hp: "190 hp", torque: "206 Nm", profileId: "h22a-accord-sir" }
    ],
    "Honda-Accord-Gen 5 JP-US (CD) (1993-1997)-2.7 V6": [
      { code: "C27A4", hp: "170 hp", torque: "224 Nm", profileId: "c27a4-accord" }
    ],
    "Honda-Accord-Gen 6 (CG - CH) (1998-2002)-1.6i": [
      { code: "D16B6", hp: "116 hp", torque: "140 Nm", profileId: "d16b6-accord" }
    ],
    "Honda-Accord-Gen 6 (CG - CH) (1998-2002)-1.8i": [
      { code: "F18B2", hp: "136 hp", torque: "175 Nm", profileId: "f18b2-accord" }
    ],
    "Honda-Accord-Gen 6 (CG - CH) (1998-2002)-2.0i": [
      { code: "F20B6", hp: "147 hp", torque: "184 Nm", profileId: "f20b6-accord" }
    ],
    "Honda-Accord-Gen 6 (CG - CH) (1998-2002)-2.2 Type R": [
      { code: "H22A7", hp: "212 hp", torque: "215 Nm", profileId: "h22a7-accord-atr" }
    ],
    "Honda-Accord-Gen 6 (CG - CH) (1998-2002)-2.3i Type V": [
      { code: "F23Z5", hp: "154 hp", torque: "206 Nm", profileId: "f23z5-accord" }
    ],
    "Honda-Accord-Gen 6 (CG - CH) (1998-2002)-3.0 V6": [
      { code: "J30A1", hp: "200 hp", torque: "264 Nm", profileId: "j30a1-accord-coupe" }
    ],
    "Honda-Accord-Gen 6 (CG - CH) (1998-2002)-2.0 Turbo Diesel": [
      { code: "20T2N", hp: "105 hp", torque: "210 Nm", profileId: "20t2n-accord-td" }
    ],
    "Honda-Accord-Gen 7 / Acura TSX (CL - CN) (2002-2008)-2.0i": [
      { code: "K20A6", hp: "155 hp", torque: "190 Nm", profileId: "k20a6-accord" }
    ],
    "Honda-Accord-Gen 7 / Acura TSX (CL - CN) (2002-2008)-2.4i Type S": [
      { code: "K24A3", hp: "190 hp", torque: "223 Nm", profileId: "k24a3-accord" }
    ],
    "Honda-Accord-Gen 7 / Acura TSX (CL - CN) (2002-2008)-2.0 Euro R": [
      { code: "K20A", hp: "220 hp", torque: "206 Nm", profileId: "k20a-accord-euror" }
    ],
    "Honda-Accord-Gen 7 / Acura TSX (CL - CN) (2002-2008)-2.2 i-CTDi": [
      { code: "N22A1", hp: "140 hp", torque: "340 Nm", profileId: "n22a1-accord" }
    ],
    "Honda-Accord-Gen 7 US (CM) (2002-2007)-2.4 i-VTEC": [
      { code: "K24A4", hp: "160 hp", torque: "218 Nm", profileId: "k24a4-accord-us" }
    ],
    "Honda-Accord-Gen 7 US (CM) (2002-2007)-3.0 V6": [
      { code: "J30A4", hp: "240 hp", torque: "287 Nm", profileId: "j30a4-accord-us" }
    ],
    "Honda-Accord-Gen 7 US (CM) (2002-2007)-3.0 V6 Hybrid": [
      { code: "JNA1", hp: "255 hp", torque: "315 Nm", profileId: "jna1-accord-hybrid" }
    ],
    "Honda-Accord-Gen 8 EU (CU - CW) (2008-2015)-2.0 i-VTEC": [
      { code: "R20A3", hp: "156 hp", torque: "192 Nm", profileId: "r20a3-accord" }
    ],
    "Honda-Accord-Gen 8 EU (CU - CW) (2008-2015)-2.4 i-VTEC": [
      { code: "K24Z3", hp: "201 hp", torque: "234 Nm", profileId: "k24z3-accord" }
    ],
    "Honda-Accord-Gen 8 EU (CU - CW) (2008-2015)-2.2 i-DTEC": [
      { code: "N22B1", hp: "150 hp", torque: "350 Nm", profileId: "n22b1-accord" }
    ],
    "Honda-Accord-Gen 8 EU (CU - CW) (2008-2015)-2.2 i-DTEC Type S": [
      { code: "N22B2", hp: "180 hp", torque: "380 Nm", profileId: "n22b2-accord" }
    ],
    "Honda-Accord-Gen 8 US (CP) (2007-2012)-2.4 i-VTEC": [
      { code: "K24Z2", hp: "177 hp", torque: "224 Nm", profileId: "k24z2-accord-us" }, // LX
      { code: "K24Z3", hp: "190 hp", torque: "220 Nm", profileId: "k24z3-accord-us" }  // EX
    ],
    "Honda-Accord-Gen 8 US (CP) (2007-2012)-3.5 V6": [
      { code: "J35Z2", hp: "271 hp", torque: "344 Nm", profileId: "j35z2-accord-us" }
    ],
    "Honda-Accord-Gen 9 (CR) (2012-2017)-2.4 i-VTEC": [
      { code: "K24W1", hp: "185 hp", torque: "245 Nm", profileId: "k24w1-accord" }
    ],
    "Honda-Accord-Gen 9 (CR) (2012-2017)-3.5 V6": [
      { code: "J35Y1", hp: "278 hp", torque: "342 Nm", profileId: "j35y1-accord" }
    ],
    "Honda-Accord-Gen 9 (CR) (2012-2017)-2.0 Hybrid": [
      { code: "LFA1", hp: "196 hp", torque: "306 Nm", profileId: "lfa1-accord-hybrid" } // Combined
    ],
    "Honda-Accord-Gen 10 (CV) (2017-2022)-1.5 Turbo": [
      { code: "L15BE", hp: "192 hp", torque: "260 Nm", profileId: "l15be-accord" }
    ],
    "Honda-Accord-Gen 10 (CV) (2017-2022)-2.0 Turbo": [
      { code: "K20C4", hp: "252 hp", torque: "370 Nm", profileId: "k20c4-accord" }
    ],
    "Honda-Accord-Gen 10 (CV) (2017-2022)-2.0 Hybrid": [
      { code: "LFB1", hp: "212 hp", torque: "315 Nm", profileId: "lfb1-accord-hybrid" }
    ],
    "Honda-Accord-Gen 11 (CY) (2023-present)-1.5 Turbo": [
      { code: "L15BE", hp: "192 hp", torque: "260 Nm", profileId: "l15be-accord-cy" }
    ],
    "Honda-Accord-Gen 11 (CY) (2023-present)-2.0 Hybrid": [
      { code: "LFC2", hp: "204 hp", torque: "335 Nm", profileId: "lfc2-accord-hybrid" }
    ],
  
    // --- Jazz ---
    "Honda-Jazz-Gen 1 (GD) (2001-2008)-1.2 i-DSI": [
      { code: "L12A1", hp: "78 hp", torque: "110 Nm", profileId: "l12a1-jazz" }
    ],
    "Honda-Jazz-Gen 1 (GD) (2001-2008)-1.4 i-DSI": [
      { code: "L13A1", hp: "83 hp", torque: "119 Nm", profileId: "l13a1-jazz" } // marketed as 1.4
    ],
    "Honda-Jazz-Gen 1 (GD) (2001-2008)-1.5 VTEC": [
      { code: "L15A1", hp: "110 hp", torque: "143 Nm", profileId: "l15a1-jazz" }
    ],
    "Honda-Jazz-Gen 2 (GE) (2008-2015)-1.2 i-VTEC": [
      { code: "L12B1", hp: "90 hp", torque: "114 Nm", profileId: "l12b1-jazz" }
    ],
    "Honda-Jazz-Gen 2 (GE) (2008-2015)-1.4 i-VTEC": [
      { code: "L13Z1", hp: "100 hp", torque: "127 Nm", profileId: "l13z1-jazz" } // marketed as 1.4
    ],
    "Honda-Jazz-Gen 2 (GE) (2008-2015)-1.5 i-VTEC": [
      { code: "L15A7", hp: "120 hp", torque: "145 Nm", profileId: "l15a7-jazz" }
    ],
    "Honda-Jazz-Gen 2 (GE) (2008-2015)-1.3 Hybrid": [
      { code: "LDA3", hp: "88 hp", torque: "121 Nm", profileId: "lda3-jazz-hybrid" }
    ],
    "Honda-Jazz-Gen 3 (GK) (2015-2020)-1.3 i-VTEC": [
      { code: "L13B", hp: "102 hp", torque: "123 Nm", profileId: "l13b-jazz" }
    ],
    "Honda-Jazz-Gen 3 (GK) (2015-2020)-1.5 i-VTEC": [
      { code: "L15B3", hp: "130 hp", torque: "155 Nm", profileId: "l15b3-jazz" }
    ],
    "Honda-Jazz-Gen 4 (GR) (2020-present)-1.5 i-MMD Hybrid": [
      { code: "LEB8", hp: "109 hp", torque: "253 Nm", profileId: "leb8-jazz-hybrid" },
      { code: "LEB8", hp: "122 hp", torque: "253 Nm", profileId: "leb8-jazz-hybrid-fl" } // Facelift
    ],
  
    // --- City ---
    "Honda-City-Gen 1 (AA) (1981-1986)-1.2": [
      { code: "ER", hp: "61 hp", torque: "93 Nm", profileId: "er-city" }
    ],
    "Honda-City-Gen 1 (AA) (1981-1986)-1.2 Turbo": [
      { code: "ER-T", hp: "100 hp", torque: "147 Nm", profileId: "er-t-city-turbo" }
    ],
    "Honda-City-Gen 1 (AA) (1981-1986)-1.2 Turbo Intercooler": [
      { code: "ER-T", hp: "110 hp", torque: "160 Nm", profileId: "er-t-city-turbo2" }
    ],
    "Honda-City-Gen 2 (GA) (1986-1994)-1.2": [
      { code: "D12A", hp: "76 hp", torque: "98 Nm", profileId: "d12a-city" }
    ],
    "Honda-City-Gen 2 (GA) (1986-1994)-1.3": [
      { code: "D13C", hp: "82 hp", torque: "103 Nm", profileId: "d13c-city" }
    ],
    "Honda-City-Gen 3 (SX8) (1996-2002)-1.3": [
      { code: "D13B", hp: "95 hp", torque: "119 Nm", profileId: "d13b-city-sx8" }
    ],
    "Honda-City-Gen 3 (SX8) (1996-2002)-1.5": [
      { code: "D15B", hp: "103 hp", torque: "133 Nm", profileId: "d15b-city-sx8" }
    ],
    "Honda-City-Gen 3 (SX8) (1996-2002)-1.5 VTEC": [
      { code: "D15B", hp: "115 hp", torque: "139 Nm", profileId: "d15b-vtec-city-sx8" }
    ],
    "Honda-City-Gen 4 (GD) (2002-2008)-1.3 i-DSI": [
      { code: "L13A", hp: "82 hp", torque: "119 Nm", profileId: "l13a-city" }
    ],
    "Honda-City-Gen 4 (GD) (2002-2008)-1.5 i-DSI": [
      { code: "L15A2", hp: "88 hp", torque: "131 Nm", profileId: "l15a2-city" }
    ],
    "Honda-City-Gen 4 (GD) (2002-2008)-1.5 VTEC": [
      { code: "L15A1", hp: "110 hp", torque: "143 Nm", profileId: "l15a1-city" }
    ],
    "Honda-City-Gen 5 (GM) (2008-2014)-1.3 i-VTEC": [
      { code: "L13Z1", hp: "98 hp", torque: "127 Nm", profileId: "l13z1-city" }
    ],
    "Honda-City-Gen 5 (GM) (2008-2014)-1.5 i-VTEC": [
      { code: "L15A7", hp: "118 hp", torque: "145 Nm", profileId: "l15a7-city" }
    ],
    "Honda-City-Gen 6 (GM) (2014-2019)-1.5 i-VTEC": [
      { code: "L15Z1", hp: "118 hp", torque: "145 Nm", profileId: "l15z1-city" }
    ],
    "Honda-City-Gen 6 (GM) (2014-2019)-1.5 i-DTEC": [
      { code: "N15A1", hp: "100 hp", torque: "200 Nm", profileId: "n15a1-city" }
    ],
    "Honda-City-Gen 6 (GM) (2014-2019)-1.5 Hybrid": [
      { code: "LEB1", hp: "110 hp", torque: "134 Nm", profileId: "leb1-city-hybrid" }
    ],
    "Honda-City-Gen 7 (GN) (2019-present)-1.0 Turbo": [
      { code: "P10A2", hp: "122 hp", torque: "173 Nm", profileId: "p10a2-city" }
    ],
    "Honda-City-Gen 7 (GN) (2019-present)-1.5 i-VTEC": [
      { code: "L15Z1", hp: "121 hp", torque: "145 Nm", profileId: "l15z1-city-gn" }
    ],
    "Honda-City-Gen 7 (GN) (2019-present)-1.5 e:HEV": [
      { code: "LEB8", hp: "109 hp", torque: "253 Nm", profileId: "leb8-city-hybrid" }
    ],
  
    // --- Legend ---
    "Honda-Legend-Gen 1 (KA1 - KA6) (1985-1990)-2.0 V6": [
      { code: "C20A", hp: "145 hp", torque: "172 Nm", profileId: "c20a-legend" }
    ],
    "Honda-Legend-Gen 1 (KA1 - KA6) (1985-1990)-2.5 V6": [
      { code: "C25A", hp: "150 hp", torque: "211 Nm", profileId: "c25a-legend" }
    ],
    "Honda-Legend-Gen 1 (KA1 - KA6) (1985-1990)-2.7 V6": [
      { code: "C27A", hp: "170 hp", torque: "216 Nm", profileId: "c27a-legend" }
    ],
    "Honda-Legend-Gen 2 (KA7 - KA8) (1990-1995)-3.2 V6": [
      { code: "C32A", hp: "205 hp", torque: "293 Nm", profileId: "c32a-legend" },
      { code: "C32A", hp: "235 hp", torque: "289 Nm", profileId: "c32a-type2-legend" } // Type II
    ],
    "Honda-Legend-Gen 3 (KA9) (1995-2004)-3.5 V6": [
      { code: "C35A", hp: "205 hp", torque: "298 Nm", profileId: "c35a-legend" },
      { code: "C35A", hp: "215 hp", torque: "304 Nm", profileId: "c35a-legend-rl" }
    ],
    "Honda-Legend-Gen 4 (KB1 - KB2) (2004-2012)-3.5 V6 SH-AWD": [
      { code: "J35A8", hp: "295 hp", torque: "351 Nm", profileId: "j35a8-legend" }
    ],
    "Honda-Legend-Gen 4 (KB1 - KB2) (2004-2012)-3.7 V6 SH-AWD": [
      { code: "J37A2", hp: "300 hp", torque: "370 Nm", profileId: "j37a2-legend" }
    ],
    "Honda-Legend-Gen 5 (KC2) (2014-2021)-3.5 V6 Sport Hybrid": [
      { code: "J35Y4", hp: "382 hp", torque: "461 Nm", profileId: "j35y4-legend-hybrid" }
    ],
  
    // --- Insight ---
    "Honda-Insight-Gen 1 (ZE1) (1999-2006)-1.0 IMA Hybrid": [
      { code: "ECA1", hp: "73 hp", torque: "113 Nm", profileId: "eca1-insight" }
    ],
    "Honda-Insight-Gen 2 (ZE2) (2009-2014)-1.3 IMA Hybrid": [
      { code: "LDA3", hp: "98 hp", torque: "167 Nm", profileId: "lda3-insight" }
    ],
    "Honda-Insight-Gen 3 (ZE4) (2018-2022)-1.5 Hybrid": [
      { code: "LEB", hp: "151 hp", torque: "267 Nm", profileId: "leb-insight" }
    ],
  
    // --- Concerto ---
    "Honda-Concerto-MA Series (1989-1994)-1.4": [
      { code: "D14A1", hp: "88 hp", torque: "112 Nm", profileId: "d14a1-concerto" }
    ],
    "Honda-Concerto-MA Series (1989-1994)-1.5i": [
      { code: "D15B2", hp: "90 hp", torque: "119 Nm", profileId: "d15b2-concerto" }
    ],
    "Honda-Concerto-MA Series (1989-1994)-1.6i 16V": [
      { code: "D16Z2", hp: "112 hp", torque: "137 Nm", profileId: "d16z2-concerto" }
    ],
    "Honda-Concerto-MA Series (1989-1994)-1.6i 16V DOHC": [
      { code: "D16A8", hp: "130 hp", torque: "143 Nm", profileId: "d16a8-concerto" }
    ],
    "Honda-Concerto-MA Series (1989-1994)-1.8 TD": [
      { code: "XUD7T", hp: "88 hp", torque: "180 Nm", profileId: "xud7t-concerto" } // Peugeot engine
    ],
  
    // --- Logo ---
    "Honda-Logo-GA Series (1996-2001)-1.3": [
      { code: "D13B7", hp: "65 hp", torque: "108 Nm", profileId: "d13b7-logo" }
    ],
  
    // =============================================================================
    // SUVs & TRUCKS
    // =============================================================================
  
    // --- CR-V ---
    "Honda-CR-V-Gen 1 (RD1 - RD3) (1995-2001)-2.0 16V": [
      { code: "B20B", hp: "128 hp", torque: "182 Nm", profileId: "b20b-crv" },
      { code: "B20Z", hp: "147 hp", torque: "180 Nm", profileId: "b20z-crv" } // Facelift
    ],
    "Honda-CR-V-Gen 2 (RD4 - RD9) (2001-2006)-2.0 i-VTEC": [
      { code: "K20A4", hp: "150 hp", torque: "192 Nm", profileId: "k20a4-crv" }
    ],
    "Honda-CR-V-Gen 2 (RD4 - RD9) (2001-2006)-2.4 i-VTEC": [
      { code: "K24A1", hp: "160 hp", torque: "220 Nm", profileId: "k24a1-crv" }
    ],
    "Honda-CR-V-Gen 2 (RD4 - RD9) (2001-2006)-2.2 i-CTDi": [
      { code: "N22A2", hp: "140 hp", torque: "340 Nm", profileId: "n22a2-crv" }
    ],
    "Honda-CR-V-Gen 3 (RE) (2006-2011)-2.0 i-VTEC": [
      { code: "R20A2", hp: "150 hp", torque: "192 Nm", profileId: "r20a2-crv" }
    ],
    "Honda-CR-V-Gen 3 (RE) (2006-2011)-2.4 i-VTEC": [
      { code: "K24Z1", hp: "166 hp", torque: "218 Nm", profileId: "k24z1-crv" }
    ],
    "Honda-CR-V-Gen 3 (RE) (2006-2011)-2.2 i-CTDi": [
      { code: "N22A2", hp: "140 hp", torque: "340 Nm", profileId: "n22a2-crv-re" }
    ],
    "Honda-CR-V-Gen 3 (RE) (2006-2011)-2.2 i-DTEC": [
      { code: "N22B3", hp: "150 hp", torque: "350 Nm", profileId: "n22b3-crv" }
    ],
    "Honda-CR-V-Gen 4 (RM) (2011-2016)-2.0 i-VTEC": [
      { code: "R20A9", hp: "155 hp", torque: "192 Nm", profileId: "r20a9-crv" }
    ],
    "Honda-CR-V-Gen 4 (RM) (2011-2016)-2.4 i-VTEC": [
      { code: "K24Z7", hp: "185 hp", torque: "221 Nm", profileId: "k24z7-crv" }
    ],
    "Honda-CR-V-Gen 4 (RM) (2011-2016)-1.6 i-DTEC": [
      { code: "N16A1", hp: "120 hp", torque: "300 Nm", profileId: "n16a1-crv" }
    ],
    "Honda-CR-V-Gen 4 (RM) (2011-2016)-1.6 i-DTEC BiTurbo": [
      { code: "N16A2", hp: "160 hp", torque: "350 Nm", profileId: "n16a2-crv" }
    ],
    "Honda-CR-V-Gen 4 (RM) (2011-2016)-2.2 i-DTEC": [
      { code: "N22B4", hp: "150 hp", torque: "350 Nm", profileId: "n22b4-crv" }
    ],
    "Honda-CR-V-Gen 5 (RW - RT) (2016-2022)-1.5 VTEC Turbo": [
      { code: "L15B7", hp: "173 hp", torque: "220 Nm", profileId: "l15b7-crv-173" },
      { code: "L15B7", hp: "193 hp", torque: "243 Nm", profileId: "l15b7-crv-193" }
    ],
    "Honda-CR-V-Gen 5 (RW - RT) (2016-2022)-2.4 i-VTEC": [
      { code: "K24W9", hp: "184 hp", torque: "244 Nm", profileId: "k24w9-crv" }
    ],
    "Honda-CR-V-Gen 5 (RW - RT) (2016-2022)-2.0 i-MMD Hybrid": [
      { code: "LFA1", hp: "184 hp", torque: "315 Nm", profileId: "lfa1-crv-hybrid" }
    ],
    "Honda-CR-V-Gen 6 (RS) (2022-present)-1.5 VTEC Turbo": [
      { code: "L15BE", hp: "190 hp", torque: "243 Nm", profileId: "l15be-crv" }
    ],
    "Honda-CR-V-Gen 6 (RS) (2022-present)-2.0 e:HEV Hybrid": [
      { code: "LFC2", hp: "204 hp", torque: "335 Nm", profileId: "lfc2-crv-hybrid" }
    ],
  
    // --- HR-V ---
    "Honda-HR-V-Gen 1 (GH) (1998-2006)-1.6 16V": [
      { code: "D16W1", hp: "105 hp", torque: "138 Nm", profileId: "d16w1-hrv" }
    ],
    "Honda-HR-V-Gen 1 (GH) (1998-2006)-1.6 16V VTEC": [
      { code: "D16W5", hp: "124 hp", torque: "144 Nm", profileId: "d16w5-hrv" }
    ],
    "Honda-HR-V-Gen 2 (RU) (2013-2021)-1.5 i-VTEC": [
      { code: "L15B", hp: "130 hp", torque: "155 Nm", profileId: "l15b-hrv" }
    ],
    "Honda-HR-V-Gen 2 (RU) (2013-2021)-1.5 VTEC Turbo": [
      { code: "L15B7", hp: "182 hp", torque: "240 Nm", profileId: "l15b7-hrv-sport" }
    ],
    "Honda-HR-V-Gen 2 (RU) (2013-2021)-1.6 i-DTEC": [
      { code: "N16A1", hp: "120 hp", torque: "300 Nm", profileId: "n16a1-hrv" }
    ],
    "Honda-HR-V-Gen 2 (RU) (2013-2021)-1.8 i-VTEC": [
      { code: "R18Z9", hp: "141 hp", torque: "172 Nm", profileId: "r18z9-hrv" }
    ],
    "Honda-HR-V-Gen 3 (RV) (2021-present)-1.5 i-MMD Hybrid": [
      { code: "LEC", hp: "131 hp", torque: "253 Nm", profileId: "lec-hrv-hybrid" }
    ],
    "Honda-HR-V-Gen 3 (RV) (2021-present)-1.5 i-VTEC": [
      { code: "L15ZE", hp: "121 hp", torque: "145 Nm", profileId: "l15ze-hrv" }
    ],
    "Honda-HR-V-Gen 3 (RV) (2021-present)-2.0": [
      { code: "K20Z5", hp: "158 hp", torque: "187 Nm", profileId: "k20z5-hrv-us" } // US HR-V is different (based on Civic 11)
    ],
  
    // --- ZR-V ---
    "Honda-ZR-V-Gen 1 (RZ) (2022-present)-1.5 VTEC Turbo": [
      { code: "L15C1", hp: "182 hp", torque: "240 Nm", profileId: "l15c1-zrv" }
    ],
    "Honda-ZR-V-Gen 1 (RZ) (2022-present)-2.0 e:HEV Hybrid": [
      { code: "LFC-H4", hp: "184 hp", torque: "315 Nm", profileId: "lfc-h4-zrv" }
    ],
  
    // --- Pilot ---
    "Honda-Pilot-Gen 1 (YF1 - YF2) (2002-2008)-3.5 V6": [
      { code: "J35A4", hp: "240 hp", torque: "328 Nm", profileId: "j35a4-pilot" },
      { code: "J35A9", hp: "244 hp", torque: "325 Nm", profileId: "j35a9-pilot" }, // 2WD
      { code: "J35Z1", hp: "244 hp", torque: "325 Nm", profileId: "j35z1-pilot" }
    ],
    "Honda-Pilot-Gen 2 (YF3 - YF4) (2008-2015)-3.5 V6": [
      { code: "J35Z4", hp: "250 hp", torque: "343 Nm", profileId: "j35z4-pilot" }
    ],
    "Honda-Pilot-Gen 3 (YF5 - YF6) (2015-2022)-3.5 V6": [
      { code: "J35Y6", hp: "280 hp", torque: "355 Nm", profileId: "j35y6-pilot" }
    ],
    "Honda-Pilot-Gen 4 (YG1) (2022-present)-3.5 V6": [
      { code: "J35Y8", hp: "285 hp", torque: "355 Nm", profileId: "j35y8-pilot" } // DOHC
    ],
  
    // --- Passport ---
    "Honda-Passport-Gen 1 (C58) (1993-1997)-3.2 V6": [
      { code: "6VD1", hp: "175 hp", torque: "255 Nm", profileId: "6vd1-passport" }, // Isuzu
      { code: "6VD1", hp: "190 hp", torque: "255 Nm", profileId: "6vd1-passport-late" }
    ],
    "Honda-Passport-Gen 2 (CK) (1997-2002)-3.2 V6": [
      { code: "6VD1", hp: "205 hp", torque: "290 Nm", profileId: "6vd1-dohc-passport" }
    ],
    "Honda-Passport-Gen 3 (YF) (2019-present)-3.5 V6": [
      { code: "J35Y6", hp: "280 hp", torque: "355 Nm", profileId: "j35y6-passport" }
    ],
  
    // --- Element ---
    "Honda-Element-YH1 - YH2 (2003-2011)-2.4 i-VTEC": [
      { code: "K24A4", hp: "160 hp", torque: "218 Nm", profileId: "k24a4-element" },
      { code: "K24A8", hp: "166 hp", torque: "218 Nm", profileId: "k24a8-element" } // Facelift
    ],
  
    // --- Crosstour ---
    "Honda-Crosstour-TF1 - TF3 (2009-2015)-2.4 i-VTEC": [
      { code: "K24Y2", hp: "192 hp", torque: "220 Nm", profileId: "k24y2-crosstour" }
    ],
    "Honda-Crosstour-TF1 - TF3 (2009-2015)-3.5 V6": [
      { code: "J35Z2", hp: "271 hp", torque: "344 Nm", profileId: "j35z2-crosstour" },
      { code: "J35Y1", hp: "278 hp", torque: "342 Nm", profileId: "j35y1-crosstour" } // Facelift
    ],
  
    // --- Ridgeline ---
    "Honda-Ridgeline-Gen 1 (YK1) (2005-2014)-3.5 V6": [
      { code: "J35A9", hp: "247 hp", torque: "332 Nm", profileId: "j35a9-ridgeline" },
      { code: "J35Z5", hp: "250 hp", torque: "335 Nm", profileId: "j35z5-ridgeline" }
    ],
    "Honda-Ridgeline-Gen 2 (YK2 - YK3) (2016-present)-3.5 V6": [
      { code: "J35Y6", hp: "280 hp", torque: "355 Nm", profileId: "j35y6-ridgeline" }
    ],
  
    // =============================================================================
    // MPVs & VANS
    // =============================================================================
  
    // --- Odyssey ---
    "Honda-Odyssey-Gen 1 Intl (RA1 - RA5) (1994-1999)-2.2": [
      { code: "F22B", hp: "145 hp", torque: "196 Nm", profileId: "f22b-odyssey" }
    ],
    "Honda-Odyssey-Gen 1 Intl (RA1 - RA5) (1994-1999)-2.3": [
      { code: "F23A", hp: "150 hp", torque: "206 Nm", profileId: "f23a-odyssey" }
    ],
    "Honda-Odyssey-Gen 1 Intl (RA1 - RA5) (1994-1999)-3.0 V6": [
      { code: "J30A", hp: "200 hp", torque: "265 Nm", profileId: "j30a-odyssey" }
    ],
    "Honda-Odyssey-Gen 2 Intl (RA6 - RA9) (1999-2003)-2.3": [
      { code: "F23A", hp: "150 hp", torque: "206 Nm", profileId: "f23a-odyssey-gen2" }
    ],
    "Honda-Odyssey-Gen 2 Intl (RA6 - RA9) (1999-2003)-3.0 V6": [
      { code: "J30A", hp: "210 hp", torque: "270 Nm", profileId: "j30a-odyssey-gen2" }
    ],
    "Honda-Odyssey-Gen 3 Intl (RB1 - RB2) (2003-2008)-2.4 i-VTEC": [
      { code: "K24A", hp: "160 hp", torque: "218 Nm", profileId: "k24a-odyssey-rb1" }
    ],
    "Honda-Odyssey-Gen 3 Intl (RB1 - RB2) (2003-2008)-2.4 i-VTEC Absolute": [
      { code: "K24A", hp: "200 hp", torque: "232 Nm", profileId: "k24a-odyssey-absolute" }
    ],
    "Honda-Odyssey-Gen 4 Intl (RB3 - RB4) (2008-2013)-2.4 i-VTEC": [
      { code: "K24A", hp: "173 hp", torque: "222 Nm", profileId: "k24a-odyssey-rb3" }
    ],
    "Honda-Odyssey-Gen 4 Intl (RB3 - RB4) (2008-2013)-2.4 i-VTEC Absolute": [
      { code: "K24A", hp: "206 hp", torque: "232 Nm", profileId: "k24a-odyssey-absolute-rb3" }
    ],
    "Honda-Odyssey-Gen 5 Intl (RC) (2013-present)-2.4 i-VTEC": [
      { code: "K24W", hp: "175 hp", torque: "225 Nm", profileId: "k24w-odyssey-rc" }
    ],
    "Honda-Odyssey-Gen 5 Intl (RC) (2013-present)-2.4 i-VTEC Direct Injection": [
      { code: "K24W", hp: "190 hp", torque: "237 Nm", profileId: "k24w-odyssey-rc-di" }
    ],
    "Honda-Odyssey-Gen 5 Intl (RC) (2013-present)-2.0 Hybrid": [
      { code: "LFA", hp: "145 hp", torque: "175 Nm", profileId: "lfa-odyssey-hybrid" }
    ],
    "Honda-Odyssey-Gen 2 US (RL1) (1999-2004)-3.5 V6": [
      { code: "J35A1", hp: "210 hp", torque: "310 Nm", profileId: "j35a1-odyssey" },
      { code: "J35A4", hp: "240 hp", torque: "328 Nm", profileId: "j35a4-odyssey" }
    ],
    "Honda-Odyssey-Gen 3 US (RL3) (2005-2010)-3.5 V6": [
      { code: "J35A7", hp: "255 hp", torque: "340 Nm", profileId: "j35a7-odyssey-vcm" }, // VCM
      { code: "J35A6", hp: "244 hp", torque: "325 Nm", profileId: "j35a6-odyssey" }      // LX/EX
    ],
    "Honda-Odyssey-Gen 4 US (RL5) (2011-2017)-3.5 V6": [
      { code: "J35Z8", hp: "248 hp", torque: "339 Nm", profileId: "j35z8-odyssey" }
    ],
    "Honda-Odyssey-Gen 5 US (RL6) (2018-present)-3.5 V6": [
      { code: "J35Y6", hp: "280 hp", torque: "355 Nm", profileId: "j35y6-odyssey" }
    ],
  
    // --- Stream ---
    "Honda-Stream-Gen 1 (RN1 - RN5) (2000-2006)-1.7 VTEC": [
      { code: "D17A2", hp: "125 hp", torque: "154 Nm", profileId: "d17a2-stream" }
    ],
    "Honda-Stream-Gen 1 (RN1 - RN5) (2000-2006)-2.0 i-VTEC": [
      { code: "K20A1", hp: "156 hp", torque: "192 Nm", profileId: "k20a1-stream" }
    ],
    "Honda-Stream-Gen 2 (RN6 - RN9) (2006-2014)-1.8 i-VTEC": [
      { code: "R18A", hp: "140 hp", torque: "174 Nm", profileId: "r18a-stream" }
    ],
    "Honda-Stream-Gen 2 (RN6 - RN9) (2006-2014)-2.0 i-VTEC": [
      { code: "R20A", hp: "150 hp", torque: "190 Nm", profileId: "r20a-stream" }
    ],
  
    // --- FR-V ---
    "Honda-FR-V-BE1 - BE3 - BE5 (2004-2009)-1.7 VTEC": [
      { code: "D17A2", hp: "125 hp", torque: "154 Nm", profileId: "d17a2-frv" }
    ],
    "Honda-FR-V-BE1 - BE3 - BE5 (2004-2009)-1.8 i-VTEC": [
      { code: "R18A1", hp: "140 hp", torque: "174 Nm", profileId: "r18a1-frv" }
    ],
    "Honda-FR-V-BE1 - BE3 - BE5 (2004-2009)-2.0 i-VTEC": [
      { code: "K20A9", hp: "150 hp", torque: "192 Nm", profileId: "k20a9-frv" }
    ],
    "Honda-FR-V-BE1 - BE3 - BE5 (2004-2009)-2.2 i-CTDi": [
      { code: "N22A1", hp: "140 hp", torque: "340 Nm", profileId: "n22a1-frv" }
    ],
  
    // --- Elysion ---
    "Honda-Elysion-Gen 1 (RR) (2004-2013)-2.4 i-VTEC": [
      { code: "K24A", hp: "160 hp", torque: "218 Nm", profileId: "k24a-elysion" }
    ],
    "Honda-Elysion-Gen 1 (RR) (2004-2013)-3.0 V6": [
      { code: "J30A", hp: "250 hp", torque: "309 Nm", profileId: "j30a-elysion" }
    ],
    "Honda-Elysion-Gen 1 (RR) (2004-2013)-3.5 V6": [
      { code: "J35A", hp: "300 hp", torque: "353 Nm", profileId: "j35a-elysion" }
    ],
    "Honda-Elysion-Gen 2 (RC) (2015-present)-2.4 i-VTEC": [
      { code: "K24V", hp: "186 hp", torque: "243 Nm", profileId: "k24v-elysion" }
    ],
    "Honda-Elysion-Gen 2 (RC) (2015-present)-2.0 Hybrid": [
      { code: "LFA1", hp: "184 hp", torque: "315 Nm", profileId: "lfa1-elysion" }
    ],
  
    // --- Shuttle ---
    "Honda-Shuttle-Odyssey Shuttle (RA) (1994-1999)-2.2": [
      { code: "F22B", hp: "150 hp", torque: "196 Nm", profileId: "f22b-shuttle" }
    ],
    "Honda-Shuttle-Odyssey Shuttle (RA) (1994-1999)-2.3": [
      { code: "F23A", hp: "150 hp", torque: "206 Nm", profileId: "f23a-shuttle" }
    ],
    "Honda-Shuttle-Fit Shuttle (GG - GP) (2011-2015)-1.5 i-VTEC": [
      { code: "L15A", hp: "120 hp", torque: "145 Nm", profileId: "l15a-fit-shuttle" }
    ],
    "Honda-Shuttle-Fit Shuttle (GG - GP) (2011-2015)-1.3 Hybrid": [
      { code: "LDA3", hp: "88 hp", torque: "121 Nm", profileId: "lda3-fit-shuttle" }
    ],
    "Honda-Shuttle-Shuttle (GK - GP) (2015-present)-1.5 i-VTEC": [
      { code: "L15B", hp: "132 hp", torque: "155 Nm", profileId: "l15b-shuttle" }
    ],
    "Honda-Shuttle-Shuttle (GK - GP) (2015-present)-1.5 Hybrid": [
      { code: "LEB", hp: "110 hp", torque: "134 Nm", profileId: "leb-shuttle" }
    ]
  };