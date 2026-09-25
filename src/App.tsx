import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import PurchaseInspector from "./components/PurchaseInspector";
import ComparatorPage from "./pages/ComparatorPage";
import SavedPage from "./pages/SavedPage";
import ProfilePage from "./pages/ProfilePage";
import Index from "./pages/Index";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import TermsOfServicePage from "./components/TermsOfServicePage";
import ContactPage from "./components/ContactPage";
import { EngineProfile } from "./components/EngineProfile";
<Route path="/profile" element={<ProfilePage />} />

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/inspector" element={<PurchaseInspector/>} />
          <Route path="/engine/:engineId" element={<Index />} />
          <Route path="/comparator" element={<ComparatorPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
        <Route path="/termsofservice" element={<TermsOfServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
