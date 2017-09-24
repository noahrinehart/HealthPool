<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Sign Up</h2>
    <p>Sign up for a free account to get some great quotes.</p>
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
    <div class="form-group">
      <input type="radio" name="editList" id="patient" v-model="credentials.type" value="Patient" checked/>
      <label for="patient">Patient</label>

      <input type="radio" name="editList" id="provider" v-model="credentials.type" value="Provider"/>
      <label for="provider">Provider</label>
    </div>
    <button class="btn btn-primary" @click="submit()">Access</button>
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

      auth.signup(this, credentials, 'application')
    }
  }
}
</script>
