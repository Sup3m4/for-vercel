import { Dna } from "lucide-react";

export function Footer({ onOpenPolicy }: { onOpenPolicy: () => void }) {
  return (
    <footer className="py-12 border-t border-border/50 glass-card-subtle">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Dna className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">
              Car<span className="text-primary">DNA</span>
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
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-muted-foreground transition-colors">Contact</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CarDNA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}