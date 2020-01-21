import axios from 'axios'
import qs from 'qs'

const request = axios.create({
  timeout: 5000,
  baseURL: 'http://localhost:4654',
  // baseURL: 'http://www.woyunnanyuan.com:3000',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  }
})

request.interceptors.request.use((config) => {
  config.data = qs.stringify(config.data)
  return config
},
(err) => {
  console.log(err)
})

// request.interceptors.response.use(config => {
//   try {
//     config.data = qs.parse(config.data)
//   } catch(error) {
//     console.log('can\'t parse resonse data, maybe it\'s already be parsed')
//   }

export default request
