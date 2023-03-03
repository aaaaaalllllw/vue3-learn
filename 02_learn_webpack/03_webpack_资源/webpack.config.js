const { type } = require('os')
const path = require('path')
const {CleanWebpackPlugin}=require("clean-webpack-plugin")

module.exports = { 
  entry: "./src/index.js",
  output: {
    //绝对路径__drimane当前文件所在路径 
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js"
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
      test:/\.(jpe?g|png|gif|svg)/,
      type:"asset",
      generator:{
        filename:"img/[name]_[hash:6][ext]"
      },
      parser:{
        dataUrlCondition:{
          maxSize:100*1024
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
      test:/\.(eot|ttf|woff2?)$/,
      type:'asset/resource',
      generator:{
        filename:'font/[name]_[hash:8].[ext]'
      }
    }
    ]
  }
} 