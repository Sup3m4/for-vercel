import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuickSearch } from "@/components/QuickSearch";
import { CatalogSearcher } from "@/components/CatalogSearcher";
import { EngineCodeSelector } from "@/components/EngineCodeSelector";
import { EngineComparator } from "@/components/EngineComparator";
import { EngineProfile } from "@/components/EngineProfile";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { getEngineProfile, engineProfiles, EngineProfile as EngineProfileType } from "@/data/carDatabase";
import { ArrowLeft, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { carDatabase } from "@/data/carDatabase";
import type { EngineTypeEntry } from "@/data/carDatabase";

type ViewState = "search" | "engine-code" | "profile";

interface VehicleSelection {
  brand: string;
  model: string;
  generation: string;
  engineType: string;
  hp?: string;
}

const Index = () => {
  const { engineId } = useParams();
  const navigate = useNavigate();
  
  const [viewState, setViewState] = useState<ViewState>("search");
  const [vehicleSelection, setVehicleSelection] = useState<VehicleSelection | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<EngineProfileType | null>(null);

  // --- 1. URL MONITORING & PROFILE LOADING ---
  useEffect(() => {
    if (engineId) {
      // p?.id-ra javítva, így ha a tömbben undefined van, nem száll el a React
      const profile = engineProfiles.find(p => p?.id === engineId);
      if (profile) {
        setSelectedProfile(profile);
        setViewState("profile");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      setViewState("search");
      setSelectedProfile(null);
    }
  }, [engineId]);

  // --- 2. CATALOG SEARCH HANDLER ---
  const handleSearchEngineType = (brand: string, model: string, generation: string, engineType: string) => {
    const dbKey = `${brand}-${model}-${generation}`;
    const engineData = carDatabase.engineTypes[dbKey]?.find(
      (item) => typeof item === 'object' && item.name === engineType
    ) as EngineTypeEntry | undefined;
    
    setVehicleSelection({ 
      brand, 
      model, 
      generation, 
      engineType,
      hp: engineData?.hp 
    });
  
    setViewState("engine-code");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- 3. ENGINE CODE SELECTION HANDLER ---
  const handleSelectEngineCode = (
    engineCode: string, 
    specificHp?: string, 
    specificTorque?: string,
    profileId?: string
  ) => {
    // A p?. biztosítja, hogy ha a p undefined, ne omoljon össze, hanem ugorjon a következőre
    const baseProfile = profileId 
      ? engineProfiles.find(p => p?.id === profileId)
      : engineProfiles.find(p => p?.engineCode === engineCode);
  
    if (baseProfile) {
      navigate(`/engine/${baseProfile.id}`);
    } else {
      alert(`DNA profile for ${engineCode} is not yet available.`);
    }
  };

  // --- 4. QUICK SEARCH HANDLER ---
  const handleQuickSearch = (brand: string, model: string, generation: string, engineType: string, engineCode: string, profileId?: string) => {
    setVehicleSelection({ brand, model, generation, engineType });

    let profile;
    
    // Normalizáljuk a keresett motorkódot (kiszedjük a szóközöket, kötőjeleket, nagybetűsítjük)
    const cleanSearchCode = engineCode.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    
    // 1. TÖKÉLETES EGYEZÉS ID ALAPJÁN
    if (profileId) {
      profile = engineProfiles.find(p => p?.id === profileId || p?.profileId === profileId);
    }
    
    // 2. RUGALMAS KERESÉS MOTORKÓD ALAPJÁN (szóközök és írásjelek nélkül)
    if (!profile) {
      profile = engineProfiles.find(p => {
        if (!p?.engineCode) return false;
        const cleanProfileCode = p.engineCode.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
        return cleanProfileCode === cleanSearchCode;
      });
    }

    // Ha megvan a profil, azonnal megnyitjuk!
    if (profile) {
      navigate(`/engine/${profile.id}`);
      setSelectedProfile(profile);
      setViewState("profile");
    } else {
      // Csak akkor dob át a szelektorra, ha tényleg nincs 3D profil a rendszerben
      console.warn(`3D profil nem található ehhez a motorkódhoz: ${engineCode}`);
      setViewState("engine-code");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToSearch = () => {
    setVehicleSelection(null);
    setSelectedProfile(null);
    navigate("/");
  };

  const handleBackToEngineCode = () => {
    setSelectedProfile(null);
    if (vehicleSelection) {
        setViewState("engine-code");
        window.history.pushState(null, "", "/"); 
    } else {
        navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {viewState === "profile" && selectedProfile ? (
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={handleBackToEngineCode}
              className="mb-6 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Engine Code Selection
            </Button>
            <EngineProfile profile={selectedProfile} />
          </div>
        </main>
      ) : viewState === "engine-code" && vehicleSelection ? (
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <EngineCodeSelector
              brand={vehicleSelection.brand}
              model={vehicleSelection.model}
              generation={vehicleSelection.generation}
              engineType={vehicleSelection.engineType}
              onSelect={handleSelectEngineCode}
              onBack={handleBackToSearch}
            />
          </div>
        </main>
      ) : (
        <>
          {/* 1. HERO SECTION */}
          <Hero />

          {/* 2. SEARCH TOOLS (Quick & Catalog) */}
          <section className="py-8 md:py-12">
  <div className="container mx-auto px-4">
    <QuickSearch 
      onEngineCodeFound={handleQuickSearch} 
      onSelectVehicleConfig={(brand, model, generation, engineType) => {
        // Beállítjuk a jármű adatait a state-be
        setVehicleSelection({ brand, model, generation, engineType });
        // Átjövünk a kézi motorkód-választó nézetre
        setViewState("engine-code");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    />
    <CatalogSearcher onSearch={handleSearchEngineType} />
  </div>
</section>

          {/* --- ENGINE COMPARATOR SECTION --- */}
<section className="py-20 border-y border-slate-100 bg-white">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto space-y-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-black">
        Engine DNA Comparator
      </h2>
      <p className="text-lg text-muted-foreground">
        Deep-dive into technical architectures. Select two engines to compare their physical "hardware" and reliability.
      </p>
      <Button 
        onClick={() => navigate("/comparator")} 
        size="lg"
        className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-7 rounded-full font-bold text-xl shadow-xl transition-all hover:scale-105"
      >
        Launch Comparator Tool
        <ArrowRight className="w-6 h-6 ml-2" />
      </Button>
    </div>
  </div>
</section>

          {/* 3. PRE-PURCHASE INSPECTOR CTA (Now below search!) */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto space-y-6">
                
                {/* Fekete cím */}
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
                  Buying a used car? Don't gamble.
                </h2>
                
                {/* Szürke alcím */}
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Use our interactive checklist to find hidden faults and estimate repair costs before you pay.
                </p>
                
                {/* A gomb stílusa igazítva az oldalhoz */}
                <Button 
                  onClick={() => navigate("/inspector")} 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-6 px-8 rounded-full shadow-lg transition-all hover:scale-105 group text-lg mt-6"
                >
                  <ShieldCheck className="w-5 h-5 mr-2" />
                  Start Pre-Purchase Inspection
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

              </div>
            </div>
          </section>

          {/* 4. FEATURES & PRICING */}
          <Features />
          <Pricing />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Index;