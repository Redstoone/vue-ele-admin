import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import * as filters from './filters' // 全局vue filter
import Icon from 'vue-awesome'

Vue.config.productionTip = false

Vue.use(ElementUI)

// 注册全局 filter
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.component('icon', Icon)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
