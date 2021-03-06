import axios from 'axios'
import { rememberToken, getValidToken } from './token'

console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export function viewBearer() {
  console.log(api.defaults.headers.common['Authorization'])
}

export function setToken(token, key) {
  rememberToken(token, key)

  if (token) {
    // Set the Authorization header for all requests in the future
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  else {
    delete api.defaults.headers.common['Authorization']
  }
}

// Validates the token, and if it’s invalid, remove from local storage
export function setTokenForUser () {
  setToken(getValidToken('userToken'), 'userToken')
}
export function setTokenForAdmin () {
  setToken(getValidToken('adminToken'), 'adminToken')
}

export default api
