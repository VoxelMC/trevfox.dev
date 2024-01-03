// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
	trailingComma: 'es5',
	tabWidth: 4,
	semi: false,
	plugins: ['prettier-plugin-astro'],
	singleQuote: true,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}

export default config
