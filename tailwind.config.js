module.exports = {
	// recordar que en "content" se coloca donde estaran los archivos que usarian Tailwind.
	// en este caso en la carpeta public y pueden ser archivos html o js
	// content: ["./src/**/*.{html,js}", "./public/*.html"],
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#dac7ed",
				background: "#f5f5f5",
				black: "#444444",
				grey: "#dcdcdc",
			},
			fontFamily: {
				poppins: ["poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
