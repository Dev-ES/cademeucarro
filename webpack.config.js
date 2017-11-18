const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const WatchIgnorePlugin = require('watch-ignore-webpack-plugin')

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/js')
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: [path.resolve(__dirname, "node_modules")],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { 
                            loader: "css-loader", 
                            options: { 
                                sourceMap: true, 
                                importLoaders: true 
                            } 
                        },
                        'resolve-url-loader',
                        { 
                            loader: "sass-loader", 
                            options: { 
                                sourceMap: true, 
                                sourceMapContents: true 
                            },
                        }
                    ]
                })
            },
            {
                test: /.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../images/'
                        }
                    },
                    {
                        loader: "image-webpack-loader"
                    }
                ]
            },
            { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
            { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
            { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
            { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/main.css"),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['public'] }
        })
    ]
}