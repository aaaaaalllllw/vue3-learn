//message?->undefined|string
function printMessageLength(message?:string){
    console.log(message!.length);//保证message一定有值
    
}

printMessageLength("Hello World")
printMessageLength