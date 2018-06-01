export default {
  activated () {
    this.showDownload()
  },
  methods: {
    showDownload () {
      throw new Error('使用common组件需要自己定义')
    }
  }
}
