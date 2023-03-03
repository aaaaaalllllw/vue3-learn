const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")
const CopyWebpackPlugin  = require("copy-webpack-plugin")
module.exports = {
  mode:'development',
  devtool:"source-map",
  entry: "./src/index.js",
  output: {
    //绝对路径__drimane当前文件所在路径 
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.(css|less)$/,
      use: [
        // {loader:"css-loader"}
        "style-loader",
        "css-loader",
        "less-loader"
      ]
    },
    // {
    //   test: /\.(jpe?g|png|gif|svg)$/,
    //   use: {
    //     loader: 'url-loader',
    //     options: {
    //       //outputPath: "img",
    //       name: '[name]_[hash:6].[ext]',
    //       limit:100*1024
    //     }
    //   }
    // }
    {
      test: /\.(jpe?g|png|gif|svg)/,
      type: "asset",
      generator: {
        filename: "img/[name]_[hash:6][ext]"
      },
      parser: {
        dataUrlCondition: {
          maxSize: 100 * 1024
        }
      }
    },
    // {
    //   test:/\.(eot|ttf|woff2?)$/,
    //   use:{
    //     loader:"file-loader",
    //     options:{
    //       name:"font/[name]_[hash:6].[ext]"
    //     }
    //   }
    // }
    {
      test: /\.(eot|ttf|woff2?)$/,
      type: 'asset/resource',
      generator: {
        filename: 'font/[name]_[hash:8].[ext]'
      }
    },
    {
      test:/\.js$/,
      loader:'babel-loader'
      // use:{
      //   loader:'babel-loader',  
      //   options:{
      //     // plugins:[
      //     //   "@babel/plugin-transform-arrow-functions",
      //     //   "@babel/plugin-transform-block-scoping"
      //     // ]
      //     presets:[
      //       "@babel/preset-env"
      //     ]
      //   }
      // }
    }
    ]
  },
  plugins: [
    //一个个插件对象
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: './',
          globOptions: {
            ignore: [
              '**/index.html'
            ]
          }
        }
      ]
    })


  ]
} 