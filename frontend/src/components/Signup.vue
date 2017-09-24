<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Sign Up</h2>
    <p>Sign up and join Health pooled!</p>
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
    <div class="radio">
      <label><input type="radio" id="provider" value="Provider" v-model="credentials.type">Provider</label>
    </div>
    <div class="radio">
      <label><input type="radio" id="patient" value="Patient" v-model="credentials.type">Patient</label>
    </div>
    <button class="btn btn-primary" type="submit" @click="submit()">Sign Up</button>
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
        password: '',
        type: ''
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
        password: this.credentials.password,
        type: this.credentials.type
      }

      auth.signup(this, credentials, 'home')
    }
  }
}
</script>
