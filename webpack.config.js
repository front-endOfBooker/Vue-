var path = require('path')
var webpack = require('webpack')
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, '/src/main.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist/'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      "vue": "vue/dist/vue.js"
    }
  },
  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: {
      rewrites: [
        // { from: /./, to: '/error.html' }
      ]
    },
    port: 8090,
    compress: true,
    overlay: true
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
        use: [
          {
            loader: "vue-style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
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
    new VueLoaderPlugin()
  ]
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map';
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process_env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin(),
//   ])
// }
