import {router} from '../index'

const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'api/auth/login'
const SIGNUP_URL = API_URL + 'api/auth/register'

export default {
  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, (data) => {
      localStorage.setItem('token', data.token)

      this.user.authenticated = true

      if (redirect) {
        router.go(redirect)
      }

    }).error( (err) => {
      context.error = err.error
    })
  },

  signup(context, creds, redirect) {
    console.log(creds);
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('token', data.token)

      this.user.authenticated = true

      if (redirect) {
        router.go(redirect)
      }

    }).error( (err) => {
      context.error = err.error
    })
  },

  logout() {
    localStorage.removeItem('token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  getAuthHeader() {
    return {
      'Authorization': 'JWT ' + localStorage.getItem('token')
    }
  }
}
