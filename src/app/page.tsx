import Navbar from "@/components/Navbar";
import Countdown from "@/components/Countdown";
import Particles from "@/components/Particles";
import Venue from "@/components/Venue";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mic2, Calendar, MapPin, Award, ArrowRight, Zap, Code, Shield, Gamepad2 } from "lucide-react";

export default function Home() {
  const speakers = [
    { name: "Dr. Moussa Kanté", role: "Expert en IA & Big Data", org: "RobotMali", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Fatoumata Traoré", role: "Spécialiste Cybersécurité", org: "CyberSec Mali", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Oumar Diallo", role: "Architecte Cloud", org: "Google Developers Group", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop" },
    { name: "Awa Sidibé", role: "Lead Dev Mobile", org: "Innov'Mali", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop" },
  ];

  const highlights = [
    { title: "Conférences", desc: "Des leaders d'opinion partagent leur vision du futur numérique au Mali.", icon: <Mic2 className="w-6 h-6" />, href: "/programme" },
    { title: "CTF Compétition", desc: "Testez vos compétences en sécurité informatique et gagnez des prix.", icon: <Shield className="w-6 h-6" />, href: "/programme" },
    { title: "IA Hackathon", desc: "Développez des solutions intelligentes pour les défis locaux.", icon: <Code className="w-6 h-6" />, href: "/programme" },
    { title: "Networking", desc: "Rencontrez vos futurs collaborateurs et mentors de l'industrie.", icon: <Zap className="w-6 h-6" />, href: "/programme" },
    { title: "Quiz Live 🎮", desc: "Notre quiz en temps réel sur notre propre plateforme. QR code, scores live, classement instantané.", icon: <Gamepad2 className="w-6 h-6" />, href: "/quiz" },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden bg-background">
      <Navbar />
      <Particles />

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[90vh] text-center px-6 pt-32 pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[100px] rounded-full" />
        </div>

        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 glass rounded-full text-xs font-bold tracking-wider uppercase text-primary border border-primary/20"
        >
          <Calendar className="w-3.5 h-3.5" /> Samedi 09 Mai 2026 • Bamako, Mali
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none"
        >
          L'ÉLITE DU <br />
          <span className="text-gradient">NUMÉRIQUE</span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed"
        >
          <span className="text-white font-bold italic block mb-4">"Une nouvelle génération pour bâtir le Mali numérique de demain"</span>
          Plongez au cœur de l'innovation lors de la plus grande journée technologique organisée par le Club IT. Conférences d'experts, compétitions de haut niveau et opportunités uniques.
        </motion.p>

        <div className="mb-16">
          <Countdown />
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6"
        >
          <Link
            href="/inscription"
            className="bg-primary hover:bg-blue-600 text-white px-10 py-5 rounded-[24px] text-xl font-black transition-all hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.6)] hover:scale-105 flex items-center gap-3"
          >
            Je m'inscris <ArrowRight className="w-6 h-6" />
          </Link>
          <Link
            href="/programme"
            className="glass hover:bg-white/10 px-10 py-5 rounded-[24px] text-xl font-bold transition-all border border-white/5"
          >
            Explorer le programme
          </Link>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl px-6 py-32 border-y border-white/5"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {highlights.map((item, idx) => (
            <Link key={idx} href={item.href} className="group cursor-pointer">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all border border-white/5">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Speakers Section */}
      <section className="w-full max-w-7xl px-6 py-32 bg-white/[0.01]">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">NOS <span className="text-gradient">SPEAKERS</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed">
              Rencontrez les visionnaires et les experts qui façonnent l'avenir technologique du Mali et de l'Afrique.
            </p>
          </div>
          <Link href="/programme" className="text-primary font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
            Voir tous les intervenants <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, idx) => (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-[32px] border border-white/5 group hover:border-primary/30 transition-all"
            >
              <div className="aspect-square rounded-[24px] overflow-hidden mb-6 relative">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{speaker.role}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold uppercase tracking-widest">
                <MapPin className="w-3 h-3" /> {speaker.org}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Venue />
      <FAQ />

      {/* CTA Section */}
      <section className="w-full max-w-6xl px-6 py-32 mb-20">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-24 rounded-[60px] text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10" />
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-tight">
            PRÊT À REJOINDRE <br /> LA RÉVOLUTION ?
          </h2>
          <Link
            href="/inscription"
            className="inline-flex bg-white text-black px-12 py-6 rounded-3xl text-2xl font-black hover:scale-105 transition-all shadow-xl"
          >
            S'INSCRIRE MAINTENANT
          </Link>
          <div className="mt-12 flex justify-center gap-12 text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">
            <span>Places Limitées</span>
            <span>Accès Gratuit</span>
            <span>Certificat Inclus</span>
          </div>
        </motion.div>
      </section>

      <footer className="w-full py-12 px-6 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© 2026 Club IT - Digital Day. Tous droits réservés.</p>
      </footer>
    </main>
  );
}

