<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default{
  name: 'CitySearch'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl';
  .search
    height .92rem
    padding .1rem
    background $bgColor
    box-sizing border-box
    position relative
    .search-input
      color #666
      box-sizing border-box
      padding 0 .1rem
      height .62rem
      line-height .62rem
      width 96%
      border none
      border-radius .1rem
      text-align center
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      margin auto
</style>
