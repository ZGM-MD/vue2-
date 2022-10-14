import Vue from 'vue'
import App from './App.vue'
import './assets/main.css'
import VueRouter from 'vue-router'
import axios from 'axios'
// import VueResource from 'vue-resource'
import Home from './components/Home.vue'
import AddUser from './components/AddUser.vue'
import Details from './components/Details.vue'
import Particulars from './components/Particulars.vue'
import Compile from './components/Compile.vue'
Vue.use(VueRouter)
// Vue.use(VueResource)
Vue.prototype.$http = axios;
//配置路由模块
const router = new VueRouter({
  routes:[
       {path:"/",component:Home},
       {path:"/add-user",component:AddUser},
       {path:"/details",component:Details},
       {path:"/Particulars/:id",component:Particulars},
       {path:"/compile/:id",component:Compile},
 ],
 mode:"history"
})
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
