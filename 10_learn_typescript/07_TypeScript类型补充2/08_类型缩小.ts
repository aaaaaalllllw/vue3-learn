//1.缩小范围
type IDType=number|string
function printID(id:IDType){
    if(typeof id=== 'string' ){
        console.log(id.toUpperCase());
        
    }else{
        console.log(id)
    }
}


//2.平等的类型缩小(==== == !== !=/switch)
type Direction='left'|'right'|'top'|'bottom'
function printDirection(direction:Direction) {
    // if(direction ==='left'){
    //     console.log(direction);
    // }else if

    // switch(direction){
    //     case 'left':
    //         console.log(direction)
    //     break;
    //     case ...
    // }
}
export {}


//3.instanceof  使用的是class的原型链
function printTime(time:string|Date){
    if(time instanceof Date){
        console.log(time.toUTCString());
        
    }else{
        console.log(time);
        
    }
}


class Student{
    studying(){

    }
}

class Teacher{
    teaching(){

    }
}

function work(p:Student|Teacher){
    if(p instanceof Student){
        p.studying()
    }else{
        p.teaching()
    }
}


//4.in,就对象判断属性
type Fish={
    swimming:()=>void
}

type Dog={
    runing:()=>void
}
 
function  walk(animal:Fish|Dog) {
    if('swimming' in animal){
        animal.swimming()
    }else{
        animal.runing()
    }
}

const fish:Fish={
    swimming(){
        console.log('swimming');
    }
}

walk(fish)
