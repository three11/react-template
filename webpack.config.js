const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');

const resolve = path.resolve.bind(__dirname);

const PATHS = {
	src: resolve('./src'),
	root: resolve('./'),
	assets: resolve('./src/assets'),
	utilities: resolve('./src/utilities'),
	components: resolve('./src/components'),
	containers: resolve('./src/containers')
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
		entry: ['./src/index.js'],
		output: {
			path: PATHS.dist,
			filename: isDev ? '[name].js' : '[name].[chunkhash].bundle.js',
			publicPath: '/'
		},
		module: {
			rules: [babelConfig, htmlConfig, cssConfig, assetsConfig, svgConfig]
		},
		resolve: {
			alias: {
				'@src': PATHS.src,
				'@root': PATHS.root,
				'@assets': PATHS.assets,
				'@utilities': PATHS.utilities,
				'@components': PATHS.components,
				'@containers': PATHS.containers
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
