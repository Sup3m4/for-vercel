import { useUser, useClerk } from "@clerk/clerk-react";
import { Check, Zap, Shield, Sparkles } from 'lucide-react';

export function Pricing() {
  const { isSignedIn, user } = useUser();
  const { openSignIn } = useClerk();

  // Függvény a fizetés elindításához
  const handleCheckout = async (productType: string) => {
    // 1. Ha nincs bejelentkezve, nyissuk meg a Clerk bejelentkezést
    if (!isSignedIn) {
      openSignIn();
      return;
    }

    try {
      // 2. Küldjük el a Clerk ID-t a backendünknek, hogy kösse össze a Stripe-bal
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clerkUserId: user.id,
          productType: productType, // pl. 'bundle', 'audi', 'bmw', 'mercedes'
        }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Átirányítás a Stripe-ra
      }
    } catch (err) {
      console.error("Hiba a fizetés indításakor:", err);
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Secure Clerk Checkout</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unlock Your Vehicle's <span className="gradient-text">Full Potential</span>
          </h2>
          <p className="text-lg md:text-muted-foreground max-w-2xl mx-auto">
            Sign in with your account to get lifetime access to interactive 3D models and engine databases.
          </p>
        </div>

        {/* 3 Márka Pass Kártyák */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
          {/* Audi Pass */}
          <div className="bg-card/50 backdrop-blur-xl border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl font-bold text-foreground">Audi Pass</h3>
              <p className="text-sm text-muted-foreground mt-2">Exclusive lifetime access to Audi 3D models.</p>
              <div className="my-6 text-3xl font-extrabold text-foreground">€2.99</div>
            </div>
            <button 
              onClick={() => handleCheckout('audi')}
              className="w-full py-3.5 rounded-xl bg-secondary text-secondary-foreground font-bold text-sm cursor-pointer"
            >
              {isSignedIn ? "Get Audi Pass" : "Sign in & Buy"}
            </button>
          </div>

          {/* BMW Pass */}
          <div className="bg-card/50 backdrop-blur-xl border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl font-bold text-foreground">BMW Pass</h3>
              <p className="text-sm text-muted-foreground mt-2">Exclusive lifetime access to BMW 3D models.</p>
              <div className="my-6 text-3xl font-extrabold text-foreground">€2.99</div>
            </div>
            <button 
              onClick={() => handleCheckout('bmw')}
              className="w-full py-3.5 rounded-xl bg-secondary text-secondary-foreground font-bold text-sm cursor-pointer"
            >
              {isSignedIn ? "Get BMW Pass" : "Sign in & Buy"}
            </button>
          </div>

          {/* Mercedes Pass */}
          <div className="bg-card/50 backdrop-blur-xl border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl font-bold text-foreground">Mercedes Pass</h3>
              <p className="text-sm text-muted-foreground mt-2">Exclusive lifetime access to Mercedes 3D models.</p>
              <div className="my-6 text-3xl font-extrabold text-foreground">€2.99</div>
            </div>
            <button 
              onClick={() => handleCheckout('mercedes')}
              className="w-full py-3.5 rounded-xl bg-secondary text-secondary-foreground font-bold text-sm cursor-pointer"
            >
              {isSignedIn ? "Get Mercedes Pass" : "Sign in & Buy"}
            </button>
          </div>
        </div>

        {/* Pro Bundle Kártya */}
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-primary/15 via-card/80 to-card border-2 border-primary/50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">Cardna Pro Garage Bundle</h3>
            <p className="text-sm text-muted-foreground mt-2">Unlock all 3 brands together at a discounted price.</p>
          </div>
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <div className="text-3xl font-extrabold text-foreground mb-4">€5.99</div>
            <button 
              onClick={() => handleCheckout('bundle')}
              className="w-full md:w-auto py-4 px-8 rounded-xl bg-primary text-primary-foreground font-bold text-sm cursor-pointer"
            >
              {isSignedIn ? "Get Pro Bundle 🚀" : "Sign in & Get Bundle"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}