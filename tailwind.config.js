/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glitchShift: {
          '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)', transform: 'translate(-3px, -2px)' },
          '20%': { clipPath: 'polygon(0 60%, 100% 60%, 100% 80%, 0 80%)', transform: 'translate(3px, 2px)' },
          '40%': { clipPath: 'polygon(0 10%, 100% 10%, 100% 30%, 0 30%)', transform: 'translate(-2px, 1px)' },
          '60%': { clipPath: 'polygon(0 70%, 100% 70%, 100% 90%, 0 90%)', transform: 'translate(2px, -1px)' },
          '80%': { clipPath: 'polygon(0 45%, 100% 45%, 100% 65%, 0 65%)', transform: 'translate(-3px, 0)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)', transform: 'translate(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scanlineMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100vh' },
        },
        progressFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--target-width)' },
        },
        noiseFlicker: {
          '0%, 100%': { opacity: '0.025' },
          '50%': { opacity: '0.04' },
        },
      },
      animation: {
        blink: 'blink 0.8s steps(1) infinite',
        glitchShift: 'glitchShift 0.4s steps(1) 3',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        progressFill: 'progressFill 1s ease-out forwards',
        noiseFlicker: 'noiseFlicker 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

