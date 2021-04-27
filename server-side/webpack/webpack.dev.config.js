const path = require("path");
const webpackNodeExternals = require('webpack-node-externals');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const config = {
    // Inform webpack that we're building a bundle
    // for nodeJS, rather than for the browser
    mode: 'development',
    target: 'node',

    // Tell webpack the root file of our
    // server application
    entry: {
        main: path.resolve(__dirname, './index.js'),
    },

    // Tell webpack where to put the output file
    // that is generated
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'build')
    // },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
    },
    modules: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ],
    },
    plugins: [
        /* ... */
        new CleanWebpackPlugin(),
    ],

    externals: [webpackNodeExternals()] // in order to ignore all modules in node_modules folder
}

module.exports = config;