const path = require('path')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

const Dotenv = require('dotenv-webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        before: function(app, server) {
            server._watch('./dist/**/*.html')
        },
        contentBase: path.resolve(__dirname, 'src'),
        watchContentBase: true,
        compress: true,
        port: 3000
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 
                    'css-loader?url=false', 
                    {
                        loader: 'postcss-loader',
                        options: {plugins: postCSSPlugins}
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/'
                    }
                }],
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new Webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jQuery',
            'window.jQuery': 'jquery'
        }),
        new Dotenv()
    ]
}