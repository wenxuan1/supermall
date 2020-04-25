import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false  // 在生产环境下阻止显示开发环境的警告内容

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
