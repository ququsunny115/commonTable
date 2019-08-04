import axios from 'axios'

var request = axios.create({ // 创建axios实例
    baseUrl: '',
    timeout: 5000 // 响应时间
})

request.interceptors.request.use((config) => { // 请求拦截器
    // 对请求数据做出处理，可以在请求拦截器里设置请求头部header，一般常见有token或者上传文件的content-type设置
    request.defaults.headers.common['token'] = 'my token'
    request.defaults.headers.post['content-type'] = 'application/x-www-form-urlencoded'
    return config
}, (error) => {
    // 在此处可对错误做出处理
    return Promise.reject(error)
})

request.interceptors.response.use((response) => { // 相应拦截器
    // 对相应数据做出处理，例如对返回的不同的状态码的处理及设置相应头部
    return response
}, (error) => {
    //  在此处可对错误做出处理，例如根据不同的response status了我们可以进行不同处理
    return Promise.reject(error)
})

export default request
