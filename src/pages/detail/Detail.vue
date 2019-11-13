<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list='list'></detail-list>
    <div class="height"></div>
  </div>
</template>

<script>
import detailBanner from './components/Banner'
import detailHeader from './components/Header'
import detailList from './components/List'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  data () {
    return {
      list: [{
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }, {
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票 - 某一连锁店销售'
          }, {
            title: '成人三馆联票 - 某二连锁店销售'
          }]
        }, {
          title: '成人四馆联票'
        }]
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.height
  height 20rem
</style>
