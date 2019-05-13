// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import * as firebase from "firebase/app";
import 'firebase/firestore'

Vue.use(VueFire)

const firebaseConfig = {
  apiKey: "AIzaSyDdbMQbgqdo83FkG7-VV0Eefp4324Bwt5k",
  authDomain: "booty-track.firebaseapp.com",
  databaseURL: "https://booty-track.firebaseio.com",
  projectId: "booty-track",
  storageBucket: "booty-track.appspot.com",
  messagingSenderId: "422447061893",
  appId: "1:422447061893:web:8c92514c0db1e316"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
