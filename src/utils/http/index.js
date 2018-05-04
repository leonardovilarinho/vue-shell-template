import axios from 'axios'

const { VUE_APP_API, VUE_APP_TIMEOUT } = process.env

export default axios.create({
  baseURL: VUE_APP_API,
  timeout: VUE_APP_TIMEOUT,
  headers: {
    'Content-Type': 'application/json'
  }
})
