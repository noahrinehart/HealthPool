<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="nav navbar-nav">
          <li><router-link to="home">Home</router-link></li>
          <li v-if="!user.authenticated"><router-link to="login">Login</router-link></li>
          <li v-else-if="!user.authenticated"><router-link to="signup">Login</router-link></li>
          <li v-else-if="user.authenticated"><router-link to="login" @click="logout()">Logout</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import auth from '../auth'

export default {
  data() {
    return {
      user: auth.user
    }
  },

  methods: {
    logout() {
      auth.logout()
    }
  }
}
</script>
