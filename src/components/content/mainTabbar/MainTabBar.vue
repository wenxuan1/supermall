<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <div slot="tabBar-item">
        <i class="iconfont icon-home"></i>
        <div class="item-text">首页</div>
      </div>
    </tab-bar-item>
    <tab-bar-item path="/cate">
      <div slot="tabBar-item">
        <i class="iconfont icon-viewgallery"></i>
        <div class="item-text">分类</div>
      </div>
    </tab-bar-item>
    <tab-bar-item path="/shop">
      <div slot="tabBar-item">
        <i class="iconfont icon-cart"></i>
        <div class="item-text">购物车</div>
      </div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <div slot="tabBar-item">
        <i class="iconfont icon-account"></i>
        <div class="item-text">我的</div>
      </div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from './TabBar'
  import TabBarItem from './TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  .item-text {
    font-size: 15px;
  }
</style>