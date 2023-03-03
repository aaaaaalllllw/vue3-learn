import { createApp } from 'vue'
import App from './04_teleport内置组件/App.vue'
import registerDirectives from './directives/index,'
import pluginObject from './plugins/plugins_object'
const app=createApp(App)

registerDirectives(app)
// app.directive('focus',{
//     mounted(el,bindings,vnode,preVnodes){
//         console.log('focus mounted')
//         el.focus()
//     }
// })

app.use(pluginObject)
app.mount('#app')
