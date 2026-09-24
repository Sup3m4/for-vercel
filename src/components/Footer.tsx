import { Dna } from "lucide-react";

export function Footer({ 
  onOpenPolicy, 
  onOpenTerms 
}: { 
  onOpenPolicy: () => void; 
  onOpenTerms?: () => void; 
}) {
  return (
    <footer className="py-12 border-t border-border/50 glass-card-subtle">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-secondary">
              <img src="/images/logo.jpg" alt="PistonDNA Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-bold text-foreground">
              Piston<span className="text-primary">DNA</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={onOpenPolicy}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
            >
              Privacy Policy
            </button>
            <button 
              onClick={onOpenTerms}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
            >
              Terms of Service
            </button>
            <a href="#" className="text-sm text-muted-foreground hover:text-muted-foreground transition-colors">Contact</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PistonDNA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}