const path = require('path');
const webpack = require('webpack');
//抽离css样式，防止将样式打包在js中引起页面样式加载错乱的现象
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//在服务上生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	//输入输出
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, '../server/dist'),
		filename: 'build.js'
	},
	resolve: {
		extensions: ['.vue', '.js', '.json', '.css', '.scss'],
		alias: {
          vue: 'vue/dist/vue.js'
      	}
	},
	//vue的loader，es6的loader，css的，html的
	module: {
		loaders: [{
				test: /\.vue$/,
				loader: 'vue-loader'
		    },
		    {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {presets: ['env', 'stage-2']},
                exclude:/node_modules/
            },
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader?-url'
				})
			},
			{
              test: /\.html$/,
              loader: 'html-loader?interpolate=require&minimize=false'
            }
		]
	},
	//模板copy到服务端生成的是.ejs文件
	plugins: [
		new HtmlWebpackPlugin({ // Also generate a test.html 
			xhtml: true,
			filename: path.resolve(__dirname,'../server/dist/index.ejs'),
			template: './index.html'
		})
	]
}