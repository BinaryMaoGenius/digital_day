"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { ExternalLink, Zap, Trophy, Users, QrCode, Monitor, Gamepad2, ChevronRight } from "lucide-react";

// ⚠️ Remplacez cette URL par l'URL de votre service Render une fois déployé
const QUIZ_BASE_URL = process.env.NEXT_PUBLIC_QUIZ_URL || "https://live-quiz-digitalday.onrender.com";

export default function QuizPage() {
    const [gameId, setGameId] = useState("");
    const [showJoinForm, setShowJoinForm] = useState(false);

    const features = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Temps Réel",
            desc: "Répondez instantanément, le classement se met à jour en direct.",
            color: "text-yellow-400",
            bg: "bg-yellow-400/10 border-yellow-400/20",
        },
        {
            icon: <Trophy className="w-6 h-6" />,
            title: "Classement Live",
            desc: "Suivez votre progression face aux autres participants sur l'écran géant.",
            color: "text-orange-400",
            bg: "bg-orange-400/10 border-orange-400/20",
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Multi-Joueurs",
            desc: "Affrontez tous les participants présents sur le même réseau.",
            color: "text-blue-400",
            bg: "bg-blue-400/10 border-blue-400/20",
        },
        {
            icon: <QrCode className="w-6 h-6" />,
            title: "Accès Rapide",
            desc: "Scannez le QR Code affiché en salle pour rejoindre la partie instantanément.",
            color: "text-purple-400",
            bg: "bg-purple-400/10 border-purple-400/20",
        },
    ];

    const roles = [
        {
            icon: <Gamepad2 className="w-8 h-8" />,
            title: "Je suis Joueur",
            desc: "Rejoins la partie avec un QR code ou un lien direct.",
            action: () => setShowJoinForm(true),
            label: "Rejoindre une partie",
            gradient: "from-blue-600 to-purple-600",
            glow: "hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)]",
        },
        {
            icon: <Monitor className="w-8 h-8" />,
            title: "Je suis Admin",
            desc: "Crée et pilote une session quiz pour tous les participants.",
            action: () => window.open(QUIZ_BASE_URL, "_blank"),
            label: "Créer une session",
            gradient: "from-orange-500 to-red-600",
            glow: "hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.6)]",
        },
    ];

    const handleJoin = () => {
        if (gameId.trim()) {
            window.open(`${QUIZ_BASE_URL}/player/${gameId.trim()}`, "_blank");
        }
    };

    return (
        <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-x-hidden">
            <Navbar />

            {/* Hero */}
            <section className="relative w-full flex flex-col items-center justify-center min-h-[55vh] text-center px-6 pt-40 pb-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] bg-purple-500/15 blur-[100px] rounded-full" />
                    <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-blue-500/15 blur-[80px] rounded-full" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 glass rounded-full text-xs font-bold tracking-wider uppercase text-purple-400 border border-purple-400/20 animate-in fade-in slide-in-from-top-4 duration-700">
                    <Zap className="w-3.5 h-3.5" /> Quiz Live — Digital Day 2026
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    LE QUIZ<br />
                    <span className="text-gradient">QUI PULSE</span>
                </h1>

                <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-4 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    Des questions, un timer, et 100 cerveaux en compétition simultanée.
                    Votre propre système de quiz en temps réel — pas de Kahoot, <strong className="text-white">notre propre plateforme.</strong>
                </p>
            </section>

            {/* Features */}
            <section className="w-full max-w-6xl px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className={`glass p-6 rounded-3xl border ${f.bg} flex flex-col gap-4 group hover:scale-105 transition-all duration-300`}
                    >
                        <div className={`w-12 h-12 rounded-2xl ${f.bg} border flex items-center justify-center ${f.color}`}>
                            {f.icon}
                        </div>
                        <h3 className="text-lg font-bold">{f.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </section>

            {/* Role Cards */}
            <section className="w-full max-w-4xl px-6 pb-32">
                <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight">
                    CHOISISSEZ <span className="text-gradient">VOTRE RÔLE</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {roles.map((role, i) => (
                        <div
                            key={i}
                            className={`glass p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center gap-6 group cursor-pointer transition-all duration-300 ${role.glow} hover:border-white/20`}
                            onClick={role.action}
                        >
                            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                {role.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-3">{role.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{role.desc}</p>
                            </div>
                            <div className={`w-full bg-gradient-to-r ${role.gradient} py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 group-hover:opacity-90 transition-opacity`}>
                                {role.label} <ChevronRight className="w-5 h-5" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join by Game ID Form */}
                {showJoinForm && (
                    <div className="mt-12 glass p-10 rounded-3xl border border-blue-400/20 animate-in slide-in-from-bottom-4 duration-300">
                        <h3 className="text-xl font-black mb-2 text-center">Entrer l&apos;ID de la partie</h3>
                        <p className="text-slate-500 text-sm text-center mb-6">Demandez l&apos;ID à votre animateur ou scannez le QR Code en salle.</p>
                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={gameId}
                                onChange={(e) => setGameId(e.target.value.toUpperCase())}
                                placeholder="Ex: A3F7B2C1"
                                maxLength={8}
                                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white font-mono text-lg focus:outline-none focus:border-blue-400/50 placeholder-slate-600 uppercase tracking-widest"
                                onKeyDown={(e) => e.key === "Enter" && handleJoin()}
                            />
                            <button
                                onClick={handleJoin}
                                disabled={gameId.length < 4}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-2xl font-black disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-all hover:scale-105 active:scale-95"
                            >
                                GO !
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* Info Banner */}
            <section className="w-full max-w-5xl px-6 pb-32">
                <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-16 h-16 shrink-0 bg-accent/20 rounded-3xl flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-black mb-2">Accès direct à la plateforme</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Le quiz sera actif uniquement <strong className="text-white">pendant l&apos;événement</strong>. 
                            Connectez-vous au WiFi de l&apos;événement et scannez le QR code affiché sur l&apos;écran en salle pour rejoindre instantanément.
                        </p>
                    </div>
                    <a
                        href={QUIZ_BASE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 bg-accent hover:bg-orange-600 px-8 py-4 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                    >
                        Accéder au Quiz ↗
                    </a>
                </div>
            </section>

            <footer className="w-full py-12 px-6 border-t border-white/5 text-center text-slate-500 text-sm">
                <p>© 2026 Club IT - Digital Day. Tous droits réservés.</p>
            </footer>
        </main>
    );
}
