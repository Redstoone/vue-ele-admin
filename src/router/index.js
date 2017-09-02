import Vue from 'vue'
import Router from 'vue-router'

/* login */
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }]
})
