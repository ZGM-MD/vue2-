<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  computed:{
    products(){
      return this.$store.state.products;
    },
    // saleProducts(){
    //   return this.$store.getters.saleProducts;
    // }
    ...mapGetters([
      "saleProducts"
    ])
  },
  methods:{
    /*reducePrice:function(amount){
      // this.$store.state.products.forEach(product =>{
      //   product.price -= 1;
      // })
      // this.$store.commit('reducePrice')
      this.$store.dispatch('reducePrice',amount)
      
    }*/
    ...mapActions([
      "reducePrice"
    ])
  }
}
</script>

<template>
  <div id="productOne">
    <h2>productOne</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">商品降价</button>
  </div>
</template>

<style scoped>
#productOne{
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#productOne>ul{
  padding: 0;
}
#productOne>ul>li{
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255,255,255,0.7);
}
.price{
  font-weight: bold;
  color: #e8800c;
}
</style>
