import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        background: '#0e0e15',       // Deep navy
        surface: '#1a1a2e',          // Slightly lighter surface
        primary: '#6C63FF',          // Soft neon indigo (main purple)
        secondary: '#FFD6E8',        // Soft pink glow
        accent: '#B9FBC0',           // Soft mint
        muted: '#a0aec0',            // Descriptive text
        glowing: '#8be9fd',          // Bright cyan glow
        lightPurple: '#bfaaff',      // Soft background support
        danger: '#ff5c8a',           // For delete buttons
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        neon: '0 0 20px rgba(108, 99, 255, 0.6)',
        glowSoft: '0 0 10px rgba(255, 255, 255, 0.15)',
        glowPrimary: '0 0 15px #6C63FF',
        glowPink: '0 0 15px #FFD6E8',
      },
      backgroundImage: {
        noise: "url('/noise.png')",
        radial: "radial-gradient(circle at top left, #6C63FF, #0e0e15)",
        gradientGlow: "linear-gradient(135deg, #6C63FF 0%, #b9fbc0 100%)",
        loginGlow: "linear-gradient(135deg, #6C63FF, #FFD6E8)",
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        bounceFast: 'bounceFast 0.6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 8px #6C63FF',
          },
          '50%': {
            boxShadow: '0 0 16px #6C63FF',
          },
        },
        bounceFast: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [forms, typography],
};
