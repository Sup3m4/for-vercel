import { useState } from "react";
import {
    Gauge,
    Zap,
    Fuel,
    Calendar,
    AlertTriangle,
    GitBranch,
    Wrench,
    Copy,
    TrendingUp,
    Lock,
    ChevronRight,
    ShoppingCart,
    ArrowUpCircle,
    CheckCircle2,
    Shield,
    Scan,
    Timer,
    Move3d,
    Search,
    MousePointer2,
    X,
    DollarSign,
    Cpu,
    Info,
    Settings,
    Wind,
    Activity,
    ExternalLink,
    Leaf,
    Hammer,
    Stethoscope,
    Droplets,      // Új: Folyadékokhoz
    Database,      // Új: Mérnöki adatokhoz
    Layers,        // Új: Rétegekhez/Blokkhoz
    Thermometer,   // Új: Hűtéshez
    Disc,          // Új: Forgó alkatrészekhez
    ChevronDown,   // (Már lehet, hogy ott van)
    ChevronUp
  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EngineProfile as EngineProfileType } from "@/data/carDatabase";
import { cn } from "@/lib/utils";
import Car3DViewer from './Car3DViewer'

interface EngineProfileProps {
  profile: EngineProfileType;
}

export function EngineProfile({ profile }: EngineProfileProps) {
  const [isPremiumUnlocked, setIsPremiumUnlocked] = useState(false);
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<any>(null);
  const [isSpecsExpanded, setIsSpecsExpanded] = useState(false);
  const [isCrossRefExpanded, setIsCrossRefExpanded] = useState(false);
  const [activeVisualTab, setActiveVisualTab] = useState<'3d' | 'engine' | 'tuning'>('3d');
  const [isMaintenanceExpanded, setIsMaintenanceExpanded] = useState(false);
  const [graphStage, setGraphStage] = useState(0); 
  const baseHp = parseInt(profile.power) || 300;
  const baseNm = parseInt(profile.torque) || 400;
  const unlockPremium = () => setIsPremiumUnlocked(true);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-slide-up">
      {/* Header Card */}
      <div className="glass-card rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                {profile.brand}
              </span>
              <span className="text-muted-foreground">•</span>
              
              {/* --- EZ AZ ÚJ RÉSZ (Tooltip) --- */}
              <div className="flex items-center gap-1.5 group relative cursor-help">
                <span className="text-sm text-muted-foreground">{profile.yearRange}</span>
                <Info className="w-3.5 h-3.5 text-muted-foreground/60 transition-colors group-hover:text-primary" />
                
                {/* Tooltip Doboz */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 p-3 bg-slate-900/95 backdrop-blur text-slate-100 text-xs text-center rounded-xl shadow-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 transform translate-y-2 group-hover:translate-y-0">
                  <p>Production period of this specific engine within this generation.</p>
                  {/* Kis nyíl lefelé */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/95"></div>
                </div>
              </div>
              {/* --- ÚJ RÉSZ VÉGE --- */}

            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {profile.model} {profile.generation}
            </h1>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-lg text-electric font-semibold flex items-center gap-1">
                <Cpu className="w-4 h-4" />
                {profile.engineCode}
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">{profile.displacement}</span>
            </div>
          </div>

          {/* Risk Rating (LOCKED / UNLOCKED) */}
          <div className="flex-shrink-0">
          <div className="flex flex-col items-center min-w-[80px]">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Risk Rating
              </div>
              
              {!isPremiumUnlocked ? (
                /* ZÁRVA: Kék kör, lakat ikon, kattintásra feloldás */
                <div 
                  onClick={unlockPremium}
                  className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 cursor-pointer hover:bg-blue-200 transition-all hover:scale-105 shadow-sm border border-blue-200"
                  title="Unlock Risk Rating"
                >
                  <Lock className="w-6 h-6" />
                </div>
              ) : (
                /* NYITVA: Eredeti színes pontszám */
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold animate-in zoom-in duration-300 shadow-sm",
                  profile.riskRating <= 3 && "bg-emerald-500/20 text-emerald-600",
                  profile.riskRating > 3 && profile.riskRating <= 6 && "bg-yellow-500/20 text-yellow-500",
                  profile.riskRating > 6 && "bg-destructive/20 text-destructive"
                )}>
                  {profile.riskRating}/10
                </div>
              )}
            </div>
          </div>
        </div> {/* <--- EZ HIÁNYZOTT (Header flex lezárása) */}
      </div> {/* <--- EZ HIÁNYZOTT (Header glass-card lezárása) */}

      {/* Quick Specs */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <SpecCard icon={Gauge} label="Power" value={profile.power} />
        <SpecCard icon={Zap} label="Torque" value={profile.torque} />
        <SpecCard icon={Fuel} label="Fuel Type" value={profile.fuelType} />
        <SpecCard icon={Calendar} label="Cylinders" value={`${profile.cylinders} cyl / ${profile.valves}v`} />
        <SpecCard icon={Wrench} label="Oil Spec" value={profile.oilSpecification} />
      </div>

      

      {/* Free Section - Common Issues */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-yellow-500" />
          <h2 className="text-xl font-bold text-foreground">Common Issues</h2>
        </div>
        <ul className="space-y-2">
          {/* SLICE: Ha nincs prémium, csak az első 2 elem (index 0 és 1) jelenik meg */}
          {profile.commonIssues.slice(0, isPremiumUnlocked ? undefined : 2).map((issue, index) => (
            <li key={index} className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">{issue}</span>
            </li>
          ))}
        </ul>

        {/* EGYSÉGES UNLOCK GOMB */}
        {!isPremiumUnlocked && (
           <ModernUnlock 
             label="issues" 
             // Kiszámoljuk: Teljes hossz MÍNUSZ 2 (mert annyi látszik)
             count={Math.max(0, profile.commonIssues.length - 2)} 
             onClick={unlockPremium} 
           />
        )}
      </div>

      {/* Vulnerabilities */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-destructive" />
          <h2 className="text-xl font-bold text-foreground">Known Vulnerabilities</h2>
        </div>
        <ul className="space-y-3">
          {/* SLICE: Csak az első 2 elem */}
          {profile.vulnerabilities.slice(0, isPremiumUnlocked ? undefined : 2).map((vuln, index) => (
            <li key={index} className="flex items-start gap-2 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
              <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
              <span className="text-foreground">{vuln}</span>
            </li>
          ))}
        </ul>

        {/* EGYSÉGES UNLOCK GOMB */}
        {!isPremiumUnlocked && (
   <ModernUnlock 
   label="critical faults" 
   // Kiszámoljuk: Teljes hossz MÍNUSZ 2
   count={Math.max(0, profile.vulnerabilities.length - 2)} 
   onClick={unlockPremium} 
 />
)}
      </div>
          

       {/* --- Transmission Info Section (LIGHTER BLUR) --- */}
      {profile.transmission && (
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-bold text-foreground">Transmission Options</h2>
          </div>

          <div className="relative">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* MANUAL CARD */}
              {profile.transmission.manual && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col min-h-[180px] relative overflow-hidden">
                  
                  {/* TARTALOM: Enyhébb blur, jobban látszik a szöveg */}
                  <div className={cn(
                      "flex flex-col h-full transition-all duration-500", 
                      !isPremiumUnlocked && "filter blur-[4px] opacity-70 select-none pointer-events-none grayscale-[0.5]"
                  )}>
                     <div className="text-xs font-bold text-muted-foreground uppercase mb-1">Manual Gearbox</div>
                     <div className="text-lg font-bold text-foreground mb-3">{profile.transmission.manual.name}</div>
                     
                     <div className="space-y-2 mt-auto">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Torque Limit:</span>
                            <span className="font-mono text-accent">{profile.transmission.manual.torqueLimit}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Oil Type:</span>
                            <span className="text-foreground">{profile.transmission.manual.oilType}</span>
                        </div>
                        <div className="mt-4 p-3 bg-primary/5 rounded-lg text-xs text-muted-foreground italic flex gap-2">
                            <Info className="w-4 h-4 text-primary flex-shrink-0" />
                            {profile.transmission.manual.note}
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {/* AUTOMATIC CARD(S) */}
              {profile.transmission.automatics.map((auto, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-accent/5 border border-accent/10 flex flex-col min-h-[180px] relative overflow-hidden">
                  
                  {/* TARTALOM: Enyhébb blur itt is */}
                  <div className={cn(
                      "flex flex-col h-full transition-all duration-500", 
                      !isPremiumUnlocked && "filter blur-[4px] opacity-70 select-none pointer-events-none grayscale-[0.5]"
                  )}>
                     <div className="text-xs font-bold text-accent uppercase mb-1">Automatic Option {idx + 1 > 1 ? idx + 1 : ""}</div>
                     <div className="text-lg font-bold text-foreground mb-3">{auto.name}</div>
                     
                     <div className="space-y-2 mt-auto">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Torque Limit:</span>
                            <span className="font-mono text-accent">{auto.torqueLimit}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Oil Type:</span>
                            <span className="text-foreground">{auto.oilType}</span>
                        </div>
                        <div className="mt-4 p-3 bg-accent/10 rounded-lg text-xs text-accent italic flex gap-2">
                            <Info className="w-4 h-4 text-accent flex-shrink-0" />
                            {auto.note}
                        </div>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          
            {/* UNLOCK GOMB (Overlay) */}
            {!isPremiumUnlocked && (
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                 <div className="w-full max-w-sm">
                    <ModernUnlock 
                        variant="overlay" 
                        label="transmission specs" 
                        onClick={unlockPremium} 
                    />
                 </div>
              </div>
            )}

          </div>
        </div>
      )}

          {/* --- TECHNICAL SPECIFICATIONS CARD --- */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6 border-b border-border/50 pb-4">
              <Settings className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Technical Specifications</h2>
            </div>

            {/* Basic Specs Grid (Mindig éles és látható) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
                  <Settings className="w-4 h-4" />
                  <span>Timing System</span>
                </div>
                <p className="font-medium text-foreground">{profile.timingType}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
                  <Zap className="w-4 h-4" />
                  <span>Injection</span>
                </div>
                <p className="font-medium text-foreground">{profile.injectionType}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
                  <Wind className="w-4 h-4" />
                  <span>Turbocharger</span>
                </div>
                <p className="font-medium text-foreground">{profile.turboType || "Naturally Aspirated"}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>ECU Type</span>
                </div>
                <p className="font-medium text-foreground">{profile.ecuType}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
                  <Leaf className="w-4 h-4" />
                  <span>Emissions</span>
                </div>
                <p className="font-medium text-foreground">{profile.euroStandard}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
                  <Hammer className="w-4 h-4" />
                  <span>Max Power (Stock)</span>
                </div>
                <p className="font-semibold text-primary">{profile.maxPowerStockInternals}</p>
              </div>

              <div className="col-span-1 md:col-span-2 space-y-1 bg-secondary/30 p-3 rounded-lg border border-border/50">
                <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
                  <Activity className="w-4 h-4" />
                  <span>Est. Lifespan</span>
                </div>
                <p className="font-medium text-foreground">{profile.engineLifespan}</p>
              </div>
            </div>

            {/* --- FUEL CONSUMPTION (BLURRED IF LOCKED) --- */}
            <div className="mt-6 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Gauge className="w-4 h-4" />
                <span>Fuel Consumption Estimates</span>
              </div>
              
              {/* Ha nincs feloldva: erős homályosítás (blur-[6px]) és kattintás tiltás */}
              <div className={cn(
                  "grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-500", 
                  !isPremiumUnlocked && "blur-[6px] opacity-60 select-none pointer-events-none grayscale-[0.5]"
              )}>
                <div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-amber-500">
                  <span className="block text-[10px] uppercase text-muted-foreground mb-1">City</span>
                  <span className="font-bold text-foreground">{profile.fuelConsumption.city}</span>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-emerald-500">
                  <span className="block text-[10px] uppercase text-muted-foreground mb-1">Highway</span>
                  <span className="font-bold text-green-500">{profile.fuelConsumption.highway}</span>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-primary">
                  <span className="block text-[10px] uppercase text-muted-foreground mb-1">Mixed</span>
                  <span className="font-bold text-primary">{profile.fuelConsumption.mixed}</span>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-red-500/50">
                  <span className="block text-[10px] uppercase text-muted-foreground mb-1">Sporty</span>
                  <span className="font-bold text-red-500">{profile.fuelConsumption.sporty}</span>
                </div>
              </div>
            </div>

            {/* --- UNLOCK / EXPAND BUTTON --- */}
            <div className="mt-8 relative z-10">
              {!isPremiumUnlocked ? (
                 // Ha ZÁRVA van: ModernUnlock sáv jelenik meg a gomb helyett
                 // Ez vizuálisan lezárja a szekciót és hívogatja a kattintást
                 <div className="max-w-md mx-auto transform hover:scale-[1.02] transition-transform duration-300">
                    <ModernUnlock label="engineering data & fuel specs" onClick={unlockPremium} />
                 </div>
              ) : (
                 // Ha NYITVA van: A szokásos lenyitó gomb
                 <div className="flex justify-center">
                    <Button
                        variant="outline"
                        onClick={() => setIsSpecsExpanded(!isSpecsExpanded)}
                        className={cn(
                        "w-full md:w-auto gap-2 border-primary/20 transition-all duration-300 shadow-lg",
                        isSpecsExpanded 
                            ? "bg-primary/10 text-primary hover:bg-primary/20" 
                            : "bg-background/50 hover:bg-primary/5 hover:text-primary"
                        )}
                    >
                        {isSpecsExpanded ? (
                        <>
                            <ChevronUp className="w-4 h-4" />
                            Show Less
                        </>
                        ) : (
                        <>
                            <ChevronDown className="w-4 h-4" />
                            Show Detailed Engineering & Service Data
                        </>
                        )}
                    </Button>
                 </div>
              )}
            </div>

            {/* Dropdown Content - Csak akkor renderelődik, ha prémium ÉS le van nyitva */}
            {isSpecsExpanded && isPremiumUnlocked && (
              <div className="mt-8 grid grid-cols-1 gap-8 animate-fade-in">
                
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                {/* 1. Fluid Capacities */}
                {profile.fluidCapacities && (
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <div className="p-1.5 bg-blue-500/10 rounded-md">
                        <Droplets className="w-5 h-5 text-blue-400" />
                      </div>
                      Fluid Capacities & Specs
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {profile.fluidCapacities.map((item, idx) => (
                        <div key={idx} className="bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border/10 flex justify-between items-center group hover:border-primary/20 transition-all shadow-sm">
                          <span className="font-medium text-foreground text-sm">{item.system}</span>
                          <div className="text-right">
                            <div className="text-primary font-mono font-bold text-sm">{item.capacity}</div>
                            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{item.spec}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Torque Specs */}
                {profile.torqueSpecs && (
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <div className="p-1.5 bg-amber-500/10 rounded-md">
                        <Wrench className="w-5 h-5 text-amber-500" />
                      </div>
                      Torque Specifications
                    </h3>
                    <div className="bg-card/30 backdrop-blur-md rounded-xl overflow-hidden border border-border/10 shadow-inner">
                      <table className="w-full text-sm">
                        <thead className="bg-secondary/30 text-xs uppercase text-muted-foreground border-b border-border/10">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold">Component</th>
                            <th className="px-4 py-3 text-right font-semibold">Torque</th>
                            <th className="px-4 py-3 text-left hidden sm:table-cell font-semibold">Note</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/10">
                          {profile.torqueSpecs.map((item, idx) => (
                            <tr key={idx} className="hover:bg-primary/5 transition-colors">
                              <td className="px-4 py-3 font-medium text-foreground">{item.part}</td>
                              <td className="px-4 py-3 text-right font-mono text-amber-500 font-bold">{item.value}</td>
                              <td className="px-4 py-3 text-muted-foreground text-xs italic hidden sm:table-cell">{item.note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 3. Engineering Data */}
                {profile.engineeringData && (
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <div className="p-1.5 bg-purple-500/10 rounded-md">
                        <Database className="w-5 h-5 text-purple-400" />
                      </div>
                      Engineering Deep Dive
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Block Info */}
                      <EngineeringCard icon={Layers} title="Block & Construction">
                        <DetailRow label="Design" value={profile.engineeringData.blockDesign} />
                        <DetailRow label="Crankshaft" value={profile.engineeringData.crankshaft} />
                        <DetailRow label="Piston Speed" value={profile.engineeringData.pistonSpeed} />
                        {profile.engineeringData.alternator && (
                           <DetailRow label="Alternator" value={profile.engineeringData.alternator} />
                        )}
                      </EngineeringCard>

                      {/* Rotating Assembly */}
                      {profile.engineeringData.rotatingAssembly && (
                        <EngineeringCard icon={Disc} title="Rotating Assembly">
                          {Object.entries(profile.engineeringData.rotatingAssembly).map(([k, v]) => (
                              <DetailRow key={k} label={formatKey(k)} value={v} />
                          ))}
                        </EngineeringCard>
                      )}

                      {/* Cylinder Head */}
                      {profile.engineeringData.cylinderHead && (
                        <EngineeringCard icon={Activity} title="Cylinder Head">
                          {Object.entries(profile.engineeringData.cylinderHead).map(([k, v]) => (
                              <DetailRow key={k} label={formatKey(k)} value={v} />
                          ))}
                        </EngineeringCard>
                      )}

                      {/* Oil & Cooling */}
                      {profile.engineeringData.oilAndCooling && (
                        <EngineeringCard icon={Thermometer} title="Lubrication & Cooling">
                          {Object.entries(profile.engineeringData.oilAndCooling).map(([k, v]) => (
                              <DetailRow key={k} label={formatKey(k)} value={v} />
                          ))}
                        </EngineeringCard>
                      )}

                      {/* Fuel System */}
                      {profile.engineeringData.fuelSystem && (
                        <EngineeringCard icon={Fuel} title="Fuel System">
                          {Object.entries(profile.engineeringData.fuelSystem).map(([k, v]) => (
                              <DetailRow key={k} label={formatKey(k)} value={v} />
                          ))}
                        </EngineeringCard>
                      )}
                      
                      {/* Tuning Limits */}
                      {profile.engineeringData.tuningLimits && (
                        <EngineeringCard icon={TrendingUp} title="Stock Tuning Limits">
                          {Object.entries(profile.engineeringData.tuningLimits).map(([k, v]) => (
                              <DetailRow key={k} label={formatKey(k)} value={v} />
                          ))}
                        </EngineeringCard>
                      )}
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>


          {/* --- Recommended Brands Section (FULL BLUR, FIXED BUTTON) --- */}
          {profile.recommendedParts && (
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Recommended Brands (OEM+)</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{profile.recommendedParts.description}</p>
              
              {/* 1. RÉSZ: AZ ELSŐ KÉT ELEM (MINDIG ÉLES) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {profile.recommendedParts.parts.slice(0, 2).map((part, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-primary uppercase tracking-tight">{part.category}</div>
                      <div className="text-sm font-semibold text-foreground">{part.brand}</div>
                      <div className="text-xs text-muted-foreground italic">{part.note}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 2. RÉSZ: A TÖBBI ELEM (TELJES LISTA ELMOSVA) */}
              <div className="relative min-h-[300px]">
                 {/* VISSZATÉRTÜNK AZ EREDETIHEZ: 
                    Nincs max-h, nincs overflow-hidden. A teljes lista látszik elmosva.
                 */}
                 <div className={cn(
                     "grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-500", 
                     !isPremiumUnlocked && "filter blur-[5px] opacity-50 select-none pointer-events-none grayscale-[0.8]"
                 )}>
                    {profile.recommendedParts.parts.slice(2).map((part, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-primary uppercase tracking-tight">{part.category}</div>
                          <div className="text-sm font-semibold text-foreground">{part.brand}</div>
                          <div className="text-xs text-muted-foreground italic">{part.note}</div>
                        </div>
                      </div>
                    ))}
                 </div>

                 {/* UNLOCK OVERLAY - JAVÍTOTT POZÍCIÓ */}
                 {!isPremiumUnlocked && (
                    // Absolute positioning a tetejétől kb. 100px-re (top-24). 
                    // Így mindig látható a gomb az elején, de nem "csúszkál" (nem sticky), hanem együtt mozog a tartalommal.
                    <div className="absolute inset-x-0 top-1/2 z-10 flex justify-center">
                       <div className="w-full max-w-sm"> 
                          <ModernUnlock variant="overlay" label="OEM suppliers list" onClick={unlockPremium} />
                       </div>
                    </div>
                 )}
              </div>
            </div>
          )}

          {/* --- OEM+ Upgrades (Big Brother Mods) --- */}
          {profile.oemPlusUpgrades && (
            <div className="glass-card rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                   <ArrowUpCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-foreground">OEM+ Upgrades</h2>
                    <p className="text-xs text-muted-foreground">"Big Brother" parts & factory retrofits</p>
                </div>
              </div>
              
              <div className="relative min-h-[220px]">
                 {/* TARTALOM (BLUR HA ZÁRVA VAN) */}
                 <div className={cn(
                    "grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-500",
                    !isPremiumUnlocked && "filter blur-[5px] opacity-50 select-none pointer-events-none grayscale-[0.8]"
                 )}>
                    {profile.oemPlusUpgrades.map((upgrade, idx) => (
                      <div key={idx} className="p-5 rounded-xl bg-gradient-to-br from-blue-50/50 to-white border border-blue-100/60 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-2">
                            <div className="font-bold text-slate-800 text-lg group-hover:text-blue-700 transition-colors">
                               {upgrade.name}
                            </div>
                            <span className="text-[10px] font-bold bg-white text-blue-600 px-2 py-1 rounded-full border border-blue-100 shadow-sm uppercase tracking-wider">
                               Upgrade
                            </span>
                        </div>
                        
                        <p className="text-sm text-slate-600 mb-4 leading-relaxed border-b border-blue-100/50 pb-3">
                          {upgrade.description}
                        </p>
                        
                        <div className="flex items-start gap-2">
                           <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-sm" />
                           <span className="text-xs font-semibold text-blue-800">
                             Benefit: <span className="text-blue-700 font-normal">{upgrade.benefit}</span>
                           </span>
                        </div>
                      </div>
                    ))}
                 </div>

                 {/* UNLOCK GOMB (OVERLAY) */}
                 {!isPremiumUnlocked && (
                    <div className="absolute inset-x-0 top-1/2 z-10 flex justify-center transform -translate-y-1/2">
                       <div className="w-full max-w-sm">
                          <ModernUnlock 
                            variant="overlay" 
                            label="OEM+ upgrade guide" 
                            count={profile.oemPlusUpgrades.length}
                            onClick={unlockPremium} 
                          />
                       </div>
                    </div>
                 )}
              </div>
            </div>
          )}

          

          {/* --- ÚJ HELY: EXPANDABLE MAINTENANCE SCHEDULE --- */}
          {profile.maintenanceSchedule && (
            <div className="mb-8 animate-fade-in">
              <button 
                onClick={() => setIsMaintenanceExpanded(!isMaintenanceExpanded)}
                className="w-full glass-card rounded-2xl p-6 flex items-center justify-between hover:bg-slate-50/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-3 rounded-xl transition-colors",
                    isMaintenanceExpanded ? "bg-red-100 text-red-600" : "bg-slate-100 text-slate-500 group-hover:text-slate-700"
                  )}>
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-2xl font-bold text-slate-800">Maintenance Schedule</h2>
                    <p className="text-slate-500 text-sm">
                      {isMaintenanceExpanded 
                        ? "Enthusiast Level Plan: Detailed service intervals & parts" 
                        : "Click to expand the detailed Enthusiast Maintenance Plan"}
                    </p>
                  </div>
                </div>
                <div className={cn(
                  "p-2 rounded-full border transition-all duration-300",
                  isMaintenanceExpanded ? "bg-red-50 border-red-100 rotate-180" : "bg-white border-slate-100"
                )}>
                  <ChevronDown className={cn("w-5 h-5", isMaintenanceExpanded ? "text-red-500" : "text-slate-400")} />
                </div>
              </button>

              {/* LENYÍLÓ TARTALOM */}
              {isMaintenanceExpanded && (
                <div className="mt-4 space-y-6 animate-in slide-in-from-top-4 duration-500">
                  
                  {/* 1. FOLYADÉKOK ÉS HAJTÁSLÁNC (KIEMELT) */}
                  <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 shadow-sm">
                     <MaintenanceCategory 
                        title="Fluids & Drivetrain (The Lifeblood)" 
                        icon={Droplets} 
                        tasks={profile.maintenanceSchedule.fluidsAndDrivetrain} 
                        isPremiumUnlocked={isPremiumUnlocked} 
                        onUnlock={unlockPremium}
                        defaultOpen={true}
                        colorClass="text-blue-600"
                        bgClass="bg-blue-100"
                     />
                  </div>

                  {/* GRID A TÖBBI KATEGÓRIÁNAK */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <MaintenanceCategory 
                        title="Oil & Filters" 
                        icon={Fuel} 
                        tasks={profile.maintenanceSchedule.oilAndFilters} 
                        isPremiumUnlocked={isPremiumUnlocked} 
                        onUnlock={unlockPremium}
                        colorClass="text-amber-600"
                        bgClass="bg-amber-100"
                      />
                      <MaintenanceCategory 
                        title="Ignition & Engine" 
                        icon={Zap} 
                        tasks={profile.maintenanceSchedule.ignitionAndEngine}
                        isPremiumUnlocked={isPremiumUnlocked} 
                        onUnlock={unlockPremium}
                        colorClass="text-yellow-600"
                        bgClass="bg-yellow-100"
                      />
                      <MaintenanceCategory 
                        title="Engine Mechanical" 
                        icon={Settings} 
                        tasks={profile.maintenanceSchedule.engineMechanical} 
                        isPremiumUnlocked={isPremiumUnlocked} 
                        onUnlock={unlockPremium}
                        colorClass="text-slate-600"
                        bgClass="bg-slate-200"
                      />
                    </div>

                    <div className="space-y-6">
                      <MaintenanceCategory 
                        title="Preventive & Suspension" 
                        icon={Shield} 
                        tasks={profile.maintenanceSchedule.preventiveAndSuspension}
                        isPremiumUnlocked={isPremiumUnlocked} 
                        onUnlock={unlockPremium}
                        colorClass="text-emerald-600"
                        bgClass="bg-emerald-100"
                      />
                      <MaintenanceCategory 
                        title="Cooling & HVAC" 
                        icon={Thermometer} 
                        tasks={profile.maintenanceSchedule.coolingAndHvac}
                        isPremiumUnlocked={isPremiumUnlocked} 
                        onUnlock={unlockPremium}
                        colorClass="text-cyan-600"
                        bgClass="bg-cyan-100"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* --- SMART PARTS BINNING (CROSS REFERENCE) --- */}
          {profile.crossReferenceParts && (
            <div className="mb-8 animate-fade-in">
              <button 
                onClick={() => setIsCrossRefExpanded(!isCrossRefExpanded)}
                className="w-full glass-card rounded-2xl p-6 flex items-center justify-between hover:bg-emerald-50/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-3 rounded-xl transition-colors",
                    isCrossRefExpanded ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500 group-hover:text-emerald-700"
                  )}>
                    <GitBranch className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-2xl font-bold text-slate-800">Smart Parts Binning</h2>
                    <p className="text-slate-500 text-sm">
                      {isCrossRefExpanded 
                        ? "OEM Suppliers & Cross-Brand Interchanges" 
                        : "Save money by using identical parts from OEM suppliers or other VAG brands"}
                    </p>
                  </div>
                </div>
                <div className={cn(
                  "p-2 rounded-full border transition-all duration-300",
                  isCrossRefExpanded ? "bg-emerald-50 border-emerald-100 rotate-180" : "bg-white border-slate-100"
                )}>
                  <ChevronDown className={cn("w-5 h-5", isCrossRefExpanded ? "text-emerald-500" : "text-slate-400")} />
                </div>
              </button>

              {/* LENYÍLÓ TARTALOM */}
              {isCrossRefExpanded && (
                <div className="mt-4 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm animate-in slide-in-from-top-4 duration-500 relative">
                  
                  {/* UNLOCK GOMB (OVERLAY) - Csak ha le van zárva */}
                  {!isPremiumUnlocked && (
                     <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                        {/* POZICIONÁLÁS:
                           - Mobilon: Középen (left-1/2)
                           - Desktopon: A 3. oszlop közepe felé (left-[64%] kb.)
                           - Sticky helyett Absolute, top-24, hogy fixen ott legyen az elején
                        */}
                        <div className="absolute top-1/2 left-1/2 md:left-[64%] -translate-x-1/2 w-full max-w-[280px] md:max-w-xs pointer-events-auto">
                           <ModernUnlock 
                             variant="overlay" 
                             label="OEM cross-reference" 
                             count={Math.max(0, profile.crossReferenceParts.length)}
                             onClick={unlockPremium} 
                           />
                        </div>
                     </div>
                  )}

                  {/* Fejléc sáv */}
                  <div className="hidden md:flex bg-slate-50 border-b border-slate-100 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <div className="w-1/4">Component</div>
                    <div className="w-1/4">Expensive (Audi Box)</div>
                    <div className="w-1/4">Smart Choice (OEM/Cross)</div>
                    <div className="w-1/4">Why it works?</div>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {profile.crossReferenceParts.map((item: any, idx: number) => (
                      <div key={idx} className="flex flex-col md:flex-row items-start md:items-center p-4 hover:bg-slate-50 transition-colors gap-4 md:gap-0 group">
                        
                        {/* 1. Alkatrész Neve & Kategória */}
                        <div className="w-full md:w-1/4 pr-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            <span className="font-bold text-slate-800">{item.partName}</span>
                          </div>
                          <div className="text-xs text-slate-400 uppercase tracking-tight ml-3.5">
                            {item.category}
                          </div>
                        </div>

                        {/* 2. Gyári (Drága) Opció */}
                        <div className="w-full md:w-1/4 bg-red-50/50 p-3 rounded-lg md:bg-transparent md:p-0 border border-red-100 md:border-none relative">
                          <div className="text-[10px] md:hidden font-bold text-red-400 uppercase mb-1">Audi Genuine</div>
                          <div className="font-mono text-sm font-semibold text-slate-600">{item.oem.code}</div>
                          <div className="text-xs text-slate-500">{item.oem.brand}</div>
                          <div className="text-sm font-bold text-red-500 mt-0.5">{item.oem.approxPrice}</div>
                          
                          {/* Mobil nézetben nyíl lefelé */}
                          <div className="md:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 text-slate-300 bg-white rounded-full border border-slate-200 p-0.5 z-10">
                             <ChevronDown className="w-3 h-3" />
                          </div>
                        </div>

                        {/* Nyíl Ikon (Csak Desktop) */}
                        <div className="hidden md:flex justify-center w-8 text-slate-300">
                          <ChevronRight className="w-5 h-5 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                        </div>

                        {/* 3. Okos (Olcsó) Opció - EZT HOMÁLYOSÍTJUK EL */}
                        <div className={cn(
                            "w-full md:w-1/4 bg-emerald-50/50 p-3 rounded-lg md:bg-transparent md:p-0 border border-emerald-100 md:border-none pl-4 transition-all duration-500",
                            // HA LE VAN ZÁRVA: Blur + Opacity + Select tiltás
                            !isPremiumUnlocked && "filter blur-[5px] opacity-40 select-none pointer-events-none grayscale-[0.5]"
                        )}>
                          <div className="text-[10px] md:hidden font-bold text-emerald-600 uppercase mb-1">Smart Choice</div>
                          <div className="font-mono text-sm font-bold text-slate-700">{item.crossRef.code}</div>
                          <div className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                            {item.crossRef.brand}
                            {item.crossRef.source === "OEM Supplier" && (
                              <span className="px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-800 text-[9px] uppercase">OEM</span>
                            )}
                          </div>
                          <div className="text-sm font-bold text-emerald-600 mt-0.5">{item.crossRef.approxPrice}</div>

                          {/* Gomb Csoport */}
                          <div className="flex flex-wrap gap-2 mt-3">
                              {/* 1. AUTODOC */}
                              {item.crossRef.autodoclink && (
                                <a 
                                  href={item.crossRef.autodoclink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold rounded-lg shadow-sm transition-all active:scale-95 group/btn"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <ShoppingCart className="w-3.5 h-3.5" />
                                  <span>AutoDoc</span>
                                  <ExternalLink className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.5 transition-transform" />
                                </a>
                              )}

                              {/* 2. ADVANCE AUTO */}
                              {item.crossRef.advanceautopartslink && (
                                <a 
                                  href={item.crossRef.advanceautopartslink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold rounded-lg shadow-sm transition-all active:scale-95 group/btn"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Zap className="w-3.5 h-3.5" />
                                  <span>Advance Auto</span>
                                  <ExternalLink className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.5 transition-transform" />
                                </a>
                              )}

                              {/* 3. GOOGLE SEARCH */}
                              <a 
                                href={`https://www.google.com/search?q=${item.crossRef.code.replace(/\s/g, '')}+${item.crossRef.brand}+parts+online`}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-2 bg-white hover:bg-slate-50 text-slate-600 text-[11px] font-bold rounded-lg border border-slate-200 shadow-sm transition-all"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Search className="w-3.5 h-3.5 text-slate-400" />
                                Google
                              </a>

                              {/* 4. COPY CODE */}
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const codeToCopy = item.crossRef.code.replace(/\s/g, '');
                                  navigator.clipboard.writeText(codeToCopy);
                                  alert(`Manufacturer Code copied: ${codeToCopy}`);
                                }}
                                className="p-2 bg-white hover:bg-slate-50 text-slate-400 hover:text-emerald-600 rounded-lg border border-slate-200 transition-colors shadow-sm"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                          </div>
                        </div>

                        {/* 4. Magyarázat (Note) */}
                        <div className="w-full md:w-1/4 text-xs text-slate-500 italic leading-relaxed border-t md:border-t-0 pt-2 md:pt-0 border-slate-100 mt-2 md:mt-0 pl-2 md:border-l md:border-slate-200">
                          <Info className="w-3 h-3 inline-block mr-1 text-slate-400 relative -top-0.5" />
                          "{item.note}"
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* --- ÚJ RÉSZ: INTERAKTÍV NÉZET FÜLEKKEL --- */}
          {profile.model3DPath && (
            <div className="mt-12 mb-16 animate-fade-in">
              
              {/* Felső sáv: Cím és Gombok */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-slate-100 border border-slate-200">
                    {activeVisualTab === 'tuning' ? (
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    ) : (
                      <Activity className="w-6 h-6 text-slate-700" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-space text-foreground">
                      Interactive Inspection
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      {activeVisualTab === 'tuning' ? "Virtual Dyno Lab" : "Select view mode below"}
                    </p>
                  </div>
                </div>

                <div className="flex p-1 bg-slate-100 rounded-lg border border-slate-200 relative z-[50] pointer-events-auto overflow-x-auto">
                  <button
                    onClick={() => setActiveVisualTab('3d')}
                    className={cn(
                      "px-4 py-2 text-sm font-bold rounded-md transition-all duration-300 flex items-center gap-2 whitespace-nowrap",
                      activeVisualTab === '3d' ? "bg-white text-black shadow-sm" : "text-slate-500 hover:text-slate-900"
                    )}
                  >
                    <Move3d className="w-4 h-4" />
                    360° View
                  </button>
                  <button
                    onClick={() => setActiveVisualTab('engine')}
                    className={cn(
                      "px-4 py-2 text-sm font-bold rounded-md transition-all duration-300 flex items-center gap-2 whitespace-nowrap",
                      activeVisualTab === 'engine' ? "bg-white text-black shadow-sm" : "text-slate-500 hover:text-slate-900"
                    )}
                  >
                    <Settings className="w-4 h-4" />
                    Engine Bay
                  </button>
                  <button
                    onClick={() => setActiveVisualTab('tuning')}
                    className={cn(
                      "px-4 py-2 text-sm font-bold rounded-md transition-all duration-300 flex items-center gap-2 whitespace-nowrap",
                      activeVisualTab === 'tuning' ? "bg-white text-purple-600 shadow-sm" : "text-slate-500 hover:text-purple-600"
                    )}
                  >
                    <TrendingUp className="w-4 h-4" />
                    Tuning Lab
                  </button>
                </div>
              </div>
              
              {/* TARTALOM DOBOZ */}
              <div className={cn(
                "relative w-full rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50 transition-all duration-500",
                activeVisualTab === '3d' ? "h-[500px]" : "h-auto min-h-[500px]"
              )}>
                
                {/* 1. 3D View */}
                {activeVisualTab === '3d' && (
                  <Car3DViewer 
                    modelPath={profile.model3DPath} 
                    hotspots={profile.model3DHotspots}
                    scale={profile.model3DScale}
                    rotation={profile.model3DRotation}
                    isPremium={isPremiumUnlocked}
                    onUnlock={unlockPremium}
                  />
                )}

                {/* 2. Engine Bay View */}
                {activeVisualTab === 'engine' && (
                  <div className="w-full relative group overflow-hidden bg-slate-900 rounded-xl shadow-2xl border border-white/10">
                    {profile.engineBayImageUrl ? (
                      <div className="relative w-full h-auto">
                        <img 
                          src={profile.engineBayImageUrl} 
                          alt="Engine Bay" 
                          className="w-full h-auto block"
                        />
                        {/* Hotspot logika változatlan... */}
                        {profile.engineBayHotspots?.map((spot, idx) => {
                          const isRightSide = spot.x > 50;
                          const isBottom = spot.y > 60;
                          return (
                            <div key={idx} className="absolute w-8 h-8 -ml-4 -mt-4 z-20 group/spot" style={{ left: `${spot.x}%`, top: `${spot.y}%` }}>
                              <div className={cn(
                                "absolute w-64 bg-slate-900/95 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-2xl opacity-0 group-hover/spot:opacity-100 transition-opacity pointer-events-none z-30 scale-95 group-hover/spot:scale-100",
                                isRightSide ? "right-full mr-3 origin-top-right" : "left-full ml-3 origin-top-left",
                                isBottom ? "bottom-0 origin-bottom-left" : "top-0"
                              )}>
                                <h4 className={cn("font-bold text-sm mb-1 flex items-center gap-2", spot.critical ? 'text-red-400' : 'text-blue-400')}>
                                  {spot.critical && <AlertTriangle className="w-3 h-3" />}
                                  {spot.label}
                                </h4>
                                <p className="text-xs text-slate-300 leading-relaxed">{spot.details}</p>
                              </div>
                              <button className={cn("relative flex items-center justify-center w-full h-full rounded-full border-2 border-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform hover:scale-110", spot.critical ? 'bg-red-600' : 'bg-blue-600')}>
                                <div className="w-2 h-2 bg-white rounded-full" />
                                <span className={cn("absolute inset-0 rounded-full animate-ping opacity-75", spot.critical ? 'bg-red-500' : 'bg-blue-500')}></span>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="w-full h-[500px] flex items-center justify-center text-slate-400">
                        <p>No engine bay image</p>
                      </div>
                    )}
                  </div>
                )}

                {/* 3. TUNING LAB NÉZET (BLURRED IF LOCKED) */}
                {activeVisualTab === 'tuning' && (() => {
                  const tuningData = [
                    profile.tuningGraphData?.stock || { hp: baseHp, nm: baseNm },
                    profile.tuningGraphData?.stage1 || { hp: Math.round(baseHp * 1.1), nm: Math.round(baseNm * 1.1) },
                    profile.tuningGraphData?.stage2 || { hp: Math.round(baseHp * 1.2), nm: Math.round(baseNm * 1.2) },
                    profile.tuningGraphData?.stage3 || { hp: Math.round(baseHp * 1.4), nm: Math.round(baseNm * 1.4) },
                  ];

                  const currentData = tuningData[graphStage];
                  const stockData = tuningData[0];

                  return (
                  // KONTÉNER: Relative, hogy a lakatot pozicionálni lehessen
                  <div className="relative w-full bg-white p-4 md:p-6 flex flex-col gap-0 min-h-[600px]">
                    
                    {/* TARTALOM WRAPPER: Ez kapja a homályosítást */}
                    <div className={cn(
                        "flex flex-col gap-0 transition-all duration-500",
                        !isPremiumUnlocked && "filter blur-[5px] opacity-40 select-none pointer-events-none grayscale-[0.8]"
                    )}>
                        
                        {/* FELSŐ RÉSZ: GRAFIKON ÉS VEZÉRLŐK */}
                        <div className="flex flex-col md:flex-row gap-6 min-h-[450px]">
                            {/* BAL OLDAL: Gombok & Info */}
                            <div className="w-full md:w-1/4 flex flex-col gap-2 z-10 pb-4">
                                <div className="mb-4 border-b pb-2">
                                    <h3 className="text-slate-800 font-bold text-lg uppercase tracking-wider">Stages</h3>
                                </div>

                                {['Stock', 'Stage 1', 'Stage 2', 'Stage 3'].map((label, idx) => (
                                    <button
                                    key={idx}
                                    onClick={() => setGraphStage(idx)}
                                    className={cn(
                                        "w-full px-4 py-3 rounded text-left font-bold text-sm transition-all duration-200 border-l-4",
                                        graphStage === idx 
                                        ? "bg-slate-100 border-red-600 text-red-600 shadow-sm" 
                                        : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:border-slate-300"
                                    )}
                                    >
                                    {label}
                                    </button>
                                ))}

                                {/* Info box */}
                                <div className="mt-auto p-4 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="text-xs text-slate-400 uppercase font-bold mb-3 tracking-wider border-b border-slate-100 pb-2">
                                    Performance Delta
                                    </div>
                                    
                                    {/* Power */}
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                            <span className="text-xs font-bold text-slate-500 uppercase">Power Output</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            {graphStage === 0 ? (
                                            <span className="text-3xl font-black text-slate-800 tracking-tight">
                                                {currentData.hp} <span className="text-sm font-bold text-slate-400">LE</span>
                                            </span>
                                            ) : (
                                            <>
                                                <span className="text-lg font-bold text-slate-400 line-through decoration-2 decoration-slate-300 opacity-60">
                                                {stockData.hp}
                                                </span>
                                                <span className="text-slate-300 text-lg">➜</span>
                                                <span className="text-3xl font-black text-red-600 animate-in fade-in slide-in-from-left-2">
                                                {currentData.hp}
                                                <span className="text-sm font-bold ml-1 text-red-400">LE</span>
                                                </span>
                                            </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Torque */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                                            <span className="text-xs font-bold text-slate-500 uppercase">Torque</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            {graphStage === 0 ? (
                                            <span className="text-3xl font-black text-slate-800 tracking-tight">
                                                {currentData.nm} <span className="text-sm font-bold text-slate-400">Nm</span>
                                            </span>
                                            ) : (
                                            <>
                                                <span className="text-lg font-bold text-slate-400 line-through decoration-2 decoration-slate-300 opacity-60">
                                                {stockData.nm}
                                                </span>
                                                <span className="text-slate-300 text-lg">➜</span>
                                                <span className="text-3xl font-black text-emerald-600 animate-in fade-in slide-in-from-left-2">
                                                {currentData.nm}
                                                <span className="text-sm font-bold ml-1 text-emerald-400">Nm</span>
                                                </span>
                                            </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* JOBB OLDAL: Grafikon */}
                            <div className="w-full md:w-3/4 bg-white rounded border border-slate-200 p-2 relative min-h-[450px]">
                                <RigotechDynoGraph 
                                    data={tuningData}
                                    activeStage={graphStage} 
                                />
                            </div>
                        </div>

                        {/* ALSÓ RÉSZ: MODIFICATION DETAILS */}
                        <div className="border-t border-slate-100 pt-4 mt-2 animate-in slide-in-from-bottom-4 fade-in duration-500">
                            <div className="flex items-center gap-2 mb-4">
                                <Zap className="w-5 h-5 text-purple-600" />
                                <h3 className="text-lg font-bold text-slate-800">Modification Details & Real World Performance</h3>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {profile.tuningPotential.map((stage, index) => (
                                    <div 
                                        key={index}
                                        onClick={() => setGraphStage(index + 1)} 
                                        className={cn(
                                            "p-4 rounded-xl border transition-all duration-300 flex flex-col h-full cursor-pointer relative",
                                            graphStage === index + 1 
                                                ? "bg-purple-50 border-purple-200 shadow-md scale-[1.02] ring-1 ring-purple-200" 
                                                : "bg-slate-50 border-slate-100 opacity-80 hover:opacity-100 hover:bg-white hover:scale-[1.01] hover:shadow-sm"
                                        )}
                                    >
                                        <div className="flex justify-between items-center mb-3">
                                            <span className={cn(
                                                "font-bold uppercase text-xs tracking-wider px-2 py-1 rounded transition-colors",
                                                graphStage === index + 1 ? "bg-purple-200 text-purple-800" : "bg-slate-200 text-slate-600"
                                            )}>
                                                {stage.stage}
                                            </span>
                                            <span className="font-mono font-bold text-slate-700">{stage.power}</span>
                                        </div>
                                        
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                                            {stage.notes}
                                        </p>

                                        {((stage as any).zeroToHundred || (stage as any).hundredToTwoHundred) && (
                                            <div className="mt-auto pt-3 border-t border-slate-200/60 grid grid-cols-2 gap-2">
                                                {(stage as any).zeroToHundred && (
                                                    <div className="bg-white/50 rounded-lg p-2 flex flex-col items-center justify-center border border-slate-100">
                                                        <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">
                                                            <Timer className="w-3 h-3" /> 0-100
                                                        </div>
                                                        <span className="text-sm font-mono font-black text-slate-800">
                                                            {(stage as any).zeroToHundred}
                                                        </span>
                                                    </div>
                                                )}

                                                {(stage as any).hundredToTwoHundred && (
                                                    <div className="bg-white/50 rounded-lg p-2 flex flex-col items-center justify-center border border-slate-100">
                                                        <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">
                                                            <Wind className="w-3 h-3" /> 100-200
                                                        </div>
                                                        <span className="text-sm font-mono font-black text-purple-600">
                                                            {(stage as any).hundredToTwoHundred}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* UNLOCK OVERLAY - KÖZÉPRE IGAZÍTVA */}
                    {!isPremiumUnlocked && (
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                         <div className="w-full max-w-sm">
                            <ModernUnlock 
                                variant="overlay" 
                                label="tuning potential & dyno graph" 
                                onClick={unlockPremium} 
                            />
                         </div>
                      </div>
                    )}

                  </div>
                );
              })()}

              </div>
            </div>
          )}
          

          {/* --- Behind the Wheel (SPACING FIX) --- */}
          <div className="relative rounded-2xl bg-slate-900 text-white shadow-lg overflow-hidden min-h-[300px] flex flex-col">
            
            {/* 1. FEJLÉC */}
            <div className="relative z-20 p-6 pb-2 flex items-center gap-2">
              <div className="p-2 bg-white/10 rounded-full">
                <Wind className="w-5 h-5 text-blue-300" />
              </div>
              <h2 className="text-xl font-bold text-white">Behind the Wheel</h2>
            </div>

            {/* 2. TARTALOM (SZÖVEG) */}
            {/* JAVÍTÁS: px-6 és pt-4 (pt-0 helyett), hogy legyen távolság a címtől */}
            <div className="px-6 pb-6 pt-11 flex-grow">
              <p className={cn(
                "text-lg text-slate-300 italic leading-relaxed transition-all duration-500", 
                !isPremiumUnlocked && "filter blur-[3px] opacity-50 select-none pointer-events-none"
              )}>
                "{profile.drivingExperience}"
              </p>
            </div>

            {/* 3. UNLOCK OVERLAY (ABSOLUTE CENTER) */}
            {/* A lakat továbbra is a teljes kártya közepén marad */}
            {!isPremiumUnlocked && (
              <div className="absolute inset-0 z-30 flex items-center justify-center p-4 pointer-events-none">
                 <div className="w-full max-w-sm scale-90 [&_h4]:text-white [&_p]:text-slate-300 pointer-events-auto"> 
                    <ModernUnlock 
                      variant="overlay" 
                      label="driving impressions" 
                      onClick={unlockPremium} 
                    />
                 </div>
              </div>
            )}
          </div>

          {/* Mechanic Verdict (MODERN UNLOCK + LIGHTER BLUR) */}
          <div className="glass-card rounded-2xl p-6 bg-primary/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Stethoscope className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">The Mechanic's Verdict</h2>
            </div>
            
            {/* Relatív konténer min-height-tel, hogy a nagy gomb biztosan elférjen */}
            <div className="relative min-h-[180px] flex flex-col justify-center">
                
                {/* A VÉLEMÉNY SZÖVEGE: 
                    - blur-[3px]: Enyhébb, jobban látszanak a betűk
                    - opacity-70: Kevésbé halvány
                */}
                <p className={cn(
                  "text-lg text-foreground/90 italic leading-relaxed transition-all duration-500",
                  !isPremiumUnlocked && "filter blur-[4.5px] opacity-70 select-none pointer-events-none grayscale-[0.5]"
                )}>
                  "{profile.mechanicVerdict}"
                </p>

                {/* UNLOCK GOMB: A szabványos ModernUnlock komponens */}
                {!isPremiumUnlocked && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="w-full max-w-sm scale-90"> 
                           <ModernUnlock 
                             variant="overlay" 
                             label="mechanic's verdict" 
                             onClick={unlockPremium} 
                           />
                        </div>
                    </div>
                )}
            </div>
          </div>

          {/* Repair Cost Estimate (SAME STYLE, PARTIAL BLUR) */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-yellow-500" />
              <h2 className="text-xl font-bold text-foreground">Repair Cost Estimate</h2>
            </div>
            
            <div className="flex items-center gap-1.5">
                {/* 1. AZ ÖSSZEG (BLURRED) */}
                {/* Relatív konténer a lakat miatt */}
                <div className="relative">
                    <div className={cn(
                        "text-3xl font-bold text-foreground transition-all duration-500",
                        !isPremiumUnlocked && "filter blur-md opacity-50 select-none pointer-events-none grayscale"
                    )}>
                         {/* Levágjuk a '/ year' részt az adatról, hogy ne legyen duplázás */}
                        {profile.repairCostEstimate ? profile.repairCostEstimate.replace(/\/ year/i, '').trim() : "N/A"}
                    </div>

                    {/* KOMPAKT UNLOCK GOMB (csak az összeg fölött) */}
                    {!isPremiumUnlocked && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <button 
                                onClick={unlockPremium}
                                className="bg-white/90 hover:bg-white text-primary text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm border border-slate-200 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm whitespace-nowrap"
                            >
                                <Lock className="w-3 h-3" />
                                <span>Unlock</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* 2. A Suffix (MINDIG LÁTHATÓ + UGYANOLYAN STÍLUS) */}
                {/* Ugyanaz a text-3xl és font-bold, mint az összegnél */}
                <span className="text-3xl font-bold text-foreground">
                    / year
                </span>
            </div>

            <p className="text-sm text-muted-foreground mt-2">
              Estimated range for common repairs based on market data
            </p>
          </div>

          {/* --- Platform & Engine Family Section (FIXED VISIBILITY & STYLE) --- */}
          {profile.sisterModels && (
            // JAVÍTÁS: Sima "glass-card", levettük a border-dashed és bg-slate-50 osztályokat
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-slate-200 rounded-full">
                  <GitBranch className="w-5 h-5 text-slate-600" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Platform & Engine Family</h2>
              </div>
              
              {/* Relatív konténer */}
              <div className="relative min-h-[220px]">
                
                {/* TARTALOM (BLUR): 
                   Ugyanazok a beállítások, mint a Big Brother-nél.
                   A kártyák látszani fognak elmosva, mert a gomb NEM takarja ki őket teljesen.
                */}
                <div className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-500",
                  !isPremiumUnlocked && "filter blur-[5px] opacity-50 select-none pointer-events-none grayscale-[0.8]"
                )}>
                  {profile.sisterModels.map((model, idx) => (
                    <div key={idx} className="flex flex-col p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                      <div className="font-bold text-slate-800 text-lg mb-1">
                        {model.name}
                      </div>
                      <div className="text-xs text-slate-500 italic leading-relaxed">
                        "{model.note}"
                      </div>
                      <div className="mt-auto pt-2 flex justify-end">
                         <span className="text-[10px] uppercase font-bold text-slate-300 tracking-widest">Compatible</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* UNLOCK GOMB POZÍCIÓ JAVÍTÁSA: 
                   inset-0 HELYETT inset-x-0 top-1/2 használunk.
                   Így a gomb konténere NEM fedi le az egész területet, csak egy sávot középen.
                   Ezért a "fehér köd" nem takarja el a fenti és lenti kártyákat.
                */}
                {!isPremiumUnlocked && (
                  <div className="absolute inset-x-0 top-1/2 z-10 flex justify-center transform -translate-y-1/2">
                    <div className="w-full max-w-sm">
                      <ModernUnlock 
                        variant="overlay" 
                        label="platform & engine family"
                        count={profile.sisterModels.length}
                        onClick={unlockPremium} 
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      )}

function SpecCard({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="glass-card rounded-xl p-4 hover-lift">
      <Icon className="w-5 h-5 text-primary mb-2" />
      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
      <div className="font-semibold text-foreground">{value}</div>
    </div>
  );
}
// Segédkomponens a mérnöki adatok kártyáihoz
function EngineeringCard({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) {
  return (
    <div className="bg-secondary/10 rounded-xl overflow-hidden border border-border/20">
      <div className="bg-secondary/30 px-4 py-2 flex items-center gap-2 border-b border-border/20">
        <Icon className="w-4 h-4 text-primary" />
        <span className="text-xs font-bold uppercase tracking-wider text-foreground">{title}</span>
      </div>
      <div className="p-3 space-y-2">
        {children}
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string, value: any }) {
  return (
    <div className="flex justify-between items-start text-sm gap-4">
      <span className="text-muted-foreground capitalize shrink-0">{label}:</span>
      <span className="font-medium text-foreground text-right">{String(value)}</span>
    </div>
  );
}

function formatKey(key: string) {
  // camelCase -> Title Case (e.g. rodBoltSize -> Rod Bolt Size)
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}
function InteractiveDynoGraph({ baseHp, activeStage }: { baseHp: number, activeStage: number }) {
  const width = 600;
  const height = 300;
  const maxHpScale = baseHp * 1.6; // Y tengely skálázása

  // Segédfüggvény görbe generáláshoz
  const getPath = (multiplier: number) => {
    // RPM pontok (x) és Teljesítmény szorzók (y)
    const points = [
      { x: 0, y: 0.1 },     // 1000 RPM
      { x: 0.2, y: 0.35 },  // 2500 RPM
      { x: 0.4, y: 0.65 },  // 4000 RPM
      { x: 0.6, y: 0.85 },  // 5500 RPM
      { x: 0.75, y: 0.98 }, // 6500 RPM (Közel a csúcshoz)
      { x: 0.85, y: 1.0 },  // 7200 RPM (Peak)
      { x: 1.0, y: 0.90 },  // 8000 RPM (Leszabályzás)
    ];

    return points.map((p, i) => {
      const px = p.x * width;
      const py = height - (baseHp * multiplier * p.y / maxHpScale) * height;
      // 'L' parancs a vonalrajzoláshoz (Line)
      return `${i === 0 ? 'M' : 'L'} ${px},${py}`;
    }).join(' ');
  };

  const multipliers = [1.0, 1.06, 1.09, 1.60]; // Tuning szorzók

  return (
    <div className="w-full h-full min-h-[300px] relative">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible drop-shadow-2xl">
        
        {/* Rácsvonalak */}
        <g className="opacity-10 stroke-white">
          {[1, 2, 3, 4].map(i => <line key={i} x1="0" y1={height/4*i} x2={width} y2={height/4*i} strokeWidth="1" />)}
          {[1, 2, 3, 4, 5].map(i => <line key={i} x1={width/6*i} y1="0" x2={width/6*i} y2={height} strokeWidth="1" />)}
        </g>

        {/* 1. STOCK GÖRBE (Mindig látszik) */}
        {/* Ha tuning van kiválasztva (activeStage > 0), akkor halvány (opacity-30) és szaggatott */}
        <path
          d={getPath(1.0)}
          fill="none"
          stroke="currentColor"
          strokeWidth={activeStage === 0 ? "4" : "2"}
          strokeDasharray={activeStage === 0 ? "0" : "5,5"}
          className={cn(
            "transition-all duration-500 ease-in-out",
            activeStage === 0 ? "text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" : "text-slate-500 opacity-30"
          )}
        />
        
        {/* 2. TUNING GÖRBE (Csak akkor, ha nem stock) */}
        {activeStage > 0 && (
          <path
            d={getPath(multipliers[activeStage])}
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-500 ease-in-out"
          />
        )}
        
        {/* Csúcspont jelölő (Kis pötty a grafikon tetején) */}
        <circle 
           cx={width * 0.85} 
           cy={height - (baseHp * multipliers[activeStage] / maxHpScale) * height} 
           r="6" 
           className={cn(
             "fill-white animate-pulse transition-all duration-500", 
             activeStage > 0 ? "stroke-purple-500" : "stroke-blue-500"
           )}
           strokeWidth="3"
        />

      </svg>
      
      {/* Információs címke a görbe mellé */}
      <div className="absolute top-4 left-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-xs text-slate-400">Stock Power</span>
        </div>
        {activeStage > 0 && (
          <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,1)]"></div>
            <span className="text-xs text-purple-400 font-bold">Stage {activeStage} Tuned</span>
          </div>
        )}
      </div>
    </div>
  );
}
function RigotechDynoGraph({ data, activeStage }: { data: {hp: number, nm: number}[], activeStage: number }) {
  const width = 600;
  const height = 450;
  const padding = { top: 40, right: 60, bottom: 20, left: 60 };
  
  // --- ITT ÁLLÍTHATOD A SKÁLA OSZTÁSAIT ---
  // Korábban 4 volt, most 5-re emeltem, így sűrűbb lesz a rács
  const steps = 6; 
  
  // Segédtömb a rácsvonalak generálásához (0-tól 1-ig, 'steps' darab lépésben)
  // Ez automatikusan létrehozza: [0, 0.2, 0.4, 0.6, 0.8, 1.0] 5 lépés esetén
  const tickFractions = Array.from({length: steps + 1}, (_, i) => i / steps);

  // --- OKOS SKÁLÁZÁS LOGIKA ---
  const getSmartMax = (value: number) => {
    // Kiszámoljuk a nyers lépésközt
    const roughStep = value / steps;
    
    // "Szép" kerek számok, amikhez igazítunk
    const magnitudes = [10, 20, 25, 40, 50, 75, 100, 125, 150, 200, 250, 300, 400, 500, 1000];
    
    // Megkeressük az első olyan "szép" számot, ami nagyobb a nyers lépésköznél
    const step = magnitudes.find(m => m >= roughStep) || roughStep;
    
    // A skála teteje így mindig osztható lesz a lépések számával
    return step * steps;
  };

  const maxHpValue = Math.max(...data.map(d => d.hp));
  const maxNmValue = Math.max(...data.map(d => d.nm));
  
  const maxHpScale = getSmartMax(maxHpValue);
  const maxNmScale = getSmartMax(maxNmValue);

  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  const currentData = data[activeStage];

  const getHpPath = (targetHp: number) => {
    const points = [
      { x: 0, y: 0.02 },    
      { x: 0.2, y: 0.25 },
      { x: 0.4, y: 0.50 },
      { x: 0.6, y: 0.75 },
      { x: 0.8, y: 0.98 }, 
      { x: 1.0, y: 0.90 }, 
    ];
    return points.map((p, i) => {
      const px = padding.left + (p.x * graphWidth);
      const py = height - padding.bottom - (targetHp * p.y / maxHpScale) * graphHeight;
      return `${i === 0 ? 'M' : 'L'} ${px},${py}`;
    }).join(' ');
  };

  const getNmPath = (targetNm: number) => {
    const points = [
      { x: 0, y: 0.15 },    
      { x: 0.15, y: 0.85 },
      { x: 0.3, y: 0.98 }, 
      { x: 0.5, y: 0.95 },  
      { x: 0.8, y: 0.70 },  
      { x: 1.0, y: 0.50 },  
    ];
    return points.map((p, i) => {
      const px = padding.left + (p.x * graphWidth);
      const py = height - padding.bottom - (targetNm * p.y / maxNmScale) * graphHeight;
      return `${i === 0 ? 'M' : 'L'} ${px},${py}`;
    }).join(' ');
  };

  return (
    <div className="w-full h-full relative font-mono text-xs select-none flex flex-col justify-end">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
        
        {/* RÁCSHÁLÓ (Dinamikusan generálva a 'steps' alapján) */}
        <g className="stroke-slate-100" strokeWidth="1" strokeDasharray="4,4">
          {tickFractions.map((t, i) => (
            <line 
              key={`h-${i}`} 
              x1={padding.left} 
              y1={padding.top + (1 - t) * graphHeight} 
              x2={width - padding.right} 
              y2={padding.top + (1 - t) * graphHeight} 
            />
          ))}
          {[0, 0.2, 0.4, 0.6, 0.8, 1].map(i => (
            <line key={`v-${i}`} x1={padding.left + i * graphWidth} y1={padding.top} x2={padding.left + i * graphWidth} y2={height - padding.bottom} />
          ))}
        </g>

        {/* --- BAL TENGELY (LE) --- */}
        <g className="text-slate-400" textAnchor="end">
           <text x={padding.left - 10} y={padding.top - 10} className="font-bold fill-red-600 text-sm">[LE]</text>
           {tickFractions.map((t, i) => (
             <text key={`hp-${i}`} x={padding.left - 10} y={height - padding.bottom - t * graphHeight + 4}>
               {Math.round(maxHpScale * t)}
             </text>
           ))}
        </g>
        <line x1={padding.left} y1={padding.top} x2={padding.left} y2={height - padding.bottom} stroke="#cbd5e1" strokeWidth="1" />

        {/* --- JOBB TENGELY (NM) --- */}
        <g className="text-slate-400" textAnchor="start">
           <text x={width - padding.right + 10} y={padding.top - 10} className="font-bold fill-emerald-600 text-sm">[Nm]</text>
           {tickFractions.map((t, i) => (
             <text key={`nm-${i}`} x={width - padding.right + 10} y={height - padding.bottom - t * graphHeight + 4}>
               {Math.round(maxNmScale * t)}
             </text>
           ))}
        </g>
        <line x1={width - padding.right} y1={padding.top} x2={width - padding.right} y2={height - padding.bottom} stroke="#cbd5e1" strokeWidth="1" />

        {/* --- STOCK GÖRBÉK --- */}
        {activeStage > 0 && (
          <>
            <path d={getHpPath(data[0].hp)} fill="none" stroke="#fee2e2" strokeWidth="2" strokeDasharray="4,4" /> 
            <path d={getNmPath(data[0].nm)} fill="none" stroke="#d1fae5" strokeWidth="2" strokeDasharray="4,4" /> 
          </>
        )}

        {/* --- AKTÍV STAGE GÖRBÉK --- */}
        <path
          d={getHpPath(currentData.hp)}
          fill="none"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="transition-all duration-700 ease-out"
        />
        <path
          d={getNmPath(currentData.nm)}
          fill="none"
          stroke="#059669"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="transition-all duration-700 ease-out"
        />

        {/* X TENGELY (RPM) */}
        <g className="text-slate-400" textAnchor="middle">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((rpm, i) => (
             <text key={i} x={padding.left + (i * (graphWidth/7))} y={height - padding.bottom + 15} className="text-[10px] font-bold">
               {rpm}
             </text>
          ))}
        </g>

      </svg>
      
      {/* Jelmagyarázat */}
      <div className="absolute top-4 right-16 flex gap-4 bg-white/90 p-2 rounded-lg border border-slate-100 shadow-sm backdrop-blur-sm">
        <div className="flex items-center gap-2">
           <div className="w-3 h-3 bg-red-600 rounded-full"></div>
           <span className="text-xs font-bold text-slate-600">Power</span>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
           <span className="text-xs font-bold text-slate-600">Torque</span>
        </div>
      </div>
    </div>
  );
}

function ModernUnlock({ 
  label, 
  count, 
  onClick, 
  variant = "bar" 
}: { 
  label?: string, 
  count?: number, 
  onClick: () => void,
  variant?: "bar" | "overlay"
}) {
  const isOverlay = variant === "overlay";
  const showCountBadge = typeof count === 'number' && count > 0;

  if (isOverlay) {
    return (
      // KÜLSŐ KONTÉNER:
      // 1. Kivettem a "bg-white/60", "backdrop-blur", "border", "rounded-xl" osztályokat.
      // 2. Így megszűnik a fehér négyzet, csak a pozicionálás marad.
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
        
        {/* BELSŐ TARTALOM: Animálva jelenik meg */}
        <div className="text-center animate-in fade-in zoom-in duration-300">
          
          {/* LAKAT IKON: Fehér körben marad, árnyékkal, hogy jól elváljon a háttértől */}
          <div className="mx-auto mb-3 w-12 h-12 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center border border-slate-100/50">
            <Lock className="w-5 h-5 text-primary" />
          </div>
          
          {/* SZÖVEG: Sötétebb és árnyékolt, hogy olvasható legyen a blur felett */}
          <h4 className="text-lg font-bold text-slate-900 mb-1 drop-shadow-md">
            Premium Data Locked
          </h4>
          
          <p className="text-sm text-slate-700 mb-5 max-w-[220px] mx-auto leading-relaxed font-semibold drop-shadow-sm">
            Unlock to reveal {label || "hidden content"}.
          </p>
          
          {/* GOMB: Erős árnyékkal */}
          <Button 
            onClick={onClick} 
            className="rounded-full px-8 shadow-xl bg-primary hover:bg-primary/90 text-white font-bold transition-all hover:scale-105 active:scale-95 border border-white/20"
          >
            Unlock Access
          </Button>
        </div>
      </div>
    );
  }

  // --- BAR VÁLTOZAT (Ez változatlan marad) ---
  return (
    <div 
      onClick={onClick}
      className="mt-3 group relative overflow-hidden rounded-xl bg-primary/5 border border-primary/20 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer"
    >
      <div className="relative flex items-center p-4 gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full shadow-sm border border-primary/20 flex items-center justify-center">
          <Lock className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-grow">
          <div className="font-bold text-primary flex items-center gap-2">
            Unlock Full Report
            {showCountBadge && (
               <span className="text-[10px] bg-white text-primary px-2 py-0.5 rounded-full border border-primary/20 shadow-sm font-bold">
                 +{count} items
               </span>
            )}
          </div>
          <div className="text-xs text-primary/70 font-medium">
            Tap to reveal hidden {label} & details
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:bg-primary/90 transition-all duration-300">
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

function MaintenanceCategory({ 
  title, 
  icon: Icon, 
  tasks, 
  defaultOpen = false,
  colorClass = "text-primary",
  bgClass = "bg-primary/10",
  isPremiumUnlocked,
  onUnlock
}: { 
  title: string, 
  icon: any, 
  tasks: any[], 
  defaultOpen?: boolean,
  colorClass?: string,
  bgClass?: string,
  isPremiumUnlocked: boolean,
  onUnlock: () => void
}) {
  if (!tasks || tasks.length === 0) return null;

  // Ha nincs feloldva, csak az első 1 elemet mutatjuk
  const visibleTasks = isPremiumUnlocked ? tasks : tasks.slice(0, 1);

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
      {/* FEJLÉC */}
      <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
        <div className={cn("p-2 rounded-lg", bgClass)}>
          <Icon className={cn("w-5 h-5", colorClass)} />
        </div>
        <h3 className="font-bold text-slate-800">{title}</h3>
      </div>
      
      {/* LISTA (TASKOK) */}
      <div className="divide-y divide-slate-100">
        {visibleTasks.map((task, idx) => (
          <div key={idx} className="p-4 hover:bg-slate-50 transition-colors group">
            
            {/* 1. SOR: IDŐSZAK ÉS FONTOSSÁG */}
            <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{task.interval}</span>
                </div>

                {/* Importance Badge */}
                {task.importance === "Critical" && (
                  <span className="text-[10px] uppercase font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100 animate-pulse">
                    Critical
                  </span>
                )}
                {task.importance === "High" && (
                  <span className="text-[10px] uppercase font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                    High Priority
                  </span>
                )}
            </div>

            {/* 2. CÍM ÉS LEÍRÁS */}
            <h4 className="font-bold text-slate-700 text-sm mb-1 group-hover:text-blue-600 transition-colors">{task.task}</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">{task.details}</p>

            {/* 3. LÁBLÉC: KÖLTSÉG ÉS ALKATRÉSZEK */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 mt-2 pt-3 border-t border-slate-100/80">
              
              {/* Költség */}
              {task.estimatedCost && (
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-1.5 rounded shrink-0 border border-slate-200">
                  <DollarSign className="w-3 h-3 text-green-600" />
                  {task.estimatedCost}
                </div>
              )}

              {/* Alkatrészek Listája */}
              {task.parts && task.parts.length > 0 && (
                <div className="flex flex-wrap gap-2 w-full">
                  {task.parts.map((part: string, pIdx: number) => (
                    <div key={pIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm">
                      <ShoppingCart className="w-3 h-3 text-slate-400" />
                      <span>{part}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* --- ÚJ, KIEMELT ZÁRÓ SZEKCIÓ (PREMIUM LOCKED) --- */}
      {!isPremiumUnlocked && tasks.length > 1 && (
          <div 
            onClick={onUnlock} 
            className="relative group cursor-pointer overflow-hidden bg-slate-50 border-t border-slate-200 hover:bg-blue-50/60 transition-all duration-300"
          >
              {/* Bal oldali kék jelölőcsík */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-300 group-hover:bg-blue-500 transition-colors" />
              
              <div className="p-3 pl-5 flex items-center gap-3">
                  {/* Ikon */}
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-200 transition-all">
                      <Lock className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>

                  {/* Szöveg */}
                  <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-sm font-bold text-slate-700 group-hover:text-blue-700 transition-colors">
                              Maintenance Plan Locked
                          </span>
                          <span className="px-1.5 py-[1px] rounded text-[9px] font-bold bg-blue-100 text-blue-700 uppercase tracking-wide border border-blue-200">
                              Pro
                          </span>
                      </div>
                      <div className="text-xs text-slate-500 font-medium group-hover:text-slate-600">
                          Unlock <span className="font-bold">+{tasks.length - 1} hidden tasks</span>, parts & costs
                      </div>
                  </div>

                  {/* Nyíl Gomb */}
                  <div className="mr-2 w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                      <ChevronRight className="w-4 h-4" />
                  </div>
              </div>
          </div>
      )}
    </div>
  );
}