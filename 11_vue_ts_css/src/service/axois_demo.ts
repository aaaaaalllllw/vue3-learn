// import axios from 'axios'

// //axios的实例对象
// // axios
// //   .get('http://httpbin.org/get', {
// //     params: {
// //       name: 'coderwhy',
// //       age: 18
// //     }
// //   })
// //   .then((res) => {
// //     console.log(res.data)
// //   })

// //axios 配置项
// axios.default.baseURL = 'http://httpbin.org'
// axios.default.timeout = 10000

// axios
//   .get('/get', {
//     params: {
//       name: 'coderwhy',
//       age: 18
//     },
//     timeout: 5000,
//     headers: {}
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// //   axios.all
// axios
//   .all([
//     axios.get('/get', { params: { name: 'why', age: 18 } }),
//     axios.post('/post', { data: { name: 'why', age: 18 } })
//   ])
//   .then((res) => {
//     console.log(res[0].data)
//     console.log(res[1].data)
//   })

// //   6.axios的拦截器

// // fn1请求成功，fn2请求失败
// axios.interceptors.request.use(
//   (config) => {
//     //想做的些操作
//     //1.给请求添加token
//     //2.isLoading动画
//     console.log('请求成功的拦截')
//     return config
//   },
//   (err) => {
//     console.log('请求发送错误')
//     return err
//   }
// )

// //fn1:数据响应成功(服务器相应成功 20x)
// axios.interceptors.response.use(
//   (res) => {
//     console.log('响应成功')
//     return res
//   },
//   (err) => {
//     console.log('服务器响应失败')
//     return err
//   }
// )
