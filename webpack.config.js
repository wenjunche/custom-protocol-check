const path = require("path");
const fs = require('fs');
const webpack = require('webpack');

const HtmlwebpackPlugin = require('html-webpack-plugin');

const localPort = 8081;

module.exports = {
    mode: 'development',
    entry: {
        index: './index.ts',
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [ "style-loader", "css-loader"],
            }            
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js', '.tsx' ],
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Custom Protocol check',
            template: 'index.html',
            filename: 'index.html',
            chunks: ['index']
        })
    ],
    devServer: {
        static : {
            directory : path.join(__dirname, 'res')
        },
        port: localPort,
        hot: true
    }
};