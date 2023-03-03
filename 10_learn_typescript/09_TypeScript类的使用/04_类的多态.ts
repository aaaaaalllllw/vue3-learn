class Animal{
    action(){
        console.log('action')
    }
}

class Dog extends Animal{
    action() {
        console.log('dog running')
    }
}

class Fish extends Animal{
    action() {
         console.log('fish swimming');
         
    }
}

//多态的目的是为了写出更加具备通用的代码
function makeActions(animals:Animal[]){
    animals.forEach(animal=>{
        animal.action()
    })
}

makeActions([new Dog(),new Fish()])