<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>  <!-- 使用 HomeSwiper 组件 -->
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper, // 将组件HomeSwiper，注册到局部组件
    HomeIcons,
    HomeRecommend
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
