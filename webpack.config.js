const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function htmlWebpackPluginWebsite(name){
    return new HTMLWebpackPlugin({
        filename: `${name}.html`,
        template: `./src/pages/website/${name}/${name}.pug`})
}

function htmlWebpackPluginUikit(name){
    return new HTMLWebpackPlugin({
        filename: `${name}.html`,
        template: `./src/pages/uikit/${name}/${name}.pug`})
}

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer : {
        port: 8081
    },
    plugins: [        
        htmlWebpackPluginWebsite('index'),
        htmlWebpackPluginWebsite('search-room'),
        htmlWebpackPluginWebsite('room-details'),
        htmlWebpackPluginWebsite('registration'),
        htmlWebpackPluginWebsite('sign-in'),
        htmlWebpackPluginUikit('form-elements'),
        htmlWebpackPluginUikit('cards'),
        htmlWebpackPluginUikit('colors-and-type'),
        htmlWebpackPluginUikit('headers-footers'),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            pretty: true
                        },
                    }
                ] 
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    }, 
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    }
}