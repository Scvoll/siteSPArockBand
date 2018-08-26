const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: "./client/src/index.js",
    output: {
        path: path.resolve(__dirname,'./build'),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, '/client'),
        open: true,

    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env','react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : "style-loader",
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff2?|ttf|otf|eot|svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name: '[path][name]-[hash].[ext]'}
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin ({
            filename: "style.css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebPackPlugin({
            inject: true,
            template: './client/index.html',
            favicon: './client/favicon.ico'
        })
    ]
};
