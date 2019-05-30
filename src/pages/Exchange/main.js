import Vue from 'vue'
import '../../plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';
import vueHeadful from 'vue-headful';
import App from './App.vue'
import VueRouter from 'vue-router';
import router from '../../router.js';
import VueMask from 'v-mask'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';    
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false
Vue.use(VueSweetalert2, {confirmButtonColor: '#0079FF'});
Vue.use(VueRouter);
Vue.use(VueMask);
Vue.use(VueAxios, axios)
Vue.use(Loading);
Vue.component('vue-headful', vueHeadful);

//Vue.prototype.$hostname = 'http://localhost:7071'
Vue.prototype.$hostname = 'https://finarofunc.azurewebsites.net'

new Vue({
  render: h => h(App),router
}).$mount('#app')


