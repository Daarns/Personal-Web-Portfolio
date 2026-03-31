import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        // Retro Color Palette
        retro: {
          cream: '#FFF8E7',
          brown: '#2B2118',
          orange: '#FF6B35',
          teal: '#004E64',
          yellow: '#FFB627',
          lightBeige: '#F5E6D3',
          mediumBrown: '#6B5D52',
          darkBrown: '#1A1612',
          coral: '#FF8C61',
          brightTeal: '#00A8CC',
          softYellow: '#FFD166',
        },
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'retro-bounce': 'retro-bounce 2s ease-in-out infinite',
        'retro-pulse': 'retro-pulse 2s ease-in-out infinite',
        'retro-slide': 'retro-slide-in 0.6s ease-out',
      },
      keyframes: {
        'retro-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'retro-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'retro-slide-in': {
          'from': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;