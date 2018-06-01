<template>
  <div class="download" @click="handleClick">下载条</div>
</template>

<script>
export default {
  name: 'index-download',
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '../../assets/styles/common/varibles.styl'
  .download
    position: fixed
    line-height: 1rem
    color: #fff
    background: black
    left: 0
    right: 0
    bottom: 0
</style>
