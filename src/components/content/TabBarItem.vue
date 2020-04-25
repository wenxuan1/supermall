<template>
  <div class="tab-bar-item" :style="active" @click="itemClick">
    <slot name="tabBar-item"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    isActive() {
      return this.$route.path == this.path
    },
    active() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err);
    }
  },
}
</script>

<style>
  @import url(http://at.alicdn.com/t/font_1751832_urgxfecgmg.css);
  .tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  padding-top: 8px;
  transition: 0.3s;
  cursor: pointer;
  }
  .tab-bar-item:hover{
    color: rgb(251, 0, 0);
  }
  .active {
    color: crimson;
  }
</style>