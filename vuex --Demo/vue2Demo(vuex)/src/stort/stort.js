import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store =new Vuex.Store({
    strict:true,//严格模式
    state:{
        products:[
            {name:"郭靖",price:200},
            {name:"杨过",price:140},
            {name:"张三丰",price:20},
            {name:"李广",price:10}
          ]
    },
    getters:{
        saleProducts:(state) =>{
            var saleProducts = state.products.map(product =>{
                return {
                  name:product.name,
                  price:product.price
                }
              })
            return saleProducts;
        }
    },
    mutations:{//mutation可以追查我们的事件
        reducePrice:(state,payload) =>{
            // setTimeout(function() {
            state.products.forEach(product =>{
                product.price -= payload;
            })
            // },3000);
        }
          
    },
    actions:{
        reducePrice:(context,payload) =>{
            context.commit("reducePrice",payload)

        }
    }
})