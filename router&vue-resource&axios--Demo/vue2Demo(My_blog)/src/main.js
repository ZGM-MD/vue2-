import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import './assets/main.css'
import Routes from './routers.js'
axios.defaults.baseURL = 'https://vue2demo-blog-default-rtdb.firebaseio.com'
Vue.use(VueRouter)

//自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = 'rgb('+parseInt(Math.random()*256)+', '+parseInt(Math.random()*256)+', '+parseInt(Math.random()*256)+')'
  }
})
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1260px"
    }
    else if(binding.value == 'narrow'){
      el.style.maxWidth ="560px";
    }
    if(binding.arg == 'column'){
      el.style.background = "#6677cc";
      el.style.padding = "20px"
    }
  }
})

//自定义过滤器
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})
Vue.filter("snippet",function(value){
  return value.slice(0,100) + "...";
})

//创建路由
const router = new VueRouter({
  routes:Routes,
  mode:"history"
})

new Vue({//vue2实例化VUE对象写法一
  router:router,
  render: (h) => h(App)//ES6箭头函数写法。使用App作为这个Vue实例的template（同时一并了注册App组件）
}).$mount('#app')
/**
 * vue2实例化VUE对象写法二
new Vue({
  el:'#app'
  render: (h) => h(App)
})
 */
/**
 * vue2实例化VUE对象写法三
new Vue({
  el:'#app',
  template:'<App></App>',
  componentes:{App}
})
 */
