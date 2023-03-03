function useState(state:any){
    let currentState=state

    const changeState=(newState:any){
        currentState=newState
    }

    const arr:[any,(newState:any)=>void]=[currentState,changeState]
    return arr
}


const [counter,setCounter]=useState(10)
setCounter(1000)


//函数类型
const foo:(()=>void)=()=>{}

export {}