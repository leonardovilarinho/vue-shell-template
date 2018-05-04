import { register } from './register'
import hooks from './hooks'
const { NODE_ENV, BASE_URL } = process.env

if (NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    register(`${BASE_URL}service-worker.js`, hooks)
  }
}
