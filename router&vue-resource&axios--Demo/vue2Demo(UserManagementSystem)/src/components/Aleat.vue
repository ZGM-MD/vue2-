<script>
export default {
  name:"alert",
  props:["message"],
  data(){
    return{

    }
  }
}
</script>

<template>
  <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        {{message}}
  </div>
</template>

<style scoped>
.alert{
  margin-top: 20px;
}
</style>
