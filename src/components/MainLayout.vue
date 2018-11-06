<template>
  <div class="main-layout">
    <header>
      dd
    </header>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from '../basic/header'
  export default {
    name: 'MainLayout',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Header
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
  .main-layout {
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: #f2f7fa;
    flex: 0 1 auto;
    width: 100%;

    header {
      height: 60px;
      flex: 0 0 auto;
      width: 100%;
      background-color: #30b6cb;
    }
  }
</style>
