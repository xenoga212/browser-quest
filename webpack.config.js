const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const config = {
    // Reload on File Change
    watch: true,
    // entry
    entry: ['./src/js/index.js', './src/sass/main.scss'],
    
    // output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },

    // Loaders
    module: {
        rules: [
            // Javascript files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            
            // CSS files

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader'
                ],
            }
        ]
    },

    // plugins
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),

        new htmlWebpackPlugin({
            template: './src/player.html',
            filename: 'player.html',
        }),

        new webpack.LoaderOptionsPlugin({ 
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name].bundle.css'
        })

    ]

   
};

module.exports = config;