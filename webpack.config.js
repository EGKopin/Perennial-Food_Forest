const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        host: 'localhost',
        port: 8080,

        static: {
            publicPath: '/',
            directory: path.resolve(__dirname, 'build'), 
         },
        // inline: true,
     },
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }
    ]
},
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })],
};