import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/',   // 这个baseURL直接拼接在axios的url前面
    timeout: 5000  // 超时5s报错
  })
  // 对实例对象instance的请求拦截 
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  // 对实例对象instance的服务器响应拦截 
  instance.interceptors.response.use(res => {
    return res
  }, err => {
    console.log(err)
  })
  // 发送网络请求
  return instance(config)  // 这个本身就是返回的promise
}