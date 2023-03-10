class Person {
    //1.只读属性可以在构造器中赋值，赋值之后就不可以修改
    //2.属性本身不能进行修改，但是如果它是对象类型，对象中的属性是可以修改的
    readonly name:string
    age?:number=0
    readonly friend?:Person
    constructor(name:string,friend?:Person){
        this.name=name
        this.friend=friend
    }
}
const p=new Person("why",new Person("kobe"))
console.log(p.name)
console.log(p.friend)

//不可以直接修改friend
//p.friend=new Person("james")
if(p.friend){
    p.friend.age=30
}


export {}

// 类似const，不能整个修改，但是里面的属性可以修改
