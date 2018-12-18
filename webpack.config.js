const path = require('path');
const magicImporter = require('node-sass-magic-importer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { DefinePlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const resolve = path.resolve.bind(__dirname);
const PATHS = {
	root: resolve('./'),
	src: resolve('./src'),
	dist: resolve('./dist'),
	store: resolve('./src/js/store'),
	sagas: resolve('./src/js/store/sagas'),
	assets: resolve('./src/assets'),
	styles: resolve('./src/styles'),
	constants: resolve('./src/js/constants'),
	utilities: resolve('./src/js/utilities'),
	components: resolve('./src/js/components'),
	nodeModules: resolve('./node_modules')
};

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

const tsConfig = isDev => ({
	test: /\.(tsx|ts)?$/,
	include: [PATHS.src, PATHS.nodeModules],
	use: [
		{
			loader: 'ts-loader',
			options: {
				transpileOnly: true,
				compilerOptions: {
					sourceMap: isDev,
					target: 'es5',
					isolatedModules: true,
					noEmitOnError: false
				}
			}
		}
	]
});

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

const cssConfig = isDev => ({
	test: /(\.css|\.scss)$/,
	use: [
		...(isDev ? [] : [MiniCssExtractPlugin.loader]),
		{
			loader: 'css-loader',
			options: {
				sourceMap: isDev
			}
		},
		{
			loader: 'postcss-loader',
			options: {
				plugins: [
					require('postcss-easy-import'),
					require('postcss-url')({
						url: 'rebase'
					}),
					require('postcss-utilities'),
					require('postcss-flexbugs-fixes'),
					require('autoprefixer')()
				],
				sourceMap: isDev
			}
		},
		{
			loader: 'sass-loader',
			options: {
				importer: magicImporter(),
				sourceMap: isDev
			}
		}
	]
});

const assetsConfig = {
	test: /\.(jpe?g|gif|png|woff2?|ttf|eot|wav|mp3|mp4)(\?.*$|$)/,
	include: PATHS.assets,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: 'assets/[hash].[ext]',
				limit: 1000
			}
		}
	]
};

const svgConfig = {
	test: /\.svg$/,
	loader: 'svg-react-loader'
};

module.exports = (env = {}) => {
	const isDev = env.dev;

	return {
		entry: ['react-hot-loader/patch', './src/js/bootstrap.js'],
		output: {
			path: PATHS.dist,
			filename: isDev ? '[name].js' : '[name].[chunkhash].bundle.js',
			sourceMapFilename: isDev ? '[name].bundle.map' : '[name].[chunkhash].bundle.map',
			chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash].chunk.js',
			publicPath: '/'
		},
		module: {
			rules: [babelConfig, tsConfig(isDev), htmlConfig, cssConfig(isDev), assetsConfig, svgConfig]
		},
		resolve: {
			alias: {
				'@root': PATHS.root,
				'@src': PATHS.src,
				'@dist': PATHS.dist,
				'@store': PATHS.store,
				'@sagas': PATHS.sagas,
				'@assets': PATHS.assets,
				'@styles': PATHS.styles,
				'@constants': PATHS.constants,
				'@utilities': PATHS.utilities,
				'@components': PATHS.components,
				'@nodeModules': PATHS.nodeModules
			},
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
			modules: ['src', 'node_modules']
		},
		optimization: {
			minimizer: isDev
				? []
				: [
						new UglifyJsPlugin({
							cache: true,
							parallel: true,
							sourceMap: true
						}),
						new OptimizeCSSAssetsPlugin({
							cssProcessor: require('cssnano'),
							cssProcessorOptions: {
								reduceIdents: false,
								safe: true
							}
						})
				  ]
		},

		plugins: [
			new HtmlWebPackPlugin({
				template: './src/index.html',
				filename: './index.html'
			}),
			new DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify(isDev ? 'development' : 'production')
				}
			}),
			new CopyWebpackPlugin([
				// Update these when needed
				// {
				//     from: 'src/manifest.json',
				//     to: 'manifest.json',
				// }
			]),
			...(!isDev
				? [
						new MiniCssExtractPlugin({
							filename: isDev ? '[name].css' : '[name].[hash].css',
							chunkFilename: isDev ? '[name].css' : '[name].[hash].css'
						})
				  ]
				: [])
		],
		cache: true,
		bail: false,
		devtool: isDev ? 'eval-source-map' : 'source-map',
		devServer: {
			hot: true,
			noInfo: true,
			hotOnly: true,
			overlay: true,
			historyApiFallback: true
		},
		stats: 'errors-only'
	};
};
