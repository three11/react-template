process.setMaxListeners(0);

const { resolve } = require('path');
const magicImporter = require('node-sass-magic-importer');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const babelConfig = {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			cacheDirectory: true
		}
	}
};

const htmlConfig = {
	test: /\.html$/,
	use: [
		{
			loader: 'html-loader',
			options: {
				minimize: true
			}
		}
	]
};

const postcssPlugins = [
	require('postcss-easy-import'),
	require('postcss-url')({
		url: 'rebase'
	}),
	require('postcss-utilities'),
	require('postcss-flexbugs-fixes'),
	require('autoprefixer')()
];

const cssConfig = {
	test: /(\.css|\.scss)$/,
	use: ['css-hot-loader'].concat(
		ExtractTextPlugin.extract({
			use: [
				{
					loader: 'css-loader',
					options: {
						sourceMap: true
					}
				},
				{
					loader: 'postcss-loader',
					options: {
						plugins: loader => {
							if (loader.hot) {
								postcssPlugins.push(
									require('postcss-watch-folder')({
										folder: './src/styles',
										main: './src/styles/App.scss'
									})
								);
							} else {
								postcssPlugins.push(
									require('cssnano')({
										discardComments: {
											removeAll: true
										}
									})
								);
							}

							return postcssPlugins;
						},
						sourceMap: true
					}
				},
				{
					loader: 'sass-loader',
					options: {
						importer: magicImporter(),
						sourceMap: true
					}
				}
			],
			fallback: 'style-loader'
		})
	)
};

const assetsConfig = {
	test: /\.(jpe?g|gif|png|woff2?|ttf|eot|wav|mp3|mp4)(\?.*$|$)/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: '[hash].[ext]'
			}
		}
	]
};

const svgConfig = {
	test: /\.svg$/,
	loader: 'svg-react-loader'
};

module.exports = {
	entry: ['react-hot-loader/patch', './src/js/bootstrap.js'],
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: '/'
	},
	module: {
		rules: [babelConfig, htmlConfig, cssConfig, assetsConfig, svgConfig]
	},
	resolve: {
		alias: {
			_sagas: resolve(__dirname, 'src/js/store/sagas'),
			_store: resolve(__dirname, 'src/js/store'),
			_styles: resolve(__dirname, 'src/styles'),
			_images: resolve(__dirname, 'src/images'),
			_utilities: resolve(__dirname, 'src/js/utilities'),
			_constants: resolve(__dirname, 'src/js/constants'),
			_components: resolve(__dirname, 'src/js/components')
		}
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new ExtractTextPlugin({
			filename: 'main.css',
			allChunks: true
		})
	],
	cache: true,
	bail: false,
	devtool: 'source-map',
	devServer: {
		noInfo: true,
		historyApiFallback: true
	},
	stats: 'errors-only'
};
