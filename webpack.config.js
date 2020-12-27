const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //mode: 'production',
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'src/scripts/main.ts'),
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'src/public'),
        filename: 'main.js',
        library: 'myAjax' // access to exported functions from web
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: 'babel-loader'
            // },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            /*{
                test: /\.(png|jpg|jpeg|svg)/,
                use: 'file-loader'
            },*/
            {
                test: /\.(png|jpg|jpeg|svg|gif)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         // 'style-loader',
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'postcss-loader'
            //     ]
            // },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".less"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ]

}