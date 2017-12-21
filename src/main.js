// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import VueResource from 'vue-resource'
import layer from 'vue-layer'
import 'font-awesome/css/font-awesome.min.css'
Vue.prototype.$layer = layer(Vue);
Vue.use(VueResource);
// Vue.http.options.emulateJSON = false;
// Vue.http.options.headers = {
//   'Content-Type': 'application/json',
// }



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
