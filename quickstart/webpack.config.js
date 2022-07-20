const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.pdf$/,
                type: 'asset/resource',
                generator: {filename: 'assets/pdfs/[name][ext]'}
            },
            {
                test: /\.png$/,
                type: 'asset/resource',
                generator: {filename: 'assets/stamps/[name][ext]'}
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};