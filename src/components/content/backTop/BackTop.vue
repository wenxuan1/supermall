<template>
  <div class="top">↑</div>
</template>

<script>
export default {
  name: 'BackTop',
}
</script>

<style scoped>
  .top {
    background-color: indigo;
    color: ivory;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    text-align: center;
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
</style>