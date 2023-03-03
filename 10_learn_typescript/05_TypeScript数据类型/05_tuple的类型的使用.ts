

//1.数组的弊端
//any数组，数据读取的时候不知道取出的数据类型
// const info:any[]=["why",18,1.88]
// const  infoObj={
//     name:'why',
//     age:18,
//     height:1.99
// }


//2.元组的特点

const info:[string,number,number]=['why',18,1.88]
const age=info[1]

console.log(age.length)

export {}