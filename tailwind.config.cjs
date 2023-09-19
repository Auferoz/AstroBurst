/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'media',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  'quantico': ['Quantico', 'sans-serif'],
			  'nunito': ["'Nunito Sans', sans-serif"],
			},
		},
	  },
	plugins: [],
}
