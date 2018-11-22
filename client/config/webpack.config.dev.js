
process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        inline: true,
        hot: true,
        port: 8888,
        stats: 'errors-only',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: 'file-loader?name=[name].[ext]&outputPath=images/'
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"',
            },
        })
    ]
})

