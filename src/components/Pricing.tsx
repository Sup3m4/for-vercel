import { useUser, useClerk } from "@clerk/clerk-react";
import { Check, Zap, Shield, Sparkles } from 'lucide-react';

export function Pricing() {
  const { isSignedIn, user } = useUser();
  const { openSignIn } = useClerk();

  // Lekérdezzük a metaadatokból, hogy milyen pass-a van már a felhasználónak
  const userMetadata = user?.publicMetadata as { isPremium?: boolean; passType?: string } | undefined;
  const isBundleOwner = userMetadata?.passType === 'bundle';
  const purchasedPass = userMetadata?.passType; // pl. 'audi', 'bmw', 'mercedes' vagy 'bundle'

  // Függvény a fizetés elindításához
  const handleCheckout = async (productType: string) => {
    if (!isSignedIn) {
      openSignIn();
      return;
    }

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clerkUserId: user.id,
          productType: productType,
        }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Hiba a fizetés indításakor:", err);
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-transparent">
      {/* Enyhébb, áttetszőbb gradiens, hogy átengedje a DNS-t */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Secure Clerk Checkout</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unlock Your Vehicle's <span className="gradient-text">Full Potential</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Sign in with your account to get lifetime access to interactive 3D models and engine databases.
          </p>
        </div>

        {/* Ha a bundle megvan, egy üzenetet mutatunk a kártyák helyett vagy felett */}
        {isBundleOwner ? (
  <div className="max-w-2xl mx-auto bg-primary/10 border border-primary/30 rounded-3xl p-8 text-center mb-12 shadow-xl">
    <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
    <h3 className="text-2xl font-bold text-foreground mb-2">You already own the Pro Bundle! 🎉</h3>
    <p className="text-muted-foreground">You have full, unlimited access to all engine profiles and 3D models.</p>
  </div>
) : (
          <>
            {/* 3 Márka Pass Kártyák */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 max-w-6xl mx-auto">
              
              {/* Audi Pass */}
              {purchasedPass !== 'audi' && (
                <div className="w-full md:w-[calc(33.333%-1rem)] bg-slate-900/80 backdrop-blur-xl border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">Audi Pass</h3>
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 overflow-hidden shadow-inner">
                        <img src="/images/audi.png" alt="Audi Logo" className="w-12 h-12 object-contain" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 mt-2">Exclusive lifetime access to Audi 3D models.</p>
                    <div className="my-6 text-3xl font-extrabold text-white">€2.99</div>
                  </div>
                  <button 
                    onClick={() => handleCheckout('audi')}
                    className="w-full py-3.5 rounded-xl bg-secondary text-secondary-foreground font-bold text-sm cursor-pointer"
                  >
                    {isSignedIn ? "Get Audi Pass" : "Sign in & Buy"}
                  </button>
                </div>
              )}

              {/* BMW Pass */}
              {purchasedPass !== 'bmw' && (
                <div className="w-full md:w-[calc(33.333%-1rem)] bg-slate-900/80 backdrop-blur-xl border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">BMW Pass</h3>
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 overflow-hidden shadow-inner">
                        <img src="/images/bmw-1596080_1280.png" alt="BMW Logo" className="w-12 h-12 object-contain" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 mt-2">Exclusive lifetime access to BMW 3D models.</p>
                    <div className="my-6 text-3xl font-extrabold text-white">€2.99</div>
                  </div>
                  <button 
                    onClick={() => handleCheckout('bmw')}
                    className="w-full py-3.5 rounded-xl bg-secondary text-secondary-foreground font-bold text-sm cursor-pointer"
                  >
                    {isSignedIn ? "Get BMW Pass" : "Sign in & Buy"}
                  </button>
                </div>
              )}

              {/* Mercedes Pass */}
              {purchasedPass !== 'mercedes' && (
                <div className="w-full md:w-[calc(33.333%-1rem)] bg-slate-900/80 backdrop-blur-xl border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">Mercedes Pass</h3>
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 overflow-hidden shadow-inner">
                        <img src="/images/mercedes-logo.png" alt="Mercedes Logo" className="w-12 h-12 object-contain" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 mt-2">Exclusive lifetime access to Mercedes 3D models.</p>
                    <div className="my-6 text-3xl font-extrabold text-white">€2.99</div>
                  </div>
                  <button 
                    onClick={() => handleCheckout('mercedes')}
                    className="w-full py-3.5 rounded-xl bg-secondary text-secondary-foreground font-bold text-sm cursor-pointer"
                  >
                    {isSignedIn ? "Get Mercedes Pass" : "Sign in & Buy"}
                  </button>
                </div>
              )}

            </div>

            {/* Pro Bundle Kártya (Csak akkor látszik, ha nincs meg a bundle) */}
            <div className="max-w-6xl mx-auto bg-slate-900/90 backdrop-blur-xl border-2 border-primary/50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">Cardna Pro Garage Bundle</h3>
                <p className="text-sm text-slate-300 mt-2">Unlock all 3 brands together at a discounted price.</p>
              </div>
              <div className="flex flex-col items-center md:items-end w-full md:w-auto">
                <div className="text-3xl font-extrabold text-white mb-4">€5.99</div>
                <button 
                  onClick={() => handleCheckout('bundle')}
                  className="w-full md:w-auto py-4 px-8 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm cursor-pointer transition-colors shadow-lg"
                >
                  {isSignedIn ? "Get Pro Bundle 🚀" : "Sign in & Get Bundle"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}