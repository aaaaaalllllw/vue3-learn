import { type } from "os"

//1.函数作为参数时，在参数中如何编写类型
function foo() {
    
}

type FooFnType=()=>void
function bar(fn:FooFnType){
    fn()
}

//2.定义变量时，编写函数类型
type AddFnType=(num1:number,num2:number)=>number

const add:AddFnType=(a1:number,a:number)=>{
    return a+a1
}