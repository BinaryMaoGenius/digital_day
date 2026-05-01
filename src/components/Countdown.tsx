"use client";

import { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown() {
    const targetDate = new Date('2026-05-09T12:00:00').getTime();
    
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const TimeUnit = ({ value, label }: { value: number, label: string }) => (
        <div className="flex flex-col items-center">
            <div className="glass w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-2xl border border-white/10 mb-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <span className="text-2xl md:text-4xl font-black text-white tabular-nums">
                    {value.toString().padStart(2, '0')}
                </span>
            </div>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">
                {label}
            </span>
        </div>
    );

    return (
        <div className="flex gap-4 md:gap-8 items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <TimeUnit value={timeLeft.days} label="Jours" />
            <TimeUnit value={timeLeft.hours} label="Heures" />
            <TimeUnit value={timeLeft.minutes} label="Min" />
            <TimeUnit value={timeLeft.seconds} label="Sec" />
        </div>
    );
}
