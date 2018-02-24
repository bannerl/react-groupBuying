
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: __dirname + "/app/index.js", 
    output: {
        path: __dirname + "/build",
        filename: "js/[name].[hash].js"
    },
    devtool: 'eval-source-map', 
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    resolve:{
    	extensions:['.js','.jsx']
	},
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, 
        {
			test: /\.scss$/,
        	use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                    loader: "css-loader",
                    options: {
                        modules: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                },'sass-loader']    
                })
		},
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                },{
                    loader: "postcss-loader"
                }]
            })
        }]
    },
    plugins: [
       new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(), //热加载插件
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("/css/style.css"),
        new CleanWebpackPlugin('build/*.*', {
		    root: __dirname,
		    verbose: true,
		    dry: false
		})
    ],
};