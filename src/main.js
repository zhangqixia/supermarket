import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/index.js'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()  //定义一个原型$bus
//安装自定义的toast插件
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

