<template>
  <div id="app">
    <router-link class="link" to="/helloworld">to hello</router-link>
    <router-link class="link" to="/link">to link</router-link>

    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .link {
    margin: 10px;
  }
</style>
