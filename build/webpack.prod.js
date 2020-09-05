const {merge} = require('webpack-merge');
const common = require('./webpack.base');

const uglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    plugins: [

        new uglifyJsPlugin()
    ]

})