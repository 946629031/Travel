<template>
    <div>
      <div class="home-weekend-title">周末去哪儿</div>
      <ul class="home-weekend-list">
        <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
          <div class="home-weekend-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="home-weekend-info">
            <p class="home-weekend-item-title">{{item.title}}</p>
            <p class="home-weekend-item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
        title: '广州国瑞欢乐世界',
        desc: '这次端午六一假日的泡泡之夏主题真是如梦如幻，有泡泡圈套互动游戏，漂亮姐姐带大家花式玩泡泡'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
        title: '广州PORORO主题乐园',
        desc: '这次端午六一假日的泡泡之夏主题真是如梦如幻，有泡泡圈套互动游戏，漂亮姐姐带大家花式玩泡泡'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
        title: '南沙百万葵园',
        desc: '这次端午六一假日的泡泡之夏主题真是如梦如幻，有泡泡圈套互动游戏，漂亮姐姐带大家花式玩泡泡'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
        title: '望谷温泉度假村',
        desc: '这次端午六一假日的泡泡之夏主题真是如梦如幻，有泡泡圈套互动游戏，漂亮姐姐带大家花式玩泡泡'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .home-weekend-title
    background #efefef
    line-height 2.7
    font-size .3rem
    text-align left
    padding 0 .3rem
  .home-weekend-list
    .item
      .home-weekend-img
        padding-bottom 37.088%
        height 0
        img
          width 100%
      .home-weekend-info
        min-width 0
        padding 0 .2rem .5rem
        border-bottom 6px solid #f3f3f3
        p
          font-size .3rem
          color #999
          ellipsis()
        .home-weekend-item-title
          font-weight bold
          color #333
          padding-top .2rem
        .home-weekend-item-desc
          line-height .5rem
        .home-weekend-item-price
          line-height .8rem
          span
            color orange
            font-weight bold
            font-size .35rem
            padding-right .1rem
</style>
