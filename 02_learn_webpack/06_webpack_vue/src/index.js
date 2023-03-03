import { sum } from "./js/math.js";
import {createApp} from 'vue'
const {priceFormat}=require('./js/format.js')
import './js/element.js'

import App from './vue/App.vue'

console.log(sum(20,30))
console.log(priceFormat())

//Vue代码
const app=createApp(App)
app.mount('#app')