<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h2>Application</h2>
    <p>Apply to Health Pooled!</p>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      Birthday:
      <input
        type="date"
        class="form-control"
        v-model="form.birthday"
      >
    </div>
    <div class="form-group">
      <input type="radio" name="marriage" id="Married" value="married" checked/>
      <label for="married">Married</label>

      <input type="radio" name="editList" id="Not Married" value="not married"/>
      <label for="not married">Not Married</label>
    </div>
    <div class="form-group">
      <input type="radio" name="editList" id="Male" value="male" checked/>
      <label for="male">Male</label>

      <input type="radio" name="editList" id="Female" value="female"/>
      <label for="female">Female</label>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="List previous healthcare providers"
        v-model="form.previousProviders"
      >
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="List pre-existing conditions"
        v-model="credentials.password"
      >
    </div>
    <h1>...</h1>
    <button class="btn btn-primary" @click="submit()">Apply</button>
  </div>
</template>

<script>
import auth from '../auth'
import {router} from '../index'

export default {
  route: {
    canActivate() {
      return auth.user.authenticated
    }
  },

  methods: {
    submit() {
      router.go('home')
    }
  }
}
</script>
