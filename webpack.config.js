const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'eval-cheap-module-source-map',
    entry: path.resolve(__dirname, 'src/frontend/scripts/ajax.js'),
    output: {
        path: path.resolve(__dirname, 'src/public'),
        filename: 'main.js',
        library: 'myAjax' // access to exported functions from web
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            /*{
                test: /\.(png|jpg|jpeg|svg)/,
                use: 'file-loader'
            },*/
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ]

}