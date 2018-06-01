<template>
  <div>
    <div class="search">
      <input type="text"
            class="search-input"
            placeholder="请输入城市名称或拼音"
            @input="handleInputChange">
    </div>
    <div class="search-list" v-show="showList" ref="list">
      <ul>
        <li class="search-item"
            v-for="(item,index) in filterResult"
            :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'city-search',
  props: {
    list: Array
  },
  data () {
    return {
      showList: false,
      filterResult: []
    }
  },
  methods: {
    handleInputChange (e) {
      const value = e.target.value.toLowerCase()
      if (value) {
        this.showList = true
        this.filterResult = this.result.filter((item) => {
          if (item.spell.indexOf(value) > -1 || item.name.indexOf(value) > -1) {
            return true
          }
        })
      } else {
        this.showList = false
      }
    }
  },
  computed: {
    result () {
      const result = []
      for (let i of this.list) {
        for (let j of i.cityList) {
          result.push({
            name: j.name,
            spell: j.spell,
            id: j.id
          })
        }
      }
      return result
    }
  },
  watch: {
    filterResult () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.list)
  }
}
</script>

<style lang='stylus' scoped>
  @import '../../assets/styles/common/varibles.styl'
  .search
    height: .74rem
    background: $bgColor
    padding: 0 .2rem
    .search-input
      line-height: .62rem
      width: 100%
      padding: 0 .2rem
      border-radius: .1rem
      text-align: center
      font-size: .24rem
      color: #666
      box-sizing: border-box
  .search-list
    overflow: hidden
    position: absolute
    z-index: 99
    top: 1.62rem
    left: 0
    right: 0
    bottom: 0
    background: #fff
    .search-item
      padding-left: .2rem
      line-height: .8rem
      background: #fff
      color: #333
      border-bottom: 1px solid #ccc
</style>
