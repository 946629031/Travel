<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>  <!-- 使用 HomeSwiper 组件 -->
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper, // 将组件HomeSwiper，注册到局部组件
    HomeIcons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
