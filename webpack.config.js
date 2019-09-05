/* eslint-disable no-mixed-spaces-and-tabs */

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
		MiniCssExtractPlugin.loader,
		'css-loader',
		{
			loader: 'postcss-loader',
			options: {
				plugins: loader => {
					if (!loader.hot) {
						postcssPlugins.push(
							require('cssnano')({
								discardComments: {
									removeAll: true
								}
							})
						);
					}

					return postcssPlugins;
				}
			}
		},
		'sass-loader'
	)
};

const fontsConfig = {
	test: /\.(eot|otf|ttf|woff|woff2)$/,
	use: 'file-loader'
};

const svgConfig = {
	test: /\.svg$/,
	issuer: /\.jsx?$/,
	use: [
		{
			loader: 'babel-loader'
		},
		{
			loader: 'react-svg-loader',
			options: {
				jsx: true
			}
		}
	]
};

const svgCSSConfig = {
	test: /\.svg$/,
	issuer: /\.s?css?$/,
	use: [
		{
			loader: 'url-loader',
			options: {
				limit: 10 * 1024
			}
		}
	]
};

const imagesConfig = {
	test: /\.(jpg|png|gif|ico)$/,
	use: [
		{
			loader: 'url-loader',
			options: {
				limit: 10 * 1024
			}
		},
		{
			loader: 'image-webpack-loader',
			options: {
				mozjpeg: {
					// If using on Linux, set disabled to false
					enabled: true,
					progressive: true
				},
				gifsicle: {
					interlaced: false
				},
				optipng: {
					optimizationLevel: 7
				},
				pngquant: {
					quality: [0.65, 0.9],
					speed: 4
				}
			}
		}
	]
};

const mediaConfig = {
	test: /\.(mp3|mp4|webm)$/,
	use: {
		loader: 'url-loader',
		options: {
			limit: 10000
		}
	}
};

module.exports = (env = {}) => {
	const isDev = env.dev;

	return {
		entry: ['./src/index.js'],
		output: {
			path: PATHS.dist,
			filename: isDev ? '[name].js' : '[name].[chunkhash].bundle.js',
			chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash].chunk.js',
			publicPath: '/'
		},
		module: {
			rules: [babelConfig, htmlConfig, cssConfig, fontsConfig, svgConfig, svgCSSConfig, imagesConfig, mediaConfig]
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
				inject: true,
				...(isDev
					? {}
					: {
							minify: {
								removeComments: true,
								collapseWhitespace: true,
								removeRedundantAttributes: true,
								useShortDoctype: true,
								removeEmptyAttributes: true,
								removeStyleLinkTypeAttributes: true,
								keepClosingSlash: true,
								minifyJS: true,
								minifyCSS: true,
								minifyURLs: true
							}
					  })
			}),
			new DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify(isDev ? 'development' : 'production')
				}
			}),
			new MiniCssExtractPlugin({
				filename: isDev ? '[name].css' : '[name].[hash].css',
				chunkFilename: isDev ? '[id].css' : '[id].[hash].css'
			}),
			...(isDev
				? [new HotModuleReplacementPlugin()]
				: [
						new OfflinePlugin({
							relativePaths: false,
							publicPath: '/',
							appShell: '/',
							caches: {
								main: [':rest:'],
								additional: ['*.chunk.js']
							},
							safeToUseOptionalCaches: true
						}),
						new WebpackPwaManifest({
							name: 'React Template',
							short_name: 'React TPL',
							description: 'A React application!',
							background_color: '#cccccc',
							theme_color: '#333333',
							inject: true,
							ios: true,
							icons: [
								{
									src: resolve('src/assets/icon-512x512.png'),
									sizes: [72, 96, 128, 144, 192, 384, 512]
								},
								{
									src: resolve('src/assets/icon-512x512.png'),
									sizes: [120, 152, 167, 180],
									ios: true
								}
							]
						})
				  ])
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
		},
		optimization: isDev
			? {
					splitChunks: {
						chunks: 'all'
					}
			  }
			: {
					minimize: true,
					minimizer: [
						new TerserPlugin({
							terserOptions: {
								warnings: false,
								compress: {
									comparisons: false
								},
								parse: {},
								mangle: true,
								output: {
									comments: false,
									ascii_only: true
								}
							},
							parallel: true,
							cache: true,
							sourceMap: true
						})
					],
					nodeEnv: 'production',
					sideEffects: true,
					concatenateModules: true,
					splitChunks: {
						chunks: 'all',
						minSize: 30000,
						minChunks: 1,
						maxAsyncRequests: 5,
						maxInitialRequests: 3,
						name: true,
						cacheGroups: {
							commons: {
								test: /[\\/]node_modules[\\/]/,
								name: 'vendor',
								chunks: 'all'
							},
							main: {
								chunks: 'all',
								minChunks: 2,
								reuseExistingChunk: true,
								enforce: true
							}
						}
					},
					runtimeChunk: true
			  }
	};
};
