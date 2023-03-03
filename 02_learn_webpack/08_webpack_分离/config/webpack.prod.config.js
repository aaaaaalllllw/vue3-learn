const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const commonConfig=require('./webpack.comm.config')
const {merge}=require('webpack-merge')
module.exports=merge(commonConfig,{
    mode: 'production',
    plugins:[
        new CleanWebpackPlugin()
      ]
})