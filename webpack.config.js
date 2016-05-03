var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var plugins = [];
plugins.push(new ExtractTextPlugin('style.css',{disable: false}));
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

module.exports = {
    entry:'./src/main.js',
    output: {
        path: './dist',
        publicPath:'dist/',
        filename: 'bundle.js'
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



