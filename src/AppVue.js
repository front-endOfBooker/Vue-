import Vue from 'vue';
import VueRouter from 'vue-router';
import VHeader from './views/base/components/header.vue'

let AppVue = {}

AppVue.install = function (Vue) {
  Vue.use(VueRouter);

  Vue.component('v-header', VHeader)

  Vue.prototype.clientWidth = document.body.clientWidth;

  Vue.prototype.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
}

export default AppVue;
