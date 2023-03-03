type Person={
    name:string
    friend?:{
        name:string
        age?:number
    }
}


const info:Person={
    name:'kobe',
    friend:{
        name:'james'
    }
}
console.log(info.name)
console.log(info.friend?.age)
console.log(info.friend?.name)

export {}