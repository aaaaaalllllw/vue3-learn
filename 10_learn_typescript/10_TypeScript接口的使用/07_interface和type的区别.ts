import { type } from 'os';
// interface IFoo{
//     name:string
// }

// const foo:IFoo={
//     name:'why',
//     age:18
// }

// document.getElementById("app") as HTMLDivElement
// window.addEventListener

// // interface允许有相同的名称会做合并
// interface Window{
//     age:number
// }
// window.age=19
// console.log(window.age)

//type不允许定义相同的别名
type IBar={
    name:string,
    age:number
}

type Window={

}

