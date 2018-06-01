<template>
  <div ref="scroller">
    <div class="content">
      <transition name="loading">
        <div class="isLoading" v-show="isLoading">正在加载...</div>
      </transition>
      <router-link :to="'/detail/' + item.id"
                    class="item"
                    v-for="item of sights"
                    :key="item.id"
                    tag="div">
        <img v-lazy="item.img" class="item-img">
        <div class="item-content">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
          <div class="item-price">
            <span class="price-tag">&yen;</span>
            {{item.price}}
            <span class="price-start">起</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'index-scroller',
  data () {
    return {
      isLoading: false
    }
  },
  props: {
    sights: Array
  },
  watch: {
    list () {
      this.$nextTick(() => {
        this.scroller.refresh()
      })
    }
  },
  computed: {
    list () {
      return this.sights
    }
  },
  methods: {
    createScroller () {
      this.scroller = new BScroll(this.$refs.scroller, {
        probeType: 2
      })
    },
    bindEvents () {
      this.scroller.on('scroll', this.handleScroll.bind(this))
      this.scroller.on('scrollEnd', this.handleScrollEnd.bind(this))
    },
    handleScroll (e) {
      if (e.y > 50 && !this.isLoading) {
        this.isLoading = true
      }
    },
    handleScrollEnd () {
      this.isLoading = false
    }
  },
  mounted () {
    this.createScroller()
    this.bindEvents()
  }
}
</script>

<style lang='stylus' scoped>
  @import '../../assets/styles/common/varibles.styl'
  .isLoading
    line-height: .8rem
    text-align: center
  .loading-enter-active, .loading-leave-active
    transition: opacity .5s
  .loading-enter, .loading-leave-to
    opacity: 0
  .item
    padding: .24rem
    display: flex
    .item-img
      width: 1.4rem
      height: 1.4rem
      margin-right: .2rem
    .item-content
      flex: 1
      .item-title
        margin: .04rem 0 .1rem 0
        font-size: .3rem
        color: $fontColor
      .item-desc
        margin-top: .2rem
        margin-bottom: .1rem
        font-size: .28rem
        color: $lightFontColor
      .item-price
        margin-top: .2rem
        font-size: .36rem
        color: #ff8300
        .price-tag
          font-size: .24rem
        .price-start
          font-size: .24rem
          color:$lightFontColor
</style>
