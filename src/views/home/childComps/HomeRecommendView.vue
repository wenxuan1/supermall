<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    width: 100%;
    font-size: 12px;
    padding: 15px 0 20px;
    border-bottom: 10px solid #eeeeee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 60px;
    height: 60px;
    margin: 5px;
  }
</style>