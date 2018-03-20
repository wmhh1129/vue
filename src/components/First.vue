<template>
  <div id="app">
    <router-link to="/">return</router-link>
  </div>

</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss" scoped>
  #app {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: #ccc;
    &::after {
      content: 'x';
      width: 10px;
      height: 10px;
      background-color: yellow;
    }
  }
</style>
