import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/view/goods'
import Test from '@/view/test'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/test/:testId/name/:testName/',
    name: 'HelloWorld',
    component: Test,
  }]
})
