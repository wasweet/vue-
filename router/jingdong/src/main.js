import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router/index.js'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
