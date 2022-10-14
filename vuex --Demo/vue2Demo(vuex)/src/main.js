import Vue from 'vue'
import App from './App.vue'
import { store } from './stort/stort.js'

import './assets/main.css'


new Vue({
  store:store,
  render: (h) => h(App)
}).$mount('#app')
