module.exports = {
	extends: 'airbnb',
	env: {
		es6: true,
		browser: true
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		}
	},
	plugins: [
		'react'
	],
	settings: {
		'import/resolver':{
			webpack: {
				config: 'config/webpack.config.dev.js'
			}
		},
		'import/extensions': [
			'.js',
			'.jsx',
			'.css'
		]
	},
	rules: {
		'brace-style': ['error', 'stroustrup', {
			allowSingleLine: true
		}],
		'class-methods-use-this': 'off',
		'comma-dangle': ['error', 'never'],
		'function-paren-newline': 'off',
		'import/extensions': ['error', 'always', {
			js: 'never',
			jsx: 'never',
			css: 'never'
		}],
		'indent': ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			FunctionDeclaration: { parameters: 1, body: 1 },
			FunctionExpression: { parameters: 1, body: 1 }
		}],
		'no-tabs': 'off',
		'no-unused-expressions': ['error', {
			allowShortCircuit: false,
			allowTernary: false
		}],
		'object-curly-newline': 'off',
		'quotes': ['error', 'single', {
			allowTemplateLiterals: true
		}],
		'react/jsx-curly-spacing': ['error', 'always', {
			spacing: { objectLiterals: 'never' }
		}],
		'react/jsx-handler-names': ['error', {
			eventHandlerPrefix: 'handle',
			eventHandlerPropPrefix: 'on'
		}],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/no-redundant-should-component-update': 'error',
		'react/no-typos': 'error',
		'react/prefer-stateless-function': 'off'
	}
}
