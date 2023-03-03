function useState<T>(state:T){
    let currentState=state

    const changeState=(newState:T){
        currentState=newState
    }

    const arr:[T,(newState:T)=>void]=[currentState,changeState]
    return arr
}


const [counter,setCounter]=useState(10)
setCounter(1000)