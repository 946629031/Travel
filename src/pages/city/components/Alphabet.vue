<template>
  <div class="list">
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
  </div>
</template>

<script>
export default{
  name: 'CityAlphabet'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl';
  .list
    position absolute
    right 0
    top 1.78rem
    bottom 0
    display flex
    flex-direction column
    justify-content center
    width .4rem
    text-align center
    .item
      color $bgColor
      line-height .4rem
      font-size .26rem
</style>
