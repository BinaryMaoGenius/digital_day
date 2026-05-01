"use client";

import { MapPin, Navigation, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Venue() {
    return (
        <section className="w-full max-w-6xl px-6 py-32">
            <div className="glass p-8 md:p-16 rounded-[3.5rem] border border-white/5 relative overflow-hidden group">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-20 -z-10 group-hover:bg-primary/10 transition-colors duration-700" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full -z-10" />

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-primary/10 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">
                            <MapPin className="w-3.5 h-3.5" /> Emplacement officiel
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                            REJOIGNEZ-NOUS SUR <br />
                            <span className="text-gradient">LA COLLINE</span>
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 shrink-0 glass rounded-2xl flex items-center justify-center border border-white/10 text-primary">
                                    <Navigation className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1 text-white">Université Internationale Privée d'Excellence</h4>
                                    <p className="text-slate-400">Point G, Sur la Colline du Savoir, Bamako, Mali</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 shrink-0 glass rounded-2xl flex items-center justify-center border border-white/10 text-secondary">
                                    <Info className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1 text-white">Accès & Sécurité</h4>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        Un service de navettes et un parking sécurisé seront disponibles pour tous les participants inscrits. L'accès au campus se fait sur présentation du billet numérique.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-10">
                            <a 
                                href="https://www.google.com/maps/search/Université+Internationale+Privée+d'Excellence+Bamako" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95"
                            >
                                <MapPin className="w-5 h-5 text-primary" /> Voir sur Google Maps
                            </a>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 glass p-2">
                            <div className="w-full h-full bg-slate-900/50 rounded-[2rem] flex items-center justify-center relative">
                                {/* Placeholder/Decorative Map UI */}
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
                                <div className="z-10 text-center px-8">
                                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
                                    <div className="text-sm font-black uppercase tracking-widest text-slate-300">UIPE - Bamako</div>
                                    <div className="text-[10px] text-slate-500 mt-1 uppercase">Vue panoramique de Bamako</div>
                                </div>
                                
                                {/* Orbiting glow */}
                                <div className="absolute w-40 h-40 bg-primary/20 blur-[60px] rounded-full animate-pulse" />
                            </div>
                        </div>
                        
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border border-primary/20 shadow-2xl animate-float">
                            <div className="text-primary font-black text-2xl mb-1">D-Day</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Destination Excellence</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
