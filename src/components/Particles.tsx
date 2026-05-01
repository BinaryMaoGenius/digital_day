"use client";

import { useEffect, useRef } from 'react';

export default function Particles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update(w: number, h: number) {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > w) this.x = 0;
                else if (this.x < 0) this.x = w;

                if (this.y > h) this.y = 0;
                else if (this.y < 0) this.y = h;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            if (!canvas) return;
            particles = [];
            // Ajustement du nombre de particules selon la puissance supposée (basée sur la taille d'écran)
            const isMobile = window.innerWidth < 768;
            const density = isMobile ? 30000 : 15000;
            const count = Math.floor((canvas.width * canvas.height) / density);
            
            for (let i = 0; i < count; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        const animate = () => {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update(canvas.width, canvas.height);
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none -z-20 opacity-40"
        />
    );
}
