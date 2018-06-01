<template>
  <div class="main">
   <index-header></index-header>
   <slider :sliders="sliders"></slider>
   <icons :icons="icons"></icons>
   <scroller class="scroller" :sights="sights"></scroller>
   <download v-show="download" @close="handleDownLoadClose"></download>
  </div>
</template>

<script>
import IndexHeader from './header'
import Slider from './slider'
import Icons from './icons'
import Scroller from './scroller'
import Download from './download'

import download from 'mixins/download'
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'index',
  mixins: [download],
  data () {
    return {
      sliders: [],
      icons: [],
      sights: [],
      download: false
    }
  },
  components: {
    IndexHeader,
    Slider,
    Icons,
    Scroller,
    Download
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    city () {
      this.getIndexData()
    }
  },
  created () {
    this.getIndexData()
  },
  methods: {
    getIndexData () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.handleDataSucc.bind(this))
        .catch(this.handleDataError.bind(this))
    },
    handleDataSucc (res) {
      if (res && res.data.ret && res.data) {
        this.sliders = res.data.data.slider
        this.icons = res.data.data.icons
        this.sights = res.data.data.sights
        if (!this.city) {
          this.changeCity(res.data.data.city)
        }
      }
    },
    handleDataError () {
      console.log('获取失败')
    },
    showDownload () {
      this.download = true
    },
    handleDownLoadClose () {
      this.download = false
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang='stylus' scoped>
  @import '../../assets/styles/common/varibles.styl'
  .main
    display: flex
    flex-direction: column
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    .scroller
      flex: 1
      overflow: hidden
</style>
