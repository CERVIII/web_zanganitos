/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	'./public/**/*.{html,js}'
  ],
  theme: {
	fontFamily: {
		Orbitron: ['Orbitron']
	},
	extend: {
		colors: {
			danger: '#ff5f40'
		}
	},
  },
  plugins: [],
}

