/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'hsl(231, 69%, 60%)',
        'primary-red': 'hsl(0, 94%, 66%)',

        'neutral-gray': 'hsl(229, 8%, 60%)',
        'neutral-blue': 'hsl(229, 31%, 21%)',
      },
    },
  },
  plugins: [],
};
