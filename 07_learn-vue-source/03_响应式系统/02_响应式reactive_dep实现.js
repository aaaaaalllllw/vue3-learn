class Dep{
    constructor(){
        this.subscribers=new Set()
    }
    addEffect(item){
        this.subscribers.add(item)
    }
    notify(){
        this.subscribers.forEach(item=>{
            item()
        })
    }
}

const info={counter:100}


function doubleCounter(){
    console.log(info.counter*2)
}

function powerCounter(){
    console.log(info.counter*info.counter)
}

const dep=new Dep()
dep.addEffect(doubleCounter)
dep.addEffect(powerCounter)

info.counter++
dep.notify()
// doubleCounter()