import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/view/test'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/test/:testId',
    name: 'test',
    component: Test,
  }]
})
