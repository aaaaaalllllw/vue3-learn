class Dep{
    constructor(){
        this.subscribers=new Set()
    }
    addEffect(effect){
        this.subscribers.add(effect)
    }
    depend(){
     if(activeEffect){
        this.subscribers.add(activeEffect)
     }
    }
    notify(){
        this.subscribers.forEach(effect=>{
            effect()
        })
    }
}


let activeEffect=null
function watchEffect(effect){
    activeEffect=effect
    effect()
    activeEffect=null
}
//Map({key:value}) :key是一个字符串
//WeakMap({}) :key是一个对象
const targetMap=new WeakMap()
function getDep(target,key){
    //1.根据对象(target)
    let desMap=targetMap.get(target)
    if(!desMap){
        desMap=new Map()
        targetMap.set(target,desMap)
    }
    //2.取出具体的dep对象
    let dep=desMap.get(key);
    if(!dep){
        dep=new Dep()
        desMap.set(key,dep)
    }
    return dep
}

//vue2对raw进行数据劫持
function reactive(raw){
    Object.keys(raw).forEach(key=>{
        const dep=getDep(raw,key)
        let value=raw[key]
     
            Object.defineProperty(raw,key,{
                get(){
                    //收集依赖
                    dep.depend()
                    return value
    
                },
                set(newValue){
                    //调用notify
                    value=newValue
                    dep.notify()
                }
            })
    })
    return raw
}


//测试代码
const info=reactive({counter:100,name:'why'})
const foo=reactive({height:1.88})


//watchEffect1

watchEffect(function(){
    console.log("effect1",info.counter*2,info.name)
})

info.counter++