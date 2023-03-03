const path=require('path')
module.exports={
  entry:"./src/index.js",
  output:{
    //绝对路径__drimane当前文件所在路径 
    path:path.resolve(__dirname,"./build"),
    filename:"bundle.js"
  }  
} 