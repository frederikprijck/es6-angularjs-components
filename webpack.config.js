var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: { loader: 'html-loader' }
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'ng-annotate-loader'
                    },
                    {
                        loader: 'babel-loader',
                        options: { presets: ['es2015'] }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 9000,
        watchContentBase: true
    }
};