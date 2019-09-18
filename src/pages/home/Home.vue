<template>
  <div>
    <home-header></home-header>  <!-- 使用 HomeHeader 组件 -->
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader // 将组件Header，注册位局部组件
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
