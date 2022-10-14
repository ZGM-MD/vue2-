<script>
export default {
  name:"add-user",
  data(){
    return{
      messages:{
        name:"",
        phone:"",
        email:"",
        degree:"",
        graduated:"",
        occ:"",
        profile:""
      }
    }
  },
  methods:{
    addMessage(e){
      //判断name,phone,email信息是否为空，若为空则弹窗提示，若不为空将填入的信息发送到指定位置
      if(!this.messages.name || !this.messages.phone || !this.messages.email){
        alert("请添加对应的信息")
      }else{
        this.$http.post("http://localhost:3000/users",this.messages)
          .then(() => {
            this.$router.push({path:"/",query:{alert:"用户信息添加成功！"}});
          })
      }
      e.preventDefault();//阻止submit默认事件
    }
  }
}
</script>

<template>
  <div class="customes container ">
      <h1>添加用户</h1>
      <hr>
      <div class="formMash">
        <form action="" v-on:submit="addMessage">
          <label for="">用户信息</label>
          <div class="form-group">
            <label for="">姓名</label>
            <input type="text" class="form-control" v-model="messages.name">
          </div>
          <div class="form-group">
            <label for="">电话</label>
            <input type="text" class="form-control" v-model="messages.phone">
          </div>
          <div class="form-group">
            <label for="">邮箱</label>
            <input type="text" class="form-control" v-model="messages.email">
          </div>
          <div class="form-group">
            <label for="">学历</label>
            <input type="text" class="form-control" v-model="messages.degree">
          </div>
          <div class="form-group">
            <label for="">毕业学校</label>
            <input type="text" class="form-control" v-model="messages.graduated">
          </div>
          <div class="form-group">
            <label for="">职业</label>
            <input type="text" class="form-control" v-model="messages.occ">
          </div>
          <div class="form-group">
            <label for="">个人简介</label>
            <textarea class="form-control" v-model="messages.profile"></textarea>
          </div>
          <button type="submit" class="btn btn-default btn-info btn-block" >保存</button>
        </form>
        
      </div>
     
    </div>
</template>

<style scoped>
#add-user{
  margin-top: 27px;
}
.formMash{
  background: #f4f2f5;
}
form{
  padding: 20px;
}
textarea{
  height: 100px !important;
}
</style>
