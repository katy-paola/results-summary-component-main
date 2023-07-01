/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#fea507",
				"result": "#4c37f4"
			},
			boxShadow: {
				sh: "0 25px 50px -12px rgba(76, 55, 244, 0.2)",
			},
		},
		fontFamily: {
			sans: ['Hanken Grotesk', 'Arial', 'sans-serif'],
		}
	},
	plugins: [],
}
