import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/view/goods'
import Test from '@/view/test'
import MyHeader from '@/components/myHeader'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/test/:testId',
    name: 'test',
    component: Test,
  }]
})
