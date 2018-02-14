const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

 module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: './dist/[name].bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                'css-loader',
                'postcss-loader',
                'sass-loader'
              ]
            })
          }
        ]
    },
    plugins: [
      new ExtractTextPlugin('dist/style.css')
    ],
      
};

