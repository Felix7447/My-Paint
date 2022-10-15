const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

/** @type {import('webpack').Configuration} */

module.exports = {// Webpack config needs an entry, output and resolve like this (JS config)
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.js'],   // depending on the extensions you'll have
    },
    module: { 
        rules: [
            {// this is for babel config
                test: /\.m?js$/, // This regular expression is to test mjs & js extensions
                exclude: /node_modules/, //To exclude extensions from node_modules. (if webpack reads this extensions, it can crash the app)
                use: {
                    loader: "babel-loader" // to use babel loader
                }
            },
            {// this is to css config and use css loader
                test: /\.(css|scss)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff",
                        name: "[name].[contenthash].[ext]",
                        outputPath: "./assets/fonts/",
                        esModule: false,
                    }
                },
                type: 'javascript/auto'
            },
            {
                test: /\.(png|svg)/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [//To add plugins
        new HtmlWebpackPlugin({// To add html plugin config
            inject: true,
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].[contenthash].css"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                },
                {
                    from: path.resolve(__dirname, "src", "assets/icons"),
                    to: "assets/icons"
                }
            ]
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new TerserPlugin(),
        ]
    }
}