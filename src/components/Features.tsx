import {
  AlertTriangle,
  BarChart3,
  Clock,
  FileText,
  Search,
  Move3d,
  Shield
} from "lucide-react";

export function Features() {
  return (
    // Átlátszó háttér, hogy látszódjon a DNS
    <section id="features" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Intelligence That Matters
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Every CarDNA profile contains actionable data compiled from manufacturer
            documentation, workshop manuals, and real-world experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={AlertTriangle}
            title="Vulnerability Database"
            description="Known failure points, common issues, and preventive measures for each engine variant. Stay ahead of problems."
          />
          <FeatureCard
            icon={Clock}
            title="Service Intervals"
            description="Optimized maintenance schedules that go beyond manufacturer recommendations. Real-world tested intervals."
          />
          <FeatureCard
            icon={BarChart3}
            title="Tuning Potential"
            description="Safe power gains by modification stage. Know what's achievable before you invest in upgrades."
          />
          <FeatureCard
            icon={Shield}
            title="Risk Ratings"
            description="Aggregate reliability scores based on common failure rates and repair complexity."
          />
          <FeatureCard
            icon={FileText}
            title="Technical Specs"
            description="Complete engine specifications including compression ratios, valve counts, and displacement details."
          />
          <FeatureCard
            icon={Move3d}
            title="Interactive 3D Models"
            description="Explore models in full 360° 3D with an immersive night view aesthetic, interactive hotspots, and detailed physical architecture."
            />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    // Sötét, elegáns üvegkártya fehér szöveggel
    <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover-lift text-white shadow-2xl">
      <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
