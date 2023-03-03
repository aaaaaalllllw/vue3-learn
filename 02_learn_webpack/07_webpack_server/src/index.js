import { sum } from "./js/math.js";
import {createApp} from 'vue'
import axios  from "axios";
const {priceFormat}=require('./js/format.js')
import './js/element.js'

if(module.hot){
    module.hot.accept("./js/element.js",()=>{
        console.log('element模块发生更新')
    })
}
import App from './vue/App.vue'

console.log(sum(20,30))
console.log(priceFormat())

//Vue代码
const app=createApp(App)
app.mount('#app')


axios.get('').then(res=>{})
.catch(err=>{
    
})