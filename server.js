var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');
var path = require('path');
//代理服务器
var proxy = [{
	path: '/*/*', //必须得有一个文件地址，如果顶层文件夹名字不同，则用/*代替
	target: 'http://cangdu.org',
	host: 'cangdu.org',
	secure: false
}];
var server = new WebpackDevServer(webpack(config), {
	publicPath: "./build",
	//publicPath: config.output.publicPath,
	progress: true,
	hot: true,
	contentBase: path.join(__dirname, 'build'),
	stats: {
		colors: true,
	}
});

/*//将其他路由，全部返回index.html
server.app.get('*', function(req, res) {
	res.sendFile('./index.html')
});*/
server.listen(8088, function() {
	console.log('正常打开8088端口') 
});
