//T也可以有默认类型ss
interface IPerson <T1=string,T2=number>{
    name:T1,
    age:T2
}

const p:IPerson={
    name:'why',
    age:18
}