import Vue from 'vue';
import 'babel-polyfill';
import App from '../src/app'
import '../assets/css/base.css';
import '../assets/css/demo.css';

import routes from './router'
import VueRouter from 'vue-router';

import AppVue from './AppVue'
console.log(routes)

Vue.use(AppVue)

const router = new VueRouter({
  routes,
})

// Vue.component('my-img', {
//   template: '<img :src="url" />',
//   data() {
//     return {
//       url: require('../assets/img/avatar.png')
//     }
//   }
// })

new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
})

