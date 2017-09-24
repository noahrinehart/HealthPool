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

export var router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
    { path: '*', redirect: '/login' }
  ]
})

new Vue({
  el: '#app',
  router: router,
render: h => h(App)})
