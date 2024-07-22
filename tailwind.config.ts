import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FB7363',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss', require('@tailwindcss/line-clamp')],
} satisfies Config;
