var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
        './src/index.js',
        './style/app.scss'
    ],
    output: {
        path: path.resolve(__dirname, "public/assets/"),
        publicPath: '/public/assets/',
        filename: 'app.js'
    },
    module: {
        loaders: [{
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }

        ]
    },
    /** Uncomment the lines below to enable uglified code, will cause slower build times **/
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         sourceMap: true,
    //         mangle: false
    //     })
    // ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};