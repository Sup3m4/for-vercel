import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/clerk-react";
import { Card } from "@/components/ui/card";
import { Star, ArrowRight, Trash2 } from "lucide-react";

const SavedPage = () => {
  const { user } = useUser();

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-slate-50 py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-black tracking-tighter text-slate-900">SAVED COMPARISONS</h1>
                <p className="text-slate-500">Welcome back, {user?.firstName}!</p>
              </div>
              <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold">
                <Star className="w-4 h-4 fill-current" />
                3 Saved Battles
              </div>
            </div>

            {/* PÉLDA EGY MENTETT KÁRTYÁRA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 hover:shadow-xl transition-all group cursor-pointer border-0 shadow-sm bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-xl font-black text-slate-800">1Z</div>
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] italic font-black">VS</div>
                    <div className="text-xl font-black text-slate-800">AAE</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-slate-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Saved on January 30, 2026
                </div>
              </Card>
            </div>
          </div>
        </div>
      </SignedIn>

      {/* Ha nincs belépve, irány a login */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default SavedPage;