<script>
export default {
  name:"particulars",
  data(){
    return{
        id:this.$route.params.id,
        messages:[]
    }
  },
  methods:{
    
    deleteUser(){
      this.$http.delete("http://localhost:3000/users/" + this.id)
        .then(() =>{
          this.$router.push({path:"/"})
          this.$router.push({path:"/",query:{alert:"用户信息已删除！"}});
        })
    }
  },
  created(){
    this.$http.get("http://localhost:3000/users/" + this.id)
        .then((response) => {
          this.messages = response.data
        })
  }
}
</script>

<template>
  <div class="container">
    <button class="btn btn-default btn-danger delete" data-toggle="modal" data-target="#myModal" >删除</button>
    <!-- 提示弹窗 start-->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> -->
                    <h5 class="modal-title" id="myModalLabel">确认删除吗？</h5>
                </div>
                <!-- <div class="modal-body">
                    ...
                </div> -->
                <button type="button" class="btn btn-primary affirm" @click="deleteUser()" data-dismiss="modal" aria-label="Close">确认</button>
                <button type="button" class="btn btn-primary cancel" data-dismiss="modal" aria-label="Close">取消</button>
                
            </div>
        </div>
    </div>
    <!-- 提示弹窗 end-->
    <router-link class="btn btn-default btn-info" v-bind:to="'/compile/' + id">编辑</router-link>
      <h1 class="page-header">{{messages.name}}</h1>
      <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-phone">  {{messages.phone}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-envelope">  {{messages.email}}</span></li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-tag">  {{messages.degree}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-tag">  {{messages.graduated}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-tag">  {{messages.occ}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-tag">  {{messages.profile}}</span></li>
      </ul>
  </div>
</template>

<style scoped>
.container{
  position: relative;
}
.delete{
  position: absolute;
  right: 17px;
  top: 43px;
}
a{
  position: absolute;
  right: 83px;
  top: 43px;
}
.affirm{
    position: absolute;
    right: 73px;
    top: 10px;
}
.cancel{
  position: absolute;
    right: 10px;
    top: 10px;
}

</style>
