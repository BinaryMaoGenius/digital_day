"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Inscription() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        level: "L1",
        section: "IA & Data",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    if (isSubmitted) {
        return (
            <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-x-hidden pt-32 pb-20 px-6">
                <Navbar />
                <div className="glass p-12 rounded-[2.5rem] border-primary/20 max-w-2xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-5xl text-primary font-bold">✓</span>
                    </div>
                    <h2 className="text-4xl font-black">Inscription Confirmée !</h2>
                    <p className="text-slate-400 text-lg">
                        Félicitations {formData.firstName}, vous êtes maintenant inscrit au Digital Day 2026.
                    </p>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-6xl font-black">ID: #{Math.floor(Math.random() * 9000) + 1000}</span>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Digital Passport</span>
                            <h3 className="text-2xl font-black">{formData.firstName} {formData.lastName.toUpperCase()}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                            <div>
                                <p className="text-slate-500">Section</p>
                                <p className="font-bold">{formData.section}</p>
                            </div>
                            <div>
                                <p className="text-slate-500">Rang</p>
                                <p className="font-bold">Elite Member</p>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-black font-black text-[8px]">QR CODE</span>
                            </div>
                            <span className="text-slate-600 font-mono text-xs">Auth: {btoa(formData.email).substring(0, 10)}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => window.print()}
                        className="text-primary font-bold hover:underline"
                    >
                        Imprimer mon pass numérique
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-x-hidden pt-32 pb-20">
            <Navbar />

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[150px] -z-10" />

            <div className="w-full max-w-2xl px-6">
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Inscription</h1>
                    <p className="text-slate-400 text-lg">
                        Rejoignez l'aventure Digital Day. Remplissez le formulaire pour réserver votre place.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl border-white/5 space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-400 ml-1">Prénom</label>
                            <input
                                type="text"
                                placeholder="Ex: Moussa"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-400 ml-1">Nom</label>
                            <input
                                type="text"
                                placeholder="Ex: Traoré"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400 ml-1">Email</label>
                        <input
                            type="email"
                            placeholder="votre@email.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-400 ml-1">Téléphone (WhatsApp)</label>
                            <input
                                type="tel"
                                placeholder="+223 ..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-400 ml-1">Niveau d'études</label>
                            <select
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xOSA5bC03IDctNy03Ii8+PC9zdmc+')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat"
                                value={formData.level}
                                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                            >
                                <option value="L1">Licence 1</option>
                                <option value="L2">Licence 2</option>
                                <option value="L3">Licence 3</option>
                                <option value="M1">Master 1</option>
                                <option value="M2">Master 2</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400 ml-1">Section qui vous intéresse</label>
                        <div className="grid grid-cols-2 gap-3">
                            {['IA & Data', 'Cybersécurité', 'Web & Mobile', 'Robotique'].map((section) => (
                                <label key={section} className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition-all ${formData.section === section ? 'bg-primary/20 border-primary' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                                    <input
                                        type="radio"
                                        name="section"
                                        value={section}
                                        className="hidden"
                                        checked={formData.section === section}
                                        onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                                    />
                                    <span className="text-sm font-medium">{section}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400 ml-1">Comment avez-vous connu l'événement ?</label>
                        <input
                            type="text"
                            placeholder="Réseaux sociaux, Amis, Affiches..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Confirmer mon inscription
                    </button>
                </form>
            </div>
        </main>
    );
}
