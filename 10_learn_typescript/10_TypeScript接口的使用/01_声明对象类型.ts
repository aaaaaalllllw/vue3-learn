//通过类型(type) 别名来声明对象类型
type infoType={name:string,age:number}

//另外一种方式声明对象:接口interface
//在其中可以定义可选类型
//也可以定义只读属性
interface IInfoType{
    readonly   name:string,
    age:number
    friend?:{
        name:string
    }
}


const info:IInfoType={
    name:'why',
    age:10
}

export {}