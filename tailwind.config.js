/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"green-army": "#606c38",
				"green-bottle": "#283618",
				"white-bone": "#fefae0",
				coksu: "#dda15e",
				chocolate: "#bc6c25",
			},
			textDecorationThickness: {
				5: "5px",
				6: "6px",
			},
			fontSize: {
				"2xs": ["0.65rem", "0.75rem"],
				"3xs": ["0.5rem", "0.5rem"],
				"4xs": ["0.45rem", "0.45rem"],
				"5xs": ["0.4rem", "0.4rem"],
			},
			width: {
				calc: "calc(100% - 16px)",
			},
			screens: {
				xs: "425px",
				// => @media (min-width: 425px) { ... }
			},
		},
	},
	plugins: [],
};
