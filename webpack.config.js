const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src", "index.tsx"),
    devtool: 'inline-source-map',
    output: {
       publicPath:'/'
    },
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      port: 3001,
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
        }, ]
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.js', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html")
        })
    ]
}