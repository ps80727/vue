<template>
  <swiper :options="swiperOption" class="icons" v-if="icons.length">
      <swiper-slide v-for="(page,index) of pages" :key="index" class="icons-page">
        <div class="icons-list">
          <div class="icons-item" v-for="item of page" :key="item.id">
            <img :src="item.img" class="icons-img">
            <p class="icons-title">{{item.title}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'index-icons',
  props: {
    icons: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((value, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '../../assets/styles/common/varibles.styl'
  .swiper-pagination >>> .swiper-pagination-bullet-active
    background: $bgColor
  .icons
    width: 100%
    padding-bottom: .8rem
    overflow: hidden
    height: 0
    padding-bottom: 3.4rem
    .icons-list
      display: flex
      flex-wrap: wrap
      .icons-item
        width: 25%
        text-align: center
        padding-top: .3rem
        .icons-img
          width: .66rem
          height: .66rem
        .icons-title
          color: #333
          font-size: .28rem
          margin-top: .16rem
</style>
