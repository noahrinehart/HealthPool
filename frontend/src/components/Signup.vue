<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Sign Up</h2>
    <p>Sign up and join DHealth!</p>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your first name"
        v-model="credentials.firstName"
      >
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your last name"
        v-model="credentials.lastName"
      >
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your email"
        v-model="credentials.email"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="credentials.password"
      >
    </div>
    <button class="btn btn-primary" @click="submit()">Sign Up</button>
  </div>
</template>

<script>
import auth from '../auth'

export default {

  data() {
    return {
      credentials: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      error: ''
    }
  },

  methods: {

    submit() {

      var credentials = {
        firstName: this.credentials.firstName,
        lastName: this.credentials.lastName,
        email: this.credentials.email,
        password: this.credentials.password
      }

      auth.signup(this, credentials, 'home')
    }
  }
}
</script>
