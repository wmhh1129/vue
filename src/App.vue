<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
      <div class="box">
          <span class="child">333</span>
      </div>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
    .box {
        width: 50px;
        height: 50px;
        background-color: #ccc;
        span {
            background-color: #fff;
        }
    }
</style>
