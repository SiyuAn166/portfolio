import { useCallback, useEffect, useRef } from 'react';

const CHARS = '░▒▓│─┼╔╗╚╝╠╣╦╩╬▄▀█■□';

function randomChar() {
    return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export function AsciiNoise() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const W = canvas.width;
        const H = canvas.height;
        const fontSize = 12;
        const cols = Math.ceil(W / fontSize);
        const rows = Math.ceil(H / fontSize);

        ctx.clearRect(0, 0, W, H);

        // Derive color from CSS variable
        const style = getComputedStyle(document.documentElement);
        const bright = style.getPropertyValue('--text-bright').trim() || '#ffffff';

        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        ctx.fillStyle = bright;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (Math.random() > 0.88) {
                    ctx.fillText(randomChar(), c * fontSize, (r + 1) * fontSize);
                }
            }
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            draw();
        };
        resize();

        const interval = setInterval(draw, 120);
        window.addEventListener('resize', resize);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resize);
        };
    }, [draw]);

    return (
        <canvas
            ref={canvasRef}
            className="ascii-noise-grid fixed inset-0 z-0 pointer-events-none"
            aria-hidden="true"
        />
    );
}
