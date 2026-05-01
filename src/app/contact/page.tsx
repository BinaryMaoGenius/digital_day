import Navbar from "@/components/Navbar";
import { Mail, MessageCircle, Send, Globe, MessageSquare, Camera, MapPin } from "lucide-react";

export default function Contact() {
    const channels = [
        { name: "WhatsApp", desc: "Groupe d'annonces", icon: <MessageCircle className="w-6 h-6 text-green-500" />, href: "#", color: "bg-green-500/10" },
        { name: "Telegram", desc: "Communauté Tech", icon: <Send className="w-6 h-6 text-blue-400" />, href: "#", color: "bg-blue-400/10" },
        { name: "Email", desc: "contact@clubit.ml", icon: <Mail className="w-6 h-6 text-primary" />, href: "mailto:contact@clubit.ml", color: "bg-primary/10" },
    ];

    return (
        <main className="relative min-h-screen flex flex-col items-center bg-background text-foreground overflow-x-hidden pt-32 pb-20">
            <Navbar />

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[150px] -z-10" />

            <div className="w-full max-w-5xl px-6 flex-1 flex flex-col items-center">
                <div className="mb-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">RESTONS <span className="text-gradient">CONNECTÉS</span></h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        Vous avez des questions ? Vous souhaitez devenir partenaire ? Notre équipe est à votre écoute pour faire du Digital Day un succès mémorable.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 w-full mb-20">
                    {channels.map((channel, idx) => (
                        <a 
                            key={idx} 
                            href={channel.href} 
                            className="glass p-10 rounded-[32px] border-white/5 flex flex-col items-center text-center hover:translate-y-[-8px] transition-all group"
                        >
                            <div className={`w-16 h-16 ${channel.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                {channel.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{channel.name}</h3>
                            <p className="text-slate-500">{channel.desc}</p>
                        </a>
                    ))}
                </div>

                <div className="w-full glass p-10 md:p-16 rounded-[48px] flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">Notre QG</h2>
                        <p className="text-slate-400 mb-8 flex items-center justify-center md:justify-start gap-2">
                            <MapPin className="w-5 h-5 text-primary" /> ENI-ABT, Bamako, Mali
                        </p>
                        <div className="flex gap-6 justify-center md:justify-start">
                            <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-primary transition-all"><Globe className="w-5 h-5" /></a>
                            <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-primary transition-all"><MessageSquare className="w-5 h-5" /></a>
                            <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-primary transition-all"><Camera className="w-5 h-5" /></a>
                        </div>
                    </div>
                    <div className="flex-1 w-full bg-white/5 rounded-[32px] p-8 text-center">
                        <p className="text-slate-400 mb-6 italic">"L'innovation n'attend pas. Construisons le futur ensemble."</p>
                        <span className="font-bold text-primary">— L'équipe Digital Day</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
