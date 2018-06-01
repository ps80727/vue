<template>
  <div>
    <div class="banner" @click="showGallary">
      <img class="banner-image" :src="this.bannerImg">
    </div>
    <gallary v-show="show" :imgList="imgList" @close="handleGallaryClose"></gallary>
  </div>
</template>

<script>
import Gallary from 'components/common/gallary/gallary'
export default {
  name: 'detail-banner',
  components: {
    Gallary
  },
  props: {
    bannerImg: String,
    imgList: Array
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showGallary () {
      this.show = true
    },
    handleGallaryClose () {
      this.show = false
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '../../assets/styles/common/varibles.styl'
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-image
      width: 100%
</style>
