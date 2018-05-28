<template>
  <div class="test">
  	<!-- 动态路由 -->
  	This is id: {{$route.params.testId}}
  	<!-- 嵌套路由 -->
  	<router-link to="/test/title1">标题1</router-link>
  	<router-link to="/test/title2">标题2</router-link>

    <div @click="goToGoods">
        跳转到详情页面
    </div>
    <!-- 命名式路由 -->
    <router-link :to="{ name: 'goods' }">其实我也不想打代码</router-link>
  	<router-view></router-view>
  </div>
</template>
<script>
export default {
    methods: {
        goToGoods() {
            this.$router.push('/goods?goodsId=666')
            // 第二种写法
            this.$router.push({
                path:'/goods',
                query: {
                    goodsId: 666,
                }
            })
        }
    }
}
</script>
<style scoped></style>
