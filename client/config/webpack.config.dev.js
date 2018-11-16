

const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        hot: true,
        port: 8888,
        proxy: {
            
        }
    }
})