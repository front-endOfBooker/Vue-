var path = require('path');
var webpack = require('webpack');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
// 引入html自动插入打包好的文件
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取css(extract-text-webpack-plugin目前自动安装的是3.0.2版本,无法适配webpack4.x,需要安装extract-text-webpack-plugin@next)
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// 清除dist
var CleanWebpackPlugin = require('clean-webpack-plugin');
// 压缩css
// var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 压缩js
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, '/src/main.js')
  },
  output: {
    filename: 'bundle_[hash:4].js',
    path: path.join(__dirname, '/dist/'),
    // 打包的静态文件引用的基础路径
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      "vue": "vue/dist/vue.js"
    }
  },
  devtool: '#eval-source-map',
  devServer: {
    // 非webpack打包的静态资源目录服务器资源的根目录,默认值为'/'
    contentBase: '/',
    // dev中打包后文件在内存的位置
    publicPath: '/',
    historyApiFallback: true,
    port: 8090,
    compress: true,
    overlay: true,
    inline: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'vue-style-loader',
          use: 'css-loader',
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.jpg|png|gif/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:4].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '/index.html'),
      inject: 'body'
    }),
    new ExtractTextWebpackPlugin({
      filename: '[name]_[hash:4].css'
    }),
    // new OptimizeCssAssetsPlugin({
    //   cssProcessor: require('cssnano'),
    //   cssProcessorOptions: {
    //     discardComments: {
    //       removeAll: true
    //     }
    //   },
    //   canPrint: true
    // })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // webpack4.x之后,uglifyjs-webpack-plugin已不是webpack的内置,需要单独使用
    new UglifyJsPlugin(),
    new CleanWebpackPlugin(),
  ])
}
