import _ from 'lodash-es'
import {sum} from './js/sum.js'
import {createApp} from 'vue'
import './css/style.css'
import './css/title.less'
import mul from './ts/mul'
import App from './vue/App.vue'
console.log("Hello World")
console.log(sum(20,30));
console.log(mul(20,30))
console.log(_.join(['abc','cba'],"_"))

const titleEl=document.createElement('div')
titleEl.className="title"
titleEl.innerHTML="Hello Vite"
document.body.appendChild(titleEl)

createApp(App).mount("#app")