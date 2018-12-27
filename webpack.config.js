const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');

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
	containers: resolve('./src/js/containers'),
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

const hotConfig = {
	test: /\.(js|jsx)$/,
	include: /node_modules/,
	use: ['react-hot-loader/webpack']
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

const cssConfig = {
	test: /\.css$/,
	use: ['style-loader', 'css-loader']
};

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
		entry: ['./src/js/index.js'],
		output: {
			path: PATHS.dist,
			filename: isDev ? '[name].js' : '[name].[chunkhash].bundle.js',
			publicPath: '/'
		},
		module: {
			rules: [babelConfig, hotConfig, htmlConfig, cssConfig, assetsConfig, svgConfig]
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
				'@containers': PATHS.containers,
				'@nodeModules': PATHS.nodeModules
			},
			extensions: ['*', '.js', '.jsx'],
			modules: ['src', 'node_modules']
		},
		plugins: [
			new HtmlWebPackPlugin({
				template: './src/index.html',
				filename: './index.html',
				inject: true
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
			...(isDev ? [new HotModuleReplacementPlugin()] : [])
		],
		cache: true,
		bail: false,
		devtool: isDev ? 'eval-source-map' : false,
		devServer: {
			noInfo: true,
			historyApiFallback: true,
			contentBase: './dist',
			hot: true
		},
		stats: 'errors-only',
		performance: {
			hints: false
		}
	};
};
