import Vue from 'vue'
import './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';
import Home from './Home.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueSweetalert2, {confirmButtonColor: '#0079FF'});


new Vue({
  router,
  render: h => h(Home)
}).$mount('#app')
