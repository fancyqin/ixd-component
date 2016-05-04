var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var plugins = [];
plugins.push(new ExtractTextPlugin('css/[name].css',{disable: false}));
if(process.env.NODE_ENV === 'production'){
    plugins.push([
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]);
} else{
    module.exports.devtool = '#source-map'
}
plugins.push(new CommonsChunkPlugin({
    filename:'js/common.js',
    name:'common'
}));
module.exports = {
    entry:{
        index:'./src/entry/home.js',
        test:'./src/entry/test.js'
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'js/[name].bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.vue$/,
                loader:'vue'
            },
            {
                test:/\.(png|jpg|gif)$/,
                loader:'url-loader?limit=8192&name=img/[name].[ext]?[hash]'
            },
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/dist/,
                loader: 'babel'
            }
        ]
    },
    plugins: plugins,
    vue:{
        loaders:{
            css: ExtractTextPlugin.extract('css'),
            sass: ExtractTextPlugin.extract('css!sass-loader')
        }
    },
    babel:{
        presets:['es2015','stage-0'],
        plugins:['transform-runtime']
    },
    watch:true
};



