<script>
import ProductOne from './components/Product-List-One.vue'
import ProductTwo from './components/Product-List-Two.vue'
export default {
  name:"app",
  data(){
    return{
      
    }
  },
  components:{
    ProductOne,ProductTwo
  }
}
</script>

<template>
  <div id="app">
    <ProductOne ></ProductOne>
    <ProductTwo ></ProductTwo>
  </div>
</template>

<style>
body{
  font-family: Ubuntu;
  color: #555;
}
</style>
