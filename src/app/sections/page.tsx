import Navbar from "@/components/Navbar";

const sections = [
    {
        title: "IA & Data",
        desc: "Exploration du Machine Learning et de l'analyse de données pour résoudre des problèmes locaux.",
        projects: ["Prédiction des récoltes", "Chatbot en langues nationales"]
    },
    {
        title: "Cybersécurité",
        desc: "Sensibilisation et protection des infrastructures numériques.",
        projects: ["Audit de sécurité campus", "Capture The Flag (CTF)"]
    },
    {
        title: "Développement Web & Mobile",
        desc: "Création d'applications modernes et scalables pour le marché africain.",
        projects: ["App de gestion étudiante", "Plateforme E-santé"]
    },
    {
        title: "Robotique",
        desc: "Conception de systèmes embarqués et automatisation.",
        projects: ["Arrosage automatique", "Drone de surveillance"]
    },
];

export default function Sections() {
    return (
        <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-x-hidden pt-32 pb-20">
            <Navbar />

            <div className="w-full max-w-6xl px-6">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Nos Sections</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Découvrez nos spécialisations et les projets concrets portés par nos membres.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {sections.map((section, idx) => (
                        <div key={idx} className="glass p-10 rounded-3xl border-white/5 hover:border-primary/20 transition-all group">
                            <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{section.title}</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">{section.desc}</p>

                            <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Exemples de Projets</h4>
                                <div className="flex flex-wrap gap-2">
                                    {section.projects.map((proj, pIdx) => (
                                        <span key={pIdx} className="bg-primary/10 text-primary px-4 py-1.5 rounded-lg text-sm font-medium">
                                            {proj}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
