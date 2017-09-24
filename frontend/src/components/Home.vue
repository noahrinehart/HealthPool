<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Test</h1>
    <button class="btn btn-primary"</button>
  </div>
</template>

<script>
import auth from '../auth'

export default {
  route: {
    canActivate() {
      return auth.user.authenticated
    }
  }
}
</script>
