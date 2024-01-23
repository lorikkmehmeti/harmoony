module.exports = {
	root: true,
	env: {browser: true, es2020: true},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{allowConstantExport: true},
		],
		"no-const-assign": "error",
		"default-case": "error",
		"default-case-last": "error",
		eqeqeq: "error",
		"id-length": ["error", {min: 2}],
		"no-console": "warn",
		"no-empty": "error",
		"no-lonely-if": "warn",
		"no-var": "warn",
		"prefer-const": "error",
		"prefer-destructuring": "warn",
	},
};
