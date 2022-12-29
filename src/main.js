import 'babel-polyfill'
import { Promise } from 'es6-promise-polyfill';
import { patchDotEnv } from "../patch.js"
patchDotEnv();

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/vuex-index'


Vue.config.productionTip = false

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import mixin from "./mixin";
Vue.mixin(mixin)
const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
