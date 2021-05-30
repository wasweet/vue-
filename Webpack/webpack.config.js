const path = require('path');
// 倒入清除插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 倒入添加html文件的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	// 入口
  entry: './src/index.js',
  // 输出
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/app.js',
    },
	 plugins:[
		 new CleanWebpackPlugin(),
		  new HtmlWebpackPlugin({
			  title:'APP',
			  filename:'index.html'
		  })
	 ]
};
