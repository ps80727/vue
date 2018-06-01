<template>
  <div class="main">
    <city-header></city-header>
    <search :list="list"></search>
    <list class="list"
          :list="list"
          :hotcityList="hotcityList"
          ref="list"></list>
    <sidebar :list="list" @changeLetter="handleLetterChange"></sidebar>
  </div>
</template>

<script>
import CityHeader from './header'
import Search from './search'
import List from './list'
import Sidebar from './sidebar'

import axios from 'axios'

export default {
  name: 'city',
  data () {
    return {
      list: [],
      hotcityList: []
    }
  },
  components: {
    CityHeader,
    Search,
    List,
    Sidebar
  },
  created () {
    this.getListInfo()
  },
  methods: {
    getListInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetListSucc.bind(this))
        .catch(this.handleGetListErr.bind(this))
    },
    handleGetListSucc (res) {
      if (res && res.data.ret) {
        this.list = res.data.data.city
        this.hotcityList = res.data.data.hotcityList
      }
    },
    handleGetListErr () {
      console.log('err')
    },
    handleLetterChange (item) {
      this.$refs.list.scrollToIndex(item)
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '../../assets/styles/common/varibles.styl'
  .main
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    .list
      overflow: hidden
      flex: 1
</style>
