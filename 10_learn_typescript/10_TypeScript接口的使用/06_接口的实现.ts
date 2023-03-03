import { log } from "console"

interface IEat{
    eating:()=>void
}
interface ISwim{
    swimmig:()=>void
}

//类实现接口
class Animal extends implements IEat,ISwim{
    swimmig(){
        console.log("Fish Swimming")
    }

    eating(){
        console.log("Fish Eating")
    }

}

//编写公共的API,面向接口编程
