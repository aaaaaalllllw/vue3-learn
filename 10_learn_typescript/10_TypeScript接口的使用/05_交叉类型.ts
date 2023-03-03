import { type } from 'os';
//一种组合类型的方式:联合类型
type WhyType=number|string

type Direction="left"|"right"|"center"


interface ISwim{
    swimming:()=>void
}

interface IFly{
    flying:()=>void
}

type MyType1=ISwim|IFly

type MyType2=ISwim&IFly