// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// https://github.com/vuejs/vuefire/blob/master/CHANGELOG.md#vuefire-200-alpha21-vuexfire-300-alpha15-2019-03-22
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
