// src/api/axiosInstance.js
import axios from 'axios'

const api = axios.create({
  baseURL: '/', // 실제 서버가 있다면 http://localhost:8080 이런 식으로 변경
  timeout: 3000,
})

export default api
