<template>
  <!-- <div class="col-sm-6 col-sm-offset-3">
    <h1>Test</h1>
    <button class="btn btn-primary">Test</button>
  </div> -->
  <div>
    <p v-if="greeting">Hello!</p>
  </div>

</template>

<script>
import auth from '../auth'

export default {
  // route: {
  //   beforeEnter() {
  //     return auth.user.authenticated
  //   }
  // },

  data: {
    greeting: true
  }
}
</script>
