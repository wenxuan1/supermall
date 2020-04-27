<template>
  <div id="shop">
    <nav-bar class="shop-nav">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'

  export default {
    name: 'Shop',
    components: {
      NavBar
    },
  }
</script>

<style>
  .shop-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>