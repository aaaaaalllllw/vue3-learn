import { createApp } from 'vue'
import App from  './08_setup顶层编写方式/App.vue'

const app=createApp(App)
// app.mixin({
//     data(){
//         return{

//         }
//     },
//     methods:{

//     },
//     created(){
//         console.log('全局混入app')
//     }
// })

app.mount('#app')
