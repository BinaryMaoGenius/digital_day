import Navbar from "@/components/Navbar";

export default function ClubIT() {
    return (
        <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-x-hidden pt-32 pb-20">
            <Navbar />

            <div className="w-full max-w-4xl px-6">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Le Club IT</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Une communauté d'étudiants passionnés, façonnant le futur numérique du Mali.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="glass p-8 rounded-3xl border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-primary">Notre Vision</h2>
                        <p className="text-slate-400 leading-relaxed">
                            Devenir le pôle d'excellence numérique de référence pour les étudiants du Mali,
                            en détectant et en propulsant les meilleurs talents dans le domaine des technologies de l'information.
                        </p>
                    </div>
                    <div className="glass p-8 rounded-3xl border-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-secondary">Notre Mission</h2>
                        <p className="text-slate-400 leading-relaxed">
                            Préparer les étudiants au monde professionnel en les impliquant dans des projets concrets,
                            des formations intensives et une culture de partage de connaissances.
                        </p>
                    </div>
                </div>

                <div className="glass p-8 md:p-12 rounded-3xl border-white/5 mb-20">
                    <h2 className="text-3xl font-black mb-12 text-center">Nos Valeurs</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="w-12 h-12 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                <span className="text-primary font-bold">I</span>
                            </div>
                            <h4 className="font-bold">Innovation</h4>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-secondary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                <span className="text-secondary font-bold">P</span>
                            </div>
                            <h4 className="font-bold">Partage</h4>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-accent/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                <span className="text-accent font-bold">E</span>
                            </div>
                            <h4 className="font-bold">Excellence</h4>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                <span className="text-blue-500 font-bold">C</span>
                            </div>
                            <h4 className="font-bold">Collaboration</h4>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
