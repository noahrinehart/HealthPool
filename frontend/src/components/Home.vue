<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Health Pool is still in development!</h1>
  </div>
</template>

<script>
import auth from '../auth'

export default {
  route: {
    beforeEnter() {
      return auth.user.authenticated
    }
  }
}
</script>
