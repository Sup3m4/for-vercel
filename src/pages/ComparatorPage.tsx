// src/pages/ComparatorPage.tsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EngineComparator } from "@/components/EngineComparator";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ComparatorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="mb-8 gap-2 hover:bg-slate-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to the Home Page
          </Button>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter italic">
              ENGINE <span className="text-blue-600">DNA</span> COMPARATOR
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              Compare the physical architecture, internal hardware, and core reliability of two specific engine generations.
            </p>
          </div>

          <EngineComparator />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComparatorPage;