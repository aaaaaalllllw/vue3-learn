//从广泛的元素，到更加细节的元素叫断言

//类型断言as
const el=document.getElementById("why") as HTMLImageElement

el.src="url地址"

class Person {

}


class Student extends Person{
    studying(){

    }
}


function sayHello(p:Person){
    (p as Student).studying()
}

const stu=new Student()


sayHello(stu)

//3.了解：as any/unkown
const message="Hello World"
const num:number=(message as unknown) as number

export {}