
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
    resolve:{
    	extensions:['.js','.jsx']
	},
    module: {
        rules: [
        {
	        test: /(\.jsx|\.js)$/,
	        exclude: /node_modules/,
	        loader: "babel-loader"
   		},
        {
			test: /\.scss$/,
        	use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                    loader: "css-loader"
                },'sass-loader']    
                })
		},
		{ 
			 	test:/\.(png|gif|jpg|jpeg|bmp)$/i, 
			 	loader:'url-loader?limit=4000,&name=images/[hash:8].[name].[ext]' 
			},  // 限制大小8kb
			{ 
				test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
				loader:'url-loader?limit=8000'
			},// 限制大小小于8kb
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader"
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