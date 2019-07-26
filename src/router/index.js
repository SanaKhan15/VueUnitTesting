import Vue from 'vue'
import Router from 'vue-router'
import counter from '@/components/counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'counter',
      component: counter
    }
  ]
})
