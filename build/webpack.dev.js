const {merge} = require('webpack-merge');
const common = require('./webpack.base');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',//方便调试
    devServer: {
    
        contentBase: '../dist',
        port: 8080,
        host: 'localhost',
        open: true,
        hot: true
    }
});