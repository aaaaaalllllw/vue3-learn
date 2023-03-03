class Point<T>{
    x:T
    y:T
    z:T

    constructor(x:T,y:T,z:T){
        this.x=x
        this.y=y
        this.z=z
    }

}

const p1=new Point("12",'11','10')
const p2=new Point <string>("12",'11','10')
const p3:Point<string>=new Point("12",'11','10')

const names1:string[]=['abc','cba']

const names2:Array<string>=["abc","cbd"]

export {}