const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');

const APP_FILE = path.resolve(APP_PATH, 'components/root.jsx');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build/js');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
	    'webpack/hot/only-dev-server',
		 APP_FILE
	],
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js',
		chunkFilename: '[name].[chunkhash:5].min.js',
		// chunkName 是未被列在entry中，却又需要打包出来的文件命名配置，在按需加载（异步）模块时会遇到，这样的文件是没有被列在entry中的，
        },
/*    devServer: {
    	contentBase: path.join(__dirname, 'build'),
    	port: 3333

    },*/
	module: {
		loaders: [{
			test: /\.js$/,
			exclude:/^node_modules$/,
			use: ['babel-loader'],
			include: [APP_PATH]
		},
		{
            test: /\.css$/,
            exclude: /^node_modules$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use:['css-loader', 'autoprefixer-loader']
            }),
         
        },
		{
			test: /\.jsx$/,
			exclude:/^node_modules$/,
			use: ['jsx-loader', 'babel-loader'],
			include: [APP_PATH]
		}]
	},
	plugins: [
        new webpack.DefinePlugin({
        	'process.env': {
        		NODE_ENV: JSON.stringify('development')
        	}
        }),
        new HtmlWebpackPlugin({
        	filename: '../index.html',
        	template: './src/template/index.html',
        	hash: false
        }),
         new ExtractTextPlugin("styles.css"),
         new webpack.HotModuleReplacementPlugin()
        
	],
	resolve: {
		extensions: ['.js','.jsx']   // 配置默认扩展名
	}
}

