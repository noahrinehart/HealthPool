import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)
import auth from './auth'

Vue.http.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('token');

auth.checkAuth()

export var router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/signup': {
    component: Signup
  },
  '/login': {
    component: Login
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
