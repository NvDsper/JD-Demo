const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
<<<<<<< HEAD
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

=======
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
>>>>>>> setup

module.exports = env => {
  if (!env) {
    env = {}
  }
  let plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './app/views/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ];
  if (env.production) {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
<<<<<<< HEAD
      new ExtractTextPlugin("style.css", {
        ignoreOrder: true
=======
      /* new ExtractTextPlugin("style.css", {
        ignoreOrder: true
      }), */
      new MiniCssExtractPlugin({
        filename: 'style.css'
>>>>>>> setup
      })
    )
  }
  return {
<<<<<<< HEAD
    entry: ['./app/js/viewport.js', './app/js/main.js'],
=======
    entry: ['./app/js/viewport.js', './app/js/main.js'],//加入入口文件，引入自适应方案
>>>>>>> setup
    devServer: {
      contentBase: './dist',
      hot: true,
      compress: true,
      port: 8088,
      clientLogLevel: "none",
      quiet: true
    },
    module: {
      rules: [{
        test: /\.html$/,
        use: ['cache-loader', 'html-loader']
      }, {
        test: /\.vue$/,
        use: [
          'cache-loader',
          'vue-loader'
        ]
      }, {
        test: /\.scss$/,
        oneOf: [{
          resourceQuery: /module/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]_[hash:base64:5]'
              }
            }, {
              loader: 'px2rem-loader',
              options: {
                remUnit: 40,
                remPrecision: 8
              }
            },
            'sass-loader'
          ]
        }, {
          use: [
            'vue-style-loader',
            'css-loader', {
              loader: 'px2rem-loader',
              options: {
                remUnit: 40,
                remPrecision: 8
              }
            },
            'sass-loader'
          ]
        }],
      }, {
<<<<<<< HEAD
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
=======
        /* test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'] */
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
>>>>>>> setup
      }]
    },
    resolve: {
      extensions: [
        '.js', '.vue', '.json'
      ],
      //使用vue完整版，包括编译器和运行时的版本
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
<<<<<<< HEAD
    mode: 'development',
=======
    mode: 'production',
>>>>>>> setup
    plugins,
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: 'dev' === WEBPACK_ENV ? '/dist/' : '//jdfinance.ycnzdz.cn/JDFinance/dist/',        //文件引用目录
    }
  }
};