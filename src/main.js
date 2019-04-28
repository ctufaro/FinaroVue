import Vue from 'vue'
import './plugins/vuetify'
import Home from './Home.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Home)
}).$mount('#app')
