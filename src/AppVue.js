import Vue from 'vue';
import VueRouter from 'vue-router';

let AppVue = {}

AppVue.install = function (Vue) {
  Vue.use(VueRouter);

  Vue.prototype.clientWidth = document.body.clientWidth;
}

export default AppVue;
