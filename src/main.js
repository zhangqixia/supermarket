import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()  //定义一个原型$bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

