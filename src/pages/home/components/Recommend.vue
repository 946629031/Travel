<template>
    <div>
      <div class="home-recommend-title">热销推荐</div>
      <ul class="home-recommend-list">
        <li class="item border-bottom">
          <img class="home-recommend-img" src="http://img1.qunarzz.com/sight/p0/1705/35/35ae31e6e6c8032ea3.img.jpg_200x200_7f6d7753.jpg" alt="">
          <div>
            <p class="home-recommend-item-title">广州国瑞欢乐世界</p>
            <p class="home-recommend-item-desc">这次端午六一假日的泡泡之夏主题真是如梦如幻，有泡泡圈套互动游戏，漂亮姐姐带大家花式玩泡泡</p>
            <p class="home-recommend-item-price"><span>￥99</span>起</p>
          </div>
        </li>
        <div style="border-bottom: 1px solid #eaeaea">1</div>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend'
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .home-recommend-title
    background #efefef
    line-height 2.7
    font-size .3rem
    text-align left
    padding 0 .3rem
  .home-recommend-list
    .item
      display flex
      .home-recommend-img
        width 1.9rem
        height 1.9rem
        padding .2rem
      div
        // min-width 0
        p
          font-size .3rem
          color #999
          ellipsis()
        .home-recommend-item-title
          font-weight bold
          color #333
          padding-top .2rem
        .home-recommend-item-desc
          line-height .5rem
        .home-recommend-item-price
          line-height .8rem
          span
            color orange
            font-weight bold
            font-size .35rem
            padding-right .1rem
</style>
