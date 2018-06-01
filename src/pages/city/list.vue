<template>
  <div ref="wrapper">
    <div class="list">
      <div class="area">
        <div class="title">当前位置</div>
        <div class="content">
          <div class="button" @click="handleCityClick(city)">
            <div class="button-text">{{city || '北京'}}</div>
          </div>
        </div>
      </div>
      <div class="area1">
        <div class="title1">热门城市</div>
        <div class="content1">
          <div class="button1"
              v-for="item of hotcityList"
              :key="item.id"
              @click="handleCityClick(item.name)">
            <div class="button-text1">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of list" :key="key" ref="key">
        <div class="title">{{item.classify}}</div>
        <div class="content">
          <div class="content-item"
              v-for='itemInfo of item.cityList'
              :key='itemInfo.id'
              @click="handleCityClick(itemInfo.name)">
            {{itemInfo.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'

export default {
  name: 'city-list',
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.scroller = new BScroll(this.$refs.wrapper)
  },
  props: {
    list: Array,
    hotcityList: Array
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    scrollToIndex (item) {
      console.log(item)
      // this.scroll.scrollToElement(this.$refs[item][0])
    },
    ...mapMutations(['changeCity'])
  },
  activated () {
    this.scroller && this.scroller.refresh()
  }
}
</script>

<style lang='stylus' scoped>
  @import '../../assets/styles/common/varibles.styl'
  .area
    .title
      line-height: .54rem
      padding-left: .3rem
      background: #eee
      color: #616161
      font-size: .26rem
      border-top: 1px solid #9e9e9e
      border-bottom: 1px solid #9e9e9e
    .content
      overflow: hidden
      .button
        float: left
        width:33.33%
        .button-text
          line-height: .6rem
          margin: .2rem
          border: .02rem solid #999
          border-radius:.06rem
          text-align: center
          color: $bgColor
          border: 1px solid $bgColor
  .area1
    .title1
      line-height: .54rem
      padding-left: .3rem
      background: #eee
      color: #616161
      font-size: .26rem
      border-top: 1px solid #9e9e9e
      border-bottom: 1px solid #9e9e9e
    .content1
      overflow: hidden
      padding: 0 .4rem 0 .2rem
      .button1
        float: left
        width:33.33%
        .button-text1
          line-height: .6rem
          margin: .2rem
          border: .02rem solid #999
          border-radius:.06rem
          text-align: center
          color: black
          border: 1px solid #999
  .content-item
    line-height: .7rem
    padding-left: .3rem
    background: #fff
    color: #616161
    font-size: .26rem
    border-bottom: 1px solid #ccc
</style>
