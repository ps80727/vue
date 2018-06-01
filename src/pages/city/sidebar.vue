<template>
  <div class="sidebar">
    <div class="sidebar-list">
      <div class="sidebar-item"
            v-for="item in alphabet"
            :key="item"
            @click="handleTouchStart(item)">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'city-sidebar',
  props: {
    list: Array
  },
  computed: {
    alphabet () {
      const arr = []
      for (let i of this.list) {
        arr.push(i.classify)
      }
      return arr
    }
  },
  methods: {
    handleTouchStart (item) {
      this.$emit('changeLetter', item)
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '../../assets/styles/common/varibles.styl'
  .sidebar
    z-index: 9
    position: absolute
    right: 0
    top: 1.62rem
    bottom: 0
    width: .4rem
    .sidebar-list
      width: 100%
      position: absolute
      top: 10%
      .sidebar-item
        text-align: center
        line-height: .36rem
</style>
