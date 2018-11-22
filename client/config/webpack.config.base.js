

const path = require('path')
//const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = ()=> process.env.NODE_ENV == 'development'

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name]-[hash].js',
        chunkFilename: 'js/[name]-[chunkhash].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
		alias: {
			//imgUrl: path.resolve(__dirname, '../src/images/'),
			//'vue$': 'vue/dist/vue.common.js',
			//'@': path.resolve(__dirname, '../src')
		}
	},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, '../node_modules')
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf)(\?[a-z0-9=\.]+)?$/,
                loader: 'file-loader?publicPath=../&outputPath=fonts/'
            },
            {
                test: /\.css$/,
                // use: ExtractTextWebpackPlugin.extract({
                //     fallback: 'style-loader',
                //     use: ['css-loader']
                // }),
                use: [
                    process.env.NODE_ENV == 'development' ? 'style-loader': MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                // use: ExtractTextWebpackPlugin.extract({
                //     fallback: 'style-loader',
                //     use: [
                //         {
                //             loader: 'css-loader',
                //             options: {
                //                 minimize: true
                //             }
                //         },
                //         {
                //             loader: 'postcss-loader',
                //             options: {
                //                 plugins: () => [require('autoprefixer')]
                //             }
                //         },
                //         {
                //             loader: 'less-loader',
                //         }
                //     ]
                // })
                use: [
                    process.env.NODE_ENV == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: ()=> [require('autoprefixer')]
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: 'index.html',
            //chunks: [],
            //chunksSortMode: 'manual'
        }),
        new VueLoaderPlugin(),
        // new ExtractTextWebpackPlugin({
        //     filename: '[name].css',
        //     disable: process.env.NODE_ENV === 'develop'
        // })
        // 热加载不能用，要用在production
        // new MiniCssExtractPlugin({
        //     filename: mode() ? '[name].css' : '[name]-[contenthash:8].css',
        //     chunkFilename: mode() ? '[id].css' : '[id]-[hash].css'
        // })
    ]
}
