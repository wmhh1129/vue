import axios from 'axios'

axios.defaults.timeout = 5000

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://mock-server.dbjtech.com/mock/5b332ff0eef1ee23a0fc8471/v0'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://mock-server.dbjtech.com/mock/5b332ff0eef1ee23a0fc8471/v0'
}

export default axios
