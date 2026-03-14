import Navbar from "@/components/Navbar";

export default function Quiz() {
    return (
        <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-x-hidden pt-32 pb-20">
            <Navbar />

            <div className="w-full max-w-4xl px-6 flex-1 flex flex-col items-center justify-center text-center">
                <div className="mb-12">
                    <div className="w-20 h-20 bg-accent/20 rounded-3xl mx-auto mb-8 flex items-center justify-center">
                        <span className="text-4xl text-accent font-black">?</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Quiz & Challenges</h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                        Testez vos connaissances en informatique et gagnez des goodies exclusifs du Club IT !
                        Les quiz se dérouleront sur Kahoot pendant l'événement.
                    </p>
                </div>

                <div className="glass p-12 rounded-[2rem] border-white/5 max-w-lg w-full">
                    <h3 className="text-xl font-bold mb-4">Prêt pour le défi ?</h3>
                    <p className="text-slate-500 mb-8">
                        Cliquez sur le bouton ci-dessous pour accéder à la plateforme de quiz (Kahoot / Google Forms).
                    </p>
                    <a
                        href="https://kahoot.it"
                        target="_blank"
                        className="block w-full bg-accent hover:bg-orange-600 text-white font-black py-5 rounded-2xl transition-all hover:scale-[1.05] active:scale-[0.95]"
                    >
                        Lancer le Quiz
                    </a>
                </div>
            </div>
        </main>
    );
}
