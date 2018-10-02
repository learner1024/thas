const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'none',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 9000
    },
    entry: {
        "thas": './src/app.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Tulip HortAgro Services',
            filename: 'index.html',
            template: './src/index.pug'
        })
    ],
    output: {
        filename: '[name].app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.pug$/, loader: 'pug-loader' },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|jpg|svg|gif)$/, use: ['file-loader'] }
        ]
    }
}