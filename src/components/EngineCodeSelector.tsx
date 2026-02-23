import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Search, Cpu, Info, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { carDatabase } from "@/data/carDatabase";
import { cn } from "@/lib/utils";
import { useGLTF} from "@react-three/drei"; 
import { audiEngineProfiles } from "@/data/carDatabase/brands/audi/engineprofiles";

interface EngineCodeSelectorProps {
  brand: string;
  model: string;
  generation: string;
  engineType: string;
  // Itt a javított logika a profileId-val:
  onSelect: (engineCode: string, hp?: string, torque?: string, profileId?: string) => void;
  onBack: () => void;
}

export function EngineCodeSelector({
  brand,
  model,
  generation,
  engineType,
  onSelect,
  onBack,
}: EngineCodeSelectorProps) {
  const [selectedCode, setSelectedCode] = useState<string>("");
  const [selectedHp, setSelectedHp] = useState<string | undefined>();
  const [selectedTorque, setSelectedTorque] = useState<string | undefined>();
  const [selectedProfileId, setSelectedProfileId] = useState<string | undefined>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const hasSelectedProfile = useRef(false);
  const key = `${brand}-${model}-${generation}-${engineType}`;
  const engineCodes = carDatabase.engineCodes[key] || [];

  useEffect(() => {
    // 2. Releváns 3D modellek keresése az adatbázisban
    const relevantProfiles = audiEngineProfiles.filter(
      p => p.brand === brand && p.model === model && p.model3DPath
    );

    // 3. Előtöltés indítása
    relevantProfiles.forEach(profile => {
      if (profile.model3DPath) {
        useGLTF.preload(profile.model3DPath, '/draco/');
      }
    });

    // --- TAKARÍTÁS FUNKCIÓ (Cleanup) ---
    return () => {
      if (!hasSelectedProfile.current) {
        relevantProfiles.forEach(profile => {
          if (profile.model3DPath) {
            useGLTF.clear(profile.model3DPath);
          }
        });
      }
    };
  }, [brand, model]);

  const handleSearch = async () => {
    if (!selectedCode) return;
    setIsSearching(true);
    hasSelectedProfile.current = true;
    await new Promise((resolve) => setTimeout(resolve, 600));
    
    // Átadjuk a profileId-t is a kiválasztáskor
    onSelect(selectedCode, selectedHp, selectedTorque, selectedProfileId);
    
    setIsSearching(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-slide-up">
      <div className="glass-card rounded-2xl p-6 md:p-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Vehicle Selection
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Engine Code Selection
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Select Your Exact Engine Code
          </h2>
          <p className="text-muted-foreground">
            Your {brand} {model} {generation} with {engineType} may have different
            engine variants
          </p>
        </div>

        {/* Vehicle Summary - EZT RAKTAM VISSZA, AMI ELTŰNT */}
        <div className="bg-secondary/50 rounded-xl p-4 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground block mb-1">Brand</span>
              <p className="font-semibold text-foreground">{brand}</p>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1">Model</span>
              <p className="font-semibold text-foreground">{model}</p>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1">Generation</span>
              <p className="font-semibold text-foreground">{generation}</p>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1">Engine Type</span>
              <p className="font-semibold text-primary">{engineType}</p>
            </div>
          </div>
        </div>

        {/* Engine Code Grid */}
        {engineCodes.length > 0 ? (
          <>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
            {engineCodes.map((item: any, index: number) => {
                      const code = typeof item === "string" ? item : item.engineCode || item.code;
                      const specificHp = typeof item === "string" ? undefined : item.hp;
                      const specificTorque = typeof item === "string" ? undefined : item.torque; 
                      const specificProfileId = typeof item === "string" ? undefined : item.profileId;

                      const handleMouseEnter = () => {
                        if (specificProfileId) {
                          const profile = audiEngineProfiles.find(p => p.id === specificProfileId);
                          if (profile?.model3DPath) useGLTF.preload(profile.model3DPath, '/draco/');
                        }
                      };

                    return (
                      <Button
                      key={index}
                      // JAVÍTÁS 1: Itt most már az INDEX alapján döntjük el a színt, nem a név alapján
                      variant={selectedIndex === index ? "default" : "outline"}
                      
                      className={cn(
                        "min-w-[160px] sm:min-w-[180px] h-auto py-4 px-6 justify-start text-left relative overflow-hidden group transition-all flex items-center", 
                        // JAVÍTÁS 2: Itt is az indexet figyeljük a kerethez
                        selectedIndex === index
                          ? "ring-2 ring-primary ring-offset-2"
                          : "hover:border-primary/50"
                      )}
                      
                      onClick={() => {
                        setSelectedCode(code);
                        setSelectedHp(specificHp);
                        setSelectedTorque(specificTorque);
                        setSelectedProfileId(specificProfileId);
                        // JAVÍTÁS 3: Elmentjük, hogy hanyadik gombra kattintottál
                        setSelectedIndex(index);
                      }}
                    >
                      <Cpu className={cn(
                        "w-5 h-5 mr-3 transition-colors",
                        // JAVÍTÁS 4: Az ikon színét is indexhez kötjük
                        selectedIndex === index ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                      )} />
                      
                      <div className="flex flex-col items-start">
                        <div className="font-bold text-lg leading-none mb-1">
                          {code}
                        </div>
                        {specificHp && (
                          <div className={cn(
                            "text-xs font-medium",
                            // JAVÍTÁS 5: A szöveg színét is indexhez kötjük
                            selectedIndex === index ? "text-primary-foreground/80" : "text-muted-foreground"
                          )}>
                            {specificHp} {specificTorque && `• ${specificTorque}`}
                          </div>
                        )}
                      </div>
                    </Button>
                );
              })}
            </div>

            {/* Info Box */}
            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4 mb-6">
              <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">
                  How to find your engine code?
                </p>
                <p>
                  The engine code is typically found on a sticker in the engine
                  bay, on the engine block itself, or in your vehicle's
                  registration documents. It usually consists of letters and
                  numbers (e.g., N55B30, K14C).
                </p>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={handleSearch}
                disabled={!selectedCode || isSearching}
                className={cn(
                  "min-w-[200px] gap-2",
                  !selectedCode && "opacity-50"
                )}
              >
                {isSearching ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Loading Profile...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    View DNA Profile
                  </>
                )}
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Cpu className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Engine codes not yet available
            </h3>
            <p className="text-muted-foreground mb-4">
              We're working on adding engine code data for this configuration.
            </p>
            <Button variant="outline" onClick={onBack}>
              Try a different selection
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}