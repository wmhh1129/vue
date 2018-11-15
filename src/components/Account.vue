<template>
  <div class="container">
    <div>我是权限管理</div>
    <Sub></Sub>
  </div>

</template>

<script>
  import Sub from './Sub'
  export default {
    name: 'Account',
    components: {
      Sub
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
  }

</style>
