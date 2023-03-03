import { createApp } from 'vue'
import { registerGlobal } from './global'
import 'normalize.css'
import './assets/css/index.less'

import hyRequest from './service'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
registerGlobal(app)
app.use(router)
app.use(store)

app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
hyRequest
  .request<DataType>({
    url: 'home/multidata',
    method: 'GET',
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单独请求的config')
        return config
      },
      responseInterceptor: (res) => {
        console.log('单独响应的response')
        return res
      }
    },
    showLoading: true
  })
  .then((res) => {
    console.log(res.success)
    console.log(res.data)
  })
