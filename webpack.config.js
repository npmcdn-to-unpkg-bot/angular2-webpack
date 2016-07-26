var webpack = require("webpack");
var path    = require("path");

module.exports = {
    entry: {
        bundle: ["./build/main.js"]
    },

    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "[name].js"
    },

    resolve: {
        root: __dirname,
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts']
    },


    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    }
};
