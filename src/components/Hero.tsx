import { Database } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      {/* A négyzetrács (tech-grid) eltávolítva a tiszta, sötét háttér érdekében[cite: 33] */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-transparent pointer-events-none" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-6 animate-fade-in">
            <Database className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">
              Comprehensive Engine Intelligence
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Decode Your Vehicle's{" "}
            <span className="gradient-text">True DNA</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Access detailed technical profiles, 3D models, known vulnerabilities, maintenance schedules,
            and tuning potential for thousands of automotive engines. Make informed decisions
            backed by real engineering data.
          </p>
        </div>
      </div>
    </section>
  );
}