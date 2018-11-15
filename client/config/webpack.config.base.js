

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')



module.exports = {
    entry: {
        index: path.resolve(__dirname, '../index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name]-[hash].js',
        chunkFilename: 'js/[name]-[chunkhash].js'
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
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                }),
            },
            {
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'posetcss-loader'
                        },
                        {
                            loader: 'less-loader',
                        }
                    ]
                })
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
        new ExtractTextWebpackPlugin({
            filename: '[name]-[contenthash:8].css',
            disable: process.env.NODE_ENV == 'develop'
        })
    ]
}