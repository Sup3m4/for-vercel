export const subaruEngineCodes = {
    // =============================================================================
    // CORE MODELS
    // =============================================================================
  
    // --- Impreza ---
    "Subaru-Impreza-Mk1 (GC/GF/GM) (1992-2000)-1.6 GL": [
      { code: "EJ16E", hp: "90 hp", torque: "128 Nm", profileId: "ej16e-impreza-gc" }
    ],
    "Subaru-Impreza-Mk1 (GC/GF/GM) (1992-2000)-1.8 GL": [
      { code: "EJ18E", hp: "103 hp", torque: "147 Nm", profileId: "ej18e-impreza-gc" }
    ],
    "Subaru-Impreza-Mk1 (GC/GF/GM) (1992-2000)-2.0 GL": [
      { code: "EJ20E", hp: "115 hp", torque: "170 Nm", profileId: "ej20e-impreza-gc" }
    ],
    "Subaru-Impreza-Mk1 (GC/GF/GM) (1992-2000)-2.0 GT Turbo": [
      { code: "EJ20G", hp: "211 hp", torque: "270 Nm", profileId: "ej20g-impreza-gc-turbo" },
      { code: "EJ20K", hp: "218 hp", torque: "290 Nm", profileId: "ej20k-impreza-gc-turbo" }, // Late JDM/EU
      { code: "EJ205", hp: "218 hp", torque: "290 Nm", profileId: "ej205-impreza-gc-turbo" } // MY99-00
    ],
    "Subaru-Impreza-Mk1 (GC/GF/GM) (1992-2000)-2.2 GX": [
      { code: "EJ22E", hp: "128 hp", torque: "185 Nm", profileId: "ej22e-impreza-gc" }
    ],
    "Subaru-Impreza-Mk1 (GC/GF/GM) (1992-2000)-2.5 RS (US)": [
      { code: "EJ25D", hp: "165 hp", torque: "220 Nm", profileId: "ej25d-impreza-rs" }, // DOHC
      { code: "EJ251", hp: "165 hp", torque: "225 Nm", profileId: "ej251-impreza-rs" }  // SOHC
    ],
  
    "Subaru-Impreza-Mk2 (GD/GG) (2000-2007)-1.5 R": [
      { code: "EL154", hp: "105 hp", torque: "142 Nm", profileId: "el154-impreza-gd" }
    ],
    "Subaru-Impreza-Mk2 (GD/GG) (2000-2007)-1.6 TS": [
      { code: "EJ161", hp: "95 hp", torque: "143 Nm", profileId: "ej161-impreza-gd" }
    ],
    "Subaru-Impreza-Mk2 (GD/GG) (2000-2007)-2.0 GX": [
      { code: "EJ201", hp: "125 hp", torque: "184 Nm", profileId: "ej201-impreza-gd" }
    ],
    "Subaru-Impreza-Mk2 (GD/GG) (2000-2007)-2.0 R": [
      { code: "EJ204", hp: "160 hp", torque: "196 Nm", profileId: "ej204-impreza-gd" }
    ],
    "Subaru-Impreza-Mk2 (GD/GG) (2000-2007)-2.0 WRX Turbo": [
      { code: "EJ205", hp: "218 hp", torque: "292 Nm", profileId: "ej205-impreza-wrx-gd" },
      { code: "EJ205", hp: "225 hp", torque: "300 Nm", profileId: "ej205-impreza-wrx-gd-facelift" }
    ],
    "Subaru-Impreza-Mk2 (GD/GG) (2000-2007)-2.5 WRX Turbo": [
      { code: "EJ255", hp: "230 hp", torque: "320 Nm", profileId: "ej255-impreza-wrx-gd" }
    ],
    "Subaru-Impreza-Mk2 (GD/GG) (2000-2007)-2.5 RS": [
      { code: "EJ253", hp: "165 hp", torque: "225 Nm", profileId: "ej253-impreza-rs-gd" }
    ],
  
    "Subaru-Impreza-Mk3 (GE/GH/GR/GV) (2007-2011)-1.5 R": [
      { code: "EL154", hp: "107 hp", torque: "142 Nm", profileId: "el154-impreza-ge" }
    ],
    "Subaru-Impreza-Mk3 (GE/GH/GR/GV) (2007-2011)-2.0 R": [
      { code: "EJ204", hp: "150 hp", torque: "196 Nm", profileId: "ej204-impreza-ge" }
    ],
    "Subaru-Impreza-Mk3 (GE/GH/GR/GV) (2007-2011)-2.5 WRX Turbo": [
      { code: "EJ255", hp: "230 hp", torque: "320 Nm", profileId: "ej255-impreza-wrx-gh" },
      { code: "EJ255", hp: "265 hp", torque: "331 Nm", profileId: "ej255-impreza-wrx-gh-265" }
    ],
    "Subaru-Impreza-Mk3 (GE/GH/GR/GV) (2007-2011)-2.0 D Boxer Diesel": [
      { code: "EE20Z", hp: "150 hp", torque: "350 Nm", profileId: "ee20z-impreza-ge" }
    ],
  
    "Subaru-Impreza-Mk4 (GJ/GP) (2011-2016)-1.6 i": [
      { code: "FB16A", hp: "114 hp", torque: "150 Nm", profileId: "fb16a-impreza-gj" }
    ],
    "Subaru-Impreza-Mk4 (GJ/GP) (2011-2016)-2.0 i": [
      { code: "FB20B", hp: "150 hp", torque: "196 Nm", profileId: "fb20b-impreza-gj" }
    ],
    "Subaru-Impreza-Mk4 (GJ/GP) (2011-2016)-2.0 D Boxer Diesel": [
      { code: "EE20Z", hp: "150 hp", torque: "350 Nm", profileId: "ee20z-impreza-gj" }
    ],
  
    "Subaru-Impreza-Mk5 (GK/GT) (2016-2023)-1.6 i": [
      { code: "FB16B", hp: "114 hp", torque: "150 Nm", profileId: "fb16b-impreza-gk" }
    ],
    "Subaru-Impreza-Mk5 (GK/GT) (2016-2023)-2.0 i": [
      { code: "FB20D", hp: "152 hp", torque: "196 Nm", profileId: "fb20d-impreza-gk" },
      { code: "FB20D", hp: "156 hp", torque: "196 Nm", profileId: "fb20d-impreza-gk-eu" }
    ],
  
    "Subaru-Impreza-Mk6 (GU) (2023-present)-2.0 i": [
      { code: "FB20D", hp: "152 hp", torque: "197 Nm", profileId: "fb20d-impreza-gu" }
    ],
    "Subaru-Impreza-Mk6 (GU) (2023-present)-2.5 RS": [
      { code: "FB25D", hp: "182 hp", torque: "241 Nm", profileId: "fb25d-impreza-gu" }
    ],
    "Subaru-Impreza-Mk6 (GU) (2023-present)-2.0 e-Boxer Hybrid": [
      { code: "FB20V", hp: "150 hp", torque: "194 Nm", profileId: "fb20v-impreza-gu-hybrid" }
    ],
  
    // --- WRX STI ---
    "Subaru-WRX STI-GC8 (1994-2000)-2.0 STI Ver. I-VI": [
      { code: "EJ20G", hp: "250 hp", torque: "309 Nm", profileId: "ej20g-sti-v1-v2" },
      { code: "EJ20K", hp: "280 hp", torque: "343 Nm", profileId: "ej20k-sti-v3-v4" },
      { code: "EJ207", hp: "280 hp", torque: "353 Nm", profileId: "ej207-sti-v5-v6" }
    ],
    "Subaru-WRX STI-GC8 (1994-2000)-2.2 22B STI": [
      { code: "EJ22G", hp: "280 hp", torque: "363 Nm", profileId: "ej22g-22b-sti" }
    ],
  
    "Subaru-WRX STI-GD (2001-2007)-2.0 STI (Bugeye/Blobeye)": [
      { code: "EJ207", hp: "265 hp", torque: "343 Nm", profileId: "ej207-sti-gd-eu" }
    ],
    "Subaru-WRX STI-GD (2001-2007)-2.0 STI PPP (Prodrive)": [
      { code: "EJ207", hp: "305 hp", torque: "405 Nm", profileId: "ej207-sti-gd-prodrive" }
    ],
    "Subaru-WRX STI-GD (2001-2007)-2.5 STI (Hawkeye)": [
      { code: "EJ257", hp: "280 hp", torque: "392 Nm", profileId: "ej257-sti-gd-hawkeye" }
    ],
    "Subaru-WRX STI-GD (2001-2007)-2.0 STI Spec C": [
      { code: "EJ207", hp: "280 hp", torque: "412 Nm", profileId: "ej207-sti-gd-spec-c" }
    ],
  
    "Subaru-WRX STI-GR/GV (2008-2014)-2.5 STI Turbo": [
      { code: "EJ257", hp: "300 hp", torque: "407 Nm", profileId: "ej257-sti-gr" }
    ],
    "Subaru-WRX STI-GR/GV (2008-2014)-2.0 STI (JDM)": [
      { code: "EJ207", hp: "308 hp", torque: "422 Nm", profileId: "ej207-sti-gr-jdm" }
    ],
    "Subaru-WRX STI-GR/GV (2008-2014)-2.5 STI 330S": [
      { code: "EJ257", hp: "330 hp", torque: "470 Nm", profileId: "ej257-sti-gr-330s" }
    ],
  
    "Subaru-WRX STI-VA (2014-2021)-2.5 STI Turbo": [
      { code: "EJ257", hp: "300 hp", torque: "407 Nm", profileId: "ej257-sti-va" }
    ],
    "Subaru-WRX STI-VA (2014-2021)-2.5 STI Final Edition": [
      { code: "EJ257", hp: "340 hp", torque: "450 Nm", profileId: "ej257-sti-va-final" }
    ],
    "Subaru-WRX STI-VA (2014-2021)-2.0 WRX (FA20)": [
      { code: "FA20F", hp: "268 hp", torque: "350 Nm", profileId: "fa20f-wrx-va" }
    ],
  
    "Subaru-WRX STI-VB (WRX S4) (2022-present)-2.4 Turbo (FA24)": [
      { code: "FA24F", hp: "271 hp", torque: "350 Nm", profileId: "fa24f-wrx-vb" }
    ],
  
    // --- Legacy ---
    "Subaru-Legacy-Mk1 (BC/BF/BJ) (1989-1993)-1.8": [
      { code: "EJ18E", hp: "103 hp", torque: "147 Nm", profileId: "ej18e-legacy-bc" }
    ],
    "Subaru-Legacy-Mk1 (BC/BF/BJ) (1989-1993)-2.0": [
      { code: "EJ20E", hp: "116 hp", torque: "172 Nm", profileId: "ej20e-legacy-bc" }
    ],
    "Subaru-Legacy-Mk1 (BC/BF/BJ) (1989-1993)-2.0 Turbo RS": [
      { code: "EJ20G", hp: "200 hp", torque: "260 Nm", profileId: "ej20g-legacy-rs-bc" },
      { code: "EJ20G", hp: "220 hp", torque: "270 Nm", profileId: "ej20g-legacy-rs-ra-bc" }
    ],
    "Subaru-Legacy-Mk1 (BC/BF/BJ) (1989-1993)-2.2": [
      { code: "EJ22E", hp: "136 hp", torque: "186 Nm", profileId: "ej22e-legacy-bc" }
    ],
  
    "Subaru-Legacy-Mk2 (BD/BG/BK) (1993-1998)-2.0": [
      { code: "EJ20E", hp: "116 hp", torque: "170 Nm", profileId: "ej20e-legacy-bd" },
      { code: "EJ20E", hp: "128 hp", torque: "172 Nm", profileId: "ej20e-legacy-bd-facelift" }
    ],
    "Subaru-Legacy-Mk2 (BD/BG/BK) (1993-1998)-2.2": [
      { code: "EJ22E", hp: "131 hp", torque: "186 Nm", profileId: "ej22e-legacy-bd" }
    ],
    "Subaru-Legacy-Mk2 (BD/BG/BK) (1993-1998)-2.5": [
      { code: "EJ25D", hp: "150 hp", torque: "217 Nm", profileId: "ej25d-legacy-bd" }
    ],
    "Subaru-Legacy-Mk2 (BD/BG/BK) (1993-1998)-2.0 Twin Turbo (GT)": [
      { code: "EJ20H", hp: "250 hp", torque: "309 Nm", profileId: "ej20h-legacy-gt-bd" },
      { code: "EJ20R", hp: "280 hp", torque: "343 Nm", profileId: "ej20r-legacy-gtb-bd" }
    ],
  
    "Subaru-Legacy-Mk3 (BE/BH) (1998-2003)-2.0": [
      { code: "EJ201", hp: "125 hp", torque: "184 Nm", profileId: "ej201-legacy-be" }
    ],
    "Subaru-Legacy-Mk3 (BE/BH) (1998-2003)-2.5": [
      { code: "EJ251", hp: "156 hp", torque: "223 Nm", profileId: "ej251-legacy-be" }
    ],
    "Subaru-Legacy-Mk3 (BE/BH) (1998-2003)-3.0 H6": [
      { code: "EZ30D", hp: "220 hp", torque: "289 Nm", profileId: "ez30d-legacy-be" }
    ],
    "Subaru-Legacy-Mk3 (BE/BH) (1998-2003)-2.0 Twin Turbo (B4)": [
      { code: "EJ206", hp: "260 hp", torque: "319 Nm", profileId: "ej206-legacy-b4-auto" },
      { code: "EJ208", hp: "280 hp", torque: "343 Nm", profileId: "ej208-legacy-b4-manual" }
    ],
  
    "Subaru-Legacy-Mk4 (BL/BP) (2003-2009)-2.0 i": [
      { code: "EJ202", hp: "138 hp", torque: "187 Nm", profileId: "ej202-legacy-bl" }
    ],
    "Subaru-Legacy-Mk4 (BL/BP) (2003-2009)-2.0 R": [
      { code: "EJ204", hp: "165 hp", torque: "196 Nm", profileId: "ej204-legacy-bl" }
    ],
    "Subaru-Legacy-Mk4 (BL/BP) (2003-2009)-2.5 i": [
      { code: "EJ253", hp: "173 hp", torque: "227 Nm", profileId: "ej253-legacy-bl" }
    ],
    "Subaru-Legacy-Mk4 (BL/BP) (2003-2009)-3.0 H6 (Spec.B)": [
      { code: "EZ30R", hp: "245 hp", torque: "297 Nm", profileId: "ez30r-legacy-bl-specb" }
    ],
    "Subaru-Legacy-Mk4 (BL/BP) (2003-2009)-2.5 GT Turbo": [
      { code: "EJ255", hp: "250 hp", torque: "339 Nm", profileId: "ej255-legacy-gt-bl" }
    ],
    "Subaru-Legacy-Mk4 (BL/BP) (2003-2009)-2.0 D Boxer Diesel": [
      { code: "EE20Z", hp: "150 hp", torque: "350 Nm", profileId: "ee20z-legacy-bl" }
    ],
  
    "Subaru-Legacy-Mk5 (BM/BR) (2009-2014)-2.0 i": [
      { code: "EJ204", hp: "150 hp", torque: "196 Nm", profileId: "ej204-legacy-bm" },
      { code: "FB20B", hp: "150 hp", torque: "196 Nm", profileId: "fb20b-legacy-bm-facelift" }
    ],
    "Subaru-Legacy-Mk5 (BM/BR) (2009-2014)-2.5 i": [
      { code: "EJ253", hp: "167 hp", torque: "229 Nm", profileId: "ej253-legacy-bm" },
      { code: "FB25B", hp: "173 hp", torque: "235 Nm", profileId: "fb25b-legacy-bm-facelift" }
    ],
    "Subaru-Legacy-Mk5 (BM/BR) (2009-2014)-2.5 GT Turbo": [
      { code: "EJ255", hp: "265 hp", torque: "350 Nm", profileId: "ej255-legacy-gt-bm" }
    ],
    "Subaru-Legacy-Mk5 (BM/BR) (2009-2014)-2.0 D Boxer Diesel": [
      { code: "EE20Z", hp: "150 hp", torque: "350 Nm", profileId: "ee20z-legacy-bm" }
    ],
  
    "Subaru-Legacy-Mk6 (BN/BS) (2014-2020)-2.5 i": [
      { code: "FB25B", hp: "175 hp", torque: "235 Nm", profileId: "fb25b-legacy-bn" }
    ],
    "Subaru-Legacy-Mk6 (BN/BS) (2014-2020)-3.6 R H6": [
      { code: "EZ36D", hp: "256 hp", torque: "335 Nm", profileId: "ez36d-legacy-bn" }
    ],
  
    "Subaru-Legacy-Mk7 (BW/BT) (2020-present)-2.5 i": [
      { code: "FB25D", hp: "182 hp", torque: "239 Nm", profileId: "fb25d-legacy-bw" }
    ],
    "Subaru-Legacy-Mk7 (BW/BT) (2020-present)-2.4 Turbo XT": [
      { code: "FA24F", hp: "260 hp", torque: "376 Nm", profileId: "fa24f-legacy-bw" }
    ],
  
    // --- Outback ---
    "Subaru-Outback-Mk1 (BG) (1995-1999)-2.5": [
      { code: "EJ25D", hp: "150 hp", torque: "217 Nm", profileId: "ej25d-outback-bg" }
    ],
    "Subaru-Outback-Mk2 (BH) (1999-2003)-2.5": [
      { code: "EJ251", hp: "156 hp", torque: "223 Nm", profileId: "ej251-outback-bh" }
    ],
    "Subaru-Outback-Mk2 (BH) (1999-2003)-3.0 H6": [
      { code: "EZ30D", hp: "209 hp", torque: "282 Nm", profileId: "ez30d-outback-bh" }
    ],
    "Subaru-Outback-Mk3 (BP) (2003-2009)-2.5 i": [
      { code: "EJ253", hp: "165 hp", torque: "226 Nm", profileId: "ej253-outback-bp" },
      { code: "EJ253", hp: "173 hp", torque: "227 Nm", profileId: "ej253-outback-bp-facelift" }
    ],
    "Subaru-Outback-Mk3 (BP) (2003-2009)-3.0 H6": [
      { code: "EZ30R", hp: "245 hp", torque: "297 Nm", profileId: "ez30r-outback-bp" }
    ],
    "Subaru-Outback-Mk3 (BP) (2003-2009)-2.5 XT Turbo": [
      { code: "EJ255", hp: "243 hp", torque: "327 Nm", profileId: "ej255-outback-xt-bp" }
    ],
    "Subaru-Outback-Mk3 (BP) (2003-2009)-2.0 D Boxer Diesel": [
      { code: "EE20Z", hp: "150 hp", torque: "350 Nm", profileId: "ee20z-outback-bp" }
    ],
  
    "Subaru-Outback-Mk4 (BR) (2009-2014)-2.5 i": [
      { code: "EJ253", hp: "167 hp", torque: "229 Nm", profileId: "ej253-outback-br" },
      { code: "FB25B", hp: "173 hp", torque: "235 Nm", profileId: "fb25b-outback-br-facelift" }
    ],
    "Subaru-Outback-Mk4 (BR) (2009-2014)-3.6 R H6": [
      { code: "EZ36D", hp: "260 hp", torque: "335 Nm", profileId: "ez36d-outback-br" }
    ],
    "Subaru-Outback-Mk4 (BR) (2009-2014)-2.0 D Boxer Diesel": [
      { code: "EE20Z", hp: "150 hp", torque: "350 Nm", profileId: "ee20z-outback-br" }
    ],
  
    "Subaru-Outback-Mk5 (BS) (2014-2019)-2.5 i": [
      { code: "FB25B", hp: "175 hp", torque: "235 Nm", profileId: "fb25b-outback-bs" }
    ],
    "Subaru-Outback-Mk5 (BS) (2014-2019)-3.6 R H6": [
      { code: "EZ36D", hp: "256 hp", torque: "335 Nm", profileId: "ez36d-outback-bs" }
    ],
    "Subaru-Outback-Mk5 (BS) (2014-2019)-2.0 D Boxer Diesel": [
      { code: "EE20Z", hp: "150 hp", torque: "350 Nm", profileId: "ee20z-outback-bs" }
    ],
  
    "Subaru-Outback-Mk6 (BT) (2019-present)-2.5 i": [
      { code: "FB25D", hp: "182 hp", torque: "239 Nm", profileId: "fb25d-outback-bt" }
    ],
    "Subaru-Outback-Mk6 (BT) (2019-present)-2.4 Turbo XT": [
      { code: "FA24F", hp: "260 hp", torque: "376 Nm", profileId: "fa24f-outback-bt" }
    ],
  
    // --- Levorg ---
    "Subaru-Levorg-Mk1 (VM) (2014-2020)-1.6 GT Turbo": [
      { code: "FB16DIT", hp: "170 hp", torque: "250 Nm", profileId: "fb16dit-levorg-vm" }
    ],
    "Subaru-Levorg-Mk1 (VM) (2014-2020)-2.0 GT Turbo": [
      { code: "FA20F", hp: "300 hp", torque: "400 Nm", profileId: "fa20f-levorg-vm" }
    ],
  
    "Subaru-Levorg-Mk2 (VN) (2020-present)-1.8 Turbo": [
      { code: "CB18", hp: "177 hp", torque: "300 Nm", profileId: "cb18-levorg-vn" }
    ],
    "Subaru-Levorg-Mk2 (VN) (2020-present)-2.4 Turbo STI Sport": [
      { code: "FA24F", hp: "271 hp", torque: "375 Nm", profileId: "fa24f-levorg-vn" }
    ],
  
    // =============================================================================
    // SUVs & CROSSOVERS
    // =============================================================================
  
    // --- Forester ---
    "Subaru-Forester-Mk1 (SF) (1997-2002)-2.0": [
      { code: "EJ202", hp: "125 hp", torque: "184 Nm", profileId: "ej202-forester-sf" }
    ],
    "Subaru-Forester-Mk1 (SF) (1997-2002)-2.0 S-Turbo": [
      { code: "EJ205", hp: "170 hp", torque: "240 Nm", profileId: "ej205-forester-s-turbo-sf" }
    ],
    "Subaru-Forester-Mk1 (SF) (1997-2002)-2.5": [
      { code: "EJ25D", hp: "165 hp", torque: "220 Nm", profileId: "ej25d-forester-sf" },
      { code: "EJ251", hp: "165 hp", torque: "225 Nm", profileId: "ej251-forester-sf-facelift" }
    ],
  
    "Subaru-Forester-Mk2 (SG) (2002-2008)-2.0 X": [
      { code: "EJ202", hp: "125 hp", torque: "184 Nm", profileId: "ej202-forester-sg" },
      { code: "EJ204", hp: "158 hp", torque: "196 Nm", profileId: "ej204-forester-sg-facelift" }
    ],
    "Subaru-Forester-Mk2 (SG) (2002-2008)-2.0 XT Turbo": [
      { code: "EJ205", hp: "177 hp", torque: "245 Nm", profileId: "ej205-forester-xt-sg" }
    ],
    "Subaru-Forester-Mk2 (SG) (2002-2008)-2.5 XT Turbo": [
      { code: "EJ255", hp: "210 hp", torque: "320 Nm", profileId: "ej255-forester-xt-sg" },
      { code: "EJ255", hp: "230 hp", torque: "320 Nm", profileId: "ej255-forester-xt-sg-facelift" }
    ],
    "Subaru-Forester-Mk2 (SG) (2002-2008)-2.5 STI (JDM)": [
      { code: "EJ255", hp: "265 hp", torque: "378 Nm", profileId: "ej255-forester-sti-sg9" }
    ],
  
    "Subaru-Forester-Mk3 (SH) (2008-2013)-2.0 X": [
      { code: "EJ204", hp: "150 hp", torque: "196 Nm", profileId: "ej204-forester-sh" },
      { code: "FB20B", hp: "150 hp", torque: "198 Nm", profileId: "fb20b-forester-sh-facelift" }
    ],
    "Subaru-Forester-Mk3 (SH) (2008-2013)-2.5 XT Turbo": [
      { code: "EJ255", hp: "230 hp", torque: "320 Nm", profileId: "ej255-forester-xt-sh" }
    ],
    "Subaru-Forester-Mk3 (SH) (2008-2013)-2.0 D Boxer Diesel": [
      { code: "EE20Z", hp: "147 hp", torque: "350 Nm", profileId: "ee20z-forester-sh" }
    ],
  
    "Subaru-Forester-Mk4 (SJ) (2013-2018)-2.0 i": [
      { code: "FB20B", hp: "150 hp", torque: "198 Nm", profileId: "fb20b-forester-sj" }
    ],
    "Subaru-Forester-Mk4 (SJ) (2013-2018)-2.5 i": [
      { code: "FB25B", hp: "170 hp", torque: "235 Nm", profileId: "fb25b-forester-sj" }
    ],
    "Subaru-Forester-Mk4 (SJ) (2013-2018)-2.0 XT Turbo": [
      { code: "FA20F", hp: "240 hp", torque: "350 Nm", profileId: "fa20f-forester-xt-sj" }
    ],
    "Subaru-Forester-Mk4 (SJ) (2013-2018)-2.0 D Boxer Diesel": [
      { code: "EE20Z", hp: "147 hp", torque: "350 Nm", profileId: "ee20z-forester-sj" }
    ],
  
    "Subaru-Forester-Mk5 (SK) (2018-2024)-2.0 i": [
      { code: "FB20D", hp: "156 hp", torque: "196 Nm", profileId: "fb20d-forester-sk" }
    ],
    "Subaru-Forester-Mk5 (SK) (2018-2024)-2.5 i": [
      { code: "FB25D", hp: "182 hp", torque: "239 Nm", profileId: "fb25d-forester-sk" }
    ],
    "Subaru-Forester-Mk5 (SK) (2018-2024)-2.0 e-Boxer Hybrid": [
      { code: "FB20V", hp: "150 hp", torque: "194 Nm", profileId: "fb20v-forester-sk-hybrid" }
    ],
    "Subaru-Forester-Mk5 (SK) (2018-2024)-1.8 Turbo Sport": [
      { code: "CB18", hp: "177 hp", torque: "300 Nm", profileId: "cb18-forester-sk-sport" }
    ],
  
    "Subaru-Forester-Mk6 (SL) (2024-present)-2.5 i": [
      { code: "FB25D", hp: "180 hp", torque: "241 Nm", profileId: "fb25d-forester-sl" }
    ],
    "Subaru-Forester-Mk6 (SL) (2024-present)-2.0 e-Boxer Hybrid": [
      { code: "FB20V", hp: "150 hp", torque: "194 Nm", profileId: "fb20v-forester-sl-hybrid" }
    ],
  
    // --- XV / Crosstrek ---
    "Subaru-XV-Mk1 (GP) (2011-2017)-1.6 i": [
      { code: "FB16B", hp: "114 hp", torque: "150 Nm", profileId: "fb16b-xv-gp" }
    ],
    "Subaru-XV-Mk1 (GP) (2011-2017)-2.0 i": [
      { code: "FB20B", hp: "150 hp", torque: "196 Nm", profileId: "fb20b-xv-gp" }
    ],
    "Subaru-XV-Mk1 (GP) (2011-2017)-2.0 D Boxer Diesel": [
      { code: "EE20Z", hp: "147 hp", torque: "350 Nm", profileId: "ee20z-xv-gp" }
    ],
    "Subaru-XV-Mk1 (GP) (2011-2017)-2.0 Hybrid": [
      { code: "FB20X", hp: "160 hp", torque: "221 Nm", profileId: "fb20x-xv-gp-hybrid" }
    ],
  
    "Subaru-XV-Mk2 (GT) (2017-2023)-1.6 i": [
      { code: "FB16B", hp: "114 hp", torque: "150 Nm", profileId: "fb16b-xv-gt" }
    ],
    "Subaru-XV-Mk2 (GT) (2017-2023)-2.0 i": [
      { code: "FB20D", hp: "156 hp", torque: "196 Nm", profileId: "fb20d-xv-gt" }
    ],
    "Subaru-XV-Mk2 (GT) (2017-2023)-2.0 e-Boxer Hybrid": [
      { code: "FB20V", hp: "150 hp", torque: "194 Nm", profileId: "fb20v-xv-gt-hybrid" }
    ],
    "Subaru-XV-Mk2 (GT) (2017-2023)-2.0 PHEV": [
      { code: "FB20V", hp: "148 hp", torque: "190 Nm", profileId: "fb20v-xv-gt-phev" }
    ],
  
    "Subaru-Crosstrek-Mk1 (GU) (2023-present)-2.0 i": [
      { code: "FB20D", hp: "152 hp", torque: "197 Nm", profileId: "fb20d-crosstrek-gu" }
    ],
    "Subaru-Crosstrek-Mk1 (GU) (2023-present)-2.5 Sport": [
      { code: "FB25D", hp: "182 hp", torque: "241 Nm", profileId: "fb25d-crosstrek-gu" }
    ],
    "Subaru-Crosstrek-Mk1 (GU) (2023-present)-2.0 e-Boxer": [
      { code: "FB20V", hp: "150 hp", torque: "194 Nm", profileId: "fb20v-crosstrek-gu" }
    ],
  
    // --- Egyéb SUV ---
    "Subaru-Tribeca-B9 (WX) (2005-2007)-3.0 H6": [
      { code: "EZ30D", hp: "245 hp", torque: "297 Nm", profileId: "ez30d-tribeca-b9" }
    ],
    "Subaru-Tribeca-Facelift (2007-2014)-3.6 H6": [
      { code: "EZ36D", hp: "256 hp", torque: "335 Nm", profileId: "ez36d-tribeca-facelift" }
    ],
  
    "Subaru-Solterra-Mk1 (2022-present)-EV FWD": [
      { code: "1XM", hp: "201 hp", torque: "266 Nm", profileId: "1xm-solterra-fwd" }
    ],
    "Subaru-Solterra-Mk1 (2022-present)-EV AWD": [
      { code: "1YM", hp: "215 hp", torque: "337 Nm", profileId: "1ym-solterra-awd" }
    ],
  
    "Subaru-Baja-Mk1 (BT) (2002-2006)-2.5 i": [
      { code: "EJ253", hp: "165 hp", torque: "225 Nm", profileId: "ej253-baja" }
    ],
    "Subaru-Baja-Mk1 (BT) (2002-2006)-2.5 Turbo": [
      { code: "EJ255", hp: "210 hp", torque: "319 Nm", profileId: "ej255-baja-turbo" }
    ],
  
    // =============================================================================
    // SPORTS CARS
    // =============================================================================
  
    "Subaru-BRZ-Mk1 (ZC6) (2012-2020)-2.0 Boxer (FA20)": [
      { code: "FA20D", hp: "200 hp", torque: "205 Nm", profileId: "fa20d-brz-zc6" },
      { code: "FA20D", hp: "205 hp", torque: "211 Nm", profileId: "fa20d-brz-zc6-facelift" }
    ],
    "Subaru-BRZ-Mk1 (ZC6) (2012-2020)-2.0 Boxer tS": [
      { code: "FA20D", hp: "205 hp", torque: "211 Nm", profileId: "fa20d-brz-ts" }
    ],
  
    "Subaru-BRZ-Mk2 (ZD8) (2021-present)-2.4 Boxer (FA24)": [
      { code: "FA24D", hp: "228 hp", torque: "250 Nm", profileId: "fa24d-brz-zd8" }
    ],
  
    "Subaru-SVX-Mk1 (CX) (1991-1996)-3.3 H6 (EG33)": [
      { code: "EG33", hp: "230 hp", torque: "309 Nm", profileId: "eg33-svx" }
    ],
  
    "Subaru-XT-Mk1 (AX) (1985-1991)-1.8": [
      { code: "EA82", hp: "97 hp", torque: "140 Nm", profileId: "ea82-xt" }
    ],
    "Subaru-XT-Mk1 (AX) (1985-1991)-1.8 Turbo": [
      { code: "EA82T", hp: "111 hp", torque: "194 Nm", profileId: "ea82t-xt-turbo" },
      { code: "EA82T", hp: "136 hp", torque: "198 Nm", profileId: "ea82t-xt-turbo-us" }
    ],
    "Subaru-XT-Mk1 (AX) (1985-1991)-2.7 H6": [
      { code: "ER27", hp: "145 hp", torque: "212 Nm", profileId: "er27-xt6" }
    ],
  
    // =============================================================================
    // CITY / KEI CARS (Badge Engineering)
    // =============================================================================
  
    "Subaru-Justy-Mk1 (KAD) (1984-1995)-1.0": [
      { code: "EF10", hp: "55 hp", torque: "80 Nm", profileId: "ef10-justy-ka" }
    ],
    "Subaru-Justy-Mk1 (KAD) (1984-1995)-1.2": [
      { code: "EF12", hp: "68 hp", torque: "95 Nm", profileId: "ef12-justy-ka" },
      { code: "EF12", hp: "73 hp", torque: "96 Nm", profileId: "ef12-justy-ka-fi" }
    ],
  
    "Subaru-Justy-Mk2 (JMA/MS) (1995-2003)-1.3 GX (Suzuki)": [
      { code: "G13BB", hp: "68 hp", torque: "99 Nm", profileId: "g13bb-justy-jma" }
    ],
    "Subaru-Justy-Mk2 (JMA/MS) (1995-2003)-1.3 AWD": [
      { code: "G13BB", hp: "86 hp", torque: "110 Nm", profileId: "g13bb-justy-jma-awd" }
    ],
  
    "Subaru-Justy-Mk3 (G3X) (2003-2007)-1.3 (Suzuki)": [
      { code: "M13A", hp: "94 hp", torque: "118 Nm", profileId: "m13a-justy-g3x" }
    ],
    "Subaru-Justy-Mk3 (G3X) (2003-2007)-1.5 (Suzuki)": [
      { code: "M15A", hp: "99 hp", torque: "133 Nm", profileId: "m15a-justy-g3x" }
    ],
    "Subaru-Justy-Mk3 (G3X) (2003-2007)-1.3 DDiS Diesel": [
      { code: "Z13DT", hp: "70 hp", torque: "170 Nm", profileId: "z13dt-justy-g3x" }
    ],
  
    "Subaru-Justy-Mk4 (M300) (2007-2011)-1.0 (Toyota/Daihatsu)": [
      { code: "1KR-FE", hp: "69 hp", torque: "94 Nm", profileId: "1krfe-justy-m300" }
    ],
  
    "Subaru-G3X Justy-Mk1 (2003-2007)-1.3": [
      { code: "M13A", hp: "94 hp", torque: "118 Nm", profileId: "m13a-g3x-justy" }
    ],
    "Subaru-G3X Justy-Mk1 (2003-2007)-1.5": [
      { code: "M15A", hp: "99 hp", torque: "133 Nm", profileId: "m15a-g3x-justy" }
    ],
  
    "Subaru-Trezia-Mk1 (2010-2016)-1.3": [
      { code: "1NR-FE", hp: "99 hp", torque: "132 Nm", profileId: "1nrfe-trezia" }
    ],
    "Subaru-Trezia-Mk1 (2010-2016)-1.4 D-4D Diesel": [
      { code: "1ND-TV", hp: "90 hp", torque: "205 Nm", profileId: "1ndtv-trezia" }
    ],
  
    "Subaru-Vivio-Mk1 (KK/KY) (1992-1998)-660cc": [
      { code: "EN07", hp: "52 hp", torque: "54 Nm", profileId: "en07-vivio" },
      { code: "EN07", hp: "42 hp", torque: "52 Nm", profileId: "en07-vivio-carb" }
    ],
    "Subaru-Vivio-Mk1 (KK/KY) (1992-1998)-660cc Supercharged": [
      { code: "EN07Z", hp: "64 hp", torque: "84 Nm", profileId: "en07z-vivio-rxr" }
    ],
  
    "Subaru-Libero-Mk1 (E10) (1983-1993)-1.0": [
      { code: "EF10", hp: "50 hp", torque: "75 Nm", profileId: "ef10-libero-e10" }
    ],
    "Subaru-Libero-Mk1 (E10) (1983-1993)-1.2": [
      { code: "EF12", hp: "52 hp", torque: "82 Nm", profileId: "ef12-libero-e10" }
    ],
    "Subaru-Libero-Mk2 (E12) (1993-1998)-1.2": [
      { code: "EF12", hp: "54 hp", torque: "97 Nm", profileId: "ef12-libero-e12" }
    ],
  
    "Subaru-Mini Jumbo-Mk1 (M70/M80) (1981-1992)-660cc": [
      { code: "EK42", hp: "37 hp", torque: "50 Nm", profileId: "ek42-mini-jumbo" }
    ],
    "Subaru-Mini Jumbo-Mk1 (M70/M80) (1981-1992)-758cc": [
      { code: "EK42", hp: "42 hp", torque: "60 Nm", profileId: "ek42-mini-jumbo-758" }
    ],
  
    // =============================================================================
    // CLASSICS
    // =============================================================================
  
    "Subaru-Leone-Mk1 (1971-1979)-1.2": [
      { code: "EA62", hp: "62 hp", torque: "93 Nm", profileId: "ea62-leone-mk1" }
    ],
    "Subaru-Leone-Mk1 (1971-1979)-1.4": [
      { code: "EA63", hp: "72 hp", torque: "103 Nm", profileId: "ea63-leone-mk1" }
    ],
    "Subaru-Leone-Mk1 (1971-1979)-1.6": [
      { code: "EA71", hp: "80 hp", torque: "115 Nm", profileId: "ea71-leone-mk1" }
    ],
  
    "Subaru-Leone-Mk2 (1979-1984)-1.6": [
      { code: "EA71", hp: "72 hp", torque: "115 Nm", profileId: "ea71-leone-mk2" }
    ],
    "Subaru-Leone-Mk2 (1979-1984)-1.8": [
      { code: "EA81", hp: "82 hp", torque: "135 Nm", profileId: "ea81-leone-mk2" }
    ],
    "Subaru-Leone-Mk2 (1979-1984)-1.8 Turbo": [
      { code: "EA81T", hp: "95 hp", torque: "170 Nm", profileId: "ea81t-leone-mk2" }
    ],
  
    "Subaru-Leone-Mk3 (1984-1994)-1.6": [
      { code: "EA71", hp: "73 hp", torque: "115 Nm", profileId: "ea71-leone-mk3" }
    ],
    "Subaru-Leone-Mk3 (1984-1994)-1.8": [
      { code: "EA82", hp: "90 hp", torque: "140 Nm", profileId: "ea82-leone-mk3" }
    ],
    "Subaru-Leone-Mk3 (1984-1994)-1.8 Turbo": [
      { code: "EA82T", hp: "115 hp", torque: "185 Nm", profileId: "ea82t-leone-mk3" },
      { code: "EA82T", hp: "135 hp", torque: "196 Nm", profileId: "ea82t-leone-mk3-rx" }
    ],
  
    "Subaru-1800-Mk3 (1984-1994)-1.8": [
      { code: "EA82", hp: "90 hp", torque: "140 Nm", profileId: "ea82-1800" }
    ],
    "Subaru-1800-Mk3 (1984-1994)-1.8 Turbo": [
      { code: "EA82T", hp: "135 hp", torque: "196 Nm", profileId: "ea82t-1800" }
    ],
  
    "Subaru-BRAT-Mk1 (1978-1994)-1.6": [
      { code: "EA71", hp: "67 hp", torque: "110 Nm", profileId: "ea71-brat" }
    ],
    "Subaru-BRAT-Mk1 (1978-1994)-1.8": [
      { code: "EA81", hp: "73 hp", torque: "127 Nm", profileId: "ea81-brat" }
    ],
    "Subaru-BRAT-Mk1 (1978-1994)-1.8 Turbo": [
      { code: "EA81T", hp: "95 hp", torque: "167 Nm", profileId: "ea81t-brat" }
    ]
  };