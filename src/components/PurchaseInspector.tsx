import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Wrench, ChevronRight, AlertTriangle, RefreshCcw, Copy, Check, Undo2, SkipForward, AlertOctagon, Gauge, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { carDatabase, engineProfiles, EngineProfile } from "@/data/carDatabase"; 
import type { EngineTypeEntry } from "@/data/carDatabase";

type InspectionItem = NonNullable<EngineProfile['InspectionChecklist']>[number];

// --- CARVERTICAL PROMO KÁRTYA (ÚJRAHASZNOSÍTHATÓ) ---
const CarHistoryCard = ({ compact = false }: { compact?: boolean }) => {
  return (
    <div className={`bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl text-white shadow-xl relative overflow-hidden group border border-blue-700/50 ${compact ? 'p-6 flex items-center justify-between gap-6' : 'p-8 text-center'}`}>
      
      {/* Háttér effekt */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none" />
      
      <div className={`relative z-10 ${compact ? 'text-left' : ''}`}>
        <div className={`flex items-center gap-3 mb-3 ${compact ? '' : 'justify-center'}`}>
          <div className="bg-yellow-400 p-2 rounded-lg text-blue-900">
            <FileText className="w-5 h-5" />
          </div>
          <span className="font-bold text-yellow-400 text-sm tracking-wider uppercase">Official Data</span>
        </div>
        
        <h3 className={`font-bold leading-tight ${compact ? 'text-xl' : 'text-2xl mb-2'}`}>Don't buy a clocked car!</h3>
        <p className={`text-blue-200 text-sm leading-relaxed ${compact ? 'hidden md:block' : 'mb-6 max-w-md mx-auto'}`}>
          Check mileage, accidents, and theft records before inspection.
        </p>
      </div>

      <div className={`relative z-10 ${compact ? 'shrink-0' : 'w-full'}`}>
        <Button 
          className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold h-12 rounded-xl gap-2 transition-all shadow-lg shadow-yellow-900/20 px-8 w-full md:w-auto"
          onClick={() => window.open("https://www.carvertical.com", "_blank")}
        >
          Check History <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

// --- OKOS VERDICT CARD ---
const VerdictCard = ({ totalUSD, totalEUR, criticalItems, minorItems, onReset }: { totalUSD: number, totalEUR: number, criticalItems: InspectionItem[], minorItems: InspectionItem[], onReset: () => void }) => {
  const [copied, setCopied] = useState(false);
  const issuesCount = criticalItems.length + minorItems.length;

  let verdictColor = "text-green-600";
  let verdictText = "EXCELLENT CONDITION";
  let verdictBg = "bg-green-50 border-green-100";

  if (criticalItems.length > 0 || totalUSD > 3000) {
    verdictColor = "text-red-600";
    verdictText = "CRITICAL ATTENTION NEEDED";
    verdictBg = "bg-red-50 border-red-100";
  } else if (minorItems.length > 2 || totalUSD > 1000) {
    verdictColor = "text-orange-500";
    verdictText = "GOOD BUT NEEDS WORK";
    verdictBg = "bg-orange-50 border-orange-100";
  }

  const handleCopy = () => {
    const text = `🔍 Inspection Summary\n\n🚨 URGENT: ${criticalItems.length}\n⚠️ MINOR: ${minorItems.length}\n💰 Total Est: $${totalUSD.toLocaleString()}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`p-10 md:p-16 rounded-[3rem] animate-in zoom-in duration-500 border-2 ${verdictBg} shadow-2xl h-full flex flex-col relative overflow-hidden bg-white w-full`}>
      
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-8">
        <div className="text-left">
            <h2 className={`text-4xl md:text-5xl font-black mb-2 uppercase tracking-tighter ${verdictColor}`}>{verdictText}</h2>
            <p className="text-gray-500 text-lg">Detailed repair cost estimation</p>
        </div>
        <div className="text-right bg-white/60 p-6 rounded-3xl border border-black/5">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Total Estimated Cost</p>
            <p className="text-6xl font-black text-gray-900 tracking-tight">
                ${totalUSD.toLocaleString()}
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 overflow-y-auto mb-8">
        {/* 1. KRITIKUS ZÓNA */}
        <div className={`rounded-3xl p-8 border ${criticalItems.length > 0 ? 'bg-red-50 border-red-100' : 'bg-gray-50 border-gray-100 opacity-50'}`}>
            <h4 className="flex items-center gap-3 text-red-700 font-black uppercase tracking-wider mb-6 text-lg">
                <AlertOctagon className="w-6 h-6" /> Mandatory Repairs
            </h4>
            {criticalItems.length > 0 ? (
                <ul className="space-y-4">
                    {criticalItems.map((item, i) => (
                        <li key={i} className="flex justify-between items-center text-base bg-white p-4 rounded-2xl shadow-sm">
                            <span className="font-bold text-gray-800">{item.question}</span>
                            <span className="font-mono font-bold text-red-600 bg-red-50 px-3 py-1 rounded-lg">${item.costUSD}</span>
                        </li>
                    ))}
                </ul>
            ) : <p className="text-gray-400 font-medium">No critical issues found.</p>}
        </div>

        {/* 2. ALKUALAP ZÓNA */}
        <div className={`rounded-3xl p-8 border ${minorItems.length > 0 ? 'bg-orange-50 border-orange-100' : 'bg-gray-50 border-gray-100 opacity-50'}`}>
            <h4 className="flex items-center gap-3 text-orange-700 font-black uppercase tracking-wider mb-6 text-lg">
                <Wrench className="w-6 h-6" /> Negotiation Points
            </h4>
            {minorItems.length > 0 ? (
                <ul className="space-y-4">
                    {minorItems.map((item, i) => (
                        <li key={i} className="flex justify-between items-center text-base bg-white p-4 rounded-2xl shadow-sm">
                            <span className="font-medium text-gray-700">{item.question}</span>
                            <span className="font-mono font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-lg">${item.costUSD}</span>
                        </li>
                    ))}
                </ul>
            ) : <p className="text-gray-400 font-medium">No minor issues found.</p>}
        </div>
      </div>

      {/* GOMBOK */}
      <div className="flex justify-center gap-6 mt-auto">
        <Button onClick={onReset} variant="outline" className="h-16 px-8 border-2 rounded-2xl gap-3 text-lg font-bold">
            <RefreshCcw className="w-5 h-5" /> New Inspection
        </Button>
        <Button onClick={handleCopy} className={`h-16 px-10 rounded-2xl gap-3 text-lg font-bold text-white transition-all ${copied ? 'bg-green-600' : 'bg-black hover:bg-gray-800'}`}>
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            {copied ? "Report Copied" : "Copy Report"}
        </Button>
      </div>
    </div>
  );
};

export default function PurchaseInspector() {
  const navigate = useNavigate(); 
  
  // --- STATE ---
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [generation, setGeneration] = useState("");
  const [engineType, setEngineType] = useState("");
  const [engineCode, setEngineCode] = useState(""); 
  
  const [models, setModels] = useState<string[]>([]);
  const [generations, setGenerations] = useState<string[]>([]);
  const [engineTypes, setEngineTypes] = useState<(string | EngineTypeEntry)[]>([]);
  const [availableCodes, setAvailableCodes] = useState<string[]>([]); 

  const [isInspecting, setIsInspecting] = useState(false);
  const [activeProfile, setActiveProfile] = useState<EngineProfile | null>(null);
  
  // --- KVÍZ STATE ---
  const [currentStep, setCurrentStep] = useState(0); 
  const [answers, setAnswers] = useState<Record<string, 'issue' | 'ok' | 'skipped'>>({}); 
  const [isFinished, setIsFinished] = useState(false); 
  const [healthScore, setHealthScore] = useState(100);
  const [showCriticalWarning, setShowCriticalWarning] = useState(false);

  // Helpers
  const getEngineName = (option: string | EngineTypeEntry) => typeof option === "object" ? option.name : option;
  const isDiesel = (name: string) => {
     if (name.includes("Hybrid") || name.includes("TFSI")) return false;
     const indicators = ["TDI", "CDI", "d", "D-4D", "dCi", "HDi", "TD", "JTD"];
     return indicators.some(i => i === "d" ? (/\d\.?\d*d\b/.test(name) || /\s+d\b/.test(name)) : name.includes(i));
  };
  const petrolEngines = engineTypes.filter(option => !isDiesel(getEngineName(option)));
  const dieselEngines = engineTypes.filter(option => isDiesel(getEngineName(option)));

  // --- AUTOMATIKUS LISTA FRISSÍTÉSEK ---
  useEffect(() => {
    if (brand) {
      setModels(carDatabase.models[brand as keyof typeof carDatabase.models] || []);
      setModel(""); setGeneration(""); setEngineType(""); setEngineCode("");
    }
  }, [brand]);

  useEffect(() => {
    if (brand && model) {
      const key = `${brand}-${model}` as keyof typeof carDatabase.generations;
      setGenerations(carDatabase.generations[key] || []);
      setGeneration(""); setEngineType(""); setEngineCode("");
    }
  }, [brand, model]);

  useEffect(() => {
    if (brand && model && generation) {
      const key = `${brand}-${model}-${generation}` as keyof typeof carDatabase.engineTypes;
      // @ts-ignore
      setEngineTypes(carDatabase.engineTypes[key] || []);
      setEngineType(""); setEngineCode("");
    }
  }, [brand, model, generation]);

  useEffect(() => {
    if (brand && model && generation && engineType) {
      const dbKey = `${brand}-${model}-${generation}-${engineType}`;
      // @ts-ignore
      const codesData = carDatabase.engineCodes?.[dbKey];

      if (codesData && Array.isArray(codesData)) {
         const codes = codesData.map((item: any) => typeof item === 'string' ? item : item.code);
         setAvailableCodes(Array.from(new Set(codes)));
      } else {
         setAvailableCodes([]);
      }
      setEngineCode(""); 
    } else {
      setAvailableCodes([]);
    }
  }, [brand, model, generation, engineType]);


  const handleStartInspection = () => {
    if (brand && model && generation && engineType && engineCode) {
      const foundProfile = engineProfiles.find(p => 
        p.brand === brand && 
        p.engineCode === engineCode 
      );
      
      setActiveProfile(foundProfile || null);
      setCurrentStep(0);
      setAnswers({});
      setHealthScore(100);
      setIsFinished(false);
      setIsInspecting(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleReset = () => {
    setIsInspecting(false);
    setBrand("");
    setModel("");
    setGeneration("");
    setEngineType("");
    setEngineCode("");
    setAnswers({});
    setCurrentStep(0);
    setHealthScore(100);
    setIsFinished(false);
    setActiveProfile(null);
  };

  const calculateScoreDeduction = (item: InspectionItem) => {
      switch (item.severity) {
          case 'CRITICAL': return 25;
          case 'HIGH': return 15;
          case 'MEDIUM': return 10;
          case 'LOW': return 5;
          default: return 5;
      }
  };

  const handleAnswer = (status: 'issue' | 'ok' | 'skipped') => {
    if (!activeProfile?.InspectionChecklist) return;
    const currentItem = activeProfile.InspectionChecklist[currentStep];
    
    setAnswers(prev => {
        const newAnswers = { ...prev, [currentItem.id]: status };
        
        let newScore = 100;
        activeProfile.InspectionChecklist!.forEach(item => {
            if (newAnswers[item.id] === 'issue') { 
                newScore -= calculateScoreDeduction(item);
            }
        });
        setHealthScore(Math.max(0, newScore));
        return newAnswers;
    });

    if (status === 'issue' && currentItem.severity === 'CRITICAL') {
        setShowCriticalWarning(true);
        setTimeout(() => {
            setShowCriticalWarning(false);
            goNext();
        }, 2000);
    } else {
        goNext();
    }
  };

  const goNext = () => {
    if (currentStep < (activeProfile?.InspectionChecklist?.length || 0) - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setShowCriticalWarning(false);
    }
  };

  const calculateTotals = () => {
    if (!activeProfile?.InspectionChecklist) return { usd: 0, eur: 0 };
    return activeProfile.InspectionChecklist.reduce((acc, item) => {
      if (answers[item.id] === 'issue') {
        return { usd: acc.usd + item.costUSD, eur: acc.eur + item.costEUR };
      }
      return acc;
    }, { usd: 0, eur: 0 });
  };
  
  const totals = calculateTotals();
  const allIssues = activeProfile?.InspectionChecklist?.filter(item => answers[item.id] === 'issue') || [];
  const criticalItems = allIssues.filter(item => item.severity === 'CRITICAL' || item.severity === 'HIGH');
  const minorItems = allIssues.filter(item => item.severity === 'MEDIUM' || item.severity === 'LOW');
  const currentQuestion = activeProfile?.InspectionChecklist?.[currentStep];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 animate-in fade-in duration-500">
      
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Button variant="ghost" onClick={() => navigate("/")} className="text-gray-500 hover:text-black hover:bg-gray-100 -ml-4">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back
            </Button>
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              <h1 className="font-bold text-lg tracking-tight text-gray-900">Pre-Purchase <span className="text-blue-600">Inspector</span></h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        
        {!isInspecting ? (
          /* 1. KERESŐ OLDAL */
          <div className="max-w-[1600px] mx-auto mt-8">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Check before you buy.</h2>
              <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">Select the exact engine code to load the specific failure list.</p>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 relative">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-end">
                {/* 1. BRAND */}
                <div className="space-y-3 w-full">
                  <label className="text-sm font-bold uppercase tracking-wide ml-1">1. Brand</label>
                  <select className="w-full h-16 px-5 bg-gray-50 border-2 border-transparent hover:border-gray-200 focus:border-blue-500 focus:bg-white rounded-xl text-lg font-medium transition-all" value={brand} onChange={(e) => setBrand(e.target.value)}>
                    <option value="" disabled>Select Make</option>
                    {Object.keys(carDatabase.models).map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                {/* 2. MODEL */}
                <div className="space-y-3 w-full">
                  <label className="text-sm font-bold uppercase tracking-wide ml-1">2. Model</label>
                  <select className="w-full h-16 px-5 bg-gray-50 border-2 border-transparent hover:border-gray-200 focus:border-blue-500 rounded-xl text-lg font-medium" value={model} onChange={(e) => setModel(e.target.value)} disabled={!brand}>
                    <option value="" disabled>Select Model</option>
                    {models.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                {/* 3. GENERATION */}
                <div className="space-y-3 w-full">
                  <label className="text-sm font-bold uppercase tracking-wide ml-1">3. Generation</label>
                  <select className="w-full h-16 px-5 bg-gray-50 border-2 border-transparent hover:border-gray-200 focus:border-blue-500 rounded-xl text-lg font-medium" value={generation} onChange={(e) => setGeneration(e.target.value)} disabled={!model}>
                    <option value="" disabled>Year / Gen</option>
                    {generations.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                {/* 4. ENGINE TYPE */}
                <div className="space-y-3 w-full">
                  <label className="text-sm font-bold uppercase tracking-wide ml-1">4. Engine Type</label>
                  <select className="w-full h-16 px-5 bg-gray-50 border-2 border-transparent hover:border-gray-200 focus:border-blue-500 rounded-xl text-lg font-medium" value={engineType} onChange={(e) => setEngineType(e.target.value)} disabled={!generation}>
                    <option value="" disabled>Select Engine</option>
                    {petrolEngines.length > 0 && <optgroup label="⛽ Petrol">{petrolEngines.map((opt) => <option key={getEngineName(opt)} value={getEngineName(opt)}>{getEngineName(opt)}</option>)}</optgroup>}
                    {dieselEngines.length > 0 && <optgroup label="🛢️ Diesel">{dieselEngines.map((opt) => <option key={getEngineName(opt)} value={getEngineName(opt)}>{getEngineName(opt)}</option>)}</optgroup>}
                  </select>
                </div>
                {/* 5. ENGINE CODE */}
                <div className="space-y-3 w-full">
                  <label className="text-sm font-bold uppercase tracking-wide ml-1">5. Engine Code</label>
                  <select className="w-full h-16 px-5 bg-gray-50 border-2 border-transparent hover:border-gray-200 focus:border-blue-500 rounded-xl text-lg font-medium" value={engineCode} onChange={(e) => setEngineCode(e.target.value)} disabled={!engineType || availableCodes.length === 0}>
                    <option value="" disabled>Select Code</option>
                    {availableCodes.map((code) => <option key={code} value={code}>{code}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
                <Button size="lg" className={cn("rounded-full text-xl h-20 px-16 transition-all font-bold tracking-wide", brand && model && generation && engineType && engineCode ? "bg-blue-600 hover:bg-blue-500 text-white shadow-2xl shadow-blue-300/50 hover:scale-105" : "bg-gray-100 text-gray-300 cursor-not-allowed")} disabled={!engineCode} onClick={handleStartInspection}>
                  START INSPECTION <ChevronRight className="w-7 h-7 ml-3" />
                </Button>
              </div>
            </div>

            {/* 1. HIVATKOZÁS: A KATALÓGUS ALATT */}
            <div className="mt-8 max-w-4xl mx-auto">
              <CarHistoryCard compact={true} />
            </div>

          </div>
        ) : (
          
          /* 2. EREDMÉNY OLDAL */
          <div className="max-w-[1800px] mx-auto min-h-[85vh] flex flex-col">
            
            {/* TOP BAR: Jármű Infó + Health Score */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 px-4 gap-4">
                <div className="flex flex-wrap items-baseline gap-4 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                        {brand} {model}
                    </h1>
                    <span className="text-xl md:text-2xl text-gray-400 font-bold">{generation}</span>
                    
                    <span className="text-lg md:text-xl text-blue-700 font-bold bg-blue-50 px-3 py-1 rounded-lg">
                        {engineType}
                    </span>

                    <span className="bg-black text-white px-4 py-1.5 rounded-lg font-mono font-bold text-lg md:text-xl">
                        {engineCode}
                    </span>
                </div>
                
                <div className="flex items-center gap-4">
                    {!isFinished && (
                        <div className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl border-2 transition-all duration-500 ${healthScore > 75 ? 'border-green-100 bg-green-50' : healthScore > 40 ? 'border-orange-100 bg-orange-50' : 'border-red-100 bg-red-50'}`}>
                            <Gauge className={`w-5 h-5 ${healthScore > 75 ? 'text-green-600' : healthScore > 40 ? 'text-orange-600' : 'text-red-600'}`} />
                            <div className="flex flex-col leading-none">
                                <span className={`text-[10px] uppercase font-bold tracking-widest ${healthScore > 75 ? 'text-green-600' : healthScore > 40 ? 'text-orange-600' : 'text-red-600'}`}>Health</span>
                                <span className={`text-xl font-black ${healthScore > 75 ? 'text-green-800' : healthScore > 40 ? 'text-orange-800' : 'text-red-800'}`}>{healthScore}%</span>
                            </div>
                        </div>
                    )}
                    
                    <Button variant="ghost" onClick={handleReset} className="text-gray-400 hover:text-black hover:bg-gray-100 rounded-xl h-12 px-4">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Change Car
                    </Button>
                </div>
            </div>

            {/* FŐ TARTALOM (Két hasábos, de a kvíz alatt van a CarVertical) */}
            <div className="flex-1 w-full max-w-6xl mx-auto relative px-4 flex flex-col gap-8">
                
                {showCriticalWarning && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center">
                        <div className="bg-red-600 text-white p-8 rounded-[2rem] shadow-2xl animate-in zoom-in duration-300 text-center max-w-lg border-4 border-white">
                            <AlertOctagon className="w-16 h-16 mx-auto mb-4 animate-bounce" />
                            <h3 className="text-3xl font-black mb-2 uppercase">Major Red Flag!</h3>
                            <p className="text-lg opacity-90">Significant failure point detected.</p>
                        </div>
                    </div>
                )}

                <div className="flex-1">
                  {!activeProfile?.InspectionChecklist ? (
                      <div className="bg-white rounded-[3rem] border border-gray-100 p-10 shadow-2xl h-full flex flex-col justify-center items-center text-center">
                          <AlertTriangle className="w-20 h-20 text-yellow-500 mb-6"/>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">Checklist Not Found</h3>
                          <p className="text-gray-500 text-xl">We don't have specific data for {engineCode}.</p>
                      </div>
                  ) : isFinished ? (
                      
                      /* A: OKOS EREDMÉNY KÁRTYA */
                      <VerdictCard 
                          totalUSD={totals.usd} 
                          totalEUR={totals.eur} 
                          criticalItems={criticalItems}
                          minorItems={minorItems}
                          onReset={handleReset} 
                      />
                  
                  ) : (
                      
                      /* B: KÉRDÉS KÁRTYA */
                      <div className="bg-white rounded-[3rem] border border-gray-100 p-12 md:p-16 shadow-2xl h-full min-h-[500px] flex flex-col justify-between animate-in slide-in-from-bottom-4 duration-500 relative">
                          
                          {currentStep > 0 && (
                              <button onClick={handlePrevious} className="absolute top-8 left-10 p-3 text-gray-300 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-50" title="Previous">
                                  <Undo2 className="w-6 h-6" />
                              </button>
                          )}

                          {/* PROGRESS BAR */}
                          <div className="absolute top-0 left-0 w-full h-2 bg-gray-50">
                              <div className="h-full bg-black transition-all duration-500" style={{ width: `${((currentStep + 1) / activeProfile.InspectionChecklist.length) * 100}%` }} />
                          </div>

                          <div className="text-center mt-4">
                              <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-6">
                                  {currentQuestion?.category} • Question {currentStep + 1} / {activeProfile.InspectionChecklist.length}
                              </span>

                              <h3 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8 max-w-4xl mx-auto">
                                  {currentQuestion?.question}
                              </h3>
                              
                              <div className="inline-block bg-blue-50/50 px-8 py-6 rounded-3xl border border-blue-50 max-w-3xl">
                                  <p className="text-blue-900/70 font-medium text-xl md:text-2xl leading-relaxed">
                                      💡 {currentQuestion?.howToCheck}
                                  </p>
                              </div>
                          </div>

                          {/* GOMBOK */}
                          <div className="grid grid-cols-12 gap-6 mt-8 h-32 md:h-40 max-w-5xl mx-auto w-full">
                            <button onClick={() => handleAnswer('ok')} className="col-span-5 rounded-3xl border-2 border-gray-100 hover:border-green-500 hover:bg-green-50 flex flex-col items-center justify-center group transition-all">
                              <span className="text-4xl md:text-5xl font-black text-gray-300 group-hover:text-green-600 mb-1">NO</span>
                              <span className="text-xs md:text-sm uppercase font-bold text-gray-400 group-hover:text-green-600 tracking-widest">Clear</span>
                            </button>

                            <button onClick={() => handleAnswer('skipped')} className="col-span-2 rounded-3xl border-2 border-gray-100 hover:bg-gray-50 flex flex-col items-center justify-center group transition-all" title="Skip">
                              <SkipForward className="w-8 h-8 md:w-10 md:h-10 text-gray-300 group-hover:text-gray-500" />
                            </button>

                            <button onClick={() => handleAnswer('issue')} className="col-span-5 rounded-3xl border-2 border-gray-100 hover:border-red-500 hover:bg-red-50 flex flex-col items-center justify-center group transition-all">
                              <span className="text-4xl md:text-5xl font-black text-gray-300 group-hover:text-red-600 mb-1">YES</span>
                              <span className="text-xs md:text-sm uppercase font-bold text-gray-400 group-hover:text-red-600 tracking-widest">Issue Found</span>
                            </button>
                          </div>
                      </div>
                  )}
                </div>

                {/* 2. HIVATKOZÁS: A KVÍZ ALATT */}
                <div className="w-full">
                  <CarHistoryCard />
                </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}