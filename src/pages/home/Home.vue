<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>  <!-- 使用 HomeSwiper 组件 -->
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
    <div class="copyright border-top"><span>Qunar 京ICP备05021087</span><a class="qn_ml25" href="">意见反馈</a></div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper, // 将组件HomeSwiper，注册到局部组件
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.copyright
  font-size .2rem
  background #f3f3f3
  text-align center
  line-height 4
</style>
