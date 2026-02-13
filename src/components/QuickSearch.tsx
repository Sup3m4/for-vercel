import { useState, useMemo, useEffect, useRef } from "react";
import { Search, Loader2, ChevronRight, AlertCircle, X, Car, Zap, Gauge, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { carDatabase } from "@/data/carDatabase";
import { cn } from "@/lib/utils";
import * as cheerio from 'cheerio';

// =============================================================================
// HELPER: LOGO
// =============================================================================
const BrandLogo = ({ brand }: { brand: string }) => {
  const [error, setError] = useState(false);
  const fileName = brand.toLowerCase().replace(/\s+/g, '-') + ".png";
  const imagePath = `/logos/${fileName}`; 

  if (error) {
    return (
      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 shadow-sm">
        <Car className="w-8 h-8 text-slate-400" />
      </div>
    );
  }

  return (
    <img 
      src={imagePath} 
      alt={brand} 
      onError={() => setError(true)}
      className="w-16 h-16 object-contain transition-transform hover:scale-105 duration-300" 
    />
  );
};

// =============================================================================
// TYPES
// =============================================================================
interface QuickSearchProps {
  onEngineCodeFound: (brand: string, model: string, generation: string, engineType: string, engineCode: string) => void;
}

interface MatchResult {
  brand: string;
  model: string;
  generation: string;
  engineType: string;
  code: string;
  hp?: string;      // ÚJ MEZŐ: Lóerő
  torque?: string;  // ÚJ MEZŐ: Nyomaték
  searchString: string;
  score: number;
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export function QuickSearch({ onEngineCodeFound }: QuickSearchProps) {
  const [searchType, setSearchType] = useState<"vin" | "code">("code");
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<MatchResult[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [showSmartSelector, setShowSmartSelector] = useState(false);
  const [foundMatches, setFoundMatches] = useState<MatchResult[]>([]);
  
  // --- ADATBÁZIS ELŐKÉSZÍTÉSE ---
  const flatDb = useMemo(() => {
    const list: MatchResult[] = [];
    if (carDatabase && carDatabase.engineCodes) {
      Object.entries(carDatabase.engineCodes).forEach(([key, variants]) => {
        const parts = key.split('-');
        if (parts.length < 3) return; // Biztonsági ellenőrzés

        const brand = parts[0];
        const model = parts[1]; 
        
        // Ez a logika biztosabb a generáció/típus szétválasztására:
        const genAndType = parts.slice(2).join('-');
        const lastDash = genAndType.lastIndexOf('-');
        
        let generation = "Unknown";
        let engineType = genAndType;

        if (lastDash !== -1) {
             generation = genAndType.substring(0, lastDash);
             engineType = genAndType.substring(lastDash + 1);
        }

        if (Array.isArray(variants)) {
          variants.forEach((v: any) => {
            // A keresési stringbe minden kulcsszót beteszünk
            const fullString = (key + " " + brand + " " + model + " " + generation + " " + engineType + " " + v.code).toUpperCase();
            list.push({
              brand,
              model,
              generation,
              engineType,
              code: v.code,
              hp: v.hp,         
              torque: v.torque, 
              searchString: fullString,
              score: 0
            });
          });
        }
      });
    }
    return list;
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const updateSearch = (value: string) => {
    setSearchValue(value);
    setError(null);
    const normalizedSearch = value.replace(/\s+/g, '').toUpperCase();

    if (searchType === "code" && normalizedSearch.length >= 1) {
      const filtered = flatDb.filter(item => {
        // Pontos másolata az EngineComparator logikájának:
        const normCode = item.code ? item.code.replace(/\s+/g, '').toUpperCase() : "";
        const normModel = (item.brand + item.model).replace(/\s+/g, '').toUpperCase();
        
        // Keresés Kódban VAGY Modellnévben
        return normCode.includes(normalizedSearch) || normModel.includes(normalizedSearch);
      });

      // Duplikációk szűrése
      const unique = Array.from(new Map(filtered.map(m => [m.code + m.model + m.engineType, m])).values());
      
      setSuggestions(unique.slice(0, 50));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (match: MatchResult) => {
    setSearchValue(match.code);
    setShowSuggestions(false);
    onEngineCodeFound(match.brand, match.model, match.generation, match.engineType, match.code);
  };

  // --- HTML LETÖLTŐ ---
  const fetchHtml = async (vin: string): Promise<string | null> => {
    const targetUrl = `https://www.freevindecoder.eu/en/${vin}`;
    
    // 1. CodeTabs
    try {
        const res = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`);
        if (res.ok) {
            const text = await res.text();
            if (text.length > 2000 && !text.includes("Just a moment")) return text;
        }
    } catch (e) {}

    // 2. CorsProxy
    try {
        const res = await fetch(`https://corsproxy.io/?${encodeURIComponent(targetUrl)}`);
        if (res.ok) {
            const text = await res.text();
            if (text.length > 2000) return text;
        }
    } catch (e) {}

    // 3. AllOrigins
    try {
        const res = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`);
        if (res.ok) {
            const text = await res.text();
            if (text.length > 2000) return text;
        }
    } catch (e) {}

    return null;
  };

  // --- HELPER: Motoradat ellenőrzés ---
  const isDetailedEngine = (s: string) => {
      if (!s) return false;
      return /(\d+\.\d+)|(\d+\s*L)|(\d+\s*cc)/i.test(s);
  };

  // --- HELPER: GENERÁCIÓ KIBONTÓ ---
  const expandGenerationCodes = (genString: string): string[] => {
      const cleanGen = genString.split('(')[0].toUpperCase(); 
      const parts = cleanGen.split(/[\/\s,]+/).filter(p => p.length > 0);
      
      if (parts.length === 0) return [];

      const result: string[] = [];
      const prefixMatch = parts[0].match(/^([A-Z]+)/); 
      const prefix = prefixMatch ? prefixMatch[1] : ""; 

      parts.forEach(part => {
          if (/^[A-Z]/.test(part)) {
              result.push(part);
          } 
          else if (prefix && /^\d+$/.test(part)) {
              result.push(prefix + part);
          }
          result.push(part);
      });
      return result;
  };

  // --- FŐ KERESÉS ---
  const handleSearch = async (overrideValue?: string) => {
    let freeApiDisplacementFound = false;
    let generationMatchFound = false; 
    
    const rawTerm = (overrideValue || searchValue).trim().toUpperCase();
    if (!rawTerm) return;

    setIsSearching(true);
    setError(null);
    setFoundMatches([]);
    setShowSmartSelector(false);

    // A) MOTORKÓD KERESÉS
    if (searchType === "code") {
      const matches = flatDb.filter(i => i.code.replace(/\s/g,'') === rawTerm);
      if (matches.length === 0) {
        setError(`Code "${rawTerm}" not found.`);
      } else if (matches.length === 1) {
         const m = matches[0];
         onEngineCodeFound(m.brand, m.model, m.generation, m.engineType, m.code);
      } else {
        setFoundMatches(matches);
        setShowSmartSelector(true);
      }
      setIsSearching(false);
      return;
    } 
    
    // B) VIN KERESÉS
    if (rawTerm.length !== 17) {
      setError(`VIN must be 17 characters.`);
      setIsSearching(false);
      return;
    }

    try {
      console.log("🔍 Keresés indítása: FreeVinDecoder & NHTSA...");
      const [nhtsaResponse, htmlContent] = await Promise.all([
          fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${rawTerm}?format=json`).then(r => r.json()).catch(() => null),
          fetchHtml(rawTerm)
      ]);

      // --- 1. FVD ADATOK PARSOLÁSA ---
      let fvdData = { Make: "", Model: "", Year: "", Trim: "", Engine: "", Fuel: "" };
      
      if (htmlContent) {
          const $ = cheerio.load(htmlContent);
          const cleanKey = (k: string) => k.toLowerCase().replace(/[^a-z]/g, "");

          $('.info-left').each((i, el) => {
              const keyRaw = $(el).text();
              const key = cleanKey(keyRaw);
              const val = $(el).next('.info-right').text().trim();
              
              if (val) {
                  if (key.includes("make") || key.includes("gyartmany") || key.includes("keszit")) fvdData.Make = val;
                  if ((key.includes("model") || key.includes("modell")) && !key.includes("year")) fvdData.Model = val;
                  if (key.includes("year") || key.includes("evjarat")) fvdData.Year = val;
                  if (key.includes("fuel") || key.includes("uzemanyag")) fvdData.Fuel = val;
                  
                  if (key.includes("trim") || key.includes("vagasi") || key.includes("vágási") || key.includes("felszereltseg")) {
                      fvdData.Trim = val;
                  }
                  
                  if (key.includes("engine") || key.includes("motor")) {
                      if (!key.includes("power") && !key.includes("teljesitmeny")) {
                          if (isDetailedEngine(fvdData.Engine) && !isDetailedEngine(val)) {
                              // keep old
                          } else {
                              fvdData.Engine = val;
                          }
                      }
                  }
              }
          });
          
          console.log("📄 Parsolt FVD Adatok:", fvdData);
      }

      // --- 2. NHTSA ADATOK ---
      let nhtsaData = { Make: "", Model: "", Year: "", Trim: "", Engine: "", Fuel: "" };
      if (nhtsaResponse?.Results) {
          const getVal = (v: string) => {
            const res = nhtsaResponse.Results.find((r:any) => r.Variable === v);
            return (res && res.Value && res.Value !== "null") ? res.Value : "";
          }
          nhtsaData.Make = getVal("Make");
          nhtsaData.Model = getVal("Model");
          nhtsaData.Year = getVal("Model Year");
          nhtsaData.Trim = getVal("Trim");
          nhtsaData.Fuel = getVal("Fuel Type - Primary");
          const disp = getVal("Displacement (L)");
          const cyl = getVal("Engine Cylinders");
          if (disp) nhtsaData.Engine = `${disp}L ${cyl} Cyl`; 
          else if (cyl) nhtsaData.Engine = `${cyl} Cyl`;
      }

      // --- 3. MERGE ---
      let bestEngine = "";
      if (isDetailedEngine(fvdData.Engine)) bestEngine = fvdData.Engine;
      else if (isDetailedEngine(nhtsaData.Engine)) bestEngine = nhtsaData.Engine;
      else bestEngine = (fvdData.Engine.length > nhtsaData.Engine.length) ? fvdData.Engine : nhtsaData.Engine;

      const final = {
          Make: fvdData.Make || nhtsaData.Make,
          Model: fvdData.Model || nhtsaData.Model,
          Year: fvdData.Year || nhtsaData.Year,
          Trim: fvdData.Trim || nhtsaData.Trim, 
          Engine: bestEngine,
          Fuel: fvdData.Fuel || nhtsaData.Fuel
      };
      
      if (final.Model && final.Model.includes("/")) {
        console.log(`⚠️ Kétértelmű modell detektálva ("${final.Model}"). AI megkérdezése a pontosításért...`);
        
        try {
            // Meghívjuk ugyanazt az AI végpontot a VIN-nel
            const aiRes = await fetch(`http://localhost:3001/api/decode/${rawTerm}`);
            
            if (aiRes.ok) {
                const aiData = await aiRes.json();
                
                // Ha az AI visszaküldött egy értelmezhető modellt, és az nem tartalmaz perjelet
                if (aiData.model && aiData.model.trim() !== "" && !aiData.model.includes("/")) {
                    console.log(`🤖 AI SIKERES PONTOSÍTÁS: "${final.Model}" -> "${aiData.model}"`);
                    
                    // Felülírjuk a közös modellt a pontosítottal
                    final.Model = aiData.model;
                } else {
                    console.log("🤖 Az AI sem tudta pontosítani vagy ugyanazt küldte vissza.");
                }
            }
        } catch (e) {
            console.warn("Nem sikerült elérni az AI-t a pontosításhoz (folytatás az eredeti névvel).", e);
        }
    }
    // =========================================================

    console.log("🏁 VÉGSŐ ADATOK (Szűréshez):", final);

      // ---------------------------------------------------------
      // SZŰRÉS (L1-L7)
      // ---------------------------------------------------------
      let candidates: MatchResult[] = [];

      if (final.Make) {
          const targetMake = final.Make.toUpperCase().includes("MERCEDES") ? "MERCEDES" : final.Make.toUpperCase();
          const targetModel = final.Model.toUpperCase().replace(/[^A-Z0-9]/g, '');
          const targetYear = parseInt(final.Year);

          // L1: MÁRKA
          candidates = flatDb.filter(item => 
              item.brand.toUpperCase() === targetMake || targetMake.includes(item.brand.toUpperCase())
          );

          // L2: MODELL
          if (candidates.length > 0) {
              candidates = candidates.filter(item => {
                  const dbString = item.searchString;
                  if (targetMake === "MERCEDES") {
                      const vinClassLetter = targetModel.charAt(0);
                      if (item.model.toUpperCase().startsWith(vinClassLetter)) return true;
                      return false;
                  }
                  if (targetModel.length > 1) {
                      if (!dbString.includes(targetModel) && !targetModel.includes(item.model.toUpperCase())) return false;
                  }
                  return true;
              });
          }

          // L3: GENERÁCIÓ SZŰRÉS
          if (candidates.length > 0 && final.Trim) {
              const trimParts = final.Trim.toUpperCase().split(/[\s,/-]+/).filter(p => p.length >= 2);
              
              for (const part of trimParts) {
                   const genMatches = candidates.filter(item => {
                       const expanded = expandGenerationCodes(item.generation);
                       return expanded.some(code => code === part);
                   });
                   
                   if (genMatches.length > 0 && genMatches.length < candidates.length) {
                       console.log(`🎯 Generáció szűrés (Trim: ${part}) -> ${genMatches.length} találat`);
                       candidates = genMatches;
                       generationMatchFound = true;
                       break; 
                   }
              }
          }

          // L4: ÉVJÁRAT
          if (candidates.length > 0 && !isNaN(targetYear)) {
              candidates = candidates.filter(item => {
                  const years = item.generation.match(/(\d{4})/g);
                  if (years && years.length >= 1) {
                      const start = parseInt(years[0]);
                      const end = years.length > 1 ? parseInt(years[1]) : new Date().getFullYear();
                      if (targetYear < start || targetYear > end) return false;
                  }
                  return true;
              });
          }
          
          // L5: ÜZEMANYAG
          if (candidates.length > 0 && final.Fuel) {
            const isVinDiesel = final.Fuel.toUpperCase().includes("DIESEL");
            const isVinPetrol = final.Fuel.toUpperCase().includes("GASOLINE") || final.Fuel.toUpperCase().includes("PETROL");

            candidates = candidates.filter(item => {
                const itemEt = item.engineType.toUpperCase();
                const itemDiesel = itemEt.includes("D") || itemEt.includes("TDI") || itemEt.includes("CDI");
                if (isVinDiesel) return itemDiesel; 
                if (isVinPetrol) return !itemDiesel; 
                return true;
            });
        }

        // L6: HENGERŰRTARTALOM SZŰRÉS
        if (candidates.length > 1 && final.Engine) {
          const dispMatch = final.Engine.match(/(\d+\.\d+)/); 
          
          if (dispMatch) {
              const targetDisp = dispMatch[1];
              console.log(`🎯 Motoradat alapján szűrés erre: ${targetDisp}`);

              freeApiDisplacementFound = true; 

              const filteredByDisp = candidates.filter(item => {
                  const dbText = (item.engineType + " " + item.model + " " + item.searchString).toUpperCase();
                  return dbText.includes(targetDisp);
              });

              if (filteredByDisp.length > 0) {
                  candidates = filteredByDisp;
              }
          }
        }

        // L7: SZELEPSZÁM SZŰRÉS
        if (candidates.length > 1 && final.Engine) {
             const valveMatch = final.Engine.match(/(\d+)\s*V\b/i); 
             if (valveMatch) {
                 const targetValve = valveMatch[0].toUpperCase().replace(/\s+/g, ''); 
                 const filteredByValve = candidates.filter(item => item.searchString.toUpperCase().includes(targetValve));
                 if (filteredByValve.length > 0) {
                     candidates = filteredByValve;
                     freeApiDisplacementFound = true;
                 }
             }
        }
      }

      // ---------------------------------------------------------
      // DÖNTÉS
      // ---------------------------------------------------------
      
      if (candidates.length === 1) {
        const winner = candidates[0];
        onEngineCodeFound(winner.brand, winner.model, winner.generation, winner.engineType, winner.code);
        setIsSearching(false);
        return;
      }

      if (candidates.length > 1 && (freeApiDisplacementFound || generationMatchFound)) {
          console.log("✅ Van elég infó (Gen/Motor), lista mutatása AI nélkül.");
          setFoundMatches(candidates);
          setShowSmartSelector(true);
          setIsSearching(false);
          return;
      }

      console.log("🤔 Kevés az infó. AI hívása...");
      
      try {
          const aiRes = await fetch(`http://localhost:3001/api/decode/${rawTerm}`);
          
          if (aiRes.ok) {
              const aiData = await aiRes.json();
              console.log("🤖 AI Válasz:", aiData);

              if (aiData.engineCode) {
                   const cleanAiCode = aiData.engineCode.replace(/\s+/g, '').toUpperCase();
                   if (candidates.length > 1) {
                       const filtered = candidates.filter(i => i.code.replace(/\s+/g, '').toUpperCase().includes(cleanAiCode));
                       if (filtered.length > 0) candidates = filtered;
                   } else if (candidates.length === 0) {
                       const aiMatches = flatDb.filter(i => i.code.replace(/\s+/g, '').toUpperCase().includes(cleanAiCode));
                       if (aiMatches.length > 0) candidates = aiMatches;
                       else {
                          candidates = [{
                            brand: aiData.brand || "Unknown",
                            model: aiData.model || "Unknown",
                            generation: "AI PREDICTION",
                            engineType: aiData.engineType || "Unknown Type",
                            code: cleanAiCode,
                            searchString: "",
                            score: 100
                          }];
                          setError(`⚠️ SIKER! Motorkód: ${cleanAiCode} (Nincs a DB-ben)`);
                       }
                   }
              } 
              else if ((candidates.length === 0 || candidates.length > 1) && aiData.brand && aiData.model) {
                const aiBrand = aiData.brand.toUpperCase();
                let baseModelName = aiData.model.toUpperCase(); 
                
                let targetGeneration = "";
                const romanMap: Record<string, string> = { "I": "1", "II": "2", "III": "3", "IV": "4", "V": "5", "VI": "6", "VII": "7", "VIII": "8" };
                const romanRegex = /\s(VIII|VII|VI|V|IV|III|II|I)$/;
                const romanMatch = baseModelName.match(romanRegex);
                const bSeriesRegex = /\sB(\d+)$/; 
                const bMatch = baseModelName.match(bSeriesRegex);

                if (romanMatch && romanMap[romanMatch[1]]) {
                    targetGeneration = `MK${romanMap[romanMatch[1]]}`;
                    baseModelName = baseModelName.replace(romanRegex, '').trim(); 
                } else if (bMatch) {
                    baseModelName = baseModelName.replace(bSeriesRegex, '').trim();
                } else if (baseModelName.includes("MK4")) {
                    targetGeneration = "MK4";
                }

                const cleanModel = baseModelName.replace(/\(MK\d+\)/g, '').replace(/MK\d+/g, '').trim();
                const possibleModelNames = cleanModel.split('/').map(s => s.trim()).filter(s => s.length > 0);

                let targetDisplacement = "";
                if (aiData.engineType) {
                    const dispMatch = aiData.engineType.match(/(\d+\.\d+)/);
                    if (dispMatch) targetDisplacement = dispMatch[0];
                }

                let sourceList = (candidates.length > 1) ? candidates : flatDb;
                
                const newCandidates = sourceList.filter(item => {
                    if (candidates.length === 0 && !item.brand.toUpperCase().includes(aiBrand)) return false;
                    const dbModel = item.model.toUpperCase();
                    const isModelMatch = possibleModelNames.some(name => dbModel.includes(name));
                    if (candidates.length === 0 && !isModelMatch) return false;

                    if (targetGeneration && !(item.generation + " " + item.searchString).toUpperCase().includes(targetGeneration)) return false;
                    if (targetDisplacement && !(item.engineType + " " + item.searchString).toUpperCase().includes(targetDisplacement)) return false;

                    if (aiData.engineType) {
                        const et = aiData.engineType.toUpperCase();
                        const itemEt = item.engineType.toUpperCase();
                        if ((et.includes("DIESEL") || et.includes("TDI")) && (!itemEt.includes("D") && !itemEt.includes("TDI"))) return false;
                        if ((et.includes("PETROL") || et.includes("GASOLINE")) && (itemEt.includes("DIESEL") || itemEt.includes("TDI"))) return false;
                    }
                    return true;
                });

                if (newCandidates.length > 0) candidates = newCandidates;
           }
          }
      } catch (e) {
          console.error("AI szerver hiba", e);
      }

  if (candidates.length === 0) {
      setError(`No engine found for VIN ${rawTerm}.`);
  } else if (candidates.length === 1) {
      const winner = candidates[0];
      onEngineCodeFound(winner.brand, winner.model, winner.generation, winner.engineType, winner.code);
  } else {
      setFoundMatches(candidates);
      setShowSmartSelector(true);
  }

} catch (err) {
  console.error(err);
  setError("Service unavailable.");
} finally {
  setIsSearching(false);
}
};

return (
  <>
    <div className="w-full max-w-2xl mx-auto mb-8 relative z-50" ref={wrapperRef}>
      {/* FONTOS: 'overflow-visible' kell, különben levágja a listát! */}
      <div className="glass-card rounded-2xl p-4 md:p-6 relative overflow-visible transition-all">
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <Search className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Quick Search</h3>
        </div>

        <div className="flex justify-center gap-2 mb-4">
          <button onClick={() => { setSearchType("code"); setSearchValue(""); }} className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-all", searchType === "code" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground")}>Engine Code</button>
          <button onClick={() => { setSearchType("vin"); setSearchValue(""); }} className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-all", searchType === "vin" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground")}>VIN Number</button>
        </div>
        
        <div className="flex gap-2 relative z-[100]">
          <div className="relative flex-1">
          <input
                type="text"
                value={searchValue}
                onChange={(e) => updateSearch(e.target.value)} // ITT A VÁLTOZÁS
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                onFocus={() => searchType === "code" && updateSearch(searchValue)} // ITT IS
                placeholder={searchType === "code" ? "Type code (e.g. B58, BAM...)" : "Enter 17-digit VIN"}
                className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary/50 uppercase font-mono"
                maxLength={searchType === "vin" ? 17 : 20}
              />
            
            {/* LEGÖRDÜLŐ LISTA */}
            {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-2xl z-[999] overflow-hidden max-h-[350px] overflow-y-auto custom-scrollbar">
                    {suggestions.map((s, i) => (
                        <button 
                          key={i} 
                          onClick={() => selectSuggestion(s)} 
                          className="w-full text-left p-4 hover:bg-muted/50 border-b border-border/50 last:border-0 flex items-center justify-between group transition-colors"
                        >
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2 mb-1">
                                  <span className="font-bold font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded text-sm">{s.code}</span>
                                  <span className="font-bold text-foreground">{s.brand} {s.model}</span>
                              </div>
                              <div className="text-xs text-muted-foreground flex items-center gap-2">
                                  <span className="bg-secondary px-1.5 py-0.5 rounded">{s.generation}</span>
                                  <span>•</span>
                                  <span>{s.engineType}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-4">
                                {(s.hp || s.torque) && (
                                  <div className="text-right hidden sm:block">
                                      {s.hp && (
                                          <div className="flex items-center gap-1 justify-end text-xs font-bold text-muted-foreground">
                                              {s.hp} <Zap className="w-3 h-3 text-yellow-500" />
                                          </div>
                                      )}
                                      {s.torque && (
                                          <div className="flex items-center gap-1 justify-end text-xs font-bold text-muted-foreground">
                                              {s.torque} <Gauge className="w-3 h-3 text-blue-500" />
                                          </div>
                                      )}
                                  </div>
                                )}
                                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                            </div>
                        </button>
                    ))}
                </div>
            )}
          </div>

          <Button onClick={() => handleSearch()} disabled={isSearching || !searchValue.trim()} className="h-12 px-6">
            {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
          </Button>
        </div>

        {error && <div className="mt-3 flex items-center justify-center gap-2 text-sm text-destructive"><AlertCircle className="w-4 h-4" /><span>{error}</span></div>}
      </div>
    </div>

    {showSmartSelector && (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-300">
         <div className="bg-background w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl relative border border-border overflow-hidden">
            <div className="p-6 border-b border-border bg-muted/30">
              <button onClick={() => setShowSmartSelector(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                  <X className="w-6 h-6"/>
              </button>
              <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                      <AlertCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Match Found</h3>
                  <p className="text-muted-foreground mt-2 max-w-md">
                      Please confirm the exact variant for <strong>{foundMatches[0]?.brand} {foundMatches[0]?.model}</strong>.
                  </p>
              </div>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar space-y-3">
                  {foundMatches.map((m, i) => (
                      <button 
                          key={i} 
                          onClick={() => { setShowSmartSelector(false); onEngineCodeFound(m.brand, m.model, m.generation, m.engineType, m.code) }} 
                          className="w-full text-left p-4 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all flex items-center justify-between group"
                      >
                          <div className="flex items-center gap-5">
                              <div className="shrink-0"><BrandLogo brand={m.brand} /></div>
                              <div>
                                  <div className="font-bold text-lg flex items-center gap-2">
                                      {m.model} 
                                      <span className="px-2 py-0.5 rounded text-sm bg-primary/10 text-primary font-medium">{m.engineType}</span>
                                  </div>
                                  <div className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                                      <span className="font-mono bg-muted px-1.5 py-0.5 rounded text-foreground">{m.code}</span>
                                      {m.hp && <span className="text-muted-foreground">• {m.hp}</span>}
                                      <span className="text-muted-foreground">• {m.generation}</span>
                                  </div>
                              </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                      </button>
                  ))}
            </div>
         </div>
      </div>
    )}
  </>
);
}