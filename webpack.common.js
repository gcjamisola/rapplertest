const path = require('path');

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
          }
        ]
    }
};

