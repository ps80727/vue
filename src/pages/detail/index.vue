<template>
  <div>
    <banner :bannerImg="bannerImg" :imgList="imgList"></banner>
    <download v-show="download">download</download>
  </div>
</template>

<script>
import Banner from './banner'
import Download from 'components/common/download/index.vue'

import axios from 'axios'
import download from 'mixins/download'

export default {
  name: 'detail',
  mixins: [download],
  data () {
    return {
      bannerImg: '',
      imgList: [],
      download: false
    }
  },
  props: {
    sightId: [Number, String]
  },
  components: {
    Banner,
    Download
  },
  created () {
    this.getDetailInfo()
  },
  watch: {
    sightId () {
      if (this.sightId) {
        this.getDetailInfo()
      }
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.sightId
        }
      })
        .then(this.handleGetDetailSucc.bind(this))
        .catch(this.handleGetDetailErr.bind(this))
    },
    handleGetDetailSucc (res) {
      if (res && res.data.ret) {
        this.bannerImg = res.data.data.bannerImg
        this.imgList = res.data.data.imgList
      } else {
        this.handleGetDetailErr()
      }
    },
    handleGetDetailErr () {
      console.log('error')
    },
    showDownload () {
      this.download = true
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '../../assets/styles/common/varibles.styl'
</style>
