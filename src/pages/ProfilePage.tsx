import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/clerk-react";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react"; // Hozzáadva
import { Link } from "react-router-dom";
import { Star, History, User, Settings, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { useSearchParams } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useUser();
  const [savedBattles, setSavedBattles] = useState<any[]>([]);

  useEffect(() => {
    if (user) {
      const storageKey = `saved_battles_${user.id}`;
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      setSavedBattles(saved);
    }
  }, [user]);

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
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20">
                    <Star className="w-4 h-4 fill-current" /> Saved Battles
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-slate-50 font-bold text-sm transition-all">
                    <History className="w-4 h-4" /> Recent History
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-slate-50 font-bold text-sm transition-all">
                    <Settings className="w-4 h-4" /> Settings
                  </button>
                </nav>
              </Card>
            </div>

            {/* FŐ TARTALOM (Ide került a Saved tartalom) */}
            <div className="lg:col-span-3">
  <div className="flex items-center justify-between mb-8">
    <h1 className="text-4xl font-black tracking-tighter italic">SAVED COMPARISONS</h1>
    <div className="text-[10px] font-black bg-slate-200 px-3 py-1 rounded-full uppercase">
      {savedBattles.length} Items
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {savedBattles.length > 0 ? (
      savedBattles.map((battle) => (
        <Card key={battle.id} className="p-6 bg-white border-0 shadow-sm rounded-3xl group hover:shadow-xl transition-all relative overflow-hidden">
          <div className="flex items-center gap-4 relative z-10">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-800">{battle.codeA}</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black italic text-slate-400">VS</div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-800">{battle.codeB}</span>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between items-center pt-4 border-t border-slate-50">
            <span className="text-[10px] font-bold text-slate-400">
              SAVED: {new Date(battle.timestamp).toLocaleDateString()}
            </span>

            {/* ITT A LÉNYEG: Link, ami átvisz az összehasonlítóba */}
            <Link 
              to={`/comparator?a=${battle.codeA}&b=${battle.codeB}`}
              className="p-2 bg-slate-900 text-white rounded-lg hover:bg-primary transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Card>
      ))
    ) : (
      <div className="col-span-2 text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 text-slate-400 font-bold">
        No saved battles yet. Start comparing engines!
      </div>
    )}
  </div>
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