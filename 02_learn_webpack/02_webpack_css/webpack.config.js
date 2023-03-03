const path = require('path')
module.exports = {
  entry: "./src/index.js",
  output: {
    //绝对路径__drimane当前文件所在路径 
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,//正则表达式
        //1.loader的写法(语法糖)
        // loader:"css-loader"

        // 2.完整写法
        use: [
          // {loader:"css-loader"}
          "style-loader",
          "css-loader",
          "postcss-loader"

    ]
  },{
  test: /\.(css|less)$/,
    use: [
      // {loader:"css-loader"}
      "style-loader",
      "css-loader",
      "less-loader"
    ]
}
    ]
  }
} 