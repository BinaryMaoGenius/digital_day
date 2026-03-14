import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden">
      <Navbar />

      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-secondary/20 blur-[100px] rounded-full" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
        <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-xs font-semibold tracking-wider uppercase text-primary border-primary/20">
          Digital Day 2026 • Bamako, Mali
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter">
          Propulsez votre <br />
          <span className="text-gradient">talent informatique</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          Rejoignez l'événement technologique incontournable du Club IT.
          Une journée d'innovation, de défis et de networking au cœur de la jeunesse malienne.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/inscription"
            className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:scale-105"
          >
            Je m'inscris maintenant
          </Link>
          <Link
            href="/programme"
            className="glass hover:bg-white/10 px-8 py-4 rounded-2xl text-lg font-bold transition-all"
          >
            Voir le programme
          </Link>
        </div>

        {/* Quick Stats / Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 w-full max-w-4xl">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">4+</span>
            <span className="text-sm text-slate-500 uppercase tracking-widest">Sections</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">10+</span>
            <span className="text-sm text-slate-500 uppercase tracking-widest">Projets</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">500+</span>
            <span className="text-sm text-slate-500 uppercase tracking-widest">Participants</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">100%</span>
            <span className="text-sm text-slate-500 uppercase tracking-widest">Innovation</span>
          </div>
        </div>
      </section>

      {/* Feature Preview Section (Brief) */}
      <section className="w-full max-w-6xl px-6 py-32">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Explorez nos sections</h2>
          <div className="w-24 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['IA & Data', 'Cybersécurité', 'Web & Mobile', 'Robotique'].map((section) => (
            <div key={section} className="glass p-8 rounded-3xl hover:border-primary/50 transition-colors group cursor-default">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <div className="w-3 h-3 bg-primary rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-2">{section}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Découvrez des projets innovants et participez à des ateliers pratiques.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
