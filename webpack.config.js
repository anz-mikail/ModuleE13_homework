const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        static: './dist',
        port: 9000,
        hot: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            title: 'Development',
            }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                ],
            },
            {
                test: /\.pug$/,
                use: 'pug-loader',
            },
        ]
    },
};