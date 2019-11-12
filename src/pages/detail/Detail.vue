<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="height"></div>
  </div>
</template>

<script>
import detailBanner from './components/Banner'
import detailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader
  }
}
</script>

<style lang="stylus" scoped>
.height
  height 20rem
</style>
