"use client";

import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: "L'événement est-il gratuit ?",
        a: "Oui, l'accès au Digital Day est entièrement gratuit pour tous les étudiants et passionnés de technologie. Cependant, les places sont limitées et l'inscription est obligatoire."
    },
    {
        q: "Dois-je apporter mon propre ordinateur ?",
        a: "Pour les conférences, ce n'est pas nécessaire. Cependant, si vous participez au CTF ou au Hackathon, nous vous recommandons vivement d'apporter votre PC portable avec vos outils habituels."
    },
    {
        q: "Y aura-t-il des certificats de participation ?",
        a: "Absolument ! Tous les participants inscrits recevront un certificat de participation numérique attestant de leur présence à cette édition 2026."
    },
    {
        q: "Où se déroule exactement l'événement ?",
        a: "L'événement se tiendra sur le campus de l'Université Internationale Privée d'Excellence (UIPE), située sur la Colline du Savoir à Bamako. C'est un cadre exceptionnel avec une vue panoramique sur la capitale."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full max-w-4xl px-6 py-32">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-primary/10 rounded-full text-xs font-bold text-primary uppercase tracking-widest">
                    <HelpCircle className="w-3 h-3" /> Questions fréquentes
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">VOUS AVEZ DES <span className="text-gradient">QUESTIONS ?</span></h2>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="glass rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-300 hover:border-primary/20">
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full p-6 md:p-8 flex items-center justify-between text-left"
                        >
                            <span className="text-lg md:text-xl font-bold">{faq.q}</span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-primary text-white rotate-180' : 'bg-white/5 text-slate-400'}`}>
                                {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                            </div>
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                >
                                    <div className="px-6 md:px-8 pb-8 text-slate-400 leading-relaxed text-lg border-t border-white/5 pt-6">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
