<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xeb99;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xeb9c;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe65c;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- 添加“scoped”属性以仅将CSS限制到此组件 -->
<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles.styl' // 引入 css变量文件
    .header
        display: flex
        line-height: .86rem
        background: $bgColor // 使用css变量
        color: #fff
        font-size: 16px
        .header-left
            width: .64rem
            float: left
        .header-input
            flex: 1
            background: #fff
            height: .64rem
            line-height: .64rem
            margin: .12rem .1rem 0 .1rem
            border-radius: .1rem
            color: #ccc
        .header-right
            width: 1.24rem
            float: right
            .arrow-icon
              margin-left: -.1rem
</style>
