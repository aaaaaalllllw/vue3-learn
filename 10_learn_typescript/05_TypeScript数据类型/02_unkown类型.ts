function foo() {
    return 'hello'
}

function bar(){
    return 123
}


//any可以赋值给任意类型
//unkown只能赋值给any和know类型

let flag=true
let result:unknown
if(flag){
    result=foo()
}else{
    result=bar()
}


let message:string =result

export {}