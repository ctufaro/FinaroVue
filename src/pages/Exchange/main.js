import Vue from 'vue'
import '../../plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';
import vueHeadful from 'vue-headful';
import App from './App.vue'
import VueRouter from 'vue-router';
import router from '../../router.js';

Vue.config.productionTip = false
Vue.use(VueSweetalert2, {confirmButtonColor: '#0079FF'});
Vue.use(VueRouter);
Vue.component('vue-headful', vueHeadful);

new Vue({
  render: h => h(App),router
}).$mount('#app')
