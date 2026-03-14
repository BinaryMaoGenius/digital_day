"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

const products = [
    { id: 1, name: "T-shirt Club IT", price: "5,000 FCFA", img: "👕" },
    { id: 2, name: "Badge Digital Day", price: "1,000 FCFA", img: "📛" },
    { id: 3, name: "Stickers Pack", price: "500 FCFA", img: "🏷️" },
    { id: 4, name: "Hoodie Tech Squad", price: "12,000 FCFA", img: "🧥" },
];

export default function Boutique() {
    const [isOrdered, setIsOrdered] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(products[0].name);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsOrdered(true);
        setTimeout(() => setIsOrdered(false), 5000);
    };

    return (
        <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-x-hidden pt-32 pb-20">
            <Navbar />

            <div className="w-full max-w-6xl px-6">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">La Boutique</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Portez fièrement les couleurs du Club IT. Pré-commandez vos goodies dès maintenant.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {products.map((product) => (
                        <div key={product.id} className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center group hover:border-accent/30 transition-all">
                            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
                                {product.img}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                            <p className="text-accent font-black text-lg mb-6">{product.price}</p>
                            <button
                                onClick={() => setSelectedProduct(product.name)}
                                className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold border border-white/10 transition-colors"
                            >
                                Choisir
                            </button>
                        </div>
                    ))}
                </div>

                <div className="max-w-xl mx-auto relative">
                    {isOrdered && (
                        <div className="absolute inset-0 bg-background/90 z-10 flex flex-col items-center justify-center text-center p-8 rounded-[2.5rem] animate-in fade-in duration-300">
                            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-accent text-3xl font-bold">✓</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Pré-commande enregistrée !</h3>
                            <p className="text-slate-400">Merci ! Vous recevrez un message de confirmation sur WhatsApp.</p>
                        </div>
                    )}

                    <div className="glass p-8 md:p-10 rounded-[2.5rem] border-white/5">
                        <h2 className="text-2xl font-bold mb-2 text-center">Formulaire de Pré-commande</h2>
                        <p className="text-slate-500 text-sm text-center mb-8">Les articles seront à retirer le jour de l'événement.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Article souhaité</label>
                                <select
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJ3aGl0ZSI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xOSA5bC03IDctNy03Ii8+PC9zdmc+')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat"
                                    value={selectedProduct}
                                    onChange={(e) => setSelectedProduct(e.target.value)}
                                >
                                    {products.map(p => <option key={p.id}>{p.name}</option>)}
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Prénom</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Nom</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Numéro de téléphone</label>
                                <input type="tel" placeholder="+223 ..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50" required />
                            </div>

                            <button className="w-full bg-accent hover:bg-orange-600 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-accent/20">
                                Valider la pré-commande
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
