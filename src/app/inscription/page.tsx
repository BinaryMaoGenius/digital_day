"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { CheckCircle2, Trophy, Users, Brain, ShieldAlert, Rocket } from "lucide-react";

type RegistrationType = "general" | "competition" | null;
type CompetitionType = "ctf" | "ia" | null;

export default function Inscription() {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [regType, setRegType] = useState<RegistrationType>(null);
    const [compType, setCompType] = useState<CompetitionType>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <main className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-x-hidden px-6">
                <Navbar />
                <div className="glass p-12 rounded-[40px] text-center max-w-xl animate-in zoom-in-95 duration-500">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-4xl font-black mb-4">Inscription Réussie !</h1>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Merci de rejoindre le Digital Day 2026. Un email de confirmation a été envoyé avec vos accès et les prochaines étapes.
                    </p>
                    <button 
                        onClick={() => window.location.href = "/"}
                        className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold transition-all"
                    >
                        Retour à l'accueil
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-x-hidden pt-32 pb-20 px-6">
            <Navbar />

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/10 blur-[150px] -z-10" />

            <div className="w-full max-w-4xl">
                <div className="mb-16 text-center">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
                        Rejoignez <span className="text-gradient">l'Innovation</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        Inscrivez-vous pour assister aux conférences ou relevez le défi en participant à nos compétitions d'élite.
                    </p>
                </div>

                {step === 1 && (
                    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
                        <div 
                            onClick={() => { setRegType("general"); setStep(3); }}
                            className="glass p-10 rounded-[40px] border border-white/5 hover:border-primary/50 transition-all group cursor-pointer hover:translate-y-[-8px]"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Visiteur Passionné</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Accès aux conférences, aux ateliers et aux démonstrations technologiques tout au long de la journée.
                            </p>
                            <div className="text-primary font-bold flex items-center gap-2">
                                Choisir cette option <Rocket className="w-4 h-4" />
                            </div>
                        </div>

                        <div 
                            onClick={() => { setRegType("competition"); setStep(2); }}
                            className="glass p-10 rounded-[40px] border border-white/5 hover:border-secondary/50 transition-all group cursor-pointer hover:translate-y-[-8px]"
                        >
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Trophy className="w-8 h-8 text-secondary" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Compétiteur Élite</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Participez au CTF de Cybersécurité ou au Challenge de Développement IA. Places limitées.
                            </p>
                            <div className="text-secondary font-bold flex items-center gap-2">
                                Voir les compétitions <Rocket className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                        <button onClick={() => setStep(1)} className="mb-8 text-slate-500 hover:text-white flex items-center gap-2 transition-colors">
                            ← Retour au choix principal
                        </button>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div 
                                onClick={() => { setCompType("ctf"); setStep(3); }}
                                className="glass p-10 rounded-[40px] border border-white/5 hover:border-red-500/50 transition-all group cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-red-500/10 rounded-2xl mb-8 flex items-center justify-center">
                                    <ShieldAlert className="w-8 h-8 text-red-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Capture The Flag (CTF)</h3>
                                <p className="text-slate-400">Défis de hacking, websec, crypto et forensique.</p>
                            </div>

                            <div 
                                onClick={() => { setCompType("ia"); setStep(3); }}
                                className="glass p-10 rounded-[40px] border border-white/5 hover:border-blue-500/50 transition-all group cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl mb-8 flex items-center justify-center">
                                    <Brain className="w-8 h-8 text-blue-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Développement IA</h3>
                                <p className="text-slate-400">Créez une solution innovante en utilisant le LLM Djelia.</p>
                            </div>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="glass p-8 md:p-12 rounded-[40px] animate-in fade-in zoom-in-95 duration-500">
                        <button onClick={() => setStep(regType === "competition" ? 2 : 1)} className="mb-8 text-slate-500 hover:text-white flex items-center gap-2 transition-colors">
                            ← Retour
                        </button>
                        
                        <div className="mb-10">
                            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                {regType === "general" ? "Inscription Visiteur" : `Compétition: ${compType?.toUpperCase()}`}
                            </div>
                            <h2 className="text-3xl font-bold">Vos Informations</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-400">Nom Complet</label>
                                <input required type="text" placeholder="John Doe" className="bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-primary outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-400">Email Académique/Pro</label>
                                <input required type="email" placeholder="john@example.com" className="bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-primary outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-400">Université / Institution</label>
                                <input required type="text" placeholder="Ex: ENI-ABT" className="bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-primary outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-400">Niveau d'études</label>
                                <select className="bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-primary outline-none transition-all appearance-none">
                                    <option className="bg-background">Licence 1/2</option>
                                    <option className="bg-background">Licence 3</option>
                                    <option className="bg-background">Master</option>
                                    <option className="bg-background">Professionnel</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 flex flex-col gap-2">
                                <label className="text-sm font-medium text-slate-400">Pourquoi voulez-vous participer ?</label>
                                <textarea placeholder="Décrivez votre motivation..." className="bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-primary outline-none transition-all min-h-[120px]"></textarea>
                            </div>
                            
                            <button type="submit" className="md:col-span-2 mt-4 bg-primary hover:bg-blue-600 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]">
                                Finaliser mon Inscription
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </main>
    );
}
