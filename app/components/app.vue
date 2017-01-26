<template>
<div id="app">
  <navbar></navbar>
  <div class="container">
    <h1>{{ message }}</h1>
  </div>
  <router-view></router-view>
</div>
</template>

<script type="text/babel">
export default {
  name: 'app',
  store: ['message'],
  events: {
    test(message) {
      this.message = message
    }
  },
  components: {
    'navbar': require('./nav/navbar.vue')
  }
}
</script>
