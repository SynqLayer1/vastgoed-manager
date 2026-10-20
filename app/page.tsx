"use client";

import { useState } from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://100.88.156.58:8095");

export default function ElitePropLeaseApp() {
  const [view, setView] = useState<"landing" | "auth" | "dashboard" | "legal">("landing");
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [legalDoc, setLegalDoc] = useState<"privacy" | "tos">("privacy");
  const [authNotice, setAuthNotice] = useState("");

  const [units, setUnits] = useState(142);
  const [calculatedBenefit, setCalculatedBenefit] = useState(7200);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    // Direct succesvolle sessie in zandbak-modus of via PocketBase
    setView("dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white flex flex-col justify-between">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setView("landing")}>
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-purple-600/30 text-lg">
            P
          </div>
          <div>
            <h1 className="font-bold text-base tracking-tight text-white">PropLease AI</h1>
            <p className="text-xs text-slate-400">Enterprise Vastgoed Beheer & Indexering</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => setView("landing")} className="text-sm text-slate-300 hover:text-white transition font-medium hidden sm:inline-block">Home</button>
          <button onClick={() => { setIsLogin(true); setView("auth"); }} className="text-sm px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition font-semibold">Inloggen</button>
          <button onClick={() => { setIsLogin(false); setView("auth"); }} className="text-sm px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl transition font-bold shadow-lg shadow-purple-600/20">Gratis Starten</button>
        </div>
      </header>

      {/* Main Dynamic View */}
      <div className="flex-1">
        {view === "landing" && (
          <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-6 pt-20 text-center space-y-6">
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 text-xs font-mono inline-block">
                🇪🇺 Voldoet aan alle NL/EU huurwetgeving 2026
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight max-w-4xl mx-auto bg-gradient-to-r from-white via-slate-200 to-purple-400 bg-clip-text text-transparent leading-tight">
                Nooit meer geld mislopen op huurindexering en servicecontracten.
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                PropLease AI scant vastgoedcontracten, automatiseert wettelijke huurverhogingen en voorkomt rendementsverlies voor professionele beheerders.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <button onClick={() => { setIsLogin(false); setView("auth"); }} className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl shadow-xl shadow-purple-600/30 transition text-base">
                  Start Direct Gratis Proefperiode →
                </button>
              </div>
            </section>

            {/* Problem & Solution Grid */}
            <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Het Probleem</span>
                <h3 className="text-2xl font-black text-white">Verouderde spreadsheets kosten u duizenden euro's</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Vastgoedbeheerders verliezen jaarlijks gemiddeld € 7.200 per portefeuille door gemiste indexeringsdata, te late contractverlengingen en complexe wetgeving rondom de vrije en sociale huursector.
                </p>
              </div>
              <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Onze Oplossing</span>
                <h3 className="text-2xl font-black text-white">Volledige automatisering door Mistral AI</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Onze AI leest uw contracten uit, berekent automatisch de maximale wettelijke huurverhoging, en waarschuwt u tijdig voor contractwijzigingen. Volledig gekoppeld aan uw beveiligde database.
                </p>
              </div>
            </section>

            {/* Interactive Calculator Preview */}
            <section className="max-w-4xl mx-auto px-6">
              <div className="p-8 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl shadow-2xl space-y-6">
                <h3 className="text-xl font-bold text-center">Bereken uw Rendementsvoordeel</h3>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Aantal beheerde eenheden: <span className="text-purple-400 font-bold">{units}</span></label>
                  <input type="range" min="10" max="500" value={units} onChange={(e) => { setUnits(Number(e.target.value)); setCalculatedBenefit(Number(e.target.value) * 51); }} className="w-full accent-purple-500 cursor-pointer" />
                </div>
                <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 text-center space-y-1">
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Geschat Jaarlijks Extra Rendement</p>
                  <p className="text-5xl font-black text-emerald-400">€ {calculatedBenefit.toLocaleString()}</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {view === "auth" && (
          <div className="max-w-md mx-auto px-6 py-16">
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-black tracking-tight">{isLoginMode ? "Inloggen bij PropLease" : "Account Aanmaken"}</h2>
                <p className="text-slate-400 text-sm">Beheer uw vastgoed veilig en AVG-compliant.</p>
              </div>

              <form onSubmit={handleAuthSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">E-mailadres</label>
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="beheerder@vastgoed.nl" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500 transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Wachtwoord</label>
                  <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500 transition" />
                </div>
                <button type="submit" className="w-full py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition shadow-lg shadow-purple-600/30 text-sm">
                  {isLoginMode ? "Inloggen in Dashboard" : "Registreer & Start"}
                </button>
              </form>

              <div className="text-center">
                <button onClick={() => setIsLoginMode(!isLoginMode)} className="text-xs text-purple-400 hover:text-purple-300 font-medium transition">
                  {isLoginMode ? "Nog geen account? Maak er een aan" : "Al een account? Log hier in"}
                </button>
              </div>
            </div>
          </div>
        )}

        {view === "dashboard" && (
          <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="space-y-2">
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 mb-6">
                <p className="text-xs text-slate-400">Ingelogd als:</p>
                <p className="text-xs font-mono font-bold text-purple-400 truncate">{email || "beheerder@synqlayer.nl"}</p>
              </div>
              <button className="w-full text-left px-4 py-3 rounded-xl font-semibold text-sm bg-purple-600 text-white shadow-lg shadow-purple-600/30">📊 Portefeuille Overzicht</button>
              <button onClick={() => alert("Mistral AI Document Scanner geladen.")} className="w-full text-left px-4 py-3 rounded-xl font-semibold text-sm text-slate-400 hover:bg-slate-900 hover:text-white">🧠 Contract AI Scanner</button>
            </aside>
            <main className="lg:col-span-3 space-y-6">
              <h2 className="text-2xl font-black">Actieve Vastgoed Portefeuille</h2>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <div>
                    <h4 className="font-bold text-white">Keizersgracht 420-A, Amsterdam</h4>
                    <p className="text-xs text-slate-400">Huurder: BV Handelsonderneming • Indexering per 1 Juli</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold">Geïndexeerd (+3.4%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-white">Coolsingel 88, Rotterdam</h4>
                    <p className="text-xs text-slate-400">Huurder: Retail Groep BV • Indexering per 1 Augustus</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-bold">Actie Vereist</span>
                </div>
              </div>
            </main>
          </div>
        )}

        {view === "legal" && (
          <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
            <h2 className="text-3xl font-black">{legalDoc === "privacy" ? "Privacyverklaring & AVG" : "Algemene Voorwaarden (ToS)"}</h2>
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl space-y-4 text-sm text-slate-300 leading-relaxed">
              <p><strong>1. Gegevensverwerking:</strong> PropLease AI verwerkt uitsluitend zakelijke vastgoeddata en contracten in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG / GDPR).</p>
              <p><strong>2. Aansprakelijkheid:</strong> Hoewel onze Mistral AI-modellen met uiterste precisie huurindexeringen berekenen, blijft de gebruiker eindverantwoordelijk voor de wettelijke naleving van huurcontracten.</p>
              <p><strong>3. Beveiliging:</strong> Alle data wordt versleuteld opgeslagen in onze beveiligde database-omgeving op self-hosted infrastructuur.</p>
            </div>
            <button onClick={() => setView("landing")} className="text-purple-400 hover:underline text-sm font-semibold">← Terug naar home</button>
          </div>
        )}
      </div>

      {/* Footer with Legal Links */}
      <footer className="border-t border-slate-800 bg-slate-900/40 py-8 px-6 text-center text-slate-500 text-xs space-y-3">
        <div className="flex justify-center space-x-6">
          <button onClick={() => { setLegalDoc("privacy"); setView("legal"); }} className="hover:text-slate-300 transition">Privacyverklaring</button>
          <button onClick={() => { setLegalDoc("tos"); setView("legal"); }} className="hover:text-slate-300 transition">Algemene Voorwaarden</button>
          <span className="text-slate-700">|</span>
          <span>© 2026 PropLease AI • SynqLayer Zandbak</span>
        </div>
      </footer>
    </div>
  );
}
