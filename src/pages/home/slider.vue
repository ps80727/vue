<template>
    <swiper :options="swiperOption" class="banner index-banner" v-if="sliders.length">
      <swiper-slide v-for="item of sliders" :key="item.id">
        <img :src="item.img" class="banner-img">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'index-slider',
  props: {
    sliders: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '../../assets/styles/common/varibles.styl'
  .banner
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 31.25%
    background: red
    .banner-img
      width: 100%
  .swiper-pagination >>> .swiper-pagination-bullet-active
    background: #fff
</style>
/*<style lang='stylus'>
  .index-banner
    .swiper-pagination-bullet
      background: #fff
</style>*/
