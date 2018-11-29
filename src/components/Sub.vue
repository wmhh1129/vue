<template>
  <div>
    我是子组件啊 {{title}}
  </div>
</template>

<script>
  export default {
    name: 'Subb',
    props: ['title']
  }
</script>

<style scoped>

</style>
