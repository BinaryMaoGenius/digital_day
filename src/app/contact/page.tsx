import Navbar from "@/components/Navbar";

export default function Contact() {
    return (
        <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-x-hidden pt-32 pb-20">
            <Navbar />

            <div className="w-full max-w-4xl px-6 flex-1 flex flex-col items-center justify-center">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Contactez-nous</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Restez connectés avec le Club IT pour tout savoir sur le Digital Day.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 w-full">
                    <a href="#" className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center hover:bg-white/5 transition-all">
                        <div className="w-12 h-12 bg-green-500/20 rounded-2xl mb-4 flex items-center justify-center">
                            <span className="text-green-500 font-bold">W</span>
                        </div>
                        <h3 className="font-bold mb-2">WhatsApp</h3>
                        <p className="text-sm text-slate-500">Groupe d'annonce</p>
                    </a>

                    <a href="#" className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center hover:bg-white/5 transition-all">
                        <div className="w-12 h-12 bg-blue-400/20 rounded-2xl mb-4 flex items-center justify-center">
                            <span className="text-blue-400 font-bold">T</span>
                        </div>
                        <h3 className="font-bold mb-2">Telegram</h3>
                        <p className="text-sm text-slate-500">Communauté Tech</p>
                    </a>

                    <a href="mailto:contact@clubit.ml" className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center hover:bg-white/5 transition-all">
                        <div className="w-12 h-12 bg-primary/20 rounded-2xl mb-4 flex items-center justify-center">
                            <span className="text-primary font-bold">E</span>
                        </div>
                        <h3 className="font-bold mb-2">Email</h3>
                        <p className="text-sm text-slate-500">contact@clubit.ml</p>
                    </a>
                </div>

                <div className="mt-20 text-center">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">Suivez-nous sur les réseaux</h4>
                    <div className="flex gap-8 justify-center">
                        <a href="#" className="text-2xl hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="text-2xl hover:text-primary transition-colors">Facebook</a>
                        <a href="#" className="text-2xl hover:text-primary transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
