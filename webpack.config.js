const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        //publicPath: 'build/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            })
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 40000
                    }
                },
                'image-webpack-loader'
            ]
        }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/views/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'checkout.html',
            template: 'src/views/checkout.html',
        }),

        new CleanWebpackPlugin(['build']),

        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:8080/'
            },
            {
                reload: false
            }
        )
    ]
};