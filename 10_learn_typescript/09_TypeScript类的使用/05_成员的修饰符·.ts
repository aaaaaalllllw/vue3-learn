// class Person{
//     private name:string=""
//     getName(){
//         return this.name
//     }
//     setName(newName:string){
//         this.name=newName
//     }
// }
// const p=new Person()
// console.log(p.getName())
// console.log(p.setName())


//protected：在类内部和子类中都可以访问
class Person{
    protected name:string='123'
}

class Student extends Person{
    getName(){
        return this.name
    } 
}

const stu=new Student()
console.log(stu.getName())
export {}