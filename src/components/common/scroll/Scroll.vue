<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BSscroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BSscroll(this.$refs.wrapper, {
        // probeType是否实时侦测(0和1都不侦测,2手指滚动侦测 手指离开惯性滚动不侦测,3只要是滚动都侦测)
        probeType: this.probeType,
        // pullUpLoad上拉加载更多
        pullUpLoad: this.pullUpLoad,
        // 内部点击事件可点击
        click: true
      })
      console.log(this.probeType)
      this.scroll.on('scroll', (position) => {
        this.$emit('scroller', position)
        // console.log(position)
      })
      

      this.scroll.on('pullingUp', () => {
        // console.log("上拉加载更多")
        // 默认这个只能回调一次
        // 两秒后，可以再回调
        this.$emit('pull')
        setTimeout(() => {
          this.scroll.finishPullUp()
        }, 2000)
      })
      // 回到顶部的方法
      this.scroll.scrollTo(0, 0)
    },
  }
</script>

<style scoped>

</style>
