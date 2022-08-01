import axios from 'axios'
import { getToken, setToken } from '@/utils/auth'
import router from '@/router'

const baseURL = process.env.VUE_APP_API_URL;

// Create axios instance
const service = axios.create({
  baseURL,
  timeout: 10000 // Request timeout 100s
})

// Request interceptor
service.interceptors.request.use(async config => {
  // config.headers['Content-Type'] = null
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `${token}`; // Set JWT token
  }
  return config
}, error => {
  // Do something with request error
  console.log(error)
  return Promise.reject(error)
})

// response pre-processing
service.interceptors.response.use(
  response => {
    if (response.headers.authorization) {
      setToken(response.headers.authorization)
      response.data.token = response.headers.authorization
    }
    return response.data
  },
  error => {
    let message = error.message
    if (error.response.data && error.response.data.errors) {
      message = error.response.data.errors
    } else if (error.response.data && error.response.data.error) {
      message = error.response.data.error
    }
    if (error.response.status === 401) {
      router.push('/login')
    }
    console.log('error.response.status',error.response.status)
    console.log(message)
    return Promise.reject(error)
  }
)

export default service