import React, { useState, useMemo, useEffect, useRef } from "react";
import { Search, X, RotateCcw, Zap, Fuel, Gauge, Car, Star, ChevronRight, Hash, ChevronDown, ChevronUp, AlertTriangle, ThumbsUp, ThumbsDown, Wrench, Activity, Database, Scale, Thermometer, Wind, Settings, Cpu, Mic2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { carDatabase } from "@/data/carDatabase"; 
import { useAuth } from "@clerk/clerk-react";
import { audiEngineCodesList} from "@/data/carDatabase/engines/audi-enginecodeslist"; // Importáljuk az új adatbázist
import { useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";

// --- TÍPUSOK ---
interface EngineMatch {
  brand: string;
  model: string;
  generation: string;
  engineType: string;
  code: string;
  hp?: string;
  torque?: string;
}



// --- KERESŐ MEZŐ KOMPONENS ---
const EngineSearchField = ({ onSelect, placeholder }: { onSelect: (e: EngineMatch) => void, placeholder: string }) => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<EngineMatch[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  

  const flatDb = useMemo(() => {
    const list: EngineMatch[] = [];
    const addedCodes = new Set<string>();

    // 1. Részletes adatbázis betöltése
    Object.values(audiEngineCodesList).forEach((engine) => {
        list.push({
            brand: "Audi",
            model: "Engine Code",
            generation: "Detailed DB",
            engineType: engine.configuration,
            code: engine.id,
            hp: engine.horsepower.split('/')[1]?.trim() || engine.horsepower,
            torque: engine.torque
        });
        addedCodes.add(engine.id);
    });
    
    // 2. Régi adatbázisból a maradék
    if (carDatabase && carDatabase.engineCodes) {
      Object.entries(carDatabase.engineCodes).forEach(([key, variants]) => {
        const parts = key.split('-');
        if (parts.length < 3) return;
        const brand = parts[0];
        const model = parts[1];
        const genAndType = parts.slice(2).join('-');
        
        if (Array.isArray(variants)) {
          variants.forEach((v: any) => {
            if (v && v.code && !addedCodes.has(v.code)) {
                list.push({ 
                  brand, model, generation: genAndType, engineType: genAndType, 
                  code: v.code, hp: v.hp, torque: v.torque 
                });
                addedCodes.add(v.code);
            }
          });
        }
      });
    }
    return list;
  }, []);

  const updateSearch = (value: string) => {
    setSearchValue(value);
    const normSearch = value.replace(/\s+/g, '').toUpperCase();

    if (normSearch.length >= 1) {
      const filtered = flatDb.filter(item => {
        const normCode = item.code ? item.code.replace(/\s+/g, '').toUpperCase() : "";
        return normCode.includes(normSearch); 
      });
      
      const unique = Array.from(new Map(filtered.map(m => [m.code, m])).values());
      unique.sort((a, b) => a.code.localeCompare(b.code));
      setSuggestions(unique.slice(0, 50)); 
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative w-full z-[50]" ref={wrapperRef}>
      <div className="relative">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => updateSearch(e.target.value)}
          onFocus={() => updateSearch(searchValue)}
          placeholder={placeholder}
          className="w-full h-14 pl-12 pr-4 rounded-xl border border-slate-300 bg-white focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none font-mono uppercase text-lg shadow-sm transition-all"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
      </div>

      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl z-[100] overflow-hidden max-h-[350px] overflow-y-auto custom-scrollbar ring-1 ring-black/5">
          {suggestions.length > 0 ? (
            suggestions.map((s, i) => (
              <button 
                key={i} 
                onClick={() => { onSelect(s); setShowSuggestions(false); setSearchValue(s.code); }} 
                className="w-full text-left p-4 hover:bg-slate-50 flex items-center justify-between group border-b border-slate-100 last:border-0 transition-colors"
              >
                <div className="flex items-center gap-3">
                <Hash className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                   <span className="font-bold font-mono text-lg text-slate-800 group-hover:text-primary transition-colors">
                     {s.code}
                   </span>
                   {audiEngineCodesList[s.code] && (
                     <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
                       Detailed
                     </span>
                   )}
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-transform group-hover:translate-x-1" />
              </button>
            ))
          ) : (
            <div className="p-4 text-center text-slate-400 text-sm">No engine code found.</div>
          )}
        </div>
      )}
    </div>
  );
};

// --- ENGINE DISPLAY COMPONENT ---
const EngineDisplay = ({ engine, onReset, side }: { engine: EngineMatch, onReset: () => void, side: string }) => {
  const details = audiEngineCodesList[engine.code]; 
  const hasImage = details?.imageUrl;
  
  // Állapot a nagyításhoz
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  // Egér követése a képen
  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setCursorPos({ x, y });
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-300 h-full w-full">
      <div className="rounded-2xl p-6 relative overflow-hidden bg-slate-900 text-white shadow-2xl border border-white/10 h-full flex flex-col min-h-[400px]">
        
        {/* Háttér ikon */}
        {!hasImage && (
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            {engine.engineType.includes("TDI") || engine.engineType.includes("D") ? <Fuel size={150} /> : <Zap size={150} />}
          </div>
        )}
        
        <div className="relative z-10 flex-1 flex flex-col">
          {/* FEJLÉC */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80">Engine {side}</span>
              <div className="h-1 w-8 bg-primary rounded-full"></div>
            </div>
            <Button variant="ghost" size="icon" onClick={onReset} className="text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* KÖZÉPSŐ RÉSZ: KÉP NAGYÍTÁSSAL */}
          <div className="flex-1 flex flex-col justify-center items-center my-2">
            {hasImage ? (
               <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-xl">
                  {/* KÉP LOGIKA */}
                  <img 
                    src={details.imageUrl} 
                    alt={engine.code}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onMouseMove={handleMouseMove}
                    className="w-full h-auto max-h-[250px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-crosshair"
                    style={{
                        transformOrigin: `${cursorPos.x}% ${cursorPos.y}%`,
                        transform: isHovering ? "scale(2.5)" : "scale(1)", // Itt állítod a nagyítás mértékét (2.5x)
                        transition: "transform 0.1s ease-out" // Gyors reakció a mozgásra
                    }}
                  />
                  
                  {/* Feliratok (Név és kód) - "Hover to Inspect" TÖRÖLVE, helyette a név jelenik meg */}
                  <div className={`mt-4 text-center transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
                    <h2 className="text-4xl font-black tracking-tighter text-white">{engine.code}</h2>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                        {details?.name}
                    </p>
                  </div>
               </div>
            ) : (
               // Ha nincs kép
               <div className="text-left w-full mt-4">
                  <h2 className="text-5xl font-black mb-2 tracking-tighter text-white">{engine.code}</h2>
                  <div className="text-xl font-bold text-slate-300 mb-1">
                    {details?.name || `${engine.brand} ${engine.model}`}
                  </div>
                  {details ? (
                      <div className="mt-4 inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-green-500/30">
                          <Database className="w-3 h-3" /> Full Engineering Data
                      </div>
                  ) : (
                      <div className="mt-4 inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-yellow-500/30">
                          <AlertTriangle className="w-3 h-3" /> Basic Specs Only
                      </div>
                  )}
               </div>
            )}
          </div>

          {/* LÁBLÉC ADATOK */}
          <div className="grid grid-cols-2 gap-4 mt-auto pt-4 relative z-20"> {/* z-20 hogy a nagyított kép ne takarja ki véletlenül se */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-3 h-3 text-primary opacity-70" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Power</span>
              </div>
              <div className="text-lg md:text-xl font-black">{engine.hp || details?.horsepower || "N/A"}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
               <div className="flex items-center gap-2 mb-2">
                <Gauge className="w-3 h-3 text-primary opacity-70" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Torque</span>
              </div>
              <div className="text-lg md:text-xl font-black">{engine.torque || details?.torque || "N/A"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COLLAPSIBLE SECTION ---
const ComparisonSection = ({ title, icon: Icon, isOpen, onToggle, children }: any) => {
    return (
        <div className="border-b border-slate-200 last:border-0">
            <button 
                onClick={onToggle}
                className={cn(
                    "w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-slate-50",
                    isOpen && "bg-slate-50/80"
                )}
            >
                <div className="flex items-center gap-3">
                    <div className={cn("p-2 rounded-lg transition-colors", isOpen ? "bg-primary text-white" : "bg-slate-100 text-slate-500")}>
                        <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-black uppercase tracking-wide text-slate-800">{title}</span>
                </div>
                {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>
            
            <div className={cn(
                "transition-all duration-300 ease-in-out",
                isOpen ? "max-h-[3000px] opacity-100 overflow-visible" : "max-h-0 opacity-0 overflow-hidden"
            )}>
                <div className="p-6 pt-0">
                    {children}
                </div>
            </div>
        </div>
    )
}

// --- SMART MATCH LOGIKA --- //
const isSimilarValue = (a: any, b: any) => {
  if (a === b) return true;
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  
  const clean = (str: string) => str.toLowerCase().trim();
  
  // 1. Levágjuk a zárójeles részeket az összehasonlításhoz
  // Pl: "Front (Service friendly)" -> "front"
  const getCore = (str: string) => clean(str).split('(')[0].trim();
  
  const coreA = getCore(a);
  const coreB = getCore(b);

  // Ha a fő rész (pl. "Front") megegyezik és nem üres, akkor ez egy match!
  if (coreA === coreB && coreA !== "") return true;

  // 2. Tartalék terv: Ha nincs zárójel, de az első 2 szó ugyanaz
  const wordsA = clean(a).split(/\s+/);
  const wordsB = clean(b).split(/\s+/);
  const wordsToCompare = Math.min(wordsA.length, wordsB.length, 2);
  
  if (wordsToCompare === 0) return false;

  for (let i = 0; i < wordsToCompare; i++) {
    if (wordsA[i] !== wordsB[i]) return false;
  }
  
  return true;
};

// --- SPEC ROW ---
const SpecRow = ({ label, valA, valB, field, detailsA, detailsB, noMatch = false }: any) => {
  const isMatch = noMatch ? false : isSimilarValue(valA, valB);
  
  // ALAP WARNINGOK LEKÉRÉSE
  let warnA = field && detailsA?.warnings?.[field];
  let warnB = field && detailsB?.warnings?.[field];

  // SHARED SPEC LOGIKA: Ha megegyezik az érték, szinkronizáljuk a figyelmeztetéseket
  if (isMatch) {
    const sharedWarn = warnA || warnB;
    warnA = sharedWarn;
    warnB = sharedWarn;
  }

  return (
    <div className={cn(
      "grid grid-cols-3 text-center py-3 border-b border-slate-100 last:border-b-0 items-center transition-all duration-300 relative group/row",
      isMatch ? "bg-slate-50/80 border-l-4 border-l-blue-400/30" : "bg-transparent border-l-4 border-l-transparent"
    )}>
        {/* 'A' MOTOR (Bal oldal) - BALRA IGAZÍTOTT TOOLTIP */}
        <div className="flex items-center justify-center gap-2 px-4">
            <span className={cn("text-sm md:text-base break-words", isMatch ? "text-slate-500 font-medium" : "text-slate-900 font-bold")}>
                {valA || "-"}
            </span>
            {warnA && (
              <div className="relative group/tooltip">
                <AlertTriangle className="w-4 h-4 text-orange-500 cursor-help animate-pulse" />
                <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-slate-900 text-white text-[11px] rounded-xl opacity-0 group-hover/tooltip:opacity-100 transition-all z-[100] shadow-2xl border border-white/10 pointer-events-none leading-relaxed text-left">
                  <div className="font-black text-orange-400 mb-1 uppercase text-[9px]">Technical Warning</div>
                  {warnA}
                  {/* Nyíl a bal szélre igazítva */}
                  <div className="absolute top-full left-2 border-8 border-transparent border-t-slate-900"></div>
                </div>
              </div>
            )}
        </div>

        {/* KÖZÉPSŐ LABEL */}
        <div className="flex flex-col items-center justify-center px-2">
            <div className="text-xs uppercase font-black text-slate-400 tracking-tighter leading-tight text-center">
                {label}
            </div>
            {isMatch && (
              <div className="mt-1 flex items-center gap-1 bg-blue-500 text-white px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter shadow-sm">
                <Database className="w-2.5 h-2.5" /> Shared Specs
              </div>
            )}
        </div>

        {/* 'B' MOTOR (Jobb oldal) - JOBBRA IGAZÍTOTT TOOLTIP */}
        <div className="flex items-center justify-center gap-2 px-4">
            {warnB && (
              <div className="relative group/tooltip">
                <AlertTriangle className="w-4 h-4 text-orange-500 cursor-help animate-pulse" />
                <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-slate-900 text-white text-[11px] rounded-xl opacity-0 group-hover/tooltip:opacity-100 transition-all z-[100] shadow-2xl border border-white/10 pointer-events-none leading-relaxed text-right">
                  <div className="font-black text-orange-400 mb-1 uppercase text-[9px]">Technical Warning</div>
                  {warnB}
                  {/* Nyíl a jobb szélre igazítva */}
                  <div className="absolute top-full right-2 border-8 border-transparent border-t-slate-900"></div>
                </div>
              </div>
            )}
            <span className={cn("text-sm md:text-base break-words", isMatch ? "text-slate-500 font-medium" : "text-slate-900 font-bold")}>
                {valB || "-"}
            </span>
        </div>
    </div>
  );
};

const ScoreBadge = ({ value, lowerIsBetter = false }: { value: number | undefined, lowerIsBetter?: boolean }) => {
  if (value === undefined) return <span>-</span>;

  // Ha a "kisebb a jobb" (pl. költség), akkor megfordítjuk a logikai értéket a színhez
  const displayValue = lowerIsBetter ? (11 - value) : value;

  let colorClass = "text-slate-900"; // Alapértelmezett
  if (displayValue <= 3) colorClass = "text-red-600 font-bold";     // Rossz (Piros)
  if (displayValue >= 4 && displayValue <= 7) colorClass = "text-yellow-500 font-bold"; // Közepes (Narancs)
  if (displayValue >= 8) colorClass = "text-green-500 font-bold";  // Jó (Sárga)

  return <span className={colorClass}>{value}/10</span>;
};

// --- LIST ROW ---
const ListRow = ({ label, listA, listB, icon: Icon, colorClass }: any) => {
  const getSeverityStyles = (severity: string) => {
    switch(severity) {
      case 'critical': return "bg-red-100 text-red-700 border-red-200";
      case 'medium': return "bg-orange-100 text-orange-700 border-orange-200";
      case 'low': return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-b border-slate-100">
      {[listA, listB].map((list, idx) => (
        <div key={idx} className="space-y-3">
          {list && list.length > 0 ? (
            <ul className="space-y-2">
              {list.map((item: any, i: number) => {
                const text = typeof item === 'object' ? item.description : item;
                const severity = item.severity;
                return (
                  <li key={i} className="flex flex-col gap-1">
                    <div className="flex items-start gap-2">
                      <Icon className={cn("w-4 h-4 shrink-0 mt-0.5", colorClass)} />
                      <span className="text-sm text-slate-600 leading-tight">{text}</span>
                    </div>
                    {severity && (
                      <div className="ml-6">
                        <span className={cn("text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded border shadow-sm", getSeverityStyles(severity))}>
                          {severity} severity
                        </span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : <div className="text-center text-slate-400 text-sm italic py-4">No specific data recorded</div>}
        </div>
      ))}
    </div>
  );
};

// --- MAIN COMPARATOR ---
export const EngineComparator = () => {
  const [engineA, setEngineA] = useState<EngineMatch | null>(null);
  const [engineB, setEngineB] = useState<EngineMatch | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const { userId } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const detailsA = engineA ? audiEngineCodesList[engineA.code] : null;
  const detailsB = engineB ? audiEngineCodesList[engineB.code] : null;
  const getSeoLabel = (details: any, code: string) => {
    if (!details) return code.toLowerCase();
    
    // Kerekítés: 1896 -> 1.9, 1984 -> 2.0
    const rawDisp = parseFloat(details.displacement);
    const disp = !isNaN(rawDisp) ? (rawDisp > 100 ? (rawDisp / 1000).toFixed(1) : rawDisp.toFixed(1)) : "";
    
    // Csak a TDI-t írjuk ki, a benzint (Petrol) nem kérted
    const isDiesel = details.fuelType?.toLowerCase().includes("diesel");
    const typeLabel = isDiesel ? "tdi" : "";
    
    // Összefűzzük: pl. 1.9-tdi-1z vagy 2.0-aae
    const parts = [disp, typeLabel, code.toLowerCase()].filter(Boolean);
    return parts.join('-').replace(/\s+/g, '-');
  };

  const generateSmartVerdict = () => {
    if (!detailsA || !detailsB) return "";
  
    const combinedCodes = [engineA?.code, engineB?.code].sort().join("");
    let seed = 0;
    for (let i = 0; i < combinedCodes.length; i++) seed += combinedCodes.charCodeAt(i);
  
    const pickPersistent = (arr: string[], offset: number) => {
      const index = (seed + offset) % arr.length;
      return arr[index];
    };
  
    const analysis = [];
    
    // Segédfüggvények a pontos adatokhoz
    const getHp = (d: any) => {
      const hpPart = d.horsepower.split('/')[1] || d.horsepower;
      return parseInt(hpPart.trim()) || 0;
    };
    const getDisp = (d: any) => {
      const raw = parseFloat(d.displacement);
      return raw > 100 ? raw / 1000 : raw;
    };
    const ratioA = (getHp(detailsA) / getDisp(detailsA)).toFixed(1);
  
    // --- 1. USAGE & CHARACTER (20 Variations) ---
    const isDieselA = detailsA.fuelType.toLowerCase().includes("diesel");
    const isDieselB = detailsB.fuelType.toLowerCase().includes("diesel");
  
    if (isDieselA !== isDieselB) {
      const diesel = isDieselA ? engineA?.code : engineB?.code;
      const petrol = isDieselA ? engineB?.code : engineA?.code;
      analysis.push(pickPersistent([
        `The ${diesel} is engineered for high-mileage highway use, whereas the ${petrol} offers better thermal management for short city trips.`,
        `For constant load and towing, the ${diesel} is technically superior, while the ${petrol} provides a more responsive power band for urban driving.`,
        `The ${diesel} excels in fuel efficiency over long distances, but the ${petrol} avoids the complexity of diesel emission systems in city environments.`,
        `The ${diesel} is a specialized long-hauler, while the ${petrol} serves as a more versatile all-rounder for varied driving cycles.`,
        `Torque-heavy tasks favor the ${diesel}, yet the ${petrol} remains the more refined choice for stop-and-go traffic.`,
        `High-speed cruising is the ${diesel}'s natural habitat, whereas the ${petrol} handles rapid rpm changes with greater agility.`,
        `The ${diesel} provides superior range on open roads, but the ${petrol} is simpler to maintain for drivers with low annual mileage.`,
        `Thermal efficiency makes the ${diesel} a highway winner, while the ${petrol} warms up significantly faster in cold urban winters.`,
        `The ${diesel} is optimized for steady-state operation, whereas the ${petrol} is designed for a more dynamic, rev-dependent power delivery.`,
        `For long commutes, the ${diesel} is the logical tool, but for localized daily errands, the ${petrol} is the more efficient mechanical choice.`,
        `Engine durability over long durations favors the ${diesel}, while the ${petrol} offers a wider, more flexible power band for city use.`,
        `The ${diesel} thrives on heat and load, whereas the ${petrol} is less sensitive to the carbon buildup associated with short-distance driving.`,
        `Fuel economy is the primary advantage of the ${diesel}, but the ${petrol} provides a smoother, quieter idle for suburban areas.`,
        `The ${diesel} is built for the "left lane" of the highway, while the ${petrol} is engineered for the versatility of mixed-mode transit.`,
        `In terms of vibration management at speed, the ${diesel} is very stable, but the ${petrol} is much lighter on the front axle for city cornering.`,
        `The ${diesel} is the industrial worker of the two, while the ${petrol} is the more civilized commuter.`,
        `The ${diesel} prefers 100km+ trips to stay healthy, whereas the ${petrol} can handle 5km trips without long-term system damage.`,
        `For heavy-duty hauling, the ${diesel} is the technical choice, while the ${petrol} remains the standard for light, unencumbered travel.`,
        `The ${diesel} leverages compression ignition for torque, while the ${petrol} relies on spark ignition for immediate throttle response.`,
        `The ${diesel} is a marathon runner, while the ${petrol} is a sprinter better suited for city bursts.`
      ], 10));
    }
  
    // --- 2. POWER DELIVERY (20 Variations) ---
    const hpA = getHp(detailsA);
    const hpB = getHp(detailsB);
    if (hpA !== hpB) {
      const stronger = hpA > hpB ? engineA?.code : engineB?.code;
      const weaker = hpA > hpB ? engineB?.code : engineA?.code;
      analysis.push(pickPersistent([
        `The ${stronger} provides a significant reserve for overtaking that the ${weaker} cannot match in high-speed scenarios.`,
        `Technically, the ${stronger} is better suited for carrying full loads without sacrificing acceleration compared to the ${weaker}.`,
        `The ${stronger} demonstrates a more aggressive power curve, while the ${weaker} focuses on steady, linear delivery.`,
        `In a performance test, the ${stronger} offers superior power-to-weight potential than the ${weaker}.`,
        `The ${stronger} has the mechanical headroom for towing, which would put excessive strain on the ${weaker}.`,
        `Acceleration metrics favor the ${stronger}, leaving the ${weaker} as the more economy-oriented alternative.`,
        `The ${stronger} extracts more work from its combustion cycle than the ${weaker} for the same amount of time.`,
        `Engine response under heavy load is noticeably sharper on the ${stronger} than the ${weaker}.`,
        `The ${stronger} is the performance-oriented variant, while the ${weaker} serves as the baseline utility model.`,
        `When climbing steep grades, the power advantage of the ${stronger} is a critical technical differentiator.`,
        `The ${stronger} provides better top-end breathability, whereas the ${weaker} plateaus much earlier in the rev range.`,
        `For highway merging, the ${stronger} is the safer mechanical choice due to its superior burst speed.`,
        `The ${stronger} utilizes its displacement more effectively for power, while the ${weaker} prioritizes internal component longevity.`,
        `Performance data confirms that the ${stronger} is the athlete in this comparison, not the ${weaker}.`,
        `The ${stronger} is capable of maintaining higher average speeds with less mechanical stress than the ${weaker}.`,
        `Total energy output is higher on the ${stronger}, making it the more capable engine for demanding drivers.`,
        `The ${stronger} features an architecture tuned for output, whereas the ${weaker} is tuned for simple reliability.`,
        `The extra horsepower of the ${stronger} makes a tangible difference in real-world overtaking maneuvers.`,
        `The ${stronger} is the logical pick for those needing speed, while the ${weaker} is for those needing basic transport.`,
        `The ${stronger}'s specific output is higher, showing a more optimized combustion design than the ${weaker}.`
      ], 20));
    }
  
    // --- 3. MAINTENANCE & COSTS (20 Variations) ---
    const costA = detailsA.maintenanceCost;
    const costB = detailsB.maintenanceCost;
    if (costA !== costB) {
      const cheaper = costA < costB ? engineA?.code : engineB?.code;
      const expensive = costA < costB ? engineB?.code : engineA?.code;
      analysis.push(pickPersistent([
        `The ${cheaper} is a more budget-friendly platform to maintain over a 5-year period than the ${expensive}.`,
        `Component costs for the ${cheaper} are statistically lower due to its simpler technical design.`,
        `The ${expensive} requires more specialized labor and tools, increasing long-term ownership costs compared to the ${cheaper}.`,
        `For a cost-conscious owner, the ${cheaper} is the more logical mechanical choice.`,
        `The ${expensive} features more complex auxiliary systems that are prone to expensive repairs unlike the ${cheaper}.`,
        `Parts availability for the ${cheaper} is superior, making repairs faster and cheaper than on the ${expensive}.`,
        `The ${cheaper} is the benchmark for low-cost maintenance in this engine generation.`,
        `Ownership of the ${expensive} comes with a "complexity tax" that the ${cheaper} avoids.`,
        `The ${cheaper} relies on proven, simple hardware, while the ${expensive} uses more sensitive, high-cost sensors.`,
        `Maintenance complexity is significantly lower on the ${cheaper}, making it a favorite for DIY mechanics.`,
        `The ${expensive} has a more demanding service schedule that increases the total cost of operation.`,
        `If repair bills are a primary concern, the ${cheaper} is the technically safer bet over the ${expensive}.`,
        `The ${cheaper} uses more common VAG parts-bin components, lowering the price of routine service.`,
        `The ${expensive}'s injection and emission systems are more delicate and costly to replace than those on the ${cheaper}.`,
        `Over 200,000km, the ${cheaper} will likely cost 30% less in non-routine repairs than the ${expensive}.`,
        `The ${cheaper} is the "sensible" economic choice, whereas the ${expensive} is a more specialized investment.`,
        `Mechanics report fewer billable hours for standard tasks on the ${cheaper} than the ${expensive}.`,
        `The ${cheaper} is designed for ease of access, reducing labor costs for major repairs compared to the ${expensive}.`,
        `The ${expensive} is more sensitive to oil quality and service intervals than the more forgiving ${cheaper}.`,
        `The ${cheaper} represents the peak of low-cost, high-reliability engineering from this era.`
      ], 30));
    }
  
    // --- 4. RELIABILITY WARNINGS (20 Variations) ---
    analysis.push(pickPersistent([
      `The ${engineA?.code} requires vigilant monitoring of its ${detailsA.weakestLink.toLowerCase()} to avoid catastrophic failure.`,
      `Historically, the ${detailsA.weakestLink.toLowerCase()} is the primary technical vulnerability of the ${engineA?.code}.`,
      `Preventative maintenance for the ${engineA?.code} must prioritize the ${detailsA.weakestLink.toLowerCase()} above all else.`,
      `The durability of the ${engineA?.code} is directly linked to the state of its ${detailsA.weakestLink.toLowerCase()}.`,
      `Engineers have identified the ${detailsA.weakestLink.toLowerCase()} as the weakest link in the ${engineA?.code}'s design.`,
      `The ${engineA?.code} is mechanically solid, except for the well-known issues with the ${detailsA.weakestLink.toLowerCase()}.`,
      `Ignoring the ${detailsA.weakestLink.toLowerCase()} on the ${engineA?.code} often leads to premature engine retirement.`,
      `The ${engineA?.code}'s reputation is slightly marred by the recurring failures of its ${detailsA.weakestLink.toLowerCase()}.`,
      `Long-term reliability of the ${engineA?.code} is contingent on addressing the ${detailsA.weakestLink.toLowerCase()} early.`,
      `The ${engineA?.code} features a robust block, but its ${detailsA.weakestLink.toLowerCase()} remains a constant concern.`,
      `The ${detailsA.weakestLink.toLowerCase()} represents the most significant engineering compromise on the ${engineA?.code}.`,
      `Service records show that the ${detailsA.weakestLink.toLowerCase()} is the most common reason for ${engineA?.code} breakdowns.`,
      `Owners of the ${engineA?.code} should factor in the cost of reinforcing the ${detailsA.weakestLink.toLowerCase()}.`,
      `The ${engineA?.code} is a marathon runner, provided you keep the ${detailsA.weakestLink.toLowerCase()} in check.`,
      `A proactive replacement of the ${detailsA.weakestLink.toLowerCase()} is mandatory for any ${engineA?.code} project.`,
      `The ${engineA?.code} remains a top choice, but only if the ${detailsA.weakestLink.toLowerCase()} is professionally inspected.`,
      `In terms of design, the ${detailsA.weakestLink.toLowerCase()} is the one area where the ${engineA?.code} is truly sensitive.`,
      `The ${engineA?.code}'s longevity can be doubled simply by maintaining the ${detailsA.weakestLink.toLowerCase()} correctly.`,
      `There is a high correlation between ${engineA?.code} failures and neglect of the ${detailsA.weakestLink.toLowerCase()}.`,
      `The ${engineA?.code} is nearly bulletproof, save for the critical ${detailsA.weakestLink.toLowerCase()} issue.`
    ], 40));
  
    // --- 5. TECHNICAL SUMMARY (20 Variations) ---
    const tuningA = detailsA.tuningPotential;
    const tuningB = detailsB.tuningPotential;
    const target = tuningA >= tuningB ? engineA?.code : engineB?.code;
    
    analysis.push(pickPersistent([
      `The ${target} is the technically superior platform for any project requiring significant power gains.`,
      `Data indicates that the ${target} provides the most balanced engineering package for this generation.`,
      `For a reliable daily commuter, the ${engineA?.code} is the more logical choice, while the ${engineB?.code} is for enthusiasts.`,
      `The ${target} represents the pinnacle of VAG's mechanical design within this specific comparison.`,
      `The ${target} is the undisputed winner when it comes to internal hardware strength and potential.`,
      `The ${engineA?.code} wins on practicality, but the ${engineB?.code} is the more interesting engine for a tuner.`,
      `The ${target} is the definitive choice for anyone seeking the highest ROI on performance upgrades.`,
      `The ${target} manages to combine old-school durability with surprisingly modern efficiency.`,
      `The ${target} is the more capable machine in this head-to-head technical analysis.`,
      `The ${engineA?.code} is better for the average driver, but the ${engineB?.code} is better for the long-term builder.`,
      `The ${target} offers the most resilient internal architecture for high-torque applications.`,
      `The ${target} is the survivor of the group, engineered with a level of over-design rarely seen today.`,
      `The ${target} is the more refined and capable engine for 21st-century driving demands.`,
      `The ${target} stands as the better engineering achievement in this engine DNA matchup.`,
      `The ${target} is the more flexible platform, adapting to both daily use and performance needs.`,
      `The ${target} is the clear choice for a high-mileage project that needs to remain reliable.`,
      `The ${target} provides the most stable mechanical foundation for any vehicle it powers.`,
      `The ${target} represents a superior technical investment for long-term vehicle ownership.`,
      `The ${target} is the more robustly engineered unit in this specific comparison.`,
      `The ${target} is the soul of this comparison, delivering superior metrics across the board.`
    ], 50));
  
    return analysis.join(" ");
  };

  useEffect(() => {
    const params: any = {};
    if (engineA) params.a = getSeoLabel(detailsA, engineA.code);
    if (engineB) params.b = getSeoLabel(detailsB, engineB.code);
    setSearchParams(params, { replace: true });
  }, [engineA?.code, engineB?.code, detailsA, detailsB]);

  useEffect(() => {
    const extractCode = (param: string | null) => {
      if (!param) return null;
      const parts = param.split('-');
      return parts[parts.length - 1].toUpperCase(); // Mindig az utolsó rész a motorkód
    };
  
    const codeA = extractCode(searchParams.get("a"));
    const codeB = extractCode(searchParams.get("b"));
  
    if (codeA && (!engineA || engineA.code !== codeA)) {
      const matchA = audiEngineCodesList[codeA];
      if (matchA) {
        setEngineA({
          brand: "VAG Group",
          code: codeA,
          model: "Engine Code",
          generation: "Technical Profile",
          engineType: matchA.configuration,
          hp: matchA.horsepower.split('/')[1]?.trim() || matchA.horsepower,
          torque: matchA.torque
        });
      }
    }
  
    if (codeB && (!engineB || engineB.code !== codeB)) {
      const matchB = audiEngineCodesList[codeB];
      if (matchB) {
        setEngineB({
          brand: "VAG Group",
          code: codeB,
          model: "Engine Code",
          generation: "Technical Profile",
          engineType: matchB.configuration,
          hp: matchB.horsepower.split('/')[1]?.trim() || matchB.horsepower,
          torque: matchB.torque
        });
      }
    }
  }, [searchParams]);

 // 5. MENTÉS FIGYELÉSE
 useEffect(() => {
  if (engineA && engineB && userId) {
    const savedBattles = JSON.parse(localStorage.getItem(`saved_battles_${userId}`) || "[]");
    const isAlreadySaved = savedBattles.some((battle: any) => 
      (battle.codeA === engineA.code && battle.codeB === engineB.code) ||
      (battle.codeA === engineB.code && battle.codeB === engineA.code)
    );
    setIsSaved(isAlreadySaved);
  } else {
    setIsSaved(false);
  }
}, [engineA?.code, engineB?.code, userId]);

  const handleSave = () => {
    if (!engineA || !engineB || !userId) return;
  
    // Aktuális lista lekérése
    const storageKey = `saved_battles_${userId}`;
    const savedBattles = JSON.parse(localStorage.getItem(storageKey) || "[]");
  
    if (isSaved) {
      // HA MÁR EL VOLT MENTVE -> TÖRLÉS
      const newList = savedBattles.filter((battle: any) => 
        !((battle.codeA === engineA.code && battle.codeB === engineB.code) ||
          (battle.codeA === engineB.code && battle.codeB === engineA.code))
      );
      localStorage.setItem(storageKey, JSON.stringify(newList));
      setIsSaved(false);
    } else {
      // HA MÉG NEM VOLT MENTVE -> HOZZÁADÁS
      const newBattle = {
        id: `${engineA.code}-${engineB.code}-${Date.now()}`,
        codeA: engineA.code,
        codeB: engineB.code,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(storageKey, JSON.stringify([...savedBattles, newBattle]));
      setIsSaved(true);
    }
  };

  // Állapotok a lenyitható szekcióknak (2-10)
  const [sections, setSections] = useState({
      sec2: false, // Block & Rotating
      sec3: false, // Fuel & Combustion
      sec4: false, // Forced Induction
      sec5: false, // Cylinder Head
      sec6: false, // Lubrication
      sec7: false, // Emissions
      sec8: false, // Physics
      sec9: false, // NVH
      sec10: false // Tuning
  });

  const toggleSection = (key: keyof typeof sections) => {
      setSections(prev => ({ ...prev, [key]: !prev[key] }));
  };


  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 relative items-stretch mb-16">
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white text-slate-950 rounded-full items-center justify-center font-black z-30 border-8 border-slate-50 shadow-2xl italic text-xl">VS</div>
        
        <div className={cn("min-h-[300px] transition-all", !engineA && "bg-slate-50/50 rounded-3xl p-8 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center")}>
          {engineA ? <EngineDisplay engine={engineA} onReset={() => setEngineA(null)} side="A" /> : (
            <div className="w-full max-w-md space-y-6 text-center">
              <div className="w-20 h-20 bg-blue-100/50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto rotate-3 shadow-sm border border-blue-200/50">
                <Car size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-800">FIRST ENGINE</h3>
                <p className="text-slate-400 text-sm">Search by code (eg. 1Z, AAE)</p>
              </div>
              <EngineSearchField onSelect={setEngineA} placeholder="Type code (e.g. 1Z)..." />
            </div>
          )}
        </div>

        <div className={cn("min-h-[300px] transition-all", !engineB && "bg-slate-50/50 rounded-3xl p-8 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center")}>
          {engineB ? <EngineDisplay engine={engineB} onReset={() => setEngineB(null)} side="B" /> : (
            <div className="w-full max-w-md space-y-6 text-center">
              <div className="w-20 h-20 bg-red-100/50 text-red-600 rounded-3xl flex items-center justify-center mx-auto -rotate-3 shadow-sm border border-red-200/50">
                <Car size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-800">SECOND ENGINE</h3>
                <p className="text-slate-400 text-sm">Search by code (eg. AAE, 1Z)</p>
              </div>
              <EngineSearchField onSelect={setEngineB} placeholder="Type code (e.g. AAE)..." />
            </div>
          )}
        </div>
      </div>

      {/* ÖSSZEHASONLÍTÓ TÁBLÁZAT */}
      {engineA && engineB && (
        <div className="animate-in slide-in-from-bottom-10 duration-700">
          <Card className="overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border-0 rounded-3xl bg-white">
            
            <div className="grid grid-cols-3 text-center py-8 bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40">
               <div className="font-black text-2xl md:text-4xl px-4">{engineA.code}</div>
               <div className="text-[10px] font-bold text-slate-400 self-center uppercase tracking-widest hidden md:block">Comparison Data</div>
               <div className="block md:hidden text-[10px] font-bold text-slate-400 self-center uppercase tracking-widest">VS</div>
               <div className="font-black text-2xl md:text-4xl px-4">{engineB.code}</div>
            </div>

            {/* --- 1. OVERVIEW & PERFORMANCE (ALWAYS VISIBLE) --- */}
            <div className="bg-slate-50/30">
                <div className="p-4 bg-slate-100 text-slate-500 text-xs font-black uppercase tracking-[0.2em] text-center border-b border-slate-200">
                    1. Overview
                    </div>
    <SpecRow label="Fuel Type" field="fuelType" valA={detailsA?.fuelType} valB={detailsB?.fuelType} detailsA={detailsA} detailsB={detailsB} noMatch />
    <SpecRow label="Production Years" field="productionYears" valA={detailsA?.productionYears} valB={detailsB?.productionYears} detailsA={detailsA} detailsB={detailsB} noMatch />
    <SpecRow label="Horsepower" field="horsepower" valA={detailsA?.horsepower || engineA.hp} valB={detailsB?.horsepower || engineB.hp} detailsA={detailsA} detailsB={detailsB} noMatch />
    <SpecRow label="Torque" field="torque" valA={detailsA?.torque || engineA.torque} valB={detailsB?.torque || engineB.torque} detailsA={detailsA} detailsB={detailsB} noMatch />
    <SpecRow label="Configuration" field="configuration" valA={detailsA?.configuration || engineA.engineType} valB={detailsB?.configuration || engineB.engineType} detailsA={detailsA} detailsB={detailsB} noMatch />
    <SpecRow label="Displacement" field="displacement" valA={detailsA?.displacement} valB={detailsB?.displacement} detailsA={detailsA} detailsB={detailsB} noMatch />
    <SpecRow label="Bore x Stroke" field="boreStroke" valA={detailsA?.boreStroke} valB={detailsB?.boreStroke} detailsA={detailsA} detailsB={detailsB} noMatch />
    <SpecRow label="Compression" field="compression" valA={detailsA?.compression} valB={detailsB?.compression} detailsA={detailsA} detailsB={detailsB} noMatch />
    <SpecRow label="Firing Order" field="firingOrder" valA={detailsA?.firingOrder} valB={detailsB?.firingOrder} detailsA={detailsA} detailsB={detailsB} noMatch />
    <SpecRow label="Max RPM" field="maxRpm" valA={detailsA?.maxRpm} valB={detailsB?.maxRpm} detailsA={detailsA} detailsB={detailsB} noMatch />
    <SpecRow label="Found In" field="applications" valA={detailsA?.applications} valB={detailsB?.applications} detailsA={detailsA} detailsB={detailsB} noMatch />
</div>

{(detailsA || detailsB) && (
    <>
        {/* --- 2. BLOCK & ROTATING ASSEMBLY --- */}
        <ComparisonSection title="2. Block & Rotating Assembly" icon={Wrench} isOpen={sections.sec2} onToggle={() => toggleSection('sec2')}>
            <SpecRow label="Block Material" field="blockMaterial" valA={detailsA?.blockMaterial} valB={detailsB?.blockMaterial} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Construction" field="blockConstruction" valA={detailsA?.blockConstruction} valB={detailsB?.blockConstruction} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Deck Webbing" field="deckWebbing" valA={detailsA?.deckWebbing} valB={detailsB?.deckWebbing} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Cylinder Coating" field="cylinderCoating" valA={detailsA?.cylinderCoating} valB={detailsB?.cylinderCoating} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Bedplate" field="bedplate" valA={detailsA?.bedplate} valB={detailsB?.bedplate} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Crankshaft" field="crankshaftType" valA={detailsA?.crankshaftType} valB={detailsB?.crankshaftType} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Connecting Rods" field="connectingRods" valA={detailsA?.connectingRods} valB={detailsB?.connectingRods} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Piston Design" field="pistonDesign" valA={detailsA?.pistonDesign} valB={detailsB?.pistonDesign} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Piston Ring Coating" field="pistonRingCoating" valA={detailsA?.pistonRingCoating} valB={detailsB?.pistonRingCoating} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Balance Shafts" field="balanceShafts" valA={detailsA?.balanceShafts} valB={detailsB?.balanceShafts} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Head Fasteners" field="headFasteners" valA={detailsA?.headFasteners} valB={detailsB?.headFasteners} detailsA={detailsA} detailsB={detailsB} />
        </ComparisonSection>

        {/* --- 3. FUEL & COMBUSTION --- */}
        <ComparisonSection title="3. Fuel & Combustion" icon={Fuel} isOpen={sections.sec3} onToggle={() => toggleSection('sec3')}>
            <SpecRow label="Injection System" field="injectionSystem" valA={detailsA?.injectionSystem} valB={detailsB?.injectionSystem} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Fuel Pressure" field="fuelPressure" valA={detailsA?.fuelPressure} valB={detailsB?.fuelPressure} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Injector Position" field="injectorPosition" valA={detailsA?.injectorPosition} valB={detailsB?.injectorPosition} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="HPFP Drive" field="hpfpDrive" valA={detailsA?.hpfpDrive} valB={detailsB?.hpfpDrive} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Fuel Headroom" field="fuelSystemHeadroom" valA={detailsA?.fuelSystemHeadroom} valB={detailsB?.fuelSystemHeadroom} detailsA={detailsA} detailsB={detailsB} />
        </ComparisonSection>

        {/* --- 4. FORCED INDUCTION --- */}
        <ComparisonSection title="4. Forced Induction" icon={Wind} isOpen={sections.sec4} onToggle={() => toggleSection('sec4')}>
            <SpecRow label="Turbocharger" field="turboCharger" valA={detailsA?.turboCharger} valB={detailsB?.turboCharger} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Turbo Bearing" field="turboBearing" valA={detailsA?.turboBearing} valB={detailsB?.turboBearing} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Actuator" field="actuatorType" valA={detailsA?.actuatorType} valB={detailsB?.actuatorType} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Intercooler" field="intercoolerSystem" valA={detailsA?.intercoolerSystem} valB={detailsB?.intercoolerSystem} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Intake Plenum" field="intakePlenum" valA={detailsA?.intakePlenum} valB={detailsB?.intakePlenum} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Throttle Body" field="throttleBody" valA={detailsA?.throttleBody} valB={detailsB?.throttleBody} detailsA={detailsA} detailsB={detailsB} />
        </ComparisonSection>

        {/* --- 5. CYLINDER HEAD & VALVETRAIN --- */}
        <ComparisonSection title="5. Cylinder Head & Valvetrain" icon={Settings} isOpen={sections.sec5} onToggle={() => toggleSection('sec5')}>
            <SpecRow label="Head Material" field="headMaterial" valA={detailsA?.headMaterial} valB={detailsB?.headMaterial} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Valvetrain" field="valvetrain" valA={detailsA?.valvetrain} valB={detailsB?.valvetrain} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Valve Specs" field="valveSpecs" valA={detailsA?.valveSpecs} valB={detailsB?.valveSpecs} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Timing System" field="timingChainSystem" valA={detailsA?.timingChainSystem} valB={detailsB?.timingChainSystem} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Timing Location" field="timingLocation" valA={detailsA?.timingLocation} valB={detailsB?.timingLocation} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Timing Tensioner" field="timingTensioner" valA={detailsA?.timingTensioner} valB={detailsB?.timingTensioner} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="VVT" field="variableValveTiming" valA={detailsA?.variableValveTiming} valB={detailsB?.variableValveTiming} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Valve Lift" field="valveLiftSystem" valA={detailsA?.valveLiftSystem} valB={detailsB?.valveLiftSystem} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Exhaust Manifold" field="exhaustManifold" valA={detailsA?.exhaustManifold} valB={detailsB?.exhaustManifold} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Valve Springs" field="valveSprings" valA={detailsA?.valveSprings} valB={detailsB?.valveSprings} detailsA={detailsA} detailsB={detailsB} />
        </ComparisonSection>

        {/* --- 6. LUBRICATION & COOLING --- */}
        <ComparisonSection title="6. Lubrication & Cooling" icon={Thermometer} isOpen={sections.sec6} onToggle={() => toggleSection('sec6')}>
            <SpecRow label="Oil Pump" field="oilPumpDesign" valA={detailsA?.oilPumpDesign} valB={detailsB?.oilPumpDesign} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Oil Squirters" field="oilSquirters" valA={detailsA?.oilSquirters} valB={detailsB?.oilSquirters} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Filter Location" field="oilFilterLocation" valA={detailsA?.oilFilterLocation} valB={detailsB?.oilFilterLocation} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Dipstick" field="dipstick" valA={detailsA?.dipstick} valB={detailsB?.dipstick} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Cooling Strategy" field="coolingStrategy" valA={detailsA?.coolingStrategy} valB={detailsB?.coolingStrategy} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Thermostat" field="thermostatControl" valA={detailsA?.thermostatControl} valB={detailsB?.thermostatControl} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Water Pump" field="waterPumpType" valA={detailsA?.waterPumpType} valB={detailsB?.waterPumpType} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Impeller" field="waterPumpImpeller" valA={detailsA?.waterPumpImpeller} valB={detailsB?.waterPumpImpeller} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Oil Cooler" field="oilCoolerType" valA={detailsA?.oilCoolerType} valB={detailsB?.oilCoolerType} detailsA={detailsA} detailsB={detailsB} />
        </ComparisonSection>

        {/* --- 7. EMISSIONS & ELECTRONICS --- */}
        <ComparisonSection title="7. Emissions & Electronics" icon={Cpu} isOpen={sections.sec7} onToggle={() => toggleSection('sec7')}>
            <SpecRow label="EGR Design" field="egrDesign" valA={detailsA?.egrDesign} valB={detailsB?.egrDesign} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="PCV System" field="pcvSystem" valA={detailsA?.pcvSystem} valB={detailsB?.pcvSystem} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="OPF/DPF" field="opf_dpf" valA={detailsA?.opf_dpf} valB={detailsB?.opf_dpf} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Sensor Arch." field="sensorArchitecture" valA={detailsA?.sensorArchitecture} valB={detailsB?.sensorArchitecture} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="ECU" field="ecuArchitecture" valA={detailsA?.ecuArchitecture} valB={detailsB?.ecuArchitecture} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Tuning Prot." field="tuningProtection" valA={detailsA?.tuningProtection} valB={detailsB?.tuningProtection} detailsA={detailsA} detailsB={detailsB} />
        </ComparisonSection>

        {/* --- 8. PHYSICS & MOUNTING --- */}
        <ComparisonSection title="8. Physics & Mounting" icon={Scale} isOpen={sections.sec8} onToggle={() => toggleSection('sec8')}>
            <SpecRow label="Dry Weight" field="dryWeight" valA={detailsA?.dryWeight} valB={detailsB?.dryWeight} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Fully Equipped" field="fullyEquippedWeight" valA={detailsA?.fullyEquippedWeight} valB={detailsB?.fullyEquippedWeight} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Weight Dist." field="weightDistribution" valA={detailsA?.weightDistribution} valB={detailsB?.weightDistribution} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Bellhousing" field="bellhousingPattern" valA={detailsA?.bellhousingPattern} valB={detailsB?.bellhousingPattern} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Orientation" field="mountingOrientation" valA={detailsA?.mountingOrientation} valB={detailsB?.mountingOrientation} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Placement" field="enginePlacement" valA={detailsA?.enginePlacement} valB={detailsB?.enginePlacement} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Drivetrain" field="drivetrainCompatibility" valA={detailsA?.drivetrainCompatibility} valB={detailsB?.drivetrainCompatibility} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Sump Type" field="sumpType" valA={detailsA?.sumpType} valB={detailsB?.sumpType} detailsA={detailsA} detailsB={detailsB} />
        </ComparisonSection>

        {/* --- 9. NVH & RESONANCE --- */}
        <ComparisonSection title="9. NVH & Resonance" icon={Mic2} isOpen={sections.sec9} onToggle={() => toggleSection('sec9')}>
            <SpecRow label="Harmonic Balancer" field="harmonicBalancer" valA={detailsA?.harmonicBalancer} valB={detailsB?.harmonicBalancer} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Mounting Type" field="engineMountingType" valA={detailsA?.engineMountingType} valB={detailsB?.engineMountingType} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Acoustic Ins." field="acousticInsulation" valA={detailsA?.acousticInsulation} valB={detailsB?.acousticInsulation} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Vibration Damper" field="torsionalVibrationDamper" valA={detailsA?.torsionalVibrationDamper} valB={detailsB?.torsionalVibrationDamper} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Resonators" field="intakeResonators" valA={detailsA?.intakeResonators} valB={detailsB?.intakeResonators} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Active Noise Canc." field="activeNoiseCancellation" valA={detailsA?.activeNoiseCancellation ? "Yes" : "No"} valB={detailsB?.activeNoiseCancellation ? "Yes" : "No"} detailsA={detailsA} detailsB={detailsB} />
        </ComparisonSection>

        {/* --- 10. TUNING & HARDWARE LIMIT --- */}
        <ComparisonSection title="10. Tuning & Hardware Limit" icon={Zap} isOpen={sections.sec10} onToggle={() => toggleSection('sec10')}>
            <SpecRow label="Stock Block Limit" field="stockBlockLimit" valA={detailsA?.stockBlockLimit} valB={detailsB?.stockBlockLimit} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Weakest Link" field="weakestLink" valA={detailsA?.weakestLink} valB={detailsB?.weakestLink} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Carbon Buildup" field="carbonBuildupRisk" valA={detailsA?.carbonBuildupRisk} valB={detailsB?.carbonBuildupRisk} detailsA={detailsA} detailsB={detailsB} />
            <SpecRow label="Tuning Potential" valA={detailsA ? <ScoreBadge value={detailsA.tuningPotential} /> : "-"} valB={detailsB ? <ScoreBadge value={detailsB.tuningPotential} /> : "-"} />
        </ComparisonSection>
                </>
            )}

            {/* --- 11. VERDICT & RELIABILITY (ALWAYS VISIBLE) --- */}
            {(detailsA || detailsB) && (
                <div className="bg-slate-50/50 border-t border-slate-200">
                    <div className="p-4 bg-slate-100 text-slate-500 text-xs font-black uppercase tracking-[0.2em] text-center border-b border-slate-200">
                        11. Verdict & Reliability
                    </div>
                    
                    <SpecRow label="Reliability Score" valA={detailsA ? <ScoreBadge value={detailsA.reliabilityScore} /> : "-"} valB={detailsB ? <ScoreBadge value={detailsB.reliabilityScore} /> : "-"} noMatch/>
                    <SpecRow label="Maint. Complexity" field="maintenanceComplexity" valA={detailsA?.maintenanceComplexity} valB={detailsB?.maintenanceComplexity} detailsA={detailsA} detailsB={detailsB} noMatch/>
                    <SpecRow label="Maintenance Cost" valA={detailsA ? <ScoreBadge value={detailsA.maintenanceCost} lowerIsBetter={true} /> : "-"} valB={detailsB ? <ScoreBadge value={detailsB.maintenanceCost} lowerIsBetter={true} /> : "-"} noMatch/>

                    <div className="mt-4 px-6 pb-6">
                        <div className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-4 mt-6">Common Failures</div>
                        <ListRow 
                            label="Failures" 
                            listA={detailsA?.commonFailures || []} 
                            listB={detailsB?.commonFailures || []} 
                            icon={AlertTriangle} 
                            colorClass="text-red-500" 
                        />

                        <div className="text-center text-xs font-black uppercase tracking-widest text-slate-400 my-4">Pros & Cons</div>
                        <ListRow 
                            label="Pros" 
                            listA={detailsA?.pros || []} 
                            listB={detailsB?.pros || []} 
                            icon={ThumbsUp} 
                            colorClass="text-green-500" 
                        />
                         <ListRow 
                            label="Cons" 
                            listA={detailsA?.cons || []} 
                            listB={detailsB?.cons || []} 
                            icon={ThumbsDown} 
                            colorClass="text-amber-500" 
                        />
                    </div>
                </div>
            )}

            {/* --- DYNAMIC SMART VERDICT --- */}
<div className="px-6 py-8 bg-slate-50 border-t border-slate-200">
  <div className="max-w-3xl mx-auto">
    <div className="flex items-center gap-3 mb-6">
      <div className="bg-primary/10 p-2 rounded-xl">
        <Cpu className="w-5 h-5 text-primary animate-pulse" />
      </div>
      <div>
        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-800">
          Engineering Analysis
        </h3>
      </div>
    </div>

    <div className="relative">
      {/* Dekorációs idézőjel */}
      <span className="absolute -top-4 -left-2 text-6xl text-slate-200 font-serif pointer-events-none">“</span>
      
      <p className="relative z-10 text-slate-600 text-sm md:text-base leading-relaxed font-medium italic pl-4 border-l-2 border-primary/20">
        {generateSmartVerdict()}
      </p>
    </div>

    <div className="mt-6 flex items-center gap-4 py-3 px-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex -space-x-2">
         <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-black">A</div>
         <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-black">B</div>
      </div>
      <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">
        Analysis based on {Object.keys(detailsA).length}+ data points per engine
      </p>
    </div>
  </div>
</div>

            {/* --- SAVE TO PROFILE SECTION --- */}
            {(detailsA && detailsB) && (
                <div className="p-8 bg-gradient-to-t from-slate-50 to-white flex flex-col items-center border-t border-slate-100">
                    <button
    onClick={handleSave} // Itt most már a handleSave függvényt hívjuk meg!
    className={cn(
        "group flex flex-col items-center gap-3 p-6 rounded-3xl transition-all duration-500",
        isSaved ? "bg-yellow-50" : "hover:bg-slate-50"
    )}
>
                        <div className={cn(
                            "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 transform group-hover:scale-110",
                            isSaved 
                                ? "bg-yellow-500 text-white rotate-[72deg] shadow-yellow-200" 
                                : "bg-white text-slate-300 border border-slate-200 group-hover:text-yellow-400"
                        )}>
                            <Star className={cn("w-8 h-8", isSaved && "fill-current")} />
                        </div>
                        
                        <div className="text-center">
                            <span className={cn(
                                "block text-xs font-black uppercase tracking-[0.2em] transition-colors",
                                isSaved ? "text-yellow-600" : "text-slate-400 group-hover:text-slate-600"
                            )}>
                                {isSaved ? "Comparison Saved" : "Save to Profile"}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">
                                {isSaved ? "View this in your saved comparisons" : "Keep this comparison for later"}
                            </span>
                        </div>
                    </button>
                    
                    {/* Kis segítő szöveg a bejelentkezett státuszhoz */}
                    <div className="mt-4 flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                        <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                        Connected as Developer
                    </div>
                </div>
            )}

            
          </Card>
        </div>
      )}
    </div>
  );
};