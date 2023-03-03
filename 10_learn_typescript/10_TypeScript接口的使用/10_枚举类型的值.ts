//类型参数化

function sum<Type>(num1:Type):Type{

return num1
}

// 1.调用方式一：明确的传入类型
sum<number>(20)
sum<{name:string}>({name:'why'})
sum<any[]>(["abc"])


//2.调用方式二：类型推导
sum(50)
sum("abc")