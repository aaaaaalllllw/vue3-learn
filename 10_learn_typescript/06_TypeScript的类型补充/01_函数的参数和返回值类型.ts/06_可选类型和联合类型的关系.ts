
//一个参数是可选类型，它其实类似于这个参数是 类型|undefined 的联合类型
function foo(message?:string){
    console.log(message);
    
}

printMessageLength("Hello World")
printMessageLength("哈哈哈")