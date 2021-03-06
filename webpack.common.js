const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
    entry: {
        polyfills: './src/polyfills.js',
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
    },
    plugins: [
        // new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     title: 'Caching'
        // }),
    ],
    optimization: {
        moduleIds: 'hashed',
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "vendor",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },

    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
};