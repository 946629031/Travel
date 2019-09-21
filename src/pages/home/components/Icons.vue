<template>
    <div class="icons">
      <swiper>
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="img-wrapper">
              <img :src="item.url">
            </div>
            <div class="keywords">{{item.name}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      imgList: [{
        id: '0001',
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        name: '景点门票'
      }, {
        id: '0002',
        url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        name: '广州必游'
      }, {
        id: '0003',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        name: '动植物园'
      }, {
        id: '0004',
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        name: '自然风光'
      }, {
        id: '0005',
        url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        name: '一日游'
      }, {
        id: '0006',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        name: '水上乐园'
      }, {
        id: '0007',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        name: '亲子游'
      }, {
        id: '0008',
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png',
        name: '长隆度假区'
      }, {
        id: '0009',
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/c032ae43b15a3dac34b5e07bb0e46850.png',
        name: '广州塔'
      }, {
        id: '0010',
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png',
        name: '广州融创'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.imgList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) pages[page] = [] // 如果为空
        pages[page].push(item)
      })
      return pages
    }
  },
  mounted () {
    console.log(this.pages)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .icons >>> .swiper-container
    height 0
    padding-bottom: 50%
  .icon
    width: 25%
    padding-bottom: 25%
    height: 0
    float: left
    position: relative
    .img-wrapper
      position: relative
      padding-bottom: 100%
      height: 0
      img
        width: 60%
        position:absolute
        left: 0
        right: 0
        top:0
        bottom: .44rem
        margin: auto
    .keywords
      font-size: .22rem
      height: .44rem
      line-height: .44rem
      position: absolute
      top: 65%
      bottom: 0
      left: 0
      right: 0
      margin: auto
      color: $darkTextColor
</style>
