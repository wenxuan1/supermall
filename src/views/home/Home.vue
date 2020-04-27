<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <home-recommend-view :recommends="recommend"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
    <ul>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
      <li>12321</li>
    </ul>
    
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  import TabControl from '../../components/content/tabControl/TabControl'
  

  import HomeRecommendView from './childComps/HomeRecommendView'
  import HomeFeatureView from './childComps/HomeFeatureView'

  import {getHomeMultidata} from '../../network/home'

  export default {
    name: 'Home',
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'news': {page: 0, list: []},
          'sell': {page: 0, list: []},
        }
      }
    },
    components: {
      NavBar,
      TabControl,
      HomeRecommendView,
      HomeFeatureView,
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata()
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend.push(...res.data.data.recommend.list)
        })
      },
    },
  }
</script>

<style>
  #home {
    padding: 44px 0 49px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .tab-control {
    /* 粘性定位 */
    /* position: sticky;
    top: 44px; */
    z-index: 9;
  }
</style>