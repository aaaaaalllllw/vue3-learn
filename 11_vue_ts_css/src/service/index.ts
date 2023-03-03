//service 统一出口
import HyRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  showLoading: false,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求')
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor(res) {
      return res
    },
    responseInterceptorCatch(error) {
      return error
    }
  }
})
//可以创建两个实例

export default hyRequest
