class Person{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    eating(){
        console.log("eating")
    }
}

class Student extends Person{
    sno:number
    
    studying(){
       console.log("studying")
    }

    //构造器
    constructor(name:string,age:number,sno:number){
        //super可以调用父类构造方法
        super(name,age)
        this.sno=sno
    }

    //重写
    eating() {
        //先调用父类
        super.eating()
        console.log("student eating");
        
    }
}


class Teacher extends Person{
    title:string=''
    teaching(){
        console.log('teaching')
    }
}

const stu=new Student('熊猫',18,1)
stu.eating()