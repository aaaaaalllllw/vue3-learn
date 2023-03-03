function foo():never{
    //死循环
    while(true){
        
    }
}

function handleMessage(message:string|number) {
    switch(typeof message){
        case 'string':
            console.log("string处理方式处理message")
            break
        case 'number':
            console.log("number处理方式处理message")
            break
    }
}

