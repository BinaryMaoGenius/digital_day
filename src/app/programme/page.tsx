import Navbar from "@/components/Navbar";

const schedule = [
    { time: "08:30", event: "Ouverture & Accueil", desc: "Enregistrement des participants et mot de bienvenue." },
    { time: "09:00", event: "Conférences TEDx", desc: "Interventions inspirantes sur l'IA et l'innovation en Afrique." },
    { time: "10:30", event: "Pause & Networking", desc: "Échanges libres et démonstration des projets du club." },
    { time: "11:00", event: "Ateliers Pratiques", desc: "Sessions de codage et hacking éthique en direct." },
    { time: "13:00", event: "Pause Déjeuner", desc: "Visite de la boutique et networking." },
    { time: "14:00", event: "Quiz & Challenges", desc: "Compétition tech avec de nombreux prix à gagner." },
    { time: "16:00", event: "Clôture", desc: "Photo de groupe et mot de fin." },
];

export default function Programme() {
    return (
        <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-x-hidden pt-32 pb-20">
            <Navbar />

            <div className="w-full max-w-4xl px-6">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Programme</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Une journée intense dédiée à la découverte, au partage et à l'excellence technologique.
                    </p>
                </div>

                <div className="space-y-4">
                    {schedule.map((item, index) => (
                        <div key={index} className="glass group p-6 md:p-8 rounded-3xl border-white/5 flex flex-col md:flex-row gap-6 md:items-center hover:border-primary/30 transition-all">
                            <div className="text-2xl font-black text-primary md:w-32">
                                {item.time}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{item.event}</h3>
                                <p className="text-slate-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
