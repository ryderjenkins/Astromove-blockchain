import { heroui } from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|divider).js"
  ],

  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
      },
      animation: {
        wave: 'wave 12s linear infinite',
        updown: 'updown 2s ease-in-out infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        jost: ['var(--font-jost)'],
      },
      backgroundImage: {
        'home': "url('/assets/back/universe.png')",
        'launchpad': "url('/assets/back/LaunchBack.png')",
        'default': "url('/assets/back/universe.png')",
      },
      fontSize: {
        'fluid': 'clamp(24px, calc(24px + (52 - 24) * ((100vw - 360px) / (1250 - 360))), 52px)',
        'fluid2': 'clamp(32px, calc(32px + (70 - 32) * ((100vw - 360px) / (1250 - 360))), 70px)',
        'fluid3': 'clamp(16px, calc(16px + (24 - 16) * ((100vw - 360px) / (720 - 360))), 24px)',
        'buttonfluid': 'clamp(16px, calc(16px + (20 - 16) * ((100vw - 360px) / (720 - 360))), 20px)',
        'introdescription': 'clamp(16px, calc(16px + (24 - 16) * ((100vw - 360px) / (720 - 360))), 24px)',
        'livecardcontent': 'clamp(16px, calc(16px + (20 - 16) * ((100vw - 360px) / (480 - 360))), 20px)',
        'live16font': 'clamp(12px, calc(12px + (16 - 12) * ((100vw - 360px) / (480 - 360))), 16px)',
        'maintitle': 'clamp(30px, calc(30px + (50 - 30) * ((100vw - 360px) / (1250 - 360))), 50px)',
        'faqtitle': 'clamp(20px, calc(20px + (28 - 20) * ((100vw - 360px) / (967 - 360))), 28px)',
        'howwork': 'clamp(16px, calc(16px + (26 - 16) * ((100vw - 360px) / (860 - 360))), 26px)',
        'howworkdescription': 'clamp(14px, calc(14px + (18 - 14) * ((100vw - 360px) / (860 - 360))), 18px)',
      },
      screens: {
        'xs': '480px',
        'sm': '680px',
        'md': '720px',
        'lg': '870px',
        'lg2': '967px',
        'xl': '1280px',
        '2xl': '1250px',
        '3xl': '1415px',
      },
      width: {
        'livecardWidth': 'calc(350px + (450 - 350) * ((100vw - 360px) / (480 - 360)))',
        'howworkwidth': 'clamp(150px, calc(150px + (200 - 150) * ((100vw - 360px) / (870 - 360))), 200px)',
      },
      height: {
        'livecardHeight': 'clamp(600px, calc(600px + (700 - 600) * ((100vw - 360px) / (480 - 360))), 700px)',
        'livecardHeaderHeight': 'clamp(120px, calc(120px + (170 - 120) * ((100vw - 360px) / (480 - 360))), 170px)',
        'livecardcontent': 'clamp(16px, calc(16px + (20 - 16) * ((100vw - 360px) / (480 - 360))), 20px)',

      },
      margin: {
        'livecardLogo': 'clamp(90px, calc(90px + (140 - 90) * ((100vw - 360px) / (480 - 360))), 140px)',
        'live20margin': 'clamp(10px, calc(10px + (20 - 10) * ((100vw - 360px) / (480 - 360))), 20px)',
        'mainmargin': 'clamp(100px, calc(100px + (215 - 100) * ((100vw - 360px) / (1250 - 360))), 215px)',
      }
    },
  },
  plugins: [heroui()],
} satisfies Config;
