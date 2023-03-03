type Method='POST'|'GET'
function request(url:string,method:Method){

 }


//1.
// type Request={
//     url:string,
//     method:Method
// }


// 2.
// request(options.url,options.method as Method)

// 3.
//  const options:Request={
//     url:'https://www.coderwhy.org/abc',
//     method:'POST'
//  } as const

const options:Request={
    url:'https://www.coderwhy.org/abc',
    method:'POST'
 } as
 //method默认推导是string类型
request(options.url,options.method )
 export {}