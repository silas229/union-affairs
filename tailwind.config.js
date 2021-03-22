const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
			fontFamily: {
				'sans': ['Railway', ...defaultTheme.fontFamily.sans],
				'serif': [...defaultTheme.fontFamily.serif],
				'mono': [...defaultTheme.fontFamily.mono]
			},
		},
  },
  variants: {
    extend: {},
  },
  plugins: [
		require("tailwindcss-hyphens")
	],
}
