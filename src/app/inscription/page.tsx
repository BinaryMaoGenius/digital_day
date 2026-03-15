"use client";

import Navbar from "@/components/Navbar";

export default function Inscription() {
    return (
        <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-x-hidden pt-32 pb-20">
            <Navbar />

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[150px] -z-10" />

            <div className="w-full max-w-3xl px-6">
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Inscription</h1>
                    <p className="text-slate-400 text-lg">
                        Rejoignez l&apos;aventure Digital Day. Remplissez le formulaire pour réserver votre place.
                    </p>
                </div>

                {/* JotForm iFrame Embed */}
                <div className="glass rounded-3xl border border-white/5 overflow-hidden">
                    <iframe
                        id="JotFormIFrame-260733070640045"
                        title="Inscription - Digital Day 2026"
                        onLoad={() => window.parent.scrollTo(0, 0)}
                        allowTransparency={true}
                        allow="geolocation; microphone; camera; fullscreen; payment"
                        src="https://form.jotform.com/260733070640045"
                        frameBorder={0}
                        style={{
                            minWidth: "100%",
                            maxWidth: "100%",
                            height: "700px",
                            border: "none",
                            background: "transparent",
                        }}
                        scrolling="no"
                    />
                </div>

                {/* JotForm resize handler */}
                <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" />
            </div>
        </main>
    );
}
