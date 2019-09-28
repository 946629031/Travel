<template>
    <div>
      <div class="home-recommend-title">热销推荐</div>
      <ul class="home-recommend-list">
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="home-recommend-img" :src="item.imgUrl" alt="">
          <div>
            <p class="home-recommend-item-title">{{item.title}}</p>
            <p class="home-recommend-item-desc">{{item.desc}}</p>
            <p class="home-recommend-item-price"><span>{{item.price}}</span>起</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1705/35/35ae31e6e6c8032ea3.img.jpg_200x200_7f6d7753.jpg',
        title: '广州国瑞欢乐世界',
        desc: '这次端午六一假日的泡泡之夏主题真是如梦如幻，有泡泡圈套互动游戏，漂亮姐姐带大家花式玩泡泡',
        price: '￥99'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/34/34c81bc0470c6d6f90.water.jpg_200x200_5f2fbb19.jpg',
        title: '广州PORORO主题乐园',
        desc: '这次端午六一假日的泡泡之夏主题真是如梦如幻，有泡泡圈套互动游戏，漂亮姐姐带大家花式玩泡泡',
        price: '￥168'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3c/3c514c20a740128b90.water.jpg_200x200_c7102a23.jpg',
        title: '南沙百万葵园',
        desc: '这次端午六一假日的泡泡之夏主题真是如梦如幻，有泡泡圈套互动游戏，漂亮姐姐带大家花式玩泡泡',
        price: '￥50'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201212/24/3468c8d9e250848093835fbb.png_200x200_8f8a29ee.png',
        title: '望谷温泉度假村',
        desc: '这次端午六一假日的泡泡之夏主题真是如梦如幻，有泡泡圈套互动游戏，漂亮姐姐带大家花式玩泡泡',
        price: '￥156'
      }]
    }
  }
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
        min-width 0
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
