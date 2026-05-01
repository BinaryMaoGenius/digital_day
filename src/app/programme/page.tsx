import Navbar from "@/components/Navbar";
import { Clock, Calendar, MapPin, Sparkles } from "lucide-react";

const schedule = [
    { 
        time: "12h00 – 12h20", 
        event: "Cérémonie d’ouverture", 
        desc: "Lancement officiel du Digital Day 2026. Mot de bienvenue du Club IT et présentation des enjeux.",
        icon: "✨",
        category: "Cérémonie"
    },
    { 
        time: "12h30 – 14h30", 
        event: "Conférence Magistrale", 
        desc: "Numérique et cybersécurité : Les nouveaux défis de l'ère africaine. Interventions d'experts et cas d'études.",
        icon: "🛡️",
        category: "Tech Talk"
    },
    { 
        time: "14h30 – 14h45", 
        event: "Pause rafraîchissement", 
        desc: "Networking libre, collations et démonstrations technologiques dans le hall.",
        icon: "☕",
        category: "Pause"
    },
    { 
        time: "14h45 – 16h15", 
        event: "Jeux Hacking & Quiz", 
        desc: "Compétitions de hacking éthique en direct, Quiz Live interactif et sessions de questions-réponses.",
        icon: "💻",
        category: "Compétition"
    },
    { 
        time: "16h15 – 16h30", 
        event: "Remise des prix & Clôture", 
        desc: "Célébration des gagnants, remise des récompenses et mot de fin officiel.",
        icon: "🏆",
        category: "Finale"
    },
];

export default function Programme() {
    return (
        <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-x-hidden pt-32 pb-20">
            <Navbar />

            {/* Background Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-secondary/10 blur-[100px] rounded-full" />
            </div>

            <div className="w-full max-w-5xl px-6">
                <div className="mb-20 text-center animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 glass rounded-full text-[10px] font-bold tracking-widest uppercase text-primary border border-primary/20">
                        <Calendar className="w-3 h-3" /> Agenda de l'événement
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">LE <span className="text-gradient">PROGRAMME</span></h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Une immersion totale dans le futur numérique. Suivez chaque étape de cette journée d'exception.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-40 top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent hidden md:block" />

                    <div className="space-y-8">
                        {schedule.map((item, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-20 group animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 100}ms` }}>
                                {/* Time Column */}
                                <div className="md:w-32 pt-2 text-right hidden md:block">
                                    <span className="text-lg font-black text-slate-300 group-hover:text-primary transition-colors">
                                        {item.time.split(' – ')[0]}
                                    </span>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter mt-1">{item.category}</div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-40 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-background border-2 border-primary z-10 hidden md:block group-hover:scale-150 group-hover:bg-primary transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                                {/* Card Column */}
                                <div className="flex-1 glass p-8 rounded-[2rem] border border-white/5 group-hover:border-primary/20 group-hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.15)] transition-all relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity text-4xl">
                                        {item.icon}
                                    </div>
                                    
                                    <div className="md:hidden flex items-center gap-3 mb-4">
                                        <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-tight">
                                            {item.time}
                                        </div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.category}</div>
                                    </div>

                                    <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">
                                        {item.event}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed md:max-w-[80%]">
                                        {item.desc}
                                    </p>
                                    
                                    <div className="mt-6 flex items-center gap-4 text-xs text-slate-500 font-bold">
                                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Durée: {item.time.includes(' – ') ? 'Variable' : 'Estimée'}</span>
                                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Salle Principale</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 glass p-10 md:p-16 rounded-[3rem] border border-white/5 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Sparkles className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">NE MANQUEZ PAS <br/> L'OUVERTURE !</h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                        Le planning est optimisé pour vous offrir la meilleure expérience possible. Arrivez tôt pour profiter du networking !
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                        <span>15 Mai 2026</span>
                        <span>Bamako, Mali</span>
                        <span>Club IT</span>
                    </div>
                </div>
            </div>

            <footer className="w-full py-12 px-6 border-t border-white/5 text-center text-slate-500 text-sm mt-20">
                <p>© 2026 Club IT - Digital Day. Tous droits réservés.</p>
            </footer>
        </main>
    );
}
