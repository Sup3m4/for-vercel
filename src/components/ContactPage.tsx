import React from 'react';
import { ArrowLeft, Mail, MapPin, Building, ShieldCheck, Server, FileText } from 'lucide-react';

export default function ContactPage({ onBack }: { onBack: () => void }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-200 py-16 px-4 md:px-8 selection:bg-primary selection:text-white flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
        
        {/* Back button */}
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white border-b border-white/10 pb-4">
              Contact & Legal Notice
            </h1>
            <p className="text-slate-400 mt-2 text-sm md:text-base">
              Official company data, legal notice, and contact information in accordance with Hungarian and EU regulations.
            </p>
          </div>

          {/* Service Provider Details */}
          <div className="bg-slate-950/50 border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <Building className="w-5 h-5 text-primary" /> Service Provider Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Company Name</span>
                <p className="text-white font-medium">Coolkids Bt.</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Representative / Owner</span>
                <p className="text-white font-medium">Szilvia Medovarszki</p>
              </div>

              <div className="space-y-1 md:col-span-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Registered Office</span>
                <p className="text-white font-medium flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Hungary, 5600, Békéscsaba, Jókai street 20 4/14
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Registration Number</span>
                <p className="text-white font-medium">Cg.04-06-009292</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Tax Number</span>
                <p className="text-white font-medium font-mono">25554946-1-04</p>
              </div>

              <div className="space-y-1 md:col-span-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Official E-mail</span>
                <p className="text-white font-medium flex items-center gap-2 mt-1">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" /> 
                  <a href="mailto:info@coolkids.hu" className="text-primary underline hover:opacity-80">info@coolkids.hu</a>
                </p>
              </div>
            </div>
          </div>

          {/* Hosting Provider */}
          <div className="bg-slate-950/50 border border-white/5 rounded-2xl p-6 md:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <Server className="w-5 h-5 text-primary" /> Hosting Provider
            </h2>
            <div className="text-sm md:text-base space-y-1">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Provider Name</span>
              <p className="text-white font-medium">Cloudflare, Inc.</p>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mt-3">Registered Office</span>
              <p className="text-white font-medium">101 Townsend St, San Francisco, CA 94107, USA</p>
            </div>
          </div>

          {/* Customer Support */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" /> Customer Support & Inquiries
            </h2>
            <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed">
              For any technical, billing, or legal questions, feel free to contact us at the e-mail address above (<a href="mailto:info@coolkids.hu" className="text-primary underline font-medium">info@coolkids.hu</a>). We strive to respond to your inquiries as quickly as possible, within a maximum of 48 hours.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}