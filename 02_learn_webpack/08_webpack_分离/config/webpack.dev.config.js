const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const commonConfig=require('./webpack.comm.config')
const {merge}=require('webpack-merge')
module.exports=merge(commonConfig,{
    mode: 'development',
     
  devtool: "source-map",
  devServer:{
    //找资源的地方
    // contentBase:'./public',
    hot:true,
    // host:'0.0.0.0', 
    port:777,
    compress:true,
    proxy:{
      '/api':{
        target:'http://localhost:8888',
        pathWrite:{
          "^api":""
        }
      }
      
    }
  },

})