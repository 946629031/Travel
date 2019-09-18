<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- 添加“scoped”属性以仅将CSS限制到此组件 -->
<style lang="stylus" scoped>
    .header
        display: flex
        line-height: .86rem
        background: #00bcd4
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
            margin: .12rem 0 0 .2rem
            border-radius: .1rem
            color: #ccc
        .header-right
            width: 1.24rem
            float: right
</style>
