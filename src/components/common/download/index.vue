<template>
  <div class="download" @click="handleClick"></div>
</template>

<script>
export default {
  name: 'download',
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '../../../assets/styles/common/varibles.styl'
  .download
    position: fixed
    line-height: 1rem
    color: #fff
    background: black
    left: 0
    right: 0
    top: 0
</style>
