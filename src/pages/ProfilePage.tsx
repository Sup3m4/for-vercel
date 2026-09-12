import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/clerk-react";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, History, Settings, ArrowRight, Cpu, Trash2, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { engineProfiles, EngineProfile } from "@/data/carDatabase";

// A képeiden látható fájlnevek a public/images mappából a 3 fő márkához:
const brandImages: Record<string, string> = {
  "BMW": "/images/bmw-1596080_1280.png",
  "Audi": "/images/audi.png",
  "Mercedes": "/images/mercedes-logo.png",
};

const ProfilePage = () => {
  const { user } = useUser();
  const [savedEngines, setSavedEngines] = useState<EngineProfile[]>([]);
  // Ez tárolja, hogy éppen melyik márka mappájában vagyunk (ha null, akkor a főoldalt/mappákat látjuk)
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  useEffect(() => {
    const rawData = localStorage.getItem('car_dna_saved_engines');
    if (rawData) {
      try {
        const parsed = JSON.parse(rawData);
        if (Array.isArray(parsed)) {
          const profiles = parsed
            .map((id: string) => engineProfiles.find(p => p?.id === id))
            .filter((p): p is EngineProfile => p !== undefined);
          setSavedEngines(profiles);
        }
      } catch (e) {
        console.error("Hiba a mentett adatok olvasásakor:", e);
      }
    }
  }, []);

  const handleRemoveSaved = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const rawData = localStorage.getItem('car_dna_saved_engines');
    if (rawData) {
      try {
        const parsed = JSON.parse(rawData);
        if (Array.isArray(parsed)) {
          const updatedIds = parsed.filter((item: string) => item !== id);
          localStorage.setItem('car_dna_saved_engines', JSON.stringify(updatedIds));
          setSavedEngines(savedEngines.filter(p => p.id !== id));
        }
      } catch (e) {
        console.error("Hiba a törlés során:", e);
      }
    }
  };

  // Motorok csoportosítása márka szerint
  const groupedByBrand: Record<string, EngineProfile[]> = {};
  savedEngines.forEach((engine) => {
    const brand = engine.brand || "Other";
    if (!groupedByBrand[brand]) {
      groupedByBrand[brand] = [];
    }
    groupedByBrand[brand].push(engine);
  });

  // Segédfüggvény a motorok sorba rendezésére (1-es széria, 2-es széria, 3-as széria stb. szerint)
  const sortEngines = (engines: EngineProfile[]) => {
    return [...engines].sort((a, b) => {
      // Megpróbáljuk kinyerni a modell nevéből vagy számából a szériát / sorrendet
      const nameA = a.model || "";
      const nameB = b.model || "";
      return nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: 'base' });
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <SignedIn>
        <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            
            {/* OLDALSÁV */}
            <div className="lg:col-span-1">
              <Card className="p-8 border-0 shadow-sm bg-white rounded-3xl sticky top-32">
                <div className="text-center mb-6">
                  <img src={user?.imageUrl} className="w-20 h-20 rounded-2xl mx-auto mb-4 border-4 border-slate-50 shadow-sm" alt="profile" />
                  <h2 className="text-lg font-black tracking-tight">{user?.firstName}</h2>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Premium Member</p>
                </div>
                
                <nav className="space-y-1">
                  <button 
                    onClick={() => setSelectedBrand(null)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 cursor-pointer"
                  >
                    <Star className="w-4 h-4 fill-current" /> Saved Engines
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-slate-50 font-bold text-sm transition-all cursor-pointer">
                    <History className="w-4 h-4" /> Recent History
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-slate-50 font-bold text-sm transition-all cursor-pointer">
                    <Settings className="w-4 h-4" /> Settings
                  </button>
                </nav>
              </Card>
            </div>

            {/* FŐ TARTALOM */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* HA NINCS KIVÁLASZTVA MÁRKA: Mutassuk a 3 fő márka mappáját logókkal */}
              {selectedBrand === null ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h1 className="text-4xl font-black tracking-tighter italic">SAVED ENGINE FOLDERS</h1>
                    <div className="text-[10px] font-black bg-slate-200 px-3 py-1 rounded-full uppercase">
                      {savedEngines.length} Total Saved
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["BMW", "Audi", "Mercedes"].map((brand) => {
                      const brandCount = groupedByBrand[brand]?.length || 0;
                      return (
                        <div
                          key={brand}
                          onClick={() => setSelectedBrand(brand)}
                          className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/30 transition-all cursor-pointer group flex flex-col items-center text-center"
                        >
                          <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 p-2 mb-4 group-hover:scale-105 transition-transform">
                            {brandImages[brand] ? (
                              <img src={brandImages[brand]} alt={brand} className="w-full h-full object-contain" />
                            ) : (
                              <Cpu className="w-8 h-8 text-primary" />
                            )}
                          </div>
                          <h2 className="text-xl font-black text-slate-900 mb-1">{brand}</h2>
                          <p className="text-xs text-slate-400 font-semibold mb-4">{brandCount} saved profiles</p>
                          <span className="mt-auto px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                            Open Folder
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                /* HA KI VAN VÁLASZTVA EGY MÁRKA: Mutassuk az adott márka motorjait sorrendben */
                <>
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={() => setSelectedBrand(null)}
                      className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back to Folders
                    </button>
                    <div className="text-[10px] font-black bg-slate-200 px-3 py-1 rounded-full uppercase">
                      {groupedByBrand[selectedBrand]?.length || 0} Items in {selectedBrand}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 p-2">
                      {brandImages[selectedBrand] && (
                        <img src={brandImages[selectedBrand]} alt={selectedBrand} className="w-full h-full object-contain" />
                      )}
                    </div>
                    <div>
                      <h1 className="text-2xl font-black text-slate-900">{selectedBrand} Garage</h1>
                      <p className="text-xs text-slate-400 font-semibold">Ordered by Series / Model</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {groupedByBrand[selectedBrand] && groupedByBrand[selectedBrand].length > 0 ? (
                      sortEngines(groupedByBrand[selectedBrand]).map((engine) => (
                        <Link key={engine.id} to={`/engine/${engine.id}`}>
                          <Card className="p-6 bg-white border-0 shadow-sm rounded-3xl group hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between h-full">
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                {/* MOTORKÓD KIEMELVE CÍMKÉNT FENT */}
                                <span className="px-3 py-1 bg-primary/10 text-primary font-mono font-bold text-xs rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-sm border border-primary/20">
                                  <Cpu className="w-3.5 h-3.5" />
                                  {engine.engineCode}
                                </span>

                                <button 
                                  onClick={(e) => handleRemoveSaved(engine.id, e)}
                                  className="text-slate-300 hover:text-red-500 transition-colors p-1 cursor-pointer"
                                  title="Remove from saved"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              
                              {/* MODELL NEVE */}
                              <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-primary transition-colors">
                                {engine.model}
                              </h3>
                              
                              {/* GENERÁCIÓ ÉS LÖKETTÉRFOGAT ALUL */}
                              <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-4">
                                <span>{engine.generation}</span>
                                <span>•</span>
                                <span>{engine.displacement}</span>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                              <span className="text-xs font-bold text-slate-400">
                                Power: <span className="text-slate-700 font-mono">{engine.power}</span>
                              </span>

                              <div className="p-2 bg-slate-100 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </div>
                          </Card>
                        </Link>
                      ))
                    ) : (
                      <div className="col-span-2 text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 text-slate-400 font-bold">
                        No saved engines in this folder yet.
                      </div>
                    )}
                  </div>
                </>
              )}

            </div>

          </div>
        </main>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};

export default ProfilePage;