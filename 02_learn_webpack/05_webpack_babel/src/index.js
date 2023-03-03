import { sum } from "./js/math.js";
const {priceFormat}=require('./js/format.js')
import './js/element.js'

console.log(sum(20,30))
console.log(priceFormat())

const message="Hello World"
const names=["abc",'cdb',"nba"]

names.forEach(item=>console.log(item))
console.log(message)