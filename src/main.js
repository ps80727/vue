// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from 'store'
import VueLazyload from 'vue-lazyload'
import 'styles/base/reset.css'
import 'styles/base/border.css'
import 'styles/base/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_110x110_4c72dbfd.jpg',
  loading: '//img1.qunarzz.com/sight/p0/1507/44/2fef900d9523f298e4c0ee5bb34be06e.water.jpg_110x110_e598e580.jpg',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
