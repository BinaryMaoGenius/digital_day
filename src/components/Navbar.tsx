"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Accueil", href: "/" },
        { name: "Programme", href: "/programme" },
        { name: "Le Club", href: "/club" },
        { name: "Sections", href: "/sections" },
        { name: "Boutique", href: "/boutique" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
            <div className="glass flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-2xl relative">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity whitespace-nowrap">
                    Club IT <span className="text-primary">- Digital Day</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
                    {links.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/inscription"
                        className="hidden sm:block bg-accent hover:bg-orange-600 px-5 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95"
                    >
                        S'inscrire
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>

                {/* Mobile menu dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-4 mx-0 glass rounded-3xl p-6 flex flex-col gap-4 lg:hidden animate-in slide-in-from-top-4 duration-300">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-bold p-2 hover:text-primary transition-colors border-b border-white/5"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/inscription"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 bg-primary text-center py-4 rounded-2xl font-black"
                        >
                            S'inscrire Maintenant
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
