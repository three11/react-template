const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const babelConfig = {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader'
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
	test: /(\.css|\.scss)$/,
	use: ExtractTextPlugin.extract({
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
					plugins: [
						require('postcss-easy-import'),
						require('postcss-url')({
							url: 'rebase'
						}),
						require('postcss-utilities'),
						require('postcss-flexbugs-fixes'),
						require('autoprefixer')()
					],
					sourceMap: true
				}
			},
			{
				loader: 'sass-loader',
				options: {
					sourceMap: true
				}
			}
		],
		fallback: 'style-loader'
	})
};

const assetsConfig = {
	test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot|wav|mp3|mp4)(\?.*$|$)/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: '[hash].[ext]'
			}
		}
	]
};

module.exports = {
	module: {
		rules: [babelConfig, htmlConfig, cssConfig, assetsConfig]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new ExtractTextPlugin({
			filename: './main.css',
			allChunks: true
		})
	],
	cache: true,
	bail: false,
	devtool: 'source-map',
	stats: 'errors-only',
	devServer: {
		stats: 'errors-only'
	}
};
