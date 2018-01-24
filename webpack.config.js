var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry:  __dirname + "/app/index.js",
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  resolve:{
    extensions:['.js','.jsx']
	},
  devtool: 'eval-source-map',
  devServer: {
  	proxy: {
      // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
      // koa 代码在 ./mock 目录中，启动命令为 npm run mock
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    },
    contentBase: "./app",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port:8080
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
			  include: /(app)/,
			  loader: "style-loader!css-loader!sass-loader!postcss-loader"
			},
			{ 
			 	test:/\.(png|gif|jpg|jpeg|bmp)$/i, 
			 	loader:'url-loader?limit=8000' 
			},  // 限制大小8kb
			{ 
				test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
				loader:'url-loader?limit=8000'
			},// 限制大小小于8kb
	    {
        test: /\.css$/,
        include: /(app)/,
        loader: "style-loader!css-loader"
	    },
	    {
        test: /\.less$/,
        loader:"style-loader!css-loader!less-loader"
	    }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
        template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    // 打开浏览器
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),
    new webpack.HotModuleReplacementPlugin(),//热加载插件
    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
	]
}
