<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <div class="detail-banner">
        <img src="//img1.qunarzz.com/sight/p0/1507/69/3c6917e5686d6457e4dc6cb48982995e.water.jpg_600x330_4bee6da1.jpg" alt="">
      </div>
      <div class="info">
        <div class="title">长隆野生动物世界(AAAAA景区)</div>
        <div class="icon">
          <span class="image iconfont">&#xe635;</span>
          <span class="number">39</span>
        </div>
      </div>
    </div>
    <common-gallary :imgs='imgs' v-show="showGallary" @GallayClose='GallayClose'></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: [
        '//img1.qunarzz.com/sight/p0/1507/69/3c6917e5686d6457e4dc6cb48982995e.water.jpg_600x330_4bee6da1.jpg',
        '//img1.qunarzz.com/sight/p0/1507/69/3c6917e5686d6457e4dc6cb48982995e.water.jpg_600x330_4bee6da1.jpg'
      ]
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    GallayClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    .detail-banner
      height 0
      padding-bottom 55%
    .info
      font-size .3rem
      color #fff
      background-image linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5));
      position absolute
      left 0
      right 0
      bottom 0
      .title
        line-height .8rem
        padding-left .16rem
      .icon
        padding .03rem .08rem
        position absolute
        right .16rem
        bottom .16rem
        width 1.3rem
        text-align center
        border-radius .5rem
        background rgba(0,0,0,.5)
</style>
