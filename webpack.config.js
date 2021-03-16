const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const {merge} = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		// The name of the organization this application is written for
		orgName: 'front-tech',

		// The name of the current project. This usually matches the git repo's name
		projectName: 'products',

		// See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv
		webpackConfigEnv: {
			...webpackConfigEnv,
			analyze: false
		},

		// The CLI commands in the package.json script that triggered this build
		argv,
	});

	return merge(defaultConfig, {
		output: {
			path: path.resolve(process.cwd(), "docs/static/mf"),
		},
		plugins: [
			new Dotenv()
		],
		module:{
			rules: [
				{
					test: /\.svg$/,
					use: [
						{
							loader: 'svg-url-loader',
							options: {
								limit: 10000,
							},
						},
					],
				},
			]
		}
	});
}
