//函数的重载：函数额名称相同，但是参数不同的几个函数，就是函数的重载
function add(num1:number,num2:number) :number

function add(num1:string,num2:string):string

//函数的实现更加宽广
function add(num1:any,num2:any):any{
    return num1+num2
}

const result=add(20,30)
const result2=add("abc","cbd")

//在函数的重载中，实现函数是不能直接调用，要看是否有改声明
//报错
add({name:'why'},{age:'18'})

export {}