const path=require("path")
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:'./src/main.ts',
    output:{
        path:path.resolve(__dirname,"./dist"),
        filenmae:"bundle.js"
    },
    resolve:{
        extensions:[".ts",".js",".cjs",".json"]
    },
    module:{
        rules:[
            {
                test:'/\.ts$/',
                loader:'ts-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
}