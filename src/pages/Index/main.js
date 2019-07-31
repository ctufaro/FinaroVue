import Vue from 'vue'
import '../../plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';
import vueHeadful from 'vue-headful';
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from '../../store/store'

Vue.config.productionTip = false
Vue.use(VueSweetalert2, {confirmButtonColor: '#0079FF'});
Vue.component('vue-headful', vueHeadful);
Vue.use(VueAxios, axios)

//Vue.prototype.$hostname = 'http://localhost:7071'
Vue.prototype.$hostname = 'https://finarofunc.azurewebsites.net'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
