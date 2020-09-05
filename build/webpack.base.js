const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    entry: {
      index:path.resolve(__dirname,'../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@':'../src'
        },
        extensions: ['.js', '.css', '.vue']
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.js$/, //匹配JS文件  
            use: 'babel-loader',
            exclude: /node_modules/ //排除node_modules目录
        }, {

            test: /\.vue$/,
            use: ['vue-loader']
        }]
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归我所有'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html') //以根目录的index.html文件为模板，生成dist文件夹下面的index.html文件，并且将打包的js文件自动插入dist/index.html中
        }),
         new VueLoaderPlugin()
    ]
}