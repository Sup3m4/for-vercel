import { Dna, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card-subtle border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center group-hover:shadow-glow transition-shadow">
              <Dna className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Car<span className="text-primary">DNA</span>
            </span>
          </a>

          {/* Desktop Navigation - A szöveges Profile link marad a helyén */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#search">Search</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <SignedIn>
              <NavLink href="/profile">Profile</NavLink>
            </SignedIn>
          </nav>

          {/* Desktop CTA - Visszatettük a kerek ikont a jobb szélre */}
          <div className="hidden md:flex items-center gap-3">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">Sign In</Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button variant="default" size="sm">Get Started</Button>
              </SignInButton>
            </SignedOut>
            
            <SignedIn>
              {/* Ez a "kerék" ikon, amit kértél */}
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu Section */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-2">
            <MobileNavLink href="#search" onClick={() => setIsMenuOpen(false)}>Search</MobileNavLink>
            <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>Features</MobileNavLink>
            <MobileNavLink href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</MobileNavLink>
            
            <SignedIn>
              <MobileNavLink href="/profile" onClick={() => setIsMenuOpen(false)}>Profile</MobileNavLink>
              {/* Mobilon is visszatesszük a kört a menü aljára az egyértelműség miatt */}
              <div className="flex justify-center w-full py-2 border-t border-border/50 mt-2">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>

            <SignedOut>
              <div className="px-4 pt-2">
                <SignInButton mode="modal">
                  <Button variant="outline" size="sm" className="w-full">Sign In</Button>
                </SignInButton>
              </div>
            </SignedOut>
          </nav>
        </div>
      </div>
    </header>
  );
}

// --- Segédkomponensek a stílushoz ---

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
    >
      {children}
    </a>
  );
}